import React from 'react';
import Profile from './components/Profile';
import AddContacts from './components/addContacts';
import RemoveContacts from './components/removeContacts';
import Contacts from './components/Contacts';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <body>
        <div class="container">
            <Contacts/>
            <br />
            <AddContacts/>
            <br />
            <RemoveContacts/>
            <br />
            <Profile/>
        </div>
      </body>
    );
  }
}

export default App;
