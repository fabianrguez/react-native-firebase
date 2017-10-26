import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import {DEVICE_WIDTH} from "../helpers/DeviceHelper";

export default class Input extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
        <TextInput
          editable={true}
          style={styles.input}
          placeholder={this.props.placeholder}
        />
    );
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 1,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20
  }
});