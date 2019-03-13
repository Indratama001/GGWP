import React, { Component } from 'react'
import {Text, 
        View, 
        FlatList, 
        Dimensions, 
        Image, 
        TouchableOpacity, 
        ActivityIndicator } from 'react-native';
import axios from 'axios'

const numColumns = 2;
class List extends Component {
    state = {
        product: [],
        loading: true
      }
    
      componentDidMount(){
        axios.get('https://product-catalog-api.herokuapp.com/products/').then(
          res => (this.setState({
                    product: res.data.result,
                    loading: false
            })
          )
        )
      }


      _keyExtractor = (item, index) => item.id;

    renderItem = ({ item }) => {
        const {loading } = this.state
        const {productName, productPrice, productImage} = item
        const {items, contain, itemText} = styles
        console.log(productImage)
        if (loading) {
          console.log("GG")
          return <ActivityIndicator size="large" color="#0000ff" />;
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

      

      renderList(){
        const {loading, product } = this.state
        if (loading) {
          //console.log("GG")
          return <ActivityIndicator style={{marginTop: 20}} size="large" color="#0000ff" />;
        }
        return (
          <FlatList
            data={product}
            renderItem={this.renderItem}
            numColumns={numColumns}
            keyExtractor={this._keyExtractor}
          />
        )
      }

      render() { 
        return (
          <View>          
            {this.renderList()}
            </View>

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