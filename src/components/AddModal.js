import React from "react";
import {Text, View, StyleSheet, TextInput} from "react-native";

export default class AddModal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}> {this.props.navigation.state.params.title} </Text>
        <TextInput
          style={styles.input}
          placeholder={'Titulo'}
        />
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
  }
});