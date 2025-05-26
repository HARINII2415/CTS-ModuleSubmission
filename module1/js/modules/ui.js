// Setup UI elements and interactions
const setupUI = () => {
  // Navbar scroll effect
  handleNavbarScroll();
  
  // Scroll reveal animation
  setupScrollReveal();
  
  // Smooth scrolling for anchor links
  setupSmoothScrolling();
  
  // Load more button functionality
  setupLoadMoreButton();
};

// Handle navbar scroll effect
const handleNavbarScroll = () => {
  const navbar = document.getElementById('main-nav');
  
  if (navbar) {
    // Set initial state on page load
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    }
    
    // Add event listener for scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
};

// Setup scroll reveal animation
const setupScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal');
  
  if (revealElements.length > 0) {
    // Check if element is in viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    };
    
    // Reveal elements that are in viewport
    const revealElementsInView = () => {
      revealElements.forEach(element => {
        if (isInViewport(element)) {
          element.classList.add('active');
        }
      });
    };
    
    // Initial check
    revealElementsInView();
    
    // Add scroll event listener
    window.addEventListener('scroll', revealElementsInView);
  }
  
  // Add reveal class to section headings
  document.querySelectorAll('.section-heading, .subheading').forEach(element => {
    element.classList.add('reveal');
  });
};

// Setup smooth scrolling for anchor links
const setupSmoothScrolling = () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      
      if (target) {
        const headerOffset = 80; // Adjust based on fixed navbar height
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
};

// Setup load more button for events
const setupLoadMoreButton = () => {
  const loadMoreBtn = document.getElementById('load-more');
  
  if (loadMoreBtn) {
    // Initially show only 6 events
    const eventItems = document.querySelectorAll('.event-item');
    const initialDisplayCount = 6;
    let currentlyDisplayed = 0;
    
    // Function to show/hide events
    const updateEventVisibility = () => {
      let count = 0;
      eventItems.forEach(item => {
        if (count < currentlyDisplayed) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
        count++;
      });
      
      // Hide load more button if all events are shown
      if (currentlyDisplayed >= eventItems.length) {
        loadMoreBtn.style.display = 'none';
      } else {
        loadMoreBtn.style.display = 'inline-block';
      }
    };
    
    // Set initial state
    currentlyDisplayed = Math.min(initialDisplayCount, eventItems.length);
    updateEventVisibility();
    
    // Add click event to load more button
    loadMoreBtn.addEventListener('click', () => {
      currentlyDisplayed += 3; // Show 3 more events
      updateEventVisibility();
    });
  }
};

export { setupUI };