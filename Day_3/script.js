// DATA TYPE IN JAVASCRIPT
// STRING
//  NUMBER, INTEGER, FLOAT
// BIGINT
// BOOLEAN
// NULL
// SYMBOL
// Undefined

//  structed information is known as data
//  Data Type = Describes what type of data that we are recording
// Data + Some Processing = Information

//  String is combination of characters wrapped by single or double quotes.
// Any thing that are included on single ('') or double ("") quotation represents as a string

// let my_name = "Rohit";
// console.log(typeof my_name);

// name1 = prompt("Enter your name");
// console.log(typeof name1);

// numvalue = Number(prompt("Enter the number value that you want to print"));
// console.log(typeof numvalue);

// let number = 10.1;
// console.log(typeof number);

console.log(0.3 + 0.1);

let myNumber = 9007199254740991;
console.log(myNumber);

let min_number = -9007199254740991;
console.log(min_number);

let my_binary = 0b1010;
console.log(my_binary);

let my_octalnum = 0o100;
console.log(my_octalnum);

let my_hex = 0xfabc;
console.log(my_hex);

// 3) BIG INT

let BigIntNumber = 1011n;
console.log(BigIntNumber);

let my_bank_balance = 10000000001.111; // removing number big int does not take  floating value.
console.log(my_bank_balance);

console.log(10n + 10n); // type should be similar.

// Boolean

//  gives either true or false, 0 or 1.
let isDivorced = true;
let canRead = false;
console.log(isDivorced);

// UNDEFINED CONDTION
let my_variable;
console.log(my_variable);

//  symbol data type

const MySymbol = Symbol("abc");
console.log(MySymbol); // used to represent the unique key (in object), that will cover later
console.log(typeof MySymbol);

// Null (it means no value)

let MyNullValue = null;
console.log(MyNullValue);
console.log(typeof MyNullValue); // One of the biggest bug in the JS World
