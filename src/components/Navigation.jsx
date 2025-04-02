import { useState, useEffect } from 'react';

const Navigation = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'themes', 'projects', 'services', 'contact'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (!element) return false;
                const rect = element.getBoundingClientRect();
                return (
                    rect.top <= window.innerHeight / 3 && 
                    rect.bottom >= window.innerHeight / 3
                );
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }

            // Show scroll to top button when scrolling down
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (elementId) => {
        const element = document.getElementById(elementId);
        const offset = elementId === 'contact' ? 30 : 50;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const navigationLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'themes', label: 'Themes' },
        { id: 'projects', label: 'Projects' },
        { id: 'services', label: 'Services' },
        { id: 'contact', label: 'Contact Us' }
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 bg-white/75 backdrop-blur-md shadow-sm z-[100]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 sm:h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 cursor-pointer" onClick={scrollToTop}>
                            <img src="/assets/logo.jpg" alt="Logo" className="h-20 w-auto sm:h-24" />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navigationLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={`
                                        relative 
                                        text-secondary-600 
                                        transition-all 
                                        duration-300 
                                        ease-in-out 
                                        ${activeSection === link.id 
                                            ? 'text-primary-600 font-semibold' 
                                            : 'hover:text-primary-500'
                                        }
                                        after:absolute 
                                        after:bottom-[-4px] 
                                        after:left-0 
                                        after:w-full 
                                        after:h-[2px] 
                                        after:bg-primary-600 
                                        ${activeSection === link.id 
                                            ? 'after:scale-x-100' 
                                            : 'after:scale-x-0'
                                        }
                                        after:transition-transform 
                                        after:duration-300 
                                        hover:after:scale-x-100
                                    `}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-secondary-600 hover:text-primary-600 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isMobileMenuOpen ? (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-md shadow-lg">
                    {navigationLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`
                                block w-full text-left px-3 py-2 rounded-md text-base font-medium
                                ${activeSection === link.id 
                                    ? 'bg-primary-50 text-primary-600' 
                                    : 'text-secondary-600 hover:bg-secondary-50 hover:text-primary-600'
                                }
                            `}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 z-[99]"
                    aria-label="Scroll to top"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 10l7-7m0 0l7 7m-7-7v18" 
                        />
                    </svg>
                </button>
            )}
        </>
    );
};

export default Navigation;