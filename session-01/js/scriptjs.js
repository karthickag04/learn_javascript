// // // // Alert is commented out, used to show a popup message
// // let a =prompt("enter your name.. ")

// // let description="Hi ... " + a + " Javascript code works well";

// // console.log(description)

// // document.getElementById("fullname").innerHTML=description;
// // alert("Hi ... " + a + " Javascript code works well")

// // // Use console to check the below line
// console.log("Welcome to javascript"); // Print a string message
// console.log('Welcome to javascript1'); // Print another string message
// console.log(10); // Print an integer
// console.log(10.10); // Print a float number

// console.clear()
// // To print objects in console
// console.log({fname: "karthick", gender: "Male"}); // Print an object

// // Print object in a table format
// console.table({fname: "karthick", gender: "Male"});
// console.log({fname: "karthick", gender: "Male"});

// // // To print Array in console
// console.log([5, [23,20.3], 10.4, "karthick"]); // Print an array

// // // Print array in a table format
// console.table([5, 10, 20, 15]);
// console.clear()
// // // Boolean data type
// console.log(true); // Print a boolean value
// console.clear()
// // // Print in console with variable declaration
// var a = 5; // Declare a variable using var
// let b = 7; // Declare a variable using let
// const c = 10; // Declare a constant variable using const

// // // Print the values of the variables
// console.log(a);
// console.log(b);
// console.log(c);

// // // Reassign the values of a and b
// a = 6;
// console.log(a);
// b = 8;
// console.log(b);

// // c = 10; // This will throw an error because const variable can't be reassigned
// // console.log(c);

// // Reassign the values as decimal values
// a = 6.5;
// console.log(a);
// b = 8.5;
// console.log(b);

// // // Reassign the values as string values
// a = "karthick";
// console.log(a);
// b = "RAM";
// console.log(b);

// // // You can redeclare a variable used with "var"
// var a = 25;

// console.log(a);

// // // You cannot redeclare a variable used with "let"
// // var b = 25; // This will produce an error as identifier b is already declared
// // // console.log(b);

// // Declare an object type
// a = {fname: "karthick", gender: "Male"};
// console.log(a);
// console.table(a);

// // Declare another object type
// b = {fname: "karthick", gender: "Male"};
// console.log(b);
// console.table(b);

// // // To declare an array
// a = [12, 11, 25, 60];
// console.log(a);
// console.table(a);

// // // To declare another array
// b = [12, 11, 25, 60];
// console.log(b);
// console.table(b);

// // // Clear the console
// console.clear();

// // // To know what type of values are given
// a = 1;
// console.log(a,typeof a); // Print the type of the variable

// a = 1.5;
// console.log(a,typeof a); // Print the type of the variable

// a = "Raguvaran";
// console.log(a + " : " + typeof a); // Print the value and type of the variable

// a = true;
// console.log(a + " : " + typeof a); // Print the value and type of the variable

// a1 = [12, 15, 10];
// console.log(a1 + " : " + typeof a1); // Print the value and type of the array

// a = {fname: "ragu", gender: "Male"};
// console.log("To know above object type : " + typeof a); // Print the type of the object

// console.clear()
// // // Type conversion
// // a = prompt("enter value a1");
// a = 20;
// console.log(typeof a); // Print the type of the variable
// console.log(Number(a) + 10); // Addition of number
// a = a.toString(); // Convert number to string
// // console.log(String(a) + 10); // Concatenation of string and number
// // console.log(typeof a); // Print the type of the variable
// // console.log(Number(a) + 10); // Convert string to number and add
// // console.log(parseInt(a) + 10); // Convert string to integer and add
// // console.log(parseFloat(a) + 10.9); // Convert string to float and add
// console.clear()
// // // To convert boolean to number use Number not parseInt
let a1 = true;

console.log(typeof a1); // Print the type of the variable
console.log(Number(a1)); // Print the type of the variable

// a1 = Number(a1); // Convert boolean to number
// console.log(typeof a1); // Print the type of the variable
// console.log(a1); // Print the value of the variable

// a1 = parseFloat(a1); // Convert number to float
// console.log(typeof a1); // Print the type of the variable
console.clear()
// // Difference between concatenation and addition
// Concatenation
a = "60";
d = 55;
a = a + d; // Concatenate string and number
console.log(a); // Print the result

// Addition
a = 60;
d = null;
a = a + d; // Add number and null
console.log(a); // Print the result
