// Zadaca 1
let globalNum = 10;
function checkScope() {
    let localNum = globalNum;
    console.log(globalNum);
}
console.log(globalNum === localNum);
// Ovoj console.log kje ni frli reference error, zatoa sto varijablata localNum e definirana vnatre vo samata funkcija (vo samiot blok)
if(true){
    let blockNum = 10;
}
console.log(typeof blockNum);
// Ovoj console.log kje ni vrati undefined, zatoa sto, pak, promenlivata blockNum e definirana vnatre vo if statement, i ne ja cita nadvor

// Zadaca 2
let score = 78;
if (score >= 90 && score <= 100) {
    console.log("Grade: A");
} else if (score >=80 && score <= 89) {
    console.log("Grade: B");
} else if (score >=70 && score <= 79) {
    console.log("Grade: C");
} else if (score >=60 && score <= 69) {
    console.log("Grade: D");
} else if (score >=0 && score <= 59) {
    console.log("Grade: F");
} else {
    console.log("Invalid score! Please enter a score between 0 and 100!")
}

let dayNumber = 4;
switch (dayNumber) {
    case 1:
    console.log("The day is Sunday.")
    break;
    case 2:
    console.log("The day is Monday.")
    break;
    case 3:
    console.log("The day is Tuesday.")
    break;
    case 4:
    console.log("The day is Wednesday.")
    break;
    case 5:
    console.log("The day is Thursday.")
    break;
    case 6:
    console.log("The day is Friday.")
    break;
    case 7:
    console.log("The day is Saturday.")
    break;
    default:
        console.log("Invalid day number. Please enter a number between 1 and 7!")
}

// Zadaca 3

function addingThreeNums(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    return sum
}
function printMyName() {
    console.log("My name is Maksim.")
}
function compareYourNumbers(num1, num2) {
    if (num1 === num2) {
        console.log("These numbers are equal.");
    } else {
        console.log("These numbers are not equal.");
    }
}
console.log(addingThreeNums(10, 20, 25));
printMyName();
compareYourNumbers(10, 15);
compareYourNumbers(15, 15);

// Zadaca 4

let age = 24;

if (age >= 21) {
    console.log("You can vote and buy alcohol.")
} else if (age >= 18 && age <= 20){
    console.log("You can vote but you can't buy alcohol.")
} else {
    console.log("You can't vote or buy alcohol.")
}

function daysInMonth(month) {
    switch(month) {
    case "January":
        return 31;
    case "February":
        return 28;
    case "Marchc":
        return 31;
    case "April":
        return 30;
    case "May":
        return 31;
    case "June":
        return 30;
    case "July":
        return 31;
    case "August":
        return 31;
    case "September":
        return 30;
    case "October":
        return 31;
    case "November":
        return 30;
    case "December":
        return 31;
    default:
        console.log("Invalid input");
        return;
    }
}
console.log(daysInMonth("February"));

let temperature = 21

if (temperature >= 30) {
console.log("Hot");
} else if (temperature >= 20 && temperature <= 29) {
console.log("Warm");
} else if (temperature <= 15) {
console.log("Cold");
} else if (temperature > 15 && temperature < 20) {
console.log("Average");
}

// Zadaca 5

function devidableNum(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz")
    } else if (number % 3 === 0) {
        console.log("Fizz")
    } else if (number % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(number)
    }
}

devidableNum(6)
devidableNum(10)
devidableNum(15)
devidableNum(7)

// function devidableNum(number) {
//     if (number % 3 === 0) {
//         console.log("Fizz")
//     } else if (number % 5 === 0) {
//         console.log("Buzz")
//     } else if (number % 3 === 0 && number % 5 === 0) {
//         console.log("FizzBuzz")
//     } else {
//         console.log(number)
//     }
// }

// devidableNum(6)
// devidableNum(10)
// devidableNum(15)
// devidableNum(7)

// Zosto koga ke go smenime redosledot na statement-ovite (Fizz > Buzz > FizzBuzz) programata ne raboti? Statement-ot raboti pravilno
// samo koga FizzBuzz baranjeto e na pocetok (kaj if) a ne raboti koga ke stoi podole (kaj else if)