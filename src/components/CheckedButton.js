import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

export const CheckedButton = (props) => {
  const imageSource = props.item.checked
    ? require('../images/checked-green.png')
    : require('../images/checked-black.png');

    return(
      <TouchableOpacity>
        <Image
          source={imageSource}
        />
      </TouchableOpacity>
    );
};