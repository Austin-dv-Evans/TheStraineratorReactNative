import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  ////// HOME PAGE ////////
  heading: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  },
  headingText: {
    fontSize: 40,
    backgroundColor: 'rgba(255, 255, 0, .9)',
    padding: 25,
    marginTop: 55,
    textAlign: 'center',
    borderRadius: 12,
    overflow: 'hidden',
    color: 'green',
    fontWeight: 'bold',
    borderColor: 'rgba(205,255,105,0.9)',
    borderWidth: 5
  },
  headingTwoText: {
    fontSize: 20,
    backgroundColor: 'rgba(255, 255, 0, .9)',
    padding: 20,
    textAlign: 'center',
    marginTop: 8,
    borderRadius: 12,
    overflow: 'hidden',
    color: 'brown',
    fontWeight: 'bold',
    borderColor: 'rgba(205,255,105,0.9)',
    borderWidth: 5
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'rgb(0, 0, 0)'
  },
  bottom: {
    alignItems: 'center'
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
    shadowOffset: {width: 10, height: 15},
    shadowOpacity: 0.9,
    shadowRadius: 3
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
    shadowOffset: {width: 10, height: 15},
    shadowOpacity: 0.9,
    shadowRadius: 3
  },
  generateButton: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'brown',
    textAlign: 'center',
    width: 250,
    shadowColor: 'black'
  },
  topShelfButton: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'brown',
    textAlign: 'center'
  },

  // RANDOMIZER COMPONENT //

  randomizerContainer: {
    justifyContent: 'space-between',
    width: '100%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25
  },
  rowTitle: {
    color: 'rgba(205,255,105,0.9)',
    fontSize: 20,
    zIndex: 3,
    textShadowColor: 'white',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 3
  },
  resultStarter: {
    fontSize: 40,
    color: 'red',
    fontWeight: '700',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 12,
    marginLeft: -50,
    zIndex: 4,
    shadowOffset: {width: 10, height: 15},
    shadowOpacity: 0.9,
    shadowRadius: 3
  },
  resultFlavor: {
    fontSize: 40,
    color: 'yellow',
    fontWeight: '700',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 12,
    marginLeft: -50,
    zIndex: 4,
    shadowOffset: {width: 10, height: 15},
    shadowOpacity: 0.9,
    shadowRadius: 3
  },
  resultFinale: {
    fontSize: 40,
    color: 'green',
    fontWeight: '700',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 12,
    marginLeft: -50,
    zIndex: 4,
    shadowOffset: {width: 10, height: 15},
    shadowOpacity: 0.9,
    shadowRadius: 3
  },
  lockIcon: {
    marginRight: 20
  },

  // Top Shelf Page
  topShelfContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  topShelfHeading: {
    color: 'yellow',
    fontSize: 40,
    marginTop: 50
  },
  topShelfListItem: {
    color: 'white',
    fontSize: 25,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4,
    marginTop: 30,
    textAlign: 'center',
  },
  listItemContainer: {
    borderBottomColor: 'yellow',
    borderBottomWidth: 6,
    marginBottom: 25,
    marginTop: 15,
  },
  loadButtonContainer: {
    backgroundColor: 'yellow',
    fontWeight: 'bold',
    margin: 5,
    borderRadius: 20
  },
  clearButtonContainer: {
    backgroundColor: 'yellow',
    fontWeight: 'bold',
    margin: 5,
    borderRadius: 20
  },
  loadButton: {
    color: 'black',
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold'
  },
  clearButton: {
    color: 'black',
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold'
  }
});
