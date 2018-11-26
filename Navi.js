//Place Holder for Navigating
import React, { Component } from 'react';
import{
  View,
  Text,
  TouchableHighlight
} from 'react-native';
  handleAddPress = () => {

  }

class Navi extends Component {
  render(){
    return(
      <View>
        <TouchableHighlight
          onpress={this.handleAddPress}
        >
        <Text> Add </Text>
      </View>
    );
  }
}

export default Navi;
