
import { useAppSelector } from '@src/hooks';
import { userActions } from '@store/user';
import { User } from '@store/user/user.types';
import { useCallback } from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const state = useAppSelector((state) => state.user);
  console.log(state);

  const onButtonPress = useCallback(() => {
    const user: User = {
      name: 'Vinicius'
    };

    dispatch(userActions.setUser(user));
  }, []);

	return (
		<View>
			<Text>Home Screen</Text>
      <Button
        onPress={onButtonPress}
        title="Learn More"
        accessibilityLabel="Learn more about this purple button"
      />
		</View>
	);
};

export default HomeScreen;
