import {View, StyleSheet, Text, KeyboardAvoidingView} from "react-native";
import React from "react";
import LoginForm from "./LoginForm";

export default class Login extends React.Component {

  render() {
    return(
      <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Login</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm/>
        </View>
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    color: '#FFF',
    opacity: 0.9,
    fontSize: 28,
    fontWeight: '900'
  }
});