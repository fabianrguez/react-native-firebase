import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';

export default class DeleteButton extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <TouchableOpacity
        onPress={() => this.props.onPress(this.props.item.key)}
      >
        <Image
          style={styles.image}
          source={require('../images/trash.png')}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25
  }
});