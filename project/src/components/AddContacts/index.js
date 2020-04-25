import React from 'react'

const HEADERS ={
  "Method" : "GET",
  "headers" : {
    "API" : "johnson",
    "Content-Type" : "application/json",
    "Accept": "application/json"
  }
}

class addContacts extends React.Component {

  constructor (props) {
    super(props)
    this.addName = React.createRef();
    this.addNumber = React.createRef();

    this.state = {
      v: " ",
      v2: " "
    }
  }

  addUser = () => {
    let newHeaders = {...HEADERS,
      "method" : "POST",
      body: JSON.stringify({
        name: this.addName.current.value,
        number: this.addNumber.current.value
      })}
      fetch("http://plato.mrl.ai:8080/contacts/add", newHeaders)
      .then((res) => res.json())
      .then((data) => {
          this.setState({value:this.addName.current.value})
          this.setState({value:this.addNumber.current.value})
    }, [])
  }

handleSubmit = e => {
e.preventDefault();
this.addUser();
}

  render() {

    return (
      <div>
        <h2>Add Contact</h2>
        <form onSubmit={this.handleSubmit}> 
            <label class = "h3" htmlFor="name">Full Name</label><br/>
            <input type = "text" ref = {this.addName} id = "name" /><br/><br/>
            <label class = "h3" htmlFor = "name">Phone Number</label><br/>
            <input type = "text" ref = {this.addNumber} id = "number" /><br/>
            <button type = "submit">ADD</button>
         </form>
      </div>
    );
  }
}

export default addContacts;