import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';
// import TestimonialArray from '../data/testimonials.json';

interface CarouselProps {
  TestimonialArray: Array<TestimonialType>;
  autoSlide: boolean;
  autoSlideInterval: number;
}

type TestimonialType = {
  text: String;
  byline: String;
};

const Carousel = (props: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (props.autoSlide) {
      const slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % props.TestimonialArray.length);
      }, props.autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [props.autoSlide, props.autoSlideInterval, props.TestimonialArray.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % props.TestimonialArray.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + props.TestimonialArray.length) % props.TestimonialArray.length,
    );
  };

  return (
    <div className="col-span-12 relative isolate overflow-hidden bg-white px-6 animate-fade">
      <div className="overflow-hidden relative">
        {props.TestimonialArray.map((testimonial: TestimonialType, index) => (
          <section
            key={index}
            className={`col-span-12 relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 animate-fade ${
              index === currentIndex ? '' : 'hidden'
            }`}
          >
            <Testimonial text={testimonial.text} byline={testimonial.byline} />
          </section>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        onClick={nextSlide}
      >
        Next
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
        {props.TestimonialArray.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
