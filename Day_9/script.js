// -----------------Assignment Operators -----------------------------
let first = 10;
const SECOND = 10;

// Short Hand Operator

let a = (b = c = d = e = f = 7);
console.log(e);
// = , ==, ===

//........................ compound operators..............................

// let myvar = 10;
// myvar = myvar - 5;
// myvar -= 5; // myvar = myvar - 5
// myvar *= 10;

let varvalue = 16;
console.log((varvalue += 16));

let usd_amount = Number(prompt("Enter the amount in USD"));
usd_amount *= 138;
console.log("The amount in Nepali RS is " + usd_amount);

let A = Number(prompt("Enter the number from User"));
let B = Number(prompt("Enter the number from user"));
A += B;
console.log(A);

let C = (D = I = Number(prompt("Enter the number ")));
let F = (G = J = Number(prompt("Enter the second number")));
console.log((C *= F));
console.log((D -= G));
console.log((I += J));

// Increment / decrement operator
// Post increment
let value1 = 14;
let value2 = value1++;
console.log(value1); //15
console.log(value2); // 14

// Pre increment
let value12 = 19;
let value13 = ++value12;
console.log(value12); //20
console.log(value13); // 20

let myNumber = 20;
let mySecondNumber = 100;
let myresult = ++myNumber + myNumber-- + mySecondNumber-- - --mySecondNumber;
// 21  + 21 + 100 - 98
console.log(myresult);
