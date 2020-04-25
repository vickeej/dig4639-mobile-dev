import React from "react";

const HEADERS = {
    "Method":"GET",
    "headers":{
        "API": "johnson",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}

class removeContacts extends React.Component{
    constructor(props){
        super(props);
        this.removeC = React.createRef();
        this.state = this.state={
            value: '',
        }
    }

    delete = () =>{
        let newHeader ={
            ...HEADERS,
            "method":"POST",
            body: JSON.stringify({
                position:this.removeC.current.value,
            })
        }

        fetch("http://plato.mrl.ai:8080/contacts/remove", newHeader).then((res)=> res.json()).then((data)=>{
            this.setState({value: this.removeC.current.value})
        }
        ,[])
    }

    handleSubmit = e => {
        e.preventDefault();
        this.delete()
    }

    render(){
        return(
            <div>
                <h2>Remove Contact</h2>
                <form onSubmit={this.handleSubmit}>
                    <label class = "h3" htmlFor = "name">Enter Contact Position</label>
                    <input type = "text" ref = {this.removeC} id = "postion" />
                    <button type = "submit">REMOVE</button>
                    </form>
            </div>
        );
    }
}

export default removeContacts;
