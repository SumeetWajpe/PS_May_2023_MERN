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
function Add(x, y) {
    if (x == 0) {
        return "x cannot be zero !";
    }
    return x + y;
}
var result = Add(20, 30);
console.log(result);
// Add("Hello", "World !"); // Error !
// Parameters of Functions
//1. Optional Parameters
// function PrintBook(author: string, title?: string, noOfPages?: number) {
//   console.log(author, title, noOfPages);
// }
// PrintBook("Dummy");
// PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire", 300);
// 2. Default Parameters
function PrintBook(author, title) {
    if (author === void 0) { author = "Unknown"; }
    if (title === void 0) { title = "Unknown"; }
    //   author = author || "Unknown";
    //   title = title || "Unknown"; // ES5 - Short circuiting
    console.log(author, title);
}
PrintBook();
PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire");
