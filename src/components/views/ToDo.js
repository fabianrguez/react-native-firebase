import React from 'react';
import {View, StyleSheet, Image, StatusBar, Button, FlatList} from 'react-native';
import {firebaseDatabase, firebaseAuth} from '../../config/firebaseConfig';
import * as _ from 'lodash';
import CardView from './CardView';

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.checkButtonPress = this._checkButtonPress.bind(this);
    this.deleteButtonPress = this._deleteButtonPress.bind(this);
  }

  componentDidMount() {
    firebaseDatabase.ref().child('items').on('value', (data) => {
      this.setState({items: _.values(data.val())});
    });
  }

  static _pressSaveItem(item) {
    if (item !== '') {
      const key = firebaseDatabase.ref().child('items').push().key;
      firebaseDatabase.ref('/items/' + key).set({
        key: key,
        name: item,
        checked: false,
        user: firebaseAuth.currentUser.email,
        date: new Date().toLocaleDateString()
      });
    }
  }

  static navigationOptions = ({navigation}) => ({
    title: 'To Do',
    tabBarLabel: 'To DO',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../../images/list.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
    headerRight:
      <Button
        onPress={() => navigation.navigate('Modal', {title: 'Añade a la lista', onPressSave: ToDo._pressSaveItem.bind(this)})}
        title={'Añadir'}
        style={{marginRight: 20, fontSize: 18, fontWeight: '700'}}
      />
  });

  _checkButtonPress(item) {
    firebaseDatabase.ref().child('items/' + item.key).update({
      checked: !item.checked
    });
  }

  _deleteButtonPress(key) {
    firebaseDatabase.ref().child('items/' + key).remove();
  }

  _renderItem(item) {
    return(
      <CardView
        item={item}
        checkButton={true}
        onCheckPress={this.checkButtonPress}
        onDeletePress={this.deleteButtonPress}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'}/>
        <FlatList
          data={this.state.items}
          renderItem={({item}) => this._renderItem(item)}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center'
  }
});