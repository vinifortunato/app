import { SplashHandlerProps } from './SplashHandler.types';
import * as Styles from './SplashHandler.styles';
import { Animated } from 'react-native';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { User } from '@store/user/user.types';
import { userActions } from '@store/user';
import { entriesActions } from '@store/entries';
import { dataStorage } from '@src/utils';
import { Entry } from '@store/entries/entries.types';

const SplashHandler = ({ testId = 'default' }: SplashHandlerProps) => {
  const dispatch = useDispatch();

  const opacity = useRef(new Animated.Value(1)).current;

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isReady) {
      return;
    }
    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }
    ).start();
  }, [opacity, isReady]);

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
          createdAt: rawEntry.createdAt,
          date: rawEntry.date,
          deletedAt: rawEntry.deletedAt,
          id: rawEntry.id,
          notes: rawEntry.notes,
          status: rawEntry.status,
          title: rawEntry.title,
          type: rawEntry.type,
          updatedAt: rawEntry.updatedAt,
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

      await new Promise(resolve => setTimeout(resolve, 1000));
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

  return (
    <Styles.Wrapper
      data-testid={testId}
      style={{ opacity }}
      pointerEvents={isReady ? 'none' : 'auto'}
    >
      <Styles.Title>App</Styles.Title>
    </Styles.Wrapper>
  );
};

export default SplashHandler;
