import React from 'react';
import {Card, CardAction, CardButton, CardTitle} from "react-native-material-cards";

export default class CardView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Card style={{borderRadius: 8}}>
        <CardTitle
          title={this.props.title}/>
        <CardAction
          seperator={false}
          inColumn={false}
          style={{justifyContent: 'space-around'}}>

          <CardButton
            onPress={() => {}}
            title="Me Gusta"
            color='blue'
          />
          <CardButton
            onPress={() => {}}
            title="Eliminar"
            color='blue'
          />
        </CardAction>
      </Card>
    );
  }
}