// Setup geolocation functionality
const setupGeolocation = () => {
  const getLocationBtn = document.getElementById('get-location-btn');
  const nearbyEventsBtn = document.getElementById('nearby-events-btn');
  
  if (getLocationBtn) {
    getLocationBtn.addEventListener('click', getUserLocation);
  }
  
  if (nearbyEventsBtn) {
    nearbyEventsBtn.addEventListener('click', getUserLocation);
  }
};

// Get user location using Geolocation API
const getUserLocation = () => {
  const locationResult = document.getElementById('location-result');
  const mapPlaceholder = document.getElementById('map-placeholder');
  
  // Show loading indicator
  if (locationResult) {
    locationResult.innerHTML = `
      <div class="d-flex align-items-center">
        <div class="spinner-border spinner-border-sm text-light me-2" role="status"></div>
        <span>Getting your location...</span>
      </div>
    `;
  }
  
  // Check if geolocation is available
  if (!navigator.geolocation) {
    displayLocationError('Geolocation is not supported by your browser.');
    return;
  }
  
  // Set up options for high accuracy
  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  };
  
  // Get current position
  navigator.geolocation.getCurrentPosition(
    // Success callback
    position => {
      const { latitude, longitude, accuracy } = position.coords;
      
      // Display coordinates
      if (locationResult) {
        locationResult.innerHTML = `
          <div class="alert alert-light">
            <h5 class="mb-2">Your Location:</h5>
            <p class="mb-1"><strong>Latitude:</strong> ${latitude.toFixed(6)}</p>
            <p class="mb-1"><strong>Longitude:</strong> ${longitude.toFixed(6)}</p>
            <p class="mb-0"><strong>Accuracy:</strong> ~${Math.round(accuracy)} meters</p>
          </div>
        `;
      }
      
      // Update map placeholder with location info
      if (mapPlaceholder) {
        mapPlaceholder.innerHTML = `
          <div class="d-flex flex-column align-items-center justify-content-center bg-light text-dark p-5 rounded h-100">
            <i class="bi bi-check-circle-fill text-success fs-1 mb-3"></i>
            <h4 class="mb-3">Location Found!</h4>
            <p class="text-center mb-1">We found 3 events within 5 miles of your location.</p>
            <p class="text-center mb-3">Coordinates: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}</p>
            <div class="d-grid gap-2 col-md-8 mx-auto">
              <button class="btn btn-primary">View Nearby Events</button>
            </div>
          </div>
        `;
      }
      
      // Find nearby events (simulated)
      findNearbyEvents(latitude, longitude);
      
    },
    // Error callback
    error => {
      let errorMessage = 'Unable to retrieve your location.';
      
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMessage = 'You denied the request for geolocation.';
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage = 'Location information is unavailable.';
          break;
        case error.TIMEOUT:
          errorMessage = 'The request to get user location timed out.';
          break;
        case error.UNKNOWN_ERROR:
          errorMessage = 'An unknown error occurred.';
          break;
      }
      
      displayLocationError(errorMessage);
    },
    // Options
    options
  );
};

// Display geolocation error
const displayLocationError = (message) => {
  const locationResult = document.getElementById('location-result');
  
  if (locationResult) {
    locationResult.innerHTML = `
      <div class="alert alert-warning">
        <i class="bi bi-exclamation-triangle-fill me-2"></i>
        ${message}
      </div>
    `;
  }
  
  const mapPlaceholder = document.getElementById('map-placeholder');
  if (mapPlaceholder) {
    mapPlaceholder.innerHTML = `
      <div class="d-flex flex-column align-items-center justify-content-center bg-light text-dark p-5 rounded h-100">
        <i class="bi bi-exclamation-triangle-fill text-warning fs-1 mb-3"></i>
        <h4 class="mb-3">Location Error</h4>
        <p class="text-center">${message}</p>
        <button class="btn btn-primary mt-3" id="retry-location-btn">Try Again</button>
      </div>
    `;
    
    // Add event listener to retry button
    const retryBtn = document.getElementById('retry-location-btn');
    if (retryBtn) {
      retryBtn.addEventListener('click', getUserLocation);
    }
  }
};

// Simulate finding nearby events
const findNearbyEvents = (latitude, longitude) => {
  console.log(`Finding events near ${latitude}, ${longitude}`);
  
  // In a real application, this function would make an API call to find events near these coordinates
  // Here we're just simulating a response
  
  // We could use the coordinates to calculate distances to event venues
  // For example, using the Haversine formula to calculate distance between coordinates
};

export { setupGeolocation };