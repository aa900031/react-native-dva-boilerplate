import { connect } from 'dva-no-router';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

class Home extends Component {
  render() {
    const {
      account, name, token
    } = this.props.user;
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
      { account ? <Text>account: {account}</Text> : null }
      { name ? <Text>name: {name}</Text> : null }
      { token ? <Text>token: {token}</Text> : null }
    </View>
  }
  handlePressLogin = () => {
    this.props.dispatch({ type: 'user/POST_login' });
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