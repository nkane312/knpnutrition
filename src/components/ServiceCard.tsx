import { Pathname } from 'react-router-dom';
import ButtonElement from './ButtonElement';

type ServiceProps = {
  title: string;
  description: string;
  img: Pathname;
  alt: string;
};

const ServiceCard = (props: ServiceProps) => {
  return (
    //col-span-12 col-start-1 sm:col-span-5 sm:col-start-2 even:sm:col-start-7 lg:col-span-3 lg:col-start-1 [&:nth-child(2n)]:lg:col-start-4 [&:nth-child(3n)]:lg:col-start-9
    <div className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-2xl bg-[#ffffff] shadow-xl animate-fade-left">
      <figure className="flex justify-center items-center rounded-2xl">
        <img src={props.img} alt={props.alt} className="rounded-t-2xl" />
      </figure>
      <div className="flex flex-col p-8 bg-dry-sand-50">
        <h2 className="text-2xl font-bold text-gray-950 pb-6">{props.title}</h2>
        <p className="text-lg text-gray-950">{props.description}</p>
        {/* <div className="flex justify-end pt-6">
          <ButtonElement href="/contact" text="Learn More!" />
        </div> */}
      </div>
    </div>
  );
};

export default ServiceCard;
