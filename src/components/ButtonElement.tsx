import { Link, Pathname } from 'react-router-dom';

type ButtonProps = {
  href: Pathname;
  text: String;
};

const ButtonElement = ({ href, text }: ButtonProps) => {
  return (
    <Link
      to={href}
      className="rounded-md bg-shallow-800 px-3.5 py-2.5 text-base font-bold text-white shadow-sm hover:bg-shallow-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rock ease-in-out duration-500 active:scale-95 transition-transform transform"
    >
      {text}
    </Link>

    // <li className="px-4 py-6 md:py-0 hover:bg-yellow-500 md:hover:bg-transparent text-white duration-500">
    //   <a href={props.href} className="text-x1 md:hover:text-yellow-300 duration-500">
    //     {props.children}
    //   </a>
    // </li>
  );
};

export default ButtonElement;
