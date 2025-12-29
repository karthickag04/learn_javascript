/**
 * ============================================
 * REGISTRATION FORM - JavaScript Validation
 * Practice File for Form Validation & DOM Table Display
 * ============================================
 * 
 * TECHNIQUES DEMONSTRATED:
 * - element.onclick assignment
 * - getElementById + addEventListener
 * - Variable + addEventListener
 * - Form validation patterns
 * - Dynamic DOM table creation
 * - Real-time input validation
 */

// ============================================
// WAIT FOR DOM TO LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    console.log('✅ Registration Form JS Loaded');

    // ============================================
    // GET DOM ELEMENT REFERENCES (Variable Method)
    // ============================================
    // Storing elements in variables for reuse

    const form = document.getElementById('registration-form');
    const fullnameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const dobInput = document.getElementById('dob');
    const countrySelect = document.getElementById('country');
    const termsCheckbox = document.getElementById('terms');
    const resultsSection = document.getElementById('results-section');
    const resultsBody = document.getElementById('results-body');


    // ============================================
    // VALIDATION HELPER FUNCTIONS
    // ============================================

    /**
     * Show error message for a field
     * @param {string} fieldId - The input field ID
     * @param {string} message - Error message to display
     */
    function showError(fieldId, message) {
        const errorSpan = document.getElementById(fieldId + '-error');
        const inputField = document.getElementById(fieldId);

        if (errorSpan) {
            errorSpan.textContent = message;
            errorSpan.style.display = 'block';
        }

        if (inputField) {
            inputField.classList.add('input-error');
            inputField.classList.remove('input-success');
        }

        console.log('❌ Validation Error:', fieldId, '-', message);
    }

    /**
     * Clear error message for a field
     * @param {string} fieldId - The input field ID
     */
    function clearError(fieldId) {
        const errorSpan = document.getElementById(fieldId + '-error');
        const inputField = document.getElementById(fieldId);

        if (errorSpan) {
            errorSpan.style.display = 'none';
        }

        if (inputField) {
            inputField.classList.remove('input-error');
        }
    }

    /**
     * Mark field as valid
     * @param {string} fieldId - The input field ID
     */
    function markValid(fieldId) {
        const inputField = document.getElementById(fieldId);
        if (inputField) {
            inputField.classList.remove('input-error');
            inputField.classList.add('input-success');
        }
    }


    // ============================================
    // INDIVIDUAL FIELD VALIDATORS
    // ============================================

    /**
     * Validate full name
     * Rules: Required, minimum 2 characters
     */
    function validateFullname() {
        const value = fullnameInput.value.trim();

        if (!value) {
            showError('fullname', 'Full name is required');
            return false;
        }

        if (value.length < 2) {
            showError('fullname', 'Name must be at least 2 characters');
            return false;
        }

        clearError('fullname');
        markValid('fullname');
        console.log('✅ Fullname valid:', value);
        return true;
    }

    /**
     * Validate email address
     * Rules: Required, valid email format
     */
    function validateEmail() {
        const value = emailInput.value.trim();
        // Regex pattern for email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!value) {
            showError('email', 'Email is required');
            return false;
        }

        if (!emailPattern.test(value)) {
            showError('email', 'Please enter a valid email address');
            return false;
        }

        clearError('email');
        markValid('email');
        console.log('✅ Email valid:', value);
        return true;
    }

    /**
     * Validate username
     * Rules: Required, min 3 chars, only letters/numbers/underscores
     */
    function validateUsername() {
        const value = usernameInput.value.trim();
        // Regex: only letters, numbers, and underscores
        const usernamePattern = /^[A-Za-z0-9_]+$/;

        if (!value) {
            showError('username', 'Username is required');
            return false;
        }

        if (value.length < 3) {
            showError('username', 'Username must be at least 3 characters');
            return false;
        }

        if (!usernamePattern.test(value)) {
            showError('username', 'Only letters, numbers, and underscores allowed');
            return false;
        }

        clearError('username');
        markValid('username');
        console.log('✅ Username valid:', value);
        return true;
    }

    /**
     * Validate password
     * Rules: Required, min 8 chars, must have letter and number
     */
    function validatePassword() {
        const value = passwordInput.value;

        if (!value) {
            showError('password', 'Password is required');
            return false;
        }

        if (value.length < 8) {
            showError('password', 'Password must be at least 8 characters');
            return false;
        }

        // Check for at least one letter and one number
        const hasLetter = /[a-zA-Z]/.test(value);
        const hasNumber = /[0-9]/.test(value);

        if (!hasLetter || !hasNumber) {
            showError('password', 'Password must contain letters and numbers');
            return false;
        }

        clearError('password');
        markValid('password');
        console.log('✅ Password valid');
        return true;
    }

    /**
     * Validate password confirmation
     * Rules: Must match password
     */
    function validateConfirmPassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (!confirmPassword) {
            showError('confirm-password', 'Please confirm your password');
            return false;
        }

        if (password !== confirmPassword) {
            showError('confirm-password', 'Passwords do not match');
            return false;
        }

        clearError('confirm-password');
        markValid('confirm-password');
        console.log('✅ Password confirmation matches');
        return true;
    }

    /**
     * Validate date of birth
     * Rules: Required, must be in the past, user must be at least 13
     */
    function validateDOB() {
        const value = dobInput.value;

        if (!value) {
            showError('dob', 'Date of birth is required');
            return false;
        }

        const selectedDate = new Date(value);
        const today = new Date();

        if (selectedDate >= today) {
            showError('dob', 'Date of birth must be in the past');
            return false;
        }

        // Calculate age
        const age = Math.floor((today - selectedDate) / (365.25 * 24 * 60 * 60 * 1000));

        if (age < 13) {
            showError('dob', 'You must be at least 13 years old');
            return false;
        }

        clearError('dob');
        markValid('dob');
        console.log('✅ DOB valid, Age:', age);
        return true;
    }

    /**
     * Validate country selection
     * Rules: Required
     */
    function validateCountry() {
        const value = countrySelect.value;

        if (!value) {
            showError('country', 'Please select a country');
            return false;
        }

        clearError('country');
        markValid('country');
        console.log('✅ Country valid:', value);
        return true;
    }

    /**
     * Validate gender selection
     * Rules: Required
     */
    function validateGender() {
        const selectedGender = document.querySelector('input[name="gender"]:checked');

        if (!selectedGender) {
            showError('gender', 'Please select a gender');
            return false;
        }

        clearError('gender');
        console.log('✅ Gender valid:', selectedGender.value);
        return true;
    }

    /**
     * Validate terms checkbox
     * Rules: Must be checked
     */
    function validateTerms() {
        if (!termsCheckbox.checked) {
            showError('terms', 'You must agree to the Terms and Conditions');
            return false;
        }

        clearError('terms');
        console.log('✅ Terms accepted');
        return true;
    }


    // ============================================
    // REAL-TIME VALIDATION (Variable + addEventListener)
    // ============================================
    // Validate fields as user types/changes them

    fullnameInput.addEventListener('blur', validateFullname);
    fullnameInput.addEventListener('input', function () {
        if (this.value.length >= 2) validateFullname();
    });

    emailInput.addEventListener('blur', validateEmail);
    emailInput.addEventListener('input', function () {
        if (this.value.includes('@')) validateEmail();
    });

    usernameInput.addEventListener('blur', validateUsername);
    usernameInput.addEventListener('input', function () {
        if (this.value.length >= 3) validateUsername();
    });

    passwordInput.addEventListener('blur', validatePassword);
    passwordInput.addEventListener('input', function () {
        if (this.value.length >= 8) validatePassword();
        // Also revalidate confirm password if it has a value
        if (confirmPasswordInput.value) validateConfirmPassword();
    });

    confirmPasswordInput.addEventListener('blur', validateConfirmPassword);
    confirmPasswordInput.addEventListener('input', function () {
        if (this.value) validateConfirmPassword();
    });

    dobInput.addEventListener('change', validateDOB);
    countrySelect.addEventListener('change', validateCountry);

    // Using getElementById + addEventListener for terms
    document.getElementById('terms').addEventListener('change', validateTerms);

    // Event delegation for gender radio buttons
    document.getElementById('gender-group').addEventListener('change', function (event) {
        if (event.target.type === 'radio') {
            validateGender();
        }
    });


    // ============================================
    // FORM SUBMISSION (Variable + addEventListener)
    // ============================================

    form.addEventListener('submit', function (event) {
        // Prevent default form submission
        event.preventDefault();

        console.log('📨 Form submission attempted...');
        console.log('='.repeat(50));

        // Run all validations
        const validations = [
            validateFullname(),
            validateEmail(),
            validateUsername(),
            validatePassword(),
            validateConfirmPassword(),
            validateDOB(),
            validateCountry(),
            validateGender(),
            validateTerms()
        ];

        // Check if all validations passed
        const isValid = validations.every(v => v === true);

        if (!isValid) {
            console.log('❌ Form validation failed');
            console.log('='.repeat(50));
            return;
        }

        console.log('✅ All validations passed!');

        // Collect form data
        const formData = collectFormData();

        // Log to console
        console.log('\n📋 Registration Data:');
        console.log(formData);
        console.table(formData);

        // Display in DOM table
        displayInTable(formData);

        console.log('='.repeat(50));
        console.log('✅ Registration complete! Data displayed in table.');
    });


    // ============================================
    // DATA COLLECTION FUNCTION
    // ============================================

    function collectFormData() {
        // Get selected gender
        const selectedGender = document.querySelector('input[name="gender"]:checked');

        // Get all selected interests
        const interests = Array.from(
            document.querySelectorAll('input[name="interests"]:checked')
        ).map(cb => cb.value);

        // Get newsletter preference
        const newsletter = document.getElementById('newsletter').checked;

        // Calculate age from DOB
        const dob = new Date(dobInput.value);
        const age = Math.floor((new Date() - dob) / (365.25 * 24 * 60 * 60 * 1000));

        // Get country display text
        const countryText = countrySelect.options[countrySelect.selectedIndex].text;

        return {
            'Full Name': fullnameInput.value.trim(),
            'Email': emailInput.value.trim(),
            'Username': usernameInput.value.trim(),
            'Password': '••••••••' + ' (' + passwordInput.value.length + ' characters)',
            'Date of Birth': dobInput.value,
            'Age': age + ' years old',
            'Country': countryText,
            'Gender': selectedGender ? selectedGender.value : 'Not specified',
            'Interests': interests.length > 0 ? interests.join(', ') : 'None selected',
            'Newsletter': newsletter ? 'Yes' : 'No',
            'Terms Accepted': 'Yes',
            'Registration Time': new Date().toLocaleString()
        };
    }


    // ============================================
    // DOM TABLE DISPLAY FUNCTION
    // ============================================

    function displayInTable(data) {
        // Clear previous results
        resultsBody.innerHTML = '';

        // Create table rows for each data field
        for (const [field, value] of Object.entries(data)) {
            // Create table row element
            const row = document.createElement('tr');

            // Create field name cell
            const fieldCell = document.createElement('td');
            fieldCell.innerHTML = '<strong>' + field + '</strong>';

            // Create value cell
            const valueCell = document.createElement('td');
            valueCell.textContent = value;

            // Append cells to row
            row.appendChild(fieldCell);
            row.appendChild(valueCell);

            // Append row to table body
            resultsBody.appendChild(row);
        }

        // Show results section
        resultsSection.style.display = 'block';

        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth' });

        console.log('📊 Table populated with', Object.keys(data).length, 'fields');
    }


    // ============================================
    // FORM RESET HANDLER (element.onclick assignment)
    // ============================================

    // Using onclick property assignment method
    const resetButton = document.querySelector('button[type="reset"]');

    resetButton.onclick = function () {
        console.log('🔄 Form reset clicked');

        // Hide results section
        resultsSection.style.display = 'none';

        // Clear all error messages and styling
        const errorSpans = document.querySelectorAll('.validation-error');
        errorSpans.forEach(span => span.style.display = 'none');

        const allInputs = document.querySelectorAll('input, select');
        allInputs.forEach(input => {
            input.classList.remove('input-error', 'input-success');
        });

        console.log('✅ Form cleared and reset');
    };


    // ============================================
    // INITIALIZATION COMPLETE
    // ============================================
    console.log('='.repeat(50));
    console.log('📝 Registration Form Ready');
    console.log('📖 Fill out the form and submit to see validation');
    console.log('='.repeat(50));
});


/**
 * ============================================
 * VALIDATION PATTERNS SUMMARY
 * ============================================
 * 
 * 1. REQUIRED FIELD CHECK:
 *    if (!value) { showError(); return false; }
 * 
 * 2. MINIMUM LENGTH:
 *    if (value.length < minLength) { showError(); return false; }
 * 
 * 3. REGEX PATTERN MATCH:
 *    const pattern = /regex/;
 *    if (!pattern.test(value)) { showError(); return false; }
 * 
 * 4. FIELD COMPARISON:
 *    if (value1 !== value2) { showError(); return false; }
 * 
 * 5. DATE VALIDATION:
 *    const date = new Date(value);
 *    if (date >= today) { showError(); return false; }
 * 
 * 6. CHECKBOX REQUIRED:
 *    if (!checkbox.checked) { showError(); return false; }
 * 
 * 7. RADIO REQUIRED:
 *    const selected = document.querySelector('input[name="x"]:checked');
 *    if (!selected) { showError(); return false; }
 * 
 * 8. SELECT REQUIRED:
 *    if (!select.value) { showError(); return false; }
 */
