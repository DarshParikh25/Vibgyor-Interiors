const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
        title: "Company",
        links: [
            { name: "About Us", href: "/about" },
            { name: "Our Team", href: "/team" },
            { name: "Careers", href: "/careers" },
            { name: "Contact", href: "/contact" },
        ],
        },
        {
        title: "Services",
        links: [
            { name: "Residential Design", href: "/services/residential" },
            { name: "Commercial Design", href: "/services/commercial" },
            { name: "3D Visualization", href: "/services/visualization" },
            { name: "Color Consultation", href: "/services/consultation" },
        ],
        },
        {
        title: "Resources",
        links: [
            { name: "Portfolio", href: "/portfolio" },
            { name: "Design Blog", href: "/blog" },
            { name: "FAQs", href: "/faqs" },
            { name: "Testimonials", href: "/testimonials" },
        ],
        },
    ];

    const socials = [
        { name: "Instagram", icon: "ri-instagram-line", href: "#" },
        { name: "LinkedIn", icon: "ri-linkedin-fill", href: "#" },
        { name: "Facebook", icon: "ri-facebook-fill", href: "#" },
        { name: "Twitter", icon: "ri-twitter-fill", href: "#" }
    ];

    return (
        <footer className="bg-secondary-900 text-white">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 space-y-8">
            {/* Company Info */}
            <div className="md:col-span-4 lg:col-span-5">
                <div className="relative -left-3">
                <img
                    src="/assets/logo.jpg"
                    alt="VibGyor Interiors"
                    className="h-24 w-auto"
                />
                </div>
                <p className="text-secondary-300 mb-6 max-w-full">
                Transforming spaces into personalized sanctuaries. VibGyor
                Interiors blends artistic vision with practical solutions to
                create interiors that inspire and delight.
                </p>
                <div className="flex space-x-4">
                {socials.map((social) => (
                    <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center text-secondary-300 hover:bg-primary-500 hover:text-white transition-all duration-300"
                    aria-label={social.name}
                    >
                    <i className={`text-xl ${social.icon}`}></i>
                    </a>
                ))}
                </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-7 lg:col-span-6 grid grid-cols-3 gap-8">
                {footerLinks.map((category) => (
                    <div key={category.title}>
                        <h3 className="text-lg font-semibold text-white mb-4">
                            {category.title}
                        </h3>
                        <ul className="space-y-3">
                        {category.links.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Newsletter */}
            <div className="md:col-span-12 lg:col-span-1">
                <h3 className="text-lg font-semibold text-white mb-4">
                    Stay Inspired
                </h3>
                <p className="text-secondary-300 mb-4">
                    Subscribe to our newsletter for design tips and inspiration.
                </p>
                <form className="flex flex-col sm:flex-row gap-2">
                    <input
                        type="email"
                        placeholder="Your email"
                        className="px-4 py-2 bg-secondary-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 py-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-secondary-400 text-sm">
                    &copy; {currentYear} VibGyor Interiors. All Rights Reserved.
                </p>
                <div className="mt-4 sm:mt-0 flex space-x-6 text-sm text-secondary-400">
                    <a
                    href="/privacy-policy"
                    className="hover:text-primary-400 transition-colors duration-300"
                    >
                        Privacy Policy
                    </a>
                    <a
                    href="/terms-of-service"
                    className="hover:text-primary-400 transition-colors duration-300"
                    >
                        Terms of Service
                    </a>
                    <a
                    href="/cookie-policy"
                    className="hover:text-primary-400 transition-colors duration-300"
                    >
                        Cookie Policy
                    </a>
                </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
