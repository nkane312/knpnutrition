'use client';

import { Link } from 'react-router-dom';

const footerLinks = [
  {
    label: 'Katie Primak',
    url: '/',
  },
  {
    label: 'Contact',
    url: '/contact',
  },
  {
    label: 'About',
    url: '/about',
  },
  {
    label: 'Services',
    url: '/services',
  },
];

const Footer = () => {
  return (
    <footer className="bg-rock-500 z-50 inset-x-0 text-white px-6 pt-2 lg:px-8">
      <div className="flex flex-col">
        <ul className="flex flex-row justify-center  items-stretch content-center flex-wrap gap-x-4 py-5">
          {footerLinks.map((link) => (
            <li key={link.label} className="self-auto">
              <div className="min-w-0 gap-x-4 ">
                <div className="min-w-0">
                  <Link
                    className="text-sm text-white font-semibold leading-6 hover:text-black hover:bg-rock-100 transition duration-500 ease-in-out rounded-lg px-1 py-1 underline underline-offset-2"
                    to={link.url}
                  >
                    {link.label}
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-white text-sm py-4 font-semibold">
          Registered Dietitian based in Crystal Lake and Hoffman Estates.
        </p>
      </div>
      {/* <div className="flex-auto inline-flex pt-3 justify-end">
        <Link to="https://instagram.com/" target="_blank">
          <span className="sr-only">Instagram</span>
          <svg
            fill="#ffffff"
            height="75px"
            width="75px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-143 145 512 512"
            stroke="#ffffff"
            className="h-10 w-10"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <g>
                {' '}
                <path d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8 c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z"></path>{' '}
                <polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346 "></polygon>{' '}
                <path d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157 c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z"></path>{' '}
                <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,374.7v104.8 c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3c0-27.3,22.2-49.5,49.5-49.5h157 c27.3,0,49.5,22.2,49.5,49.5V374.7z"></path>{' '}
              </g>{' '}
            </g>
          </svg>
        </Link>
      </div> */}
    </footer>
  );
};

export default Footer;
