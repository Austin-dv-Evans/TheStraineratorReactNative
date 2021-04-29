import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import weed from '../assets/weed.jpg';
import styles from '../styles/globalStyles';

const AddToDatabase = () => {
  return (
    <ImageBackground
      source={weed}
      style={styles.backgroundImage}
      imageStyle={{opacity: 0.8}}
    >
      <View>
        <Text>This is Database Screen</Text>
      </View>
    </ImageBackground>
  );
};

export default AddToDatabase;
