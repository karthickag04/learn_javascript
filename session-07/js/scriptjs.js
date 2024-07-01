function GetResultFun() {
    // Initialize an array of names
    var listofnames = ["karthick", "ravi", "Raju", "Ramu"];

    // Initialize a string variable
    var name1 = "karthick ag@";
    
    // Print the length of the array
    console.log("length of array listofnames .. ", listofnames.length);
    
    // Print the length of the string
    console.log("length of array listofnames .. ", name1.length);
    
    // Print the entire array
    console.log(listofnames);
    
    // Print the first element of the array
    console.log(listofnames[0]);
    
    // Print the second element of the array
    console.log(listofnames[1]);
    
    // Print the array in a table format
    console.table(listofnames);

    // Loop through the array using a for loop and print each element
    for (let a = 0; a < listofnames.length; a++) {
        console.log(listofnames[a]); // a == 0 : prints first element
    }
    console.log("******************************");
    console.log("output from for OF");

    // Loop through the array using a for-of loop and print each element
    for (let name of listofnames) {
        console.log(name);
    }

    console.log("******************************");
    console.log("******************************");

    // Loop through the array using a for loop, print each element, and break after the third element
    for (let a = 0; a < listofnames.length; a++) {
        console.log(listofnames[a]); // a == 0 : prints first element
        if (a == 2) {
            break;
        }
    }

    console.log("******************************");
    console.log("******************************");
    console.log("******************************");

    // Clear the console
    console.clear();

    // Initialize an object representing a car
    var listofcars = { name: "bmw", price: "1c", mdate: "2020" };

    // Print the entire object
    console.log(listofcars);
    
    // Print the object in a table format
    console.table(listofcars);

    // Loop through the object properties using a for-in loop and print each property name
    for (let property in listofcars) {
        console.log(property);
    }

    // Loop through the object properties using a for-in loop and print each property name and value
    for (let property in listofcars) {
        console.log(property + " : " + listofcars[property]);
    }
}

// Call the function to execute the code
GetResultFun();
