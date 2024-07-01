// Function to handle the modulus button click
function btnclk_modulus() {
    alert('welcome to javascript' + ' modulus button click worked'); // Display an alert with a message
}

// Function to handle a generic button click
function btnclk_modulus1() {
    alert('welcome to javascript'); // Display an alert with a message
}

// Function to handle a button click with parameters
function btnclk(x, ffff) {
    dd = ffff; // Assign the value of ffff to dd
    alert('welcome to javascript ' + x + " button click worked"); // Display an alert with a message including x
    // btnclk_modulus1(); // This line is commented out and will not execute
    alert("passed value in ffff " + dd); // Display an alert with the value of dd
}

// Prompt the user to enter a name and a value
name1 = prompt("enter name of the process"); // Prompt for the process name
value = prompt("enter the value"); // Prompt for the value

btnclk(name1, value); // Call btnclk function with the entered name and value

// Function to add two values from input fields and display the result
function add(x) {
    valueget_1 = Number(document.getElementById("value1").value); // Get the first input value and convert to number
    valueget_2 = Number(document.getElementById("value2").value); // Get the second input value and convert to number

    console.log("valueget_1", valueget_1 , "valueget_2" ,valueget_2); // Print the input values to console
    console.log("added value", valueget_1 +  valueget_2); // Print the sum of the input values to console
    additon = valueget_1 + valueget_2; // Calculate the sum of the input values

    document.getElementById("output").innerHTML = "added value of value 1 and value 2 is .. " + additon; // Display the result in the HTML element with id "output"
}
