// Import module files
import { loadEvents, setupEventFilters, handleEventDetails } from './modules/events.js';
import { setupGallery } from './modules/gallery.js';
import { setupFormValidation } from './modules/forms.js';
import { setupLocalStorage } from './modules/storage.js';
import { setupGeolocation } from './modules/geolocation.js';
import { setupUI } from './modules/ui.js';
import { setupVideoHandling } from './modules/video.js';

// Document ready function
document.addEventListener('DOMContentLoaded', () => {
  console.log('EventPulse portal initialized!');
  
  // Initialize all modules
  setupUI();
  loadEvents();
  setupEventFilters();
  setupGallery();
  setupFormValidation();
  setupLocalStorage();
  setupGeolocation();
  setupVideoHandling();
  handleEventDetails();

  // Welcome notification
  if (
    window.location.pathname.endsWith('index.html') ||
    window.location.pathname === '/' ||
    window.location.pathname === '/index.html'
  ) {
    if (!localStorage.getItem('homePopupShown')) {
    setTimeout(() => {
      alert('Welcome to the Local Community Event Portal!');
    }, 1000);
      localStorage.setItem('homePopupShown', 'true');
    }
  }
  
  // Warn users if they try to leave with unsaved form data
  const form = document.getElementById('registration-form');
  if (form) {
    window.addEventListener('beforeunload', (event) => {
      if (form.checkValidity() === false && formHasInput()) {
        event.preventDefault();
        event.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
        return event.returnValue;
      }
    });
  }

  // Helper function to check if form has any input
  function formHasInput() {
    const inputs = form.querySelectorAll('input, textarea, select');
    for (const input of inputs) {
      if ((input.type === 'checkbox' && input.checked) ||
          (input.type !== 'checkbox' && input.value)) {
        return true;
      }
    }
    return false;
  }
});