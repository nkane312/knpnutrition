'use client';

import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const About = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <main className="bg-dry-sand relative isolate px-6 pt-14 lg:px-8 mb-auto">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <Link to="/about" className="font-semibold text-deep-700 hover:text-white">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Katie Primak, RD, LDN
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Katie Primak is a Registered Dietitian, working in private practice in Crystal Lake
              and Hoffman Estates, IL. She received her Bachelor’s of Science in Nutrition and
              Dietetics from San Diego State University and completed her Dietetic Internship thru
              Sodexo Distance Education Program. Katie holds over 20+ years of Eating Disorder
              experience specializing in the collaborative treatment for the full spectrum of eating
              disorders.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Katie currently consults for ERC (Eating Recovery Center) as an Eating Disorder
              Dietitian for over 2 years and also worked at Alexian Brothers/Amita health care as an
              Eating Disorder Specialist in both the ED inpatient and outpatient programs for a
              total of 18 years. Katie currently runs her private practice for nutritional
              counseling; specializing in weight loss, food allergies, and eating disorder,
              pregnancy, diabetes, and etc.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Today, Katie uses her skills in nutrition and food therapy by helping people improve
              their relationship with food and their bodies. Katie is currently Certified in Eating
              Disorders and Education and holds the title CEDRD. She enjoys teaching groups ( meal
              groups/ cooking groups/ process groups), continually researching newly updated health
              information and providing the best nutrition care with a team approach. She is
              passionate in her efforts to help all age groups with understanding the effects of
              food on the body. Katie educates clients on the foundational component of properly
              nourishing your body and making peace with food
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get in Contact
              </Link>
              <Link to="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 inset-y-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
