import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const catergory = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "Fullstack Developer",
  "AI Engineer",
  "Data analyst",
];

function CatergoryCarousel() {
  return (
    <div>
      <Carousel
        className="max-w-4xl mx-auto my-16"
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false, // keeps autoplay running even after click
          }),
        ]}
      >
        <CarouselContent>
          {catergory.map((cat, ind) => (
            <CarouselItem key={ind} className="basis-50 md:basis-1/4">
              <div
                className="
      bg-gray-100 
      hover:bg-gray-200 
      cursor-pointer 
      rounded-lg 
      text-black 
      font-semibold 
      text-md 
      h-44 
      min-w-44 
      border 
      border-red-900/30 
      shadow-sm 
      hover:shadow-md 
      transition-all 
      duration-200 
      flex 
      items-center 
      justify-center 
      relative
    "
              >
                {/* Top-left corner */}
                <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-red-700"></span>
                {/* Bottom-right corner */}
                <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-red-700"></span>

                {cat}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default CatergoryCarousel;
