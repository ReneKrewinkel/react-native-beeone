import React, { Component } from 'react'
import { View, 
         TouchableOpacity, FlatList, SafeAreaView,
         Image } from 'react-native'
import ScrollItem from './app/components/ScrollItem'

import Spinner from './app/components/Spinner'
import API from './app/lib/API'
import * as Styles from './app/styles/Styles'


import { Container, Accordion, 
  Header, Text, Title, 
  Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Fab} 
from 'native-base';

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
      <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Right>
    </Header>                
    <Content>
    

    </Content>
    <Footer>
    <FooterTab>
        <Button>
          <Text>Apps</Text>
        </Button>
        <Button>
          <Text>Camera</Text>
        </Button>
        <Button active>
          <Text>Navigate</Text>
        </Button>
        <Button>
          <Text>Contact</Text>
        </Button>
      </FooterTab>
      </Footer>
  </Container>
    )
  }


}

export default App
