import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Text, View} from 'react-native';

export default class LikeButton extends React.Component {

  constructor(props) {
    super(props);
    this.blackHeart = require('../../images/heart-black.png');
    this.redHeart = require('../../images/heart-red.png');
  }

  _imageRendered() {
    return this.props.item.liked ? this.redHeart : this.blackHeart;
  }

  _renderText() {
    if (this.props.item.liked) {
      return(
        <Text style={{fontSize: 7}}>Me gusta</Text>
      );
    }
  }

  render() {
    const imageSource = this._imageRendered();
    return(
      <TouchableOpacity
        onPress={() => this.props.onPress(this.props.item)}>
        <Image
          style={styles.image}
          source={imageSource}/>
        {this._renderText()}
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