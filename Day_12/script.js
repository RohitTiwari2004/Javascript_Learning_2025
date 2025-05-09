// wap to print your name 50 times..

for (i = 1; i <= 50; i++) {
  console.log("Rohit Tiwari");
}
// wap to print number from 1 to 100
for (i = 1; i <= 100; i++) {
  console.log(i);
}

for (i = 100; i >= 1; i--) {
  console.log(i);
}

for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}

let a = Number(prompt("Enter the starting number"));
let b = Number(prompt("Enter the ending number"));
for (let i = a; i <= b; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

for (i = 1; i <= 10; i += 1) {
  console.log(`5*${i}=${5 * i}`);
}
let sum = 0;
firstnum = Number(prompt("Enter the starting phase number"));
secondnum = Number(prompt("Enter the ending phase number"));
for (i = firstnum; i <= secondnum; i++) {
  if (i % 2 == 1) {
    sum = sum + i;
    console.log(i);
  }
}
console.log(`The sum of odd number is ${sum}`);

let sum1 = 0;
num1 = Number(prompt("Enter the starting  number"));
num2 = Number(prompt("Enter the ending number"));
for (count = num1; count <= num2; count++) {
  if (count % 2 == 0) {
    sum1 = sum1 + count;
    console.log(count);
  }
}
console.log(`The sum of even number is ${sum1}`);
