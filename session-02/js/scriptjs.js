// OPERATORS in JAVASCRIPT

// Arithmetic operators
let v1 = 10;
let v2 = 20;

// Addition
console.log("addition", v1 + v2); // Add v1 and v2

// Subtraction
console.log("subtraction", v1 - v2); // Subtract v2 from v1

// Multiplication
console.log("multiply", v1 * v2); // Multiply v1 and v2

// Division
console.log("division", v1 / v2); // Divide v1 by v2

// Modulus
console.log("modulus", v1 % v2); // Get the remainder of v1 divided by v2

// Exponentiation
console.log("Expo", v1 ** v2); // Raise v1 to the power of v2

// Increment #pre
v1 = ++v1; // Pre-increment v1
console.log("increment #pre", v1);

// Increment #post
let post_incre = v1++; // Post-increment v1
console.log("increment #post", post_incre);
console.log("increment #post", v1);

// Decrement #pre
v1 = --v1; // Pre-decrement v1
console.log(v1);

// Assignment operators
v1 = 25; // Assign 25 to v1
console.log(v1);

v1 += 20; // v1 = v1 + 20
console.log(v1);

v1 -= 20; // v1 = v1 - 20
console.log(v1);

v1 *= 20; // v1 = v1 * 20
console.log(v1);

v1 /= 20; // v1 = v1 / 20
console.log(v1);

v1 %= 20; // v1 = v1 % 20
console.log(v1);

console.clear();

// Comparison operators
v1 = 5;

console.log(v1 == 5); // Check if v1 is equal to 5
console.log(v1 === "5", typeof v1); // Check if v1 is strictly equal to "5" and print type of v1
console.log(v1 != 1); // Check if v1 is not equal to 1
console.log(v1 !== "5", typeof v1); // Check if v1 is not strictly equal to "5" and print type of v1

// Relational operators
console.log(v1 > 1); // Check if v1 is greater than 1
console.log(v1 < 1); // Check if v1 is less than 1
console.log(v1 >= 5); // Check if v1 is greater than or equal to 5
console.log(v1 <= 10); // Check if v1 is less than or equal to 10

console.clear();

// Logical operators
v1 = "s";
v2 = "i";

console.log(v1 == "s" && v2 == "q"); // Logical AND: Check if v1 is "s" and v2 is "q"
console.log(v1 == "s" || v2 == "q"); // Logical OR: Check if v1 is "s" or v2 is "q"
console.log(!(v1 == "s" || v2 == "q")); // Logical NOT: Check if v1 is not "s" or v2 is not "q"
