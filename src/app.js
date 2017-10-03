import React, { Component } from 'react';
import dva from 'dva-no-router';

import user from './models/user';
import Home from './home';

class App extends Component {
  app = dva();
  state = {
    init: false,
  };
  componentDidMount() {
    this.app.model(user);
    this.app.router(() => <Home />);

    this.setState({ init: true });
  }
  render() {
    if (!this.state.init) return null;
    return this.app.start()(this.props);
  }
}

export default App;
