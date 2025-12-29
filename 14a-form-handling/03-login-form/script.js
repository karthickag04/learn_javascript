/**
 * ============================================
 * LOGIN FORM - JavaScript Validation
 * Practice File for Console Output & querySelector
 * ============================================
 * 
 * TECHNIQUES DEMONSTRATED:
 * - Variable + addEventListener (primary method)
 * - querySelector + addEventListener
 * - console.log() for simple output
 * - console.table() for structured data
 * - Basic form validation
 */

// ============================================
// WAIT FOR DOM TO LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    console.log('✅ Login Form JS Loaded');
    console.log('='.repeat(50));


    // ============================================
    // VARIABLE + addEventListener METHOD
    // ============================================
    // Store elements in variables, then attach listeners

    const loginForm = document.querySelector('form');
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    const rememberCheckbox = document.querySelector('input[name="remember"]');


    // ============================================
    // INPUT EVENT LISTENERS
    // ============================================

    /**
     * Email/Username input focus event
     * Using Variable + addEventListener
     */
    emailInput.addEventListener('focus', function () {
        console.log('📧 [focus] Email/Username input focused');
    });

    /**
     * Email/Username input blur event
     * Log the entered value when user leaves the field
     */
    emailInput.addEventListener('blur', function () {
        console.log('📧 [blur] Email/Username value:', this.value || '(empty)');
    });

    /**
     * Password input event
     * Show password strength as user types
     */
    passwordInput.addEventListener('input', function () {
        const length = this.value.length;
        let strength = 'None';

        if (length > 0 && length < 4) strength = 'Weak ❌';
        else if (length >= 4 && length < 8) strength = 'Medium ⚠️';
        else if (length >= 8) strength = 'Strong ✅';

        console.log('🔐 [input] Password length:', length, '| Strength:', strength);
    });

    /**
     * Remember me checkbox change event
     * Using querySelector + addEventListener
     */
    document.querySelector('input[name="remember"]').addEventListener('change', function (event) {
        console.log('☑️ [change] Remember me:', event.target.checked ? 'Enabled' : 'Disabled');
    });


    // ============================================
    // SOCIAL BUTTON CLICK HANDLERS
    // ============================================
    // Using querySelectorAll to get all social buttons

    const socialButtons = document.querySelectorAll('.social-btn');

    /**
     * Add click listeners to all social login buttons
     * Using forEach to iterate over NodeList
     */
    socialButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            // Get the button text to determine which provider
            const provider = this.textContent.replace('Continue with ', '');

            console.log('🔗 [click] Social Login Clicked:');
            console.log('   Provider:', provider);
            console.log('   Button Index:', index);

            // Simulate social login (just show an alert)
            alert('Redirecting to ' + provider + ' login...\n\n(This is a demo - no actual redirect)');
        });
    });


    // ============================================
    // VALIDATION FUNCTIONS
    // ============================================

    /**
     * Validate email/username field
     * @returns {boolean} - True if valid
     */
    function validateEmail() {
        const value = emailInput.value.trim();

        if (!value) {
            console.log('❌ Validation: Email/Username is required');
            return false;
        }

        if (value.length < 3) {
            console.log('❌ Validation: Email/Username too short');
            return false;
        }

        console.log('✅ Validation: Email/Username is valid');
        return true;
    }

    /**
     * Validate password field
     * @returns {boolean} - True if valid
     */
    function validatePassword() {
        const value = passwordInput.value;

        if (!value) {
            console.log('❌ Validation: Password is required');
            return false;
        }

        if (value.length < 4) {
            console.log('❌ Validation: Password too short (min 4 characters)');
            return false;
        }

        console.log('✅ Validation: Password is valid');
        return true;
    }


    // ============================================
    // FORM SUBMISSION
    // ============================================

    /**
     * Form submit handler
     * Using Variable + addEventListener
     */
    loginForm.addEventListener('submit', function (event) {
        // Prevent actual form submission
        event.preventDefault();

        console.log('\n' + '='.repeat(50));
        console.log('📨 LOGIN FORM SUBMITTED');
        console.log('='.repeat(50));

        // Run validations
        const emailValid = validateEmail();
        const passwordValid = validatePassword();

        if (!emailValid || !passwordValid) {
            console.log('\n❌ LOGIN FAILED - Validation errors');
            alert('Please fill in all required fields correctly.');
            return;
        }

        // Collect login data
        const loginData = {
            email: emailInput.value.trim(),
            password: '•'.repeat(passwordInput.value.length),
            passwordLength: passwordInput.value.length,
            rememberMe: rememberCheckbox ? rememberCheckbox.checked : false,
            timestamp: new Date().toLocaleString(),
            userAgent: navigator.userAgent.substring(0, 50) + '...'
        };

        // OUTPUT TO CONSOLE
        console.log('\n📋 Login Data Object:');
        console.log(loginData);

        // CONSOLE.TABLE - Shows structured data in table format
        console.log('\n📊 Console Table View:');
        console.table(loginData);

        // Additional console methods demo
        console.log('\n📝 Additional Console Methods:');
        console.info('ℹ️ Info: Login attempt recorded');
        console.warn('⚠️ Warning: This is a demo, no actual authentication');

        // Group related logs
        console.group('📦 Login Details Group');
        console.log('Email:', loginData.email);
        console.log('Remember Me:', loginData.rememberMe);
        console.log('Time:', loginData.timestamp);
        console.groupEnd();

        console.log('\n' + '='.repeat(50));
        console.log('✅ LOGIN SUCCESSFUL (Demo)');
        console.log('='.repeat(50));

        // Show success message
        alert('Login Successful!\n\nCheck the browser console (F12) to see the logged data.');
    });


    // ============================================
    // FORGOT PASSWORD LINK
    // ============================================

    /**
     * Using querySelector to find the forgot password link
     */
    const forgotPasswordLink = document.querySelector('.forgot-password a');

    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function (event) {
            event.preventDefault();

            console.log('🔑 [click] Forgot Password clicked');

            const email = emailInput.value.trim();
            if (email) {
                console.log('   Will send reset link to:', email);
                alert('Password reset link would be sent to:\n' + email);
            } else {
                console.log('   No email entered yet');
                alert('Please enter your email address first, then click Forgot Password.');
            }
        });
    }


    // ============================================
    // KEYBOARD EVENTS
    // ============================================

    /**
     * Listen for Enter key on password field to submit form
     */
    passwordInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            console.log('⌨️ [keydown] Enter pressed on password field');
            // Form will submit automatically since it's an input in a form
        }
    });

    /**
     * Listen for Escape key to clear form
     */
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            console.log('⌨️ [keydown] Escape pressed - clearing form');
            emailInput.value = '';
            passwordInput.value = '';
            if (rememberCheckbox) rememberCheckbox.checked = false;
        }
    });


    // ============================================
    // INITIALIZATION COMPLETE
    // ============================================
    console.log('📝 Login Form Ready');
    console.log('📖 Try logging in to see console output');
    console.log('💡 Press ESC to clear the form');
    console.log('='.repeat(50));
});


/**
 * ============================================
 * CONSOLE METHODS REFERENCE
 * ============================================
 * 
 * console.log()    - General logging
 * console.info()   - Informational messages
 * console.warn()   - Warning messages (yellow)
 * console.error()  - Error messages (red)
 * console.table()  - Display data in table format
 * console.group()  - Start a collapsible group
 * console.groupEnd() - End a group
 * console.time()   - Start a timer
 * console.timeEnd() - End timer and show duration
 * console.clear()  - Clear the console
 * console.count()  - Count number of calls
 * console.assert() - Log if assertion is false
 */
