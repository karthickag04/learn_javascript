/**
 * ============================================
 * JOB APPLICATION FORM - JavaScript Handling
 * Practice File for Complex Validation & LocalStorage
 * ============================================
 * 
 * TECHNIQUES DEMONSTRATED:
 * - getElementById + addEventListener
 * - Variable + addEventListener
 * - Event delegation
 * - Complex form validation
 * - File size/type validation
 * - LocalStorage for data persistence
 * - Redirect to results page
 */

// ============================================
// WAIT FOR DOM TO LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    console.log('✅ Job Application Form JS Loaded');
    console.log('='.repeat(50));


    // ============================================
    // GET DOM ELEMENTS
    // ============================================

    const form = document.querySelector('form');

    // Personal Information
    const applicantName = document.getElementById('applicant-name');
    const applicantEmail = document.getElementById('applicant-email');
    const applicantPhone = document.getElementById('applicant-phone');
    const linkedinInput = document.getElementById('linkedin');
    const portfolioInput = document.getElementById('portfolio');
    const currentLocation = document.getElementById('current-location');

    // Position Details
    const positionSelect = document.getElementById('position');
    const departmentSelect = document.getElementById('department');
    const salarySelect = document.getElementById('salary-expectation');
    const startDateInput = document.getElementById('start-date');

    // Qualifications
    const educationSelect = document.getElementById('education');
    const experienceYears = document.getElementById('experience-years');
    const skillsInput = document.getElementById('skills');
    const coverLetter = document.getElementById('cover-letter');
    const resumeInput = document.getElementById('resume');
    const additionalDocsInput = document.getElementById('additional-docs');

    // Other
    const howHearSelect = document.getElementById('how-hear');
    const additionalInfo = document.getElementById('additional-info');


    // ============================================
    // POSITION & DEPARTMENT CHANGE HANDLERS
    // getElementById + addEventListener
    // ============================================

    document.getElementById('position').addEventListener('change', function (event) {
        const position = event.target.value;
        const positionText = event.target.options[event.target.selectedIndex].text;

        console.log('💼 [change] Position selected:');
        console.log('   Value:', position);
        console.log('   Text:', positionText);
    });

    document.getElementById('department').addEventListener('change', function (event) {
        const dept = event.target.value;
        const deptText = event.target.options[event.target.selectedIndex].text;

        console.log('🏢 [change] Department selected:');
        console.log('   Value:', dept);
        console.log('   Text:', deptText);
    });


    // ============================================
    // EXPERIENCE YEARS INPUT
    // ============================================

    experienceYears.addEventListener('input', function (event) {
        let value = parseInt(event.target.value);

        // Clamp value between 0 and 50
        if (value < 0) event.target.value = 0;
        if (value > 50) event.target.value = 50;

        console.log('📅 [input] Years of experience:', event.target.value);
    });


    // ============================================
    // SKILLS INPUT WITH DATALIST
    // ============================================

    skillsInput.addEventListener('input', function (event) {
        console.log('🛠️ [input] Skills entered:', event.target.value);
    });

    skillsInput.addEventListener('change', function (event) {
        console.log('🛠️ [change] Skill confirmed:', event.target.value);
    });


    // ============================================
    // COVER LETTER CHARACTER COUNT
    // Variable + addEventListener
    // ============================================

    coverLetter.addEventListener('input', function (event) {
        const length = event.target.value.length;
        console.log('📝 [input] Cover letter length:', length, 'characters');

        if (length > 0 && length < 100) {
            console.log('   ⚠️ Consider writing more to stand out!');
        }
    });


    // ============================================
    // RESUME FILE VALIDATION
    // File size and type checking
    // ============================================

    resumeInput.addEventListener('change', function (event) {
        const file = event.target.files[0];

        if (!file) {
            console.log('📄 [change] No resume selected');
            return;
        }

        console.log('📄 [change] Resume uploaded:');
        console.log('   Name:', file.name);
        console.log('   Size:', (file.size / 1024).toFixed(2), 'KB');
        console.log('   Type:', file.type);

        // Check file size (5MB max)
        const maxSize = 5 * 1024 * 1024; // 5MB in bytes
        if (file.size > maxSize) {
            console.log('   ❌ File too large! Max 5MB allowed');
            alert('File size exceeds 5MB limit. Please upload a smaller file.');
            event.target.value = ''; // Clear the input
            return;
        }

        // Check file type
        const allowedTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];
        const allowedExtensions = ['.pdf', '.doc', '.docx'];

        const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
        const isValidType = allowedTypes.includes(file.type) || allowedExtensions.includes(fileExtension);

        if (!isValidType) {
            console.log('   ❌ Invalid file type! Only PDF, DOC, DOCX allowed');
            alert('Please upload a PDF, DOC, or DOCX file.');
            event.target.value = '';
            return;
        }

        console.log('   ✅ File is valid');
    });


    // ============================================
    // ADDITIONAL DOCUMENTS (Multiple Files)
    // ============================================

    additionalDocsInput.addEventListener('change', function (event) {
        const files = event.target.files;

        console.log('📎 [change] Additional documents uploaded:', files.length, 'file(s)');

        Array.from(files).forEach((file, index) => {
            console.log(`   File ${index + 1}:`);
            console.log(`   - Name: ${file.name}`);
            console.log(`   - Size: ${(file.size / 1024).toFixed(2)} KB`);
        });
    });


    // ============================================
    // EMPLOYMENT TYPE CHECKBOXES (Event Delegation)
    // ============================================

    const employmentTypeContainer = document.querySelector('input[name="employment-type"]').closest('.checkbox-group');

    employmentTypeContainer.addEventListener('change', function (event) {
        if (event.target.type === 'checkbox' && event.target.name === 'employment-type') {
            const type = event.target.value;
            const isChecked = event.target.checked;

            console.log('📋 [change] Employment type:', type, '-', isChecked ? 'Selected' : 'Deselected');

            // Get all selected
            const selected = Array.from(
                document.querySelectorAll('input[name="employment-type"]:checked')
            ).map(cb => cb.value);

            console.log('   All preferences:', selected);
        }
    });


    // ============================================
    // PROFICIENCY RADIO BUTTONS
    // ============================================

    const proficiencyRadios = document.querySelectorAll('input[name="proficiency"]');

    proficiencyRadios.forEach(function (radio) {
        radio.addEventListener('change', function (event) {
            console.log('📊 [change] Proficiency level:', event.target.value);
        });
    });


    // ============================================
    // REFERENCES RADIO BUTTONS
    // ============================================

    const referencesRadios = document.querySelectorAll('input[name="references"]');

    referencesRadios.forEach(function (radio) {
        radio.addEventListener('change', function (event) {
            console.log('👥 [change] References:', event.target.value);
        });
    });


    // ============================================
    // FORM VALIDATION
    // ============================================

    function validateApplication() {
        const errors = [];

        // Personal Info
        if (!applicantName.value.trim()) errors.push('Full name is required');
        if (!applicantEmail.value.trim()) errors.push('Email is required');
        if (!applicantPhone.value.trim()) errors.push('Phone number is required');
        if (!currentLocation.value.trim()) errors.push('Current location is required');

        // Position Details
        if (!positionSelect.value) errors.push('Position is required');
        if (!departmentSelect.value) errors.push('Department is required');
        if (!startDateInput.value) errors.push('Available start date is required');

        // Qualifications
        if (!educationSelect.value) errors.push('Education level is required');
        if (!experienceYears.value) errors.push('Years of experience is required');
        if (!coverLetter.value.trim()) errors.push('Cover letter is required');
        if (!resumeInput.files.length) errors.push('Resume is required');

        // Legal checkboxes
        const authorizedCheckbox = document.querySelector('input[name="authorized"]');
        const accuracyCheckbox = document.querySelector('input[name="accuracy"]');

        if (!authorizedCheckbox.checked) errors.push('Work authorization confirmation required');
        if (!accuracyCheckbox.checked) errors.push('Information accuracy confirmation required');

        // Log errors
        if (errors.length > 0) {
            console.log('❌ Validation Errors:');
            errors.forEach((err, i) => console.log(`   ${i + 1}. ${err}`));
            return false;
        }

        console.log('✅ All validations passed');
        return true;
    }


    // ============================================
    // FORM SUBMISSION - Save to LocalStorage
    // ============================================

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        console.log('\n' + '='.repeat(50));
        console.log('📨 JOB APPLICATION SUBMITTED');
        console.log('='.repeat(50));

        // Validate
        if (!validateApplication()) {
            alert('Please fill in all required fields correctly.');
            return;
        }

        // Collect application data
        const applicationData = collectApplicationData();

        // Log to console
        console.log('\n📋 Application Data:');
        console.log(applicationData);
        console.table(applicationData.personalInfo);
        console.table(applicationData.positionDetails);

        // Save to LocalStorage
        saveToLocalStorage(applicationData);

        // Display results (since we're not actually redirecting)
        displayApplicationResults(applicationData);

        console.log('='.repeat(50));
    });


    // ============================================
    // DATA COLLECTION
    // ============================================

    function collectApplicationData() {
        // Get employment types
        const employmentTypes = Array.from(
            document.querySelectorAll('input[name="employment-type"]:checked')
        ).map(cb => cb.value);

        // Get proficiency
        const proficiency = document.querySelector('input[name="proficiency"]:checked');

        // Get references
        const references = document.querySelector('input[name="references"]:checked');

        // Get resume info
        const resumeFile = resumeInput.files[0];
        const resumeInfo = resumeFile
            ? `${resumeFile.name} (${(resumeFile.size / 1024).toFixed(2)} KB)`
            : 'None';

        return {
            personalInfo: {
                name: applicantName.value.trim(),
                email: applicantEmail.value.trim(),
                phone: applicantPhone.value.trim(),
                linkedin: linkedinInput.value.trim() || 'Not provided',
                portfolio: portfolioInput.value.trim() || 'Not provided',
                location: currentLocation.value.trim()
            },
            positionDetails: {
                position: positionSelect.options[positionSelect.selectedIndex].text,
                positionValue: positionSelect.value,
                department: departmentSelect.options[departmentSelect.selectedIndex].text,
                salary: salarySelect.value ? salarySelect.options[salarySelect.selectedIndex].text : 'Not specified',
                startDate: startDateInput.value,
                employmentTypes: employmentTypes.length > 0 ? employmentTypes : ['Not specified']
            },
            qualifications: {
                education: educationSelect.options[educationSelect.selectedIndex].text,
                experienceYears: experienceYears.value,
                skills: skillsInput.value.trim() || 'Not specified',
                proficiency: proficiency ? proficiency.value : 'Not specified',
                coverLetterLength: coverLetter.value.length + ' characters',
                resume: resumeInfo
            },
            other: {
                references: references ? references.value : 'Not specified',
                howHeard: howHearSelect.value
                    ? howHearSelect.options[howHearSelect.selectedIndex].text
                    : 'Not specified',
                additionalInfo: additionalInfo.value.trim() || 'None provided'
            },
            submittedAt: new Date().toISOString(),
            submittedAtFormatted: new Date().toLocaleString()
        };
    }


    // ============================================
    // LOCALSTORAGE FUNCTIONS
    // ============================================

    /**
     * Save application data to LocalStorage
     */
    function saveToLocalStorage(data) {
        try {
            // Convert to JSON string
            const jsonData = JSON.stringify(data);

            // Save with key
            localStorage.setItem('jobApplication', jsonData);

            console.log('💾 Application saved to LocalStorage');
            console.log('   Storage key: jobApplication');
            console.log('   Data size:', jsonData.length, 'characters');

            return true;
        } catch (error) {
            console.log('❌ Error saving to LocalStorage:', error.message);
            return false;
        }
    }

    /**
     * Load application data from LocalStorage
     */
    function loadFromLocalStorage() {
        try {
            const jsonData = localStorage.getItem('jobApplication');

            if (!jsonData) {
                console.log('📂 No saved application found');
                return null;
            }

            const data = JSON.parse(jsonData);
            console.log('📂 Application loaded from LocalStorage');
            return data;
        } catch (error) {
            console.log('❌ Error loading from LocalStorage:', error.message);
            return null;
        }
    }

    /**
     * Clear application from LocalStorage
     */
    function clearLocalStorage() {
        localStorage.removeItem('jobApplication');
        console.log('🗑️ Application cleared from LocalStorage');
    }


    // ============================================
    // DISPLAY APPLICATION RESULTS
    // ============================================

    function displayApplicationResults(data) {
        let resultsContainer = document.getElementById('application-results');

        if (!resultsContainer) {
            resultsContainer = document.createElement('div');
            resultsContainer.id = 'application-results';
            resultsContainer.style.cssText = `
                margin-top: 30px;
                padding: 25px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 15px;
                color: white;
            `;
            form.parentNode.insertBefore(resultsContainer, form.nextSibling);
        }

        let html = `
            <h3 style="margin-bottom: 5px;">🎉 Application Submitted Successfully!</h3>
            <p style="opacity: 0.9; margin-bottom: 20px;">
                Your application has been saved. Reference: APP-${Date.now().toString(36).toUpperCase()}
            </p>
            
            <div style="display: grid; gap: 15px;">
        `;

        // Personal Info Section
        html += createSection('👤 Personal Information', data.personalInfo);
        html += createSection('💼 Position Details', data.positionDetails);
        html += createSection('🎓 Qualifications', data.qualifications);
        html += createSection('📋 Additional Information', data.other);

        html += `
            </div>
            
            <div style="margin-top: 20px; text-align: center;">
                <p>📧 Confirmation email would be sent to: <strong>${data.personalInfo.email}</strong></p>
                <p style="font-size: 0.9rem; opacity: 0.8;">
                    Data has been saved to LocalStorage. Check console (F12) for details.
                </p>
            </div>
        `;

        resultsContainer.innerHTML = html;
        resultsContainer.scrollIntoView({ behavior: 'smooth' });

        console.log('📊 Application results displayed');
    }

    /**
     * Helper to create result sections
     */
    function createSection(title, data) {
        let html = `
            <div style="background: rgba(255,255,255,0.15); padding: 15px; border-radius: 10px;">
                <h4 style="margin: 0 0 10px 0; color: #fff;">${title}</h4>
        `;

        for (const [key, value] of Object.entries(data)) {
            // Skip internal keys
            if (key.includes('Value')) continue;

            const displayValue = Array.isArray(value) ? value.join(', ') : value;
            html += `
                <div style="display: flex; justify-content: space-between; padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <span style="opacity: 0.9;">${formatKey(key)}:</span>
                    <strong>${displayValue}</strong>
                </div>
            `;
        }

        html += '</div>';
        return html;
    }

    /**
     * Format camelCase to Title Case
     */
    function formatKey(key) {
        return key.replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase());
    }


    // ============================================
    // RESET BUTTON
    // ============================================

    const resetButton = document.querySelector('button[type="reset"]');

    resetButton.addEventListener('click', function () {
        console.log('🔄 Application form cleared');

        // Clear LocalStorage
        clearLocalStorage();

        // Remove results
        const results = document.getElementById('application-results');
        if (results) results.remove();
    });


    // ============================================
    // CHECK FOR SAVED APPLICATION ON LOAD
    // ============================================

    const savedApplication = loadFromLocalStorage();
    if (savedApplication) {
        console.log('📂 Found previously saved application from:', savedApplication.submittedAtFormatted);
        console.log('   Use localStorage.removeItem("jobApplication") to clear');
    }


    // ============================================
    // INITIALIZATION COMPLETE
    // ============================================
    console.log('📝 Job Application Form Ready');
    console.log('📖 Try submitting an application - data saves to LocalStorage!');
    console.log('='.repeat(50));
});


/**
 * ============================================
 * LOCALSTORAGE API NOTES
 * ============================================
 * 
 * METHODS:
 * - localStorage.setItem(key, value) - Save data
 * - localStorage.getItem(key) - Retrieve data
 * - localStorage.removeItem(key) - Delete data
 * - localStorage.clear() - Delete ALL data
 * 
 * NOTES:
 * - Values must be strings (use JSON.stringify for objects)
 * - Data persists even after browser close
 * - Usually 5-10MB storage limit
 * - Synchronous (can block main thread)
 * - Same-origin policy applies
 * 
 * ALTERNATIVES:
 * - sessionStorage - Data cleared when tab closes
 * - IndexedDB - For larger, structured data
 * - Cookies - For small data, sent with requests
 */
