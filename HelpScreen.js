import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native';
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

  constructor(props) {
    super(props)
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: FlatMode,
      title: 'Scene ' + nextIndex,
      passProps: {index: nextIndex},
    });
  }

  render() {
    return (
      <View style={styles.main}>
        <Text>Current Scene: {this.props.title}</Text>
        <Button
          onPress={this._onForward}
          title="Tap me to go to Timer Screen"
        />
        <Text> Help </Text>
        <Text> Welcome to he help screen! </Text>
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
