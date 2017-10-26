import React from "react";
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';
import {firebaseAuth} from "../config/FirebaseConfig";

export default class LoginForm extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      message: '',
      loginFail: false
    }
  }

  _renderResult() {
    if (this.state.loginFail) {
      return <Text style={styles.loginFail}>{this.state.message}</Text>
    }

  }

  _authenticateUser() {
    firebaseAuth.signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({loginFail: false})
      })
      .catch((error) => {
        this.setState({loginFail: true})
        this.setState({message: error.message})
      })
  }

  render() {
    return(
      <View style={styles.container}>
        {this._renderResult()}
        <StatusBar barStyle={'light-content'}/>

        <TextInput
          style={styles.input}
          placeholder={'Email'}
          returnKeyType={'next'}
          onSubmitEditing={() => this.passwordInput.focus()}
          placeholderTextColor={'rgba(255,255,255,0.7)'}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          autoCorrect={false}
          value={this.state.email}
          onChangeText={(value) => this.setState({email: value})}
        />
        <TextInput
          style={styles.input}
          placeholder={'Contraseña'}
          secureTextEntry={true}
          returnKeyType={'go'}
          placeholderTextColor={'rgba(255,255,255,0.7)'}
          ref={(input) => this.passwordInput = input}
          value={this.state.password}
          onChangeText={(value) => this.setState({password: value})}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this._authenticateUser()}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    borderRadius: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  },
  loginFail: {
    textAlign: 'center',
    color: '#FFF',
    paddingVertical: 15,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 99, 71, 0.5)'
  }
});