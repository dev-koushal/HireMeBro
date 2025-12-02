import React from "react";
import Autoplay from "embla-carousel-autoplay"; 
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
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
        className="max-w-4xl mx-auto my-10"
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,   // keeps autoplay running even after click
          }),
        ]}
      >
        <CarouselContent>
          {catergory.map((cat, ind) => (
            <CarouselItem key={ind} className="basis-50 md:basis-1/4">
              <Button className="relative bg-gray-100 hover:bg-red-100 cursor-pointer -rounded-sm text-black font-bold text-md h-44 min-w-44 border border-red-900">
                <span className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-red-900 "></span>
                <span className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-red-900 "></span>
                <span className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-red-900 "></span>
                <span className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-red-900 "></span>
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}


export default CatergoryCarousel;
