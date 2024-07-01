function GetResultFun() {
    // Get the value from the input field with id "tb_value"
    var inputValue = document.getElementById("tb_value").value;
    // Uncomment the next line to print the input value to the console
    // console.log(inputValue);

    // Uncomment the next line to convert inputValue to a number
    // inputValue = Number(inputValue);



    // while loop example
    // while loop syntax: while(condition) {statements}
    // Loop while inputValue is less than 20
    while(inputValue < 20) { // 11 < 20
        // Print a message if inputValue is less than 20
        console.log("input value " + inputValue + " is smaller than 20 "); // printed
        // Increment inputValue by 1
        inputValue++; // increased
        // Print the incremented value
        //console.log("input value " + inputValue + " is smaller than 20 "); // print
    }
    

    // Clear the console output
    console.clear()

    // do-while loop example
    // Initialize inputValue to a negative number for demonstration
    // inputValue = -11;
    // do-while loop syntax: do {statements} while(condition)
    do {
        // Print a message for each iteration
        console.log("input value in do while for " + inputValue + " is smaller than 20 "); 
        // Increment inputValue by 1
        inputValue++;
    } while(inputValue < 0)
    

    // for loop example
    
    // for loop syntax: for(initialization; condition; increment)
    for(var a = 0; a < 20; a++) {
        // Print a message for each iteration
        console.log("input value in for loop " + a + " is smaller than 20 "); 
    }
    

    // A for loop that starts with inputValue and loops until inputValue is less than 30
    for(inputValue; inputValue < 30; inputValue++) {
        // Print a message for each iteration
        console.log("input value in for loop " + inputValue + " is smaller than 30 "); 
    }
}
