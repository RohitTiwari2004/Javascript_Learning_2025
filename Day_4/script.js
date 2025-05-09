// Type Conversion
let myNumber = "10";
console.log(myNumber + 10); // + is an operator polymorphism (poly - many)  (morph - form)

let convertedValue = "10";
console.log(Number(convertedValue) + 10);

//  Some tweaks (EDGE CASES) WHILE CONVERTING TO NUMBER TYPE

let myTweak = Number("abcd");
console.log(myTweak);

let check2 = Number(true);
console.log(check2);

let check3 = Number(false);
console.log(check3); // It gives output 0 when we give false as an input

console.log(-true / false);

//  Boolean
//  IN case of empty string (' '), it gives output as false.

let BooleanValue = Boolean(true);
console.log(BooleanValue);

let BooleanValue2 = Boolean("");
console.log(BooleanValue2);

let numberchecking = Boolean("0");
console.log(numberchecking); // Trickier one.  One of the special one

let numberchecking3 = Boolean(0);
console.log(numberchecking3);
// Number Case

let boolean_num = Boolean(1000);
console.log(boolean_num); // non zero value is true and zero value is false

let boolean_num1 = Boolean(0.1);
console.log(boolean_num1);

// Conversion to string type from different other types

let myValue = String("Hey, Welcome to Our Channel");
console.log(myValue);

let myvalue1 = String(10);
console.log(myvalue1);

let value2 = String(Infinity);
console.log(value2);

//  Type Coertion

console.log("100" - 20); // Javascript itself does it.
console.log(Number("100") + 201);
console.log("199" + 20);

console.log("abc" + null - true + false);

console.log("20" - 10 + 200 - "30");

console.log("abc" + true * 2);

// Take a positive number input from user using prompt, Example "10"
// convert that input into negative number, exmple -10
// console it

// num1 = Number(prompt("Enter any number"));
// console.log(-num1);

// console.log("-10" * 1);

// console.log("10");

// num2 = Number(prompt("Enter any number"));
// console.log(num2 * -1);

// num3 = Number(prompt("Enter any number"));
// console.log(num3 / -2);

// BirthYear = Number(prompt("Enter your birth year"));
// console.log(2025 - BirthYear);

//  Testing the given number is even.

// usertypenum = Number(prompt("Enter any number"));
// if(num%=2) {
//     console.log("The number that you have typed is e")
// }

// const Len = Number(prompt("Enter the length"));
// const Breadth = Number(prompt("Enter the breadth"));
// const Height = Number(prompt("Enter the height"));
// console.log(Len * Breadth * Height);

//
let userinput1 = Number(prompt("Enter the diameter of circle"));
console.log("The radius is " + userinput1 / 2);
const PI = 3.14;
console
  .log("The area of circle is " + (((PI * userinput1) / 2) * userinput1) / 2)
  .toFixed(2);

// Assignment
// Sphere
// Square
// Cone
// Half Sphere
//  Rectangle
// Triangle
