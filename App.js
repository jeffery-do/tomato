import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeView from './HomeView.js';
import HelpView from './HelpView.js';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeView
    },
    Help: {
      screen: HelpView
    },
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);
