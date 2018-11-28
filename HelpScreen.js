import React, {Component} from 'react';
import { StyleSheet, Text, View, NavigatorIOS, Button } from 'react-native';
import PropTypes from 'prop-types';
import FlatMode from './FlatMode.js';


// export default class App extends React.Component {
//   render() {
//     return <FlatMode/>;
//   }
// }
export default class HelpScreen extends Component {
  static propTypes = {
      route: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
      navigator: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props)
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    this.props.navigator.push({
      component: FlatMode,
      title: 'FlatMode',
      passProps: {title: 'FlatMode'},
    });
  }

  render() {
    return (
      <View style={styles.main}>
      <Button
        onPress={this._onForward}
        title="Go to Timer Screen"
        style={styles.button}
      />
      <Text>Current Scene: {this.props.title}</Text>
      <Text>Help</Text>
      <Text>Welcome to the help screen!</Text>
      <Text>Here is some help text</Text>
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
      marginTop: 90,
      paddingHorizontal: 5,
      flex: 1,
    },
    button: {
      flex: 0,
      width: 50,
      height: 50,
    }
});
