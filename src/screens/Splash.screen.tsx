import { ScreenStyles } from '@src/styles';
import { dataStorage } from '@src/utils';
import { entriesActions } from '@store/entries';
import { Entry } from '@store/entries/entries.types';
import { userActions } from '@store/user';
import { User } from '@store/user/user.types';
import { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ScreenProps } from './Screen.types';

const SplashScreen = ({ navigation }: ScreenProps) => {
  const dispatch = useDispatch();

  const [isReady, setIsReady] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const assemblyUser = useCallback((rawUser: any) => {
    try {
      const { name } = rawUser;

      const user: User = {
        name
      };

      dispatch(userActions.set(user));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Can\'t assembly user from dataStorage');
    }
  }, [dispatch]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const assemblyEntries = useCallback((rawEntries: Array<any>) => {
    try {
      const entries: Array<Entry> = rawEntries.map((rawEntry): Entry => {
        return {
          amount: rawEntry.amount,
          id: rawEntry.amount,
          title: rawEntry.title,
          type: rawEntry.type
        };
      });

      dispatch(entriesActions.set(entries));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Can\'t assembly entries from dataStorage');
    }
  }, [dispatch]);

  const initialize = useCallback(async () => {
    try {
      const storedData = await dataStorage.load();
      if (storedData) {
        // User
        const rawUser = storedData.user;
        rawUser && assemblyUser(rawUser);

        // entries
        const rawEntries = storedData.entries;
        rawEntries && assemblyEntries(rawEntries);
      }

      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Can\'t read data from dataStorage');
    } finally {
      setIsReady(true);
    }
  }, [assemblyEntries, assemblyUser]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    if (!isReady) {
      return;
    }
    navigation.navigate('Home');
  }, [isReady, navigation]);

	return (
		<ScreenStyles.Wrapper>
      <ScreenStyles.Container>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>App 👋</Text>
        </View>
      </ScreenStyles.Container>
		</ScreenStyles.Wrapper>
	);
};

export default SplashScreen;
