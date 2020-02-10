import React from 'react';
import logo from './logo.svg';
import './App.css';

function NameBadge(props) {
  console.log(props);
  return (
    <p>My Name is {props.name}</p>)
}

class App extends React.Component {
  clickHandler = () => {
    alert("Clicked");
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} onClick={this.clickHandler()} className="App-logo" alt="logo" />
        <p>
          Hello World,
          <NameBadge name="Vickee" />
          <NameBadge name="Johnson" />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

export default App;
