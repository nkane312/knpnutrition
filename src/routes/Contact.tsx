import Header from '../Header';
import Footer from '../Footer';
import ContactForm from '../components/ContactForm';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const Contact = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <div className="bg-dry-sand-50 relative isolate px-6 pt-14 lg:px-8 h-screen flex flex-row items-center flex-wrap">
        <div className="flex-auto self-start w-screen md:w-2/5 lg:w-3/5 py-2">
          <h1 className="mt-7 text-xl font-bold leading-10 text-gray-900 text-center">
            Get in Contact
          </h1>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
