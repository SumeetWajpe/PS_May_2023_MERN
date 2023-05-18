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
var x;
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
// function Emp() {
//   this.salary = 200000;
//   setTimeout(function () {
//     console.log(this.salary);
//   }, 2000);
// }
// var eObj = new Emp();
// console.log(eObj.salary);
// let & const - ES6 - Block Scoping
// if (true) {
//   let x = 1000;
// }
// console.log(x);
let i;
// 100 lines
// let i: number; // Error
const PI = 3.14;
// PI = 3.1456; // Error
// Arrays
// var cars = ["BMW", "AUDI", "MERC"]; // js
// var cars: string[] = ["BMW", "AUDI", "MERC"];// ts way
// OR - Generics
// var cars: Array<string> = new Array<string>("BMW", "AUDI", "MERC"); // ts way
// // Spread Operator (ES6) - Arrays
// var moreCars: string[] = ["TATA", "MAHINDRA"];
// var allCars: string[] = [...cars, ...moreCars];
// console.log(allCars);
// Spread Operator - Objects
// var person = { name: "Djokovic", country: "Serbia" };
// var player = { ...person, sport: "Tennis", country: "SRB" };
// console.log(player);
// Destructuring - ES6
// With Arrays
// var cars: string[] = ["BMW", "AUDI", "MERC"]; // ts way
// // let firstCar: string = cars[0];
// // let secondCar: string = cars[1];
// // OR
// let [firstCar, ,secondCar] = cars;
// console.log(secondCar);
// Destructuring - ES6
// With Objects
// var player = {
//   lname: "Djokovic",
//   country: "Serbia",
//   sport: "Tennis",
// };
// let lname: string = player.lname;
// let country: string = player.country;
// let { lname, country } = player;
// console.log(lname);
// var person = { name: "Djokovic", country: "Serbia" };
// function PrintPerson({ name, country }) {
//   console.log(name + " lives in " + country);
// }
// PrintPerson(person);
// Interfaces
// interface IPerson {
//   name: string;
//   country: string;
// }
// var person: IPerson = { name: "Djokovic", country: "Serbia", xyz: 123 };
// type Person = {
//   name: string;
//   country: string;
// };
// var person: Person = { name: "Djokovic", country: "Serbia", xyz: 123 };
//Classes
class Car {
    constructor(name = "BMW", speed = 200) {
        this.name = name;
        this.speed = speed;
    }
    accelerate() {
        return "The car " + this.name + " is running at " + this.speed + " kmph !";
    }
}
// var carObj = new Car();
// console.log(carObj.accelerate());
class JamesBondCar extends Car {
    constructor(name, speed, canUseNitro) {
        super(name, speed);
        this.canUseNitro = canUseNitro;
    }
    static GetCarMakeYear() {
        console.log(this);
        return this.carMake;
    }
}
JamesBondCar.carMake = 1983;
var jbc = new JamesBondCar("Aston Martin", 300, true);
console.log(jbc.accelerate());
// console.log(JamesBondCar.carMake);
console.log(JamesBondCar.GetCarMakeYear());
