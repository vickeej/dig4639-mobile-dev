import React from 'react';
import Contacts from './components/Contacts';
import Profile from './components/Profile';
import AddContacts from './components/AddContacts';
import RemoveContacts from './components/RemoveContacts';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <body>
        <div class="container">
            <AddContacts/>
            <br />
            <RemoveContacts/>
            <br />
            <Profile/>
        </div>
        <div class="container">
            <Contacts/>
        </div>
      </body>
    );
  }
}

export default App;
