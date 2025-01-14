'use client';

import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import ButtonElement from '../components/ButtonElement';

const About = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <main
        id="main"
        className="bg-salad bg-fixed grid grid-cols-12 py-6 md:py-16 px-6 lg:px-8 leading-10 content-center"
      >
        <div className="p-36 bg-eggs bg-cover col-span-12 sm:col-span-2 rounded-xl animate-fade-left z-20">
          <span className="sr-only">Katie Primak Headshot</span>
        </div>
        <div className="p-4 col-span-12 sm:col-end-13 sm:col-span-8 bg-dry-sand-50 sm:h-1/2 self-end z-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fade-right ">
            Katie Primak, RD, LDN
          </h1>
        </div>
        <div className="col-span-12 mx-auto py-4 sm:py-12 lg:py-16 px-8 bg-dry-sand-50 ">
          <div className="text-center animate-fade">
            <p className="mt-6 text-lg leading-8 text-gray-900">
              A Registered Dietitian, working in private practice in Crystal Lake and Hoffman
              Estates, IL. She received her Bachelor&rsquo;s of Science in Nutrition and Dietetics
              from San Diego State University and completed her Dietetic Internship thru Sodexo
              Distance Education Program. Katie holds over 20+ years of Eating Disorder experience
              specializing in the collaborative treatment for the full spectrum of eating disorders.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              Katie currently consults for ERC (Eating Recovery Center) as an Eating Disorder
              Dietitian for over 2 years and also worked at Alexian Brothers/Amita health care as an
              Eating Disorder Specialist in both the ED inpatient and outpatient programs for a
              total of 18 years. Katie currently runs her private practice for nutritional
              counseling; specializing in weight loss, food allergies, and eating disorder,
              pregnancy, diabetes, and etc.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              Today, Katie uses her skills in nutrition and food therapy by helping people improve
              their relationship with food and their bodies. Katie is currently Certified in Eating
              Disorders and Education and holds the title CEDRD. She enjoys teaching groups (meal
              groups/ cooking groups/ process groups), continually researching newly updated health
              information and providing the best nutrition care with a team approach. She is
              passionate in her efforts to help all age groups with understanding the effects of
              food on the body. Katie educates clients on the foundational component of properly
              nourishing your body and making peace with food
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <ButtonElement href="/contact" text="Get in Contact" />
              <Link to="/about" className="text-sm font-semibold leading-6 text-deep-700">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
