import React from 'react';
import {View, StyleSheet, Image, StatusBar, Button, FlatList} from 'react-native';
import {firebaseDatabase, firebaseAuth} from '../../config/firebaseConfig';
import * as _ from 'lodash';
import CardView from './CardView';

export default class Movies extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };

    this.likeButtonPress = this._likeButtonPress.bind(this);
    this.deleteButtonPress = this._deleteButtonPress.bind(this);
  }

  componentDidMount() {
    firebaseDatabase.ref().child('movies').on('value', (data) => {
      this.setState({movies: _.values(data.val())});
    });
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Peliculas',
    tabBarLabel: 'Peliculas',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../../images/movies.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
    headerRight:
      <Button
        onPress={() => navigation.navigate('Modal', {title: 'Añade peliculas', onPressSave: Movies._pressSaveButton.bind(this)})}
        title={'Añadir'}
        style={{marginRight: 20, fontSize: 18, fontWeight: '700'}}
      />
  });

  _likeButtonPress(movie) {
    firebaseDatabase.ref().child('movies/' + movie.key).update({
      liked: !movie.liked
    });
  }

  _deleteButtonPress(key) {
    firebaseDatabase.ref().child('movies/' + key).remove();
  }

  _renderMovie(movie) {
    return(
      <CardView
        item={movie}
        likeButton={true}
        onLikePress={this.likeButtonPress}
        onDeletePress={this.deleteButtonPress}
      />
    );
  }

  static _pressSaveButton(movieName) {
    if (movieName !== '') {
      const key = firebaseDatabase.ref().child('movies').push().key;
      firebaseDatabase.ref('/movies/' + key).set({
        key: key,
        name: movieName,
        liked: false,
        user: firebaseAuth.currentUser.email,
        date: new Date().toLocaleDateString()
      });
    }
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
