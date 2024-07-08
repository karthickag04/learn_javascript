function GetResultFun() {
    var namelist = ["karthick", "kavin", "kayal", "ragu", "mani", "harsh", "anand", "basheer"];

    // Log the entire array to the console
    console.log(namelist);

    // // Log the array as a table to the console
    console.table(namelist);

    // Log each element of the array individually using a loop
    
    for (var a = 0; a < namelist.length; a++) {
        console.log(namelist[a]);
        // if (namelist[a] == "karthick")
        //     {
        //         console.log("karthick is in the list");
        //     }
        // else
        // {
        //     console.log("karthick is not the value you provided");
        // }
    }

    // Clear the console
    console.clear();

    // Use forEach to log each element of the array
    var result = namelist.forEach(

        function(name1) {
            console.log(name1);
        }
    );

    // Log a separator message
    console.log("arrow output");

    // Use forEach with an arrow function to log each element of the array
    result = namelist.forEach(name1 => console.log(name1));

    console.clear();

    // Redefine the array with a small typo in the last element
    namelist = ["karthick", "kavin", "Kayal", "ragu", "mani", "harsh", "anand", "basheerk"];
  

    // // Clear the console again
    // console.clear();

    // Use filter to get elements that start with 'k', end with 'k', or start with the value of define1
    result = namelist.filter(name1 => name1.startsWith("k"));
    console.log(result);


    result = namelist.filter(name1 => name1.endsWith("k"));
    console.log(result);
   
    var define1 = "m";
    result = namelist.filter(name1 => name1.startsWith(define1));
    console.log(result);
    
    
    result = namelist.filter(name1 => name1.startsWith("k") || name1.endsWith("k") || name1.startsWith(define1));
    console.log(result);

    // Define an array of numbers
    var listofnumbers = [1, 2, 3, 4];

    // Use map to create a new array with each number multiplied by 2
    result = listofnumbers.map(number => number * 2);
    console.log(result);


    var listofnumbers = [1, 2, 3, 4];
    // Use reduce to sum all numbers in the array, adding 1 for each number
    result1 = listofnumbers.reduce((sum, number) => sum += number, 0); 
    // sum = sum + number
    //   1=   0 + 1
    //   3 = 1 + 2
    //   6 = 3 + 3
    //    10 = 6 + 4
    console.log(result1);
}

// Call the function to execute the above code
GetResultFun();
