const Projects = () => {
    const projects = [
        { 
            image: '/assets/modern-minimalist-home.jpg', 
            title: 'Modern Minimalist Home', 
            description: 'Sleek, contemporary design for urban living with clean lines and open spaces.',
            category: 'Residential',
            location: 'Mumbai, India',
            year: '2024',
            area: '2,500 sq ft'
        },
        { 
            image: '/assets/rustic-farmhouse-kitchen.jpg', 
            title: 'Rustic Farmhouse Kitchen', 
            description: 'Warm and inviting kitchen renovation with natural materials and cozy atmosphere.',
            category: 'Residential',
            location: 'Pune, India',
            year: '2024',
            area: '1,800 sq ft'
        },
        { 
            image: '/assets/office-space-redesign.png', 
            title: 'Office Space Redesign', 
            description: 'Productive and inspiring workspace with modern amenities and collaborative areas.',
            category: 'Commercial',
            location: 'Vadodara, India',
            year: '2024',
            area: '5,000 sq ft'
        },
        { 
            image: '/assets/luxury-apartment-interior.jpg', 
            title: 'Luxury Apartment Interior', 
            description: 'Sophisticated living space with premium finishes and elegant design elements.',
            category: 'Residential',
            location: 'Rajkot, India',
            year: '2024',
            area: '3,200 sq ft'
        },
        { 
            image: '/assets/restaurant-renovation.jpg', 
            title: 'Restaurant Renovation', 
            description: 'Contemporary dining experience with unique ambiance and functional layout.',
            category: 'Commercial',
            location: 'Surat, India',
            year: '2024',
            area: '2,800 sq ft'
        },
        { 
            image: '/assets/modern-villa-design.jpg', 
            title: 'Modern Villa Design', 
            description: 'Spacious living areas with seamless indoor-outdoor connection and luxury amenities.',
            category: 'Residential',
            location: 'Ahemdabad, India',
            year: '2025',
            area: '4,500 sq ft'
        }
    ];

    return (
        <section id="projects" className="py-12 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-20">
                    <div className="inline-block w-24 h-1 bg-primary-500 rounded-full mb-4" />
                    <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-secondary-600 max-w-2xl mx-auto">
                        Explore our portfolio of successful projects, showcasing our expertise in creating stunning and functional spaces.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                {/* Category Badge */}
                                <div className="absolute top-6 right-6">
                                    <span className="bg-white/90 backdrop-blur-sm text-secondary-900 px-4 py-2 rounded-full text-sm font-medium">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-8">
                                <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-secondary-600 mb-6 line-clamp-2">
                                    {project.description}
                                </p>
                                
                                {/* Project Details */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <span className="text-sm text-secondary-500">Location</span>
                                        <p className="text-secondary-900 font-medium">{project.location}</p>
                                    </div>
                                    <div>
                                        <span className="text-sm text-secondary-500">Year</span>
                                        <p className="text-secondary-900 font-medium">{project.year}</p>
                                    </div>
                                    <div>
                                        <span className="text-sm text-secondary-500">Area</span>
                                        <p className="text-secondary-900 font-medium">{project.area}</p>
                                    </div>
                                </div>

                                {/* View Project Button */}
                                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center justify-center group">
                                    <span>View Project Details</span>
                                    <svg 
                                        className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
