const Themes = () => {
  const designThemes = [
    {
      id: 1,
      image: "/assets/modern-interior-design.jpg",
      title: "Modern",
      description: "Clean lines, minimalist furniture, and neutral color palettes",
      link: "/modern-interior-design"
    },
    {
      id: 2,
      image: "/assets/Rustic-interior-design.jpg",
      title: "Rustic",
      description: "Warm, natural materials, and a cozy, earthy vibe",
      link: "/rustic-interior-design"
    },
    {
      id: 3,
      image: "/assets/scandinavian-interior-design.jpg",
      title: "Scandinavian",
      description: "Minimalist, functional design with an emphasis on natural light",
      link: "/scandinavian-interior-design"
    },
    {
      id: 4,
      image: "/assets/traditional-interior-design.webp",
      title: "Traditional",
      description: "Timeless, ornate furnishings and rich, warm color schemes",
      link: "/traditional-interior-design"
    },
    {
      id: 5,
      image: "/assets/industrial-interior-design.avif",
      title: "Industrial",
      description: "Exposed bricks, metal, and a raw, unfinished aesthetic",
      link: "/industrial-interior-design"
    },
    {
      id: 6,
      image: "/assets/farmhouse-interior-design.jpg",
      title: "Farmhouse",
      description: "Rustic, cozy, and often featuring natural wood and white accents",
      link: "/farmhouse-interior-design"
    },
    {
      id: 7,
      image: "/assets/bohemian-interior-design.jpeg",
      title: "Bohemian",
      description: "Eclectic, colorful, and often featuring natural textures and patterns",
      link: "/bohemian-interior-design"
    },
    {
      id: 8,
      image: "/assets/minimalist-interior-design.webp",
      title: "Minimalist",
      description: "Focused on functionality, simplicity, and clean, geometric forms",
      link: "/minimalist-interior-design"
    },
    {
      id: 9,
      image: "/assets/art-deco-interior-design.webp",
      title: "Art Deco",
      description: "Bold geometric patterns, luxurious materials, and symmetrical designs",
      link: "/art-deco-interior-design"
    },
    {
      id: 10,
      image: "/assets/mediterranean-interior-design.jpg",
      title: "Mediterranean",
      description: "Warm colors, terracotta, natural textures, and indoor-outdoor living",
      link: "/mediterranean-interior-design"
    },
    {
      id: 11,
      image: "/assets/japanese-interior-design.jpg",
      title: "Japanese",
      description: "Minimalist, zen-inspired, with natural elements and clean lines",
      link: "/japanese-interior-design"
    },
    {
      id: 12,
      image: "/assets/Mid-century-modern-interior-design.jpg",
      title: "Mid-Century Modern",
      description: "Clean lines, organic shapes, and functional design from the 50s and 60s",
      link: "/mid-century-modern-interior-design"
    },
    {
      id: 13,
      image: "/assets/coastal-interior-design.jpeg",
      title: "Coastal",
      description: "Light, airy, with blues, whites, and nautical elements",
      link: "/coastal-interior-design"
    },
    {
      id: 14,
      image: "/assets/gothic-interior-design.webp",
      title: "Gothic",
      description: "Dark, dramatic, with ornate details and rich textures",
      link: "/gothic-interior-design"
    },
    {
      id: 15,
      image: "/assets/moroccan-interior-design.jpg",
      title: "Moroccan",
      description: "Rich colors, intricate patterns, and ornate decorative elements",
      link: "/moroccan-interior-design"
    }
  ];

  return (
    <section id="themes" className="py-12 sm:py-20 bg-secondary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-block w-24 h-1 bg-primary-500 rounded-full mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Design Themes
          </h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Discover our curated collection of interior design themes, each crafted to transform your space into a unique expression of your style.
          </p>
        </div>

        {/* Static 3x5 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {designThemes.map((theme) => (
            <div 
              key={theme.id}
              className="relative overflow-hidden rounded-3xl group"
            >
              {/* Background Image with Scale Effect */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={theme.image} 
                  alt={theme.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>

              {/* Content Overlay - Always Visible */}
              <div className="absolute inset-0 -bottom-2.5 group-hover:bottom-0 transition-all ease-in-out duration-500 flex flex-col justify-end p-6 sm:p-8">
                <div className="relative">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {theme.title}
                  </h3>
                  <p className="text-white/90 mb-6">
                    {theme.description}
                  </p>
                  <button className="bg-white text-secondary-900 px-6 py-3 rounded-full font-medium hover:bg-primary-500 hover:text-white flex items-center group">
                    <span>Explore Theme</span>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Themes;