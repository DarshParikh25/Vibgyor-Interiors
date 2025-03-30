const Projects = () => {
    return (
        <div>
            <section id="projects" className="min-h-screen pt-20 bg-secondary-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Projects</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { 
                                image: '#', 
                                title: 'Modern Minimalist Home', 
                                desc: 'Sleek, contemporary design for urban living' 
                            },
                            { 
                                image: '#', 
                                title: 'Rustic Farmhouse Kitchen', 
                                desc: 'Warm and inviting kitchen renovation' 
                            },
                            { 
                                image: '#', 
                                title: 'Office Space Redesign', 
                                desc: 'Productive and inspiring workspace' 
                            }
                        ].map((project, index) => (
                            <div 
                                key={index} 
                                className="bg-gray-100 rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:  scale-105 hover:shadow-xl"
                            >
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-bold text-xl mb-2 text-blue-600">{project.title}</h3>
                                    <p className="text-gray-600">{project.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>    
        </div>
    )
}

export default Projects
