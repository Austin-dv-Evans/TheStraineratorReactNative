import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Home from '../screens/Home';
import TopShelf from '../screens/TopShelf';
import AddToDatabase from '../screens/AddToDatabase';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="red"
        inactiveColor="yellow"
        barStyle={{
          backgroundColor: 'green',
          padding: 10
        }}
        initialRouteName="Home"
        sceneAnimationEnabled={false}
        lazy={false}
        backBehavior="initialRoute"
        shifting={true}
      >
        <Tab.Screen
          name="Top Shelf"
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="heart-plus"
                color={color}
                size={30}
                style={{height: 32, width: 32}}
              />
            ),
          }}
          component={TopShelf}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={30}
                style={{height: 32, width: 32}}
              />
            ),
          }}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="database-plus"
                color={color}
                size={30}
                style={{height: 32, width: 32}}
              />
            ),
          }}
          name="Add To Database"
          component={AddToDatabase}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNav;
