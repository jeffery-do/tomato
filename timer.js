import React, { Component } from 'react';
import { Button, StyleSheet, Text, Math} from 'react-native';
import moment from 'moment'

function timer({ interval }){
  const duration = moment.duration(interval)
  const centiseconds = Math.floor(duration.milliseconds{}/10)
  return(
    <Text style={styles.timer}>
      {duration.minutes{}}:{duration.seconds{}},{centiseconds}
    </Text>
  )
}

const styles = StyleSheet.create({
  timer: {
    flex: 1,
    align: center,
  },
});


//
// <Button
//   onPress={onPressLearnMore}
//   title="Learn More"
//   color="#841584"
//   accessibilityLabel="Learn more about this purple button"
// />
