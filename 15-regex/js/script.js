// ============================================================
// 15 - REGULAR EXPRESSIONS (REGEX)
// ============================================================

console.log("=== JavaScript Regular Expressions ===\n");

/*
Regular Expressions (Regex) are patterns used to match 
character combinations in strings.

Uses:
- Validating input (email, phone, passwords)
- Searching and extracting text
- Replacing text patterns
- Parsing data
*/


// ============================================================
// 1. CREATING REGULAR EXPRESSIONS
// ============================================================

console.log("--- 1. Creating Regular Expressions ---");

// Method 1: Regex literal (between slashes)
let regex1 = /hello/;
console.log("Literal:", regex1);

// Method 2: RegExp constructor
let regex2 = new RegExp("hello");
console.log("Constructor:", regex2);

// With flags
let regex3 = /hello/gi;  // global, case-insensitive
let regex4 = new RegExp("hello", "gi");
console.log("With flags:", regex3);


// ============================================================
// 2. BASIC MATCHING - test() and match()
// ============================================================

console.log("\n--- 2. Basic Matching ---");

let text = "Hello World! Hello JavaScript!";
let pattern = /Hello/;

// test() - returns boolean
console.log("Pattern:", pattern);
console.log("Text:", text);
console.log("test():", pattern.test(text));  // true

// match() - returns array of matches or null
console.log("match():", text.match(pattern));  // First match

// With global flag - find all matches
let patternGlobal = /Hello/g;
console.log("match() with /g:", text.match(patternGlobal));  // All matches


// ============================================================
// 3. CHARACTER CLASSES
// ============================================================

console.log("\n--- 3. Character Classes ---");

/*
\d - digit (0-9)
\D - non-digit
\w - word character (a-z, A-Z, 0-9, _)
\W - non-word character
\s - whitespace (space, tab, newline)
\S - non-whitespace
.  - any character except newline
*/

let testString = "Call me at 123-456-7890!";

console.log("Text:", testString);
console.log("Match digits (\\d+):", testString.match(/\d+/g));
console.log("Match words (\\w+):", testString.match(/\w+/g));
console.log("Match spaces (\\s):", testString.match(/\s/g));
console.log("Match non-digits (\\D+):", testString.match(/\D+/g));

// Dot matches any character
console.log("\nDot example:");
console.log("'a.c' in 'abc':", /a.c/.test("abc"));  // true
console.log("'a.c' in 'aXc':", /a.c/.test("aXc"));  // true
console.log("'a.c' in 'ac':", /a.c/.test("ac"));    // false


// ============================================================
// 4. CHARACTER SETS [ ]
// ============================================================

console.log("\n--- 4. Character Sets ---");

/*
[abc]  - matches a, b, or c
[^abc] - matches anything except a, b, or c
[a-z]  - matches any lowercase letter
[A-Z]  - matches any uppercase letter
[0-9]  - matches any digit
[a-zA-Z0-9] - matches any alphanumeric
*/

let vowelPattern = /[aeiou]/gi;
let word = "JavaScript";

console.log("Word:", word);
console.log("Find vowels [aeiou]:", word.match(vowelPattern));

// Range examples
console.log("\nRange examples:");
console.log("'[a-z]' in 'Hello':", "Hello".match(/[a-z]/g));
console.log("'[A-Z]' in 'Hello':", "Hello".match(/[A-Z]/g));
console.log("'[0-9]' in 'abc123':", "abc123".match(/[0-9]/g));

// Negation
console.log("\nNegation [^]:");
console.log("'[^0-9]' in 'abc123':", "abc123".match(/[^0-9]/g));
console.log("'[^aeiou]' in 'hello':", "hello".match(/[^aeiou]/gi));


// ============================================================
// 5. QUANTIFIERS
// ============================================================

console.log("\n--- 5. Quantifiers ---");

/*
*     - 0 or more
+     - 1 or more
?     - 0 or 1 (optional)
{n}   - exactly n times
{n,}  - n or more times
{n,m} - between n and m times
*/

console.log("Quantifier examples:");
console.log("'ab*' matches:", ["a", "ab", "abb", "abbb"].filter(s => /^ab*$/.test(s)));
console.log("'ab+' matches:", ["a", "ab", "abb", "abbb"].filter(s => /^ab+$/.test(s)));
console.log("'ab?' matches:", ["a", "ab", "abb"].filter(s => /^ab?$/.test(s)));

// Specific counts
let phoneTest = "123-456-7890";
console.log("\nPhone pattern \\d{3}-\\d{3}-\\d{4}:");
console.log("Test '123-456-7890':", /\d{3}-\d{3}-\d{4}/.test(phoneTest));

// Range
console.log("\nRange {n,m}:");
console.log("'a{2,4}' in 'aaaaa':", "aaaaa".match(/a{2,4}/g));


// ============================================================
// 6. ANCHORS
// ============================================================

console.log("\n--- 6. Anchors ---");

/*
^  - start of string (or line in multiline mode)
$  - end of string (or line in multiline mode)
\b - word boundary
\B - non-word boundary
*/

let sentence = "Hello World";

console.log("Text:", sentence);
console.log("'^Hello':", /^Hello/.test(sentence));     // true
console.log("'^World':", /^World/.test(sentence));     // false
console.log("'World$':", /World$/.test(sentence));     // true
console.log("'Hello$':", /Hello$/.test(sentence));     // false

// Word boundaries
let boundaryText = "cat category scatter";
console.log("\nWord boundary \\b:");
console.log("Text:", boundaryText);
console.log("'\\bcat\\b' (exact word):", boundaryText.match(/\bcat\b/g));


// ============================================================
// 7. GROUPS AND CAPTURING
// ============================================================

console.log("\n--- 7. Groups and Capturing ---");

/*
(abc)   - capturing group
(?:abc) - non-capturing group
|       - alternation (OR)
*/

// Capturing groups
let dateString = "2023-12-25";
let datePattern = /(\d{4})-(\d{2})-(\d{2})/;
let dateMatch = dateString.match(datePattern);

console.log("Date:", dateString);
console.log("Match result:", dateMatch);
console.log("Full match:", dateMatch[0]);
console.log("Year:", dateMatch[1]);
console.log("Month:", dateMatch[2]);
console.log("Day:", dateMatch[3]);

// Named groups (ES2018)
let namedPattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
let namedMatch = dateString.match(namedPattern);
console.log("\nNamed groups:", namedMatch.groups);

// Alternation
console.log("\nAlternation |:");
let colorPattern = /red|green|blue/;
console.log("'red|green|blue' in 'I like green':", "I like green".match(colorPattern));


// ============================================================
// 8. LOOKAHEAD AND LOOKBEHIND
// ============================================================

console.log("\n--- 8. Lookahead and Lookbehind ---");

/*
(?=...)  - positive lookahead (followed by)
(?!...)  - negative lookahead (not followed by)
(?<=...) - positive lookbehind (preceded by)
(?<!...) - negative lookbehind (not preceded by)
*/

let priceText = "$100 £200 €300 $400";

// Positive lookahead: dollar amount
console.log("Text:", priceText);
console.log("Positive lookahead \\d+(?=\\s):", priceText.match(/\d+(?=\s)/g));

// Positive lookbehind: after $
console.log("Positive lookbehind (?<=\\$)\\d+:", priceText.match(/(?<=\$)\d+/g));

// Negative lookahead
let words = "cat category scatter";
console.log("\nNegative lookahead:");
console.log("'cat' not followed by 'e':", words.match(/cat(?!e)/g));


// ============================================================
// 9. FLAGS
// ============================================================

console.log("\n--- 9. Flags ---");

/*
g - global (find all matches)
i - case-insensitive
m - multiline (^ and $ match line boundaries)
s - dotAll (. matches newlines)
u - unicode
y - sticky (match at exact position)
*/

let caseText = "Hello HELLO hello HeLLo";

console.log("Text:", caseText);
console.log("Without i flag:", caseText.match(/hello/g));
console.log("With i flag:", caseText.match(/hello/gi));

// Multiline
let multilineText = `Line 1
Line 2
Line 3`;

console.log("\nMultiline text:");
console.log("'^Line' without m:", multilineText.match(/^Line/g));
console.log("'^Line' with m:", multilineText.match(/^Line/gm));


// ============================================================
// 10. STRING METHODS WITH REGEX
// ============================================================

console.log("\n--- 10. String Methods with Regex ---");

let sampleText = "The quick brown fox jumps over the lazy dog";

// search() - returns index of first match
console.log("Text:", sampleText);
console.log("search(/fox/):", sampleText.search(/fox/));  // 16

// replace() - replace matches
console.log("replace(/fox/, 'cat'):", sampleText.replace(/fox/, "cat"));

// replaceAll() or /g flag
let repeatText = "cat cat cat";
console.log("\nreplaceAll:", repeatText.replace(/cat/g, "dog"));

// split() with regex
let csvData = "apple, banana , cherry,  date";
console.log("\nsplit with regex:");
console.log("split(/,\\s*/):", csvData.split(/,\s*/));

// matchAll() - iterator of all matches with groups
let textWithNumbers = "Order 123 and Order 456";
let orderPattern = /Order (\d+)/g;
let allMatches = [...textWithNumbers.matchAll(orderPattern)];
console.log("\nmatchAll results:", allMatches);


// ============================================================
// 11. REPLACE WITH FUNCTION
// ============================================================

console.log("\n--- 11. Replace with Function ---");

let prices = "Apple: $5, Banana: $3, Orange: $4";

// Replace with callback function
let discounted = prices.replace(/\$(\d+)/g, (match, price) => {
    let newPrice = Math.round(price * 0.8);  // 20% discount
    return `$${newPrice}`;
});

console.log("Original:", prices);
console.log("Discounted:", discounted);

// More complex replacement
let template = "Hello {name}, your order #{id} is ready!";
let data = { name: "Alice", id: 12345 };

let filled = template.replace(/\{(\w+)\}/g, (match, key) => {
    return data[key] || match;
});
console.log("\nTemplate:", template);
console.log("Filled:", filled);


// ============================================================
// 12. COMMON PATTERNS
// ============================================================

console.log("\n--- 12. Common Patterns ---");

// Email validation
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log("Email pattern test:");
console.log("  test@example.com:", emailPattern.test("test@example.com"));
console.log("  invalid.email:", emailPattern.test("invalid.email"));

// Phone number (US format)
let phonePattern = /^\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
console.log("\nPhone pattern test:");
console.log("  123-456-7890:", phonePattern.test("123-456-7890"));
console.log("  (123) 456-7890:", phonePattern.test("(123) 456-7890"));

// URL validation
let urlPattern = /^https?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
console.log("\nURL pattern test:");
console.log("  https://example.com:", urlPattern.test("https://example.com"));
console.log("  http://sub.example.com/path:", urlPattern.test("http://sub.example.com/path"));

// Password (min 8 chars, uppercase, lowercase, number)
let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
console.log("\nPassword pattern test:");
console.log("  Password1:", passwordPattern.test("Password1"));
console.log("  weak:", passwordPattern.test("weak"));


// ============================================================
// 13. ESCAPING SPECIAL CHARACTERS
// ============================================================

console.log("\n--- 13. Escaping Special Characters ---");

/*
Special characters that need escaping: . * + ? ^ $ { } [ ] \ | ( )
Use \ before the character to match it literally
*/

let specialText = "Price is $10.99 (discounted)";

// Without escaping
console.log("Text:", specialText);

// Escape special characters
let dollarMatch = specialText.match(/\$\d+\.\d+/);
console.log("Match $10.99:", dollarMatch);

let parenMatch = specialText.match(/\(.*\)/);
console.log("Match parentheses:", parenMatch);

// Function to escape regex special characters
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
console.log("\nEscape 'Price (USD):':", escapeRegex("Price (USD):"));


// ============================================================
// 14. GREEDY VS LAZY MATCHING
// ============================================================

console.log("\n--- 14. Greedy vs Lazy Matching ---");

/*
By default, quantifiers are "greedy" - they match as much as possible.
Add ? after a quantifier to make it "lazy" - match as little as possible.
*/

let htmlText = '<div>First</div><div>Second</div>';

// Greedy (default)
console.log("Text:", htmlText);
console.log("Greedy <div>.*</div>:", htmlText.match(/<div>.*<\/div>/));

// Lazy (non-greedy)
console.log("Lazy <div>.*?</div>:", htmlText.match(/<div>.*?<\/div>/g));


// ============================================================
// 15. PRACTICAL EXAMPLES
// ============================================================

console.log("\n--- 15. Practical Examples ---");

// Example 1: Extract hashtags
function extractHashtags(text) {
    return text.match(/#\w+/g) || [];
}
console.log("Hashtags:", extractHashtags("I love #JavaScript and #WebDev!"));

// Example 2: Extract email addresses
function extractEmails(text) {
    return text.match(/[\w.-]+@[\w.-]+\.\w+/g) || [];
}
console.log("Emails:", extractEmails("Contact us at info@example.com or support@test.org"));

// Example 3: Format phone number
function formatPhone(phone) {
    let cleaned = phone.replace(/\D/g, "");
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phone;
}
console.log("Format phone:", formatPhone("1234567890"));

// Example 4: Validate username
function isValidUsername(username) {
    // 3-16 chars, alphanumeric, underscores, no consecutive underscores
    return /^(?!.*__)[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(username);
}
console.log("\nUsername validation:");
console.log("  john_doe:", isValidUsername("john_doe"));
console.log("  john__doe:", isValidUsername("john__doe"));
console.log("  1john:", isValidUsername("1john"));

// Example 5: Mask sensitive data
function maskEmail(email) {
    return email.replace(/^(.{2})(.*)(@.*)$/, (match, start, middle, domain) => {
        return start + "*".repeat(middle.length) + domain;
    });
}
console.log("\nMask email:", maskEmail("johndoe@example.com"));

// Example 6: Convert camelCase to kebab-case
function camelToKebab(str) {
    return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
console.log("camelCase to kebab:", camelToKebab("backgroundColor"));

// Example 7: Remove HTML tags
function stripHtml(html) {
    return html.replace(/<[^>]*>/g, "");
}
console.log("\nStrip HTML:", stripHtml("<p>Hello <strong>World</strong>!</p>"));


// ============================================================
// INTERACTIVE DEMOS
// ============================================================

console.log("\n--- Interactive Demos Setup ---");

// Email validator
let emailInput = document.getElementById("email-input");
let emailOutput = document.getElementById("email-output");

if (emailInput) {
    emailInput.addEventListener("input", function() {
        let email = this.value;
        let isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        
        if (email === "") {
            this.className = "input-demo";
            emailOutput.textContent = "Enter an email to validate...";
        } else if (isValid) {
            this.className = "input-demo valid";
            emailOutput.textContent = "✓ Valid email address";
        } else {
            this.className = "input-demo invalid";
            emailOutput.textContent = "✗ Invalid email address";
        }
    });
}

// Phone validator
let phoneInput = document.getElementById("phone-input");
let phoneOutput = document.getElementById("phone-output");

if (phoneInput) {
    phoneInput.addEventListener("input", function() {
        let phone = this.value;
        let isValid = /^\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/.test(phone);
        
        if (phone === "") {
            this.className = "input-demo";
            phoneOutput.textContent = "Enter a phone number to validate...";
        } else if (isValid) {
            this.className = "input-demo valid";
            phoneOutput.textContent = "✓ Valid phone number\nFormatted: " + formatPhone(phone);
        } else {
            this.className = "input-demo invalid";
            phoneOutput.textContent = "✗ Invalid phone number\nExpected format: (123) 456-7890";
        }
    });
}

// Password strength
let passwordInput = document.getElementById("password-input");
let passwordOutput = document.getElementById("password-output");

if (passwordInput) {
    passwordInput.addEventListener("input", function() {
        let password = this.value;
        let strength = checkPasswordStrength(password);
        
        passwordOutput.textContent = strength.message;
        this.className = "input-demo " + strength.class;
    });
}

function checkPasswordStrength(password) {
    if (password === "") {
        return { message: "Enter a password to check strength...", class: "" };
    }
    
    let strength = 0;
    let messages = [];
    
    // Length check
    if (password.length >= 8) {
        strength++;
    } else {
        messages.push("✗ At least 8 characters");
    }
    
    // Uppercase check
    if (/[A-Z]/.test(password)) {
        strength++;
    } else {
        messages.push("✗ At least one uppercase letter");
    }
    
    // Lowercase check
    if (/[a-z]/.test(password)) {
        strength++;
    } else {
        messages.push("✗ At least one lowercase letter");
    }
    
    // Number check
    if (/\d/.test(password)) {
        strength++;
    } else {
        messages.push("✗ At least one number");
    }
    
    // Special character check
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        strength++;
    } else {
        messages.push("✗ At least one special character");
    }
    
    let strengthLabel = ["Very Weak", "Weak", "Fair", "Good", "Strong"][strength - 1] || "Very Weak";
    let strengthClass = strength >= 4 ? "valid" : strength >= 3 ? "" : "invalid";
    
    return {
        message: `Strength: ${strengthLabel} (${strength}/5)\n${messages.join("\n")}`,
        class: strengthClass
    };
}

// Regex tester
let regexPattern = document.getElementById("regex-pattern");
let regexTest = document.getElementById("regex-test");
let regexBtn = document.getElementById("regex-btn");
let regexOutput = document.getElementById("regex-output");

if (regexBtn) {
    regexBtn.addEventListener("click", function() {
        try {
            let pattern = new RegExp(regexPattern.value, "g");
            let testText = regexTest.value;
            let matches = testText.match(pattern);
            
            regexOutput.textContent = `Pattern: ${pattern}\nText: "${testText}"\n\nMatches: ${matches ? matches.join(", ") : "None"}`;
        } catch (e) {
            regexOutput.textContent = `Error: ${e.message}`;
        }
    });
}

console.log("\n=== End of Regular Expressions ===");
