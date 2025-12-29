/**
 * ============================================
 * CONTACT FORM - JavaScript Handling
 * Practice File for DOM List Creation & Inline Handlers
 * ============================================
 * 
 * TECHNIQUES DEMONSTRATED:
 * - Inline onclick handlers (in HTML)
 * - getElementById + addEventListener
 * - querySelector + addEventListener
 * - Dynamic DOM list/div creation
 * - File input handling
 */

// ============================================
// INLINE HANDLER FUNCTIONS (Called from HTML)
// ============================================
// These would be called if you add onclick="functionName()" in HTML

/**
 * Inline handler for name input
 * Add to HTML: oninput="handleNameInput(this)"
 */
function handleNameInput(element) {
    console.log('📝 [INLINE] Name typed:', element.value);
}

/**
 * Inline handler for buttons
 * Add to HTML: onclick="handleButtonClick('buttonName')"
 */
function handleButtonClick(buttonName) {
    console.log('🔘 [INLINE] Button clicked:', buttonName);
}


// ============================================
// WAIT FOR DOM TO LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    console.log('✅ Contact Form JS Loaded');
    console.log('='.repeat(50));


    // ============================================
    // GET DOM ELEMENTS
    // ============================================

    const form = document.querySelector('form');
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const phoneInput = document.getElementById('contact-phone');
    const subjectSelect = document.getElementById('contact-subject');
    const messageTextarea = document.getElementById('contact-message');
    const attachmentInput = document.getElementById('contact-attachment');


    // ============================================
    // FILE ATTACHMENT HANDLING
    // getElementById + addEventListener
    // ============================================

    /**
     * Handle file attachment selection
     * Display file information when user selects a file
     */
    document.getElementById('contact-attachment').addEventListener('change', function (event) {
        console.log('📁 [change] File attachment changed');

        const filesArray = Array.from(event.target.files);

        if (filesArray.length === 0) {
            console.log('   No file selected');
            return;
        }

        filesArray.forEach((file, index) => {
            const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
            const sizeKB = (file.size / 1024).toFixed(2);

            console.log(`   File ${index + 1}:`);
            console.log(`   - Name: ${file.name}`);
            console.log(`   - Size: ${sizeKB} KB (${sizeMB} MB)`);
            console.log(`   - Type: ${file.type || 'unknown'}`);
            console.log(`   - Last Modified: ${new Date(file.lastModified).toLocaleDateString()}`);
        });
    });


    // ============================================
    // RADIO BUTTON HANDLING (querySelector + addEventListener)
    // ============================================

    /**
     * Handle "How did you hear about us" radio selection
     */
    const sourceRadios = document.querySelectorAll('input[name="source"]');

    sourceRadios.forEach(function (radio) {
        radio.addEventListener('change', function (event) {
            console.log('📻 [change] Source selected:', event.target.value);
        });
    });


    // ============================================
    // CHECKBOX HANDLING
    // ============================================

    /**
     * Newsletter checkbox
     */
    document.querySelector('input[name="newsletter"]').addEventListener('change', function (e) {
        console.log('📧 [change] Newsletter subscription:', e.target.checked ? 'Yes' : 'No');
    });

    /**
     * Copy checkbox
     */
    document.querySelector('input[name="copy"]').addEventListener('change', function (e) {
        console.log('📋 [change] Send copy:', e.target.checked ? 'Yes' : 'No');
    });


    // ============================================
    // TEXT INPUT EVENTS
    // ============================================

    /**
     * Subject dropdown change event
     */
    subjectSelect.addEventListener('change', function (event) {
        const selectedValue = event.target.value;
        const selectedText = event.target.options[event.target.selectedIndex].text;

        console.log('📌 [change] Subject selected:');
        console.log('   Value:', selectedValue);
        console.log('   Text:', selectedText);
    });

    /**
     * Message textarea input event
     * Track character count
     */
    let charCount = 0;
    messageTextarea.addEventListener('input', function (event) {
        charCount = event.target.value.length;
        console.log('📝 [input] Message length:', charCount, 'characters');
    });


    // ============================================
    // FORM VALIDATION
    // ============================================

    function validateForm() {
        const errors = [];

        // Validate name
        if (!nameInput.value.trim()) {
            errors.push('Name is required');
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim()) {
            errors.push('Email is required');
        } else if (!emailPattern.test(emailInput.value)) {
            errors.push('Please enter a valid email address');
        }

        // Validate subject
        if (!subjectSelect.value) {
            errors.push('Please select a subject');
        }

        // Validate message
        if (!messageTextarea.value.trim()) {
            errors.push('Message is required');
        } else if (messageTextarea.value.trim().length < 10) {
            errors.push('Message should be at least 10 characters');
        }

        // Log validation results
        if (errors.length > 0) {
            console.log('❌ Validation Errors:');
            errors.forEach((error, i) => console.log(`   ${i + 1}. ${error}`));
            return false;
        }

        console.log('✅ All validations passed');
        return true;
    }


    // ============================================
    // FORM SUBMISSION - Display in DOM List
    // ============================================

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        console.log('\n' + '='.repeat(50));
        console.log('📨 CONTACT FORM SUBMITTED');
        console.log('='.repeat(50));

        // Validate form
        if (!validateForm()) {
            alert('Please fix the validation errors and try again.');
            return;
        }

        // Collect form data
        const formData = collectFormData();

        // Log to console
        console.log('\n📋 Contact Form Data:');
        console.log(formData);
        console.table(formData);

        // Display in DOM as a styled list/div
        displayResultsInDOM(formData);

        console.log('='.repeat(50));
    });


    // ============================================
    // DATA COLLECTION FUNCTION
    // ============================================

    function collectFormData() {
        // Get selected source radio
        const selectedSource = document.querySelector('input[name="source"]:checked');

        // Get newsletter and copy checkboxes
        const newsletter = document.querySelector('input[name="newsletter"]').checked;
        const sendCopy = document.querySelector('input[name="copy"]').checked;

        // Get subject text
        const subjectText = subjectSelect.options[subjectSelect.selectedIndex].text;

        // Get attachment info
        const attachmentInfo = getAttachmentInfo();

        return {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            phone: phoneInput.value.trim() || 'Not provided',
            subject: subjectText,
            subjectValue: subjectSelect.value,
            message: messageTextarea.value.trim(),
            messageLength: messageTextarea.value.length + ' characters',
            source: selectedSource ? selectedSource.value : 'Not specified',
            newsletter: newsletter ? 'Subscribed' : 'No',
            sendCopy: sendCopy ? 'Yes' : 'No',
            attachment: attachmentInfo,
            submittedAt: new Date().toLocaleString()
        };
    }


    // ============================================
    // GET ATTACHMENT INFO
    // ============================================

    function getAttachmentInfo() {
        const files = attachmentInput.files;

        if (files.length === 0) {
            return 'No attachment';
        }

        const file = files[0];
        const sizeKB = (file.size / 1024).toFixed(2);
        return `${file.name} (${sizeKB} KB)`;
    }


    // ============================================
    // DISPLAY RESULTS IN DOM
    // ============================================

    function displayResultsInDOM(data) {
        // Check if results container already exists
        let resultsContainer = document.getElementById('contact-results');

        if (!resultsContainer) {
            // Create new results container
            resultsContainer = document.createElement('div');
            resultsContainer.id = 'contact-results';
            resultsContainer.style.cssText = `
                margin-top: 30px;
                padding: 25px;
                background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                border-radius: 15px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            `;

            // Insert after form
            form.parentNode.insertBefore(resultsContainer, form.nextSibling);
        }

        // Build HTML content
        let htmlContent = `
            <h3 style="color: #667eea; margin-bottom: 20px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
                ✅ Message Submitted Successfully!
            </h3>
            <p style="color: #666; margin-bottom: 20px;">
                Thank you for contacting us. Here's a summary of your message:
            </p>
            <ul style="list-style: none; padding: 0; margin: 0;">
        `;

        // Create list items for each field
        const fieldLabels = {
            name: '👤 Name',
            email: '📧 Email',
            phone: '📞 Phone',
            subject: '📌 Subject',
            message: '💬 Message',
            source: '🔍 Heard About Us',
            newsletter: '📰 Newsletter',
            sendCopy: '📋 Send Copy',
            attachment: '📎 Attachment',
            submittedAt: '🕐 Submitted At'
        };

        for (const [key, value] of Object.entries(data)) {
            // Skip internal fields
            if (key === 'subjectValue' || key === 'messageLength') continue;

            const label = fieldLabels[key] || key;
            const displayValue = key === 'message'
                ? (value.length > 100 ? value.substring(0, 100) + '...' : value)
                : value;

            htmlContent += `
                <li style="
                    padding: 12px 15px;
                    margin-bottom: 8px;
                    background: white;
                    border-radius: 8px;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                ">
                    <strong style="color: #667eea; min-width: 150px;">${label}:</strong>
                    <span style="color: #333; text-align: right; flex: 1; margin-left: 15px;">${displayValue}</span>
                </li>
            `;
        }

        htmlContent += `
            </ul>
            <p style="margin-top: 20px; color: #999; font-size: 0.9rem; text-align: center;">
                Check the browser console (F12) for full data details.
            </p>
        `;

        // Set the HTML content
        resultsContainer.innerHTML = htmlContent;

        // Scroll to results
        resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });

        console.log('📊 Results displayed in DOM list');
    }


    // ============================================
    // RESET BUTTON HANDLER
    // ============================================

    const resetButton = document.querySelector('button[type="reset"]');

    resetButton.addEventListener('click', function () {
        console.log('🔄 Form reset');

        // Remove results container if exists
        const resultsContainer = document.getElementById('contact-results');
        if (resultsContainer) {
            resultsContainer.remove();
            console.log('   Results container removed');
        }
    });


    // ============================================
    // INITIALIZATION COMPLETE
    // ============================================
    console.log('📝 Contact Form Ready');
    console.log('📖 Submit the form to see results displayed in DOM');
    console.log('='.repeat(50));
});


/**
 * ============================================
 * DOM MANIPULATION METHODS USED
 * ============================================
 * 
 * document.createElement('tagName')
 *    - Creates a new HTML element
 * 
 * element.id = 'myId'
 *    - Sets the ID of an element
 * 
 * element.style.cssText = 'css properties'
 *    - Sets multiple CSS styles at once
 * 
 * element.innerHTML = 'html content'
 *    - Sets the HTML content inside an element
 * 
 * parent.insertBefore(newElement, referenceElement)
 *    - Inserts newElement before referenceElement
 * 
 * element.parentNode
 *    - Gets the parent element
 * 
 * element.nextSibling
 *    - Gets the next sibling element
 * 
 * element.remove()
 *    - Removes the element from DOM
 * 
 * element.scrollIntoView({ behavior: 'smooth' })
 *    - Smoothly scrolls element into view
 */
