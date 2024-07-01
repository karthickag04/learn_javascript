// Example 1: Basic function without return value
function checkgrade() {
    console.log("welcome"); // Print "welcome" to console
}

x = checkgrade(); // Calling function
console.log("printing x :", x); // Printing x: undefined because function doesn't return anything

// Example 2: Function with addition and console output
function addition1() {
    let a = 10; // Declare and initialize variable a
    let b = 20; // Declare and initialize variable b
    let sum = a + b; // Calculate sum of a and b
    console.log("sum is :", sum); // Print sum to console
}

if (addition1() == 30) { // addition1() doesn't return anything, so this condition is always false
    console.log("correct");
}
console.log("***************************");

// Example 3: Function with addition and return value
function addition() {
    let a = 10; // Declare and initialize variable a
    let b = 20; // Declare and initialize variable b
    let sum = a + b; // Calculate sum of a and b
    console.log("sum is :", sum); // Print sum to console
    return sum; // Returning sum value
}

x = addition(); // Calling function and storing returned value
if (x == 30) {
    console.log("correct"); // Print "correct" if x equals 30
}

// Define a function expression with arrow function syntax for addition
var sum = (a, b) => a + b;
console.log(sum(10, 20)); // Call arrow function and print the result

x = checkgrade(); // Calling function again
console.log("printing x :", x); // Print x: undefined

// Function that prints and returns a string
function checkgrade_with_return() {
    console.log("Welcome"); // Print "Welcome" to console
    return "welcome"; // Returning a string
}

x = checkgrade_with_return(); // Calling function and storing returned value
console.log("printing x :", x); // Print x: "welcome"

// Define another arrow function for addition
var sum = (a, b) => a + b;
console.log(sum(10, 22)); // Call arrow function and print the result

// Example 4: Function call before definition (checkgrade1 is not defined)
// console.log("added Value", checkgrade1(1, 2)); // Uncommenting this will throw an error

// Example 5: Storing function output in a variable (checkgrade1 is not defined)
// var printmsg = checkgrade1(1, 2); // Uncommenting this will throw an error
// console.log(printmsg); // Uncommenting this will throw an error

// Example 6: Arrow function shorthand
var checkgrade2 = (a, b) => a + b; // Define an arrow function with shorthand syntax
console.log(checkgrade2(5, 10)); // Call arrow function and print the result

// Example 7: Redefining function checkgrade2 with another function call
var checkgrade2 = () => checkgrade(); // Redefine checkgrade2 to call checkgrade()
console.log(checkgrade2()); // Call checkgrade function through checkgrade2

// Example 8: Conditional statements (if, if-else, nested if-else)
function gradeChecking(m) {
    if (35 > m && m != null) { // Check if m is less than 35 and not null
        console.log("no grade"); // Print "no grade"
        console.log("Fail"); // Print "Fail"
    } else {
        if (35 < m && m != null && m <= 60) { // Check if m is between 35 and 60 and not null
            console.log("Pass"); // Print "Pass"
            console.log("Grade c"); // Print "Grade c"
        } else if (60 < m && m != null && m <= 80) { // Check if m is between 60 and 80 and not null
            console.log("Pass"); // Print "Pass"
            console.log("Grade b"); // Print "Grade b"
        } else if (80 < m && m != null && m <= 100) { // Check if m is between 80 and 100 and not null
            console.log("Pass"); // Print "Pass"
            console.log("Grade A"); // Print "Grade A"
        } else {
            gradeChecking(prompt("enter mark")); // Recursively call gradeChecking if input is invalid
        }
    }
}

gradeChecking(99); // Calling gradeChecking with argument 99

// Example 9: Clearing console
console.clear();

// SWITCH CONDITIONAL STATEMENT

function checkingWithSwitch(a) {
    console.log(a, typeof a); // Print value and type of a

    var a = Number(a); // Convert a to number
    console.log(a, typeof a); // Print value and type of a
    switch(a) {
        case 1:
            // Case 1
            console.log('executed case 1', typeof a); // Print case 1 execution
            break;
        case 2:
            // Case 2
            console.log("case 2 executed", a); // Print case 2 execution
            break;
        case 3:
            // Case 3
            console.log("case 3 executed"); // Print case 3 execution
            break;
        default:
            // Default case
            alert("cases not in list"); // Alert default case
    }
}
console.clear();
checkingWithSwitch(prompt("Enter the condition value")); // Prompt for a value and call checkingWithSwitch

console.clear();

function checkingWithSwitch(a1, b1, a) {
    // Switch case for different operations
    switch(a) {
        case 'add':
            // Addition case
            console.log('executed addition case', a1 + b1); // Print addition result
            break;
        case 'subtract':
            // Subtraction case
            console.log("subtraction case executed", a1 - b1); // Print subtraction result
            break;
        case 'multiply':
            // Multiplication case
            console.log("multiplication case executed", a1 * b1); // Print multiplication result
            break;
        default:
            // Default case
            alert("operator not in the list"); // Alert default case
    }
}
console.clear();
checkingWithSwitch(2, 5, "add"); // Call checkingWithSwitch with addition operation

function checkingWithSwitch(a) {
    var a1, b1;
    a1 = prompt("enter a1"); // Prompt for a1 value
    b1 = prompt("enter b1"); // Prompt for b1 value
    a1 = Number(a1); // Convert a1 to number
    b1 = Number(b1); // Convert b1 to number

    // Switch case for different operations
    switch(a) {
        case 'add':
            // Addition case
            console.log('added value of', a1, 'and', b1, 'is ..', a1 + b1); // Print addition result
            break;
        case 'subtract':
            // Subtraction case
            console.log('subtracted value of', a1, 'and', b1, 'is ..', a1 - b1); // Print subtraction result
            break;
        case 'multiply':
            // Multiplication case
            console.log("multiplication case executed", a1 * b1); // Print multiplication result
            break;
        default:
            // Default case
            alert("operator not in the list"); // Alert default case
    }
}
console.clear();
checkingWithSwitch(prompt("Enter Operator")); // Prompt for an operator and call checkingWithSwitch
