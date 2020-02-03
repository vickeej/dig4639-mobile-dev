class Adder {
    
    constructor(props) {
        this.props = props;
    }

    sum(a, b) {
        this.a = a;
        this.b = b;
        
        this.sum = function() {       
          return this.a + this.b;
          }
      }

    render() {
        return `<span>
        <p>The sum of ${this.a} and ${this.b}is ${this.sum}</p>
        </span>`;
    }

}

module.exports = Adder;