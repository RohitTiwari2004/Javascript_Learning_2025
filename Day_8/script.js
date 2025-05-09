// //  Bitwise operator

// console.log(3 << 1);

// console.log(4 >> 1);
// // 100
// // 010 = 2 the output is 2.

// console.log(~2);

// Ternary Operator

// Syntax: condition ? what if true : if false

// let user_1 = Number(prompt("Enter the first number"));
// let user_2 = Number(prompt("Enter the second number"));

// console.log(`${user_1 > user_2}` ? "Greater than user 2" : "Less than user 2");

// alert(`${user_1 > user_2}` ? "Greater than user 2" : "Less than user 2"); // creates alert message at the top of page.

// const USERNAME = "RohitTiwari";
// const PASSWORD = "Rohit123";

// let username = prompt("Enter the username");
// let password = prompt("Enter your password");

// console.log(
//   USERNAME == username && PASSWORD == password
//     ? "you are logged in successfully"
//     : "Wrong Username or Password"
// );

// let user_age = Number(prompt("Enter your age"));
// console.log(
//   user_age >= 18 && user_age < 40
//     ? "You are valid user for voting"
//     : "You are too early or too old for voting"
// );

// let firstnum = Number(prompt("Enter the first number"));
// let secondnum = Number(prompt("Enter the second number"));
// let result = firstnum / secondnum;
// console.log(
//   result > 10 || result < -1
//     ? "Result is greater than 10 or Result is negative"
//     : "Result is out of scope"
// );
// checking the number is even or odd
let num = Number(prompt("Enter any Number"));
console.log(num % 2 == 0 ? "The number is even" : "The number is odd");

// checking whether the given number is prime or not
let numcheck = Number(prompt("Enter any number"));
console.log(numcheck % 2 == 0 ? "Not a prime number" : "Prime Number");

// determine the greater value of two number

let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));
console.log(a < b ? "a is smallest" : "b is smallest");

// checking whether the number is positive, negative or zero
let user = Number(prompt("Enter any number"));
console.log(
  user > 0
    ? "The number is positive"
    : user < 0
    ? "The number is negative"
    : "The number is equal to zero"
);

// check if number is divisibe by 5

let num5 = Number(prompt("Enter any Number"));

console.log(
  num5 % 5 == 0
    ? "The number is  divisible by 5"
    : "The number is not divisible by 5"
);

// assign "pass" or "fail" based on marks

let marks = Number(prompt("Enter the marks gained by Student"));
console.log(marks >= 30 ? "The student is pass" : "The student is fail");

// assign grade based on score

let score = Number(prompt("Enter the score obtained by Student"));
console.log(score > 90 && score <= 100 ? "A" : "B");

// checking if a year is leap year or not
let year = Number(prompt("Enter the year"));
console.log(year % 4 === 0 ? "Leap year exists" : " Not a Leap year ");

// check if a string is empty or not
let string = prompt("Enter the string");
console.log(string == "" ? "The string is empty" : "The string is non-empty");

// Assign "Eligible" or "Not Eligible" for scholarship based on passing all 5 subjects.

let passing_subject = Number(
  prompt("Enter the number of subjects that you have passed")
);

console.log(
  passing_subject == 5
    ? "Eligble for scholarship"
    : "Not Eligible for scholarship"
);

// assign 'day' or 'night' based on hour (24 hour format)

let time_check = Number(prompt("Enter the time"));
console.log(time_check >= 0 && time_check <= 12 ? "Day" : "Night");

// Bitwise Operator

console.log(2 | 3);

// bitwise right shift and left shift operator
