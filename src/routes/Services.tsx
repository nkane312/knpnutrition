'use client';

// import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
// import ButtonElement from '../components/ButtonElement';
import ServiceCard from '../components/ServiceCard';
import Carousel from '../components/Carousel';
import TestimonialData from '../data/testimonials.json';

const Services = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <main id="main" className="bg-table items-center justify-center gap-5 p-5">
        <div className="p-4 w-full lg:w-1/2 justify-self-center bg-dry-sand-50">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fade-right ">
            Provided Services
          </h1>
        </div>
        <div className="bg-auto bg-fixed bg-center grid grid-cols-12 items-center justify-center gap-5 p-5">
          <ServiceCard
            title="Service A"
            description="This is a description"
            img="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
            alt="Image alt text"
          />
          <ServiceCard
            title="Service B"
            description="This is a description"
            img="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
            alt="Image alt text"
          />
          <ServiceCard
            title="Service C"
            description="This is a description"
            img="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
            alt="Image alt text"
          />
          <ServiceCard
            title="Service D"
            description="This is a description"
            img="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
            alt="Image alt text"
          />

          <Carousel
            {...{ TestimonialArray: TestimonialData, autoSlide: false, autoSlideInterval: 10000 }}
          />

          {/* <div className="bg-dry-sand-50 mx-auto max-w-4xl py-8 sm:py-16 lg:py-16 px-6 hover:py-28 lg:px-8 rounded-2xl hover:rounded-none duration-700 ease-in-out">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              KNP Nutrition
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-900">
              Katie Primak is a Registered Dietitian, working in private practice in Crystal Lake
              and Hoffman Estates, IL. She holds over 20+ years of Eating Disorder experience
              specializing in the collaborative treatment for the full spectrum of eating disorders.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-shallow px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-shallow-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rock transition ease-in-out duration-500"
              >
                Get in Contact
              </Link>
              <Link
                to="/about"
                className="text-sm font-semibold leading-6 text-deep-700 hover:text-black transition ease-in-out duration-500"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div> */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
