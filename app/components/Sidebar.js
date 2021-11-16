import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class Sidebar extends Component {
  render() {
    return (
        <View style={{ padding: 10, flex: 1, backgroundColor: "#e3d400", padding: 20 }}>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
        </View>
    );
  }
}