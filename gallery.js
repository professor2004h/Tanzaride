// TANZARIDE - Gallery JavaScript
// Handles gallery display and lightbox functionality

document.addEventListener('DOMContentLoaded', function() {
    
    // Check if we're on the gallery page
    const galleryContainer = document.getElementById('gallery-container');
    if (!galleryContainer) return;

    // Lightbox elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxCounter = document.getElementById('lightbox-counter');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    // Gallery state
    let currentImages = [];
    let currentIndex = 0;
    let currentFilter = 'all';

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Initialize gallery
    loadGallery('all');
    setupFilters();
    setupLightbox();

    // Load gallery images
    function loadGallery(filterCategory = 'all') {
        galleryContainer.innerHTML = '';
        currentFilter = filterCategory;
        
        let categoriesToShow = [];
        
        if (filterCategory === 'all') {
            categoriesToShow = carsData.categories;
        } else {
            const category = carsData.getCategoryInfo(filterCategory);
            if (category) {
                categoriesToShow = [category];
            }
        }

        // Create gallery sections by category
        categoriesToShow.forEach(category => {
            const categorySection = createCategorySection(category);
            galleryContainer.appendChild(categorySection);
        });

        // Animate gallery items
        animateGalleryItems();
    }

    // Create a category section
    function createCategorySection(category) {
        const section = document.createElement('div');
        section.className = 'gallery-category-section';
        section.id = category.id;

        const header = document.createElement('div');
        header.className = 'gallery-category-header';
        header.innerHTML = `
            <h2>${category.name}</h2>
            <p>${category.description}</p>
        `;
        section.appendChild(header);

        const grid = document.createElement('div');
        grid.className = 'gallery-grid';

        // Add all vehicles from this category
        category.vehicles.forEach(vehicle => {
            vehicle.images.forEach((image, imageIndex) => {
                const galleryItem = createGalleryItem(vehicle, image, imageIndex, category);
                grid.appendChild(galleryItem);
            });
        });

        section.appendChild(grid);
        return section;
    }

    // Create a gallery item
    function createGalleryItem(vehicle, imageName, imageIndex, category) {
        const item = document.createElement('div');
        item.className = 'gallery-item';

        // Image path is now directly from the images array
        const imagePath = imageName;

        item.innerHTML = `
            <img src="${imagePath}"
                 alt="${vehicle.name} - ${vehicle.category}"
                 loading="lazy"
                 onerror="this.src='assets/Car.webp'">
            <div class="gallery-overlay">
                <h4>${vehicle.name}</h4>
                <p>${vehicle.category}</p>
            </div>
        `;

        // Add click event to open lightbox
        item.addEventListener('click', () => {
            openLightbox(vehicle, category, imageIndex);
        });

        return item;
    }

    // Setup filter buttons
    function setupFilters() {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filter = this.getAttribute('data-filter');
                
                // Load gallery with filter
                loadGallery(filter);
            });
        });
    }

    // Setup lightbox controls
    function setupLightbox() {
        // Close lightbox
        closeBtn.addEventListener('click', closeLightbox);
        
        // Close on background click
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Previous image
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showPreviousImage();
        });

        // Next image
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showNextImage();
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (!lightbox.classList.contains('active')) return;
            
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPreviousImage();
            if (e.key === 'ArrowRight') showNextImage();
        });
    }

    // Open lightbox
    function openLightbox(vehicle, category, startIndex = 0) {
        // Prepare images array
        currentImages = vehicle.images.map((image, index) => ({
            path: `${vehicle.folder}/${image}`,
            name: vehicle.name,
            category: vehicle.category,
            description: vehicle.description,
            index: index
        }));

        currentIndex = startIndex;
        showLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Show current image in lightbox
    function showLightboxImage() {
        if (currentImages.length === 0) return;

        const currentImage = currentImages[currentIndex];
        
        lightboxImage.src = currentImage.path;
        lightboxImage.alt = `${currentImage.name} - ${currentImage.category}`;
        lightboxTitle.textContent = currentImage.name;
        lightboxDescription.textContent = currentImage.description;
        lightboxCounter.textContent = `Image ${currentIndex + 1} of ${currentImages.length}`;

        // Show/hide navigation buttons
        prevBtn.style.display = currentImages.length > 1 ? 'block' : 'none';
        nextBtn.style.display = currentImages.length > 1 ? 'block' : 'none';
    }

    // Show previous image
    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        showLightboxImage();
    }

    // Show next image
    function showNextImage() {
        currentIndex = (currentIndex + 1) % currentImages.length;
        showLightboxImage();
    }

    // Animate gallery items
    function animateGalleryItems() {
        const items = document.querySelectorAll('.gallery-item');
        items.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, index * 30);
        });
    }

    // Handle hash navigation (e.g., gallery.html#toyota-hiace)
    if (window.location.hash) {
        const vehicleId = window.location.hash.substring(1);
        setTimeout(() => {
            const element = document.getElementById(vehicleId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 500);
    }
});

