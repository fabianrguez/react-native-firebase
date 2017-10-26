import React from "react";
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';

export default class LoginForm extends React.Component {

  render() {
    return(
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'}/>

        <TextInput
          style={styles.input}
          placeholder={'Email'}
          returnKeyType={'next'}
          onSubmitEditing={() => this.passwordInput.focus()}
          placeholderTextColor={'rgba(255,255,255,0.7)'}
          keyboardType={'email-address'}
          autoCapitlize={false}
          autoCorrect={false}/>
        <TextInput
          style={styles.input}
          placeholder={'Contraseña'}
          secureTextEntry={true}
          returnKeyType={'go'}
          placeholderTextColor={'rgba(255,255,255,0.7)'}
          ref={(input) => this.passwordInput = input}/>

        <TouchableOpacity style={styles.buttonContainer}>
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
  }
});