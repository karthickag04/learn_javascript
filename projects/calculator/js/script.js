// ============================================================
// JAVASCRIPT CALCULATOR
// ============================================================

console.log("=== JavaScript Calculator ===\n");

/*
This calculator demonstrates:
- DOM manipulation
- Event listeners (click and keyboard)
- Data attributes
- State management
- Mathematical operations
- Input validation
*/


// ============================================================
// 1. CALCULATOR STATE
// ============================================================

// Calculator state object
const calculator = {
    currentOperand: "0",
    previousOperand: "",
    operation: null,
    shouldResetScreen: false
};


// ============================================================
// 2. DOM ELEMENTS
// ============================================================

const currentOperandDisplay = document.getElementById("current-operand");
const previousOperandDisplay = document.getElementById("previous-operand");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const equalsButton = document.getElementById("equals");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");


// ============================================================
// 3. DISPLAY FUNCTIONS
// ============================================================

function updateDisplay() {
    // Format current operand for display
    currentOperandDisplay.textContent = formatNumber(calculator.currentOperand);
    
    // Format previous operand with operation
    if (calculator.operation !== null) {
        previousOperandDisplay.textContent = 
            `${formatNumber(calculator.previousOperand)} ${getOperatorSymbol(calculator.operation)}`;
    } else {
        previousOperandDisplay.textContent = "";
    }
}

function formatNumber(number) {
    // Handle empty or just a decimal point
    if (number === "" || number === ".") return number;
    
    // Split into integer and decimal parts
    const parts = number.toString().split(".");
    const integerPart = parts[0];
    const decimalPart = parts[1];
    
    // Format integer part with commas
    const formattedInteger = parseInt(integerPart).toLocaleString("en-US");
    
    // Combine with decimal part if exists
    if (decimalPart !== undefined) {
        return `${formattedInteger}.${decimalPart}`;
    }
    return formattedInteger;
}

function getOperatorSymbol(operator) {
    const symbols = {
        "+": "+",
        "-": "−",
        "*": "×",
        "/": "÷"
    };
    return symbols[operator] || operator;
}


// ============================================================
// 4. INPUT FUNCTIONS
// ============================================================

function appendNumber(number) {
    // Reset screen if needed (after pressing =)
    if (calculator.shouldResetScreen) {
        calculator.currentOperand = "";
        calculator.shouldResetScreen = false;
    }
    
    // Prevent multiple decimal points
    if (number === "." && calculator.currentOperand.includes(".")) {
        return;
    }
    
    // Prevent leading zeros (except for decimals)
    if (calculator.currentOperand === "0" && number !== ".") {
        calculator.currentOperand = number;
    } else {
        // Limit input length
        if (calculator.currentOperand.length >= 15) return;
        calculator.currentOperand += number;
    }
    
    updateDisplay();
}

function chooseOperation(operation) {
    // If current operand is empty, just change the operation
    if (calculator.currentOperand === "") {
        calculator.operation = operation;
        updateDisplay();
        return;
    }
    
    // If there's a previous operation, calculate first
    if (calculator.previousOperand !== "") {
        calculate();
    }
    
    // Set up for next operation
    calculator.operation = operation;
    calculator.previousOperand = calculator.currentOperand;
    calculator.currentOperand = "";
    
    updateDisplay();
}


// ============================================================
// 5. CALCULATION FUNCTIONS
// ============================================================

function calculate() {
    // Can't calculate without operation or operands
    if (calculator.operation === null || calculator.previousOperand === "") {
        return;
    }
    
    // Use current operand if available, otherwise repeat previous
    const current = calculator.currentOperand === "" 
        ? calculator.previousOperand 
        : calculator.currentOperand;
    
    const prev = parseFloat(calculator.previousOperand);
    const curr = parseFloat(current);
    
    // Check for valid numbers
    if (isNaN(prev) || isNaN(curr)) {
        return;
    }
    
    let result;
    
    // Perform calculation based on operation
    switch (calculator.operation) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "*":
            result = prev * curr;
            break;
        case "/":
            // Check for division by zero
            if (curr === 0) {
                calculator.currentOperand = "Error";
                calculator.previousOperand = "";
                calculator.operation = null;
                calculator.shouldResetScreen = true;
                updateDisplay();
                return;
            }
            result = prev / curr;
            break;
        default:
            return;
    }
    
    // Format result (limit decimal places)
    calculator.currentOperand = roundResult(result);
    calculator.operation = null;
    calculator.previousOperand = "";
    calculator.shouldResetScreen = true;
    
    updateDisplay();
    console.log(`Calculated: ${prev} ${calculator.operation} ${curr} = ${result}`);
}

function roundResult(number) {
    // Round to 10 decimal places to avoid floating point issues
    const rounded = Math.round(number * 10000000000) / 10000000000;
    return rounded.toString();
}


// ============================================================
// 6. CLEAR AND DELETE FUNCTIONS
// ============================================================

function clear() {
    calculator.currentOperand = "0";
    calculator.previousOperand = "";
    calculator.operation = null;
    calculator.shouldResetScreen = false;
    updateDisplay();
    console.log("Calculator cleared");
}

function deleteDigit() {
    // Can't delete if showing error or just calculated
    if (calculator.currentOperand === "Error" || calculator.shouldResetScreen) {
        clear();
        return;
    }
    
    // Remove last character
    calculator.currentOperand = calculator.currentOperand.slice(0, -1);
    
    // Show 0 if empty
    if (calculator.currentOperand === "" || calculator.currentOperand === "-") {
        calculator.currentOperand = "0";
    }
    
    updateDisplay();
}


// ============================================================
// 7. EVENT LISTENERS - BUTTONS
// ============================================================

// Number buttons
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        appendNumber(button.dataset.number);
    });
});

// Operator buttons
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        chooseOperation(button.dataset.operator);
    });
});

// Clear button
clearButton.addEventListener("click", clear);

// Delete button
deleteButton.addEventListener("click", deleteDigit);

// Equals button
equalsButton.addEventListener("click", calculate);


// ============================================================
// 8. EVENT LISTENERS - KEYBOARD
// ============================================================

document.addEventListener("keydown", (event) => {
    // Number keys
    if ((event.key >= "0" && event.key <= "9") || event.key === ".") {
        event.preventDefault();
        appendNumber(event.key);
        highlightButton(`.number[data-number="${event.key}"]`);
    }
    
    // Operator keys
    if (["+", "-", "*", "/"].includes(event.key)) {
        event.preventDefault();
        chooseOperation(event.key);
        highlightButton(`.operator[data-operator="${event.key}"]`);
    }
    
    // Enter or = for equals
    if (event.key === "Enter" || event.key === "=") {
        event.preventDefault();
        calculate();
        highlightButton("#equals");
    }
    
    // Escape for clear
    if (event.key === "Escape") {
        event.preventDefault();
        clear();
        highlightButton("#clear");
    }
    
    // Backspace for delete
    if (event.key === "Backspace") {
        event.preventDefault();
        deleteDigit();
        highlightButton("#delete");
    }
});

// Visual feedback for keyboard input
function highlightButton(selector) {
    const button = document.querySelector(selector);
    if (button) {
        button.style.transform = "scale(0.95)";
        button.style.filter = "brightness(1.2)";
        
        setTimeout(() => {
            button.style.transform = "";
            button.style.filter = "";
        }, 100);
    }
}


// ============================================================
// 9. INITIALIZATION
// ============================================================

// Initialize display
updateDisplay();

console.log("Calculator initialized!");
console.log("Click buttons or use keyboard to calculate.");
console.log("Keyboard shortcuts:");
console.log("  - Numbers: 0-9, .");
console.log("  - Operators: +, -, *, /");
console.log("  - Enter or =: Calculate");
console.log("  - Escape: Clear");
console.log("  - Backspace: Delete last digit");
