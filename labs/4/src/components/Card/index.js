import "./index.css"
import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.content = props.content;
    }

    render() {
        return <div class="card">
            <h3>{this.title}</h3>
            <p className = 'card' onClick={() => props.removeTask(props.id)}>{props.content}</p></div>;
    }
}

export default Card;
