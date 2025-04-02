import PerInfo from './PerInfo'
import Flow from './Flow'

const About = () => {
    return (
        <section id="about" className="py-12 px-4 sm:py-20 bg-secondary-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-16">
                    <div className="inline-block w-24 h-1 bg-primary-500 rounded-full mb-4" />
                    <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
                        About Us
                    </h2>
                    <div className="inline-block w-24 h-1 bg-primary-500 rounded-full" />
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        {/* Creative Element */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary-500/10 rounded-2xl transform rotate-3" />
                            <div className="absolute inset-0 bg-secondary-500/10 rounded-2xl transform -rotate-3" />
                            <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-primary-50 rounded-xl p-4 text-center">
                                        <div className="text-3xl font-bold text-primary-500 mb-2">10+</div>
                                        <div className="text-sm text-secondary-600">Years Experience</div>
                                    </div>
                                    <div className="bg-secondary-50 rounded-xl p-4 text-center">
                                        <div className="text-3xl font-bold text-secondary-500 mb-2">500+</div>
                                        <div className="text-sm text-secondary-600">Projects Completed</div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-secondary-900">Expert Team</h4>
                                            <p className="text-sm text-secondary-600">Highly skilled professionals</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-secondary-900">Fast Delivery</h4>
                                            <p className="text-sm text-secondary-600">Quick project completion</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-secondary-900">
                                Your Vision, Our Expertise
                            </h3>
                            <p className="text-secondary-600 leading-relaxed">
                                We&apos;re passionate about creating spaces that inspire and delight. With years of experience in interior design, we bring your vision to life with precision and creativity.
                            </p>
                            <p className="text-secondary-600 leading-relaxed">
                                Our team of expert designers and craftsmen work together to deliver exceptional results that exceed your expectations. We believe in the power of thoughtful design to transform not just spaces, but lives.
                            </p>
                            <div className="grid grid-cols-2 gap-6 pt-4">
                                <div className="flex items-center space-x-3">
                                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-secondary-700">Expert Designers</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-secondary-700">Quality Materials</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-secondary-700">Timely Delivery</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-secondary-700">Customer Satisfaction</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mt-16 sm:mt-32">
                    <div className="text-center mb-8 sm:mb-16">
                        <div className="relative inline-block">
                            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
                                Meet Our Team
                            </h2>
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary-500 rounded-full" />
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary-500 rounded-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                        <PerInfo 
                            image="/assets/Living-room-3.jpeg" 
                            title="Mr. Pranav Parikh" 
                            deg="Marketing Head" 
                        />
                        <PerInfo 
                            image="/assets/Living-room-3.jpeg" 
                            title="Mr. Pranav Parikh" 
                            deg="Marketing Head" 
                        />
                        <PerInfo 
                            image="/assets/Living-room-3.jpeg" 
                            title="Mr. Pranav Parikh" 
                            deg="Marketing Head" 
                        />
                        <PerInfo 
                            image="/assets/Living-room-3.jpeg" 
                            title="Mr. Pranav Parikh" 
                            deg="Marketing Head" 
                        />
                    </div>
                </div>

                {/* Process Flow Section */}
                <div className="mt-16 sm:mt-32">
                    <div className="relative">
                        <Flow />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
