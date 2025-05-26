// Setup video handling
const setupVideoHandling = () => {
  const video = document.getElementById('promo-video');
  const videoStatus = document.getElementById('video-status');
  
  if (!video || !videoStatus) return;
  
  // Add event listeners
  video.addEventListener('canplay', handleVideoCanPlay);
  video.addEventListener('playing', handleVideoPlaying);
  video.addEventListener('pause', handleVideoPause);
  video.addEventListener('ended', handleVideoEnded);
  video.addEventListener('error', handleVideoError);
};

// Handle canplay event
const handleVideoCanPlay = (event) => {
  const videoStatus = document.getElementById('video-status');
  if (videoStatus) {
    videoStatus.textContent = 'Video ready to play';
  }
};

// Handle playing event
const handleVideoPlaying = (event) => {
  const videoStatus = document.getElementById('video-status');
  if (videoStatus) {
    videoStatus.textContent = 'Video is now playing';
    
    // Clear status message after 3 seconds
    setTimeout(() => {
      videoStatus.textContent = '';
    }, 3000);
  }
};

// Handle pause event
const handleVideoPause = (event) => {
  const videoStatus = document.getElementById('video-status');
  if (videoStatus) {
    videoStatus.textContent = 'Video paused';
    
    // Clear status message after 3 seconds
    setTimeout(() => {
      videoStatus.textContent = '';
    }, 3000);
  }
};

// Handle ended event
const handleVideoEnded = (event) => {
  const videoStatus = document.getElementById('video-status');
  if (videoStatus) {
    videoStatus.textContent = 'Video playback completed';
  }
};

// Handle error event
const handleVideoError = (event) => {
  const video = event.target;
  const videoStatus = document.getElementById('video-status');
  
  if (videoStatus) {
    let errorMessage = 'An error occurred while loading the video';
    
    if (video.error) {
      switch (video.error.code) {
        case 1: // MEDIA_ERR_ABORTED
          errorMessage = 'Video playback aborted';
          break;
        case 2: // MEDIA_ERR_NETWORK
          errorMessage = 'Network error occurred while loading the video';
          break;
        case 3: // MEDIA_ERR_DECODE
          errorMessage = 'Video decoding error';
          break;
        case 4: // MEDIA_ERR_SRC_NOT_SUPPORTED
          errorMessage = 'Video format not supported';
          break;
      }
    }
    
    videoStatus.textContent = errorMessage;
    videoStatus.classList.add('text-danger');
  }
};

export { setupVideoHandling };