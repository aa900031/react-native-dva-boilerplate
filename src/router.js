import React, { PureComponent } from 'react';
import {
  StackNavigator,
  addNavigationHelpers,
} from 'react-navigation';
import {
  BackHandler,
  Animated,
  Easing,
} from 'react-native';
import { connect } from 'dva-no-router';

import Home from './routes/home';
import Login from './routes/login';

const MainNavigator = StackNavigator(
  {
    Home: { screen: Home },
  }
);
const LoginNavigator = StackNavigator(
  {
    Login: { screen: Login }
  }
);
const RootNavigator = StackNavigator(
  {
    Main: { screen: MainNavigator },
    Login: { screen: LoginNavigator },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  }
);

class DvaRouter extends PureComponent {
  render() {
    const navigation = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.router,
    });
    return <RootNavigator navigation={navigation} />
  }
}

export function routerReducer(state, action) {
  return RootNavigator.router.getStateForAction(action, state);
};

export default connect(state => ({ router: state.router }))(DvaRouter);
