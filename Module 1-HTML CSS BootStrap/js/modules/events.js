// Event data (in a real application, this would come from a backend API)
const events = [
  {
    id: 1,
    title: 'Summer Music Festival',
    description: 'Join us for three days of amazing live music featuring local and national artists across multiple stages.',
    date: '2023-07-15',
    time: '12:00 PM - 10:00 PM',
    location: 'Central Park',
    address: '123 Park Avenue',
    category: 'music',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true,
    seats: 200,
    price: 'From $25',
    organizer: 'City Events Committee',
    detailsHTML: `
      <div class="row">
        <div class="col-md-6">
          <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid rounded" alt="Summer Music Festival">
        </div>
        <div class="col-md-6">
          <h3>Summer Music Festival</h3>
          <div class="d-flex mb-3">
            <span class="badge bg-primary me-2">Music</span>
            <span class="text-muted">July 15, 2023</span>
          </div>
          <p>Join us for three days of amazing live music featuring local and national artists across multiple stages.</p>
          <div class="mb-3">
            <strong>Time:</strong> 12:00 PM - 10:00 PM
          </div>
          <div class="mb-3">
            <strong>Location:</strong> Central Park, 123 Park Avenue
          </div>
          <div class="mb-3">
            <strong>Tickets:</strong> From $25
          </div>
          <div class="mb-3">
            <strong>Organizer:</strong> City Events Committee
          </div>
          <div class="mb-3">
            <strong>Available Seats:</strong> 200
          </div>
          <hr>
          <h5>About This Event</h5>
          <p>Our annual Summer Music Festival is back and bigger than ever! Featuring over 30 artists across 4 stages, this is the music event of the season.</p>
          <p>Food vendors, craft beer, and activities for all ages will be available throughout the festival grounds. Don't miss this incredible celebration of music and community!</p>
        </div>
      </div>
    `
  },
  {
    id: 2,
    title: 'Farmers Market',
    description: 'Browse the finest local produce, crafts, and food from over 50 local vendors. Perfect for the whole family.',
    date: '2023-06-10',
    time: '8:00 AM - 1:00 PM',
    location: 'Downtown Square',
    address: '456 Main Street',
    category: 'food',
    image: 'https://images.pexels.com/photos/4046288/pexels-photo-4046288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true,
    seats: null,
    price: 'Free',
    organizer: 'Local Farmers Association',
    detailsHTML: `
      <div class="row">
        <div class="col-md-6">
          <img src="https://images.pexels.com/photos/4046288/pexels-photo-4046288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid rounded" alt="Farmers Market">
        </div>
        <div class="col-md-6">
          <h3>Farmers Market</h3>
          <div class="d-flex mb-3">
            <span class="badge bg-warning text-dark me-2">Food</span>
            <span class="text-muted">June 10, 2023</span>
          </div>
          <p>Browse the finest local produce, crafts, and food from over 50 local vendors. Perfect for the whole family.</p>
          <div class="mb-3">
            <strong>Time:</strong> 8:00 AM - 1:00 PM
          </div>
          <div class="mb-3">
            <strong>Location:</strong> Downtown Square, 456 Main Street
          </div>
          <div class="mb-3">
            <strong>Entry:</strong> Free
          </div>
          <div class="mb-3">
            <strong>Organizer:</strong> Local Farmers Association
          </div>
          <hr>
          <h5>About This Event</h5>
          <p>Our weekly Farmers Market brings together the best local farmers, bakers, and artisans in one vibrant community space.</p>
          <p>Come early for the best selection of fresh, seasonal produce. Enjoy breakfast or lunch from one of our many food stalls as you browse. Live music performances throughout the morning make this a perfect weekend activity.</p>
        </div>
      </div>
    `
  },
  {
    id: 3,
    title: 'Tech Startup Meetup',
    description: 'Network with fellow entrepreneurs and hear inspiring talks from successful local startup founders.',
    date: '2023-06-20',
    time: '6:30 PM - 9:00 PM',
    location: 'Innovation Hub',
    address: '789 Tech Boulevard',
    category: 'tech',
    image: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    seats: 75,
    price: '$10',
    organizer: 'TechStart Community',
    detailsHTML: `
      <div class="row">
        <div class="col-md-6">
          <img src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid rounded" alt="Tech Startup Meetup">
        </div>
        <div class="col-md-6">
          <h3>Tech Startup Meetup</h3>
          <div class="d-flex mb-3">
            <span class="badge bg-warning text-dark me-2">Tech</span>
            <span class="text-muted">June 20, 2023</span>
          </div>
          <p>Network with fellow entrepreneurs and hear inspiring talks from successful local startup founders.</p>
          <div class="mb-3">
            <strong>Time:</strong> 6:30 PM - 9:00 PM
          </div>
          <div class="mb-3">
            <strong>Location:</strong> Innovation Hub, 789 Tech Boulevard
          </div>
          <div class="mb-3">
            <strong>Tickets:</strong> $10
          </div>
          <div class="mb-3">
            <strong>Organizer:</strong> TechStart Community
          </div>
          <div class="mb-3">
            <strong>Available Seats:</strong> 75
          </div>
          <hr>
          <h5>About This Event</h5>
          <p>Our monthly Tech Startup Meetup brings together the brightest minds in our local tech ecosystem.</p>
          <p>This month features presentations from three successful founders who will share their entrepreneurial journey, followed by Q&A and structured networking. Light refreshments and drinks will be provided.</p>
        </div>
      </div>
    `
  },
  {
    id: 4,
    title: 'Art Exhibition Opening',
    description: 'Be among the first to experience our new exhibition featuring works from emerging local artists.',
    date: '2023-06-15',
    time: '7:00 PM - 10:00 PM',
    location: 'City Gallery',
    address: '101 Culture Street',
    category: 'art',
    image: 'https://images.pexels.com/photos/1647340/pexels-photo-1647340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true,
    seats: 120,
    price: '$5',
    organizer: 'Arts Council',
    detailsHTML: `
      <div class="row">
        <div class="col-md-6">
          <img src="https://images.pexels.com/photos/1647340/pexels-photo-1647340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid rounded" alt="Art Exhibition Opening">
        </div>
        <div class="col-md-6">
          <h3>Art Exhibition Opening</h3>
          <div class="d-flex mb-3">
            <span class="badge bg-success me-2">Art</span>
            <span class="text-muted">June 15, 2023</span>
          </div>
          <p>Be among the first to experience our new exhibition featuring works from emerging local artists.</p>
          <div class="mb-3">
            <strong>Time:</strong> 7:00 PM - 10:00 PM
          </div>
          <div class="mb-3">
            <strong>Location:</strong> City Gallery, 101 Culture Street
          </div>
          <div class="mb-3">
            <strong>Tickets:</strong> $5
          </div>
          <div class="mb-3">
            <strong>Organizer:</strong> Arts Council
          </div>
          <div class="mb-3">
            <strong>Available Seats:</strong> 120
          </div>
          <hr>
          <h5>About This Event</h5>
          <p>Join us for the opening night of "New Perspectives" - a showcase of works by 15 emerging artists from our community.</p>
          <p>The evening includes artist talks, live music, and complimentary wine and appetizers. Tickets are limited, so purchase early to secure your spot at this celebration of local talent.</p>
        </div>
      </div>
    `
  },
  {
    id: 5,
    title: 'Charity Run',
    description: '5K run/walk to raise funds for local children\'s hospital. All fitness levels welcome.',
    date: '2023-07-08',
    time: '8:00 AM - 11:00 AM',
    location: 'Riverside Park',
    address: '222 River Road',
    category: 'charity',
    image: 'https://images.pexels.com/photos/6456141/pexels-photo-6456141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    seats: 500,
    price: '$25 registration',
    organizer: 'Health Foundation',
    detailsHTML: `
      <div class="row">
        <div class="col-md-6">
          <img src="https://images.pexels.com/photos/6456141/pexels-photo-6456141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid rounded" alt="Charity Run">
        </div>
        <div class="col-md-6">
          <h3>Charity Run</h3>
          <div class="d-flex mb-3">
            <span class="badge bg-danger me-2">Charity</span>
            <span class="text-muted">July 8, 2023</span>
          </div>
          <p>5K run/walk to raise funds for local children\'s hospital. All fitness levels welcome.</p>
          <div class="mb-3">
            <strong>Time:</strong> 8:00 AM - 11:00 AM
          </div>
          <div class="mb-3">
            <strong>Location:</strong> Riverside Park, 222 River Road
          </div>
          <div class="mb-3">
            <strong>Registration:</strong> $25
          </div>
          <div class="mb-3">
            <strong>Organizer:</strong> Health Foundation
          </div>
          <div class="mb-3">
            <strong>Available Spots:</strong> 500
          </div>
          <hr>
          <h5>About This Event</h5>
          <p>Our annual Charity Run is back! Join hundreds of community members in raising vital funds for our local children\'s hospital.</p>
          <p>Your registration includes a race t-shirt, timing chip, and post-race refreshments. Prizes will be awarded to top finishers in various age categories. All proceeds go directly to the pediatric oncology department.</p>
        </div>
      </div>
    `
  },
  {
    id: 6,
    title: 'Local Sports Tournament',
    description: 'Annual community basketball tournament with divisions for all ages. Come play or cheer!',
    date: '2023-07-22',
    time: '9:00 AM - 6:00 PM',
    location: 'Community Center',
    address: '333 Sports Lane',
    category: 'sports',
    image: 'https://images.pexels.com/photos/4198804/pexels-photo-4198804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    seats: null,
    price: 'Free for spectators',
    organizer: 'Parks & Recreation Dept',
    detailsHTML: `
      <div class="row">
        <div class="col-md-6">
          <img src="https://images.pexels.com/photos/4198804/pexels-photo-4198804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid rounded" alt="Local Sports Tournament">
        </div>
        <div class="col-md-6">
          <h3>Local Sports Tournament</h3>
          <div class="d-flex mb-3">
            <span class="badge bg-success me-2">Sports</span>
            <span class="text-muted">July 22, 2023</span>
          </div>
          <p>Annual community basketball tournament with divisions for all ages. Come play or cheer!</p>
          <div class="mb-3">
            <strong>Time:</strong> 9:00 AM - 6:00 PM
          </div>
          <div class="mb-3">
            <strong>Location:</strong> Community Center, 333 Sports Lane
          </div>
          <div class="mb-3">
            <strong>Entry:</strong> Free for spectators
          </div>
          <div class="mb-3">
            <strong>Organizer:</strong> Parks & Recreation Dept
          </div>
          <hr>
          <h5>About This Event</h5>
          <p>Our community basketball tournament brings together teams from all corners of the city for a day of friendly competition and community building.</p>
          <p>Divisions include: Under-12, Teens, Adults, and Seniors. Team registration is $50 per team (register separately). Concessions available throughout the day with proceeds supporting youth sports programs.</p>
        </div>
      </div>
    `
  },
  {
    id: 7,
    title: 'Garden Workshop Series',
    description: 'Learn sustainable gardening practices with our expert horticulturists. Perfect for beginners.',
    date: '2023-06-18',
    time: '10:00 AM - 12:00 PM',
    location: 'Community Garden',
    address: '444 Green Street',
    category: 'workshop',
    image: 'https://images.pexels.com/photos/6231969/pexels-photo-6231969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true,
    seats: 30,
    price: '$15',
    organizer: 'Green Thumbs Society',
    detailsHTML: `
      <div class="row">
        <div class="col-md-6">
          <img src="https://images.pexels.com/photos/6231969/pexels-photo-6231969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid rounded" alt="Garden Workshop Series">
        </div>
        <div class="col-md-6">
          <h3>Garden Workshop Series</h3>
          <div class="d-flex mb-3">
            <span class="badge bg-success me-2">Workshop</span>
            <span class="text-muted">June 18, 2023</span>
          </div>
          <p>Learn sustainable gardening practices with our expert horticulturists. Perfect for beginners.</p>
          <div class="mb-3">
            <strong>Time:</strong> 10:00 AM - 12:00 PM
          </div>
          <div class="mb-3">
            <strong>Location:</strong> Community Garden, 444 Green Street
          </div>
          <div class="mb-3">
            <strong>Tickets:</strong> $15
          </div>
          <div class="mb-3">
            <strong>Organizer:</strong> Green Thumbs Society
          </div>
          <div class="mb-3">
            <strong>Available Seats:</strong> 30
          </div>
          <hr>
          <h5>About This Event</h5>
          <p>Join us for the first in our summer series of gardening workshops focused on sustainable urban gardening practices.</p>
          <p>This hands-on workshop covers soil preparation, seed starting, and companion planting. All materials are provided, and participants will take home seedlings to start their own garden. Suitable for all experience levels.</p>
        </div>
      </div>
    `
  },
  {
    id: 8,
    title: 'Local Film Festival',
    description: 'Three-day showcase of independent films by regional filmmakers, including Q&A sessions.',
    date: '2023-07-28',
    time: 'Various Times',
    location: 'Historic Theater',
    address: '555 Cinema Avenue',
    category: 'art',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    seats: 150,
    price: 'From $12',
    organizer: 'Film Society',
    detailsHTML: `
      <div class="row">
        <div class="col-md-6">
          <img src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid rounded" alt="Local Film Festival">
        </div>
        <div class="col-md-6">
          <h3>Local Film Festival</h3>
          <div class="d-flex mb-3">
            <span class="badge bg-success me-2">Art</span>
            <span class="text-muted">July 28, 2023</span>
          </div>
          <p>Three-day showcase of independent films by regional filmmakers, including Q&A sessions.</p>
          <div class="mb-3">
            <strong>Time:</strong> Various Times
          </div>
          <div class="mb-3">
            <strong>Location:</strong> Historic Theater, 555 Cinema Avenue
          </div>
          <div class="mb-3">
            <strong>Tickets:</strong> From $12
          </div>
          <div class="mb-3">
            <strong>Organizer:</strong> Film Society
          </div>
          <div class="mb-3">
            <strong>Available Seats:</strong> 150
          </div>
          <hr>
          <h5>About This Event</h5>
          <p>Our 5th annual Local Film Festival celebrates the diverse talents of filmmakers from our region.</p>
          <p>The program includes feature-length films, documentaries, and short film collections. Each screening is followed by Q&A sessions with filmmakers. Festival passes and single-screening tickets are available. See website for complete schedule.</p>
        </div>
      </div>
    `
  }
];

// Get unique categories from events array
const getCategories = () => {
  const categories = new Set();
  events.forEach(event => {
    categories.add(event.category);
  });
  return Array.from(categories);
};

// Load featured events
const loadFeaturedEvents = () => {
  const featuredEventsContainer = document.getElementById('featured-events-container');
  if (!featuredEventsContainer) return;
  
  const featuredEvents = events.filter(event => event.featured);
  
  let featuredHTML = '';
  featuredEvents.forEach(event => {
    const eventDate = new Date(event.date);
    const day = eventDate.getDate();
    const month = eventDate.toLocaleString('default', { month: 'short' });
    
    featuredHTML += `
      <div class="col-md-4 mb-4">
        <div class="card event-card h-100">
          <div class="position-relative">
            <img src="${event.image}" class="card-img-top" alt="${event.title}">
            <span class="event-category category-${event.category} text-white">${event.category}</span>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <h5 class="card-title mb-0">${event.title}</h5>
              <div class="event-date">
                <div class="event-day">${day}</div>
                <div class="event-month">${month}</div>
              </div>
            </div>
            <div class="event-meta">
              <i class="bi bi-clock"></i>
              <span class="event-time">${event.time}</span>
            </div>
            <div class="event-meta">
              <i class="bi bi-geo-alt"></i>
              <span class="event-location">${event.location}</span>
            </div>
            <p class="card-text mt-3">${event.description}</p>
          </div>
          <div class="card-footer bg-white border-top-0">
            <button class="btn btn-sm btn-outline-primary view-event-btn" data-event-id="${event.id}">
              View Details
            </button>
            <span class="float-end text-primary">${event.price}</span>
          </div>
        </div>
      </div>
    `;
  });
  
  featuredEventsContainer.innerHTML = featuredHTML;
};

// Load all events
const loadAllEvents = () => {
  const eventsContainer = document.getElementById('events-container');
  if (!eventsContainer) return;
  
  let eventsHTML = '';
  events.forEach(event => {
    const eventDate = new Date(event.date);
    const day = eventDate.getDate();
    const month = eventDate.toLocaleString('default', { month: 'short' });
    
    eventsHTML += `
      <div class="col-md-6 col-lg-4 event-item" data-category="${event.category}">
        <div class="card event-card h-100">
          <div class="position-relative">
            <img src="${event.image}" class="card-img-top" alt="${event.title}">
            <span class="event-category category-${event.category} text-white">${event.category}</span>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <h5 class="card-title mb-0">${event.title}</h5>
              <div class="event-date">
                <div class="event-day">${day}</div>
                <div class="event-month">${month}</div>
              </div>
            </div>
            <div class="event-meta">
              <i class="bi bi-clock"></i>
              <span class="event-time">${event.time}</span>
            </div>
            <div class="event-meta">
              <i class="bi bi-geo-alt"></i>
              <span class="event-location">${event.location}</span>
            </div>
            <p class="card-text mt-3">${event.description}</p>
          </div>
          <div class="card-footer bg-white border-top-0">
            <button class="btn btn-sm btn-outline-primary view-event-btn" data-event-id="${event.id}">
              View Details
            </button>
            <span class="float-end text-primary">${event.price}</span>
          </div>
        </div>
      </div>
    `;
  });
  
  eventsContainer.innerHTML = eventsHTML;
  
  // Populate event select dropdown for registration
  populateEventSelect();
};

// Populate event select dropdown
const populateEventSelect = () => {
  const eventSelect = document.getElementById('eventSelect');
  if (!eventSelect) return;
  
  let optionsHTML = '<option value="" selected disabled>Choose an event...</option>';
  events.forEach(event => {
    optionsHTML += `<option value="${event.id}">${event.title} - ${event.date}</option>`;
  });
  
  eventSelect.innerHTML = optionsHTML;
};

// Setup event filters
const setupEventFilters = () => {
  // Category dropdown
  const categoryDropdown = document.getElementById('category-dropdown');
  if (!categoryDropdown) return;
  
  // Add categories to dropdown
  const categories = getCategories();
  let categoryHTML = '<li><a class="dropdown-item active" data-category="all">All Categories</a></li>';
  categories.forEach(category => {
    categoryHTML += `<li><a class="dropdown-item" data-category="${category}">${category.charAt(0).toUpperCase() + category.slice(1)}</a></li>`;
  });
  
  categoryDropdown.innerHTML = categoryHTML;
  
  // Event listeners for category filter
  const categoryLinks = document.querySelectorAll('#category-dropdown .dropdown-item');
  categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Update active class
      categoryLinks.forEach(item => item.classList.remove('active'));
      e.target.classList.add('active');
      
      // Get selected category
      const category = e.target.getAttribute('data-category');
      
      // Update button text
      document.getElementById('categoryFilter').textContent = category === 'all' ? 'Filter' : category.charAt(0).toUpperCase() + category.slice(1);
      
      // Filter events
      filterEventsByCategory(category);
    });
  });
  
  // Search events
  const searchInput = document.getElementById('searchEvents');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      filterEventsBySearch(searchTerm);
    });
  }
};

// Filter events by category
const filterEventsByCategory = (category) => {
  const eventItems = document.querySelectorAll('.event-item');
  
  eventItems.forEach(item => {
    if (category === 'all' || item.getAttribute('data-category') === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
};

// Filter events by search term
const filterEventsBySearch = (searchTerm) => {
  const eventItems = document.querySelectorAll('.event-item');
  
  eventItems.forEach(item => {
    const title = item.querySelector('.card-title').textContent.toLowerCase();
    const description = item.querySelector('.card-text').textContent.toLowerCase();
    
    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
};

// Handle event details modal
const handleEventDetails = () => {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-event-btn') || e.target.closest('.view-event-btn')) {
      const button = e.target.classList.contains('view-event-btn') ? e.target : e.target.closest('.view-event-btn');
      const eventId = parseInt(button.getAttribute('data-event-id'));
      showEventDetails(eventId);
    }
  });
};

// Show event details in modal
const showEventDetails = (eventId) => {
  const event = events.find(e => e.id === eventId);
  if (!event) return;
  
  const modalContent = document.getElementById('event-detail-content');
  if (!modalContent) return;
  
  modalContent.innerHTML = event.detailsHTML;
  
  // Populate registration form with event (if exists)
  const eventSelect = document.getElementById('eventSelect');
  if (eventSelect) {
    for (let i = 0; i < eventSelect.options.length; i++) {
      if (eventSelect.options[i].value == eventId) {
        eventSelect.selectedIndex = i;
        break;
      }
    }
  }
  
  // Show the modal
  const modal = new bootstrap.Modal(document.getElementById('eventDetailModal'));
  modal.show();
};

// Load all events
const loadEvents = () => {
  loadFeaturedEvents();
  loadAllEvents();
};

// Export functions
export { loadEvents, setupEventFilters, handleEventDetails, events };