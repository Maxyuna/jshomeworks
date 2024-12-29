// Zadaca 1

function printFunc(seconds) {
    if (typeof seconds !== 'number') {
        console.log("Please enter a number.")
    } else if (seconds > 9) {
        console.log("Please enter a one digit number.")
    } else setTimeout(() => {
        console.log("Coding is not that hard!")
    }, seconds * 1000)
}
printFunc("a")
printFunc(10)
printFunc(3)

// Zadaca 2

function promise1() {
    return new Promise((resolve, reject) => {
        const condition = false
        if (condition) {
            resolve("Download finished successfully!")
        } else {
            reject("Failed to downwload your data.")
        }
    })
}

promise1()
    .then(result => console.log(result))
    .catch(error => console.error(error))

async function promised1() {
    try {
        const result = await promise1()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

promised1()

//

function promise2() {
    return new Promise((resolve, reject) => {
        const condition = false
        if (condition) {
            resolve("Your code worked successfully!")
        } else {
            reject("Something is wrong with your code.")
        }
    })
}

promise2()
    .then(result => console.log(result))
    .catch(error => console.error(error))

async function promised2() {
    try {
        const result = await promise2()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

promised2()

//

function promise3() {
    return new Promise((resolve, reject) => {
        const condition = false
        if (condition) {
            resolve("The data was fetched successfully!")
        } else {
            reject("Try again later.")
        }
    })
}

promise3()
    .then(result => console.log(result))
    .catch(error => console.error(error))

async function promised3() {
    try {
        const result = await promise3()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

promised3()

//

function promise4() {
    return new Promise((resolve, reject) => {
        const condition = false
        if (condition) {
            resolve("Program executed successfully.")
        } else {
            reject("Something went wrong, look into your code and try again!")
        }
    })
}

promise4()
    .then(result => console.log(result))
    .catch(error => console.error(error))

async function promised4() {
    try {
        const result = await promise4()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

promised4()

//

function promise5() {
    return new Promise((resolve, reject) => {
        const condition = false
        if (condition) {
            resolve("Pokemon catched successfully!")
        } else {
            reject("The Pokemon escaped from your pokeball...")
        }
    })
}

promise5()
    .then(result => console.log(result))
    .catch(error => console.error(error))

async function promised5() {
    try {
        const result = await promise5()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

promised5()

// Zadaca 3

function checkNumber(number) {
    return new Promise((resolve, reject) => {
        if (typeof number !== 'number') {
            reject("Input must be a number.")
        } else if (number % 2 === 0) {
            resolve("The number is even.")
        } else {
            reject("The number is odd.")
        }
    })
}

function handleSuccess(message) {
    console.log(message)
}

function handleError(error) {
    console.error(error)
}

checkNumber(6)
    .then(handleSuccess)
    .catch(handleError)

checkNumber(7)
    .then(handleSuccess)
    .catch(handleError)

checkNumber("random number")
    .then(handleSuccess)
    .catch(handleError)

// Zadaca 4

function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: "John Doe",
          age: 30,
          email: "john@example.com",
        })
      }, 2000)
    })
  }

async function displayUserDetails () {
    try {
        const data = await fetchData()
        for (const [key, value] of Object.entries(data)) {
            console.log(`${key}: ${value}`)
        }
    } catch (error) {
        console.error(error)
    }
  }

displayUserDetails()

// Zadaca 5

function countdown(seconds) {
    const intervalId = setInterval(() => {
        if (typeof seconds !== 'number' || seconds < 0) {
            console.log("Enter a valid number of the seconds!")
        } else if (seconds > 0) {
            console.log(`${seconds} seconds remaining!`)
            seconds--
        } else {
            console.log("The countdown is complete!")
            clearInterval(intervalId)
        }
}, 1000)
}

countdown(6)