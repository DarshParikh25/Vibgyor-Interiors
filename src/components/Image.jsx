import { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const images = [
    {
      src: "/assets/Living-room-1.jpg",
      alt: "Modern Living Room"
    },
    {
      src: "/assets/Living-room-2.jpg",
      alt: "Luxury Kitchen"
    },
    {
      src: "/assets/Living-room-3.jpeg",
      alt: "Minimalist Bedroom"
    },
    {
      src: "/assets/Living-room-4.jpeg",
      alt: "Minimalist Bedroom"
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(images.length - 1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setPreviousIndex(currentIndex);
        setCurrentIndex((prevIndex) => 
          (prevIndex + 1) % images.length
        );
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }, 4000);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, [currentIndex, images.length]);
  // const changeSlide = (newIndex) => {
  //   setIsTransitioning(true);
  //   setTimeout(() => {
  //     setPreviousIndex(currentIndex);
  //     setCurrentIndex(newIndex);
  //     setTimeout(() => {
  //       setIsTransitioning(false);
  //     }, 500);
  //   }, 500);
  // };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        {images.map((image, index) => {
          let positionClass = 'translate-x-full';
          if (index === currentIndex) {
            positionClass = isTransitioning 
              ? 'translate-x-0' 
              : 'translate-x-0';
          }
          if (index === previousIndex) {
            positionClass = isTransitioning 
              ? '-translate-x-full' 
              : 'translate-x-full';
          }
          return (
            <div
              key={index}
              className={`
                absolute 
                inset-0
                transition-transform
                duration-500
                ease-in-out
                z-${index === currentIndex ? '10' : '0'}
                ${positionClass}
              `}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-8">
                <div className="text-white">
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;