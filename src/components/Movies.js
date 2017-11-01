import React from "react";
import {
  View, StyleSheet, Image, StatusBar, Button, FlatList, Text, TouchableWithoutFeedback
} from "react-native";
import {firebaseDatabase} from "../config/firebaseConfig";
import * as _ from 'lodash';
import CardView from "./CardView";

export default class Movies extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    firebaseDatabase.ref('movies').on('value', (data) => {
      this.setState({movies: _.values(data.val())});
    });
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
        onPress={() => navigation.navigate('Modal', {title: 'Añade peliculas  '})}
        title={'Añadir'}
        style={{marginRight: 20, fontSize: 18, fontWeight: '700'}}
      />
  });

  _renderMovie(movie) {
    return(
      <CardView
        title={movie.name}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'}/>
        <FlatList
          data={this.state.movies}
          renderItem={({item}) => this._renderMovie(item)}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
