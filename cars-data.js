// TANZARIDE - Car Data Configuration
// This file contains all vehicle information organized by category

const carsData = {
    categories: [
        {
            id: 'ceremonial-luxury',
            name: 'Ceremonial & Luxury Cars',
            description: 'Premium vehicles for special occasions, weddings, and executive travel',
            vehicles: [
                {
                    name: 'BMW 7 Series',
                    images: ['assets/BMW 7 SERIES.jpeg'],
                    description: 'Luxurious executive sedan perfect for weddings, corporate events, and VIP transportation. Features premium leather interior, advanced technology, and exceptional comfort.',
                    features: ['Premium Leather', 'Advanced Technology', 'Executive Comfort', 'Climate Control'],
                    category: 'Luxury Sedan'
                },
                {
                    name: 'Land Rover Discovery',
                    images: ['assets/LANDROVER DISCOVERY.jpg'],
                    description: 'Sophisticated luxury SUV combining elegance with capability. Ideal for upscale events, executive travel, and premium safari experiences.',
                    features: ['7-Seater', 'All-Terrain Capability', 'Luxury Interior', 'Premium Sound System'],
                    category: 'Luxury SUV'
                },
                {
                    name: 'Range Rover Vogue',
                    images: ['assets/RANGE ROVER VOGUE.jpg', 'assets/RANGE ROVER VOGUE-1.jpg'],
                    description: 'The pinnacle of luxury SUVs. Perfect for high-profile events, weddings, and executive transportation with unmatched prestige and comfort.',
                    features: ['Ultimate Luxury', 'Air Suspension', 'Premium Materials', 'Advanced Safety'],
                    category: 'Ultra-Luxury SUV'
                }
            ]
        },
        {
            id: 'city-short-trips',
            name: 'City & Short Trips Cars',
            description: 'Economical and efficient vehicles perfect for city driving and short journeys',
            vehicles: [
                {
                    name: 'Honda Fit',
                    images: ['assets/HONDA FIT.jpg', 'assets/HONDA FIT1.jpg'],
                    description: 'Compact and fuel-efficient hatchback ideal for city navigation and daily commutes. Surprisingly spacious interior with excellent fuel economy.',
                    features: ['Fuel Efficient', 'Compact Size', 'Easy Parking', 'Reliable'],
                    category: 'Compact Hatchback'
                },
                {
                    name: 'Mazda Demio',
                    images: ['assets/MAZDA DEMIO.jpg'],
                    description: 'Stylish and economical city car with modern features. Perfect for urban driving, shopping trips, and short-distance travel.',
                    features: ['Modern Design', 'Low Fuel Consumption', 'Comfortable Ride', 'Easy to Drive'],
                    category: 'City Car'
                },
                {
                    name: 'Nissan Note',
                    images: ['assets/NISSAN NOTE.jpg'],
                    description: 'Practical and versatile compact car with spacious interior. Great for city driving, errands, and short family trips.',
                    features: ['Spacious Interior', 'Good Visibility', 'Economical', 'Practical'],
                    category: 'Compact Car'
                },
                {
                    name: 'Toyota Axio',
                    images: ['assets/TOYOTA AXIO.jpg', 'assets/TOYOTA AXIO1.jpg', 'assets/TOYOTA AXIO2.jpg'],
                    description: 'Reliable sedan perfect for business trips and daily commutes. Known for Toyota\'s legendary reliability and comfort.',
                    features: ['Reliable', 'Comfortable', 'Professional Look', 'Good Fuel Economy'],
                    category: 'Compact Sedan'
                },
                {
                    name: 'Toyota Vitz',
                    images: ['assets/TOYOTA VITZ.jpg'],
                    description: 'Popular compact car known for reliability and efficiency. Excellent choice for city driving and short trips with low running costs.',
                    features: ['Very Economical', 'Easy Maintenance', 'Compact', 'Reliable'],
                    category: 'Compact Hatchback'
                }
            ]
        },
        {
            id: 'safari-cars',
            name: 'Safari Cars',
            description: 'Rugged 4x4 vehicles built for adventure and wildlife safari experiences',
            vehicles: [
                {
                    name: 'Land Rover Defender',
                    images: ['assets/LAND ROVER DEFENDER.jpg', 'assets/LAND ROVER DEFENDER1.jpg'],
                    description: 'Iconic off-road vehicle perfect for serious safari adventures. Unmatched capability on rough terrain with authentic safari experience.',
                    features: ['Extreme Off-Road', 'Rugged Build', 'Safari Ready', 'Adventure Icon'],
                    category: '4x4 Off-Road'
                },
                {
                    name: 'Nissan Patrol',
                    images: ['assets/NISSAN PATROL.jpg', 'assets/NISSAN PATROL1.jpg', 'assets/NISSAN PATROL3.jpg'],
                    description: 'Powerful 4x4 SUV designed for challenging terrains and safari expeditions. Combines comfort with exceptional off-road capability.',
                    features: ['Powerful Engine', '4x4 Capability', 'Spacious', 'Durable'],
                    category: 'Safari SUV'
                },
                {
                    name: 'Toyota Hilux Double Cabin',
                    images: ['assets/TOYOTA HILUX DOUBLE CABIN.jpg'],
                    description: 'Legendary pickup truck renowned for reliability and toughness. Perfect for safari adventures and rough terrain exploration.',
                    features: ['Indestructible', 'Off-Road Ready', '4x4', 'Cargo Space'],
                    category: '4x4 Pickup'
                },
                {
                    name: 'Toyota Land Cruiser (Safari)',
                    images: ['assets/TOYOTA LAND CRUISER (Safari Edition).jpg', 'assets/TOYOTA LAND CRUISER (Safari Edition)1.jpg', 'assets/TOYOTA LAND CRUISER (Safari Edition)2.jpg', 'assets/TOYOTA LAND CRUISER (Safari Edition)3.jpg'],
                    description: 'The ultimate safari vehicle combining luxury with extreme capability. Industry standard for professional safari tours and wildlife viewing.',
                    features: ['Safari Champion', 'Pop-Up Roof', 'Extreme Reliability', 'Comfortable'],
                    category: 'Premium Safari 4x4'
                },
                {
                    name: 'Toyota Prado (4x4)',
                    images: ['assets/TOYOTA PRADO (4_4).png', 'assets/TOYOTA PRADO (4_4)1.jpg', 'assets/TOYOTA PRADO (4_4)2.jpg'],
                    description: 'Premium 4x4 SUV offering comfort and capability for safari adventures. Perfect balance of luxury and off-road performance.',
                    features: ['Premium Comfort', '4x4 System', 'Spacious', 'Reliable'],
                    category: 'Premium 4x4 SUV'
                }
            ]
        },
        {
            id: 'tour-group-vans',
            name: 'Tour & Group Travel Vans',
            description: 'Spacious vans and buses for group travel, tours, and family trips',
            vehicles: [
                {
                    name: 'Coaster Bus (Mini Bus)',
                    images: ['assets/COASTER BUS (MINI BUS).jpg'],
                    description: 'Comfortable mini bus perfect for group tours and large family trips. Seats up to 25 passengers with ample luggage space.',
                    features: ['25+ Seats', 'Air Conditioning', 'Luggage Space', 'Tour Ready'],
                    category: 'Mini Bus'
                },
                {
                    name: 'Hyundai H1',
                    images: ['assets/HYUNDAI H1.jpg'],
                    description: 'Modern and comfortable van ideal for small group travel and family vacations. Seats up to 9 passengers with excellent comfort.',
                    features: ['9-Seater', 'Modern Interior', 'Comfortable', 'Spacious'],
                    category: 'Passenger Van'
                },
                {
                    name: 'Nissan Caravan',
                    images: ['assets/NISSAN CARAVAN.jpg'],
                    description: 'Reliable and spacious van perfect for group tours and airport transfers. Accommodates up to 12 passengers comfortably.',
                    features: ['12-Seater', 'Reliable', 'Good Luggage Space', 'Comfortable'],
                    category: 'Group Van'
                },
                {
                    name: 'Toyota Hiace',
                    images: ['assets/TOYOTA HIACE.jpg'],
                    description: 'The most popular van for group travel in Tanzania. Extremely reliable with seating for up to 14 passengers. Perfect for tours and family trips.',
                    features: ['14-Seater', 'Legendary Reliability', 'Air Conditioning', 'Tour Favorite'],
                    category: 'Tour Van'
                }
            ]
        },
        {
            id: 'logistics-cargo',
            name: 'Logistics & Transport, Cargo Vehicles',
            description: 'Heavy-duty trucks for cargo transport and logistics operations',
            vehicles: [
                {
                    name: 'Scania Truck',
                    images: ['assets/SCANIA TRUCK.jpeg'],
                    description: 'Heavy-duty truck for large-scale cargo transport and logistics. Powerful, reliable, and built for long-distance hauling.',
                    features: ['Heavy Duty', 'Large Capacity', 'Powerful Engine', 'Long Distance'],
                    category: 'Cargo Truck'
                },
                {
                    name: 'Volvo FH Series',
                    images: ['assets/VOLVO FH SERIES.jpg'],
                    description: 'Premium heavy-duty truck for professional logistics operations. Advanced features and exceptional reliability for commercial transport.',
                    features: ['Premium Truck', 'Advanced Technology', 'Fuel Efficient', 'Comfortable Cab'],
                    category: 'Heavy Truck'
                }
            ]
        }
    ],

    // Helper function to get all vehicles
    getAllVehicles() {
        return this.categories.flatMap(category => 
            category.vehicles.map(vehicle => ({
                ...vehicle,
                categoryName: category.name,
                categoryId: category.id
            }))
        );
    },

    // Helper function to get vehicles by category
    getVehiclesByCategory(categoryId) {
        const category = this.categories.find(cat => cat.id === categoryId);
        return category ? category.vehicles : [];
    },

    // Helper function to get category info
    getCategoryInfo(categoryId) {
        return this.categories.find(cat => cat.id === categoryId);
    }
};

// Make it available globally
if (typeof window !== 'undefined') {
    window.carsData = carsData;
}

