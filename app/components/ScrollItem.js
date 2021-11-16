import React, { Component } from 'react'
import { View, Text } from 'react-native'

import * as Styles from '../styles/Styles'

class ScrollItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            item: this.props.item
        }
    }


    render() {
        return(
            <View style={Styles.scrollItem}>
                <Text style={ Styles.titleStyle }>{ this.state.item.actie }</Text>
                <Text style={ Styles.textMuted }>{ this.state.item.datum }</Text>
            </View>
        )
    }


}

export default ScrollItem