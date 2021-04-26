import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from '../screens/Home';
// import FormScreen from "../screens/FormScreen"
// import DatabaseScreen from "../screens/DatabaseScreen"
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="red"
        inactiveColor="yellow"
        // eslint-disable-next-line react-native/no-inline-styles
        barStyle={{
          backgroundColor: 'darkgreen',
          padding: 20,
        }}
        initialRouteName="Home"
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
              />
            ),
          }}
          component={Home}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="database-search"
                color={color}
                size={30}
              />
            ),
          }}
          name="DatabaseScreen"
          component={Home}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNav;
