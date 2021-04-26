import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles/globalStyles';

const Randomizer = () => {
  return (
    <View style={styles.randomizerContainer}>
      <View style={styles.row}>
        <Text style={[styles.rowTitle, {transform: [{rotate: '-25deg'}]}]}>
          The Starter
        </Text>
        <Text style={styles.resultStarter}>Colorado</Text>
        <MaterialCommunityIcons
          name="lock"
          color={'black'}
          size={30}
          style={styles.lockIcon}
        />
      </View>
      <View style={styles.row}>
        <Text style={[styles.rowTitle, {transform: [{rotate: '-25deg'}]}]}>
          The Flavor
        </Text>
        <Text style={styles.resultFlavor}>Gangsta</Text>
        <MaterialCommunityIcons
          name="lock"
          color={'black'}
          size={30}
          style={styles.lockIcon}
        />
      </View>
      <View style={styles.row}>
        <Text style={[styles.rowTitle, {transform: [{rotate: '-25deg'}]}]}>
          The Finale
        </Text>
        <Text style={styles.resultFinale}>Funk</Text>
        <MaterialCommunityIcons
          name="lock"
          color={'black'}
          size={30}
          style={styles.lockIcon}
        />
      </View>
    </View>
  );
};

export default Randomizer;
