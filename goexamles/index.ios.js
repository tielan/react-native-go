/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { FetchManger }  from 'react-native-go';

export default class goexamles extends Component {
  constructor(props) {
    super(props);
    this.onFetchAction = this.onFetchAction.bind(this);
    FetchManger.initConfig({baseUrl:'http://www.weather.com.cn/data/cityinfo/'});
    this.state = {
      message: ''
    }
  }
  //http://www.weather.com.cn/data/cityinfo/101010100.html
  onFetchAction() {
    this.setState({ message: 'loading' })
    FetchManger.getUri('101010100.html').then((responseData) => {
      this.setState({ message: JSON.stringify(responseData)})
    }).catch((error) => {
      this.setState({ message:error })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.onFetchAction}
          underlayColor={'#999'}
          style={{ height: 48, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 16, color: 'red', fontWeight: '300', }}>登        录</Text>
        </TouchableHighlight>
        <View style={{ flex: 1 }} />
        <Text style={{ fontSize: 16, color: 'red' }}>{this.state.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('goexamles', () => goexamles);
