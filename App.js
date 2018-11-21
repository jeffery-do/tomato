import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  Timer,
} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import timer from './timer.js';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text> Hello World </Text>
        <Table>
          <Row data={['TotalFocusTime', mockedData.totalFocusTime]}/>
          <Row data={['Pomodoros', mockedData.pomodoros]}/>
          <Row data={['TotalBreakTime', mockedData.totalBreakTime]}/>
          <Row data={['BreakPomodoros', mockedData.breakPomodoros]}/>
        </Table>
        {/*<timer interval={1234567}*/}
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

});




// Timer
// result of Timer
// circle view (colored)
//    - Pomodoro
//    - Break Time
// conversion of break time into break pomodoros
// focus time

// 5 minute 3 times
// 15 minute 1 time


// total time
// or chunks

// total time
// chunked time as interface

// how to test it
// total time View
// chunked time
// mock data
