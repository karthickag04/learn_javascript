// 1. Introduction to Programming

// Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming involves writing code in a language that the computer can understand and execute. It's about translating human ideas into a format that computers can work with.

// This is a simple JavaScript program that adds two numbers and outputs the result
let a = 5;        // First number
let b = 10;       // Second number
let sum = a + b;  // Adding the two numbers

console.log("The sum is:", sum);  // Output the result


// 2. Computer Languages

// Computer Languages are used to write programs. They can be classified into high-level languages (like Python, Java, C++) and low-level languages (like assembly language, machine code). High-level languages are closer to human languages, making them easier to learn and use, while low-level languages are closer to the machine's native language, which can be more efficient but harder to understand.

// Example:

// High-Level Language: Python, Java
// Low-Level Language: Assembly, Machine Code



// JavaScript is a high-level language used primarily for web development.
// It can be used both on the client-side (in the browser) and server-side (using Node.js).

// Example: Declaring a variable in JavaScript
let greeting = "Hello, World!";

// Example: A function in JavaScript
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Outputs: Hello, Alice!


/* 3. Algorithms

An algorithm is a step-by-step procedure for solving a problem.
Here’s a simple algorithm to find the maximum number in an array:

1. Start with the first number as the maximum.
2. Compare this number with each of the remaining numbers.
3. If a larger number is found, update the maximum.
4. Continue until all numbers are compared.
5. The maximum number is the result.
*/

// JavaScript code implementing the above algorithm
function findMax(arr) {
    let max = arr[0]; // Step 1: Initialize maximum
    for (let i = 1; i < arr.length; i++) { // Step 2: Compare each number
        if (arr[i] > max) { // Step 3: Update maximum if necessary
            max = arr[i];
        }
    }
    return max; // Step 5: Return the maximum number
}

let numbers = [3, 5, 7, 2, 8];
console.log("The maximum number is:", findMax(numbers)); // Outputs: The maximum number is: 8


/* 4. Flowcharts

Flowcharts are diagrams that represent algorithms. Although we can’t draw them directly in JavaScript,
we can describe them with code comments.

A simple flowchart for finding the maximum number might include:
- Start (Oval)
- Initialize Maximum (Rectangle)
- Compare (Diamond)
- Update Maximum (Rectangle)
- End (Oval)
*/

// This is a textual representation of the flowchart for finding the maximum number.


/* 5. Pseudo Codes

Pseudo code is a high-level description of an algorithm, written in plain language and programming constructs.
Here’s the pseudo code for finding the maximum number:

Start
  Set max to first number in list
  For each number in list
    If number > max
      Set max to number
  End For
  Output max
End
*/

// JavaScript implementation of the pseudo code is already provided in the `findMax` function above.


/* 6. Decision Tables

Decision tables help model complex logic by specifying conditions and actions.
Here’s a decision table example for user access based on age and membership status:

| Age  | Member | Access Granted |
|------|--------|----------------|
| < 18 | No     | No             |
| < 18 | Yes    | No             |
| >= 18| No     | No             |
| >= 18| Yes    | Yes            |
*/

// JavaScript code to check access based on age and membership status
function checkAccess(age, isMember) {
    if (age >= 18 && isMember) {
        return "Access Granted";
    } else {
        return "Access Denied";
    }
}

console.log(checkAccess(20, true));  // Outputs: Access Granted
console.log(checkAccess(16, false)); // Outputs: Access Denied


// 7. Coding Syntax

// Coding Syntax refers to the rules and structure that define how to write code in a programming language. Different languages have different syntax rules.

// JavaScript syntax rules include using semicolons to end statements, curly braces for blocks,
// and the use of `let`, `const`, and `var` to declare variables.

let name = "John";  // Variable declaration
const pi = 3.14159; // Constant declaration

function sayHello(name) {
    console.log(`Hello, ${name}!`); // Template literals for string interpolation
}

sayHello(name); // Calls the function


// 8. Compilers & Interpreters

// Compilers and interpreters are tools that translate code written in a high-level language into machine code.

// 1. Compiler: Translates the entire program into machine code before execution. Example: GCC for C/C++.
// 2. Interpreter: Translates and executes code line-by-line. Example: Python interpreter.

// C++ Program Compilation:
    // g++ program.cpp -o program
    // ./program
// Python Program Execution:
    // python program.py


// JavaScript is typically interpreted by browsers. The JavaScript engine (e.g., V8 in Chrome) interprets and executes code directly.
// Unlike compiled languages like C++ or Java, JavaScript code is executed line by line.

// Example: Running JavaScript code in a browser console or using Node.js for server-side execution.


/* 9. Syntax Errors & Logical Errors

Syntax errors occur when the code does not follow the correct syntax rules. They prevent the code from running.

Logical errors occur when the code runs but does not produce the correct result.

Example of Syntax Error:
let x = 10
console.log(x; // Missing closing parenthesis

Example of Logical Error:
function add(a, b) {
    return a - b; // Should be a + b
}
console.log(add(5, 3)); // Outputs: 2, but should be 8
*/


// 10. Documentation and Maintenance

// Good documentation helps others understand and use your code. Comments, README files, and in-code documentation are all part of this.

function multiply(a, b) {
    // Multiplies two numbers and returns the result
    return a * b;
}

// Example usage:
// let result = multiply(4, 5);
// console.log(result); // Outputs: 20

// Maintenance involves updating code to fix bugs or add new features, such as updating this function to handle more cases.
