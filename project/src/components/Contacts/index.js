import React from 'react'

class Contacts extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {
      contacts: []
    }
  }

  componentDidMount() {
    fetch('http://plato.mrl.ai:8080/contacts', {headers: {API: "johnson"}})
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        this.setState({
          contacts: data.contacts
        })
      });
  }

  render () {
    return (
      <div class = "container2">
      <h1>Contacts:</h1>
        {this.state.contacts
          .map((v, index) => <p key = {index}>
            &#8226;&nbsp; <b>Name:</b> {v.name}&nbsp;&nbsp;
            <b>Number:</b> {v.number}</p>)}
      </div>
    );
  }
}
    
export default Contacts
