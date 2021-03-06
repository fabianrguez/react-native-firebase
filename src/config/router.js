import React from 'react';
import Login from '../components/views/Login';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Movies from '../components/views/Movies';
import ToDo from '../components/views/ToDo';
import AddModal from '../components/views/AddModal';

const Tab = TabNavigator({
  Movies: {
    screen: Movies
  },
  ToDo: {
    screen: ToDo
  }

}, {
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#00acc1',
  },
  swipeEnabled: true,
  initialRoute: 'none',
  navigationOptions: {
    gesturesEnabled: false
  }
});

const LoginRoute = StackNavigator({
  Login: {
    screen: Login
  }
}, {
  mode: 'modal',
  headerMode: 'none'
});

const TabRoute = StackNavigator({
  Tab: {
    screen: Tab
  }
}, {
  mode: 'modal',
  headerMode: 'screen'
});

export const Router = StackNavigator({
  Login: {
    screen: LoginRoute
  },
  Tab: {
    screen: TabRoute
  },
  Modal: {
    screen: AddModal
  }
}, {
  headerMode: 'none'
});

