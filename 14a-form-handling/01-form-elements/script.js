/**
 * ============================================
 * JAVASCRIPT FORM ELEMENTS GALLERY
 * Practice File for DOM & Event Listeners
 * ============================================
 * 
 * This file demonstrates multiple ways to:
 * 1. Select DOM elements
 * 2. Attach event listeners
 * 3. Capture form values
 * 4. Output data to console
 * 
 * EVENT LISTENER METHODS COVERED:
 * - Method 1: Inline HTML attributes (onclick, oninput, onchange)
 * - Method 2: element.onclick = function() assignment
 * - Method 3: document.getElementById().addEventListener()
 * - Method 4: Variable + addEventListener()
 * - Method 5: document.querySelector().addEventListener()
 * - Method 6: Event Delegation
 */

// ============================================
// SECTION 1: INLINE EVENT HANDLERS (Method 1)
// ============================================
// These functions are called from HTML inline attributes like:
// <input oninput="handleTextInput(this)">

/**
 * METHOD 1: Inline Event Handler
 * Called from HTML: oninput="handleTextInput(this)"
 * 'this' refers to the element that triggered the event
 */
function handleTextInput(element) {
    // 'element' is the input field itself (passed as 'this' from HTML)
    console.log('📝 [INLINE HANDLER] Text Input Value:', element.value);

    // You can also access element properties
    console.log('   Element ID:', element.id);
    console.log('   Element Type:', element.type);
}

/**
 * METHOD 1: Inline Button Click Handler
 * Called from HTML: onclick="handleButtonClick('buttonName')"
 */
function handleButtonClick(buttonName) {
    console.log('🔘 [INLINE HANDLER] Button Clicked:', buttonName);
    alert('You clicked: ' + buttonName + ' Button');
}


// ============================================
// SECTION 2: DOM CONTENT LOADED EVENT
// ============================================
// Wait for the DOM to be fully loaded before attaching event listeners
// This ensures all elements exist before we try to access them

document.addEventListener('DOMContentLoaded', function () {
    console.log('✅ DOM Content Loaded - Attaching Event Listeners...');
    console.log('='.repeat(50));

    // ============================================
    // METHOD 2: element.onclick ASSIGNMENT
    // ============================================
    // Direct assignment to element's onclick property
    // Note: This REPLACES any existing onclick handler

    /**
     * METHOD 2: Direct onclick assignment
     * Get element first, then assign function to onclick property
     */
    const emailInput = document.getElementById('input-email');

    // Assigning a function to onclick property
    emailInput.onfocus = function () {
        console.log('📧 [ONCLICK ASSIGNMENT] Email input focused');
    };

    emailInput.onblur = function () {
        console.log('📧 [ONCLICK ASSIGNMENT] Email input lost focus');
        console.log('   Value entered:', this.value);  // 'this' refers to emailInput
    };

    // Another example with password input
    const passwordInput = document.getElementById('input-password');

    passwordInput.oninput = function (event) {
        // 'event' is the Event object, 'this' is the element
        const passwordLength = this.value.length;
        console.log('🔐 [ONINPUT ASSIGNMENT] Password length:', passwordLength);

        // Simple password strength indicator
        if (passwordLength < 4) {
            console.log('   Strength: Weak ❌');
        } else if (passwordLength < 8) {
            console.log('   Strength: Medium ⚠️');
        } else {
            console.log('   Strength: Strong ✅');
        }
    };


    // ============================================
    // METHOD 3: getElementById + addEventListener
    // ============================================
    // Most common and recommended approach
    // addEventListener allows multiple handlers on same event

    /**
     * METHOD 3: getElementById with addEventListener
     * Syntax: document.getElementById('id').addEventListener('event', handler)
     */

    // Range slider - demonstrating 'input' event
    document.getElementById('input-range').addEventListener('input', function (event) {
        // Update the display span
        const rangeValue = document.getElementById('range-value');
        rangeValue.textContent = event.target.value;

        console.log('📊 [getElementById + addEventListener] Range Value:', event.target.value);
    });

    // Number input - demonstrating 'change' event (fires when user leaves field)
    document.getElementById('input-number').addEventListener('change', function (event) {
        console.log('🔢 [getElementById + addEventListener] Number Changed:', event.target.value);
    });

    // Search input - demonstrating 'keyup' event
    document.getElementById('input-search').addEventListener('keyup', function (event) {
        console.log('🔍 [keyup event] Search query:', event.target.value);
        console.log('   Key pressed:', event.key);

        // Check for Enter key
        if (event.key === 'Enter') {
            console.log('   🎯 ENTER pressed! Would trigger search...');
        }
    });


    // ============================================
    // METHOD 4: VARIABLE + addEventListener
    // ============================================
    // Store element in variable first, then add listener
    // Useful when you need to reference the element multiple times

    /**
     * METHOD 4: Store in variable, then addEventListener
     * const myElement = document.getElementById('id');
     * myElement.addEventListener('event', handler);
     */

    // Textarea - character count example
    const textareaMessage = document.getElementById('textarea-message');
    const charCountSpan = document.getElementById('char-count');

    textareaMessage.addEventListener('input', function () {
        // 'this' refers to textareaMessage
        const currentLength = this.value.length;
        charCountSpan.textContent = currentLength;

        console.log('📝 [Variable + addEventListener] Textarea length:', currentLength);

        // Warning if approaching limit
        if (currentLength > 450) {
            console.log('   ⚠️ Approaching 500 character limit!');
            charCountSpan.style.color = 'red';
        } else {
            charCountSpan.style.color = 'inherit';
        }
    });

    // Date input
    const dateInput = document.getElementById('input-date');
    dateInput.addEventListener('change', function (e) {
        console.log('📅 [Variable + addEventListener] Date selected:', e.target.value);

        // Parse the date
        const selectedDate = new Date(e.target.value);
        console.log('   Formatted:', selectedDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }));
    });

    // Time input
    const timeInput = document.getElementById('input-time');
    timeInput.addEventListener('change', function (e) {
        console.log('⏰ [Variable + addEventListener] Time selected:', e.target.value);
    });

    // Color picker
    const colorInput = document.getElementById('input-color');
    const colorValueSpan = document.getElementById('color-value');

    colorInput.addEventListener('input', function (e) {
        const selectedColor = e.target.value;
        colorValueSpan.textContent = 'Selected: ' + selectedColor;
        colorValueSpan.style.color = selectedColor;

        console.log('🎨 [Variable + addEventListener] Color selected:', selectedColor);
    });

    // File input - display file info
    const fileInput = document.getElementById('input-file');
    const fileInfoSpan = document.getElementById('file-info');

    fileInput.addEventListener('change', function (e) {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            const fileSize = (file.size / 1024).toFixed(2); // Convert to KB

            fileInfoSpan.textContent = `File: ${file.name} (${fileSize} KB)`;

            console.log('📁 [Variable + addEventListener] File selected:');
            console.log('   Name:', file.name);
            console.log('   Size:', fileSize, 'KB');
            console.log('   Type:', file.type);
        }
    });


    // ============================================
    // METHOD 5: querySelector + addEventListener
    // ============================================
    // More flexible than getElementById - can use CSS selectors

    /**
     * METHOD 5: querySelector with addEventListener
     * Syntax: document.querySelector('selector').addEventListener('event', handler)
     * 
     * querySelector - returns FIRST matching element
     * querySelectorAll - returns ALL matching elements (NodeList)
     */

    // Select by ID (same as getElementById but different syntax)
    document.querySelector('#select-country').addEventListener('change', function (e) {
        const selectedValue = e.target.value;
        const selectedText = e.target.options[e.target.selectedIndex].text;

        console.log('🌍 [querySelector] Country selected:');
        console.log('   Value:', selectedValue);
        console.log('   Text:', selectedText);
    });

    // Datalist input
    document.querySelector('#input-datalist').addEventListener('change', function (e) {
        console.log('🌐 [querySelector] Browser selected:', e.target.value);
    });

    // URL input with focus/blur events
    document.querySelector('#input-url').addEventListener('focus', function () {
        console.log('🔗 [querySelector] URL input focused');
    });

    document.querySelector('#input-url').addEventListener('blur', function (e) {
        if (e.target.value) {
            console.log('🔗 [querySelector] URL entered:', e.target.value);

            // Simple URL validation
            try {
                new URL(e.target.value);
                console.log('   ✅ Valid URL');
            } catch {
                console.log('   ❌ Invalid URL format');
            }
        }
    });


    // ============================================
    // METHOD 6: EVENT DELEGATION
    // ============================================
    // Attach ONE listener to a parent element
    // Handle events from child elements using event.target
    // More efficient for many similar elements

    /**
     * METHOD 6: Event Delegation
     * Attach listener to parent, check event.target for specific children
     * Great for dynamically added elements or many similar elements
     */

    // Listen for all checkbox changes in the interests group
    const interestsGroup = document.getElementById('interests-group');

    interestsGroup.addEventListener('change', function (event) {
        // event.target is the actual checkbox that was clicked
        if (event.target.type === 'checkbox') {
            const isChecked = event.target.checked;
            const interestValue = event.target.value;

            console.log('☑️ [EVENT DELEGATION] Checkbox changed:');
            console.log('   Interest:', interestValue);
            console.log('   Checked:', isChecked);

            // Get all checked interests
            const allChecked = interestsGroup.querySelectorAll('input:checked');
            const checkedValues = Array.from(allChecked).map(cb => cb.value);
            console.log('   All selected:', checkedValues);
        }
    });

    // Event delegation for variant buttons
    const variantButtons = document.getElementById('variant-buttons');

    variantButtons.addEventListener('click', function (event) {
        // Check if clicked element is a button
        if (event.target.tagName === 'BUTTON') {
            const variant = event.target.dataset.variant;  // data-variant attribute
            console.log('🎨 [EVENT DELEGATION] Button variant clicked:', variant);
        }
    });

    // Event delegation for radio buttons (gender)
    document.querySelector('.radio-group').addEventListener('change', function (event) {
        if (event.target.type === 'radio') {
            console.log('🔘 [EVENT DELEGATION] Radio selected:', event.target.value);
        }
    });


    // ============================================
    // FORM SUBMISSION HANDLING
    // ============================================

    const demoForm = document.getElementById('demo-form');
    const resultsContainer = document.getElementById('results-container');
    const resultsOutput = document.getElementById('results-output');

    demoForm.addEventListener('submit', function (event) {
        // Prevent the form from actually submitting (no page reload)
        event.preventDefault();

        console.log('📨 [FORM SUBMIT] Form submitted!');
        console.log('='.repeat(50));

        // Collect all form values
        const formData = {
            name: document.getElementById('demo-name').value,
            email: document.getElementById('demo-email').value,
            textInput: document.getElementById('input-text').value,
            password: document.getElementById('input-password').value.length + ' characters',
            phone: document.getElementById('input-tel').value,
            url: document.getElementById('input-url').value,
            number: document.getElementById('input-number').value,

            date: document.getElementById('input-date').value,
            time: document.getElementById('input-time').value,
            country: document.getElementById('select-country').value,
            color: document.getElementById('input-color').value,
            message: document.getElementById('textarea-message').value
        };

        // Get all checked checkboxes for interests
        const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked'))
            .map(cb => cb.value);
        formData.interests = interests;

        // Get selected gender
        const selectedGender = document.querySelector('input[name="gender"]:checked');
        formData.gender = selectedGender ? selectedGender.value : 'not selected';

        // Get selected subscription
        const selectedSub = document.querySelector('input[name="subscription"]:checked');
        formData.subscription = selectedSub ? selectedSub.value : 'not selected';

        // Log to console in different formats
        console.log('📋 Form Data Object:');
        console.log(formData);

        console.log('\n📊 Console Table View:');
        console.table(formData);

        // Display results in DOM
        resultsContainer.style.display = 'block';
        resultsOutput.innerHTML = `
            <strong>Form Data Captured:</strong><br>
            <code style="white-space: pre-wrap;">${JSON.stringify(formData, null, 2)}</code>
            <br><br>
            <em>Check the browser console (F12) for detailed output!</em>
        `;

        console.log('='.repeat(50));
        console.log('✅ All values logged above. Scroll up to see all events!');
    });

    // Reset button handling
    demoForm.addEventListener('reset', function () {
        console.log('🔄 [FORM RESET] Form was reset');
        resultsContainer.style.display = 'none';

        // Reset range display
        document.getElementById('range-value').textContent = '50';

        // Reset character count
        charCountSpan.textContent = '0';

        // Reset color display
        colorValueSpan.textContent = 'Selected: #667eea';
        colorValueSpan.style.color = '#667eea';

        // Reset file info
        fileInfoSpan.textContent = '';
    });


    // ============================================
    // ADDITIONAL EVENT EXAMPLES
    // ============================================

    // Mouse events on button sizes
    const btnSmall = document.getElementById('btn-small');

    btnSmall.addEventListener('mouseenter', function () {
        console.log('🐭 [mouseenter] Mouse entered small button');
    });

    btnSmall.addEventListener('mouseleave', function () {
        console.log('🐭 [mouseleave] Mouse left small button');
    });

    // Double-click event
    document.getElementById('btn-default').addEventListener('dblclick', function () {
        console.log('🖱️ [dblclick] Default button double-clicked!');
        alert('You double-clicked!');
    });

    // Keydown event on tel input
    document.getElementById('input-tel').addEventListener('keydown', function (e) {
        console.log('⌨️ [keydown] Key pressed:', e.key, 'Code:', e.code);

        // Allow only numbers, spaces, and special characters for phone
        const allowedChars = /[0-9+\-() ]/;
        if (!allowedChars.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab' && e.key !== 'Delete') {
            console.log('   ❌ Character not allowed for phone number');
            // Uncomment below to actually prevent the character
            // e.preventDefault();
        }
    });


    // ============================================
    // DEMONSTRATION COMPLETE
    // ============================================
    console.log('='.repeat(50));
    console.log('🎉 All event listeners attached successfully!');
    console.log('📖 Try interacting with the form elements above.');
    console.log('👀 Watch this console for event outputs.');
    console.log('='.repeat(50));
});


// ============================================
// ADDITIONAL NOTES
// ============================================
/*
 * KEY DIFFERENCES BETWEEN METHODS:
 * 
 * 1. INLINE HANDLERS (onclick="...")
 *    ✅ Simple and visible in HTML
 *    ❌ Mixes JavaScript with HTML (not recommended for large projects)
 *    ❌ Only one handler per event
 * 
 * 2. PROPERTY ASSIGNMENT (element.onclick = ...)
 *    ✅ Cleaner than inline
 *    ❌ Still only one handler per event (replaces previous)
 *    ❌ Can accidentally overwrite existing handlers
 * 
 * 3. addEventListener (RECOMMENDED)
 *    ✅ Multiple handlers for same event
 *    ✅ Clean separation of HTML and JavaScript
 *    ✅ Can use event capturing/bubbling options
 *    ✅ Can remove listeners with removeEventListener
 * 
 * EVENT OBJECT PROPERTIES:
 *    event.target - The element that triggered the event
 *    event.currentTarget - The element the listener is attached to
 *    event.type - The type of event (click, input, etc.)
 *    event.preventDefault() - Stop default behavior
 *    event.stopPropagation() - Stop event bubbling
 * 
 * COMMON EVENTS:
 *    click - Element clicked
 *    dblclick - Element double-clicked
 *    input - Value changed (fires on each character)
 *    change - Value changed (fires when user leaves field)
 *    focus - Element receives focus
 *    blur - Element loses focus
 *    keydown - Key pressed down
 *    keyup - Key released
 *    submit - Form submitted
 *    reset - Form reset
 *    mouseenter - Mouse enters element
 *    mouseleave - Mouse leaves element
 */
