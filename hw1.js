// Zadaca 1
let hasCoffee = true;
let hasTea = false;
let hasMilk = true;

let one = hasTea || hasMilk;
let two = hasCoffee && hasTea;
let three = !hasTea;
let four = (hasCoffee || hasMilk) && !(hasCoffee && hasMilk);
let five = (hasTea && hasMilk) || (hasCoffee && hasMilk);
let six = !hasCoffee && !hasTea;

console.log(one, two, three, four, five, six);

// Zadaca 2
const num1 = 10;
const num2 = 5;
const num3 = 8;
const num4 = 2;
const num5 = 12;
const num6 = 4;
const num7 = 3;

let math = (num1 + num2) * (num3 - num4) + (num5 / num6) ** num7;
console.log(math);

// Zadaca 3, deklarirani se drugi dve promenlivi zatoa sto gore se iskoristeni konstantite num1 i num2
let numtwelve = 12;
let numfour = 4;

let sum = numtwelve + numfour;
let diff = numtwelve - numfour;
let mult = numtwelve * numfour;
let div = numtwelve / numfour;
let rem = numtwelve % numfour;

console.log(sum, diff, mult, div, rem);