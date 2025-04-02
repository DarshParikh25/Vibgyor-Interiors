const Services = () => {
    const services = [
        {
            icon: (
                <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            title: 'Residential Design',
            description: 'Personalized home interior solutions that reflect your unique style and enhance your living experience.',
            features: [
                'Custom furniture design',
                'Space optimization',
                'Color scheme selection',
                'Lighting design'
            ]
        },
        {
            icon: (
                <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            title: 'Commercial Design',
            description: 'Professional workspace transformations that boost productivity and create an inspiring environment.',
            features: [
                'Office layout planning',
                'Brand integration',
                'Ergonomic design',
                'Acoustic solutions'
            ]
        },
        {
            icon: (
                <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: 'Consultation',
            description: 'Expert design advice and planning to help you make informed decisions about your space.',
            features: [
                'Design consultation',
                'Budget planning',
                'Material selection',
                'Timeline management'
            ]
        }
    ];

    return (
        <section id="services" className="py-20 px-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block w-24 h-1 bg-primary-500 rounded-full mb-4" />
                    <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
                        Our Services
                    </h2>
                    <div className="inline-block w-24 h-1 bg-primary-500 rounded-full" />
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative">
                                <div className="mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-secondary-600 mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-secondary-600">
                                            <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
