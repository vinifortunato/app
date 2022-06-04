import AsyncStorage from '@react-native-async-storage/async-storage';

const load = async () => {
  const data = await AsyncStorage.getItem('@app');
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const save = async (data: any) => {
  const jsonData = JSON.stringify(data);
  await AsyncStorage.setItem('@app', jsonData);
};

const dataStorage = {
  load,
  save
};

export default dataStorage;
