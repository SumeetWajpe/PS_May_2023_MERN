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
function PrintBook(author, title, noOfPages) {
    console.log(author, title, noOfPages);
}
PrintBook("Dummy");
PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire", 300);
