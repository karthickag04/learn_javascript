// ============================================================
// 11 - STRINGS
// ============================================================

console.log("=== JavaScript Strings ===\n");

// ============================================================
// 1. CREATING STRINGS
// ============================================================

console.log("--- 1. Creating Strings ---");

// String literals
let singleQuote = 'Hello World';
let doubleQuote = "Hello World";
let templateLiteral = `Hello World`;

console.log("Single quotes:", singleQuote);
console.log("Double quotes:", doubleQuote);
console.log("Template literal:", templateLiteral);

// Strings with quotes inside
let quoteInside1 = "It's a beautiful day";
let quoteInside2 = 'He said "Hello"';
let escaped = "It\'s a \"test\"";

console.log("\nQuotes inside strings:");
console.log(quoteInside1);
console.log(quoteInside2);
console.log(escaped);

// String constructor
let strObject = new String("Hello");
console.log("\nString object:", strObject);
console.log("Type:", typeof strObject);  // object, not string!


// ============================================================
// 2. STRING LENGTH AND ACCESSING CHARACTERS
// ============================================================

console.log("\n--- 2. Length and Character Access ---");

let text = "JavaScript";

// Length property
console.log("String:", text);
console.log("Length:", text.length);  // 10

// Access individual characters
console.log("First character [0]:", text[0]);        // J
console.log("Last character [9]:", text[9]);         // t
console.log("Last using length:", text[text.length - 1]);  // t

// charAt() method
console.log("charAt(4):", text.charAt(4));  // S

// charCodeAt() - get Unicode value
console.log("charCodeAt(0):", text.charCodeAt(0));  // 74 (Unicode for 'J')

// Strings are immutable
text[0] = "X";  // This doesn't work!
console.log("After trying to change [0]:", text);  // Still "JavaScript"


// ============================================================
// 3. CASE CONVERSION
// ============================================================

console.log("\n--- 3. Case Conversion ---");

let mixedCase = "Hello World JavaScript";

// toUpperCase()
console.log("Original:", mixedCase);
console.log("toUpperCase():", mixedCase.toUpperCase());

// toLowerCase()
console.log("toLowerCase():", mixedCase.toLowerCase());

// Useful for comparisons
let input = "HELLO";
let target = "hello";
console.log("\nCase-insensitive comparison:");
console.log(`'${input}' === '${target}':`, input === target);
console.log(`Lowercase match:`, input.toLowerCase() === target.toLowerCase());


// ============================================================
// 4. SEARCHING STRINGS
// ============================================================

console.log("\n--- 4. Searching Strings ---");

let sentence = "Welcome to JavaScript programming. JavaScript is awesome!";

// indexOf() - find first occurrence (returns index or -1)
console.log("String:", sentence);
console.log("indexOf('JavaScript'):", sentence.indexOf("JavaScript"));     // 11
console.log("indexOf('Python'):", sentence.indexOf("Python"));             // -1

// indexOf() with start position
console.log("indexOf('JavaScript', 15):", sentence.indexOf("JavaScript", 15));  // 36

// lastIndexOf() - find last occurrence
console.log("lastIndexOf('JavaScript'):", sentence.lastIndexOf("JavaScript"));  // 36

// includes() - check if contains (returns boolean)
console.log("includes('Java'):", sentence.includes("Java"));      // true
console.log("includes('Python'):", sentence.includes("Python"));  // false

// startsWith()
console.log("startsWith('Welcome'):", sentence.startsWith("Welcome"));  // true
console.log("startsWith('Hello'):", sentence.startsWith("Hello"));      // false

// endsWith()
console.log("endsWith('!'):", sentence.endsWith("!"));              // true
console.log("endsWith('awesome'):", sentence.endsWith("awesome"));  // false

// search() - similar to indexOf but can use regex
console.log("search('JavaScript'):", sentence.search("JavaScript"));
console.log("search(/java/i):", sentence.search(/java/i));  // Case-insensitive


// ============================================================
// 5. EXTRACTING SUBSTRINGS
// ============================================================

console.log("\n--- 5. Extracting Substrings ---");

let str = "Hello World JavaScript";

console.log("Original:", str);

// slice(start, end) - extracts from start to end (end not included)
console.log("slice(0, 5):", str.slice(0, 5));      // "Hello"
console.log("slice(6, 11):", str.slice(6, 11));   // "World"

// slice with negative indices (from end)
console.log("slice(-10):", str.slice(-10));       // "JavaScript"
console.log("slice(-10, -6):", str.slice(-10, -6)); // "Java"

// slice with just start
console.log("slice(6):", str.slice(6));           // "World JavaScript"

// substring(start, end) - similar to slice, but no negative indices
console.log("\nsubstring(0, 5):", str.substring(0, 5));  // "Hello"
console.log("substring(6, 11):", str.substring(6, 11)); // "World"

// substring swaps if start > end
console.log("substring(5, 0):", str.substring(5, 0));   // "Hello" (swapped!)

// substr(start, length) - DEPRECATED, but still works
console.log("\nsubstr(0, 5):", str.substr(0, 5));   // "Hello" (5 characters)
console.log("substr(6, 5):", str.substr(6, 5));    // "World" (5 characters)


// ============================================================
// 6. REPLACING TEXT
// ============================================================

console.log("\n--- 6. Replacing Text ---");

let original = "Hello World! Hello JavaScript!";

console.log("Original:", original);

// replace() - replaces FIRST occurrence only
let replaced = original.replace("Hello", "Hi");
console.log("replace('Hello', 'Hi'):", replaced);

// replaceAll() - replaces ALL occurrences
let replacedAll = original.replaceAll("Hello", "Hi");
console.log("replaceAll('Hello', 'Hi'):", replacedAll);

// Using regex for replace all (alternative)
let regexReplace = original.replace(/Hello/g, "Hey");
console.log("replace(/Hello/g, 'Hey'):", regexReplace);

// Case-insensitive replace
let text2 = "HELLO hello HeLLo";
let caseInsensitive = text2.replace(/hello/gi, "Hi");
console.log("\nCase-insensitive replace:", caseInsensitive);

// Replace with function
let prices = "Apple $5, Banana $3, Orange $4";
let discounted = prices.replace(/\$(\d+)/g, (match, price) => {
    return "$" + (price * 0.8);  // 20% discount
});
console.log("\nOriginal prices:", prices);
console.log("Discounted:", discounted);


// ============================================================
// 7. SPLITTING AND JOINING
// ============================================================

console.log("\n--- 7. Splitting and Joining ---");

// split() - convert string to array
let words = "Hello World JavaScript";
let wordsArray = words.split(" ");
console.log("split(' '):", wordsArray);

let csv = "apple,banana,cherry,date";
let fruits = csv.split(",");
console.log("split(','):", fruits);

// Split into characters
let chars = "Hello".split("");
console.log("split(''):", chars);

// Split with limit
let limited = csv.split(",", 2);
console.log("split(',', 2):", limited);

// join() - convert array to string (Array method)
let joined = fruits.join(" - ");
console.log("join(' - '):", joined);


// ============================================================
// 8. TRIMMING WHITESPACE
// ============================================================

console.log("\n--- 8. Trimming Whitespace ---");

let padded = "   Hello World   ";
console.log("Original: '" + padded + "'");
console.log("Length:", padded.length);

// trim() - remove whitespace from both ends
console.log("trim(): '" + padded.trim() + "'");
console.log("Trimmed length:", padded.trim().length);

// trimStart() / trimLeft()
console.log("trimStart(): '" + padded.trimStart() + "'");

// trimEnd() / trimRight()
console.log("trimEnd(): '" + padded.trimEnd() + "'");


// ============================================================
// 9. PADDING STRINGS
// ============================================================

console.log("\n--- 9. Padding Strings ---");

// padStart(targetLength, padString)
let num = "5";
console.log("padStart(3, '0'):", num.padStart(3, "0"));  // "005"
console.log("padStart(5, '*'):", num.padStart(5, "*"));  // "****5"

// padEnd(targetLength, padString)
console.log("padEnd(3, '0'):", num.padEnd(3, "0"));      // "500"
console.log("padEnd(5, '-'):", num.padEnd(5, "-"));      // "5----"

// Practical use - formatting
let price = "42";
let formattedPrice = "$" + price.padStart(6, " ");
console.log("\nFormatted price:", formattedPrice);

let id = "7";
let formattedId = "ID-" + id.padStart(5, "0");
console.log("Formatted ID:", formattedId);


// ============================================================
// 10. REPEATING STRINGS
// ============================================================

console.log("\n--- 10. Repeating Strings ---");

// repeat(count)
let star = "*";
console.log("repeat(5):", star.repeat(5));   // "*****"

let pattern = "ab";
console.log("'ab'.repeat(3):", pattern.repeat(3));  // "ababab"

// Creating patterns
console.log("\nTriangle pattern:");
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}


// ============================================================
// 11. TEMPLATE LITERALS
// ============================================================

console.log("\n--- 11. Template Literals ---");

/*
Template literals (backticks `) provide:
- String interpolation with ${}
- Multi-line strings
- Expression evaluation
*/

let name = "Alice";
let age = 25;

// String interpolation
console.log(`My name is ${name} and I'm ${age} years old.`);

// Expressions in template literals
console.log(`Next year I'll be ${age + 1}`);
console.log(`Is adult: ${age >= 18 ? "Yes" : "No"}`);

// Multi-line strings
let multiLine = `
    This is line 1
    This is line 2
    This is line 3
`;
console.log("Multi-line:", multiLine);

// Template literals with functions
function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}
console.log(`Total: ${formatCurrency(99.5)}`);


// ============================================================
// 12. STRING MATCHING (with Regex)
// ============================================================

console.log("\n--- 12. String Matching ---");

let sampleText = "The rain in Spain falls mainly on the plain.";

// match() - find matches
let matches = sampleText.match(/ain/g);
console.log("match(/ain/g):", matches);

// match() with capturing groups
let date = "2023-12-25";
let dateMatch = date.match(/(\d{4})-(\d{2})-(\d{2})/);
console.log("Date match:", dateMatch);
console.log("Year:", dateMatch[1], "Month:", dateMatch[2], "Day:", dateMatch[3]);

// matchAll() - get all matches with details
let allMatches = [...sampleText.matchAll(/ain/g)];
console.log("\nmatchAll results:");
allMatches.forEach(m => console.log(`  Found '${m[0]}' at index ${m.index}`));


// ============================================================
// 13. OTHER USEFUL METHODS
// ============================================================

console.log("\n--- 13. Other Useful Methods ---");

// concat()
let str1 = "Hello";
let str2 = "World";
console.log("concat():", str1.concat(" ", str2));

// localeCompare() - compare strings
console.log("'a'.localeCompare('b'):", "a".localeCompare("b"));  // -1
console.log("'b'.localeCompare('a'):", "b".localeCompare("a"));  // 1
console.log("'a'.localeCompare('a'):", "a".localeCompare("a"));  // 0

// normalize() - Unicode normalization
let cafe1 = "café";  // é as single character
let cafe2 = "cafe\u0301";  // e + combining acute accent
console.log("\nBefore normalize:", cafe1 === cafe2);
console.log("After normalize:", cafe1.normalize() === cafe2.normalize());

// at() - get character at index (supports negative)
let str3 = "Hello";
console.log("\nat(0):", str3.at(0));    // 'H'
console.log("at(-1):", str3.at(-1));    // 'o' (last character)


// ============================================================
// 14. PRACTICAL EXAMPLES
// ============================================================

console.log("\n--- 14. Practical Examples ---");

// Example 1: Capitalize first letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log("capitalize('hELLO'):", capitalize("hELLO"));

// Example 2: Title case
function titleCase(str) {
    return str.split(" ")
              .map(word => capitalize(word))
              .join(" ");
}
console.log("titleCase('hello world'):", titleCase("hello world"));

// Example 3: Count words
function countWords(str) {
    return str.trim().split(/\s+/).length;
}
console.log("Word count:", countWords("Hello   World   JavaScript"));

// Example 4: Slug generator
function slugify(str) {
    return str.toLowerCase()
              .trim()
              .replace(/[^\w\s-]/g, "")
              .replace(/\s+/g, "-");
}
console.log("slugify('Hello World!'):", slugify("Hello World!"));

// Example 5: Truncate text
function truncate(str, maxLength) {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength - 3) + "...";
}
console.log("truncate long text:", truncate("This is a very long text", 15));

// Example 6: Email validation (simple)
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
console.log("\nEmail validation:");
console.log("test@example.com:", isValidEmail("test@example.com"));
console.log("invalid.email:", isValidEmail("invalid.email"));

// Example 7: Mask credit card
function maskCard(cardNumber) {
    let cleaned = cardNumber.replace(/\D/g, "");
    let lastFour = cleaned.slice(-4);
    return "*".repeat(cleaned.length - 4) + lastFour;
}
console.log("\nMasked card:", maskCard("1234-5678-9012-3456"));

console.log("\n=== End of Strings ===");
