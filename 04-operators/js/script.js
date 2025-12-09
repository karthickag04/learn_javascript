// ============================================================
// 04 - OPERATORS
// ============================================================

console.log("=== JavaScript Operators ===\n");

// ============================================================
// 1. ARITHMETIC OPERATORS
// ============================================================

console.log("--- 1. Arithmetic Operators ---");

/*
Arithmetic operators perform mathematical operations:
+   Addition
-   Subtraction
*   Multiplication
/   Division
%   Modulus (Remainder)
**  Exponentiation (Power)
*/

let v1 = 10;
let v2 = 3;

console.log("v1 =", v1, ", v2 =", v2);
console.log("");

// Addition
console.log("Addition (v1 + v2):", v1 + v2);       // 13

// Subtraction
console.log("Subtraction (v1 - v2):", v1 - v2);    // 7

// Multiplication
console.log("Multiplication (v1 * v2):", v1 * v2); // 30

// Division
console.log("Division (v1 / v2):", v1 / v2);       // 3.333...

// Modulus (Remainder after division)
console.log("Modulus (v1 % v2):", v1 % v2);        // 1

// Exponentiation (Power)
console.log("Exponentiation (v1 ** v2):", v1 ** v2); // 1000 (10^3)


// ============================================================
// 2. INCREMENT AND DECREMENT OPERATORS
// ============================================================

console.log("\n--- 2. Increment & Decrement Operators ---");

/*
++  Increment (adds 1)
--  Decrement (subtracts 1)

Two types:
- Pre-increment/decrement: ++a or --a (changes value BEFORE use)
- Post-increment/decrement: a++ or a-- (changes value AFTER use)
*/

// Pre-increment (++a)
let a = 5;
console.log("Initial a:", a);
console.log("Pre-increment (++a):", ++a);  // First increment, then return: 6
console.log("After pre-increment, a:", a); // 6

// Post-increment (a++)
a = 5;
console.log("\nReset a:", a);
console.log("Post-increment (a++):", a++); // First return, then increment: 5
console.log("After post-increment, a:", a); // 6

// Pre-decrement (--a)
a = 5;
console.log("\nReset a:", a);
console.log("Pre-decrement (--a):", --a);  // First decrement, then return: 4
console.log("After pre-decrement, a:", a); // 4

// Post-decrement (a--)
a = 5;
console.log("\nReset a:", a);
console.log("Post-decrement (a--):", a--); // First return, then decrement: 5
console.log("After post-decrement, a:", a); // 4

// Practical example showing the difference
console.log("\n-- Practical Example --");
a = 2;
let x = a++;  // x gets 2, then a becomes 3
console.log("x = a++ : x =", x, ", a =", a);

a = 2;
x = ++a;  // a becomes 3, then x gets 3
console.log("x = ++a : x =", x, ", a =", a);


// ============================================================
// 3. ASSIGNMENT OPERATORS
// ============================================================

console.log("\n--- 3. Assignment Operators ---");

/*
Assignment operators assign values to variables:
=    Simple assignment
+=   Add and assign
-=   Subtract and assign
*=   Multiply and assign
/=   Divide and assign
%=   Modulus and assign
**=  Exponent and assign
*/

let num = 25;
console.log("Initial num:", num);

num += 10;  // num = num + 10
console.log("num += 10 :", num);  // 35

num -= 5;   // num = num - 5
console.log("num -= 5  :", num);  // 30

num *= 2;   // num = num * 2
console.log("num *= 2  :", num);  // 60

num /= 3;   // num = num / 3
console.log("num /= 3  :", num);  // 20

num %= 7;   // num = num % 7
console.log("num %= 7  :", num);  // 6

num **= 2;  // num = num ** 2
console.log("num **= 2 :", num);  // 36


// ============================================================
// 4. COMPARISON OPERATORS
// ============================================================

console.log("\n--- 4. Comparison Operators ---");

/*
Comparison operators compare two values and return a boolean:
==   Equal to (value only)
===  Strict equal to (value AND type)
!=   Not equal to (value only)
!==  Strict not equal to (value AND type)
>    Greater than
<    Less than
>=   Greater than or equal to
<=   Less than or equal to
*/

let val = 5;
console.log("val =", val, "\n");

// Equal (==) - compares VALUE only
console.log("5 == 5  :", val == 5);     // true
console.log("5 == '5':", val == "5");   // true (type coercion!)

// Strict Equal (===) - compares VALUE and TYPE
console.log("5 === 5  :", val === 5);    // true
console.log("5 === '5':", val === "5");  // false (different types)

console.log("");

// Not Equal (!=)
console.log("5 != 3  :", val != 3);     // true
console.log("5 != '5':", val != "5");   // false (type coercion)

// Strict Not Equal (!==)
console.log("5 !== 3  :", val !== 3);    // true
console.log("5 !== '5':", val !== "5");  // true (different types)

console.log("");

// Relational operators
console.log("5 > 3 :", val > 3);   // true
console.log("5 < 3 :", val < 3);   // false
console.log("5 >= 5:", val >= 5);  // true
console.log("5 <= 5:", val <= 5);  // true
console.log("5 > 5 :", val > 5);   // false
console.log("5 < 5 :", val < 5);   // false


// ============================================================
// 5. LOGICAL OPERATORS
// ============================================================

console.log("\n--- 5. Logical Operators ---");

/*
Logical operators work with boolean values:
&&  AND - Returns true if BOTH operands are true
||  OR  - Returns true if AT LEAST ONE operand is true
!   NOT - Inverts the boolean value
*/

let p = true;
let q = false;

console.log("p =", p, ", q =", q, "\n");

// AND (&&) - Both must be true
console.log("true && true  :", true && true);   // true
console.log("true && false :", true && false);  // false
console.log("false && true :", false && true);  // false
console.log("false && false:", false && false); // false

console.log("");

// OR (||) - At least one must be true
console.log("true || true  :", true || true);   // true
console.log("true || false :", true || false);  // true
console.log("false || true :", false || true);  // true
console.log("false || false:", false || false); // false

console.log("");

// NOT (!) - Inverts the value
console.log("!true :", !true);   // false
console.log("!false:", !false);  // true

// Practical example
console.log("\n-- Practical Example --");
let age = 25;
let hasLicense = true;

// Can drive if age >= 18 AND has license
let canDrive = (age >= 18) && hasLicense;
console.log(`Age: ${age}, Has License: ${hasLicense}`);
console.log("Can drive:", canDrive);  // true

// Can enter if adult OR has permission
let isAdult = false;
let hasPermission = true;
let canEnter = isAdult || hasPermission;
console.log(`\nIs Adult: ${isAdult}, Has Permission: ${hasPermission}`);
console.log("Can enter:", canEnter);  // true


// ============================================================
// 6. TERNARY OPERATOR (Conditional Operator)
// ============================================================

console.log("\n--- 6. Ternary Operator ---");

/*
The ternary operator is a shorthand for if-else:
Syntax: condition ? valueIfTrue : valueIfFalse
*/

// Basic example
let score = 75;
let result = score >= 60 ? "Pass" : "Fail";
console.log(`Score: ${score}, Result: ${result}`);

// Another example
let hour = 14;
let greeting = hour < 12 ? "Good Morning" : "Good Afternoon";
console.log(`Hour: ${hour}, Greeting: ${greeting}`);

// Nested ternary (use sparingly - can be hard to read)
let mark = 85;
let grade = (mark >= 90) ? "A" :
            (mark >= 80) ? "B" :
            (mark >= 70) ? "C" :
            (mark >= 60) ? "D" : "F";

console.log(`\nMark: ${mark}, Grade: ${grade}`);

// More practical grading example
function getGrade(marks) {
    return (marks >= 90) ? "Distinction" :
           (marks >= 80) ? "Grade A" :
           (marks >= 60) ? "Grade B" :
           (marks >= 35) ? "Grade C" : "Fail";
}

console.log("\nGrade for 95:", getGrade(95));  // Distinction
console.log("Grade for 75:", getGrade(75));    // Grade B
console.log("Grade for 30:", getGrade(30));    // Fail


// ============================================================
// 7. STRING OPERATORS
// ============================================================

console.log("\n--- 7. String Operators ---");

/*
+   Concatenation - joins strings together
+=  Concatenation assignment
*/

let firstName = "John";
let lastName = "Doe";

// Concatenation
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

// Concatenation assignment
let message = "Hello";
message += " World";
message += "!";
console.log("Message:", message);

// String + Number = String concatenation
let text = "The answer is: " + 42;
console.log(text);  // "The answer is: 42"


// ============================================================
// 8. TYPE OPERATORS
// ============================================================

console.log("\n--- 8. Type Operators ---");

/*
typeof      - Returns the type of a variable
instanceof  - Returns true if object is an instance of a class
*/

console.log("typeof 42:", typeof 42);             // "number"
console.log("typeof 'hello':", typeof "hello");   // "string"
console.log("typeof true:", typeof true);         // "boolean"
console.log("typeof undefined:", typeof undefined); // "undefined"
console.log("typeof null:", typeof null);         // "object" (quirk!)
console.log("typeof []:", typeof []);             // "object"
console.log("typeof {}:", typeof {});             // "object"
console.log("typeof function(){}:", typeof function(){}); // "function"

// instanceof
let arr = [1, 2, 3];
let obj = {a: 1};
console.log("\n[1,2,3] instanceof Array:", arr instanceof Array);  // true
console.log("{a:1} instanceof Object:", obj instanceof Object);   // true


// ============================================================
// 9. NULLISH COALESCING OPERATOR (??)
// ============================================================

console.log("\n--- 9. Nullish Coalescing (??) ---");

/*
?? returns the right operand when left is null or undefined.
Different from || which also treats 0, "", false as falsy.
*/

let value1 = null;
let value2 = undefined;
let value3 = 0;
let value4 = "";

console.log("null ?? 'default':", value1 ?? "default");       // "default"
console.log("undefined ?? 'default':", value2 ?? "default");  // "default"
console.log("0 ?? 'default':", value3 ?? "default");          // 0
console.log("'' ?? 'default':", value4 ?? "default");         // ""

// Compare with ||
console.log("\n-- Compare with || --");
console.log("0 || 'default':", value3 || "default");          // "default"
console.log("'' || 'default':", value4 || "default");         // "default"


// ============================================================
// 10. OPTIONAL CHAINING OPERATOR (?.)
// ============================================================

console.log("\n--- 10. Optional Chaining (?.) ---");

/*
?. safely accesses nested properties without causing errors
if an intermediate property doesn't exist.
*/

let user = {
    name: "John",
    address: {
        city: "New York"
    }
};

// Safe access
console.log("user.address?.city:", user.address?.city);     // "New York"
console.log("user.contact?.phone:", user.contact?.phone);   // undefined (no error!)

// Without optional chaining, this would throw an error:
// console.log(user.contact.phone); // ERROR!


// ============================================================
// 11. OPERATOR PRECEDENCE
// ============================================================

console.log("\n--- 11. Operator Precedence ---");

/*
Operators have different priorities. Higher precedence executes first.
Use parentheses () to override precedence.

Precedence (high to low):
1. () - Parentheses
2. ** - Exponentiation
3. *, /, % - Multiplication, Division, Modulus
4. +, - - Addition, Subtraction
5. <, >, <=, >= - Comparison
6. ==, ===, !=, !== - Equality
7. && - AND
8. || - OR
9. = - Assignment
*/

// Without parentheses
console.log("2 + 3 * 4 =", 2 + 3 * 4);      // 14 (multiplication first)

// With parentheses
console.log("(2 + 3) * 4 =", (2 + 3) * 4);  // 20 (addition first)

// Complex example
console.log("10 + 5 * 2 - 8 / 4 =", 10 + 5 * 2 - 8 / 4);  // 10 + 10 - 2 = 18


// ============================================================
// 12. PRACTICAL EXAMPLES
// ============================================================

console.log("\n--- 12. Practical Examples ---");

// Example 1: Calculate discount
function calculateDiscount(price, discountPercent) {
    let discount = price * (discountPercent / 100);
    let finalPrice = price - discount;
    return finalPrice;
}

let originalPrice = 100;
let discount = 20;
console.log(`Original: $${originalPrice}, Discount: ${discount}%`);
console.log(`Final Price: $${calculateDiscount(originalPrice, discount)}`);

// Example 2: Check voting eligibility
function canVote(age, isCitizen) {
    return age >= 18 && isCitizen;
}

console.log("\nCan vote (age 20, citizen):", canVote(20, true));   // true
console.log("Can vote (age 16, citizen):", canVote(16, true));    // false
console.log("Can vote (age 25, non-citizen):", canVote(25, false)); // false

// Example 3: Check even/odd
function isEven(number) {
    return number % 2 === 0;
}

console.log("\nIs 10 even?", isEven(10));  // true
console.log("Is 7 even?", isEven(7));     // false

console.log("\n=== End of Operators ===");
