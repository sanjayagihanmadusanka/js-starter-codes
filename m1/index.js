// alert("Hello world")
// js = "Java Script"
// if (js === "Java Script") alert("found a match")

$ = "" //valid
_ = "" //valid

typeof null;       // "object"

// String to Number
let str = "123";
let num = Number(str);   // explicit conversion
console.log(num);        // 123 (number)
// Number to String
let n = 42;
let s = String(n);       // explicit conversion
console.log(s);          // "42" (string)
// Boolean to Number
let b = true;
console.log(Number(b));  // 1

// String + Number → String (concatenation)
console.log("5" + 2);  // "52"
// String - Number → Number (subtraction forces numeric conversion)
console.log("5" - 2);  // 3
// Boolean → Number (in arithmetic)
console.log(true + 1); // 2

let userNamr = prompt("enter your name: ");

let fruit = "apple";
switch (fruit) {
  case "apple":
  case "mango":
  case "banana":
    console.log("It’s a fruit!");
    break;
  default:
    console.log("Not sure what it is...");
}

let canVote = (age >= 18) ? "Yes, you can vote" : "No, you are too young";