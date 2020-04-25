import React from 'react';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {profile: []};
    }

    componentDidMount(){
        fetch("http://plato.mrl.ai:8080/profile", {headers: {API: "johnson"}})
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            this.setState({
                profile: [data]
            });
        });
    }

    render(){
        return(
            <div>
                <h2>Profile</h2>
                {
                    this.state.profile.map((value, index) => {
                        return <p key = {index}>{value.name}, {value.count}</p>
                    })
                }
            </div>
        );
    }
}

export default Profile;
