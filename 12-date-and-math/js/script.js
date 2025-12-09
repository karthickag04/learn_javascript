// ============================================================
// 12 - DATE AND MATH
// ============================================================

console.log("=== JavaScript Date and Math ===\n");

// ============================================================
//                    PART 1: DATE OBJECT
// ============================================================

console.log("==================== DATE OBJECT ====================\n");

// ============================================================
// 1. CREATING DATES
// ============================================================

console.log("--- 1. Creating Dates ---");

// Current date and time
let now = new Date();
console.log("Current date/time:", now);
console.log("toString():", now.toString());
console.log("toDateString():", now.toDateString());
console.log("toTimeString():", now.toTimeString());

// Create from date string
let date1 = new Date("2023-12-25");
console.log("\nFrom string '2023-12-25':", date1);

let date2 = new Date("December 25, 2023");
console.log("From 'December 25, 2023':", date2);

let date3 = new Date("2023-12-25T10:30:00");
console.log("With time:", date3);

// Create from components (year, month, day, hour, min, sec, ms)
// Note: Month is 0-indexed (0 = January, 11 = December)
let date4 = new Date(2023, 11, 25);  // December 25, 2023
console.log("\nFrom components (2023, 11, 25):", date4);

let date5 = new Date(2023, 11, 25, 10, 30, 0);  // With time
console.log("With time (10:30:00):", date5);

// Create from milliseconds (since January 1, 1970)
let date6 = new Date(0);
console.log("\nFrom 0 ms (epoch):", date6);

let date7 = new Date(86400000);  // One day in milliseconds
console.log("From 86400000 ms (1 day):", date7);


// ============================================================
// 2. GETTING DATE COMPONENTS
// ============================================================

console.log("\n--- 2. Getting Date Components ---");

let d = new Date();
console.log("Current date:", d);

// Get methods
console.log("\ngetFullYear():", d.getFullYear());     // e.g., 2024
console.log("getMonth():", d.getMonth());             // 0-11 (0 = January)
console.log("getDate():", d.getDate());               // 1-31
console.log("getDay():", d.getDay());                 // 0-6 (0 = Sunday)
console.log("getHours():", d.getHours());             // 0-23
console.log("getMinutes():", d.getMinutes());         // 0-59
console.log("getSeconds():", d.getSeconds());         // 0-59
console.log("getMilliseconds():", d.getMilliseconds()); // 0-999
console.log("getTime():", d.getTime());               // milliseconds since 1970

// Day of week conversion
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("\nDay name:", days[d.getDay()]);

// Month conversion
let months = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];
console.log("Month name:", months[d.getMonth()]);


// ============================================================
// 3. SETTING DATE COMPONENTS
// ============================================================

console.log("\n--- 3. Setting Date Components ---");

let dateToModify = new Date();
console.log("Original:", dateToModify);

// Set methods
dateToModify.setFullYear(2025);
console.log("After setFullYear(2025):", dateToModify);

dateToModify.setMonth(5);  // June (0-indexed)
console.log("After setMonth(5):", dateToModify);

dateToModify.setDate(15);
console.log("After setDate(15):", dateToModify);

dateToModify.setHours(14, 30, 0);  // 2:30 PM
console.log("After setHours(14, 30, 0):", dateToModify);


// ============================================================
// 4. DATE FORMATTING
// ============================================================

console.log("\n--- 4. Date Formatting ---");

let dateToFormat = new Date();

// Built-in formatting methods
console.log("toString():", dateToFormat.toString());
console.log("toDateString():", dateToFormat.toDateString());
console.log("toTimeString():", dateToFormat.toTimeString());
console.log("toISOString():", dateToFormat.toISOString());
console.log("toLocaleDateString():", dateToFormat.toLocaleDateString());
console.log("toLocaleTimeString():", dateToFormat.toLocaleTimeString());
console.log("toLocaleString():", dateToFormat.toLocaleString());

// Custom formatting
function formatDate(date) {
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}
console.log("\nCustom format (YYYY-MM-DD):", formatDate(dateToFormat));

// Format with locale options
console.log("\nWith locale options:");
console.log("en-US:", dateToFormat.toLocaleDateString("en-US", { 
    weekday: "long", year: "numeric", month: "long", day: "numeric" 
}));
console.log("en-GB:", dateToFormat.toLocaleDateString("en-GB"));
console.log("de-DE:", dateToFormat.toLocaleDateString("de-DE"));


// ============================================================
// 5. DATE COMPARISONS AND CALCULATIONS
// ============================================================

console.log("\n--- 5. Date Comparisons and Calculations ---");

let startDate = new Date("2024-01-01");
let endDate = new Date("2024-12-31");

// Compare dates
console.log("Start:", startDate.toDateString());
console.log("End:", endDate.toDateString());
console.log("Start < End:", startDate < endDate);
console.log("Are same:", startDate.getTime() === endDate.getTime());

// Calculate difference
let diffMs = endDate - startDate;
let diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
console.log("\nDifference in days:", diffDays);

// Add days to date
function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
console.log("\nAdd 30 days:", addDays(startDate, 30).toDateString());

// Days until future date
let futureDate = new Date("2025-01-01");
let today = new Date();
let daysUntil = Math.ceil((futureDate - today) / (1000 * 60 * 60 * 24));
console.log("Days until 2025:", daysUntil);


// ============================================================
// 6. WORKING WITH TIMESTAMPS
// ============================================================

console.log("\n--- 6. Working with Timestamps ---");

// Get current timestamp
let timestamp = Date.now();
console.log("Current timestamp:", timestamp);

// Convert timestamp to date
let fromTimestamp = new Date(timestamp);
console.log("From timestamp:", fromTimestamp);

// Measure execution time
console.log("\nMeasuring execution time:");
let t1 = performance.now();
let sum = 0;
for (let i = 0; i < 1000000; i++) {
    sum += i;
}
let t2 = performance.now();
console.log(`Loop took ${(t2 - t1).toFixed(2)} milliseconds`);


// ============================================================
//                    PART 2: MATH OBJECT
// ============================================================

console.log("\n==================== MATH OBJECT ====================\n");

// ============================================================
// 7. MATH CONSTANTS
// ============================================================

console.log("--- 7. Math Constants ---");

console.log("Math.PI:", Math.PI);           // 3.141592653589793
console.log("Math.E:", Math.E);             // 2.718281828459045 (Euler's number)
console.log("Math.LN2:", Math.LN2);         // 0.6931471805599453
console.log("Math.LN10:", Math.LN10);       // 2.302585092994046
console.log("Math.LOG2E:", Math.LOG2E);     // 1.4426950408889634
console.log("Math.LOG10E:", Math.LOG10E);   // 0.4342944819032518
console.log("Math.SQRT2:", Math.SQRT2);     // 1.4142135623730951


// ============================================================
// 8. ROUNDING METHODS
// ============================================================

console.log("\n--- 8. Rounding Methods ---");

let num = 4.7;
console.log("Number:", num);

// Math.round() - round to nearest integer
console.log("Math.round(4.7):", Math.round(4.7));   // 5
console.log("Math.round(4.4):", Math.round(4.4));   // 4
console.log("Math.round(4.5):", Math.round(4.5));   // 5

// Math.floor() - round down
console.log("\nMath.floor(4.7):", Math.floor(4.7));   // 4
console.log("Math.floor(-4.7):", Math.floor(-4.7));  // -5

// Math.ceil() - round up
console.log("\nMath.ceil(4.2):", Math.ceil(4.2));    // 5
console.log("Math.ceil(-4.2):", Math.ceil(-4.2));   // -4

// Math.trunc() - remove decimal part
console.log("\nMath.trunc(4.7):", Math.trunc(4.7));   // 4
console.log("Math.trunc(-4.7):", Math.trunc(-4.7));  // -4

// Round to decimal places
function roundToDecimals(num, decimals) {
    let factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
}
console.log("\nRound 3.14159 to 2 decimals:", roundToDecimals(3.14159, 2));


// ============================================================
// 9. ABSOLUTE VALUE AND SIGN
// ============================================================

console.log("\n--- 9. Absolute Value and Sign ---");

// Math.abs() - absolute value
console.log("Math.abs(-5):", Math.abs(-5));     // 5
console.log("Math.abs(5):", Math.abs(5));       // 5
console.log("Math.abs(-3.14):", Math.abs(-3.14)); // 3.14

// Math.sign() - get sign
console.log("\nMath.sign(-10):", Math.sign(-10));  // -1
console.log("Math.sign(0):", Math.sign(0));       // 0
console.log("Math.sign(10):", Math.sign(10));     // 1


// ============================================================
// 10. POWER AND ROOT
// ============================================================

console.log("\n--- 10. Power and Root ---");

// Math.pow(base, exponent)
console.log("Math.pow(2, 3):", Math.pow(2, 3));     // 8
console.log("Math.pow(5, 2):", Math.pow(5, 2));     // 25
console.log("Math.pow(10, -2):", Math.pow(10, -2)); // 0.01

// Exponentiation operator (ES2016)
console.log("2 ** 3:", 2 ** 3);  // 8

// Math.sqrt() - square root
console.log("\nMath.sqrt(16):", Math.sqrt(16));    // 4
console.log("Math.sqrt(2):", Math.sqrt(2));       // 1.4142...

// Math.cbrt() - cube root
console.log("Math.cbrt(27):", Math.cbrt(27));     // 3

// Math.hypot() - hypotenuse (Pythagorean theorem)
console.log("\nMath.hypot(3, 4):", Math.hypot(3, 4));  // 5


// ============================================================
// 11. MIN AND MAX
// ============================================================

console.log("\n--- 11. Min and Max ---");

// Math.min()
console.log("Math.min(5, 3, 8, 1):", Math.min(5, 3, 8, 1));     // 1
console.log("Math.min(-5, -3, -8):", Math.min(-5, -3, -8));     // -8

// Math.max()
console.log("\nMath.max(5, 3, 8, 1):", Math.max(5, 3, 8, 1));   // 8
console.log("Math.max(-5, -3, -8):", Math.max(-5, -3, -8));     // -3

// Using with arrays
let numbers = [5, 3, 8, 1, 9, 2];
console.log("\nArray:", numbers);
console.log("Min of array:", Math.min(...numbers));
console.log("Max of array:", Math.max(...numbers));


// ============================================================
// 12. RANDOM NUMBERS
// ============================================================

console.log("\n--- 12. Random Numbers ---");

// Math.random() - returns 0 to <1
console.log("Math.random():", Math.random());
console.log("Math.random():", Math.random());
console.log("Math.random():", Math.random());

// Random integer from 0 to max (exclusive)
function randomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log("\nRandom 0-9:", randomInt(10));

// Random integer from min to max (inclusive)
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random 1-6 (dice):", randomRange(1, 6));
console.log("Random 1-100:", randomRange(1, 100));

// Random from array
function randomFromArray(arr) {
    return arr[randomInt(arr.length)];
}
let colors = ["red", "green", "blue", "yellow"];
console.log("\nRandom color:", randomFromArray(colors));


// ============================================================
// 13. LOGARITHMIC AND EXPONENTIAL
// ============================================================

console.log("\n--- 13. Logarithmic and Exponential ---");

// Math.log() - natural logarithm (base e)
console.log("Math.log(1):", Math.log(1));         // 0
console.log("Math.log(Math.E):", Math.log(Math.E)); // 1

// Math.log10() - base 10 logarithm
console.log("\nMath.log10(10):", Math.log10(10));    // 1
console.log("Math.log10(100):", Math.log10(100));   // 2

// Math.log2() - base 2 logarithm
console.log("\nMath.log2(8):", Math.log2(8));       // 3
console.log("Math.log2(1024):", Math.log2(1024));   // 10

// Math.exp() - e to the power
console.log("\nMath.exp(1):", Math.exp(1));         // e ≈ 2.718
console.log("Math.exp(2):", Math.exp(2));          // e² ≈ 7.389


// ============================================================
// 14. TRIGONOMETRIC FUNCTIONS
// ============================================================

console.log("\n--- 14. Trigonometric Functions ---");

// Note: All angles are in radians
let angle = Math.PI / 4;  // 45 degrees
console.log("Angle: π/4 radians (45 degrees)");

// Basic trigonometry
console.log("Math.sin(π/4):", Math.sin(angle));    // ≈ 0.707
console.log("Math.cos(π/4):", Math.cos(angle));    // ≈ 0.707
console.log("Math.tan(π/4):", Math.tan(angle));    // ≈ 1

// Inverse trigonometry
console.log("\nMath.asin(1):", Math.asin(1));       // π/2 (90 degrees)
console.log("Math.acos(0):", Math.acos(0));        // π/2
console.log("Math.atan(1):", Math.atan(1));        // π/4

// Convert degrees to radians
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
console.log("\n90 degrees in radians:", toRadians(90));

// Convert radians to degrees
function toDegrees(radians) {
    return radians * (180 / Math.PI);
}
console.log("π radians in degrees:", toDegrees(Math.PI));


// ============================================================
// 15. PRACTICAL EXAMPLES
// ============================================================

console.log("\n--- 15. Practical Examples ---");

// Example 1: Calculate age
function calculateAge(birthDate) {
    let today = new Date();
    let birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    let monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}
console.log("Age for 1990-05-15:", calculateAge("1990-05-15"));

// Example 2: Check if leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("\nIs 2024 leap year?", isLeapYear(2024));
console.log("Is 2023 leap year?", isLeapYear(2023));

// Example 3: Calculate compound interest
function compoundInterest(principal, rate, time, n = 12) {
    // A = P(1 + r/n)^(nt)
    return principal * Math.pow(1 + rate / n, n * time);
}
console.log("\n$1000 at 5% for 10 years:", compoundInterest(1000, 0.05, 10).toFixed(2));

// Example 4: Distance between two points
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
console.log("\nDistance (0,0) to (3,4):", distance(0, 0, 3, 4));

// Example 5: Generate random password
function generatePassword(length) {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}
console.log("\nRandom password (12 chars):", generatePassword(12));

// Example 6: Days between dates
function daysBetween(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    let diff = Math.abs(d2 - d1);
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}
console.log("\nDays between 2024-01-01 and 2024-12-31:", daysBetween("2024-01-01", "2024-12-31"));

// Example 7: Format time (countdown)
function formatTime(seconds) {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}
console.log("\nFormat 3661 seconds:", formatTime(3661));

console.log("\n=== End of Date and Math ===");
