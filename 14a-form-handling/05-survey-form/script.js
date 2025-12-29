/**
 * ============================================
 * SURVEY FORM - JavaScript Handling
 * Practice File for Range Slider & Multiple Selections
 * ============================================
 * 
 * TECHNIQUES DEMONSTRATED:
 * - element.onclick property assignment
 * - Variable + addEventListener
 * - querySelector + addEventListener
 * - Real-time range slider updates
 * - Multiple checkbox handling
 * - Displaying results in summary list
 */

// ============================================
// WAIT FOR DOM TO LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    console.log('✅ Survey Form JS Loaded');
    console.log('='.repeat(50));


    // ============================================
    // GET DOM ELEMENTS (Variable Method)
    // ============================================

    const form = document.querySelector('form');
    const nameInput = document.getElementById('survey-name');
    const emailInput = document.getElementById('survey-email');
    const ageRangeSelect = document.getElementById('age-range');
    const recommendationSlider = document.getElementById('recommendation');
    const serviceQualitySelect = document.getElementById('service-quality');
    const improvementTextarea = document.getElementById('improvement');
    const additionalCommentsTextarea = document.getElementById('additional-comments');


    // ============================================
    // RANGE SLIDER - Real-time Update
    // element.oninput property assignment
    // ============================================

    /**
     * Display element for recommendation value
     * We need to create this since it might not exist in HTML
     */
    let sliderValueDisplay = document.querySelector('#recommendation + div span:first-of-type');

    // Create a value display if it doesn't exist
    const sliderContainer = recommendationSlider.parentElement;
    let valueIndicator = document.createElement('div');
    valueIndicator.id = 'slider-value-indicator';
    valueIndicator.style.cssText = `
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        color: #667eea;
        margin: 10px 0;
    `;
    valueIndicator.textContent = recommendationSlider.value;
    sliderContainer.insertBefore(valueIndicator, recommendationSlider.nextSibling);

    /**
     * Using oninput property assignment (Method 2)
     * Updates in real-time as slider moves
     */
    recommendationSlider.oninput = function (event) {
        const value = event.target.value;
        valueIndicator.textContent = value;

        // Change color based on value
        if (value <= 3) {
            valueIndicator.style.color = '#f5576c';  // Red for low
        } else if (value <= 6) {
            valueIndicator.style.color = '#ffa500';  // Orange for medium
        } else {
            valueIndicator.style.color = '#43e97b';  // Green for high
        }

        console.log('📊 [oninput] Recommendation score:', value);
    };

    /**
     * Using onchange for when slider stops moving
     */
    recommendationSlider.onchange = function (event) {
        console.log('📊 [onchange] Final recommendation score:', event.target.value);
    };


    // ============================================
    // SATISFACTION RADIO BUTTONS
    // Variable + addEventListener
    // ============================================

    const satisfactionRadios = document.querySelectorAll('input[name="satisfaction"]');

    satisfactionRadios.forEach(function (radio) {
        radio.addEventListener('change', function (event) {
            const value = event.target.value;
            const emoji = this.parentElement.textContent.match(/[😄🙂😐🙁😞]/)?.[0] || '';

            console.log('😊 [change] Satisfaction level:', value);
            console.log('   Emoji:', emoji);
        });
    });


    // ============================================
    // FEATURES CHECKBOXES - Multiple Selection
    // querySelector + addEventListener with Event Delegation
    // ============================================

    const featuresContainer = document.querySelector('.checkbox-group');

    /**
     * Event delegation for all feature checkboxes
     */
    featuresContainer.addEventListener('change', function (event) {
        if (event.target.type === 'checkbox' && event.target.name === 'features') {
            const feature = event.target.parentElement.textContent.trim();
            const isChecked = event.target.checked;

            console.log('☑️ [change] Feature:', feature);
            console.log('   Checked:', isChecked);

            // Get all selected features
            const allSelected = document.querySelectorAll('input[name="features"]:checked');
            const selectedFeatures = Array.from(allSelected).map(cb => {
                return cb.parentElement.textContent.trim();
            });

            console.log('   All selected features:', selectedFeatures);
        }
    });


    // ============================================
    // SERVICE QUALITY DROPDOWN
    // ============================================

    serviceQualitySelect.addEventListener('change', function (event) {
        const value = event.target.value;
        const text = event.target.options[event.target.selectedIndex].text;

        console.log('⭐ [change] Service quality rating:');
        console.log('   Value:', value);
        console.log('   Rating:', text);
    });


    // ============================================
    // TEXTAREA CHARACTER COUNT
    // ============================================

    /**
     * Track improvement suggestions character count
     */
    improvementTextarea.addEventListener('input', function (event) {
        const length = event.target.value.length;
        console.log('📝 [input] Improvement suggestions:', length, 'characters');
    });

    /**
     * Track additional comments character count
     */
    additionalCommentsTextarea.addEventListener('input', function (event) {
        const length = event.target.value.length;
        console.log('📝 [input] Additional comments:', length, 'characters');
    });


    // ============================================
    // FUTURE SURVEYS RADIO BUTTONS
    // ============================================

    const futureSurveyRadios = document.querySelectorAll('input[name="future-surveys"]');

    futureSurveyRadios.forEach(function (radio) {
        radio.addEventListener('change', function (event) {
            console.log('📋 [change] Future surveys:', event.target.value);
        });
    });


    // ============================================
    // FORM SUBMISSION
    // ============================================

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        console.log('\n' + '='.repeat(50));
        console.log('📨 SURVEY FORM SUBMITTED');
        console.log('='.repeat(50));

        // Validate required fields
        if (!validateSurvey()) {
            return;
        }

        // Collect survey data
        const surveyData = collectSurveyData();

        // Log to console
        console.log('\n📋 Survey Response Data:');
        console.log(surveyData);
        console.table(surveyData);

        // Display results in DOM
        displaySurveyResults(surveyData);

        console.log('='.repeat(50));
    });


    // ============================================
    // VALIDATION FUNCTION
    // ============================================

    function validateSurvey() {
        let isValid = true;

        if (!nameInput.value.trim()) {
            console.log('❌ Name is required');
            isValid = false;
        }

        if (!emailInput.value.trim()) {
            console.log('❌ Email is required');
            isValid = false;
        }

        if (!ageRangeSelect.value) {
            console.log('❌ Age range is required');
            isValid = false;
        }

        const satisfaction = document.querySelector('input[name="satisfaction"]:checked');
        if (!satisfaction) {
            console.log('❌ Satisfaction rating is required');
            isValid = false;
        }

        if (!serviceQualitySelect.value) {
            console.log('❌ Service quality rating is required');
            isValid = false;
        }

        if (!isValid) {
            alert('Please fill in all required fields.');
        }

        return isValid;
    }


    // ============================================
    // DATA COLLECTION FUNCTION
    // ============================================

    function collectSurveyData() {
        // Get satisfaction
        const satisfactionRadio = document.querySelector('input[name="satisfaction"]:checked');
        const satisfactionText = satisfactionRadio
            ? satisfactionRadio.parentElement.textContent.trim()
            : 'Not selected';

        // Get selected features
        const selectedFeatures = Array.from(
            document.querySelectorAll('input[name="features"]:checked')
        ).map(cb => cb.parentElement.textContent.trim());

        // Get future surveys preference
        const futureSurveys = document.querySelector('input[name="future-surveys"]:checked');

        // Get service quality text
        const serviceQualityText = serviceQualitySelect.value
            ? serviceQualitySelect.options[serviceQualitySelect.selectedIndex].text
            : 'Not selected';

        return {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            ageRange: ageRangeSelect.value,
            ageRangeText: ageRangeSelect.options[ageRangeSelect.selectedIndex].text,
            satisfaction: satisfactionText,
            recommendationScore: recommendationSlider.value + '/10',
            featuresUsed: selectedFeatures.length > 0 ? selectedFeatures : ['None selected'],
            serviceQuality: serviceQualityText,
            improvements: improvementTextarea.value.trim() || 'No suggestions',
            additionalComments: additionalCommentsTextarea.value.trim() || 'No comments',
            futureSurveys: futureSurveys ? futureSurveys.value : 'Not specified',
            submittedAt: new Date().toLocaleString()
        };
    }


    // ============================================
    // DISPLAY SURVEY RESULTS IN DOM
    // ============================================

    function displaySurveyResults(data) {
        // Check if results already exist
        let resultsContainer = document.getElementById('survey-results');

        if (!resultsContainer) {
            resultsContainer = document.createElement('div');
            resultsContainer.id = 'survey-results';
            resultsContainer.style.cssText = `
                margin-top: 30px;
                padding: 25px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 15px;
                color: white;
            `;

            form.parentNode.insertBefore(resultsContainer, form.nextSibling);
        }

        // Build results HTML
        let html = `
            <h3 style="margin-bottom: 20px; border-bottom: 2px solid white; padding-bottom: 10px;">
                📊 Survey Response Summary
            </h3>
            <div style="display: grid; gap: 15px;">
        `;

        // Summary cards
        const summaryItems = [
            { icon: '👤', label: 'Respondent', value: data.name },
            { icon: '📧', label: 'Email', value: data.email },
            { icon: '📅', label: 'Age Range', value: data.ageRangeText },
            { icon: '😊', label: 'Satisfaction', value: data.satisfaction },
            { icon: '📈', label: 'Recommendation Score', value: data.recommendationScore },
            { icon: '⭐', label: 'Service Quality', value: data.serviceQuality },
            { icon: '🔧', label: 'Features Used', value: Array.isArray(data.featuresUsed) ? data.featuresUsed.join(', ') : data.featuresUsed },
            { icon: '📋', label: 'Future Surveys', value: data.futureSurveys },
            { icon: '🕐', label: 'Submitted', value: data.submittedAt }
        ];

        summaryItems.forEach(item => {
            html += `
                <div style="
                    background: rgba(255,255,255,0.15);
                    padding: 12px 15px;
                    border-radius: 8px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                ">
                    <span>${item.icon} ${item.label}</span>
                    <strong>${item.value}</strong>
                </div>
            `;
        });

        // Add improvements if provided
        if (data.improvements !== 'No suggestions') {
            html += `
                <div style="
                    background: rgba(255,255,255,0.15);
                    padding: 15px;
                    border-radius: 8px;
                    margin-top: 10px;
                ">
                    <strong>💡 Improvement Suggestions:</strong>
                    <p style="margin: 10px 0 0 0; font-style: italic;">"${data.improvements}"</p>
                </div>
            `;
        }

        html += `
            </div>
            <p style="margin-top: 20px; text-align: center; opacity: 0.8;">
                Thank you for completing our survey! Check console (F12) for full data.
            </p>
        `;

        resultsContainer.innerHTML = html;
        resultsContainer.scrollIntoView({ behavior: 'smooth' });

        console.log('📊 Survey results displayed in DOM');
    }


    // ============================================
    // RESET BUTTON
    // ============================================

    const resetButton = document.querySelector('button[type="reset"]');

    resetButton.onclick = function () {
        console.log('🔄 Survey form reset');

        // Reset slider display
        valueIndicator.textContent = '5';
        valueIndicator.style.color = '#ffa500';

        // Remove results
        const results = document.getElementById('survey-results');
        if (results) results.remove();
    };


    // ============================================
    // INITIALIZATION COMPLETE
    // ============================================
    console.log('📝 Survey Form Ready');
    console.log('📖 Try the range slider and checkboxes!');
    console.log('='.repeat(50));
});


/**
 * ============================================
 * RANGE SLIDER NOTES
 * ============================================
 * 
 * INPUT EVENT vs CHANGE EVENT:
 * 
 * input event:
 *   - Fires continuously as the slider moves
 *   - Good for real-time updates
 *   - Fires many times during a single drag
 * 
 * change event:
 *   - Fires only when slider is released
 *   - Good for final value capture
 *   - Fires once per interaction
 * 
 * Best practice: Use 'input' for UI updates,
 * 'change' for data logging/saving.
 */
