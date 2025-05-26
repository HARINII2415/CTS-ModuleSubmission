// Setup form validation
const setupFormValidation = () => {
  const form = document.getElementById('registration-form');
  if (!form) return;
  
  const submitButton = document.getElementById('submitBtn');
  const resetButton = document.getElementById('resetBtn');
  const messageTextarea = document.getElementById('message');
  const charCountElement = document.getElementById('charCount');
  
  // Character count for message textarea
  if (messageTextarea && charCountElement) {
    messageTextarea.addEventListener('input', () => {
      const currentLength = messageTextarea.value.length;
      charCountElement.textContent = `${currentLength}/200 characters`;
      
      if (currentLength > 200) {
        charCountElement.classList.add('text-danger');
      } else {
        charCountElement.classList.remove('text-danger');
      }
    });
  }
  
  // Form validation
  if (submitButton) {
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      
      try {
        if (validateForm(form)) {
          simulateFormSubmission();
        }
      } catch (error) {
        console.error('Form validation error:', error);
        alert('There was an error processing your registration: ' + error.message);
      }
    });
  }
  
  // Reset button
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      resetForm(form);
    });
  }
};

// Validate form
const validateForm = (form) => {
  let isValid = true;
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const eventSelect = document.getElementById('eventSelect');
  const termsCheck = document.getElementById('termsCheck');
  
  // Reset previous validation
  form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
  
  // Validate first name
  if (!firstName.value.trim()) {
    firstName.classList.add('is-invalid');
    isValid = false;
  }
  
  // Validate last name
  if (!lastName.value.trim()) {
    lastName.classList.add('is-invalid');
    isValid = false;
  }
  
  // Validate email
  if (!validateEmail(email.value)) {
    email.classList.add('is-invalid');
    isValid = false;
  }
  
  // Validate event selection
  if (!eventSelect.value) {
    eventSelect.classList.add('is-invalid');
    isValid = false;
  }
  
  // Validate terms checkbox
  if (!termsCheck.checked) {
    termsCheck.classList.add('is-invalid');
    isValid = false;
  }
  
  return isValid;
};

// Validate email format
const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Reset form
const resetForm = (form) => {
  form.reset();
  form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
  document.getElementById('charCount').textContent = '0/200 characters';
};

// Simulate form submission
const simulateFormSubmission = () => {
  const submitBtn = document.getElementById('submitBtn');
  const originalText = submitBtn.innerHTML;
  
  // Show loading state
  submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Processing...';
  submitBtn.disabled = true;
  
  // Simulate API call with timeout
  setTimeout(() => {
    try {
      // Gather form data
      const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        eventId: document.getElementById('eventSelect').value,
        message: document.getElementById('message').value,
        notifications: document.getElementById('notificationsCheck').checked
      };
      
      console.log('Form data submitted:', formData);
      
      // Save preferences if notification checkbox is checked
      if (formData.notifications) {
        // Create preferences object
        const preferences = {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          eventInterest: formData.eventId,
          notifications: true,
          savedAt: new Date().toISOString()
        };
        
        // Save to localStorage
        localStorage.setItem('userPreferences', JSON.stringify(preferences));
      }
      
      // Show success message
      alert('Thank you for registering! We will send a confirmation email shortly.');
      
      // Reset form
      const form = document.getElementById('registration-form');
      resetForm(form);
      
      // Check and display saved preferences
      checkSavedPreferences();
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error processing your registration. Please try again.');
    } finally {
      // Reset button state
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  }, 1500);
};

// Check for saved preferences
const checkSavedPreferences = () => {
  const preferencesCard = document.getElementById('saved-preferences-card');
  const preferencesContent = document.getElementById('saved-preferences-content');
  
  if (!preferencesCard || !preferencesContent) return;
  
  const preferences = JSON.parse(localStorage.getItem('userPreferences'));
  
  if (preferences) {
    // Get event name from ID
    const eventSelect = document.getElementById('eventSelect');
    let eventName = 'Selected Event';
    
    if (eventSelect) {
      for (let i = 0; i < eventSelect.options.length; i++) {
        if (eventSelect.options[i].value === preferences.eventInterest) {
          eventName = eventSelect.options[i].text;
          break;
        }
      }
    }
    
    // Format the saved date
    const savedDate = new Date(preferences.savedAt);
    const formattedDate = savedDate.toLocaleDateString() + ' ' + 
                          savedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Display preferences
    preferencesContent.innerHTML = `
      <p>We've saved your preferences from your last visit:</p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Name:</strong> ${preferences.name}</li>
        <li class="list-group-item"><strong>Email:</strong> ${preferences.email}</li>
        <li class="list-group-item"><strong>Event Interest:</strong> ${eventName}</li>
        <li class="list-group-item"><strong>Saved on:</strong> ${formattedDate}</li>
      </ul>
    `;
    
    // Show the card
    preferencesCard.style.display = 'block';
  } else {
    // Hide the card if no preferences
    preferencesCard.style.display = 'none';
  }
};

export { setupFormValidation };