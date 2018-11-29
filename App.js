import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FlatMode from './FlatMode.js';
import HelpScreen from './HelpScreen.js';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: FlatMode
    },
    Help: {
      screen: HelpScreen
    },
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);
