import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  NavigatorIOS,
} from 'react-native';
import PropTypes from 'prop-types';

import { Table, Row, Rows } from 'react-native-table-component';
import Timer from './Timer.js';
import { Pomodoros, ShowPomodoros } from './Pomodoro.js'
import TButton from './TButton.js'
import HelpScreen from './HelpScreen.js'

class FlatMode extends Component {
  static propTypes = {
      route: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
      navigator: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props)
    this.state = {
      start: 0,
      now: 0,
      pomodoros: 0,
      pomodoroStepInMin: 1,
    }
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: HelpScreen,
      title: 'Scene ' + nextIndex,
      passProps: {index: nextIndex},
    });
  }

  start = () => {
    const now = new Date().getTime()
    this.setState({
      start: now,
      now,
      pomodoros: 0,
      pomodoroStepInMin: this.state.pomodoroStepInMin,
    })
    this.timer = setInterval(() => {
      this.setState({
        now: new Date().getTime(),
      })
    }, 100)
    this.pomodoroCount = setInterval(() => {
      this.setState({
        pomodoros: Pomodoros(this.state.now - this.state.start, this.state.pomodoroStepInMin)
      })
    }, 1)
  }
  //Pomodoros(now - this.state.start, this.state.pomodoroStepInMin)

  render() {
    const { now, start, pomodoroStepInMin } = this.state
    const timer = now - start
    return (
      <View style={styles.main}>
        <Text>Current Scene: {this.props.title}</Text>
        <Button
          onPress={this._onForward}
          title="Tap me to help screen"
        />
        <Text>Hello World</Text>
        <Table>
          <Row data={['TotalFocusTime', mockedData.totalFocusTime]}/>
          <Row data={['Pomodoros', mockedData.pomodoros]}/>
          <Row data={['TotalBreakTime', mockedData.totalBreakTime]}/>
          <Row data={['BreakPomodoros', mockedData.breakPomodoros]}/>
        </Table>
        <Timer interval={timer}/>
        <ShowPomodoros num={this.state.pomodoros}/>
        <TButton
          text='Start Timer'
          onPress={this.start}
        />
        <TButton
          text='Next Screen'
          onPress={this.start}
        />
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
      paddingHorizontal: 5,
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
export default FlatMode;
