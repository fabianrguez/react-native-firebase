import React from "react";
import {View, StyleSheet, Image, StatusBar, Button} from "react-native";

export default class Movies extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Peliculas',
    tabBarLabel: 'Peliculas',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../images/movies.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
    headerRight:
      <Button
        onPress={() => navigation.navigate('Modal')}
        title={'Añadir'}
        style={{marginRight: 20, fontSize: 18, fontWeight: '700'}}
      />
  });

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'}/>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10
  }
});

