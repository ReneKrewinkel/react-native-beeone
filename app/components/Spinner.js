import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

class Spinner extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return(
            <View>
                <ActivityIndicator             
                    size="large"
                    color="#0000ff" />
            </View>
        )
    }


}

export default Spinner