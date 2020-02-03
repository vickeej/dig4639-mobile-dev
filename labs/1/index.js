const Adder = require("./Adder.js");

function runOnLoad()
{
    let addNum = new Addder(
        {
            a: 5,
            b: 10
        }
    )
    var container = document.getElementById("Adder");
}

console.log(a.render() );
console.log(b.render() );

window.addEventListener("DOMContentLoaded", runOnLoad);