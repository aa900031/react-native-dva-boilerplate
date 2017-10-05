import React, { Component } from 'react';
import dva from 'dva-no-router';

import Router, { routerReducer } from './router';
import user from './models/user';

class App extends Component {
  app = dva({
    extraReducers: {
      router: routerReducer,
    },
  });
  state = {
    init: false,
  };
  componentDidMount() {
    this.app.model(user);
    this.app.router(() => <Router/>);

    this.setState({ init: true });
  }
  render() {
    if (!this.state.init) return null;
    return this.app.start()(this.props);
  }
}

export default App;
