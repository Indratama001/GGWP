import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

class Detail extends Component {
    render() {
        const { params } = this.props.navigation.state;
        const {textName, imageStyle, container, textPrice} = styles
        return (
            <View>
                <Text style={textName}>{params.name}</Text>
                <View style={container}>
                    <Image  
                        style = {imageStyle}
                        source = {{ uri: params.img }}></Image>
                   </View>
                <Text style={textPrice}>{params.price}</Text>
            </View>
        )
    }
}

const styles = {
    textName: {
        textAlign: 'center',
        fontSize: 30
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        marginTop: 50,
        height:200,
        width: 200,
    },
    textPrice: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20
    }
}

export default Detail;

