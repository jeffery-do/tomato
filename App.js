import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import Timer from './timer.js';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      start: 0,
      now: 0,
      laps: [],
    }
  }

  start = () => {

  }

  render() {
    return (
      <View style={styles.main}>
        <Text> Hello World </Text>
        <Table>
          <Row data={['TotalFocusTime', mockedData.totalFocusTime]}/>
          <Row data={['Pomodoros', mockedData.pomodoros]}/>
          <Row data={['TotalBreakTime', mockedData.totalBreakTime]}/>
          <Row data={['BreakPomodoros', mockedData.breakPomodoros]}/>
        </Table>
        <Timer interval={1234567}/>
        <Text> XYZ </Text>
      </View>
    );
  }
}

// function Timer({ interval }){
//   const duration = moment.duration(interval)
//   const centiseconds = Math.floor(duration.milliseconds()/10)
//   return(
//       <Text style={styles.timer}>
//         {duration.minutes()}:{duration.seconds()},{centiseconds}
//       </Text>
//   )
// }

const mockedData = {
  totalFocusTime: 25*3,
  totalBreakTime: 5*3+15*1,
  pomodoros: 3,
  breakPomodoros: 4,
};

const styles = StyleSheet.create({
    main: {
      marginTop: 35,
    }
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
