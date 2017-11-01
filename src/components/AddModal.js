import React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {firebaseDatabase, firebaseAuth} from '../config/firebaseConfig';

export default class AddModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movieName: '',
      itemKey: ''
    }
  }

  _saveMovie() {
    if (this.state.movieName !== '') {
      const key = firebaseDatabase.ref().child('movies').push().key;
      firebaseDatabase.ref('/movies/' + key).set({
        key: key,
        name: this.state.movieName,
        liked: false,
        user: firebaseAuth.currentUser.email,
        date: new Date().toLocaleDateString()
      });
      this.props.navigation.goBack();
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}> {this.props.navigation.state.params.title} </Text>
        <TextInput
          style={styles.input}
          placeholder={'Titulo'}
          value={this.state.movieName}
          onChangeText={(name) => this.setState({movieName: name})}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this._saveMovie()}
        >
          <Text style={styles.buttonText}>Añadir</Text>
        </TouchableOpacity>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    paddingVertical: 20,
    textAlign: 'left',
    fontSize: 30,
    fontWeight: '700'
  },
  input: {
    height: 40,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 10
  },  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    borderRadius: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  }
});