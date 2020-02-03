class Adder {
    
    constructor(props) {
        this.props = props;
    }

    sum() {
        let a = this.props.a,
            b = this.props.b;
        return ((a + b));
      }

    render() {
        return `<span>
        <p>The sum of ${this.props.a} and ${this.props.b}is ${sum()}</p>
        </span>`;
    }

}

module.exports = Adder;