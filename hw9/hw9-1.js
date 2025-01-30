class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    animalName() {
        console.log(`My name is ${this.name}!`)
    }

    animalAge() {
        console.log(`I am ${this.age} years old.`)
    }
}

class Dog extends Animal {
    constructor(type, name, age) {
        super(name, age)
        this.type = type
    }

    animalType() {
        console.log(`I am a ${this.type}.`)
    }
}

const myAnimal = new Animal("Belko", 3)
myAnimal.animalName()
myAnimal.animalAge()

const myDog = new Dog("Crnko", 5)
myDog.animalName()
myDog.animalAge()
myDog.animalType()