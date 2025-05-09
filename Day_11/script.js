// ................IF ElSE IF LADDER..................

let gpa = Number(prompt("Enter your GPA"));
if (gpa > 2.7 && gpa <= 3.0) {
  console.log("You have got grade B");
} else if (gpa > 3.0 && gpa <= 3.2) {
  console.log("You have got grade B+");
} else if (gpa > 3.2 && gpa <= 3.6) {
  console.log("You have got grade A");
} else if (gpa > 3.6 && gpa <= 4.0) {
  console.log("Congratulations You have got A+");
} else {
  console.log("Sorry You have failed");
}

let age = Number(prompt("Enter your age"));
if (age >= 0 && age <= 12) {
  console.log("You are child");
} else if (age >= 13 && age <= 19) {
  console.log("You are in teen age");
} else if (age > 19 && age <= 34) {
  console.log("You are young");
} else if (age > 34 && age <= 54) {
  console.log("You are old");
} else {
  console.log("you are too old");
}

// Tax counter

let Income = Number(prompt("Enter your Income"));
if (Income > 100000 && Income <= 500000) {
  console.log("1% Tax according to your Income");
} else if (Income > 500000 && Income <= 5000000) {
  console.log("5% Tax according to your Income");
} else if (Income > 500000 && Income >= 10000000) {
  console.log("10% tax according to your Income");
} else {
  console.log("your are tax free");
}
//
time = Number(prompt("Enter the time"));
if (time >= 0 && time < 12) {
  console.log("Good Morning");
} else if (time >= 12 && time < 16) {
  console.log("Good Afternoon");
} else if (time >= 17 && time < 21) {
  console.log("Good evening");
} else if (time > 24) {
  console.log("Invalid time");
} else {
  console.log("good night");
}

// finding the which type of triangle they are...
let side = Number(prompt("Enter the side of Triangle"));
if (side == 3) {
  console.log("Equilateral Triangle");
} else if (side == 2) {
  console.log("Isosceles Triangle");
} else {
  console.log("scalar triangle");
}

//
let side_1 = Number(prompt("Enter the first side"));
let side_2 = Number(prompt("Enter the second side"));
let side_3 = Number(prompt("Enter the third side "));
if (side_1 == side_2 && side_1 == side_3) {
  console.log("Equilateral Triangle");
} else if (side_1 == side_2 || side_1 == side_2 || side_2 == side_3) {
  console.log("Isosceles Triangle");
} else {
  console.log("scalar triangle");
}

// BMI ranges

let BMI = Number(prompt("Enter your BMI Range"));
if (BMI < 18.5) {
  console.log("You are underweight");
} else if (BMI >= 18.5 && BMI < 24.9) {
  console.log("You are healthier");
} else {
  console.log("Obesity");
}
// find the greatest among three number

let first_num = Number(prompt("Enter the first number"));
let second_num = Number(prompt("Enter the second number"));
let third_num = Number(prompt("Enter the third number"));
if (first_num > second_num && first_num > third_num) {
  console.log("A is greatest");
} else if (second_num > third_num && second_num > first_num) {
  console.log("B is greatest");
} else {
  console.log("C is greatest");
}
// wap to print your name 50 times...(don't bother to use loops)
