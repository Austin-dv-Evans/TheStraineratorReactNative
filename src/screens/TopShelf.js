import React, {useState, useEffect} from 'react';
import {Text, View, ImageBackground, Pressable} from 'react-native';
import styles from '../styles/globalStyles';
import weed from '../assets/weed.jpg';

import AsyncStorage from '@react-native-async-storage/async-storage';

const TopShelf = () => {
  const [shelf, setShelf] = useState([]);

  const getData = async () => {
    try {
      const value1 = await AsyncStorage.getItem('starter');
      const value2 = await AsyncStorage.getItem('flavor');
      const value3 = await AsyncStorage.getItem('finale');
      // if (value1 !== null && value2 !== null && value3 !== null) {
      //   setShelf([value1, value2, value3]);
      // }
      setShelf([value1, value2, value3]);
    } catch (e) {
      console.log(e);
    }
    console.log(shelf);
  };

  return (
    <ImageBackground
      source={weed}
      style={styles.backgroundImage}
      imageStyle={{opacity: 0.8}}
    >
      <View style={styles.heading}>
        <Text>This is the top Shelf</Text>
      </View>
      <Pressable onPress={() => getData()}>
        <Text>Load my top shelf</Text>
      </Pressable>
    </ImageBackground>
  );
};

export default TopShelf;
