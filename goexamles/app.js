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

import { FetchManger, Toast, LineView,Spinner } from './lib/index';
let count = 0
export default class App extends Component {
  constructor(props) {
    super(props);
    this.onFetchAction = this.onFetchAction.bind(this);
    this.ontoastAction = this.ontoastAction.bind(this);
    this.onspinnerAction = this.onspinnerAction.bind(this);
    FetchManger.initConfig({ baseUrl: 'http://222.240.214.122:18000/mobile_interfaces/mobile_info/' });
    this.state = {
      message: '',
      showSpinner:false,
    }
  }
  //http://www.weather.com.cn/data/cityinfo/101010100.html
  onFetchAction() {
    this.setState({ message: 'loading' })
    debugger;
    FetchManger.postUri('personalLogin.do', {user_name:'唐平安',user_password:'111111'}).then((responseData) => {
      this.setState({ message: JSON.stringify(responseData) })
    }).catch((error) => {
      this.setState({ message: error })
    })
  }
  
  ontoastAction() {
    Toast.show('success'+count++);
  }
  onspinnerAction(){
    this.setState({showSpinner:true});
    setTimeout(() => {
      this.setState({showSpinner:false});
    }, 5000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 20 }} />
        <TouchableHighlight onPress={this.onFetchAction} underlayColor={'#999'}
          style={{ height: 30, width: 100, backgroundColor: '#999', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 16, color: 'black', fontWeight: '300', }}> FetchManger </Text>
        </TouchableHighlight>
        <LineView />
        <TouchableHighlight onPress={this.ontoastAction} underlayColor={'#999'}
          style={{ height: 30, width: 100, backgroundColor: '#999', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 16, color: 'black', fontWeight: '300', }}> Toast  </Text>
        </TouchableHighlight>
        <LineView />
        <TouchableHighlight onPress={this.onspinnerAction} underlayColor={'#999'}
          style={{ height: 30, width: 100, backgroundColor: '#999', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 16, color: 'black', fontWeight: '300', }}> Spinner  </Text>
        </TouchableHighlight>
        <LineView />
        <View style={{ flex: 1 }} />
        <Text style={{ fontSize: 16, color: 'red' }}>{this.state.message}</Text>
        <Spinner visible={this.state.showSpinner} textContent="加载中,请稍后..."/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
