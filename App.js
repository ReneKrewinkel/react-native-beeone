import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Spinner from './app/components/Spinner'
import API from './app/lib/API'

import Home from './app/views/Home'
import Detail from './app/views/Detail'
import Scanner from './app/views/Scanner'

const Stack = createStackNavigator();

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      data: [],
    }

  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    API.fetchData()
    .then(result => {
        this.setState({
          isLoaded: true,
          data: result
        })
    })
  }

  renderContent() {
    if(this.state.isLoaded) {

      return(
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Home" component={ Home }/>                
              <Stack.Screen name="Detail" component={ Detail }/>      
              <Stack.Screen name="Scanner" component={ Scanner }/>                  
            
          </Stack.Navigator>
        </NavigationContainer>
      )

    }
    return(
      <View style={{padding: 100}}><Spinner></Spinner></View>
    )
  }

  render() {
    return(
      <React.Fragment>
        { this.renderContent() }
      </React.Fragment>
    )
  }

}

export default App
