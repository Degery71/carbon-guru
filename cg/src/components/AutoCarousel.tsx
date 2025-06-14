"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type AutoCarouselProps = {
  images: string[];
};

const AutoCarousel = ({ images }: AutoCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNextSlide = useCallback(() => {
    if (!isPaused) {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  }, [images.length, isPaused]);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, [goToNextSlide]);

  // Pause on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className="relative w-full aspect-video max-h-[70vh] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 md:p-2 rounded-full hover:bg-black/50 transition-colors backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-4 md:w-4"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 md:p-2 rounded-full hover:bg-black/50 transition-colors backdrop-blur-sm"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-4 md:w-4"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 md:w-2.5 md:h-2.5 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Pause indicator */}
      {isPaused && (
        <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-md text-xs backdrop-blur-sm">
          Pausado
        </div>
      )}
    </div>
  );
};

export default AutoCarousel;
