import React from 'react';
import Card from '../Card/index.js'
import data from './data.json'

class CardList extends React.Component {
  constructor(props){
    super(props);
      this.state = { 
        cards: data.cards.map((v, i) => {
          v.id = i;
          return v;
        }),
      }
  }

  clicked(id) {
    let cards = this.state.cards.filter((v) => v.id !== id);
    this.setState ({cards: cards});
  }

  render(){
    return (
      this.state.cards.map((v, i) => 
      <Card id = {v.id} clicked = {() => this.clicked(v.id)}
        key = {v.id} title = {v.title} content = {v.content}>
      </Card>
      )
    );
  }
}

export default CardList;
