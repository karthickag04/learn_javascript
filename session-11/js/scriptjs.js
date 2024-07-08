function GetResultFun() {


    // Log the value of PI
    console.log(Math.PI);

    // Log the value of Euler's number
    console.log(Math.E);

    // Calculate the circumference of a circle with radius 2 (2 * PI * 2)
    console.log(2 * Math.PI * 2);

    // Define a variable a with the value 4.4
    var a = 4.4;

    // Round the number 4.4 to the nearest integer
    console.log(Math.round(4.4));
    console.log("*************");

    // Round the number 4.5 down to the nearest integer
    console.log(Math.floor(4.5));

    // Round the number 4.4 up to the nearest integer
    console.log(Math.ceil(4.4));

    // Calculate the square root of 4
    console.log(Math.sqrt(4));

    // Calculate 4 raised to the power of 2
    console.log(Math.pow(4, 2));

    // Generate a random number between 1000 and 1010 (inclusive) and round it down

    console.log(Math.random());

    console.log(Math.ceil(Math.random()));
    console.log(Math.random() * 10);
    console.log(Math.ceil(Math.random() * 10));
   
   
    // Generate a random number between 1000 and 1010 (inclusive) and round it down
    console.log(Math.floor(Math.random() * 10 + 1000));

    // Calculate the absolute value of -4.75
    console.log(Math.abs(-4.75));

    // Round the number -4.75 down to the nearest integer
    console.log(Math.floor(-4.1));

    // Find the minimum value among 20, 25, 35, and 25
    console.log(Math.min(20, 25, 35, 25));

    // Find the maximum value among 20, 25, 35, and 25
    console.log(Math.max(20, 25, 35, 25));
}

// Call the function to execute the above code
GetResultFun();
