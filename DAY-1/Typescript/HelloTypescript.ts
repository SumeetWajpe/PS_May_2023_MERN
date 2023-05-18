//var x = 100; // Type inferencing
// x = "Hello !"; // Error

// var x: number; // Type annotation
// x = 100;
// console.log(typeof x);
// var str: string;
// var bool: boolean;

// var z; // implicitly of type any (bad practise)
// z = 10;
// z = true;
// z = "Hi";
// z = {};
// z = [];

var x: number | string;

x = "Hi";
x = 100;

// Functions
// function Add(x: number, y: number): number | string {
//   if (x == 0) {
//     return "x cannot be zero !";
//   }
//   return x + y;
// }

// let result: string | number = Add(20, 30);
// console.log(result);
// Add("Hello", "World !"); // Error !

// Parameters of Functions
//1. Optional Parameters

// function PrintBook(author: string, title?: string, noOfPages?: number) {
//   console.log(author, title, noOfPages);
// }

// PrintBook("Dummy");
// PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire", 300);

// 2. Default Parameters

// function PrintBook(author: string = "Unknown", title: string = "Unknown") {
//   //   author = author || "Unknown";
//   //   title = title || "Unknown"; // ES5 - Short circuiting
//   console.log(author, title);
// }

// PrintBook();
// PrintBook(undefined, "Dummy");
// PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire");

// 3. Rest parameters
// function PrintBook(author: string, ...titles: string[]) {
//   console.log(author, titles);
// }

// PrintBook("Dr. APJ Abdul Kalam", "Wings of fire", "India 2020");
// PrintBook("Sachin Tendulkar", "Playing It My Way");
// PrintBook("Dummy");

// Function as an expression

// var Add = function (x: number, y: number) {
//   return x + y;
// };

// Arrow Functions
// var Add = (x: number, y: number): number => {
//   return x + y;
// };
// OR
// var Add = (x: number, y: number): number => x + y;

// var cars = ["BMW", "AUDI", "MERC"];
// cars.forEach(function (car) {
//   console.log(car);
// });
// OR
// cars.forEach((car: string) => console.log(car));

// var Test = () => console.log("Testing 1 2 3..");

function Emp() {
  this.salary = 200000;
  setTimeout(function () {
    console.log(this.salary);
  }, 2000);
}

var eObj = new Emp();
// console.log(eObj.salary);
