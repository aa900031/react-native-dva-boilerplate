import { connect } from 'dva-no-router';
import React from 'react';
import {
  Actions,
  Reducer,
  Router,
  Overlay,
  Modal,
  Scene,
  Stack,
} from 'react-native-router-flux';

import Home from './routes/home';
import Login from './routes/login';

const DvaRouter = connect()(props => {
  const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
      props.dispatch(action);
      return defaultReducer(state, action);
    };
  };
  return <Router createReducer={reducerCreate}>
    {props.children}
  </Router>
});

export default () => {
  return <DvaRouter>
    <Overlay>
      <Modal hideNavBar>
        <Stack key="root">
          <Scene key="home" component={Home} title="Home" />
        </Stack>
        <Stack key="login">
          <Scene key="loginMain" component={Login} title="Login" 
            onRight={() => Actions.pop()} rightTitle="Close" />
        </Stack>
      </Modal>
    </Overlay>
  </DvaRouter>
};