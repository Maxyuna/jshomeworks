// Zadaca 1
let book = {
    name: "The Lord of The Rings",
    volumes: ["The Fellowship of The Ring", "The Two Towers", "The Return of The King"],
    published: 1954,
}
let car = {
    brands: ["Ford", "BMW", "TOYOTA"],
    favoritecar: "BMW",
    convenience: true,
}
let student = {
    name: "Maksim",
    info: {
        age: 24,
        occupation: "student",
        gender: "male",
    },
    programmingKnowledge: true,
}

// Zadaca 2

// a

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// b

let start = 2
let end = 10
let sum = 0

for (let i = start; i <= end; i++) {
    console.log(i)
    if (i % 2 === 0) {
        sum += i
    }
}

console.log(sum)

// v

person = {
    name: "Maksim",
    age: 24,
    city: "Skopje"
}

for (let key in person) {
    console.log(key, ":", person[key])
}

// g

colors = ["red", "purple", "yellow"];

for (let color of colors) {
    console.log(color.length, color)
}

// Zadaca 3

let count = 5

while (count >= 1) {
    console.log(count)
    count--
}

let number = 10

do {
    console.log(number)
    number--
} while (number > 5)

// Zadaca 4

let students = [
    {
        name: "Maksim",
        surname: "Trajanovski",
        age: 24,
        address: {
            city: "Skopje",
            street: {
                name: "Jane Sandanski",
                number: 63,
                zipCode: "1000, Skopje"
            },
            zipCode: "1000, Skopje"
        }
    },
    {
        name: "Marija",
        surname: "Trajanovska",
        age: 24,
        address: {
            city: "Bitola",
            street: {
                name: "Goce Delcev",
                number: 14,
                zipCode: "4000, Bitola"
            },
            zipCode: "4000, Bitola"
        }
    }
];

console.log(students[0].address.city)
console.log(students[1]["address"]["street"]["name"])

// Zadaca 5

for (let i = 1; i <= 100; i += 4) {
    console.log(i)
}

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
    console.log(i)
    }
} 

// Zadaca 6

let cities = ["Skopje", "Bitola", "Ohrid", "Strumica", "Kumanovo", "Kicevo", "Prilep", "Veles", "Tetovo", "Krusevo"]

for (let city in cities) {
    console.log(cities[city])
}
for (let city of cities) {
    console.log(city)
}