'use client';

import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import ButtonElement from '../components/ButtonElement';

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <main className="h-screen bg-table bg-auto bg-fixed bg-center flex flex-col items-center justify-center">
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-shallow-200 to-wet-sand-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div> */}
        <div className="bg-dry-sand-50 max-w-4xl py-8 sm:py-16 lg:py-16 px-6 hover:py-28 lg:px-8 rounded-2xl hover:rounded-none duration-700 ease-in-out animate-fade">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-900 font-semibold ring-1 ring-gray-900/10 transition ease-in-out duration-500 hover:ring-gray-900/20 hover:bg-rock-800 hover:text-white">
              Take a look at the services I offer.{' '}
              <Link to="/services" className="font-semibold text-deep-700 hover:text-white">
                <span aria-hidden="true" className="absolute inset-0" />
                View Now <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              KNP Nutrition
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-900 transition-opacity duration-500 opacity-100">
              Katie Primak is a Registered Dietitian, working in private practice in Crystal Lake
              and Hoffman Estates, IL. She holds over 20+ years of Eating Disorder experience
              specializing in the collaborative treatment for the full spectrum of eating disorders.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <ButtonElement href="/contact" text="Get in Contact" />
              <Link
                to="/about"
                className="text-sm font-semibold leading-6 text-deep-700 hover:text-black transition ease-in-out duration-500"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 inset-y-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-shallow-300 to-wet-sand-400 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
