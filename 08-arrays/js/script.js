// ============================================================
// 08 - ARRAYS
// ============================================================

console.log("=== JavaScript Arrays ===\n");

// ============================================================
// 1. CREATING ARRAYS
// ============================================================

console.log("--- 1. Creating Arrays ---");

/*
Arrays are ordered collections of values.
They are zero-indexed (first element is at index 0).
*/

// Using array literal (recommended)
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits:", fruits);

// Using Array constructor
let numbers = new Array(1, 2, 3, 4, 5);
console.log("Numbers:", numbers);

// Empty array
let empty = [];
console.log("Empty array:", empty);

// Array with mixed types
let mixed = [1, "hello", true, null, { name: "John" }, [1, 2]];
console.log("Mixed array:", mixed);

// Array with single type
let scores = [85, 92, 78, 95, 88];
console.log("Scores:", scores);


// ============================================================
// 2. ACCESSING ARRAY ELEMENTS
// ============================================================

console.log("\n--- 2. Accessing Elements ---");

let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// Access by index (0-based)
console.log("First element (index 0):", colors[0]);   // Red
console.log("Third element (index 2):", colors[2]);   // Blue
console.log("Last element:", colors[colors.length - 1]); // Purple

// Access non-existent index
console.log("Index 10:", colors[10]);  // undefined

// Array length
console.log("Array length:", colors.length);  // 5

// Display as table
console.log("\nArray as table:");
console.table(colors);


// ============================================================
// 3. MODIFYING ARRAYS
// ============================================================

console.log("\n--- 3. Modifying Arrays ---");

let animals = ["Dog", "Cat", "Bird"];
console.log("Original:", animals);

// Change element at index
animals[1] = "Elephant";
console.log("After animals[1] = 'Elephant':", animals);

// Add element at specific index
animals[3] = "Fish";
console.log("After animals[3] = 'Fish':", animals);

// What if we skip an index?
animals[5] = "Lion";
console.log("After animals[5] = 'Lion':", animals);
console.log("Length:", animals.length);  // 6 (with empty slot at index 4)


// ============================================================
// 4. ADDING ELEMENTS
// ============================================================

console.log("\n--- 4. Adding Elements ---");

let items = ["A", "B", "C"];
console.log("Original:", items);

// push() - Add to END
items.push("D");
console.log("After push('D'):", items);

// Push multiple items
items.push("E", "F");
console.log("After push('E', 'F'):", items);

// unshift() - Add to BEGINNING
items.unshift("Z");
console.log("After unshift('Z'):", items);

// Unshift multiple items
items.unshift("X", "Y");
console.log("After unshift('X', 'Y'):", items);


// ============================================================
// 5. REMOVING ELEMENTS
// ============================================================

console.log("\n--- 5. Removing Elements ---");

let letters = ["A", "B", "C", "D", "E"];
console.log("Original:", letters);

// pop() - Remove from END (returns removed element)
let removed = letters.pop();
console.log("After pop():", letters);
console.log("Removed element:", removed);

// shift() - Remove from BEGINNING (returns removed element)
removed = letters.shift();
console.log("After shift():", letters);
console.log("Removed element:", removed);


// ============================================================
// 6. SPLICE - ADD/REMOVE AT ANY POSITION
// ============================================================

console.log("\n--- 6. splice() Method ---");

/*
splice(startIndex, deleteCount, item1, item2, ...)
- startIndex: Where to start
- deleteCount: How many elements to remove
- items: Elements to add (optional)
*/

let nums = [1, 2, 3, 4, 5];
console.log("Original:", nums);

// Remove 2 elements starting at index 2
let removed1 = nums.splice(2, 2);
console.log("After splice(2, 2):", nums);
console.log("Removed:", removed1);

// Insert without removing (deleteCount = 0)
nums = [1, 2, 3, 4, 5];
nums.splice(2, 0, "A", "B");
console.log("\nAfter splice(2, 0, 'A', 'B'):", nums);

// Replace elements
nums = [1, 2, 3, 4, 5];
nums.splice(1, 2, "X", "Y", "Z");
console.log("\nAfter splice(1, 2, 'X', 'Y', 'Z'):", nums);


// ============================================================
// 7. SLICE - EXTRACT PORTION
// ============================================================

console.log("\n--- 7. slice() Method ---");

/*
slice(startIndex, endIndex)
- Returns a NEW array
- Does NOT modify original
- endIndex is NOT included
*/

let arr = [1, 2, 3, 4, 5];
console.log("Original:", arr);

// Slice from index 1 to 4 (4 not included)
let sliced = arr.slice(1, 4);
console.log("slice(1, 4):", sliced);  // [2, 3, 4]
console.log("Original unchanged:", arr);

// Slice from index 2 to end
sliced = arr.slice(2);
console.log("slice(2):", sliced);  // [3, 4, 5]

// Negative indices (from end)
sliced = arr.slice(-3);
console.log("slice(-3):", sliced);  // [3, 4, 5]

sliced = arr.slice(-3, -1);
console.log("slice(-3, -1):", sliced);  // [3, 4]

// Copy entire array
let copy = arr.slice();
console.log("slice() (copy):", copy);


// ============================================================
// 8. COMBINING ARRAYS
// ============================================================

console.log("\n--- 8. Combining Arrays ---");

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// concat() - Merge arrays
let combined = arr1.concat(arr2);
console.log("concat():", combined);

// Concat multiple arrays
let arr3 = [7, 8];
combined = arr1.concat(arr2, arr3);
console.log("concat multiple:", combined);

// Spread operator (modern way)
combined = [...arr1, ...arr2];
console.log("Spread operator:", combined);

// Add individual elements
combined = [...arr1, "X", ...arr2];
console.log("Spread with extra:", combined);


// ============================================================
// 9. SEARCHING ARRAYS
// ============================================================

console.log("\n--- 9. Searching Arrays ---");

let names = ["Alice", "Bob", "Charlie", "David", "Bob"];

// indexOf() - Find first occurrence
console.log("indexOf('Bob'):", names.indexOf("Bob"));      // 1
console.log("indexOf('Eve'):", names.indexOf("Eve"));      // -1 (not found)

// indexOf with start position
console.log("indexOf('Bob', 2):", names.indexOf("Bob", 2)); // 4

// lastIndexOf() - Find last occurrence
console.log("lastIndexOf('Bob'):", names.lastIndexOf("Bob")); // 4

// includes() - Check if element exists
console.log("includes('Alice'):", names.includes("Alice"));  // true
console.log("includes('Eve'):", names.includes("Eve"));      // false

// find() - Find first element matching condition
let numArray = [1, 5, 10, 15, 20];
let found = numArray.find(n => n > 8);
console.log("find(n => n > 8):", found);  // 10

// findIndex() - Find index of first match
let foundIndex = numArray.findIndex(n => n > 8);
console.log("findIndex(n => n > 8):", foundIndex);  // 2


// ============================================================
// 10. SORTING ARRAYS
// ============================================================

console.log("\n--- 10. Sorting Arrays ---");

// Sort strings (alphabetically)
let fruits2 = ["Banana", "Apple", "Cherry", "Date"];
console.log("Original:", fruits2);
fruits2.sort();
console.log("After sort():", fruits2);

// Reverse array
fruits2.reverse();
console.log("After reverse():", fruits2);

// Sort numbers (need compare function!)
let numbers2 = [40, 100, 1, 5, 25, 10];
console.log("\nNumbers original:", numbers2);

// Wrong way (sorts as strings!)
numbers2.sort();
console.log("sort() wrong:", numbers2);  // [1, 10, 100, 25, 40, 5]

// Correct way - with compare function
numbers2 = [40, 100, 1, 5, 25, 10];
numbers2.sort((a, b) => a - b);  // Ascending
console.log("sort((a,b) => a-b):", numbers2);

numbers2.sort((a, b) => b - a);  // Descending
console.log("sort((a,b) => b-a):", numbers2);


// ============================================================
// 11. ARRAY TRANSFORMATION
// ============================================================

console.log("\n--- 11. Array Transformation ---");

// join() - Convert to string
let words = ["Hello", "World", "JavaScript"];
console.log("join():", words.join());        // "Hello,World,JavaScript"
console.log("join(' '):", words.join(" "));  // "Hello World JavaScript"
console.log("join('-'):", words.join("-"));  // "Hello-World-JavaScript"

// toString() - Convert to comma-separated string
console.log("toString():", words.toString());

// split() - String to array (String method)
let sentence = "Hello World JavaScript";
let wordsArr = sentence.split(" ");
console.log("split(' '):", wordsArr);

// Array.from() - Create array from iterable
let str = "Hello";
let chars = Array.from(str);
console.log("Array.from('Hello'):", chars);

// Array.from() with mapping
let squares = Array.from([1, 2, 3, 4], x => x * x);
console.log("Array.from with map:", squares);


// ============================================================
// 12. CHECKING ARRAYS
// ============================================================

console.log("\n--- 12. Checking Arrays ---");

// Array.isArray() - Check if value is an array
console.log("Array.isArray([1,2,3]):", Array.isArray([1, 2, 3]));  // true
console.log("Array.isArray('hello'):", Array.isArray("hello"));    // false
console.log("Array.isArray({}):", Array.isArray({}));              // false

// every() - Check if ALL elements pass test
let ages = [25, 30, 35, 40];
let allAdults = ages.every(age => age >= 18);
console.log("every(age >= 18):", allAdults);  // true

// some() - Check if ANY element passes test
let hasMinor = ages.some(age => age < 18);
console.log("some(age < 18):", hasMinor);  // false


// ============================================================
// 13. FILLING AND CREATING ARRAYS
// ============================================================

console.log("\n--- 13. Filling Arrays ---");

// fill() - Fill array with value
let fillArray = new Array(5).fill(0);
console.log("new Array(5).fill(0):", fillArray);

// Fill with starting position
let partialFill = [1, 2, 3, 4, 5];
partialFill.fill(0, 2, 4);  // Fill index 2 to 4 (not including 4)
console.log("fill(0, 2, 4):", partialFill);

// Array.of() - Create array from arguments
let newArr = Array.of(1, 2, 3);
console.log("Array.of(1, 2, 3):", newArr);


// ============================================================
// 14. FLAT AND FLATMAP
// ============================================================

console.log("\n--- 14. Flattening Arrays ---");

// flat() - Flatten nested arrays
let nested = [1, [2, 3], [4, [5, 6]]];
console.log("Original:", nested);
console.log("flat():", nested.flat());      // [1, 2, 3, 4, [5, 6]]
console.log("flat(2):", nested.flat(2));    // [1, 2, 3, 4, 5, 6]
console.log("flat(Infinity):", nested.flat(Infinity));


// ============================================================
// 15. DESTRUCTURING ARRAYS
// ============================================================

console.log("\n--- 15. Array Destructuring ---");

let rgb = [255, 128, 64];

// Basic destructuring
let [red, green, blue] = rgb;
console.log("Destructured:", red, green, blue);

// Skip elements
let [first, , third] = rgb;
console.log("Skip second:", first, third);

// Rest pattern
let [head, ...tail] = [1, 2, 3, 4, 5];
console.log("Head:", head);
console.log("Tail:", tail);

// Default values
let [a, b, c, d = 0] = [1, 2, 3];
console.log("With default:", a, b, c, d);

// Swap variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log("Swapped:", x, y);


// ============================================================
// 16. PRACTICAL EXAMPLES
// ============================================================

console.log("\n--- 16. Practical Examples ---");

// Example 1: Remove duplicates
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log("Remove duplicates:", removeDuplicates([1, 2, 2, 3, 3, 4]));

// Example 2: Get random element
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
console.log("Random color:", getRandomElement(["Red", "Blue", "Green"]));

// Example 3: Chunk array
function chunkArray(arr, size) {
    let chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}
console.log("Chunk [1-6] by 2:", chunkArray([1, 2, 3, 4, 5, 6], 2));

// Example 4: Group by property
function groupBy(arr, key) {
    return arr.reduce((groups, item) => {
        const group = item[key];
        groups[group] = groups[group] || [];
        groups[group].push(item);
        return groups;
    }, {});
}

let people = [
    { name: "Alice", dept: "HR" },
    { name: "Bob", dept: "IT" },
    { name: "Charlie", dept: "HR" }
];
console.log("Group by dept:", groupBy(people, "dept"));

console.log("\n=== End of Arrays ===");
