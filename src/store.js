// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const save = async (text, createdAt) => {
  const key = `${createdAt}`; // (2)
  // (3)
  const value = JSON.stringify({
    text,
    createdAt,  
  });

//   console.log(key,value);

    await AsyncStorage.setItem(key, value); // (1)
    const keys = await AsyncStorage.getAllKeys();
    keys.sort();
    // console.log(keys);
    const entryList = await AsyncStorage.multiGet(keys);  
    // console.log(entryList);

    entryList.map(entry => JSON.parse(entry[1]));
    // console.log("map",entryList);
};

export const loadAll = async () => {
    // console.log("loadAll");
    const keys = await AsyncStorage.getAllKeys();
    keys.sort();
    // console.log(keys);
    const entryList = await AsyncStorage.multiGet(keys);
    return entryList;
    //  return entryList.map(entry => {
    //     JSON.parse(entry[1])
    // });
};