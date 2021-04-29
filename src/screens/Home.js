// React
import React, {useState} from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
// Styles
import styles from '../styles/globalStyles';
// Assets
import weed from '../assets/weed.jpg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Componentes
import Randomizer from '../components/Randomizer';
// Data
import starterCollection from '../Starter';
import flavorCollection from '../Flavor';
import finaleCollection from '../Finale';
// Librarys
import AsyncStorage from '@react-native-async-storage/async-storage';
const Home = () => {
  const [starter, setStarter] = useState('Colorado');
  const [flavor, setFlavor] = useState('gangsta');
  const [finale, setFinale] = useState('funk!');

  const [starterLocked, setStarterLocked] = useState(false);
  const [flavorLocked, setFlavorLocked] = useState(false);
  const [finaleLocked, setFinaleLocked] = useState(false);

  const lockStarter = () => setStarterLocked(true);

  const lockFlavor = () => setFlavorLocked(true);

  const lockFinale = () => setFinaleLocked(true);

  const unlockStarter = () => setStarterLocked(false);

  const unlockFlavor = () => setFlavorLocked(false);

  const unlockFinale = () => setFinaleLocked(false);

  const generate = () => {
    if (flavorLocked && finaleLocked && !starterLocked) {
      setStarter(
        starterCollection[Math.floor(Math.random() * starterCollection.length)]
      );
    }
    if (starterLocked && flavorLocked && !finaleLocked) {
      setFinale(
        finaleCollection[Math.floor(Math.random() * finaleCollection.length)]
      );
    }
    if (starterLocked && finaleLocked && !flavorLocked) {
      setFlavor(
        flavorCollection[Math.floor(Math.random() * flavorCollection.length)]
      );
    }
    if (starterLocked && !flavorLocked && !finaleLocked) {
      setFlavor(
        flavorCollection[Math.floor(Math.random() * flavorCollection.length)]
      );
      setFinale(
        finaleCollection[Math.floor(Math.random() * finaleCollection.length)]
      );
    }
    if (flavorLocked && !starterLocked && !finaleLocked) {
      setStarter(
        starterCollection[Math.floor(Math.random() * starterCollection.length)]
      );
      setFinale(
        finaleCollection[Math.floor(Math.random() * finaleCollection.length)]
      );
    }
    if (finaleLocked && !starterLocked && !flavorLocked) {
      setStarter(
        starterCollection[Math.floor(Math.random() * starterCollection.length)]
      );
      setFlavor(
        flavorCollection[Math.floor(Math.random() * flavorCollection.length)]
      );
    }
    if (!starterLocked && !flavorLocked && !finaleLocked) {
      setStarter(
        starterCollection[Math.floor(Math.random() * starterCollection.length)]
      );
      setFlavor(
        flavorCollection[Math.floor(Math.random() * flavorCollection.length)]
      );
      setFinale(
        finaleCollection[Math.floor(Math.random() * finaleCollection.length)]
      );
    }
  };

  const saveItem = async (val1, val2, val3) => {
    const shelfItemToBeSaved = {starter: val1, flavor: val2, finale: val3};
    const existingShelfItems = await AsyncStorage.getItem('topShelf');
    let newItem = JSON.parse(existingShelfItems);
    if (!newItem) {
      newItem = [];
    }
    newItem.push(shelfItemToBeSaved);
    storeData(newItem);
  };

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('topShelf', jsonValue);
    } catch (e) {
      console.log(e);
    }
    console.log('done', value);
  };

  return (
    <ImageBackground
      source={weed}
      style={styles.backgroundImage}
      imageStyle={{opacity: 0.8}}
    >
      <View style={styles.heading}>
        <View style={styles.top}>
          <Text style={styles.headingText}>The Strainerator</Text>
          <Text style={styles.headingTwoText}>
            Create Your Custom Weed Strain!
          </Text>
        </View>

        <Randomizer
          starter={starter}
          flavor={flavor}
          finale={finale}
          starterLocked={starterLocked}
          flavorLocked={flavorLocked}
          finaleLocked={finaleLocked}
          lockStarter={lockStarter}
          unlockStarter={unlockStarter}
          lockFlavor={lockFlavor}
          unlockFlavor={unlockFlavor}
          lockFinale={lockFinale}
          unlockFinale={unlockFinale}
        />

        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.buttonContainerOne}
            onPress={() => saveItem(starter, flavor, finale)}
          >
            <MaterialCommunityIcons name="heart-plus" color="red" size={20} />
            <Text style={styles.topShelfButton}>Top Shelf</Text>
            <MaterialCommunityIcons name="heart-plus" color="red" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainerTwo}
            onPress={() => generate()}
          >
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
