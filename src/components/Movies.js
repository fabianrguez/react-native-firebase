import React from "react";
import {Text, View, StyleSheet, Image, StatusBar} from "react-native";

export default class Movies extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Peliculas',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../images/movies.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'}/>

        <Text style={styles.text}>Movies component</Text>
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

