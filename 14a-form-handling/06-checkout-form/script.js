/**
 * ============================================
 * CHECKOUT FORM - JavaScript Handling
 * Practice File for Complex Forms & Event Delegation
 * ============================================
 * 
 * TECHNIQUES DEMONSTRATED:
 * - getElementById + addEventListener
 * - Variable + addEventListener
 * - Event delegation for grouped elements
 * - Multi-section form handling
 * - Credit card formatting
 * - DOM table display for order summary
 */

// ============================================
// WAIT FOR DOM TO LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    console.log('✅ Checkout Form JS Loaded');
    console.log('='.repeat(50));


    // ============================================
    // GET DOM ELEMENTS
    // ============================================

    const form = document.querySelector('form');

    // Billing fields
    const billingName = document.getElementById('billing-name');
    const billingEmail = document.getElementById('billing-email');
    const billingPhone = document.getElementById('billing-phone');
    const billingAddress1 = document.getElementById('billing-address1');
    const billingAddress2 = document.getElementById('billing-address2');
    const billingCity = document.getElementById('billing-city');
    const billingState = document.getElementById('billing-state');
    const billingZip = document.getElementById('billing-zip');
    const billingCountry = document.getElementById('billing-country');

    // Payment fields
    const cardNumber = document.getElementById('card-number');
    const cardExpiryMonth = document.getElementById('card-expiry-month');
    const cardExpiryYear = document.getElementById('card-expiry-year');
    const cardCvv = document.getElementById('card-cvv');
    const cardholderName = document.getElementById('cardholder-name');

    // Other elements
    const sameAsBillingCheckbox = document.querySelector('input[name="same-as-billing"]');
    const termsCheckbox = document.querySelector('input[name="terms"]');
    const saveInfoCheckbox = document.querySelector('input[name="save-info"]');
    const orderNotes = document.getElementById('order-notes');


    // ============================================
    // CREDIT CARD NUMBER FORMATTING
    // getElementById + addEventListener
    // ============================================

    /**
     * Format credit card number with spaces every 4 digits
     * Example: 1234567890123456 -> 1234 5678 9012 3456
     */
    document.getElementById('card-number').addEventListener('input', function (event) {
        let value = event.target.value;

        // Remove all non-digit characters
        value = value.replace(/\D/g, '');

        // Limit to 16 digits
        value = value.substring(0, 16);

        // Add space every 4 digits
        let formatted = '';
        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formatted += ' ';
            }
            formatted += value[i];
        }

        // Update the input value
        event.target.value = formatted;

        // Log card type detection
        const cardType = detectCardType(value);
        console.log('💳 [input] Card number entered');
        console.log('   Digits:', value.length);
        console.log('   Card Type:', cardType);
    });

    /**
     * Detect card type based on first digits
     */
    function detectCardType(number) {
        if (/^4/.test(number)) return 'Visa';
        if (/^5[1-5]/.test(number)) return 'Mastercard';
        if (/^3[47]/.test(number)) return 'American Express';
        if (/^6(?:011|5)/.test(number)) return 'Discover';
        return 'Unknown';
    }


    // ============================================
    // CVV VALIDATION
    // ============================================

    cardCvv.addEventListener('input', function (event) {
        // Only allow digits
        let value = event.target.value.replace(/\D/g, '');

        // Limit to 4 digits (3 for most cards, 4 for Amex)
        event.target.value = value.substring(0, 4);

        console.log('🔒 [input] CVV:', value.length, 'digits');
    });


    // ============================================
    // SAME AS BILLING CHECKBOX
    // Variable + addEventListener
    // ============================================

    sameAsBillingCheckbox.addEventListener('change', function (event) {
        const isChecked = event.target.checked;

        console.log('📦 [change] Shipping same as billing:', isChecked);

        if (isChecked) {
            console.log('   Shipping fields will use billing address');
        } else {
            console.log('   User will enter separate shipping address');
        }
    });


    // ============================================
    // SHIPPING METHOD SELECTION (Event Delegation)
    // ============================================

    const shippingMethodContainer = document.querySelector('input[name="shipping-method"]').closest('.radio-group');

    /**
     * Event delegation for shipping method radios
     */
    shippingMethodContainer.addEventListener('change', function (event) {
        if (event.target.type === 'radio' && event.target.name === 'shipping-method') {
            const method = event.target.value;
            const labelText = event.target.parentElement.textContent.trim();

            console.log('🚚 [change] Shipping method selected:');
            console.log('   Value:', method);
            console.log('   Details:', labelText);

            // Calculate shipping cost
            let shippingCost = 0;
            switch (method) {
                case 'standard': shippingCost = 0; break;
                case 'express': shippingCost = 15; break;
                case 'overnight': shippingCost = 35; break;
            }
            console.log('   Cost: $' + shippingCost.toFixed(2));
        }
    });


    // ============================================
    // EXPIRY DATE VALIDATION
    // ============================================

    cardExpiryMonth.addEventListener('change', validateExpiryDate);
    cardExpiryYear.addEventListener('change', validateExpiryDate);

    function validateExpiryDate() {
        const month = parseInt(cardExpiryMonth.value);
        const year = parseInt(cardExpiryYear.value);

        if (!month || !year) return;

        const now = new Date();
        const currentMonth = now.getMonth() + 1;
        const currentYear = now.getFullYear();

        console.log('📅 [change] Expiry date:', month + '/' + year);

        if (year < currentYear || (year === currentYear && month < currentMonth)) {
            console.log('   ❌ Card has expired!');
        } else {
            console.log('   ✅ Card is valid');
        }
    }


    // ============================================
    // BILLING COUNTRY CHANGE
    // ============================================

    billingCountry.addEventListener('change', function (event) {
        const countryCode = event.target.value;
        const countryName = event.target.options[event.target.selectedIndex].text;

        console.log('🌍 [change] Country selected:', countryName, '(' + countryCode + ')');
    });


    // ============================================
    // FORM VALIDATION
    // ============================================

    function validateCheckoutForm() {
        const errors = [];

        // Billing validation
        if (!billingName.value.trim()) errors.push('Billing name is required');
        if (!billingEmail.value.trim()) errors.push('Email is required');
        if (!billingPhone.value.trim()) errors.push('Phone is required');
        if (!billingAddress1.value.trim()) errors.push('Address is required');
        if (!billingCity.value.trim()) errors.push('City is required');
        if (!billingState.value.trim()) errors.push('State is required');
        if (!billingZip.value.trim()) errors.push('ZIP code is required');
        if (!billingCountry.value) errors.push('Country is required');

        // Payment validation
        const cardDigits = cardNumber.value.replace(/\D/g, '');
        if (cardDigits.length < 15) errors.push('Valid card number is required');
        if (!cardExpiryMonth.value) errors.push('Expiry month is required');
        if (!cardExpiryYear.value) errors.push('Expiry year is required');
        if (cardCvv.value.length < 3) errors.push('Valid CVV is required');
        if (!cardholderName.value.trim()) errors.push('Cardholder name is required');

        // Terms validation
        if (!termsCheckbox.checked) errors.push('You must agree to the terms');

        if (errors.length > 0) {
            console.log('❌ Validation Errors:');
            errors.forEach((err, i) => console.log(`   ${i + 1}. ${err}`));
            return false;
        }

        console.log('✅ All validations passed');
        return true;
    }


    // ============================================
    // FORM SUBMISSION
    // ============================================

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        console.log('\n' + '='.repeat(50));
        console.log('📨 CHECKOUT FORM SUBMITTED');
        console.log('='.repeat(50));

        if (!validateCheckoutForm()) {
            alert('Please fill in all required fields correctly.');
            return;
        }

        // Collect order data
        const orderData = collectOrderData();

        // Log to console
        console.log('\n📋 Order Data:');
        console.log(orderData);
        console.table(orderData.billing);
        console.table(orderData.payment);

        // Display order summary
        displayOrderSummary(orderData);

        console.log('='.repeat(50));
    });


    // ============================================
    // DATA COLLECTION
    // ============================================

    function collectOrderData() {
        // Get shipping method
        const shippingMethod = document.querySelector('input[name="shipping-method"]:checked');

        let shippingCost = 0;
        switch (shippingMethod?.value) {
            case 'express': shippingCost = 15; break;
            case 'overnight': shippingCost = 35; break;
            default: shippingCost = 0;
        }

        return {
            billing: {
                name: billingName.value.trim(),
                email: billingEmail.value.trim(),
                phone: billingPhone.value.trim(),
                address1: billingAddress1.value.trim(),
                address2: billingAddress2.value.trim() || 'N/A',
                city: billingCity.value.trim(),
                state: billingState.value.trim(),
                zip: billingZip.value.trim(),
                country: billingCountry.options[billingCountry.selectedIndex].text
            },
            payment: {
                cardNumber: maskCardNumber(cardNumber.value),
                cardType: detectCardType(cardNumber.value.replace(/\D/g, '')),
                expiry: cardExpiryMonth.value + '/' + cardExpiryYear.value,
                cardholderName: cardholderName.value.trim()
            },
            shipping: {
                method: shippingMethod?.value || 'standard',
                sameAsBilling: sameAsBillingCheckbox.checked,
                cost: '$' + shippingCost.toFixed(2)
            },
            other: {
                orderNotes: orderNotes.value.trim() || 'None',
                saveInfo: saveInfoCheckbox.checked,
                termsAccepted: termsCheckbox.checked
            },
            orderTime: new Date().toLocaleString()
        };
    }

    /**
     * Mask card number for display (show last 4 digits only)
     */
    function maskCardNumber(cardNum) {
        const digits = cardNum.replace(/\D/g, '');
        if (digits.length < 4) return '****';
        return '**** **** **** ' + digits.slice(-4);
    }


    // ============================================
    // DISPLAY ORDER SUMMARY IN TABLE
    // ============================================

    function displayOrderSummary(data) {
        let resultsContainer = document.getElementById('order-summary');

        if (!resultsContainer) {
            resultsContainer = document.createElement('div');
            resultsContainer.id = 'order-summary';
            resultsContainer.style.cssText = `
                margin-top: 30px;
                padding: 25px;
                background: white;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            `;
            form.parentNode.insertBefore(resultsContainer, form.nextSibling);
        }

        let html = `
            <h3 style="color: #43e97b; margin-bottom: 20px; text-align: center;">
                ✅ Order Placed Successfully!
            </h3>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                    <th colspan="2" style="padding: 15px; text-align: left; border-radius: 10px 10px 0 0;">
                        📦 Billing Information
                    </th>
                </tr>
        `;

        // Billing info rows
        for (const [key, value] of Object.entries(data.billing)) {
            html += `
                <tr style="border-bottom: 1px solid #e0e5ec;">
                    <td style="padding: 12px; font-weight: 500; color: #666;">${formatKey(key)}</td>
                    <td style="padding: 12px; color: #333;">${value}</td>
                </tr>
            `;
        }

        // Payment info
        html += `
            <tr style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                <th colspan="2" style="padding: 15px; text-align: left;">
                    💳 Payment Information
                </th>
            </tr>
        `;

        for (const [key, value] of Object.entries(data.payment)) {
            html += `
                <tr style="border-bottom: 1px solid #e0e5ec;">
                    <td style="padding: 12px; font-weight: 500; color: #666;">${formatKey(key)}</td>
                    <td style="padding: 12px; color: #333;">${value}</td>
                </tr>
            `;
        }

        // Shipping info
        html += `
            <tr style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                <th colspan="2" style="padding: 15px; text-align: left;">
                    🚚 Shipping Information
                </th>
            </tr>
            <tr style="border-bottom: 1px solid #e0e5ec;">
                <td style="padding: 12px; font-weight: 500; color: #666;">Method</td>
                <td style="padding: 12px; color: #333;">${data.shipping.method}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e5ec;">
                <td style="padding: 12px; font-weight: 500; color: #666;">Cost</td>
                <td style="padding: 12px; color: #333; font-weight: bold;">${data.shipping.cost}</td>
            </tr>
            <tr>
                <td style="padding: 12px; font-weight: 500; color: #666;">Order Time</td>
                <td style="padding: 12px; color: #333;">${data.orderTime}</td>
            </tr>
        </table>
        
        <p style="text-align: center; color: #666;">
            Check the browser console (F12) for complete order details.
        </p>
        `;

        resultsContainer.innerHTML = html;
        resultsContainer.scrollIntoView({ behavior: 'smooth' });

        console.log('📊 Order summary displayed in table');
    }

    /**
     * Format camelCase key to Title Case
     */
    function formatKey(key) {
        return key.replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase());
    }


    // ============================================
    // CONTINUE SHOPPING BUTTON
    // ============================================

    const continueButton = document.querySelector('button.btn-outline');

    if (continueButton && continueButton.textContent.includes('Continue')) {
        continueButton.addEventListener('click', function () {
            console.log('🛒 Continue Shopping clicked');
            alert('Returning to shop...\n\n(This is a demo)');
        });
    }


    // ============================================
    // INITIALIZATION COMPLETE
    // ============================================
    console.log('📝 Checkout Form Ready');
    console.log('📖 Try entering a credit card number!');
    console.log('='.repeat(50));
});


/**
 * ============================================
 * CREDIT CARD VALIDATION NOTES
 * ============================================
 * 
 * CARD TYPE DETECTION (First Digits):
 * - Visa: Starts with 4
 * - Mastercard: Starts with 51-55
 * - American Express: Starts with 34 or 37
 * - Discover: Starts with 6011 or 65
 * 
 * LUHN ALGORITHM:
 * Used to validate credit card numbers
 * (Not implemented here - good exercise!)
 * 
 * CVV LENGTH:
 * - Most cards: 3 digits
 * - American Express: 4 digits
 */
