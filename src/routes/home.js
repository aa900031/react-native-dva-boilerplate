import { connect } from 'dva-no-router';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native + Dva.js!
      </Text>
      <Text style={styles.instructions}>
        To get started, edit src/home.js
      </Text>
      <Text style={styles.instructions}>
        Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu
      </Text>
      <Button title="Login" onPress={this.handlePressLogin} /> 
    </View>
  }
  handlePressLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

export default connect(state => state)(Home);