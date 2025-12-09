// ============================================================
// 09 - ARRAY ITERATION METHODS
// ============================================================

console.log("=== Array Iteration Methods ===\n");

// ============================================================
// 1. forEach() - EXECUTE FOR EACH ELEMENT
// ============================================================

console.log("--- 1. forEach() ---");

/*
forEach() executes a provided function once for each array element.
- Does NOT return anything (returns undefined)
- Cannot be stopped (no break)
- Does NOT modify original array (unless you explicitly do so)

Syntax: array.forEach((element, index, array) => { })
*/

let names = ["Alice", "Bob", "Charlie", "David"];

// Basic forEach
console.log("Basic forEach:");
names.forEach(function(name) {
    console.log(name);
});

// Arrow function syntax
console.log("\nArrow function forEach:");
names.forEach(name => console.log(name));

// With index
console.log("\nWith index:");
names.forEach((name, index) => {
    console.log(`${index}: ${name}`);
});

// forEach does NOT return anything
let result = names.forEach(name => name.toUpperCase());
console.log("\nforEach return value:", result);  // undefined


// ============================================================
// 2. map() - TRANSFORM ELEMENTS
// ============================================================

console.log("\n--- 2. map() ---");

/*
map() creates a NEW array by transforming each element.
- RETURNS a new array
- Does NOT modify original array
- New array has same length as original

Syntax: array.map((element, index, array) => { return newElement; })
*/

let numbers = [1, 2, 3, 4, 5];

// Double each number
let doubled = numbers.map(num => num * 2);
console.log("Original:", numbers);
console.log("Doubled:", doubled);

// Square each number
let squared = numbers.map(num => num ** 2);
console.log("Squared:", squared);

// Transform objects
let users = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" }
];

let fullNames = users.map(user => `${user.firstName} ${user.lastName}`);
console.log("\nFull names:", fullNames);

// Add index to each element
let indexed = numbers.map((num, index) => ({ value: num, index: index }));
console.log("\nWith indices:", indexed);


// ============================================================
// 3. filter() - KEEP MATCHING ELEMENTS
// ============================================================

console.log("\n--- 3. filter() ---");

/*
filter() creates a NEW array with elements that pass a test.
- RETURNS a new array (can be shorter than original)
- Does NOT modify original array
- Callback must return true/false

Syntax: array.filter((element, index, array) => { return boolean; })
*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers
let evens = nums.filter(n => n % 2 === 0);
console.log("Original:", nums);
console.log("Even numbers:", evens);

// Filter odd numbers
let odds = nums.filter(n => n % 2 !== 0);
console.log("Odd numbers:", odds);

// Filter numbers greater than 5
let greaterThan5 = nums.filter(n => n > 5);
console.log("Greater than 5:", greaterThan5);

// Filter with objects
let products = [
    { name: "Laptop", price: 999, inStock: true },
    { name: "Phone", price: 699, inStock: false },
    { name: "Tablet", price: 499, inStock: true },
    { name: "Watch", price: 299, inStock: true }
];

let inStock = products.filter(p => p.inStock);
console.log("\nIn stock products:", inStock);

let affordable = products.filter(p => p.price < 500);
console.log("Affordable (< $500):", affordable);

// Multiple conditions
let goodDeals = products.filter(p => p.inStock && p.price < 500);
console.log("Good deals:", goodDeals);


// ============================================================
// 4. reduce() - REDUCE TO SINGLE VALUE
// ============================================================

console.log("\n--- 4. reduce() ---");

/*
reduce() reduces an array to a single value.
- RETURNS a single value (number, string, object, array, etc.)
- Takes an accumulator and current value
- Optional initial value (recommended to always provide)

Syntax: array.reduce((accumulator, currentValue, index, array) => { 
    return newAccumulator; 
}, initialValue)
*/

let values = [1, 2, 3, 4, 5];

// Sum all numbers
let sum = values.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);  // 15

// How reduce works step by step:
console.log("\nReduce step by step:");
values.reduce((acc, curr, index) => {
    console.log(`Step ${index}: acc=${acc}, curr=${curr}, result=${acc + curr}`);
    return acc + curr;
}, 0);

// Product of all numbers
let product = values.reduce((acc, curr) => acc * curr, 1);
console.log("\nProduct:", product);  // 120

// Find maximum
let max = values.reduce((acc, curr) => curr > acc ? curr : acc, values[0]);
console.log("Maximum:", max);

// Find minimum
let min = values.reduce((acc, curr) => curr < acc ? curr : acc, values[0]);
console.log("Minimum:", min);

// Count occurrences
let letters = ["a", "b", "a", "c", "a", "b"];
let counts = letters.reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
}, {});
console.log("\nLetter counts:", counts);

// Flatten array
let nested = [[1, 2], [3, 4], [5, 6]];
let flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log("\nFlattened:", flat);

// Calculate total price
let cart = [
    { item: "Shirt", price: 25, qty: 2 },
    { item: "Pants", price: 35, qty: 1 },
    { item: "Shoes", price: 50, qty: 1 }
];

let total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
console.log("\nCart total: $" + total);


// ============================================================
// 5. find() AND findIndex()
// ============================================================

console.log("\n--- 5. find() and findIndex() ---");

/*
find() - Returns the FIRST element that passes a test
findIndex() - Returns the INDEX of the first element that passes a test
*/

let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 25 }
];

// find() - Get first person over 30
let person = people.find(p => p.age > 25);
console.log("First person over 25:", person);

// find() - Get person named Charlie
let charlie = people.find(p => p.name === "Charlie");
console.log("Charlie:", charlie);

// find() - Not found returns undefined
let notFound = people.find(p => p.age > 50);
console.log("Person over 50:", notFound);  // undefined

// findIndex() - Get index
let index = people.findIndex(p => p.name === "Bob");
console.log("Bob's index:", index);  // 1

// findIndex() - Not found returns -1
let notFoundIndex = people.findIndex(p => p.age > 50);
console.log("Index of person over 50:", notFoundIndex);  // -1


// ============================================================
// 6. some() AND every()
// ============================================================

console.log("\n--- 6. some() and every() ---");

/*
some() - Returns true if AT LEAST ONE element passes the test
every() - Returns true if ALL elements pass the test
*/

let ages = [18, 21, 25, 30, 16];

// some() - Is there any minor?
let hasMinor = ages.some(age => age < 18);
console.log("Has minor (< 18):", hasMinor);  // true

// some() - Is there anyone over 40?
let hasOver40 = ages.some(age => age > 40);
console.log("Has person over 40:", hasOver40);  // false

// every() - Are all adults?
let allAdults = ages.every(age => age >= 18);
console.log("All adults (>= 18):", allAdults);  // false

// every() - Are all under 50?
let allUnder50 = ages.every(age => age < 50);
console.log("All under 50:", allUnder50);  // true

// Practical example
let passwords = ["abc123", "Password1!", "hello"];

let allSecure = passwords.every(pwd => 
    pwd.length >= 8 && /[A-Z]/.test(pwd) && /[0-9]/.test(pwd)
);
console.log("\nAll passwords secure:", allSecure);  // false


// ============================================================
// 7. CHAINING METHODS
// ============================================================

console.log("\n--- 7. Chaining Methods ---");

/*
You can chain multiple array methods together.
Each method returns an array that can be operated on.
*/

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter evens, double them, sum them
let result1 = data
    .filter(n => n % 2 === 0)   // [2, 4, 6, 8, 10]
    .map(n => n * 2)            // [4, 8, 12, 16, 20]
    .reduce((a, b) => a + b, 0); // 60

console.log("Evens doubled and summed:", result1);

// More complex example
let employees = [
    { name: "Alice", dept: "IT", salary: 70000 },
    { name: "Bob", dept: "HR", salary: 55000 },
    { name: "Charlie", dept: "IT", salary: 80000 },
    { name: "David", dept: "IT", salary: 65000 },
    { name: "Eve", dept: "HR", salary: 60000 }
];

// Get names of IT employees earning > 65000
let highEarningIT = employees
    .filter(emp => emp.dept === "IT")
    .filter(emp => emp.salary > 65000)
    .map(emp => emp.name);

console.log("High-earning IT employees:", highEarningIT);

// Calculate average salary in IT department
let itSalaries = employees.filter(emp => emp.dept === "IT");
let avgITSalary = itSalaries.reduce((sum, emp) => sum + emp.salary, 0) / itSalaries.length;
console.log("Average IT salary: $" + avgITSalary);


// ============================================================
// 8. reduceRight()
// ============================================================

console.log("\n--- 8. reduceRight() ---");

/*
reduceRight() works like reduce(), but from right to left.
*/

let words = ["World", " ", "Hello"];

// reduce (left to right)
let leftToRight = words.reduce((acc, word) => acc + word, "");
console.log("reduce:", leftToRight);  // "World Hello"

// reduceRight (right to left)
let rightToLeft = words.reduceRight((acc, word) => acc + word, "");
console.log("reduceRight:", rightToLeft);  // "Hello World"


// ============================================================
// 9. flatMap()
// ============================================================

console.log("\n--- 9. flatMap() ---");

/*
flatMap() is like map() followed by flat(1).
It maps each element, then flattens the result by one level.
*/

let sentences = ["Hello World", "Good Morning"];

// Using map (creates nested array)
let wordsMap = sentences.map(s => s.split(" "));
console.log("map + split:", wordsMap);

// Using flatMap (flattens automatically)
let wordsFlatMap = sentences.flatMap(s => s.split(" "));
console.log("flatMap + split:", wordsFlatMap);

// Duplicate each number
let numsFlat = [1, 2, 3];
let duplicated = numsFlat.flatMap(n => [n, n]);
console.log("Duplicated:", duplicated);  // [1, 1, 2, 2, 3, 3]


// ============================================================
// 10. PRACTICAL EXAMPLES
// ============================================================

console.log("\n--- 10. Practical Examples ---");

// Example 1: Filter and transform data
let orders = [
    { id: 1, items: ["Apple", "Banana"], total: 15 },
    { id: 2, items: ["Orange"], total: 5 },
    { id: 3, items: ["Mango", "Grape", "Kiwi"], total: 25 },
    { id: 4, items: ["Watermelon"], total: 10 }
];

// Get IDs of orders with total > 10
let largeOrderIds = orders
    .filter(order => order.total > 10)
    .map(order => order.id);
console.log("Large order IDs:", largeOrderIds);

// Count total items across all orders
let totalItems = orders
    .map(order => order.items.length)
    .reduce((sum, count) => sum + count, 0);
console.log("Total items:", totalItems);

// Example 2: Statistics
let scores = [85, 90, 78, 92, 88, 76, 95];

let stats = {
    min: scores.reduce((min, s) => s < min ? s : min, scores[0]),
    max: scores.reduce((max, s) => s > max ? s : max, scores[0]),
    sum: scores.reduce((sum, s) => sum + s, 0),
    avg: scores.reduce((sum, s) => sum + s, 0) / scores.length,
    count: scores.length
};
console.log("\nScore statistics:", stats);

// Example 3: Group by category
let items = [
    { name: "Apple", category: "Fruit" },
    { name: "Carrot", category: "Vegetable" },
    { name: "Banana", category: "Fruit" },
    { name: "Broccoli", category: "Vegetable" },
    { name: "Mango", category: "Fruit" }
];

let grouped = items.reduce((groups, item) => {
    let category = item.category;
    if (!groups[category]) {
        groups[category] = [];
    }
    groups[category].push(item.name);
    return groups;
}, {});
console.log("\nGrouped by category:", grouped);

// Example 4: Transform API response
let apiResponse = [
    { id: 1, first_name: "John", last_name: "Doe", is_active: true },
    { id: 2, first_name: "Jane", last_name: "Smith", is_active: false },
    { id: 3, first_name: "Bob", last_name: "Wilson", is_active: true }
];

let activeUsers = apiResponse
    .filter(user => user.is_active)
    .map(user => ({
        id: user.id,
        fullName: `${user.first_name} ${user.last_name}`,
        active: user.is_active
    }));
console.log("\nActive users:", activeUsers);

console.log("\n=== End of Array Methods ===");
