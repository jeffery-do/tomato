import React, {Component} from 'react';
import { StyleSheet, Text, View, NavigatorIOS, Button } from 'react-native';
import PropTypes from 'prop-types';
import HomeView from './HomeView.js';
import TButton from './TButton.js';

export default class HelpScreen extends Component {

  constructor(props, context) {
    super(props)
  }

  render() {
    return (
      <View style={styles.main}>
      <Text>Help</Text>
      <Text>Welcome to the help screen!</Text>
      <Text>Here is some help text</Text>
      <TButton
        text='Go To Home'
        onPress={() => this.props.navigation.navigate('Home')}
      />
      </View>
    );
  }
}

const mockedData = {
  totalFocusTime: 25*3,
  totalBreakTime: 5*3+15*1,
  pomodoros: 3,
  breakPomodoros: 4,
};

const styles = StyleSheet.create({
    main: {
      marginTop: 0,
      paddingHorizontal: 5,
      flex: 1,
    },
    button: {
      flex: 0,
      width: 50,
      height: 50,
    }
});
