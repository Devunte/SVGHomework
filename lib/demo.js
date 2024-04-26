
class Car {
    // properties
    constructor(color, wheels, make, isAutomatic) {
        this.color = color;
        this.wheels = wheels;
        this.make = make;
        this.isAutomatic = isAutomatic
    }


    // methods
    start() {
        console.log("Engine has started!")
    }

    drive() {
        console.log("The car is now moving")
    }

    showInfo() {
        console.log(`This car is a ${this.color} ${this.make} car that has ${this.wheels} wheels.`)
    }
}


const car1 = new Car("red", 4, "Tesla", true)
// const car1 = {
//     color: "red",
//     wheels: 4,
//     make: "Tesla",
//     isAutomatic: true
// }

const car2 =  new Car("blue", 4, "Ford", false)
// const car2 = {
//     color: "blue",
//     wheels: 4,
//     make: "Ford",
//     isAutomatic: false
// }


car1.showInfo()