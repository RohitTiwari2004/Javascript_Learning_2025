// celcius to degree fahrenheit convert
let celcius = Number(prompt("Enter the degree celcius"));
Fahrenheit = (celcius * 9) / 5 + 32;
console.log(`The degree fahrenheit is ${Fahrenheit}`);

// celcius to kelvin converter
kelvin = celcius + 273.15;
console.log(`The degree in kelvin is ${kelvin}`);

// Operators in Javascript
// Arithmetic Operator
// Logical Operator
// Types of Operator
// Relational Operator
// Ternary Operator
// Bitwise Operator

// Mathematical Operations
//  +, -, /, *, %

// console.log(30 + 30);  Addition
// console.log(30-30);  Subtraction
// console.log(30/3);  Division
// console.log(10*3); Multiplication
// console.log (3%3); modulus , it gives remainder as output.

// logical operator
// console.log(true && true);

// // OR Operation

// console.log(1 || 1);
// console.log("abc" || false);

// problem solving questions

// console.log(0 + 1 && false); // false

// console.log(0 - 1 && true); //true

// console.log("abc" || " " || true); //abc

// console.log(true && " " && ""); // true

// console.log("" || ""); //false

// console.log(true || (false && true && "abc") || false); //true

// console.log(null || undefined); //  false || false = undefined

// console.log(undefined || false); //false last ko false ligne

// console.log(null && true); // null

// console.log(null || true || false); //true

// // Relational /Comparison Operator

// //  <, >, <=, >=, != ,

// console.log(10 > 20);
// console.log("10" == 10); //true , it performs type coertion
// console.log("10" === 10);  //false, it does not perform type coertion

// a = Number(prompt("Enter the first number"));
// b = Number(prompt("Enter the second number"));
// if (a > b) {
//   console.log(` The a is greater`);
// } else {
//   console.log(`The b  is greater`);
// }

// Converting metre to kilometer

let metre_distance = Number(prompt("Enter the distance in metre"));
let km_distance = metre_distance / 1000; // 1 km = 1000 metre
console.log(`The distance in kilometre is ${km_distance}`);

// Converting kilometer to miles

let Texas_distance = Number(prompt("Enter the distance of Texas in kilometer"));
let miles_distance = Texas_distance / 1.6093;
console.log(`The Texas's distance in miles is ${miles_distance.toFixed(2)}`);

// converting centi meter to meter

let centimeter_distance = Number(prompt("Enter the distance in centimeter "));
let meter_distance = centimeter_distance / 100;
console.log(`The meter_distance is ${meter_distance}`);

// converting yard to kilometer
let yard_distance = Number(prompt("Enter the distance in yard"));
let kilometer_distance = yard_distance * 0.0009144;
console.log(`The kilometer_distance is ${kilometer_distance}`);
