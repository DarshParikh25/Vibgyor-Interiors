import ImageCarousel from './Image';

const Home = () => {
    const scrollToSection = (elementId) => {
        const element = document.getElementById(elementId);
        const offset = elementId === 'about' ? 50 : 0; // Add 50px offset for About section
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    return (
        <section id="home" className="relative min-h-screen">
            {/* Background Image Carousel */}
            <div className="absolute inset-0">
                <ImageCarousel />
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />

            {/* Content */}
            <div className="relative z-10 min-h-screen flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Transform Your Space
                        </h1>
                        <div className="w-24 h-1 bg-primary-500 mx-auto mb-8 rounded-full" />
                        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Create stunning, functional interiors that reflect your unique style and elevate your living experience.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onClick={() => scrollToSection('services')}
                                className="btn-primary px-8 py-4 text-lg font-medium"
                            >
                                Explore Our Services
                            </button>
                            <button 
                                onClick={() => scrollToSection('contact')}
                                className="btn-secondary px-8 py-4 text-lg font-medium"
                            >
                                Get in Touch
                            </button>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <button
                            onClick={() => scrollToSection('about')}
                            className="group flex flex-col items-center text-white/80 hover:text-white transition-colors"
                        >
                            <span className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                Scroll Down
                            </span>
                            <div className="w-12 h-12 p-3 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/100 transition-colors  animate-bounce">
                                <svg 
                                    className="w-6 h-6" 
                                    fill="none" 
                                    stroke="black" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                                    />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
