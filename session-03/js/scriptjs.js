console.clear();

// Ternary or conditional operator
// condition ? statement1 : statement2;
v1 = "s";
console.log((v1 === "s") ? "yes" : "no"); // Check if v1 is "s", if true print "yes", else print "no"
console.log(v1);

var output = v1 == "2" ? "v1 has value" : "v1 does not have value"; // Check if v1 is "2", if true assign "v1 has value" to output, else "v1 does not have value"
console.log(output);

// Conditional chains with ternary operator
var mark = 20;
var output = (mark == 60) ? "grade b" : (mark == 50) ? "grade c" : (mark == 40) ? "grade d" : "fail"; // Check multiple conditions using ternary operators
console.log(output);

m = 45; // Input
// Check mark ranges and assign the corresponding grade
var mark = (35 <= m && m < 60) ? "grade c" : (60 <= m && m < 80) ? "Grade B" : (80 <= m && m < 90) ? "Grade A" : (90 <= m && m <= 100) ? "Grade Distinction" : "Fail";
console.log(mark); // Output

// Function declaration

function addition() {
    // Alert is commented out, used to show a popup message
    // alert("click works fine");
    value1_get = Number(document.getElementById("value1").value); // Get the first input value and convert to number
    value2_get = Number(document.getElementById("value2").value); // Get the second input value and convert to number
    show_output = value1_get + value2_get; // Add the two values
    console.log(show_output); // Print the result
    document.getElementById("output").innerHTML = show_output; // Display the result in the HTML element with id "output"
}

function subtract() {
    // Alert is commented out, used to show a popup message
    // alert("click works fine");
    value1_get = Number(document.getElementById("value1").value); // Get the first input value and convert to number
    value2_get = Number(document.getElementById("value2").value); // Get the second input value and convert to number
    show_output = value1_get - value2_get; // Subtract the second value from the first
    console.log(show_output); // Print the result
    document.getElementById("output").innerHTML = show_output; // Display the result in the HTML element with id "output"
}

function multiply() {
    // Alert is commented out, used to show a popup message
    // alert("click works fine");
    value1_get = Number(document.getElementById("value1").value); // Get the first input value and convert to number
    value2_get = Number(document.getElementById("value2").value); // Get the second input value and convert to number
    show_output = value1_get * value2_get; // Multiply the two values
    console.log(show_output); // Print the result
    document.getElementById("output").innerHTML = show_output; // Display the result in the HTML element with id "output"
}

function operatordemo(x) {
    var value1_get = Number(document.getElementById("value1").value); // Get the first input value and convert to number
    var value2_get = Number(document.getElementById("value2").value); // Get the second input value and convert to number
    
    if (x == '+') {
        show_output = value1_get + value2_get; // Add the two values if x is '+'
        console.log(show_output); // Print the result
        document.getElementById("output").innerHTML = show_output; // Display the result in the HTML element with id "output"
    } else if (x == '-') {
        show_output = value1_get - value2_get; // Subtract the second value from the first if x is '-'
        console.log(show_output); // Print the result
        document.getElementById("output").innerHTML = show_output; // Display the result in the HTML element with id "output"
    } else {
        document.getElementById("output").innerHTML = "functions not created"; // Display a message if x is neither '+' nor '-'
    }
}

function findGrade() {
    m = 34; // Input
    // Check mark ranges and assign the corresponding grade
    var mark = (35 <= m && m < 60) ? "grade c" : (60 <= m && m < 80) ? "Grade B" : (80 <= m && m < 90) ? "Grade A" : (90 <= m && m <= 100) ? "Grade Distinction" : "Fail";
    console.log(mark); // Output the grade
}

findGrade();

function findGrade1(m, k) {
    // Check mark ranges and assign the corresponding grade
    var mark = (35 <= m && m < 60) ? "grade c" : (60 <= m && m < 80) ? "Grade B" : (80 <= m && m < 90) ? "Grade A" : (90 <= m && m <= 100) ? "Grade Distinction" : "Fail";
    console.log(k, mark); // Output the grade and the value of k
}

findGrade1(65, "karthick");

var findgrade2 = (m, k) => {
    // Check mark ranges and assign the corresponding grade
    var mark = (35 <= m && m < 60) ? "grade c" : (60 <= m && m < 80) ? "Grade B" : (80 <= m && m < 90) ? "Grade A" : (90 <= m && m <= 100) ? "Grade Distinction" : "Fail";
    console.log(k, mark); // Output the grade and the value of k
};

console.log(findgrade2(36, "ram")); // Call the function and print the result
