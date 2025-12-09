// ============================================================
// 06 - FUNCTIONS
// ============================================================

console.log("=== JavaScript Functions ===\n");

// ============================================================
// 1. WHAT IS A FUNCTION?
// ============================================================

console.log("--- 1. What is a Function? ---");

/*
A FUNCTION is a reusable block of code designed to perform a particular task.

Benefits of Functions:
- Reusability: Write once, use many times
- Modularity: Break complex problems into smaller parts
- Maintainability: Easier to update and debug
- Abstraction: Hide complex logic behind simple function calls
*/

// Simple function example
function sayHello() {
    console.log("Hello, World!");
}

// Calling/invoking the function
sayHello();
sayHello();  // Can be called multiple times


// ============================================================
// 2. FUNCTION DECLARATION
// ============================================================

console.log("\n--- 2. Function Declaration ---");

/*
Function Declaration Syntax:
function functionName(parameters) {
    // code
}

- Uses the 'function' keyword
- Has a name
- Can be called before it's defined (hoisting)
*/

// Function without parameters
function greet() {
    console.log("Welcome to JavaScript!");
}

greet();

// Function with parameters
function greetPerson(name) {
    console.log("Hello, " + name + "!");
}

greetPerson("Alice");
greetPerson("Bob");

// Function with multiple parameters
function introduce(name, age, city) {
    console.log(`My name is ${name}, I am ${age} years old, from ${city}.`);
}

introduce("John", 25, "New York");
introduce("Jane", 30, "London");


// ============================================================
// 3. FUNCTION WITH RETURN VALUE
// ============================================================

console.log("\n--- 3. Return Values ---");

/*
The 'return' statement:
- Sends a value back from the function
- Ends the function execution
- If no return, function returns 'undefined'
*/

// Function without return
function printSum(a, b) {
    console.log("Sum:", a + b);
    // No return - returns undefined
}

let result1 = printSum(5, 3);
console.log("Returned:", result1);  // undefined

// Function with return
function add(a, b) {
    return a + b;
}

let result2 = add(5, 3);
console.log("Returned:", result2);  // 8

// Using returned value in expressions
let total = add(10, 20) + add(5, 5);
console.log("Total:", total);  // 40

// Multiple calculations
function calculate(a, b) {
    let sum = a + b;
    let diff = a - b;
    let product = a * b;
    let quotient = a / b;
    
    return {
        sum: sum,
        difference: diff,
        product: product,
        quotient: quotient
    };
}

let results = calculate(20, 5);
console.log("\nCalculation Results:");
console.table(results);


// ============================================================
// 4. FUNCTION EXPRESSION
// ============================================================

console.log("\n--- 4. Function Expression ---");

/*
A function expression assigns a function to a variable.
Unlike declarations, they are NOT hoisted.
*/

// Function expression (anonymous)
const multiply = function(a, b) {
    return a * b;
};

console.log("5 * 4 =", multiply(5, 4));

// Function expression (named)
const divide = function division(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

console.log("20 / 4 =", divide(20, 4));
console.log("20 / 0 =", divide(20, 0));


// ============================================================
// 5. ARROW FUNCTIONS (ES6)
// ============================================================

console.log("\n--- 5. Arrow Functions ---");

/*
Arrow functions provide a shorter syntax for writing functions.

Syntax variations:
- (param) => expression              // Single param, implicit return
- (param1, param2) => expression     // Multiple params, implicit return
- (param) => { statements; return x; } // With block, explicit return
- () => expression                   // No params
*/

// Basic arrow function
const addArrow = (a, b) => {
    return a + b;
};
console.log("Arrow add(3, 7):", addArrow(3, 7));

// Short form - implicit return (no braces, no return keyword)
const multiplyArrow = (a, b) => a * b;
console.log("Arrow multiply(4, 5):", multiplyArrow(4, 5));

// Single parameter - parentheses optional
const square = x => x * x;
console.log("Square of 5:", square(5));

// No parameters - empty parentheses required
const getGreeting = () => "Hello!";
console.log(getGreeting());

// Arrow function with multiple statements
const getGrade = (marks) => {
    if (marks >= 90) return "A";
    if (marks >= 80) return "B";
    if (marks >= 70) return "C";
    if (marks >= 60) return "D";
    return "F";
};

console.log("Grade for 85:", getGrade(85));
console.log("Grade for 55:", getGrade(55));


// ============================================================
// 6. DEFAULT PARAMETERS
// ============================================================

console.log("\n--- 6. Default Parameters ---");

/*
Default parameters allow you to set default values for function parameters.
If no argument is passed, the default value is used.
*/

// Without default parameters
function greetUser(name) {
    console.log("Hello, " + name);
}
greetUser();  // Hello, undefined

// With default parameters
function greetUserDefault(name = "Guest") {
    console.log("Hello, " + name);
}

greetUserDefault();         // Hello, Guest
greetUserDefault("Alice");  // Hello, Alice

// Multiple default parameters
function createUser(name = "Anonymous", age = 0, role = "User") {
    return {
        name: name,
        age: age,
        role: role
    };
}

console.log("\nUser 1:", createUser());
console.log("User 2:", createUser("John"));
console.log("User 3:", createUser("Jane", 25, "Admin"));


// ============================================================
// 7. REST PARAMETERS
// ============================================================

console.log("\n--- 7. Rest Parameters ---");

/*
Rest parameters allow a function to accept any number of arguments.
Uses ... (spread/rest operator)
*/

// Sum any number of values
function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log("Sum of 1,2,3:", sumAll(1, 2, 3));           // 6
console.log("Sum of 1,2,3,4,5:", sumAll(1, 2, 3, 4, 5)); // 15
console.log("Sum of 10:", sumAll(10));                   // 10

// Rest parameter with regular parameters
function greetAll(greeting, ...names) {
    for (let name of names) {
        console.log(`${greeting}, ${name}!`);
    }
}

greetAll("Hello", "Alice", "Bob", "Charlie");


// ============================================================
// 8. CALLBACK FUNCTIONS
// ============================================================

console.log("\n--- 8. Callback Functions ---");

/*
A callback is a function passed as an argument to another function.
The callback is "called back" at a later time.
*/

// Basic callback example
function processData(data, callback) {
    console.log("Processing:", data);
    callback(data);
}

function logResult(result) {
    console.log("Result logged:", result);
}

processData("Hello", logResult);

// Callback with arrow function
processData("World", (data) => {
    console.log("Arrow callback:", data.toUpperCase());
});

// Practical example: Array operations with callbacks
const numbers = [1, 2, 3, 4, 5];

// Using forEach with callback
console.log("\nNumbers doubled:");
numbers.forEach(function(num) {
    console.log(num * 2);
});


// ============================================================
// 9. IIFE (Immediately Invoked Function Expression)
// ============================================================

console.log("\n--- 9. IIFE ---");

/*
An IIFE is a function that runs immediately after it's defined.
Useful for creating private scope and avoiding global variables.

Syntax: (function() { ... })();
*/

// Basic IIFE
(function() {
    console.log("IIFE executed immediately!");
})();

// IIFE with parameters
(function(name) {
    console.log("Hello from IIFE, " + name + "!");
})("World");

// Arrow function IIFE
(() => {
    console.log("Arrow IIFE!");
})();

// IIFE returning a value
const result = (function() {
    return 5 + 3;
})();
console.log("IIFE result:", result);


// ============================================================
// 10. FUNCTION SCOPE
// ============================================================

console.log("\n--- 10. Function Scope ---");

/*
Variables declared inside a function are LOCAL to that function.
They cannot be accessed from outside.
*/

let globalVar = "I'm global";

function scopeTest() {
    let localVar = "I'm local";
    console.log("Inside function:");
    console.log("  globalVar:", globalVar);  // Accessible
    console.log("  localVar:", localVar);    // Accessible
}

scopeTest();

console.log("Outside function:");
console.log("  globalVar:", globalVar);  // Accessible
// console.log(localVar);  // ERROR! localVar is not defined

// Nested functions
function outer() {
    let outerVar = "Outer";
    
    function inner() {
        let innerVar = "Inner";
        console.log("\nIn inner function:");
        console.log("  outerVar:", outerVar);  // Accessible (closure)
        console.log("  innerVar:", innerVar);
    }
    
    inner();
    console.log("In outer function:");
    console.log("  outerVar:", outerVar);
    // console.log(innerVar);  // ERROR! Not accessible
}

outer();


// ============================================================
// 11. HIGHER-ORDER FUNCTIONS
// ============================================================

console.log("\n--- 11. Higher-Order Functions ---");

/*
A higher-order function is a function that:
- Takes a function as an argument, OR
- Returns a function
*/

// Function that returns a function
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("double(5):", double(5));   // 10
console.log("triple(5):", triple(5));   // 15

// Function that takes a function as argument
function applyOperation(x, y, operation) {
    return operation(x, y);
}

const addFn = (a, b) => a + b;
const subtractFn = (a, b) => a - b;

console.log("Apply add:", applyOperation(10, 5, addFn));       // 15
console.log("Apply subtract:", applyOperation(10, 5, subtractFn)); // 5


// ============================================================
// 12. RECURSION
// ============================================================

console.log("\n--- 12. Recursion ---");

/*
Recursion is when a function calls itself.
Must have a base case to stop the recursion!
*/

// Factorial using recursion
function factorial(n) {
    // Base case
    if (n <= 1) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5));  // 120
console.log("Factorial of 0:", factorial(0));  // 1

// Countdown using recursion
function countdown(n) {
    if (n <= 0) {
        console.log("Blast off!");
        return;
    }
    console.log(n);
    countdown(n - 1);
}

console.log("\nCountdown:");
countdown(5);


// ============================================================
// 13. PRACTICAL EXAMPLES
// ============================================================

console.log("\n--- 13. Practical Examples ---");

// Example 1: Temperature Converter
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

console.log("25°C in Fahrenheit:", celsiusToFahrenheit(25) + "°F");
console.log("77°F in Celsius:", fahrenheitToCelsius(77).toFixed(2) + "°C");

// Example 2: Password Validator
function validatePassword(password) {
    const errors = [];
    
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain an uppercase letter");
    }
    if (!/[0-9]/.test(password)) {
        errors.push("Password must contain a number");
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

console.log("\nPassword Validation:");
console.log("'abc':", validatePassword("abc"));
console.log("'Abcd1234':", validatePassword("Abcd1234"));

// Example 3: Simple Calculator Factory
function createCalculator(initialValue = 0) {
    let value = initialValue;
    
    return {
        add: (n) => { value += n; return value; },
        subtract: (n) => { value -= n; return value; },
        multiply: (n) => { value *= n; return value; },
        divide: (n) => { value /= n; return value; },
        getValue: () => value,
        reset: () => { value = 0; return value; }
    };
}

const calc = createCalculator(10);
console.log("\nCalculator:");
console.log("Start:", calc.getValue());
console.log("Add 5:", calc.add(5));
console.log("Multiply 2:", calc.multiply(2));
console.log("Subtract 10:", calc.subtract(10));

console.log("\n=== End of Functions ===");
