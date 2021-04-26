import React from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import styles from '../styles/globalStyles';
import weed from '../assets/weed.jpg';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Randomizer from '../components/Randomizer';

const Home = () => {
  return (
    <ImageBackground
      source={weed}
      style={styles.backgroundImage}
      imageStyle={{opacity: 0.7}}
    >
      <View style={styles.heading}>
        <View style={styles.top}>
          <Text style={styles.headingText}>The Strainerator</Text>
          <Text style={styles.headingTwoText}>
            Create Your Custom Weed Strain!
          </Text>
        </View>

        <Randomizer />

        <View style={styles.bottom}>
          <TouchableOpacity style={styles.buttonContainerOne}>
            <MaterialCommunityIcons name="heart-plus" color="red" size={20} />
            <Text style={styles.topShelfButton}>Top Shelf</Text>
            <MaterialCommunityIcons name="heart-plus" color="red" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainerTwo}>
            <MaterialCommunityIcons
              name="rotate-3d-variant"
              color="brown"
              size={20}
            />
            <Text style={styles.generateButton}>Generate</Text>
            <MaterialCommunityIcons
              name="rotate-3d-variant"
              color="brown"
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;
