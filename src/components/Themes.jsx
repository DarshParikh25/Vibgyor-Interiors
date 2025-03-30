import { useState, useEffect, useRef } from 'react';

const Themes = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const intervalRef = useRef(null);

  const designThemes = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556229789-c46dba61f39e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Modern",
      description: "Clean lines, minimalist furniture, and neutral color palettes",
      link: "/modern-interior-design"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1565190692551-44d8b3b9a843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Rustic",
      description: "Warm, natural materials, and a cozy, earthy vibe",
      link: "/rustic-interior-design"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1603198008116-024d39b06966?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Scandinavian",
      description: "Minimalist, functional design with an emphasis on natural light",
      link: "/scandinavian-interior-design"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Traditional",
      description: "Timeless, ornate furnishings and rich, warm color schemes",
      link: "/traditional-interior-design"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1519710164239-da123dc3408a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Industrial",
      description: "Exposed bricks, metal, and a raw, unfinished aesthetic",
      link: "/industrial-interior-design"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Farmhouse",
      description: "Rustic, cozy, and often featuring natural wood and white accents",
      link: "/farmhouse-interior-design"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Bohemian",
      description: "Eclectic, colorful, and often featuring natural textures and patterns",
      link: "/bohemian-interior-design"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1603398938378-e54eab446efe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Minimalist",
      description: "Focused on functionality, simplicity, and clean, geometric forms",
      link: "/minimalist-interior-design"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1618221195710-dd6b30bc5e42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Art Deco",
      description: "Bold geometric patterns, luxurious materials, and symmetrical designs",
      link: "/art-deco-interior-design"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1617104666298-550a8cdf9a39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Mediterranean",
      description: "Warm colors, terracotta, natural textures, and indoor-outdoor living",
      link: "/mediterranean-interior-design"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Japanese",
      description: "Minimalist, zen-inspired, with natural elements and clean lines",
      link: "/japanese-interior-design"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1615873858489-c8f25cb470cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Mid-Century Modern",
      description: "Clean lines, organic shapes, and functional design from the 50s and 60s",
      link: "/mid-century-modern-interior-design"
    },
    {
      id: 13,
      image: "https://images.unsplash.com/photo-1617104678889-3cca9f57ad8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Coastal",
      description: "Light, airy, with blues, whites, and nautical elements",
      link: "/coastal-interior-design"
    },
    {
      id: 14,
      image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Gothic",
      description: "Dark, dramatic, with ornate details and rich textures",
      link: "/gothic-interior-design"
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Eclectic",
      description: "Mix of different styles, colors, and textures in a harmonious way",
      link: "/eclectic-interior-design"
    },
    {
      id: 16,
      image: "https://images.unsplash.com/photo-1617104678889-3cca9f57ad8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Moroccan",
      description: "Rich colors, intricate patterns, and ornate decorative elements",
      link: "/moroccan-interior-design"
    }
  ];

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % 2);
    }, 10000);
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const nextGroup = () => {
    resetInterval();
    setCurrentGroup((prev) => (prev + 1) % 2);
  };

  const prevGroup = () => {
    resetInterval();
    setCurrentGroup((prev) => (prev - 1 + 2) % 2);
  };

  const currentThemes = currentGroup === 0 
    ? designThemes.slice(0, 8) 
    : designThemes.slice(8, 16);

  return (
    <section id="themes" className="py-12 bg-white w-full">
      <h2 className="text-3xl font-bold mb-8 text-center">Themes</h2>
      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {currentThemes.map((theme) => (
            <div 
              key={theme.id} 
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img 
                src={theme.image} 
                alt={theme.title} 
                className="w-full h-32 object-cover" 
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{theme.title}</h3>
                <p className="text-gray-700 mb-4">{theme.description}</p>
                <a 
                  href={theme.link} 
                  className="text-blue-500 hover:text-blue-700"
                >
                  Show more
                </a>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevGroup}
          className="
            absolute
            top-1/2
            left-4
            -translate-y-1/2
            z-20
            bg-white/50
            hover:bg-white/75
            p-2
            rounded-full
            transition-all
            duration-300
          "
        >
          &lt;
        </button>
        <button
          onClick={nextGroup}
          className="
            absolute
            top-1/2
            right-4
            -translate-y-1/2
            z-20
            bg-white/50
            hover:bg-white/75
            p-2
            rounded-full
            transition-all
            duration-300
          "
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Themes;