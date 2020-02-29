import "./index.css"
import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.content = props.content;
    }

    render() {
        return <div class="card">{this.content}</div>;
    }
}

export default Card;
