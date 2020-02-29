class Adder {
    
    constructor(a,b) {
        this.a = a;
        this.b = b;
    }

    sum(a, b) {
        return this.a + this.b
    }

    render() {
        return `<p>The sum of ${this.props.a} and ${this.props.b}is ${this.sum()}</p>`;
    }
}

module.exports = Adder;