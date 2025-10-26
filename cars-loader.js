// TANZARIDE - Dynamic Car Loader
// Dynamically generates car cards from the cars data

document.addEventListener('DOMContentLoaded', function() {
    
    // Check if we're on the cars page
    const carsGrid = document.getElementById('cars-grid');
    if (!carsGrid) return;

    // Get filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    let currentFilter = 'all';

    // Initialize the page
    loadCars('all');
    setupFilters();

    // Load and display cars
    function loadCars(filterCategory = 'all') {
        carsGrid.innerHTML = ''; // Clear existing cars
        
        let vehiclesToDisplay = [];
        
        if (filterCategory === 'all') {
            vehiclesToDisplay = carsData.getAllVehicles();
        } else {
            const category = carsData.getCategoryInfo(filterCategory);
            if (category) {
                vehiclesToDisplay = category.vehicles.map(vehicle => ({
                    ...vehicle,
                    categoryName: category.name,
                    categoryId: category.id
                }));
            }
        }

        // Display count
        updateVehicleCount(vehiclesToDisplay.length);

        // Create car cards
        vehiclesToDisplay.forEach(vehicle => {
            const carCard = createCarCard(vehicle);
            carsGrid.appendChild(carCard);
        });

        // Add animation
        animateCards();
    }

    // Create a car card element
    function createCarCard(vehicle) {
        const article = document.createElement('article');
        article.className = 'car-card';
        article.setAttribute('data-category', vehicle.categoryId);

        // Get the first image (now using direct path from assets)
        const firstImage = vehicle.images && vehicle.images.length > 0 ? vehicle.images[0] : 'assets/Car.webp';

        // Create features HTML
        const featuresHTML = vehicle.features
            ? vehicle.features.slice(0, 3).map(feature => `<span class="feature-tag">${feature}</span>`).join('')
            : '';

        article.innerHTML = `
            <div class="car-image">
                <img src="${firstImage}"
                     alt="${vehicle.name} - ${vehicle.category} for rent in Tanzania"
                     onerror="this.src='assets/Car.webp'">
                <div class="car-badge">${vehicle.category}</div>
                ${vehicle.images && vehicle.images.length > 1 ? `<div class="image-count">📷 ${vehicle.images.length} photos</div>` : ''}
            </div>
            <div class="car-details">
                <h3>${vehicle.name}</h3>
                <p class="car-category">🚗 ${vehicle.categoryName}</p>
                <p class="car-description">${vehicle.description}</p>
                ${featuresHTML ? `<div class="car-features">${featuresHTML}</div>` : ''}
                <div class="car-actions">
                    <a href="contact.html?car=${encodeURIComponent(vehicle.name)}" class="btn btn-primary">Book Now</a>
                    <a href="gallery.html#${vehicle.name.toLowerCase().replace(/\s+/g, '-')}" class="btn btn-outline">View Gallery</a>
                </div>
            </div>
        `;

        return article;
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
                currentFilter = filter;
                
                // Load cars with filter
                loadCars(filter);
            });
        });
    }

    // Update vehicle count display
    function updateVehicleCount(count) {
        const countElement = document.getElementById('vehicle-count');
        if (countElement) {
            const categoryText = currentFilter === 'all' ? 'All Categories' : 
                carsData.getCategoryInfo(currentFilter)?.name || 'Category';
            countElement.textContent = `Showing ${count} vehicle${count !== 1 ? 's' : ''} in ${categoryText}`;
        }
    }

    // Animate cards on load
    function animateCards() {
        const cards = document.querySelectorAll('.car-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }

    // Search functionality (if search box exists)
    const searchInput = document.getElementById('car-search');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.car-card');
            
            let visibleCount = 0;
            cards.forEach(card => {
                const vehicleName = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('.car-description').textContent.toLowerCase();
                
                if (vehicleName.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Update count for search results
            if (searchTerm) {
                const countElement = document.getElementById('vehicle-count');
                if (countElement) {
                    countElement.textContent = `Found ${visibleCount} vehicle${visibleCount !== 1 ? 's' : ''} matching "${searchTerm}"`;
                }
            }
        });
    }

    // Category stats (if stats section exists)
    const statsContainer = document.getElementById('category-stats');
    if (statsContainer) {
        displayCategoryStats();
    }

    function displayCategoryStats() {
        const stats = carsData.categories.map(category => ({
            name: category.name,
            count: category.vehicles.length,
            id: category.id
        }));

        statsContainer.innerHTML = stats.map(stat => `
            <div class="stat-card" data-category="${stat.id}">
                <div class="stat-number">${stat.count}</div>
                <div class="stat-label">${stat.name}</div>
            </div>
        `).join('');

        // Make stat cards clickable
        document.querySelectorAll('.stat-card').forEach(card => {
            card.addEventListener('click', function() {
                const categoryId = this.getAttribute('data-category');
                
                // Update filter buttons
                filterButtons.forEach(btn => {
                    if (btn.getAttribute('data-filter') === categoryId) {
                        btn.click();
                    }
                });

                // Scroll to cars grid
                carsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }
});

