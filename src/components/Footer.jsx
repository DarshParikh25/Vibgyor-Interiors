const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 Elegant Interiors. All Rights Reserved.</p>
                    <div className="mt-4 space-x-4">
                        {['Instagram', 'Pinterest', 'LinkedIn'].map((social, index) => (
                            <a 
                                key={index} 
                                href="#" 
                                className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110 inline-block"
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
