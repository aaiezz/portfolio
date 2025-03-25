import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  images: { src: string; alt?: string }[];
}

export function LightboxGallery({ images }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const slideVariants = {
    enter: { opacity: 0 },  // Start with 0 opacity
    center: { opacity: 1 }, // Fully visible when in the center
    exit: { opacity: 0 },   // Fade out to 0 opacity
  };
  
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              alt={image.alt || `Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
        ))}
      </div>
  
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div className="absolute inset-0 bg-white bg-opacity-75 backdrop-blur-sm" />
  
            <div
              className="relative max-w-7xl mx-4 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.9, ease: "easeInOut" }}  // Consistent duration for smooth fade
              >
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt || `Gallery image ${currentIndex + 1}`}
                  className="max-h-[90vh] w-auto rounded-lg shadow-2xl"
                />
              </motion.div>
  
              <button onClick={closeLightbox} className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
                <span className="sr-only">Close lightbox</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
  
              {images.length > 1 && (
                <>
                  <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
                    <span className="sr-only">Previous image</span>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
                    <span className="sr-only">Next image</span>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
  

}