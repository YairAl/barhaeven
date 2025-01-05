"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  {
    src: "/people_1.jpg?height=300&width=400",
    alt: "People enjoying themselves at the bar",
  },
  {
    src: "/outdoor_bar_1.jpg?height=300&width=400",
    alt: "Image 1 of the Bar Truck",
  },
  {
    src: "/live_music_1.jpg?height=300&width=400",
    alt: "Image 2 of Live Music at the Bar",
  },
  {
    src: "/people_2.jpg?height=300&width=400",
    alt: "People drinking at the bar",
  },
  {
    src: "/outdoor_bar_2.jpg?height=300&width=400",
    alt: "Image 2 of the Bar Truck",
  },
  {
    src: "/live_music_2.jpg?height=300&width=400",
    alt: "Image 2 of Live Music at the Bar",
  },
];

export default function PhotoGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const SLIDE_DURATION = 5000;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const photosPerSlide = isMobile ? 1 : 2;
  const totalSlides = Math.ceil(photos.length / photosPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timerId = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(timerId);
  }, [totalSlides]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">גלריית תמונות</h2>
        <div className="relative w-full max-w-7xl mx-auto">
          <div className="relative md:h-[24rem] h-[12rem] overflow-hidden">
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const startIndex = slideIndex * photosPerSlide;
              const slidePhotos = photos.slice(
                startIndex,
                startIndex + photosPerSlide
              );

              return (
                <div
                  key={slideIndex}
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    opacity: currentSlide === slideIndex ? 1 : 0,
                    zIndex: currentSlide === slideIndex ? 1 : 0,
                    pointerEvents:
                      currentSlide === slideIndex ? "auto" : "none",
                    transition: "opacity 1s ease-in-out",
                  }}
                >
                  <div
                    className={`w-full h-full grid ${
                      isMobile ? "grid-cols-1" : "grid-cols-2"
                    } gap-8`}
                  >
                    {slidePhotos.map((photo, photoIndex) => (
                      <div
                        key={`${slideIndex}-${photoIndex}`}
                        className="relative w-full h-full rounded-lg overflow-hidden shadow-xl"
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-110"
                          sizes={isMobile ? "100vw" : "50vw"}
                          priority={slideIndex === 0}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
            aria-label="Previous slides"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
            aria-label="Next slides"
          >
            <ChevronRight size={24} />
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-8 h-1 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-amber-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
