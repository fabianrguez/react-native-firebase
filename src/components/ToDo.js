import React from "react";
import {Text, View, StyleSheet, Image, StatusBar} from "react-native";

export default class ToDo extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'To-Do',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../images/list.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'}/>

        <Text style={styles.text}>To-Do component</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center'
  }
});