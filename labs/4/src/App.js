import React from 'react';
import './App.css';
import Card from './components/Card/index.js'
import CardList from './components/CardList/index.js'
import data from './data.json'

class App extends React.Component{
  render(){
    return(
      <div>
        <CardList />
        <Card />
      </div>
    );
  }
}

export default App;
