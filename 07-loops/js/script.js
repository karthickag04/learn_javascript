// ============================================================
// 07 - LOOPS
// ============================================================

console.log("=== JavaScript Loops ===\n");

// ============================================================
// 1. FOR LOOP
// ============================================================

console.log("--- 1. for Loop ---");

/*
The for loop repeats code a specific number of times.

Syntax:
for (initialization; condition; increment/decrement) {
    // code to repeat
}

- initialization: Runs once at the start
- condition: Checked before each iteration
- increment/decrement: Runs after each iteration
*/

// Basic for loop - counting from 1 to 5
console.log("Counting 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Counting backwards
console.log("\nCounting 5 to 1:");
for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// Increment by 2
console.log("\nEven numbers 2 to 10:");
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// Loop with array
console.log("\nLoop through array:");
let fruits = ["Apple", "Banana", "Cherry", "Date"];
for (let i = 0; i < fruits.length; i++) {
    console.log(`Index ${i}: ${fruits[i]}`);
}


// ============================================================
// 2. WHILE LOOP
// ============================================================

console.log("\n--- 2. while Loop ---");

/*
The while loop repeats code as long as a condition is true.
The condition is checked BEFORE each iteration.

Syntax:
while (condition) {
    // code to repeat
}

IMPORTANT: Make sure the condition eventually becomes false,
or you'll create an infinite loop!
*/

// Basic while loop
console.log("Counting 1 to 5 with while:");
let count = 1;
while (count <= 5) {
    console.log(count);
    count++;  // Don't forget to increment!
}

// While with different condition
console.log("\nDouble until > 100:");
let value = 1;
while (value <= 100) {
    console.log(value);
    value *= 2;  // 1, 2, 4, 8, 16, 32, 64, 128 (stops)
}

// Unknown number of iterations
console.log("\nDivide until < 1:");
let num = 100;
while (num >= 1) {
    console.log(num);
    num /= 2;
}


// ============================================================
// 3. DO...WHILE LOOP
// ============================================================

console.log("\n--- 3. do...while Loop ---");

/*
The do...while loop executes the code block AT LEAST ONCE,
then repeats as long as the condition is true.
The condition is checked AFTER each iteration.

Syntax:
do {
    // code to repeat
} while (condition);
*/

// Basic do...while
console.log("do...while counting 1 to 5:");
let counter = 1;
do {
    console.log(counter);
    counter++;
} while (counter <= 5);

// Demonstrating "at least once" behavior
console.log("\ndo...while with false condition:");
let x = 10;
do {
    console.log("This runs at least once! x =", x);
} while (x < 5);  // Condition is false, but code ran once

// Compare with while
console.log("\nwhile with false condition:");
x = 10;
while (x < 5) {
    console.log("This won't run");  // Never executes
}
console.log("while loop skipped entirely");


// ============================================================
// 4. FOR...OF LOOP
// ============================================================

console.log("\n--- 4. for...of Loop ---");

/*
The for...of loop iterates over VALUES of an iterable object
(arrays, strings, maps, sets, etc.)

Syntax:
for (let element of iterable) {
    // code
}
*/

// Loop through array
console.log("for...of with array:");
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log(color);
}

// Loop through string
console.log("\nfor...of with string:");
let word = "Hello";
for (let char of word) {
    console.log(char);
}

// With index (using entries())
console.log("\nfor...of with index:");
for (let [index, color] of colors.entries()) {
    console.log(`${index}: ${color}`);
}


// ============================================================
// 5. FOR...IN LOOP
// ============================================================

console.log("\n--- 5. for...in Loop ---");

/*
The for...in loop iterates over PROPERTY NAMES (keys) of an object.

Syntax:
for (let key in object) {
    // code
}

Note: Don't use for...in for arrays! Use for...of instead.
*/

// Loop through object properties
console.log("for...in with object:");
let car = {
    brand: "BMW",
    model: "X5",
    year: 2023,
    color: "Black"
};

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

// Can also access keys and values
console.log("\nObject keys and values:");
for (let property in car) {
    console.log(`Property: ${property}, Value: ${car[property]}`);
}


// ============================================================
// 6. BREAK STATEMENT
// ============================================================

console.log("\n--- 6. break Statement ---");

/*
The break statement exits the loop immediately,
skipping any remaining iterations.
*/

// Break when finding a specific value
console.log("Find number 5 in array:");
let numbers = [2, 4, 6, 5, 8, 10];
for (let i = 0; i < numbers.length; i++) {
    console.log("Checking:", numbers[i]);
    if (numbers[i] === 5) {
        console.log("Found 5! Breaking loop.");
        break;
    }
}

// Break in while loop
console.log("\nBreak in while loop:");
let n = 0;
while (true) {  // Infinite loop
    console.log(n);
    n++;
    if (n >= 5) {
        console.log("Breaking at 5");
        break;
    }
}


// ============================================================
// 7. CONTINUE STATEMENT
// ============================================================

console.log("\n--- 7. continue Statement ---");

/*
The continue statement skips the current iteration
and moves to the next one.
*/

// Skip even numbers
console.log("Print only odd numbers 1-10:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;  // Skip even numbers
    }
    console.log(i);
}

// Skip specific values
console.log("\nSkip negative numbers:");
let mixedNumbers = [1, -2, 3, -4, 5, -6];
for (let num of mixedNumbers) {
    if (num < 0) {
        continue;
    }
    console.log(num);
}


// ============================================================
// 8. NESTED LOOPS
// ============================================================

console.log("\n--- 8. Nested Loops ---");

/*
You can place one loop inside another.
The inner loop runs completely for each iteration of the outer loop.
*/

// Multiplication table (2x2)
console.log("Multiplication table 1-3:");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("---");
}

// Pattern printing
console.log("\nStar pattern:");
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

// Break out of nested loops with label
console.log("\nBreak from nested loop:");
outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i=${i}, j=${j}`);
        if (i === 2 && j === 2) {
            console.log("Breaking outer loop!");
            break outerLoop;
        }
    }
}


// ============================================================
// 9. LOOPING THROUGH ARRAYS (Various Methods)
// ============================================================

console.log("\n--- 9. Array Looping Methods ---");

let names = ["Alice", "Bob", "Charlie", "David"];

// Method 1: Traditional for loop
console.log("Method 1 - for loop:");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Method 2: for...of
console.log("\nMethod 2 - for...of:");
for (let name of names) {
    console.log(name);
}

// Method 3: forEach
console.log("\nMethod 3 - forEach:");
names.forEach(function(name, index) {
    console.log(`${index}: ${name}`);
});

// Method 4: forEach with arrow function
console.log("\nMethod 4 - forEach arrow:");
names.forEach((name) => console.log(name));


// ============================================================
// 10. LOOP PERFORMANCE
// ============================================================

console.log("\n--- 10. Loop Performance Tips ---");

/*
Performance Tips:
1. Cache array length in for loops
2. Use for...of for simple iteration
3. Avoid modifying array during iteration
4. Use break when search is complete
*/

let largeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Less efficient (length checked each time)
console.log("Checking length each iteration:");
for (let i = 0; i < largeArray.length; i++) {
    // largeArray.length is checked each iteration
}

// More efficient (length cached)
console.log("Cached length:");
for (let i = 0, len = largeArray.length; i < len; i++) {
    // len is calculated once
}

console.log("Both approaches work, but caching is slightly faster for large arrays.");


// ============================================================
// 11. PRACTICAL EXAMPLES
// ============================================================

console.log("\n--- 11. Practical Examples ---");

// Example 1: Sum of array elements
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

console.log("Sum of [1,2,3,4,5]:", sumArray([1, 2, 3, 4, 5]));

// Example 2: Find maximum value
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log("Max of [3,7,2,9,5]:", findMax([3, 7, 2, 9, 5]));

// Example 3: Count occurrences
function countOccurrences(arr, target) {
    let count = 0;
    for (let item of arr) {
        if (item === target) {
            count++;
        }
    }
    return count;
}

let testArr = [1, 2, 3, 2, 4, 2, 5];
console.log("Count of 2 in array:", countOccurrences(testArr, 2));

// Example 4: Reverse a string
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log("Reverse 'Hello':", reverseString("Hello"));

// Example 5: Find first match
function findFirst(arr, condition) {
    for (let item of arr) {
        if (condition(item)) {
            return item;
        }
    }
    return undefined;
}

let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
];

let adult = findFirst(people, person => person.age >= 18);
console.log("First adult:", adult);

// Example 6: Generate Fibonacci sequence
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}

console.log("Fibonacci (10):", fibonacci(10));

// Example 7: FizzBuzz
console.log("\nFizzBuzz (1-15):");
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

console.log("\n=== End of Loops ===");
