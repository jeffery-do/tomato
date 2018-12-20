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

import { Table, Row, Rows } from 'react-native-table-component';
import { Pomodoros, ShowPomodoros } from './Pomodoro.js';
import TButton from './TButton.js';
import Timer from './Timer.js';

class HomeView extends Component {

  constructor(props, context) {
    super(props)
    this.state = {
      start: 0,
      now: 0,
      pomodoros: 0,
      pomodoroStepInMin: 1,
    }
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

  render() {
    const { now, start, pomodoroStepInMin } = this.state
    const timer = now - start
    return (
      <View style={styles.main}>
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
          text='Go To Help'
          onPress={() => this.props.navigation.navigate('Help')}
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
    }
});

export default HomeView;
