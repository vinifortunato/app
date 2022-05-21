import { useCallback } from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks';
import { userActions } from '../store/user';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const state = useAppSelector((state) => state.user);
  console.log(state);

  const onButtonPress = useCallback(() => {
    const user = {
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
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
		</View>
	);
};

export default HomeScreen;
