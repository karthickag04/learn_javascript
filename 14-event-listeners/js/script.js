// ============================================================
// 14 - EVENT LISTENERS
// ============================================================

console.log("=== JavaScript Event Listeners ===\n");

/*
Events are actions that happen in the browser:
- User clicks a button
- User types in an input
- Page finishes loading
- Mouse moves over an element
- And many more...

Event Listeners allow us to "listen" for these events and 
execute code in response.
*/


// ============================================================
// 1. ADDING EVENT LISTENERS
// ============================================================

console.log("--- 1. Adding Event Listeners ---");

/*
Syntax:
element.addEventListener("eventType", handlerFunction);

Three ways to handle events:
1. Inline HTML: onclick="..." (NOT recommended)
2. Property: element.onclick = function(){} (older method)
3. addEventListener (RECOMMENDED - multiple handlers, more control)
*/

// Example: Basic click event
let btnClick = document.getElementById("btn-click");
let clickOutput = document.getElementById("click-output");
let clickCount = 0;

btnClick.addEventListener("click", function() {
    clickCount++;
    clickOutput.textContent = `Button clicked ${clickCount} time(s)!`;
    console.log("Button clicked!");
});


// ============================================================
// 2. CLICK AND DOUBLE CLICK
// ============================================================

console.log("--- 2. Click and Double Click ---");

let btnDblClick = document.getElementById("btn-dblclick");

// Single click
btnDblClick.addEventListener("click", function() {
    clickOutput.textContent = "Single click detected!";
});

// Double click
btnDblClick.addEventListener("dblclick", function() {
    clickOutput.textContent = "DOUBLE CLICK detected!";
    console.log("Double click!");
});


// ============================================================
// 3. THE EVENT OBJECT
// ============================================================

console.log("--- 3. The Event Object ---");

/*
When an event occurs, JavaScript creates an Event object
containing useful information about the event.

Common properties:
- event.type: The type of event (click, keydown, etc.)
- event.target: The element that triggered the event
- event.currentTarget: The element the listener is attached to
- event.timeStamp: When the event occurred
- event.preventDefault(): Prevent default action
- event.stopPropagation(): Stop event bubbling
*/

btnClick.addEventListener("click", function(event) {
    console.log("Event object:", event);
    console.log("Event type:", event.type);
    console.log("Event target:", event.target);
    console.log("Target tag:", event.target.tagName);
});


// ============================================================
// 4. MOUSE EVENTS
// ============================================================

console.log("--- 4. Mouse Events ---");

let hoverBox = document.getElementById("hover-box");
let mouseOutput = document.getElementById("mouse-output");

// mouseenter - when mouse enters the element
hoverBox.addEventListener("mouseenter", function() {
    this.style.background = "#4caf50";
    this.style.color = "white";
    this.textContent = "Mouse is inside!";
    mouseOutput.textContent = "mouseenter triggered";
});

// mouseleave - when mouse leaves the element
hoverBox.addEventListener("mouseleave", function() {
    this.style.background = "#e0e0e0";
    this.style.color = "black";
    this.textContent = "Hover over me!";
    mouseOutput.textContent = "mouseleave triggered";
});

// mousemove - tracks mouse position
hoverBox.addEventListener("mousemove", function(event) {
    // Get position relative to the element
    let rect = this.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    mouseOutput.textContent = `Mouse position: X=${Math.round(x)}, Y=${Math.round(y)}`;
});

// mousedown and mouseup
hoverBox.addEventListener("mousedown", function() {
    this.style.transform = "scale(0.95)";
    console.log("Mouse button pressed down");
});

hoverBox.addEventListener("mouseup", function() {
    this.style.transform = "scale(1)";
    console.log("Mouse button released");
});


// ============================================================
// 5. KEYBOARD EVENTS
// ============================================================

console.log("--- 5. Keyboard Events ---");

/*
Keyboard events:
- keydown: Key is pressed down
- keyup: Key is released
- keypress: DEPRECATED, use keydown instead

Event properties:
- event.key: The key value ("a", "Enter", "Shift", etc.)
- event.code: Physical key code ("KeyA", "Enter", "ShiftLeft")
- event.keyCode: DEPRECATED numeric code
- event.altKey, event.ctrlKey, event.shiftKey: Modifier keys
*/

let keyInput = document.getElementById("key-input");
let keyDisplay = document.getElementById("key-display");
let keyOutput = document.getElementById("key-output");

keyInput.addEventListener("keydown", function(event) {
    keyDisplay.textContent = `Key: "${event.key}" | Code: "${event.code}"`;
    keyOutput.textContent = `keydown - Key: ${event.key}, Code: ${event.code}`;
    
    // Check for modifier keys
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault(); // Prevent browser save
        keyOutput.textContent = "Ctrl+S pressed! (prevented browser save)";
    }
    
    // Check for Enter key
    if (event.key === "Enter") {
        keyOutput.textContent = "Enter pressed! Form would submit.";
    }
    
    // Check for Escape key
    if (event.key === "Escape") {
        keyOutput.textContent = "Escape pressed!";
        this.value = "";
    }
    
    console.log("Key pressed:", event.key, "Code:", event.code);
});

keyInput.addEventListener("keyup", function(event) {
    console.log("Key released:", event.key);
});


// ============================================================
// 6. INPUT EVENTS
// ============================================================

console.log("--- 6. Input Events ---");

/*
Input events:
- input: Fires immediately when value changes
- change: Fires when value changes AND element loses focus
*/

let inputDemo = document.getElementById("input-demo");
let inputDemo2 = document.getElementById("input-demo2");
let inputOutput = document.getElementById("input-output");

// input event - fires on every keystroke
inputDemo.addEventListener("input", function(event) {
    inputOutput.textContent = `input event: "${this.value}" (length: ${this.value.length})`;
    console.log("Input value:", this.value);
});

// change event - fires when focus is lost after change
inputDemo2.addEventListener("change", function(event) {
    inputOutput.textContent = `change event: Value changed to "${this.value}"`;
    console.log("Changed value:", this.value);
});


// ============================================================
// 7. FORM EVENTS
// ============================================================

console.log("--- 7. Form Events ---");

let demoForm = document.getElementById("demo-form");
let formOutput = document.getElementById("form-output");

// submit event
demoForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting
    
    // Get form data
    let formData = new FormData(this);
    let username = formData.get("username");
    let email = formData.get("email");
    
    formOutput.textContent = `Form submitted! Username: ${username}, Email: ${email}`;
    console.log("Form data:", { username, email });
});

// reset event
demoForm.addEventListener("reset", function(event) {
    formOutput.textContent = "Form was reset!";
    console.log("Form reset");
});


// ============================================================
// 8. FOCUS AND BLUR EVENTS
// ============================================================

console.log("--- 8. Focus and Blur Events ---");

/*
Focus events:
- focus: Element receives focus
- blur: Element loses focus
- focusin/focusout: Like focus/blur but bubble
*/

let focusInput = document.getElementById("focus-input");
let focusOutput = document.getElementById("focus-output");

focusInput.addEventListener("focus", function() {
    this.style.borderColor = "#007bff";
    this.style.boxShadow = "0 0 5px rgba(0,123,255,0.5)";
    focusOutput.textContent = "Input is focused!";
    console.log("Input focused");
});

focusInput.addEventListener("blur", function() {
    this.style.borderColor = "#ddd";
    this.style.boxShadow = "none";
    focusOutput.textContent = "Input lost focus (blurred)";
    console.log("Input blurred");
});


// ============================================================
// 9. EVENT DELEGATION
// ============================================================

console.log("--- 9. Event Delegation ---");

/*
Event Delegation: Instead of adding event listeners to each child,
add one listener to the parent and use event.target to identify
which child was clicked. More efficient and works with dynamic content.
*/

let colorContainer = document.getElementById("color-container");
let colorOutput = document.getElementById("color-output");

// One listener on parent handles all children
colorContainer.addEventListener("click", function(event) {
    // Check if clicked element is a color box
    if (event.target.classList.contains("color-box")) {
        let color = event.target.dataset.color;
        colorOutput.textContent = `You clicked the ${color} box!`;
        colorOutput.style.color = color;
        
        // Visual feedback
        event.target.style.transform = "scale(1.1)";
        setTimeout(() => {
            event.target.style.transform = "scale(1)";
        }, 200);
        
        console.log("Color box clicked:", color);
    }
});


// ============================================================
// 10. WINDOW AND DOCUMENT EVENTS
// ============================================================

console.log("--- 10. Window and Document Events ---");

let windowOutput = document.getElementById("window-output");

// DOMContentLoaded - fires when HTML is parsed (before images/css)
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded!");
});

// load - fires when entire page is loaded (including images)
window.addEventListener("load", function() {
    console.log("Page fully loaded (including all resources)!");
});

// resize - window is resized (throttled for performance)
let resizeTimeout;
window.addEventListener("resize", function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        windowOutput.textContent = `Window size: ${window.innerWidth} x ${window.innerHeight}`;
        console.log("Window resized:", window.innerWidth, "x", window.innerHeight);
    }, 100);
});

// scroll - page is scrolled (throttled for performance)
let scrollTimeout;
window.addEventListener("scroll", function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        windowOutput.textContent = `Scroll position: ${window.scrollY}px from top`;
        console.log("Scrolled to:", window.scrollY);
    }, 100);
});


// ============================================================
// 11. REMOVING EVENT LISTENERS
// ============================================================

console.log("--- 11. Removing Event Listeners ---");

/*
To remove an event listener, you need a reference to the 
original handler function (can't use anonymous functions).
*/

function handleClick() {
    console.log("This will only work once!");
}

// Adding
btnClick.addEventListener("click", handleClick);

// Removing
// btnClick.removeEventListener("click", handleClick);


// ============================================================
// 12. ONCE OPTION
// ============================================================

console.log("--- 12. Once Option ---");

/*
The { once: true } option automatically removes the listener
after it fires once.
*/

let onceExample = document.createElement("button");
onceExample.textContent = "Click me (only works once)";
onceExample.className = "btn-warning";
document.querySelector(".demo-section").appendChild(onceExample);

onceExample.addEventListener("click", function() {
    alert("This alert will only appear once!");
    console.log("Once event fired!");
}, { once: true });


// ============================================================
// 13. PASSIVE OPTION
// ============================================================

console.log("--- 13. Passive Option ---");

/*
{ passive: true } tells the browser that the handler won't 
call preventDefault(). Improves scroll performance.
*/

document.addEventListener("touchstart", function(event) {
    // Handle touch
}, { passive: true });


// ============================================================
// 14. EVENT BUBBLING AND CAPTURING
// ============================================================

console.log("--- 14. Event Bubbling and Capturing ---");

/*
Event Propagation has 3 phases:
1. Capturing: Event travels DOWN from window to target
2. Target: Event reaches the target element
3. Bubbling: Event travels UP from target to window

By default, listeners fire in bubbling phase.
Use { capture: true } for capturing phase.
*/

// Create demo elements
let outer = document.createElement("div");
outer.id = "outer";
outer.style.cssText = "padding: 20px; background: #ffcdd2; margin: 10px;";
outer.textContent = "Outer (parent)";

let inner = document.createElement("div");
inner.id = "inner";
inner.style.cssText = "padding: 20px; background: #c8e6c9;";
inner.textContent = "Inner (child) - Click me!";

outer.appendChild(inner);
document.querySelector(".demo-section").appendChild(outer);

// Bubbling (default)
outer.addEventListener("click", function(e) {
    console.log("Outer clicked (bubbling)");
});

inner.addEventListener("click", function(e) {
    console.log("Inner clicked (bubbling)");
    // Uncomment to stop bubbling:
    // e.stopPropagation();
});


// ============================================================
// 15. PREVENT DEFAULT
// ============================================================

console.log("--- 15. Prevent Default ---");

/*
event.preventDefault() stops the default browser action:
- <a> links: Stops navigation
- <form>: Stops form submission
- Right-click: Stops context menu
- Drag: Stops default drag behavior
*/

// Example: Custom link behavior
let customLink = document.createElement("a");
customLink.href = "https://google.com";
customLink.textContent = "Click me (prevented)";
customLink.style.cssText = "display: block; margin: 10px; color: blue;";
document.querySelector(".demo-section").appendChild(customLink);

customLink.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Link click prevented! Would have gone to:", this.href);
    alert("Navigation prevented!");
});


// ============================================================
// 16. CUSTOM EVENTS
// ============================================================

console.log("--- 16. Custom Events ---");

/*
You can create and dispatch custom events.
Useful for component communication.
*/

// Create custom event
let customEvent = new CustomEvent("userLogin", {
    detail: {
        username: "john_doe",
        timestamp: Date.now()
    }
});

// Listen for custom event
document.addEventListener("userLogin", function(event) {
    console.log("Custom event received!");
    console.log("Username:", event.detail.username);
    console.log("Timestamp:", event.detail.timestamp);
});

// Dispatch custom event
// document.dispatchEvent(customEvent);
console.log("Custom event created (dispatch to trigger)");


// ============================================================
// 17. PRACTICAL EXAMPLES
// ============================================================

console.log("\n--- 17. Practical Examples ---");

// Example 1: Debounce function (limit how often a function runs)
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Example 2: Throttle function (run at most once per interval)
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Example 3: Click outside to close
function setupClickOutside(element, callback) {
    document.addEventListener("click", function(event) {
        if (!element.contains(event.target)) {
            callback();
        }
    });
}

// Example 4: Keyboard shortcuts
function setupShortcuts(shortcuts) {
    document.addEventListener("keydown", function(event) {
        let key = event.key.toLowerCase();
        let combo = "";
        if (event.ctrlKey) combo += "ctrl+";
        if (event.shiftKey) combo += "shift+";
        if (event.altKey) combo += "alt+";
        combo += key;
        
        if (shortcuts[combo]) {
            event.preventDefault();
            shortcuts[combo]();
        }
    });
}

// Example usage:
// setupShortcuts({
//     "ctrl+s": () => console.log("Save!"),
//     "ctrl+shift+p": () => console.log("Command palette!")
// });

// Example 5: Long press detection
function onLongPress(element, callback, duration = 500) {
    let timer;
    
    element.addEventListener("mousedown", () => {
        timer = setTimeout(callback, duration);
    });
    
    element.addEventListener("mouseup", () => {
        clearTimeout(timer);
    });
    
    element.addEventListener("mouseleave", () => {
        clearTimeout(timer);
    });
}

console.log("Practical helper functions created!");

console.log("\n=== End of Event Listeners ===");
