// ============================================================
// 10 - OBJECTS
// ============================================================

console.log("=== JavaScript Objects ===\n");

// ============================================================
// 1. CREATING OBJECTS
// ============================================================

console.log("--- 1. Creating Objects ---");

/*
Objects are collections of key-value pairs.
Keys are also called properties.
Values can be any data type, including functions.
*/

// Object literal (most common way)
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com"
};

console.log("Person object:");
console.log(person);
console.table(person);

// Empty object
let emptyObj = {};
console.log("Empty object:", emptyObj);

// Using Object constructor
let car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2023;
console.log("Car object:", car);

// Object with different value types
let user = {
    name: "Alice",           // String
    age: 25,                 // Number
    isAdmin: false,          // Boolean
    hobbies: ["reading", "gaming"],  // Array
    address: {               // Nested object
        city: "New York",
        zip: "10001"
    }
};
console.log("\nComplex object:");
console.log(user);


// ============================================================
// 2. ACCESSING PROPERTIES
// ============================================================

console.log("\n--- 2. Accessing Properties ---");

let student = {
    name: "Bob",
    age: 20,
    grade: "A",
    "student-id": 12345  // Property with special characters
};

// Dot notation (preferred for valid identifiers)
console.log("Dot notation:");
console.log("Name:", student.name);
console.log("Age:", student.age);

// Bracket notation (required for special characters or variables)
console.log("\nBracket notation:");
console.log("Grade:", student["grade"]);
console.log("Student ID:", student["student-id"]);

// Using variable as property name
let propertyName = "name";
console.log("Dynamic access:", student[propertyName]);

// Accessing non-existent property
console.log("Unknown property:", student.unknown);  // undefined

// Accessing nested properties
let company = {
    name: "Tech Corp",
    address: {
        city: "San Francisco",
        country: "USA"
    }
};
console.log("\nNested access:", company.address.city);


// ============================================================
// 3. MODIFYING OBJECTS
// ============================================================

console.log("\n--- 3. Modifying Objects ---");

let product = {
    name: "Laptop",
    price: 999
};
console.log("Original:", product);

// Update existing property
product.price = 899;
console.log("After price update:", product);

// Add new property
product.brand = "Dell";
product["in-stock"] = true;
console.log("After adding properties:", product);

// Delete property
delete product["in-stock"];
console.log("After delete:", product);


// ============================================================
// 4. OBJECT METHODS
// ============================================================

console.log("\n--- 4. Object Methods ---");

/*
Methods are functions stored as object properties.
Use 'this' keyword to access other properties of the same object.
*/

let calculator = {
    a: 10,
    b: 5,
    
    // Method using function keyword
    add: function() {
        return this.a + this.b;
    },
    
    // Shorthand method syntax (ES6)
    subtract() {
        return this.a - this.b;
    },
    
    // Method with parameters
    multiply(x, y) {
        return x * y;
    }
};

console.log("add():", calculator.add());
console.log("subtract():", calculator.subtract());
console.log("multiply(3, 4):", calculator.multiply(3, 4));

// More practical example
let userAccount = {
    username: "john_doe",
    balance: 1000,
    
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    },
    
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds!");
            return false;
        }
        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        return true;
    },
    
    getBalance() {
        return this.balance;
    }
};

console.log("\nBank Account:");
userAccount.deposit(500);
userAccount.withdraw(200);
console.log("Final balance: $" + userAccount.getBalance());


// ============================================================
// 5. THE 'this' KEYWORD
// ============================================================

console.log("\n--- 5. The 'this' Keyword ---");

/*
'this' refers to the object that is calling the method.
Be careful with arrow functions - they don't have their own 'this'.
*/

let employee = {
    name: "Alice",
    department: "Engineering",
    
    // Regular function - 'this' works correctly
    introduce: function() {
        return `Hi, I'm ${this.name} from ${this.department}`;
    },
    
    // Arrow function - 'this' doesn't work as expected!
    // introduceArrow: () => {
    //     return `Hi, I'm ${this.name}`;  // 'this' is not the object!
    // }
};

console.log(employee.introduce());


// ============================================================
// 6. ITERATING OVER OBJECTS
// ============================================================

console.log("\n--- 6. Iterating Over Objects ---");

let book = {
    title: "JavaScript Guide",
    author: "John Smith",
    pages: 350,
    published: 2023
};

// for...in loop - iterate over property names
console.log("for...in loop:");
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

// Object.keys() - get array of property names
console.log("\nObject.keys():", Object.keys(book));

// Object.values() - get array of property values
console.log("Object.values():", Object.values(book));

// Object.entries() - get array of [key, value] pairs
console.log("Object.entries():", Object.entries(book));

// Iterate with Object.entries()
console.log("\nUsing Object.entries():");
for (let [key, value] of Object.entries(book)) {
    console.log(`${key}: ${value}`);
}


// ============================================================
// 7. CHECKING PROPERTIES
// ============================================================

console.log("\n--- 7. Checking Properties ---");

let config = {
    theme: "dark",
    language: "en",
    debug: false
};

// 'in' operator - check if property exists
console.log("'theme' in config:", "theme" in config);      // true
console.log("'version' in config:", "version" in config);  // false

// hasOwnProperty() - check own properties (not inherited)
console.log("hasOwnProperty('theme'):", config.hasOwnProperty("theme"));  // true

// Check if property is undefined
console.log("config.theme !== undefined:", config.theme !== undefined);

// Object.hasOwn() (modern way)
console.log("Object.hasOwn():", Object.hasOwn(config, "theme"));


// ============================================================
// 8. OBJECT SPREAD AND REST
// ============================================================

console.log("\n--- 8. Spread and Rest ---");

// Spread operator - copy/merge objects
let defaults = { theme: "light", fontSize: 14 };
let userPrefs = { theme: "dark" };

// Merge objects (later properties override earlier)
let settings = { ...defaults, ...userPrefs };
console.log("Merged settings:", settings);

// Copy object (shallow copy)
let original = { a: 1, b: 2 };
let copy = { ...original };
copy.a = 100;
console.log("Original:", original);
console.log("Copy:", copy);

// Add properties while spreading
let extended = { ...original, c: 3 };
console.log("Extended:", extended);

// Rest in destructuring
let { theme, ...otherSettings } = settings;
console.log("Theme:", theme);
console.log("Other settings:", otherSettings);


// ============================================================
// 9. OBJECT DESTRUCTURING
// ============================================================

console.log("\n--- 9. Object Destructuring ---");

let movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8
};

// Basic destructuring
let { title, director } = movie;
console.log("Title:", title);
console.log("Director:", director);

// Destructuring with different variable names
let { title: movieTitle, year: releaseYear } = movie;
console.log("Movie title:", movieTitle);
console.log("Release year:", releaseYear);

// Default values
let { runtime = 120 } = movie;
console.log("Runtime (default):", runtime);

// Nested destructuring
let order = {
    id: 123,
    customer: {
        name: "Alice",
        address: {
            city: "Boston"
        }
    }
};

let { customer: { name: customerName, address: { city: customerCity } } } = order;
console.log("Customer:", customerName, "City:", customerCity);

// In function parameters
function displayMovie({ title, director, year }) {
    console.log(`${title} (${year}) by ${director}`);
}

displayMovie(movie);


// ============================================================
// 10. OBJECT STATIC METHODS
// ============================================================

console.log("\n--- 10. Object Static Methods ---");

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

// Object.assign() - copy properties
let merged = Object.assign({}, obj1, obj2);
console.log("Object.assign():", merged);

// Object.freeze() - prevent modifications
let frozen = Object.freeze({ x: 1, y: 2 });
frozen.x = 100;  // Silently fails
frozen.z = 3;    // Silently fails
console.log("Frozen object:", frozen);  // Still { x: 1, y: 2 }

// Object.isFrozen()
console.log("Is frozen:", Object.isFrozen(frozen));

// Object.seal() - prevent adding/removing, but allow modifications
let sealed = Object.seal({ a: 1 });
sealed.a = 100;  // Works
sealed.b = 2;    // Fails
delete sealed.a; // Fails
console.log("Sealed object:", sealed);

// Object.fromEntries() - create object from entries
let entries = [["name", "John"], ["age", 30]];
let fromEntries = Object.fromEntries(entries);
console.log("Object.fromEntries():", fromEntries);


// ============================================================
// 11. COMPUTED PROPERTY NAMES
// ============================================================

console.log("\n--- 11. Computed Property Names ---");

// Dynamic property names using []
let propName = "dynamicKey";
let dynamicObj = {
    [propName]: "dynamic value",
    [`computed_${propName}`]: "another value"
};
console.log("Dynamic object:", dynamicObj);

// Useful for creating objects dynamically
function createUser(idType, idValue) {
    return {
        name: "User",
        [idType]: idValue
    };
}

console.log(createUser("email", "user@example.com"));
console.log(createUser("phone", "123-456-7890"));


// ============================================================
// 12. OBJECT SHORTHAND
// ============================================================

console.log("\n--- 12. Shorthand Syntax ---");

// Property shorthand
let userName = "Alice";
let userAge = 25;
let userCity = "Boston";

// Old way
let oldWay = { name: userName, age: userAge, city: userCity };

// Shorthand (when property name equals variable name)
let shorthand = { userName, userAge, userCity };
console.log("Shorthand:", shorthand);

// Method shorthand
let apiObject = {
    // Old way
    getData: function() {
        return "data";
    },
    
    // Shorthand
    fetchData() {
        return "fetched";
    }
};


// ============================================================
// 13. PRACTICAL EXAMPLES
// ============================================================

console.log("\n--- 13. Practical Examples ---");

// Example 1: User profile management
let userProfile = {
    id: 1,
    username: "johndoe",
    email: "john@example.com",
    preferences: {
        theme: "dark",
        notifications: true
    },
    
    updateEmail(newEmail) {
        this.email = newEmail;
        console.log(`Email updated to: ${this.email}`);
    },
    
    toggleNotifications() {
        this.preferences.notifications = !this.preferences.notifications;
        return this.preferences.notifications;
    }
};

userProfile.updateEmail("newemail@example.com");
console.log("Notifications:", userProfile.toggleNotifications());

// Example 2: Shopping cart
let shoppingCart = {
    items: [],
    
    addItem(product, quantity = 1) {
        let existing = this.items.find(item => item.product === product);
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
    },
    
    removeItem(product) {
        this.items = this.items.filter(item => item.product !== product);
    },
    
    getTotal(prices) {
        return this.items.reduce((total, item) => {
            return total + (prices[item.product] || 0) * item.quantity;
        }, 0);
    }
};

let prices = { "Apple": 1.5, "Banana": 0.75, "Orange": 2 };
shoppingCart.addItem("Apple", 3);
shoppingCart.addItem("Banana", 5);
shoppingCart.addItem("Apple", 2);
console.log("\nCart items:", shoppingCart.items);
console.log("Cart total: $" + shoppingCart.getTotal(prices));

// Example 3: Data transformation
let apiData = [
    { id: 1, first_name: "John", last_name: "Doe" },
    { id: 2, first_name: "Jane", last_name: "Smith" }
];

let transformedData = apiData.map(({ id, first_name, last_name }) => ({
    id,
    fullName: `${first_name} ${last_name}`,
    initials: `${first_name[0]}${last_name[0]}`
}));

console.log("\nTransformed data:", transformedData);

console.log("\n=== End of Objects ===");
