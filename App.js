import React, { Component } from 'react'
import { Text, View, 
         TouchableOpacity, FlatList, SafeAreaView,
         Image } from 'react-native'
import ScrollItem from './app/components/ScrollItem'

import Spinner from './app/components/Spinner'
import API from './app/lib/API'
import * as Styles from './app/styles/Styles'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      textSize: 40,
      data: []
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

  renderItem(item) {
    return(
      <ScrollItem item={ item }/>
    )
  }

  renderImage() {
    return(
      <Image source={{ uri: "https://www.nederlandslank.nl/hubfs/Stock%20images/Industrial%20building%20factory.jpeg" }}
             style={ Styles.headerImage }
            
      />

    )
  }


  renderContent() {
    if(this.state.isLoaded) {

      return(
        <FlatList
          data={ this.state.data }
          keyExtractor={item => item._id}
          renderItem={ ({item}) => this.renderItem(item)}
        >
        </FlatList>
        )
    }

    return(<Spinner textSize={80}/>)
  }

  render() {
    return( 
      <SafeAreaView>
    
      { this.renderImage() }
      { this.renderContent() }
    
      </SafeAreaView>
    )
  }


}

export default App
