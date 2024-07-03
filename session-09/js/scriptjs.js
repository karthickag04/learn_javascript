function GetResultFun() {

    var text = "welcome to welcome javascript to program organized by brightskills and brightskills welcomes to you once again    ";

    // Convert the entire string to uppercase
    var output = text.toUpperCase();
    console.log(output);

    // Convert the entire string to lowercase
    output = text.toLowerCase();
    console.log(output);

    // Extract a substring from the string, starting from index 0 and ending at index 4 (not inclusive)
    output = text.slice(0, 4);
    console.log(output);

    // Extract the last 10 characters from the string
    output = text.slice(-10);
    console.log(output);

    // Extract a substring from the string, starting from index 0 and ending at index 4 (not inclusive)
    output = text.substring(0, 4);
    console.log(output);

    // Attempt to extract a substring from the string, starting from index -10 and ending at the end of the string
    // Note: substring does not support negative indices, so it will return the entire string
    output = text.substring(-10);
    console.log(output);

    // Get the character at index 0
    output = text.charAt(0);
    console.log(output);

    // Get the Unicode value of the character at index 0
    output = text.charCodeAt(0);
    console.log(output);

    // Check if the string starts with "w"
    output = text.startsWith("w");
    console.log(output);

    // Check if the string ends with "n"
    output = text.endsWith("n");
    console.log(output);

    // Replace the first occurrence of "welcome" with "hi"
    output = text.replace('welcome', 'hi');
    console.log(output);

    // Replace all occurrences of "welcome" with "hi"
    output = text.replaceAll('welcome', 'hi');
    console.log(output);

    // Pad the string "5" at the start with "B" until the length is 5
    var number = "5";
    number = number.padStart(5, "B");
    console.log(number);

    // Pad the string "5" at the end with "B" until the length is 5
    number = "5";
    number = number.padEnd(5, "B");
    console.log(number);

    // Split the string into an array of substrings based on spaces
    console.table(text.split(" "));

    // Get the length of the string
    console.log(text.length);

    // Trim leading and trailing spaces from the string and get the length of the trimmed string
    var text1 = text.trim();
    console.log(text1.length);
}

// Call the function to execute the above code
GetResultFun();
