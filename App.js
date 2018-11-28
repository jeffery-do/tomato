import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native';
import FlatMode from './FlatMode.js';


// export default class App extends React.Component {
//   render() {
//     return <FlatMode/>;
//   }
// }

export default class NavigatorIOSApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: FlatMode,
          title: 'Timer Screen',
          passProps: {index: 1},
        }}
        style={{flex: 1}}
      />
    );
  }
}
