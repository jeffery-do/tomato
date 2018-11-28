import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

class TButton extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 1000 }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          //Customizable button
          onPress={this.props.onPress}
        >
          <Text>{this.props.text ? this.props.text : 'Touch Here'}</Text>
        </TouchableOpacity>
        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            { this.state.count !== 0 ? this.state.count: null}
          </Text>
          <Text>xyz</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0, // set flex to 0 to prevent overlapping of touchable opacity
    // paddingHorizontal: 10
  },
  //Makes It Circular
  button: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:100,
    backgroundColor:'#E0FFFF',
    borderRadius:100,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
    width: 100,
    height: 100,
  },
  countText: {
    color: '#FF00FF'
  }
})

export default TButton;
