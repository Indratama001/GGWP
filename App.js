import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation'

import Home from './components/Home'
import ListItems from './components/ListItems'
import Detail from './components/Deatil'

const RootStack = StackNavigator({
    Home: { screen: Home},
    ListItems: { screen: ListItems},
    Detail: {screen: Detail}
  },
  {
    initialRouteName: 'Home',
})

 class App extends Component{
  render() {
    return (
      <RootStack/>
    );
  }
}

export default App;
