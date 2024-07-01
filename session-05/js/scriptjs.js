// increment operator

// Initialize variable 'a' with value 2
var a = 2;
// Post-increment 'a' by 1, now 'a' is 3
a++;
// Print the value of 'a', which is now 3
console.log(a);

// Re-initialize variable 'a' with value 2
var a = 2;
// Assign 'a' to 'x' and then post-increment 'a', 'x' is 2, 'a' becomes 3
var x = a++;
// Print 'x', which is 2
console.log('increment with assignment', x);
// Print 'a', which is now 3
console.log('increment with assignment', a);

// Print the sum of 'x' and 'a', which is 2 + 3 = 5
console.log(x + a);

// Re-initialize variable 'a' with value 2
var a = 2;
// Pre-increment 'a' by 1, now 'a' is 3
++a;
// Print the value of 'a', which is now 3
console.log('prefix increment', a);

// Re-initialize variable 'a' with value 2
var a = 2;
// Pre-increment 'a' by 1, then assign 'a' to 'x', both 'x' and 'a' are 3
var x = ++a;
// Print 'x', which is 3
console.log('prefix increment with assignment', x);
// Print 'a', which is also 3
console.log('prefix increment with assignment', a);

// Print the sum of 'x' and 'a', which is 3 + 3 = 6
console.log(x + a);

// decrement

// Re-initialize variable 'a' with value 2
var a = 2;
// Post-decrement 'a' by 1, now 'a' is 1
a--;
// Print the value of 'a', which is now 1
console.log(a);

// Re-initialize variable 'a' with value 2
var a = 2;
// Assign 'a' to 'x' and then post-decrement 'a', 'x' is 2, 'a' becomes 1
var x = a--;
// Print 'x', which is 2
console.log('post-increment with assignment', x);
// Print 'a', which is now 1
console.log('postincrement with assignment', a);

// Re-initialize variable 'a' with value 2
var a = 2;
// Pre-decrement 'a' by 1, now 'a' is 1
--a;
// Print the value of 'a', which is now 1
console.log(a);

// Re-initialize variable 'a' with value 2
var a = 2;
// Pre-decrement 'a' by 1, then assign 'a' to 'x', both 'x' and 'a' are 1
var x = --a;
// Print 'x', which is 1
console.log('preincrement with assignment', x);
// Print 'a', which is also 1
console.log('preincrement with assignment', a);

// Re-initialize variable 'a' with value 2 (no further action in this line)
var a = 2;
