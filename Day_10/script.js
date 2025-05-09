//  /..........................Operator Precedence and Associativity .....

console.log(10 + 40 / 12);

console.log(4 * [5 / 100]);

myvar = 10;
myvar = myvar + 1 + myvar++;

// 1 0 0
// 0 1 0
// ...........
// 1 1 0 = 6 [5th semester Networking]

// ............... conditional statements

//  if else
//  for loop
// while loop
//  do while loop (3 + more after we complete array session....)

a = Number(prompt("Enter the first number"));
b = Number(prompt("Enter the second number"));

if (a < b) {
  console.log("a is smaller");
  alert("a is smaller");
} else {
  console.log("b is smaller");
  alert("b is smaller");
}

year = Number(prompt("Enter the year"));
if (year % 4 == 0) {
  console.log("Leap Year exists");
} else {
  console.log("Not a leap year");
}

product_amount = Number(
  prompt("Enter the amount of five products that you haved bought")
);

if (product_amount > 1000) {
  console.log("Eligible for 5% discount");
  alert("Eligibe for 5% discount");
} else {
  console.log("not eligible for discount");
  alert("Not eligible for discount");
}

character = prompt("Enter the character");
if (
  character == "a" ||
  character == "e" ||
  character == "i" ||
  character == "o" ||
  character == "u" ||
  character == "A" ||
  character == "E" ||
  character == "I" ||
  character == "O" ||
  character == "U"
) {
  console.log("Vowel letter exists");
} else {
  console.log("vowel letter does not exists");
}

weekend = prompt("Enter the weekend days");
if (
  weekend == "sunday" ||
  weekend == "monday" ||
  weekend == "SUNDAY" ||
  weekend == "MONDAY"
) {
  console.log("The day you entered here is weekend");
} else {
  console.log("The day you entered here is not a weekend");
}

// checking days or nights

let time = Number(prompt("Enter the time"));
if (time >= 0 && time < 12) {
  console.log("The time you entered is day time");
} else if (time >= 12 && time < 24) {
  console.log("The time you entered is night time");
} else {
  console.log("Invalid time");
}

// checking special characters

// let characters = prompt("Enter the special character");
// if (
//   characters == "$" ||
//   characters == "#" ||
//   characters == "@" ||
//   characters == "!"
// ) {
//   console.log(
//     "The character you entered in the console box is special character"
//   ); else {
//     console.log('Invalid');
//   }
// }
