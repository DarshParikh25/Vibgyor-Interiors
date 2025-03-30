const Flow = () => {
    const features = [
        {
            title: 'Consultation',
            description: 'We begin with a detailed consultation to understand your vision, requirements, and preferences.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
            )
        },
        {
            title: 'Design',
            description: 'Our expert designers create detailed plans and 3D visualizations of your space.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            )
        },
        {
            title: 'Execution',
            description: 'We bring your design to life with precision and attention to detail.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: 'Delivery',
            description: 'Your transformed space is delivered on time and ready for you to enjoy.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            )
        }
    ];

    return (
        <div className="relative">
            {/* Heading */}
            <div className="text-center mb-16">
                <div className="relative inline-block">
                    <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
                        Why VIBGYOR?
                    </h2>
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary-500 rounded-full" />
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary-500 rounded-full" />
                </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div 
                        key={index}
                        className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        {/* Number Badge */}
                        <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {index + 1}
                        </div>

                        {/* Icon */}
                        <div className="text-primary-500 mb-4">
                            {feature.icon}
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                            {feature.title}
                        </h3>
                        <p className="text-secondary-600">
                            {feature.description}
                        </p>

                        {/* Hover Line */}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all rounded-full duration-300 group-hover:w-full" />
                    </div>
                ))}
            </div>

            {/* Connecting Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary-200 -z-10" />
        </div>
    );
};

export default Flow;
