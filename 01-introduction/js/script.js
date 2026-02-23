// ============================================================
// 01 - INTRODUCTION TO PROGRAMMING
// ============================================================

// ============================================================
// 1. WHAT IS PROGRAMMING?
// ============================================================

/*
Programming is the process of creating a set of instructions that 
tell a computer how to perform a task. Programming involves writing 
code in a language that the computer can understand and execute. 
It's about translating human ideas into a format that computers can work with.
*/

// This is a simple JavaScript program that adds two numbers and outputs the result
let a = 5;        // First number
let b = 10;       // Second number
let sum = a + b;  // Adding the two numbers

console.log("=== What is Programming? ===");
console.log("The sum of", a, "and", b, "is:", sum);  // Output the result


// ============================================================
// 2. COMPUTER LANGUAGES
// ============================================================

/*
Computer Languages are used to write programs. They can be classified into:

HIGH-LEVEL LANGUAGES:
- Closer to human languages, making them easier to learn and use
- Examples: Python, Java, JavaScript, C++, Ruby

LOW-LEVEL LANGUAGES:
- Closer to the machine's native language
- More efficient but harder to understand
- Examples: Assembly language, Machine code

JavaScript is a HIGH-LEVEL language used primarily for web development.
It can be used both on:
- Client-side (in the browser)
- Server-side (using Node.js)
*/

// console.log("\n=== Computer Languages ===");

// // Example: Declaring a variable in JavaScript
// let greeting = "Hello, World!";
// console.log("Greeting:", greeting);

// // Example: A function in JavaScript
// function greet(name) {
//     return `Hello, ${name}!`;
// }
// console.log(greet("Alice")); // Outputs: Hello, Alice!


// // ============================================================
// // 3. ALGORITHMS
// // ============================================================

// /*
// An ALGORITHM is a step-by-step procedure for solving a problem.

// Here's a simple algorithm to find the maximum number in an array:
// 1. Start with the first number as the maximum.
// 2. Compare this number with each of the remaining numbers.
// 3. If a larger number is found, update the maximum.
// 4. Continue until all numbers are compared.
// 5. The maximum number is the result.
// */

// console.log("\n=== Algorithms ===");

// // JavaScript code implementing the find maximum algorithm
// function findMax(arr) {
//     let max = arr[0]; // Step 1: Initialize maximum with first element
    
//     for (let i = 1; i < arr.length; i++) { // Step 2: Compare each number
//         if (arr[i] > max) { // Step 3: Update maximum if necessary
//             max = arr[i];
//         }
//     }
//     return max; // Step 5: Return the maximum number
// }

// let numbers = [3, 5, 7, 2, 8];
// console.log("Array:", numbers);
// console.log("Maximum number is:", findMax(numbers)); // Outputs: 8


// // ============================================================
// // 4. FLOWCHARTS
// // ============================================================

// /*
// FLOWCHARTS are visual diagrams that represent algorithms using shapes:

// Common Flowchart Symbols:
// - Oval       : Start / End
// - Rectangle  : Process / Action
// - Diamond    : Decision (Yes/No)
// - Parallelogram: Input / Output
// - Arrow      : Flow direction

// Example Flowchart for finding maximum number:
// ┌─────────┐
// │  Start  │
// └────┬────┘
//      ▼
// ┌─────────────────────┐
// │ Set max = first     │
// │ number in list      │
// └──────────┬──────────┘
//            ▼
//      ┌───────────┐
//      │ More      │
//   ┌──│ numbers?  │──┐
//   │  └───────────┘  │
//  Yes               No
//   │                 │
//   ▼                 ▼
// ┌─────────────┐  ┌─────────┐
// │ Is current  │  │ Output  │
// │ > max?      │  │  max    │
// └──────┬──────┘  └────┬────┘
//        │              │
//       Yes/No          ▼
//        │         ┌─────────┐
//        ▼         │   End   │
// ┌─────────────┐  └─────────┘
// │ Update max  │
// └─────────────┘
// */

// console.log("\n=== Flowcharts ===");
// console.log("Flowcharts are visual representations of algorithms.");
// console.log("See the comments in the code for a text-based flowchart example.");


// // ============================================================
// // 5. PSEUDO CODE
// // ============================================================

// /*
// PSEUDO CODE is a high-level description of an algorithm, 
// written in plain language mixed with programming constructs.

// Pseudo code for finding the maximum number:

// START
//   SET max TO first number in list
//   FOR each number in list
//     IF number > max THEN
//       SET max TO number
//     END IF
//   END FOR
//   OUTPUT max
// END
// */

// console.log("\n=== Pseudo Code ===");
// console.log("Pseudo code example for finding maximum:");
// console.log("START");
// console.log("  SET max TO first number");
// console.log("  FOR each number in list");
// console.log("    IF number > max THEN");
// console.log("      SET max TO number");
// console.log("  OUTPUT max");
// console.log("END");


// // ============================================================
// // 6. DECISION TABLES
// // ============================================================

// /*
// DECISION TABLES help model complex logic by specifying conditions and actions.

// Example: User Access based on Age and Membership Status

// | Age   | Member | Access Granted |
// |-------|--------|----------------|
// | < 18  | No     | No             |
// | < 18  | Yes    | No             |
// | >= 18 | No     | No             |
// | >= 18 | Yes    | Yes            |
// */

// console.log("\n=== Decision Tables ===");

// // JavaScript code to check access based on decision table
// function checkAccess(age, isMember) {
//     if (age >= 18 && isMember) {
//         return "Access Granted";
//     } else {
//         return "Access Denied";
//     }
// }

// console.log("Age: 20, Member: Yes =>", checkAccess(20, true));   // Access Granted
// console.log("Age: 16, Member: No  =>", checkAccess(16, false));  // Access Denied
// console.log("Age: 25, Member: No  =>", checkAccess(25, false));  // Access Denied
// console.log("Age: 18, Member: Yes =>", checkAccess(18, true));   // Access Granted


// // ============================================================
// // 7. CODING SYNTAX
// // ============================================================

// /*
// SYNTAX refers to the rules and structure that define how to write 
// code in a programming language. Different languages have different syntax rules.

// JavaScript Syntax Rules:
// - Semicolons (;) to end statements (optional but recommended)
// - Curly braces {} for code blocks
// - let, const, var for variable declarations
// - Camel case naming convention (myVariable)
// */

// console.log("\n=== Coding Syntax ===");

// let PersonName = "John";  // Variable declaration with let
// const PI = 3.14159;       // Constant declaration with const

// function sayHello(name) {
//     console.log(`Hello, ${name}!`); // Template literal for string interpolation
// }

// sayHello(personName); // Calls the function


// // ============================================================
// // 8. COMPILERS VS INTERPRETERS
// // ============================================================

// /*
// COMPILERS and INTERPRETERS are tools that translate code written 
// in a high-level language into machine code.

// COMPILER:
// - Translates the ENTIRE program into machine code BEFORE execution
// - Produces an executable file
// - Faster execution after compilation
// - Examples: GCC for C/C++, javac for Java

// INTERPRETER:
// - Translates and executes code LINE-BY-LINE
// - No separate executable file
// - Slower execution but easier debugging
// - Examples: Python interpreter, JavaScript engines

// JavaScript is INTERPRETED by browsers. The JavaScript engine 
// (e.g., V8 in Chrome, SpiderMonkey in Firefox) interprets and 
// executes code directly, line by line.
// */

// console.log("\n=== Compilers vs Interpreters ===");
// console.log("JavaScript is an interpreted language.");
// console.log("Browser's JavaScript engine executes code line by line.");


// // ============================================================
// // 9. SYNTAX ERRORS VS LOGICAL ERRORS
// // ============================================================

// /*
// SYNTAX ERRORS:
// - Occur when code does not follow correct syntax rules
// - Prevent the code from running at all
// - Easy to find - interpreter/compiler tells you the error

// Example of Syntax Error:
// let x = 10
// console.log(x    // Missing closing parenthesis - SYNTAX ERROR!

// LOGICAL ERRORS:
// - Occur when code runs but produces incorrect results
// - Code is syntactically correct but logically wrong
// - Harder to find - requires debugging

// Example of Logical Error:
// function add(a, b) {
//     return a - b;  // Should be a + b - LOGICAL ERROR!
// }
// */

// console.log("\n=== Syntax vs Logical Errors ===");

// // Example of logical error
// function incorrectAdd(a, b) {
//     return a - b; // LOGICAL ERROR: Should be a + b
// }

// function correctAdd(a, b) {
//     return a + b; // CORRECT
// }

// console.log("Incorrect add(5, 3):", incorrectAdd(5, 3)); // Outputs: 2 (wrong!)
// console.log("Correct add(5, 3):", correctAdd(5, 3));     // Outputs: 8 (correct!)


// // ============================================================
// // 10. DOCUMENTATION AND MAINTENANCE
// // ============================================================

// /*
// DOCUMENTATION helps others understand and use your code.

// Types of Documentation:
// 1. Comments in code (like these!)
// 2. README files
// 3. API documentation
// 4. User guides

// Best Practices:
// - Write clear, meaningful comments
// - Explain WHY, not just WHAT
// - Keep comments updated with code changes
// - Use descriptive variable and function names
// */

// console.log("\n=== Documentation ===");

// /**
//  * Multiplies two numbers and returns the result.
//  * @param {number} a - The first number
//  * @param {number} b - The second number
//  * @returns {number} The product of a and b
//  */
// function multiply(a, b) {
//     return a * b;
// }

// let result = multiply(4, 5);
// console.log("4 x 5 =", result); // Outputs: 20

// console.log("\n=== End of Introduction to Programming ===");
