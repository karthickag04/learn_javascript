// ============================================================
// 03 - VARIABLES AND DATA TYPES
// ============================================================

console.log("=== Variables and Data Types ===\n");

// ============================================================
// 1. VARIABLE DECLARATION - var, let, const
// ============================================================

console.log("--- 1. Variable Declaration ---");

/*
JavaScript has THREE ways to declare variables:

1. var - Old way (function-scoped, can be redeclared)
2. let - Modern way (block-scoped, cannot be redeclared)
3. const - For constants (block-scoped, cannot be reassigned)

Best Practice: Use 'const' by default, 'let' when you need to reassign.
Avoid 'var' in modern JavaScript.
*/

// Using var
var variableWithVar = 5;
console.log("var:", variableWithVar);

// Using let
let variableWithLet = 7;
console.log("let:", variableWithLet);

// Using const
const variableWithConst = 10;
console.log("const:", variableWithConst);


// ============================================================
// 2. REASSIGNING VARIABLES
// ============================================================

console.log("\n--- 2. Reassigning Variables ---");

// var can be reassigned
var a = 5;
console.log("var a (initial):", a);
a = 6;
console.log("var a (reassigned):", a);

// let can be reassigned
let b = 7;
console.log("let b (initial):", b);
b = 8;
console.log("let b (reassigned):", b);

// const CANNOT be reassigned
const c = 10;
console.log("const c:", c);
// c = 11; // ERROR! TypeError: Assignment to constant variable


// ============================================================
// 3. REDECLARING VARIABLES
// ============================================================

console.log("\n--- 3. Redeclaring Variables ---");

// var CAN be redeclared
var x = 10;
console.log("var x (first declaration):", x);
var x = 25; // Allowed!
console.log("var x (redeclared):", x);

// let CANNOT be redeclared in the same scope
let y = 20;
console.log("let y:", y);
// let y = 30; // ERROR! SyntaxError: Identifier 'y' has already been declared

// const CANNOT be redeclared
const z = 30;
console.log("const z:", z);
// const z = 40; // ERROR! SyntaxError: Identifier 'z' has already been declared


// ============================================================
// 4. DATA TYPES - PRIMITIVE TYPES
// ============================================================

console.log("\n--- 4. Primitive Data Types ---");

/*
Primitive data types are immutable (cannot be changed) and are
compared by VALUE.

7 Primitive Types:
1. String   - Text
2. Number   - Integers and decimals
3. Boolean  - true or false
4. Undefined - Variable declared but not assigned
5. Null     - Intentional absence of value
6. Symbol   - Unique identifier (ES6)
7. BigInt   - Large integers (ES2020)
*/

// String - text enclosed in quotes
let firstName = "John";
let lastName = 'Doe';
let greeting = `Hello, ${firstName}!`; // Template literal
console.log("String:", firstName, lastName);
console.log("Template Literal:", greeting);

// Number - integers and floating-point
let integer = 42;
let decimal = 3.14;
let negative = -10;
console.log("Number (integer):", integer);
console.log("Number (decimal):", decimal);
console.log("Number (negative):", negative);

// Boolean - true or false
let isActive = true;
let isLoggedIn = false;
console.log("Boolean:", isActive, isLoggedIn);

// Undefined - declared but not assigned
let notAssigned;
console.log("Undefined:", notAssigned);

// Null - intentional absence of value
let emptyValue = null;
console.log("Null:", emptyValue);

// BigInt - for very large numbers
let bigNumber = 9007199254740991n;
console.log("BigInt:", bigNumber);


// ============================================================
// 5. DATA TYPES - NON-PRIMITIVE (REFERENCE) TYPES
// ============================================================

console.log("\n--- 5. Non-Primitive Data Types ---");

/*
Non-primitive types are mutable and are compared by REFERENCE.

Main Non-Primitive Types:
1. Object - Collection of key-value pairs
2. Array  - Ordered list of values
3. Function - Reusable block of code
*/

// Object - collection of properties
let person = {
    name: "Karthick",
    age: 25,
    gender: "Male"
};
console.log("Object:", person);
console.table(person);

// Array - ordered collection
let fruits = ["Apple", "Banana", "Cherry"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];
console.log("Array (fruits):", fruits);
console.log("Array (numbers):", numbers);
console.log("Array (mixed):", mixed);

// Function
function sayHello() {
    return "Hello!";
}
console.log("Function:", sayHello());


// ============================================================
// 6. typeof OPERATOR
// ============================================================

console.log("\n--- 6. typeof Operator ---");

/*
The typeof operator returns a string indicating the type of the operand.
Syntax: typeof variable or typeof(variable)
*/

let testVar;

testVar = 42;
console.log(testVar, "=> typeof:", typeof testVar);

testVar = 3.14;
console.log(testVar, "=> typeof:", typeof testVar);

testVar = "Hello";
console.log(testVar, "=> typeof:", typeof testVar);

testVar = true;
console.log(testVar, "=> typeof:", typeof testVar);

testVar = undefined;
console.log(testVar, "=> typeof:", typeof testVar);

testVar = null;
console.log(testVar, "=> typeof:", typeof testVar); // "object" (JavaScript quirk!)

testVar = {name: "John"};
console.log("Object => typeof:", typeof testVar);

testVar = [1, 2, 3];
console.log("Array => typeof:", typeof testVar); // "object" (arrays are objects!)

testVar = function() {};
console.log("Function => typeof:", typeof testVar);


// ============================================================
// 7. TYPE CONVERSION (Type Casting)
// ============================================================

console.log("\n--- 7. Type Conversion ---");

/*
Type conversion is changing a value from one type to another.

Two types of conversion:
1. Implicit (Automatic) - JavaScript converts automatically
2. Explicit (Manual) - You convert using functions
*/

// --- String to Number ---
console.log("\nString to Number:");

let strNumber = "20";
console.log("Original:", strNumber, "Type:", typeof strNumber);

// Using Number()
let converted = Number(strNumber);
console.log("Number():", converted, "Type:", typeof converted);

// Using parseInt() - for integers
converted = parseInt(strNumber);
console.log("parseInt():", converted, "Type:", typeof converted);

// Using parseFloat() - for decimals
let strDecimal = "20.5";
converted = parseFloat(strDecimal);
console.log("parseFloat():", converted, "Type:", typeof converted);

// Using + operator (unary plus)
converted = +strNumber;
console.log("Unary +:", converted, "Type:", typeof converted);


// --- Number to String ---
console.log("\nNumber to String:");

let num = 100;
console.log("Original:", num, "Type:", typeof num);

// Using String()
let strConverted = String(num);
console.log("String():", strConverted, "Type:", typeof strConverted);

// Using .toString()
strConverted = num.toString();
console.log(".toString():", strConverted, "Type:", typeof strConverted);

// Using concatenation
strConverted = num + "";
console.log("Concatenation:", strConverted, "Type:", typeof strConverted);


// --- Boolean Conversion ---
console.log("\nBoolean Conversion:");

// To Boolean using Boolean()
console.log("Boolean(1):", Boolean(1));       // true
console.log("Boolean(0):", Boolean(0));       // false
console.log("Boolean(''):", Boolean(''));     // false (empty string)
console.log("Boolean('hi'):", Boolean('hi')); // true (non-empty string)
console.log("Boolean(null):", Boolean(null)); // false
console.log("Boolean(undefined):", Boolean(undefined)); // false

// Boolean to Number
let boolVal = true;
console.log("\nBoolean to Number:");
console.log("Number(true):", Number(true));   // 1
console.log("Number(false):", Number(false)); // 0


// ============================================================
// 8. CONCATENATION VS ADDITION
// ============================================================

console.log("\n--- 8. Concatenation vs Addition ---");

/*
When + is used with strings, it CONCATENATES (joins).
When + is used with numbers, it ADDS.
If one operand is a string, the other is converted to string.
*/

// String concatenation
let str1 = "Hello";
let str2 = "World";
console.log("String + String:", str1 + " " + str2); // "Hello World"

// Number addition
let num1 = 10;
let num2 = 20;
console.log("Number + Number:", num1 + num2); // 30

// Mixed - String + Number = Concatenation!
let strNum = "60";
let realNum = 55;
console.log("String '60' + Number 55:", strNum + realNum); // "6055" (string!)

// To add properly, convert string to number first
console.log("Correct addition:", Number(strNum) + realNum); // 115

// Number + null
console.log("Number + null:", 60 + null); // 60 (null becomes 0)

// Number + undefined
console.log("Number + undefined:", 60 + undefined); // NaN (Not a Number)


// ============================================================
// 9. VARIABLE NAMING RULES
// ============================================================

console.log("\n--- 9. Variable Naming Rules ---");

/*
Rules for variable names:
1. Can contain letters, digits, underscores, and dollar signs
2. Must begin with a letter, underscore, or dollar sign
3. Cannot start with a digit
4. Case-sensitive (myVar ≠ myvar)
5. Cannot use reserved words (let, const, function, etc.)

Naming Conventions:
- camelCase: myVariableName (recommended for variables)
- PascalCase: MyVariableName (for classes/constructors)
- snake_case: my_variable_name (less common in JS)
- UPPER_SNAKE_CASE: MY_CONSTANT (for constants)
*/

// Valid variable names
let myName = "John";
let _privateVar = "private";
let $price = 99.99;
let camelCaseName = "camelCase";
let variable123 = "numbers at end OK";

console.log("Valid names:", myName, _privateVar, $price);

// Invalid (would cause errors):
// let 123abc = "error";     // Cannot start with number
// let my-name = "error";    // Hyphen not allowed
// let let = "error";        // Reserved word


// ============================================================
// 10. PRACTICAL EXAMPLES
// ============================================================

console.log("\n--- 10. Practical Examples ---");

// Example 1: User profile
const userId = 12345;  // Won't change
let userName = "john_doe";
let userAge = 25;
let isVerified = true;

console.log("User Profile:");
console.log(`ID: ${userId}`);
console.log(`Username: ${userName}`);
console.log(`Age: ${userAge}`);
console.log(`Verified: ${isVerified}`);

// Example 2: Shopping cart
let product = {
    name: "Laptop",
    price: 999.99,
    quantity: 1
};
let total = product.price * product.quantity;

console.log("\nShopping Cart:");
console.table(product);
console.log(`Total: $${total}`);

// Example 3: Type checking
function displayType(value) {
    console.log(`Value: ${value}, Type: ${typeof value}`);
}

console.log("\nType Checking:");
displayType(42);
displayType("Hello");
displayType(true);
displayType([1, 2, 3]);
displayType({a: 1});

console.log("\n=== End of Variables and Data Types ===");
