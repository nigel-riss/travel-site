class Person {
    constructor (fullName, favColor) {
        this.name = fullName;
        this.favouriteColor = favColor;
    }


    greet() {
        console.log("Hello, my name is " + this.name + " and my favourite color is " + this.favouriteColor + ".");
    }
}

module.exports = Person;