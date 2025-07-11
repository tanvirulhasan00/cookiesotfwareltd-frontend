import { useState, useEffect, useRef } from "react";

export default function ImageSlider() {
  const images = [
    "/hero.jpg" || null,
    "/hero-1.jpg" || null,
    "/hero-2.jpg" || null,
  ];

  const DemoImages = ["/hero-1.png", "/hero-2.png", "/hero.jpg"];
  const [current, setCurrent] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const intervalRef = useRef(null);

  // Auto slide every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  const goToSlide = (index) => {
    setTransitionEnabled(true);
    setCurrent(index);
    resetInterval();
  };

  const nextSlide = () => {
    setTransitionEnabled(true);
    setCurrent((prev) => (prev + 1) % images.length);
    resetInterval();
  };

  const prevSlide = () => {
    setTransitionEnabled(true);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  return (
    <div className="relative group w-full">
      <div className="overflow-hidden relative w-full h-[91vh]">
        <div
          className="w-full h-full flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: transitionEnabled
              ? "transform 500ms ease-in-out"
              : "none",
          }}
        >
          {images.map((img, i) => (
            <div key={i} className="min-w-full flex-shrink-0">
              <img
                src={img ?? DemoImages[i]}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors duration-200 z-10"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors duration-200 z-10"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-white/50"
            } transition-all duration-300`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
