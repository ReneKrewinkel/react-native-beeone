import React, { Component } from 'react'
import { View, 
         TouchableOpacity, FlatList, SafeAreaView,
         Image } from 'react-native'
import ScrollItem from '../components/ScrollItem'

import Spinner from '../components/Spinner'
import API from '../lib/API'
import * as Styles from '../styles/Styles'
import Sidebar from '../components/Sidebar'

import { Container, Accordion, 
  Header, Text, Title, Drawer,
  Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Fab} 
from 'native-base';
import TabComponent from '../components/TabComponent'

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      textSize: 40,
      data: [],
      screenActive: 1,
      fabActive: false
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

      switch( this.state.screenActive) {

        case 0: {
          return(
            <FlatList
              data={ this.state.data }
              keyExtractor={item => item._id}
              renderItem={ ({item}) => this.renderItem(item)}
            >
            </FlatList>
            )
        }
        case 1:  {
            return(<Content><Text>Camera!!</Text></Content>)
        }
        case 2:  {
          return(<TabComponent/>)
        }
      }
      
    }

    return(<Spinner textSize={80}/>)
  }

  closeDrawer = () => {
    this.drawer._root.close()
  };

  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {
    return( 
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Sidebar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >
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
          <Button transparent onPress={ () => this.openDrawer() }>
            <Icon name='menu' />
          </Button>
        </Right>
    </Header>                
      { this.renderImage() }
      { this.renderContent() }

     
    <Footer>
    <FooterTab>
        <Button onPress={ () => this.setState({screenActive: 0})}
                active={ this.state.screenActive === 0}>
          <Text>Onderhoud</Text>
        </Button>
        <Button onPress={ () => this.props.navigation.navigate("Detail") }
                active={ this.state.screenActive === 1}>
          <Text>Camera</Text>
        </Button>
        <Button onPress={ () => this.setState({screenActive: 2})}
                active={ this.state.screenActive === 2}>
          <Text>Iets Anders</Text>
        </Button>
        
      </FooterTab>
      </Footer>
      <Fab
            active={this.state.fabActive}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ fabActive: !this.state.fabActive })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>
  </Container>
  </Drawer>
    )
  }


}

export default Home
