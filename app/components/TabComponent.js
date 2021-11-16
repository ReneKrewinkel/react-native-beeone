import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Tab, Tabs } from 'native-base';
import Spinner from './Spinner';



export default class TabComponent extends Component {
    render() {
        return (
            <Tabs>
                <Tab heading="Tab1">
                    <View><Text>Tab 1</Text></View>
                </Tab>
                <Tab heading="Tab2">
                    <Spinner/>
                </Tab>
          </Tabs>
        )
    }
}
