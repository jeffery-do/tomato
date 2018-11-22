import React, { Component } from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';
import moment from 'moment';

function Pomodoros( totalTime, stepMinutes ){
  const duration = moment.duration(totalTime)
  return (Math.round(duration.seconds()*1.0/60/(stepMinutes*1.0/60)))
}

function ShowPomodoros({ num }){
  // pomodoros = []
  // for (let i = start; i <= end; i++) {
  //   pomodoros.push(<Text>
  //     Pomodoro Count: {num}
  //   </Text>)
  // }
  return(
    <View style={styles.pomodoroBox}>
      <Text> Pomodoro Count: {num} </Text>
    {[...Array(num)].map((x, i) =>
        <View key={i}
          style={[styles.outerCircle, {
            width: 5 * 2,
            height: 5 * 2,
            borderRadius: 5,
            flex: 1,
            backgroundColor: 'grey',
          }]}
        />
      )
    }
    </View>
  )
}

const styles = StyleSheet.create({
  pomodoroBox: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
  }
  // timer: {
  //   flex: 1,
  //   textAlign: 'center',
  // },
});

export{
  Pomodoros,
  ShowPomodoros,
}
//
// <Button
//   onPress={onPressLearnMore}
//   title="Learn More"
//   color="#841584"
//   accessibilityLabel="Learn more about this purple button"
// />
