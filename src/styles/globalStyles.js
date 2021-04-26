import React from 'react';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  ////// HOME PAGE ////////
  heading: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 40,
    backgroundColor: 'yellow',
    padding: 30,
    marginTop: 60,
    textAlign: 'center',
    borderRadius: 12,
    overflow: 'hidden',
    color: 'brown',
  },
  headingTwoText: {
    fontSize: 20,
    backgroundColor: 'yellow',
    padding: 30,
    textAlign: 'center',
    margin: 8,
    borderRadius: 12,
    overflow: 'hidden',
    color: 'brown',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'rgb(255, 0, 0)',
  },
  bottom: {
    alignItems: 'center',
  },
  buttonContainerOne: {
    backgroundColor: 'rgba(255, 255, 0, 0.9)',
    margin: 10,
    padding: 10,
    borderRadius: 20,
    width: 200,
    flexDirection: 'row',
    borderBottomColor: 'green',
    borderBottomWidth: 4,
    justifyContent: 'space-between',
  },
  buttonContainerTwo: {
    backgroundColor: 'rgba(255, 255, 0, 0.9)',
    margin: 10,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    borderBottomColor: 'green',
    borderBottomWidth: 4,
    justifyContent: 'space-between',
  },
  generateButton: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'brown',
    textAlign: 'center',
    width: 250,
  },
  topShelfButton: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'brown',
    textAlign: 'center',
  },

  // RANDOMIZER COMPONENT //

  randomizerContainer: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginBottom: 25,
  },
  rowTitle: {
    color: 'white',
    fontSize: 20,
    position: 'absolute',
    top: 20,
    left: 0,
    zIndex: 3,
  },
  resultStarter: {
    fontSize: 40,
    color: 'red',
    fontWeight: '700',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 12,
  },
  resultFlavor: {
    fontSize: 40,
    color: 'yellow',
    fontWeight: '700',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 12,
  },
  resultFinale: {
    fontSize: 40,
    color: 'green',
    fontWeight: '700',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 12,
  },
  lockIcon: {},
});
