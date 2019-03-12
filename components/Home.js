import React, { Component } from 'react'
import {View, Text, TouchableOpacity } from 'react-native'

class Home extends Component {
    
    render() {
    return(
        <View style={Styles.container}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ListItems')}>
                <Text style={Styles.TextStyle}>Simple Catalog</Text>
            </TouchableOpacity>
        </View>
        )
    }
}

const Styles = {
    TextStyle: {
        fontSize: 30,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItem: 'center',
        justifyContent: 'center'
    }
}

export default Home;