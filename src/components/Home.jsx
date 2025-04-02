import ImageCarousel from './Image';

const Home = () => {
    const scrollToSection = (elementId) => {
        const element = document.getElementById(elementId);
        const offset = elementId === 'contact' ? 30 : 50; // Add 30px offset for Contact section and 50px for rest of the sections
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    return (
        <section id="home" className="relative min-h-[100dvh]">
            {/* Background Image Carousel */}
            <div className="absolute inset-0">
                <ImageCarousel />
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />

            {/* Content */}
            <div className="relative z-10 min-h-[100dvh] flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                            Transform Your Space
                        </h1>
                        <div className="w-24 h-1 bg-primary-500 mx-auto mb-6 sm:mb-8 rounded-full" />
                        <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                            Create stunning, functional interiors that reflect your unique style and elevate your living experience.
                        </p>
                        <div className="flex items-center flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <button 
                                onClick={() => scrollToSection('services')}
                                className="min-w-46 btn-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium"
                            >
                                Explore Our Services
                            </button>
                            <button 
                                onClick={() => scrollToSection('contact')}
                                className="min-w-[11.5rem] btn-secondary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium flex justify-center"
                            >
                                Get in Touch
                            </button>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
                        <button
                            onClick={() => scrollToSection('about')}
                            className="group flex flex-col items-center text-white/80 hover:text-white transition-colors"
                        >
                            <span className="mb-3 sm:mb-5 opacity-0 group-hover:opacity-100 transition-all duration-250 font-semibold tracking-wider text-sm sm:text-base">
                                Scroll Down
                            </span>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-3 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/100 transition-colors animate-bounce">
                                <svg 
                                    className="w-5 h-5 sm:w-6 sm:h-6" 
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
