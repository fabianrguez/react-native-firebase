import React from 'react';
import Login from '../components/Login';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Movies from "../components/Movies";
import ToDo from "../components/ToDo";

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
  }
});

export const Router = StackNavigator({
  Login: {
    screen: Login
  },
  Tab: {
    screen: Tab
  }
}, {
  mode: 'modal',
  headerMode: 'none'
});

