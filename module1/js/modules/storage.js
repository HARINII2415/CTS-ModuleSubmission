// Setup local storage functionality
const setupLocalStorage = () => {
  // Check for saved preferences on page load
  checkSavedPreferences();
  
  // Setup clear preferences button
  const clearPreferencesBtn = document.getElementById('clear-preferences');
  if (clearPreferencesBtn) {
    clearPreferencesBtn.addEventListener('click', clearAllStoredData);
  }
};

// Check for saved preferences
const checkSavedPreferences = () => {
  const preferencesCard = document.getElementById('saved-preferences-card');
  const preferencesContent = document.getElementById('saved-preferences-content');
  
  if (!preferencesCard || !preferencesContent) return;
  
  const preferences = JSON.parse(localStorage.getItem('userPreferences'));
  
  if (preferences) {
    // Display preferences
    preferencesContent.innerHTML = `
      <p>We've saved your preferences from your last visit:</p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Name:</strong> ${preferences.name}</li>
        <li class="list-group-item"><strong>Email:</strong> ${preferences.email}</li>
        <li class="list-group-item"><strong>Event Interest:</strong> ${preferences.eventInterest}</li>
        <li class="list-group-item"><strong>Saved on:</strong> ${new Date(preferences.savedAt).toLocaleString()}</li>
      </ul>
    `;
    
    // Show the card
    preferencesCard.style.display = 'block';
    
    // Pre-fill form fields if they exist
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const eventSelect = document.getElementById('eventSelect');
    const notificationsCheck = document.getElementById('notificationsCheck');
    
    if (firstName && lastName && preferences.name) {
      const nameParts = preferences.name.split(' ');
      if (nameParts.length >= 2) {
        firstName.value = nameParts[0];
        lastName.value = nameParts.slice(1).join(' ');
      }
    }
    
    if (email && preferences.email) {
      email.value = preferences.email;
    }
    
    if (eventSelect && preferences.eventInterest) {
      eventSelect.value = preferences.eventInterest;
    }
    
    if (notificationsCheck && preferences.notifications) {
      notificationsCheck.checked = preferences.notifications;
    }
  } else {
    // Hide the card if no preferences
    preferencesCard.style.display = 'none';
  }
};

// Clear all stored data
const clearAllStoredData = () => {
  try {
    // Clear localStorage
    localStorage.removeItem('userPreferences');
    localStorage.removeItem('favoriteCategories');
    
    // Clear sessionStorage
    sessionStorage.clear();
    
    // Hide preferences card
    const preferencesCard = document.getElementById('saved-preferences-card');
    if (preferencesCard) {
      preferencesCard.style.display = 'none';
    }
    
    // Reset form
    const form = document.getElementById('registration-form');
    if (form) form.reset();
    
    // Show confirmation
    alert('All saved preferences have been cleared.');
  } catch (error) {
    console.error('Error clearing storage:', error);
    alert('There was an error clearing your saved preferences.');
  }
};

// Save favorite category
const saveFavoriteCategory = (category) => {
  localStorage.setItem('favoriteCategories', category);
};

export { setupLocalStorage, saveFavoriteCategory };