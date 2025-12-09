// ============================================================
// 05 - CONDITIONAL STATEMENTS
// ============================================================

console.log("=== Conditional Statements ===\n");

// ============================================================
// 1. if STATEMENT
// ============================================================

console.log("--- 1. if Statement ---");

/*
The if statement executes a block of code if the condition is TRUE.

Syntax:
if (condition) {
    // code to execute if condition is true
}
*/

let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
}

// Another example
let temperature = 35;

if (temperature > 30) {
    console.log("It's hot outside!");
}

// Multiple statements in if block
let score = 85;

if (score >= 80) {
    console.log("Excellent score!");
    console.log("You passed with distinction.");
    console.log("Keep up the good work!");
}


// ============================================================
// 2. if...else STATEMENT
// ============================================================

console.log("\n--- 2. if...else Statement ---");

/*
The if...else statement executes one block if true, another if false.

Syntax:
if (condition) {
    // code if condition is true
} else {
    // code if condition is false
}
*/

let userAge = 15;

if (userAge >= 18) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote yet.");
}

// Another example
let number = 7;

if (number % 2 === 0) {
    console.log(number + " is even.");
} else {
    console.log(number + " is odd.");
}

// Checking login status
let isLoggedIn = false;

if (isLoggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in.");
}


// ============================================================
// 3. if...else if...else STATEMENT
// ============================================================

console.log("\n--- 3. if...else if...else Statement ---");

/*
Use else if when you have multiple conditions to check.

Syntax:
if (condition1) {
    // code if condition1 is true
} else if (condition2) {
    // code if condition2 is true
} else if (condition3) {
    // code if condition3 is true
} else {
    // code if all conditions are false
}
*/

// Grade checking example
let marks = 75;

if (marks >= 90) {
    console.log("Grade: A (Distinction)");
} else if (marks >= 80) {
    console.log("Grade: B (Very Good)");
} else if (marks >= 70) {
    console.log("Grade: C (Good)");
} else if (marks >= 60) {
    console.log("Grade: D (Satisfactory)");
} else if (marks >= 35) {
    console.log("Grade: E (Pass)");
} else {
    console.log("Grade: F (Fail)");
}

// Day of the week example
let dayNumber = 3;
let dayName;

if (dayNumber === 1) {
    dayName = "Monday";
} else if (dayNumber === 2) {
    dayName = "Tuesday";
} else if (dayNumber === 3) {
    dayName = "Wednesday";
} else if (dayNumber === 4) {
    dayName = "Thursday";
} else if (dayNumber === 5) {
    dayName = "Friday";
} else if (dayNumber === 6) {
    dayName = "Saturday";
} else if (dayNumber === 7) {
    dayName = "Sunday";
} else {
    dayName = "Invalid day";
}

console.log("Day " + dayNumber + " is " + dayName);


// ============================================================
// 4. NESTED if STATEMENTS
// ============================================================

console.log("\n--- 4. Nested if Statements ---");

/*
You can nest if statements inside other if statements.
*/

let studentAge = 20;
let hasId = true;

if (studentAge >= 18) {
    console.log("Age requirement met.");
    
    if (hasId) {
        console.log("ID verified. Access granted!");
    } else {
        console.log("Please show your ID.");
    }
} else {
    console.log("You must be 18 or older.");
}

// Another nested example
let username = "admin";
let password = "12345";
let isAccountActive = true;

if (username === "admin") {
    if (password === "12345") {
        if (isAccountActive) {
            console.log("\nLogin successful!");
        } else {
            console.log("\nAccount is inactive.");
        }
    } else {
        console.log("\nIncorrect password.");
    }
} else {
    console.log("\nUser not found.");
}


// ============================================================
// 5. SWITCH STATEMENT
// ============================================================

console.log("\n--- 5. switch Statement ---");

/*
The switch statement matches a value against multiple cases.
More readable than multiple if...else if when checking one variable
against many values.

Syntax:
switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code if no case matches
}

IMPORTANT: Always use 'break' to prevent fall-through!
*/

// Day of the week with switch
let day = 4;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}

// Calculator with switch
function calculate(num1, num2, operator) {
    let result;
    
    switch (operator) {
        case '+':
        case 'add':
            result = num1 + num2;
            console.log(`${num1} + ${num2} = ${result}`);
            break;
        case '-':
        case 'subtract':
            result = num1 - num2;
            console.log(`${num1} - ${num2} = ${result}`);
            break;
        case '*':
        case 'multiply':
            result = num1 * num2;
            console.log(`${num1} * ${num2} = ${result}`);
            break;
        case '/':
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
                console.log(`${num1} / ${num2} = ${result}`);
            } else {
                console.log("Cannot divide by zero!");
            }
            break;
        default:
            console.log("Invalid operator: " + operator);
    }
    
    return result;
}

console.log("\nCalculator examples:");
calculate(10, 5, '+');
calculate(10, 5, 'subtract');
calculate(10, 5, '*');
calculate(10, 5, '/');


// ============================================================
// 6. SWITCH WITH MULTIPLE CASES
// ============================================================

console.log("\n--- 6. Switch with Multiple Cases ---");

/*
You can group multiple cases together to execute the same code.
*/

let month = 4;
let season;

switch (month) {
    case 12:
    case 1:
    case 2:
        season = "Winter";
        break;
    case 3:
    case 4:
    case 5:
        season = "Spring";
        break;
    case 6:
    case 7:
    case 8:
        season = "Summer";
        break;
    case 9:
    case 10:
    case 11:
        season = "Autumn";
        break;
    default:
        season = "Invalid month";
}

console.log(`Month ${month} is in ${season}`);


// ============================================================
// 7. SWITCH TYPE CHECKING
// ============================================================

console.log("\n--- 7. Switch Type Checking ---");

/*
Switch uses strict comparison (===), so types must match!
*/

let value = "2";  // String "2"

switch (value) {
    case 1:
        console.log("Number 1");
        break;
    case 2:
        console.log("Number 2");
        break;
    case "2":
        console.log("String '2'");  // This matches!
        break;
    default:
        console.log("No match");
}


// ============================================================
// 8. TERNARY OPERATOR (Conditional Operator)
// ============================================================

console.log("\n--- 8. Ternary Operator ---");

/*
The ternary operator is a shorthand for simple if...else.

Syntax: condition ? valueIfTrue : valueIfFalse
*/

// Simple example
let userAge2 = 20;
let status = userAge2 >= 18 ? "Adult" : "Minor";
console.log("Status:", status);

// Another example
let time = 14;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
console.log(greeting);

// Using in console.log directly
let isOnline = true;
console.log("User is " + (isOnline ? "online" : "offline"));

// Nested ternary (use sparingly!)
let testScore = 72;
let testGrade = testScore >= 90 ? "A" :
                testScore >= 80 ? "B" :
                testScore >= 70 ? "C" :
                testScore >= 60 ? "D" : "F";

console.log(`Score: ${testScore}, Grade: ${testGrade}`);


// ============================================================
// 9. TRUTHY AND FALSY VALUES
// ============================================================

console.log("\n--- 9. Truthy and Falsy Values ---");

/*
In JavaScript, some values are considered "falsy" (treated as false):
- false
- 0
- "" (empty string)
- null
- undefined
- NaN

Everything else is "truthy" (treated as true).
*/

console.log("Falsy values:");

if (!false) console.log("  false is falsy");
if (!0) console.log("  0 is falsy");
if (!"") console.log("  '' (empty string) is falsy");
if (!null) console.log("  null is falsy");
if (!undefined) console.log("  undefined is falsy");
if (!NaN) console.log("  NaN is falsy");

console.log("\nTruthy values:");

if (1) console.log("  1 is truthy");
if ("hello") console.log("  'hello' is truthy");
if ([]) console.log("  [] (empty array) is truthy");
if ({}) console.log("  {} (empty object) is truthy");
if ("0") console.log("  '0' (string) is truthy");

// Practical use
let userName = "";  // Empty string (falsy)

if (userName) {
    console.log("\nWelcome, " + userName);
} else {
    console.log("\nPlease enter your name.");
}


// ============================================================
// 10. SHORT-CIRCUIT EVALUATION
// ============================================================

console.log("\n--- 10. Short-Circuit Evaluation ---");

/*
&& (AND) - Returns first falsy value or last value if all truthy
|| (OR)  - Returns first truthy value or last value if all falsy
*/

// Using || for default values
let userInput = "";
let displayName = userInput || "Guest";
console.log("Display name:", displayName);  // "Guest"

userInput = "John";
displayName = userInput || "Guest";
console.log("Display name:", displayName);  // "John"

// Using && for conditional execution
let user = { name: "Alice", isAdmin: true };

user.isAdmin && console.log("Admin panel access granted!");

// Safely accessing properties
let person = { name: "Bob" };
let city = person.address && person.address.city;
console.log("City:", city);  // undefined (no error!)


// ============================================================
// 11. PRACTICAL EXAMPLES
// ============================================================

console.log("\n--- 11. Practical Examples ---");

// Example 1: Login validation
function validateLogin(username, password) {
    if (!username || !password) {
        return "Please enter both username and password.";
    }
    
    if (username.length < 3) {
        return "Username must be at least 3 characters.";
    }
    
    if (password.length < 6) {
        return "Password must be at least 6 characters.";
    }
    
    return "Login successful!";
}

console.log(validateLogin("", "123456"));
console.log(validateLogin("ab", "123456"));
console.log(validateLogin("admin", "12345"));
console.log(validateLogin("admin", "123456"));

// Example 2: Ticket pricing
function getTicketPrice(age, isStudent, isWeekend) {
    let basePrice = 100;
    
    if (age < 5) {
        return 0;  // Free for kids under 5
    } else if (age < 12) {
        basePrice = 50;  // Child price
    } else if (age >= 60) {
        basePrice = 60;  // Senior price
    }
    
    if (isStudent) {
        basePrice *= 0.8;  // 20% student discount
    }
    
    if (isWeekend) {
        basePrice *= 1.2;  // 20% weekend markup
    }
    
    return Math.round(basePrice);
}

console.log("\nTicket Prices:");
console.log("Child (8):", getTicketPrice(8, false, false));
console.log("Adult (30):", getTicketPrice(30, false, false));
console.log("Student (20):", getTicketPrice(20, true, false));
console.log("Senior (65):", getTicketPrice(65, false, false));
console.log("Adult weekend:", getTicketPrice(30, false, true));

// Example 3: Grade calculator with switch
function calculateGrade(score) {
    let letterGrade;
    let gradePoint;
    
    switch (true) {
        case score >= 90:
            letterGrade = "A";
            gradePoint = 4.0;
            break;
        case score >= 80:
            letterGrade = "B";
            gradePoint = 3.0;
            break;
        case score >= 70:
            letterGrade = "C";
            gradePoint = 2.0;
            break;
        case score >= 60:
            letterGrade = "D";
            gradePoint = 1.0;
            break;
        default:
            letterGrade = "F";
            gradePoint = 0.0;
    }
    
    return { letterGrade, gradePoint };
}

console.log("\nGrade Results:");
console.log("Score 95:", calculateGrade(95));
console.log("Score 72:", calculateGrade(72));
console.log("Score 55:", calculateGrade(55));

console.log("\n=== End of Conditional Statements ===");
