function GetResultFun(){
    // Initialize a string variable
    var text = "welcome to welcome javascript program organized by Gtec and gtec welcomes you once again welcome";

    // Print the length of the text
    console.log(text.length);
    
    // Find the first occurrence of "welcome"
    console.log(text.indexOf("welcome"));
    
    // Find the first occurrence of "welcome" after index 66
    console.log(text.indexOf("welcome", 66));
    
    // Find the last occurrence of "welcome"
    console.log(text.lastIndexOf("welcome"));
    
    // Search for "welcome" in the text
    console.log(text.search("welcome"));
    
    // Use a regular expression to search for "welcome"
    let arr = text.search(/welcome/);
    console.log(arr);
    
    // Match all occurrences of "welcome"
    let arr1 = text.match(/welcome/);
    console.log(arr1);
    
    // Match all occurrences of "welcome" (case insensitive)
    let arr11 = text.match(/Welcome/gi);
    console.log(arr11);
    
    // Extract a substring from index 19 to 29
    console.log(text.slice(19, 29));
    
    // Clear the console
    console.clear();

    // Date usage

    // Get the current date and time
    let today = new Date();

    // Print the current date and time
    console.log(today);

    // Print the date in a human-readable string format
    console.log(today.toDateString());
    
    // Print the date in a localized string format
    console.log(today.toLocaleDateString());
    
    // Print the date in ISO string format
    console.log(today.toISOString());
    
    // Print the date and time in a localized string format
    console.log(today.toLocaleString());
    
    // Print the date and time in a human-readable string format
    console.log(today.toString());
    
    // Print the time portion of the date in a human-readable string format
    console.log(today.toTimeString());
    
    // Print the date and time in UTC string format
    console.log(today.toUTCString());
    
    // Print the current year
    console.log(today.getFullYear());
    
    // Print the current date of the month
    console.log(today.getDate());
    
    // Print the current hour
    console.log(today.getHours());
    
    // Print the current milliseconds
    console.log(today.getMilliseconds());
    
    // Print the current seconds
    console.log(today.getSeconds());

    // Print the current month (0-11)
    console.log(today.getMonth());

    // Create an array of month names
    var month = ["jan", "feb", "mar", "apr", 'may', "june", 'july' ];
    
    // Print the name of the current month
    console.log(month[today.getMonth()]);

    // Create a date object for a specific date
    let dob = new Date("2005-02-11");
    console.log(dob);

    // Calculate age based on the current year and the year of birth
    let age = today.getFullYear() - dob.getFullYear();
    console.log(age);
}

// Call the function to execute the code
GetResultFun();
