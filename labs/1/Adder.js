class Adder {
    
    constructor(props) {
        this.props = props;
    }

    render() {
        return `<p>The sum of ${this.props.a} and ${this.props.b}is ${this.props.sum}`;
    }

}

export default Adder;