/**
 * ============================================
 * PROFILE FORM - JavaScript Handling
 * Practice File for File Preview & Preferences
 * ============================================
 * 
 * TECHNIQUES DEMONSTRATED:
 * - Inline onclick handlers
 * - Variable + addEventListener
 * - querySelector + addEventListener
 * - FileReader API for image preview
 * - Color picker handling
 * - Multiple preference management
 * - Results panel display
 */

// ============================================
// INLINE HANDLER FUNCTIONS (Called from HTML)
// ============================================

/**
 * Inline handler example - can be added to any button
 * Usage in HTML: onclick="handleProfileAction('action-name')"
 */
function handleProfileAction(action) {
    console.log('🔘 [INLINE] Profile action:', action);
}


// ============================================
// WAIT FOR DOM TO LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    console.log('✅ Profile Form JS Loaded');
    console.log('='.repeat(50));


    // ============================================
    // GET DOM ELEMENTS
    // ============================================

    const form = document.querySelector('form');

    // Profile picture elements
    const profilePictureInput = document.getElementById('profile-picture');
    const avatarPlaceholder = document.querySelector('.avatar-placeholder');

    // Basic info
    const usernameInput = document.getElementById('username');
    const displayNameInput = document.getElementById('display-name');
    const emailInput = document.getElementById('profile-email');
    const phoneInput = document.getElementById('profile-phone');
    const bioTextarea = document.getElementById('bio');
    const websiteInput = document.getElementById('website');
    const dobInput = document.getElementById('profile-dob');
    const locationInput = document.getElementById('location');

    // Preferences
    const favoriteColorInput = document.getElementById('favorite-color');
    const languageSelect = document.getElementById('language');


    // ============================================
    // PROFILE PICTURE PREVIEW (FileReader API)
    // Variable + addEventListener
    // ============================================

    /**
     * Handle profile picture selection
     * Use FileReader to show preview before upload
     */
    profilePictureInput.addEventListener('change', function (event) {
        const file = event.target.files[0];

        if (!file) {
            console.log('📷 [change] No file selected');
            return;
        }

        console.log('📷 [change] Profile picture selected:');
        console.log('   Name:', file.name);
        console.log('   Size:', (file.size / 1024).toFixed(2), 'KB');
        console.log('   Type:', file.type);

        // Check if it's an image
        if (!file.type.startsWith('image/')) {
            console.log('   ❌ Not an image file!');
            alert('Please select an image file.');
            return;
        }

        // Create FileReader to read the image
        const reader = new FileReader();

        /**
         * FileReader onload event
         * Fires when file is fully read
         */
        reader.onload = function (e) {
            // e.target.result contains the base64 data URL
            const imageDataUrl = e.target.result;

            console.log('   ✅ Image loaded successfully');
            console.log('   Data URL length:', imageDataUrl.length, 'characters');

            // Update avatar preview
            avatarPlaceholder.innerHTML = `
                <img src="${imageDataUrl}" alt="Profile Preview" 
                     style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
            `;
        };

        /**
         * FileReader onerror event
         */
        reader.onerror = function () {
            console.log('   ❌ Error reading file');
        };

        // Read the file as Data URL (base64)
        reader.readAsDataURL(file);
    });


    // ============================================
    // BIO TEXTAREA CHARACTER COUNT
    // ============================================

    bioTextarea.addEventListener('input', function (event) {
        const length = event.target.value.length;
        const maxLength = 500;
        const remaining = maxLength - length;

        console.log('📝 [input] Bio length:', length, '/', maxLength);

        if (remaining < 50) {
            console.log('   ⚠️ Only', remaining, 'characters remaining!');
        }
    });


    // ============================================
    // COLOR PICKER
    // Variable + addEventListener with oninput
    // ============================================

    /**
     * Live color preview as user picks color
     */
    favoriteColorInput.addEventListener('input', function (event) {
        const selectedColor = event.target.value;

        console.log('🎨 [input] Favorite color:', selectedColor);

        // Apply color to the page header as a demo
        document.querySelector('h1').style.textShadow = `2px 2px 4px ${selectedColor}`;
    });


    // ============================================
    // INTERESTS CHECKBOXES (Event Delegation)
    // querySelector + addEventListener
    // ============================================

    const interestsContainer = document.querySelector('input[name="interests"]').closest('.checkbox-group');

    interestsContainer.addEventListener('change', function (event) {
        if (event.target.type === 'checkbox' && event.target.name === 'interests') {
            const interest = event.target.value;
            const isChecked = event.target.checked;

            console.log('☑️ [change] Interest:', interest, '-', isChecked ? 'Added' : 'Removed');

            // Get all selected interests
            const selected = Array.from(
                document.querySelectorAll('input[name="interests"]:checked')
            ).map(cb => cb.value);

            console.log('   Current interests:', selected);
        }
    });


    // ============================================
    // VISIBILITY RADIO BUTTONS
    // ============================================

    const visibilityRadios = document.querySelectorAll('input[name="visibility"]');

    visibilityRadios.forEach(function (radio) {
        radio.addEventListener('change', function (event) {
            console.log('🔒 [change] Profile visibility:', event.target.value);
        });
    });


    // ============================================
    // ONLINE STATUS RADIO
    // ============================================

    const onlineStatusRadios = document.querySelectorAll('input[name="online-status"]');

    onlineStatusRadios.forEach(function (radio) {
        radio.addEventListener('change', function (event) {
            console.log('🟢 [change] Show online status:', event.target.value);
        });
    });


    // ============================================
    // EMAIL NOTIFICATION CHECKBOXES
    // ============================================

    const notificationCheckboxes = document.querySelectorAll('input[type="checkbox"][name^="notify-"]');

    notificationCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function (event) {
            const notificationType = event.target.name.replace('notify-', '');
            const isEnabled = event.target.checked;

            console.log('📧 [change] Notification:', notificationType, '-', isEnabled ? 'Enabled' : 'Disabled');
        });
    });


    // ============================================
    // LANGUAGE SELECT
    // ============================================

    languageSelect.addEventListener('change', function (event) {
        const languageCode = event.target.value;
        const languageName = event.target.options[event.target.selectedIndex].text;

        console.log('🌐 [change] Language selected:', languageName, '(' + languageCode + ')');
    });


    // ============================================
    // FORM SUBMISSION
    // ============================================

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        console.log('\n' + '='.repeat(50));
        console.log('📨 PROFILE FORM SUBMITTED');
        console.log('='.repeat(50));

        // Collect profile data
        const profileData = collectProfileData();

        // Log to console
        console.log('\n📋 Profile Data:');
        console.log(profileData);
        console.table(profileData.basicInfo);
        console.table(profileData.preferences);

        // Display changes panel
        displayChangesPanel(profileData);

        console.log('='.repeat(50));
    });


    // ============================================
    // DATA COLLECTION
    // ============================================

    function collectProfileData() {
        // Get selected interests
        const interests = Array.from(
            document.querySelectorAll('input[name="interests"]:checked')
        ).map(cb => cb.value);

        // Get visibility
        const visibility = document.querySelector('input[name="visibility"]:checked');

        // Get online status
        const onlineStatus = document.querySelector('input[name="online-status"]:checked');

        // Get notification preferences
        const notifications = {};
        notificationCheckboxes.forEach(function (cb) {
            const type = cb.name.replace('notify-', '');
            notifications[type] = cb.checked;
        });

        return {
            basicInfo: {
                username: usernameInput.value,
                displayName: displayNameInput.value,
                email: emailInput.value,
                phone: phoneInput.value || 'Not set',
                bio: bioTextarea.value.substring(0, 50) + (bioTextarea.value.length > 50 ? '...' : ''),
                website: websiteInput.value || 'Not set',
                dob: dobInput.value || 'Not set',
                location: locationInput.value || 'Not set'
            },
            preferences: {
                favoriteColor: favoriteColorInput.value,
                language: languageSelect.options[languageSelect.selectedIndex].text,
                interests: interests.length > 0 ? interests.join(', ') : 'None',
                visibility: visibility ? visibility.value : 'Not set',
                showOnlineStatus: onlineStatus ? onlineStatus.value : 'Not set'
            },
            notifications: notifications,
            hasProfilePicture: profilePictureInput.files.length > 0,
            updatedAt: new Date().toLocaleString()
        };
    }


    // ============================================
    // DISPLAY CHANGES PANEL
    // ============================================

    function displayChangesPanel(data) {
        let panel = document.getElementById('changes-panel');

        if (!panel) {
            panel = document.createElement('div');
            panel.id = 'changes-panel';
            panel.style.cssText = `
                margin-top: 30px;
                padding: 25px;
                background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
                border-radius: 15px;
                color: #333;
            `;
            form.parentNode.insertBefore(panel, form.nextSibling);
        }

        let html = `
            <h3 style="margin-bottom: 20px; color: #1a5a3a;">
                ✅ Changes Saved Successfully!
            </h3>
            
            <div style="display: grid; gap: 15px;">
                <div style="background: rgba(255,255,255,0.8); padding: 15px; border-radius: 10px;">
                    <h4 style="color: #667eea; margin: 0 0 10px 0;">👤 Basic Information</h4>
        `;

        for (const [key, value] of Object.entries(data.basicInfo)) {
            html += `<div><strong>${formatKey(key)}:</strong> ${value}</div>`;
        }

        html += `
                </div>
                
                <div style="background: rgba(255,255,255,0.8); padding: 15px; border-radius: 10px;">
                    <h4 style="color: #667eea; margin: 0 0 10px 0;">💡 Preferences</h4>
        `;

        for (const [key, value] of Object.entries(data.preferences)) {
            html += `<div><strong>${formatKey(key)}:</strong> ${value}</div>`;
        }

        html += `
                </div>
                
                <div style="background: rgba(255,255,255,0.8); padding: 15px; border-radius: 10px;">
                    <h4 style="color: #667eea; margin: 0 0 10px 0;">📧 Notification Settings</h4>
        `;

        for (const [key, value] of Object.entries(data.notifications)) {
            html += `<div><strong>${formatKey(key)}:</strong> ${value ? '✅ Enabled' : '❌ Disabled'}</div>`;
        }

        html += `
                </div>
            </div>
            
            <p style="margin-top: 20px; text-align: center; color: #666;">
                Profile picture: ${data.hasProfilePicture ? 'Updated ✅' : 'No change'} | 
                Updated: ${data.updatedAt}
            </p>
        `;

        panel.innerHTML = html;
        panel.scrollIntoView({ behavior: 'smooth' });

        console.log('📊 Changes panel displayed');
    }

    /**
     * Format camelCase to Title Case
     */
    function formatKey(key) {
        return key.replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase());
    }


    // ============================================
    // CANCEL BUTTON (RESET)
    // ============================================

    const cancelButton = document.querySelector('button[type="reset"]');

    cancelButton.addEventListener('click', function () {
        console.log('🔄 Profile changes cancelled');

        // Reset avatar
        avatarPlaceholder.innerHTML = 'JD';

        // Reset h1 text-shadow
        document.querySelector('h1').style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.3)';

        // Remove changes panel
        const panel = document.getElementById('changes-panel');
        if (panel) panel.remove();
    });


    // ============================================
    // DELETE ACCOUNT BUTTON
    // Inline onclick style using addEventListener
    // ============================================

    const deleteButton = document.querySelector('.btn-danger');

    if (deleteButton) {
        deleteButton.addEventListener('click', function () {
            console.log('⚠️ [click] Delete Account clicked');

            const confirmed = confirm(
                '⚠️ DELETE ACCOUNT WARNING ⚠️\n\n' +
                'This action cannot be undone!\n\n' +
                'All your data will be permanently deleted.\n\n' +
                'Are you sure you want to delete your account?'
            );

            if (confirmed) {
                console.log('   User confirmed deletion');
                alert('Account would be deleted here.\n\n(This is a demo - no actual deletion)');
            } else {
                console.log('   User cancelled deletion');
            }
        });
    }


    // ============================================
    // INITIALIZATION COMPLETE
    // ============================================
    console.log('📝 Profile Form Ready');
    console.log('📖 Try uploading a profile picture!');
    console.log('='.repeat(50));
});


/**
 * ============================================
 * FILEREADER API NOTES
 * ============================================
 * 
 * METHODS:
 * - readAsDataURL(file) - Reads as base64 data URL (for images)
 * - readAsText(file) - Reads as text (for text files)
 * - readAsArrayBuffer(file) - Reads as raw binary
 * 
 * EVENTS:
 * - onload - File read successfully
 * - onerror - Error occurred
 * - onprogress - Progress of read operation
 * - onloadstart - Read started
 * - onloadend - Read completed (success or error)
 * 
 * PROPERTIES:
 * - result - The file content (after onload)
 * - readyState - EMPTY(0), LOADING(1), DONE(2)
 * - error - Error info if failed
 */
