import React, { Component } from 'react'
import {Text, View, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native';
import axios from 'axios'

const numColumns = 2;
class List extends Component {
    state = {
        product: []
      }
    
      componentDidMount(){
        axios.get('https://product-catalog-api.herokuapp.com/products/').then(
          res => (this.setState({
                    product: res.data.result
            })
          )
        )
      }

    renderItem = ({ item }) => {
        const {productName, productPrice, productImage} = item
        const {items, itemInvisible, contain, itemText} = styles
        if (item.empty === true) {
          return <View style={[items, itemInvisible]} />;
        }
        const {navigate} = this.props.navigation;
        return (
          <View
            style={items}
          >
            <TouchableOpacity onPress={() => navigate('Detail', {
              name: productName,
              price: productPrice,
              img: productImage
            })}>
            <View style={contain}>
            <Image
                style={{width: 100, height: 100}}
                source={{uri: productImage}}
              />
              </View>
              <Text style={itemText}>{productName}</Text>
              <Text style={itemText}>{productPrice}</Text>
            </TouchableOpacity>
          </View>
        );
      };

      render() {
          const {product} = this.state 
        return (
          <FlatList
            data={product}
            renderItem={this.renderItem}
            numColumns={numColumns}
            keyExtractor={product.productName}
          />
        );
    }
}

const styles = {
    container: {
      flex: 1,
      marginVertical: 20,
    },
    contain: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    items: {
      backgroundColor: 'whitesmoke',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      margin: 1,
      height: Dimensions.get('window').width / numColumns, // approximate a square
    },
    itemInvisible: {
      backgroundColor: 'transparent',
    },
    itemText: {
      color: '#000',
      fontSize: 15
    },
  }

export default List;