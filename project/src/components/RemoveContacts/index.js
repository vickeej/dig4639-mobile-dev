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
                <h1>Remove Contact</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Enter position</label>
                    <br/>
                    <input type = "text" ref={this.removeC} id = "position"/>
                    <br/>
                    <button type= "submit">Submit</button>
                    </form>
            </div>
        );
    }
}

export default removeContacts;
