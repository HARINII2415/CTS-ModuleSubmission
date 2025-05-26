// Gallery data
const galleryItems = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Summer Music Festival 2022',
    description: 'Main stage performance by local band The Echoers'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/2608519/pexels-photo-2608519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Community Volunteer Day',
    description: 'Volunteers helping clean up the riverfront park'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Local Art Exhibition',
    description: 'Opening night of the "Urban Perspectives" exhibition'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Farmers Market',
    description: 'Fresh produce from local farmers at the weekly market'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/1571863/pexels-photo-1571863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Tech Startup Conference',
    description: 'Panel discussion with successful entrepreneurs'
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Charity 5K Run',
    description: 'Participants crossing the finish line in the annual charity run'
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Community Workshop',
    description: 'Children learning about sustainability at the eco-workshop'
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Cultural Festival',
    description: 'Traditional dance performance at the multicultural festival'
  }
];

// Load gallery items
const loadGalleryItems = () => {
  const galleryContainer = document.getElementById('gallery-container');
  if (!galleryContainer) return;
  
  let galleryHTML = '';
  galleryItems.forEach(item => {
    galleryHTML += `
      <div class="col-md-6 col-lg-3">
        <div class="gallery-item" data-id="${item.id}">
          <img src="${item.image}" alt="${item.caption}" class="img-fluid">
          <div class="gallery-caption">
            <h5>${item.caption}</h5>
            <p>${item.description}</p>
          </div>
        </div>
      </div>
    `;
  });
  
  galleryContainer.innerHTML = galleryHTML;
};

// Enlarge gallery image on double-click
const setupGalleryInteraction = () => {
  document.addEventListener('dblclick', (e) => {
    const galleryItem = e.target.closest('.gallery-item');
    if (galleryItem) {
      const imgSrc = galleryItem.querySelector('img').src;
      
      // Create enlarged view
      const enlargedView = document.createElement('div');
      enlargedView.className = 'enlarged-image';
      enlargedView.innerHTML = `<img src="${imgSrc}" alt="Enlarged image">`;
      
      // Add to body
      document.body.appendChild(enlargedView);
      
      // Close on click
      enlargedView.addEventListener('click', () => {
        document.body.removeChild(enlargedView);
      });
    }
  });
};

// Initialize gallery functionality
const setupGallery = () => {
  loadGalleryItems();
  setupGalleryInteraction();
};

export { setupGallery };