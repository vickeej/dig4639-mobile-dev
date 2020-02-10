class Pet {
    constructor(props) {
        this.props = props;
    }
    getName() {
        return this.props.name;
    }
    getSpecies() {
        return this.props.name;
    }
    getSpeech() {
        return this.props.name;
    }
}

class Cat extends Pet {
    constructor(props) {
        super(props)
        this.props.species = "cat";
    }

class Dog extends Pet {
    constructor(props) {
        super(props)
        this.props.species = "dog";
    }

function sayName(pet) {
        console.log('My Name is ${pet.getName()}, and I am a ${pet.getSpecies()}');
    }
}

var myPet = new Pet({name: "Luna"});
myPet.sayName();
var myPet = new Pet({name: "Fido"});
myDog.sayName();