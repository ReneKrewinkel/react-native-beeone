import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


export default class Sidebar extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: "#e3d400", padding: 20, paddingTop: 100 }}>
            
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Detail")}>
                <Text>Menu</Text>
              </TouchableOpacity>

            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
        </View>
    );
  }
}