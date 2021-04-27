import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles/globalStyles';

const Randomizer = props => {
  return (
    <View style={styles.randomizerContainer}>
      <View style={styles.row}>
        <Text
          style={[
            styles.rowTitle,
            {
              transform: [{rotate: '-25deg'}]
            }
          ]}
        >
          The Starter
        </Text>
        <Text style={styles.resultStarter}>{props.starter}</Text>
        {props.starterLocked ? (
          <Pressable onPress={() => props.unlockStarter()}>
            <MaterialCommunityIcons
              name="lock"
              color={'red'}
              size={30}
              style={styles.lockIcon}
            />
          </Pressable>
        ) : (
          <Pressable onPress={() => props.lockStarter()}>
            <MaterialCommunityIcons
              name="lock-open"
              color={'white'}
              size={30}
              style={styles.lockIcon}
            />
          </Pressable>
        )}
      </View>
      <View style={styles.row}>
        <Text
          style={[
            styles.rowTitle,
            {
              transform: [{rotate: '-25deg'}]
            }
          ]}
        >
          The Flavor
        </Text>
        <Text style={styles.resultFlavor}>{props.flavor}</Text>
        {props.flavorLocked ? (
          <Pressable onPress={() => props.unlockFlavor()}>
            <MaterialCommunityIcons
              name="lock"
              color={'yellow'}
              size={30}
              style={styles.lockIcon}
            />
          </Pressable>
        ) : (
          <Pressable onPress={() => props.lockFlavor()}>
            <MaterialCommunityIcons
              name="lock-open"
              color={'white'}
              size={30}
              style={styles.lockIcon}
            />
          </Pressable>
        )}
      </View>
      <View style={styles.row}>
        <Text
          style={[
            styles.rowTitle,
            {
              transform: [{rotate: '-25deg'}]
            }
          ]}
        >
          The Finale
        </Text>
        <Text style={styles.resultFinale}>{props.finale}</Text>
        {props.finaleLocked ? (
          <Pressable onPress={() => props.unlockFinale()}>
            <MaterialCommunityIcons
              name="lock"
              color={'green'}
              size={30}
              style={styles.lockIcon}
            />
          </Pressable>
        ) : (
          <Pressable onPress={() => props.lockFinale()}>
            <MaterialCommunityIcons
              name="lock-open"
              color={'white'}
              size={30}
              style={styles.lockIcon}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Randomizer;
