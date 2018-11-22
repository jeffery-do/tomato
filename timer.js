import React, { Component } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import moment from 'moment';

function Timer({ interval }){
  const duration = moment.duration(interval)
  const centiseconds = Math.floor(duration.milliseconds()/10)
  return(
      <Text>
        {duration.minutes()}:{duration.seconds()},{centiseconds}
      </Text>
  )
}

const styles = StyleSheet.create({
  // timer: {
  //   flex: 1,
  //   textAlign: 'center',
  // },
});

export default Timer;
//
// <Button
//   onPress={onPressLearnMore}
//   title="Learn More"
//   color="#841584"
//   accessibilityLabel="Learn more about this purple button"
// />
