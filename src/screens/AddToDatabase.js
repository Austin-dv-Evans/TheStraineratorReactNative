import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import weed from '../assets/weed.jpg';
import styles from '../styles/globalStyles';

const AddToDatabase = () => {
  const [newStarter, setNewStarter] = useState('');
  const [newFlavor, setNewFlavor] = useState('');
  const [newFinale, setNewFinale] = useState('');

  return (
    <ImageBackground
      source={weed}
      style={styles.backgroundImage}
      imageStyle={{opacity: 0.8}}
    >
      <View style={styles.databaseContainer}>
        <Text style={styles.dbHeading}>Add to Your Database</Text>
        <KeyboardAvoidingView behavior="padding" style={styles.dbFormContainer}>
          <TextInput
            onChangeText={setNewStarter}
            style={styles.dbInput1}
            placeholder="Add a Starter"
            placeholderTextColor="#ffffff"
          />
          <TextInput
            onChangeText={setNewFlavor}
            style={styles.dbInput2}
            placeholder="Add a Flavor"
            placeholderTextColor="#ffffff"
          />
          <TextInput
            onChangeText={setNewFinale}
            style={styles.dbInput3}
            placeholder="Add a Finale"
            placeholderTextColor="#ffffff"
          />
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
};

export default AddToDatabase;
