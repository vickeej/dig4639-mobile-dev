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
      .then((result) => {
        this.setState({
          contacts: [data]
        })
      });
  }

  render () {
    return (
      <>
        {this.state.contacts
          .map((v) => <p key = {index}
            name = {v.name}
            number = {v.number}
          />)}
      </>
    )
  }
}
    
export default Contacts
