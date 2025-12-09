// ============================================================
// 02 - CONSOLE AND OUTPUT METHODS
// ============================================================

console.log("=== Console and Output Methods ===\n");

// ============================================================
// 1. console.log() - BASIC OUTPUT
// ============================================================

/*
console.log() is the most common way to output data in JavaScript.
It prints messages to the browser's console (F12 > Console tab).
*/

console.log("--- 1. console.log() ---");

// Print a string message
console.log("Welcome to JavaScript!");
console.log('Single quotes also work!');

// Print numbers
console.log(10);        // Integer
console.log(10.5);      // Float/Decimal

// Print multiple values separated by comma
console.log("Number:", 42, "Text:", "Hello");

// Print with concatenation
console.log("5 + 3 = " + (5 + 3));


// ============================================================
// 2. PRINTING DIFFERENT DATA TYPES
// ============================================================

console.log("\n--- 2. Different Data Types ---");

// String
console.log("This is a string");

// Number
console.log(100);

// Boolean
console.log(true);
console.log(false);

// Object
console.log({fname: "Karthick", gender: "Male"});

// Array
console.log([5, 10, 15, 20]);

// Mixed Array
console.log([5, "hello", true, 10.5]);


// ============================================================
// 3. console.table() - TABLE FORMAT
// ============================================================

console.log("\n--- 3. console.table() ---");

/*
console.table() displays arrays and objects in a nice table format.
Very useful for debugging and viewing structured data.
*/

// Array in table format
console.log("Array as table:");
console.table([5, 10, 20, 15]);

// Array of strings
console.table(["Apple", "Banana", "Cherry", "Date"]);

// Object in table format
console.log("Object as table:");
console.table({fname: "Karthick", gender: "Male", age: 25});

// Array of objects
console.log("Array of objects as table:");
console.table([
    {name: "John", age: 25},
    {name: "Jane", age: 30},
    {name: "Bob", age: 35}
]);


// ============================================================
// 4. console.warn() - WARNING MESSAGES
// ============================================================

console.log("\n--- 4. console.warn() ---");

/*
console.warn() displays a warning message with yellow background.
Used to indicate potential issues that don't stop execution.
*/

console.warn("This is a warning message!");
console.warn("Variable might be undefined");


// ============================================================
// 5. console.error() - ERROR MESSAGES
// ============================================================

console.log("\n--- 5. console.error() ---");

/*
console.error() displays an error message with red background.
Used to indicate errors in the code.
*/

console.error("This is an error message!");
console.error("File not found!");


// ============================================================
// 6. console.info() - INFORMATIONAL MESSAGES
// ============================================================

console.log("\n--- 6. console.info() ---");

/*
console.info() displays informational messages.
Similar to console.log() but may have different styling in some browsers.
*/

console.info("This is an info message");
console.info("Application started successfully");


// ============================================================
// 7. console.clear() - CLEAR CONSOLE
// ============================================================

/*
console.clear() clears all previous messages from the console.
Useful for cleaning up the console during development.

Uncomment the line below to test:
// console.clear();
*/

console.log("\n--- 7. console.clear() ---");
console.log("Use console.clear() to clear the console");


// ============================================================
// 8. console.group() and console.groupEnd() - GROUPING
// ============================================================

console.log("\n--- 8. Grouping Messages ---");

/*
console.group() and console.groupEnd() allow you to group related
console messages together for better organization.
*/

console.group("User Information");
console.log("Name: John Doe");
console.log("Age: 25");
console.log("Email: john@example.com");
console.groupEnd();

console.group("Product Details");
console.log("Product: Laptop");
console.log("Price: $999");
console.log("Stock: 50");
console.groupEnd();


// ============================================================
// 9. alert() - POPUP MESSAGE
// ============================================================

console.log("\n--- 9. alert() ---");

/*
alert() displays a popup message box to the user.
The page execution pauses until the user clicks OK.

Note: Uncomment the line below to test (it will show a popup):
*/

// alert("Hello! Welcome to JavaScript!");
// alert("This is an alert message!");

console.log("alert() shows a popup message (uncomment in code to test)");


// ============================================================
// 10. prompt() - USER INPUT POPUP
// ============================================================

console.log("\n--- 10. prompt() ---");

/*
prompt() displays a popup that asks the user for input.
Returns the value entered by the user, or null if cancelled.

Note: Uncomment the lines below to test:
*/

// let userName = prompt("Enter your name:");
// console.log("User entered:", userName);

// let userAge = prompt("Enter your age:");
// console.log("User age:", userAge);

console.log("prompt() asks user for input (uncomment in code to test)");


// ============================================================
// 11. confirm() - CONFIRMATION POPUP
// ============================================================

console.log("\n--- 11. confirm() ---");

/*
confirm() displays a popup with OK and Cancel buttons.
Returns true if user clicks OK, false if Cancel.

Note: Uncomment the lines below to test:
*/

// let isConfirmed = confirm("Are you sure you want to continue?");
// console.log("User confirmed:", isConfirmed);

console.log("confirm() shows OK/Cancel popup (uncomment in code to test)");


// ============================================================
// 12. document.getElementById().innerHTML - WRITE TO HTML
// ============================================================

console.log("\n--- 12. Writing to HTML ---");

/*
You can write output directly to the HTML page using:
- document.getElementById("id").innerHTML = "content"
- document.getElementById("id").innerText = "text"
*/

// Write to the element with id="output"
document.getElementById("output").innerHTML = "Hello from JavaScript!";

// You can also include HTML tags
// document.getElementById("output").innerHTML = "<strong>Bold Text</strong> and <em>italic</em>";

console.log("Written 'Hello from JavaScript!' to the HTML page");


// ============================================================
// 13. document.write() - WRITE TO DOCUMENT
// ============================================================

console.log("\n--- 13. document.write() ---");

/*
document.write() writes directly to the HTML document.
WARNING: Using document.write() after the page loads will OVERWRITE the entire page!
Only use it for testing/learning purposes.
*/

// document.write("This is written by document.write()");

console.log("document.write() writes to document (use with caution!)");


// ============================================================
// 14. TEMPLATE LITERALS FOR OUTPUT
// ============================================================

console.log("\n--- 14. Template Literals ---");

/*
Template literals (backticks `) allow you to embed variables
and expressions directly in strings.
*/

let name = "Karthick";
let age = 25;
let city = "Chennai";

// Using template literals
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`${name} is ${age} years old and lives in ${city}.`);

// Expressions in template literals
console.log(`5 + 3 = ${5 + 3}`);
console.log(`Next year, ${name} will be ${age + 1} years old.`);


// ============================================================
// 15. COMBINING OUTPUT METHODS
// ============================================================

console.log("\n--- 15. Practical Example ---");

/*
Here's an example combining different output methods
for a user registration scenario:
*/

// Simulated user data (in real app, would come from prompt)
let userData = {
    username: "john_doe",
    email: "john@example.com",
    age: 28,
    premium: true
};

console.log("User Registration Successful!");
console.table(userData);

if (userData.premium) {
    console.info("Premium member - all features unlocked!");
} else {
    console.warn("Free member - consider upgrading!");
}

console.log("\n=== End of Console and Output Methods ===");
