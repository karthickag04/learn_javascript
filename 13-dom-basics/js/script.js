// ============================================================
// 13 - DOM BASICS
// ============================================================

console.log("=== JavaScript DOM Basics ===\n");

/*
DOM = Document Object Model
- The DOM represents the HTML document as a tree of nodes
- JavaScript can access and modify the DOM to change content, 
  styles, structure, and behavior of web pages
*/


// ============================================================
// 1. THE DOCUMENT OBJECT
// ============================================================

console.log("--- 1. The Document Object ---");

// The document object is the entry point to the DOM
console.log("document:", document);
console.log("document.title:", document.title);
console.log("document.URL:", document.URL);
console.log("document.domain:", document.domain);
console.log("document.documentElement:", document.documentElement);  // <html>
console.log("document.head:", document.head);
console.log("document.body:", document.body);


// ============================================================
// 2. SELECTING ELEMENTS BY ID
// ============================================================

console.log("\n--- 2. Selecting by ID ---");

/*
document.getElementById("id")
- Returns a single element or null
- Fastest selection method
*/

let demoById = document.getElementById("demo-id");
console.log("getElementById:", demoById);
console.log("Text content:", demoById.textContent);

// Non-existent ID returns null
let nonExistent = document.getElementById("not-there");
console.log("Non-existent ID:", nonExistent);


// ============================================================
// 3. SELECTING BY CLASS NAME
// ============================================================

console.log("\n--- 3. Selecting by Class Name ---");

/*
document.getElementsByClassName("className")
- Returns HTMLCollection (live collection)
- Can return multiple elements
*/

let demoByClass = document.getElementsByClassName("demo-class");
console.log("getElementsByClassName:", demoByClass);
console.log("Length:", demoByClass.length);
console.log("First element:", demoByClass[0]);
console.log("Second element:", demoByClass[1]);

// Loop through collection
console.log("\nLooping through HTMLCollection:");
for (let i = 0; i < demoByClass.length; i++) {
    console.log(`  Element ${i}:`, demoByClass[i].textContent);
}


// ============================================================
// 4. SELECTING BY TAG NAME
// ============================================================

console.log("\n--- 4. Selecting by Tag Name ---");

/*
document.getElementsByTagName("tag")
- Returns HTMLCollection of all elements with that tag
*/

let allParagraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName('p'):", allParagraphs);
console.log("Number of paragraphs:", allParagraphs.length);

let allDivs = document.getElementsByTagName("div");
console.log("Number of divs:", allDivs.length);


// ============================================================
// 5. QUERY SELECTOR (CSS Selectors)
// ============================================================

console.log("\n--- 5. Query Selector ---");

/*
document.querySelector("selector")
- Returns FIRST matching element
- Uses CSS selector syntax
- Very flexible and powerful
*/

// Select by ID
let byIdQuery = document.querySelector("#demo-id");
console.log("querySelector('#demo-id'):", byIdQuery);

// Select by class
let byClassQuery = document.querySelector(".demo-class");
console.log("querySelector('.demo-class'):", byClassQuery);

// Select by tag
let byTagQuery = document.querySelector("span");
console.log("querySelector('span'):", byTagQuery);

// Complex selectors
let complexQuery = document.querySelector("div.demo-section h3");
console.log("Complex selector:", complexQuery);


// ============================================================
// 6. QUERY SELECTOR ALL
// ============================================================

console.log("\n--- 6. Query Selector All ---");

/*
document.querySelectorAll("selector")
- Returns NodeList of ALL matching elements
- Static (not live) collection
- Can use forEach directly
*/

let allDemoClasses = document.querySelectorAll(".demo-class");
console.log("querySelectorAll('.demo-class'):", allDemoClasses);

// forEach works on NodeList
console.log("\nUsing forEach on NodeList:");
allDemoClasses.forEach((element, index) => {
    console.log(`  Element ${index}:`, element.textContent);
});

// Multiple selectors
let multipleSelectors = document.querySelectorAll("h1, h2, h3");
console.log("\nMultiple selectors (h1, h2, h3):", multipleSelectors.length, "elements");


// ============================================================
// 7. CHANGING TEXT CONTENT
// ============================================================

console.log("\n--- 7. Changing Text Content ---");

let textDemo = document.querySelector("#text-demo");
console.log("Original textContent:", textDemo.textContent);

// textContent - gets/sets plain text (no HTML)
textDemo.textContent = "Text changed by JavaScript!";
console.log("New textContent:", textDemo.textContent);

// innerText - similar but respects CSS (hidden elements)
console.log("innerText:", textDemo.innerText);


// ============================================================
// 8. CHANGING HTML CONTENT
// ============================================================

console.log("\n--- 8. Changing HTML Content ---");

let htmlDemo = document.querySelector("#html-demo");
console.log("Original innerHTML:", htmlDemo.innerHTML);

// innerHTML - gets/sets HTML content (parses HTML)
htmlDemo.innerHTML = "New <em>italic</em> and <strong>bold</strong> text!";
console.log("New innerHTML:", htmlDemo.innerHTML);

// WARNING: Be careful with innerHTML and user input (XSS attacks)


// ============================================================
// 9. WORKING WITH INPUT VALUES
// ============================================================

console.log("\n--- 9. Input Values ---");

let inputDemo = document.querySelector("#input-demo");

// Get value
console.log("Original value:", inputDemo.value);

// Set value
inputDemo.value = "New input value";
console.log("New value:", inputDemo.value);

// Get/set other input properties
console.log("Input type:", inputDemo.type);
console.log("Input placeholder:", inputDemo.placeholder);


// ============================================================
// 10. CHANGING STYLES
// ============================================================

console.log("\n--- 10. Changing Styles ---");

let styleDemo = document.querySelector("#style-demo");

// Access style property
console.log("Current color:", styleDemo.style.color);

// Set inline styles
styleDemo.style.color = "blue";
styleDemo.style.backgroundColor = "#ffffcc";
styleDemo.style.padding = "10px";
styleDemo.style.border = "2px solid blue";
styleDemo.style.fontSize = "18px";

console.log("Styles applied!");

// Note: CSS properties use camelCase in JavaScript
// background-color → backgroundColor
// font-size → fontSize


// ============================================================
// 11. WORKING WITH CLASSES
// ============================================================

console.log("\n--- 11. Working with Classes ---");

let classDemo = document.querySelector("#class-demo");
console.log("Original classes:", classDemo.className);
console.log("classList:", classDemo.classList);

// Add class
classDemo.classList.add("highlight");
console.log("After add('highlight'):", classDemo.className);

// Remove class
classDemo.classList.remove("item");
console.log("After remove('item'):", classDemo.className);

// Toggle class (add if not present, remove if present)
classDemo.classList.toggle("big-text");
console.log("After toggle('big-text'):", classDemo.className);

// Check if has class
console.log("Has 'highlight':", classDemo.classList.contains("highlight"));

// Replace class
classDemo.classList.replace("highlight", "red-text");
console.log("After replace:", classDemo.className);


// ============================================================
// 12. WORKING WITH ATTRIBUTES
// ============================================================

console.log("\n--- 12. Working with Attributes ---");

let linkDemo = document.querySelector("#link-demo");

// Get attribute
console.log("href:", linkDemo.getAttribute("href"));
console.log("target:", linkDemo.getAttribute("target"));
console.log("title:", linkDemo.getAttribute("title"));

// Set attribute
linkDemo.setAttribute("title", "New title by JavaScript");
console.log("New title:", linkDemo.getAttribute("title"));

// Remove attribute
linkDemo.removeAttribute("target");
console.log("After removeAttribute('target'):", linkDemo.getAttribute("target"));

// Check if attribute exists
console.log("Has 'href':", linkDemo.hasAttribute("href"));

// Direct property access (for standard attributes)
console.log("Direct href:", linkDemo.href);

// Image attributes
let imageDemo = document.querySelector("#image-demo");
console.log("\nImage src:", imageDemo.src);
console.log("Image alt:", imageDemo.alt);


// ============================================================
// 13. DOM TRAVERSAL
// ============================================================

console.log("\n--- 13. DOM Traversal ---");

let listDemo = document.querySelector("#list-demo");

// Parent element
console.log("parentElement:", listDemo.parentElement);
console.log("parentNode:", listDemo.parentNode);

// Child elements
console.log("children:", listDemo.children);  // HTMLCollection
console.log("childNodes:", listDemo.childNodes);  // NodeList (includes text nodes)
console.log("firstElementChild:", listDemo.firstElementChild);
console.log("lastElementChild:", listDemo.lastElementChild);

// Sibling elements
let secondItem = listDemo.children[1];
console.log("\nSecond item:", secondItem.textContent);
console.log("previousElementSibling:", secondItem.previousElementSibling);
console.log("nextElementSibling:", secondItem.nextElementSibling);


// ============================================================
// 14. CREATING NEW ELEMENTS
// ============================================================

console.log("\n--- 14. Creating New Elements ---");

let containerDemo = document.querySelector("#container-demo");

// Create element
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was created by JavaScript!";
newPara.style.color = "green";
newPara.classList.add("item");

// Append to container
containerDemo.appendChild(newPara);
console.log("New paragraph appended!");

// Create another element
let newDiv = document.createElement("div");
newDiv.innerHTML = "<strong>Bold</strong> text in new div";
newDiv.style.background = "#e8f5e9";
newDiv.style.padding = "10px";
containerDemo.appendChild(newDiv);


// ============================================================
// 15. INSERT ADJACENT HTML/ELEMENT
// ============================================================

console.log("\n--- 15. Insert Adjacent ---");

/*
insertAdjacentHTML positions:
- "beforebegin": Before the element
- "afterbegin": Inside, before first child
- "beforeend": Inside, after last child
- "afterend": After the element
*/

let textDemoForInsert = document.querySelector("#text-demo");

// Insert HTML
textDemoForInsert.insertAdjacentHTML("afterend", "<p><em>Inserted after using insertAdjacentHTML</em></p>");

// Insert element
let insertedSpan = document.createElement("span");
insertedSpan.textContent = " [Appended span]";
textDemoForInsert.insertAdjacentElement("beforeend", insertedSpan);


// ============================================================
// 16. REMOVING ELEMENTS
// ============================================================

console.log("\n--- 16. Removing Elements ---");

// Create element to remove
let toRemove = document.createElement("p");
toRemove.textContent = "This will be removed";
toRemove.id = "remove-me";
containerDemo.appendChild(toRemove);

console.log("Element added:", document.querySelector("#remove-me"));

// Remove element
let elementToRemove = document.querySelector("#remove-me");
elementToRemove.remove();
// Or: containerDemo.removeChild(elementToRemove);

console.log("Element after removal:", document.querySelector("#remove-me"));


// ============================================================
// 17. CLONING ELEMENTS
// ============================================================

console.log("\n--- 17. Cloning Elements ---");

let listToClone = document.querySelector("#list-demo");

// Clone element (true = deep clone with children)
let clonedList = listToClone.cloneNode(true);
clonedList.id = "cloned-list";
clonedList.style.border = "2px dashed green";

// Modify cloned element
let heading = document.createElement("h4");
heading.textContent = "Cloned List:";

// Insert cloned element
listToClone.parentElement.appendChild(heading);
listToClone.parentElement.appendChild(clonedList);

console.log("List cloned!");


// ============================================================
// 18. DOCUMENT FRAGMENTS
// ============================================================

console.log("\n--- 18. Document Fragments ---");

/*
DocumentFragment - a lightweight container for DOM nodes
- Operations on fragment don't affect the document
- Good for batch operations (better performance)
*/

let fragment = document.createDocumentFragment();

// Add multiple elements to fragment
for (let i = 1; i <= 3; i++) {
    let li = document.createElement("li");
    li.textContent = `Fragment Item ${i}`;
    li.style.color = "purple";
    fragment.appendChild(li);
}

// Append fragment to DOM (single reflow)
document.querySelector("#list-demo").appendChild(fragment);
console.log("Fragment items added!");


// ============================================================
// 19. COMPUTED STYLES
// ============================================================

console.log("\n--- 19. Computed Styles ---");

let styledElement = document.querySelector("#style-demo");

// Get computed styles (including CSS from stylesheets)
let computedStyles = window.getComputedStyle(styledElement);

console.log("Computed color:", computedStyles.color);
console.log("Computed fontSize:", computedStyles.fontSize);
console.log("Computed padding:", computedStyles.padding);
console.log("Computed display:", computedStyles.display);


// ============================================================
// 20. PRACTICAL EXAMPLES
// ============================================================

console.log("\n--- 20. Practical Examples ---");

// Example 1: Toggle visibility
function toggleVisibility(elementId) {
    let element = document.getElementById(elementId);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Example 2: Create table from data
function createTable(data) {
    let table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    
    data.forEach(row => {
        let tr = document.createElement("tr");
        row.forEach(cell => {
            let td = document.createElement("td");
            td.textContent = cell;
            td.style.border = "1px solid #ddd";
            td.style.padding = "8px";
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    
    return table;
}

let tableData = [
    ["Name", "Age", "City"],
    ["Alice", "25", "New York"],
    ["Bob", "30", "Los Angeles"]
];

// Example 3: Highlight all matching text
function highlightText(searchText) {
    let paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(p => {
        let text = p.textContent;
        if (text.toLowerCase().includes(searchText.toLowerCase())) {
            p.style.backgroundColor = "yellow";
        }
    });
}

// Example 4: Create dynamic list
function createList(items, containerId) {
    let container = document.getElementById(containerId);
    let ul = document.createElement("ul");
    
    items.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
    
    container.appendChild(ul);
}

console.log("Practical examples created (check functions above)");

console.log("\n=== End of DOM Basics ===");
