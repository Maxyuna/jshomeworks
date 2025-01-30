class Rectangle {

    static getShapeType() {
        return "Rectangle"
    }

    #width
    #height

    constructor(color, width, height) {
        this.color = color
        this.#width = width
        this.#height = height
    }

    get width() {
        return this.#width
    }

    set width(value) {
        if (value > 0) {
            this.#width = value
        } else {
            console.error("Width must be a positive number.")
        }
    }

    get height() {
        return this.#height
    }

    set height(value) {
        if (value > 0) {
            this.#height = value
        } else {
            console.error("Height must be a positive number.")
        }
    }

    getArea() {
        return this.#width * this.#height
    }

    describe() {
        console.log(`Color: ${this.color}, Width: ${this.#width}, Height: ${this.#height}`)
    }
}

const myRectangle = new Rectangle("Purple", 4, 6)
myRectangle.describe()
console.log(myRectangle.getArea())

myRectangle.width = -4
myRectangle.height = -7