import React, {useState} from 'react';
import {Text, View, ImageBackground, Pressable, ScrollView} from 'react-native';
import styles from '../styles/globalStyles';
import weed from '../assets/weed.jpg';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';

const TopShelf = () => {
  const [shelf, setShelf] = useState([]);

  const getData = async () => {
    try {
      console.log('trying');
      const jsonValue = await AsyncStorage.getItem('topShelf');
      console.log(jsonValue);
      return jsonValue != null ? setShelf(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log(e);
    }
  };

  // const clearShelf = () => {
  //   setShelf([]);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  console.log(shelf);
  return (
    <ImageBackground
      source={weed}
      style={styles.backgroundImage}
      imageStyle={{opacity: 0.8}}
    >
      <View style={styles.topShelfContainer}>
        <Text style={styles.topShelfHeading}>The Top Shelf</Text>
        <ScrollView style={styles.topShelfScrollView}>
          {shelf.map((item, index) => {
            return (
              <View style={styles.listItemContainer} key={index}>
                <Text style={styles.topShelfListItem}>
                  {item.starter} {item.flavor} {item.finale}
                </Text>
              </View>
            );
          })}
        </ScrollView>

        <Pressable onPress={() => getData()} style={styles.loadButtonContainer}>
          <Text style={styles.loadButton}>Load my top shelf</Text>
        </Pressable>
        {/* <Pressable
          onPress={() => clearShelf()}
          style={styles.clearButtonContainer}
        >
          <Text style={styles.clearButton}>Clear Shelf</Text>
        </Pressable> */}
      </View>
    </ImageBackground>
  );
};

export default TopShelf;
