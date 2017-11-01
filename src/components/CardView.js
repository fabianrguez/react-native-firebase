import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, CardAction, CardContent, CardTitle} from 'react-native-material-cards';
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';

export default class CardView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Card style={{borderRadius: 8}}>
        <CardTitle
          title={this.props.item.name}
          subtitle={this.props.item.user}
          subtitleAbove={false}
        />
        <CardContent
          text={'Fecha añadido: '+ this.props.item.date}
        />
        <CardAction
          seperator={false}
          inColumn={false}
          style={styles.cardAction}>

          <LikeButton
            onPress={this.props.onLikePress()}
            item={this.props.item}
          />

          <DeleteButton
            item={this.props.item}
            onPress={this.props.onDeletePress()}
          />
        </CardAction>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  cardAction: {
    flex: 1,
    justifyContent: 'space-around',
    marginLeft: 10,
    marginBottom: 10
  }
});