import { connect } from 'dva-no-router';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

class Login extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'user/POST_login' });
  }
  render() {
    const {
      account, name, token
    } = this.props.user;
    return <View style={styles.container}>
      { account ? <Text>account: {account}</Text> : null }
      { name ? <Text>name: {name}</Text> : null }
      { token ? <Text>token: {token}</Text> : null }
      { !account || !name || !token ? <Text>Loading...</Text> : null }
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default connect(state => state)(Login);