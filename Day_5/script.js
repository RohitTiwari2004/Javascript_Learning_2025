// Assignment
// Sphere
// Square
// Cone
// Half Sphere
//  Rectangle
// Triangle

// Sphere , The area of sphere is a = 4 * pi * r * r
const Pi = 3.14;
User_Input = Number(prompt("Enter Radius"));
console.log("The area of Sphere is ", +4 * Pi * (User_Input * 2));

// Square, Area of Square = l^2 (l*l)
length = Number(prompt("Enter the length"));
console.log("The area of Square is ", +length * length);

// Cone = Area of Cone =   pie * r *l

const Pie = 3.14;
l = Number(prompt("Enter the length"));
r = Number(prompt("Enter the radius"));
console.log("The curved surface area of cone is ", +Pie * r * l);

// Half Sphere Formula Area of Half Sphere = 3*pie*r*r
const pie = 3.14;
rad = Number(prompt("Enter the radius"));
console.log("The area of half sphere is ", +3 * pie * rad * rad);

// rectangle formula =  l *b
Length = Number(prompt("Enter the length"));
Breadth = Number(prompt("Enter the breadth"));
console.log("The area of rectangle is ", +Length * Breadth);

// Triangle = 1/2 *b*h

base = Number(prompt("Enter base"));
height = Number(prompt("Enter the height"));
console.log((1 / 2) * base * height);
