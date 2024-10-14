import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formStatus, setFormStatus] = useState('Send');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('Sending...');

    setFormStatus('Sent');
    // alert(result.status);
    // setFormValues();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <div className="bg-dry-sand-50 relative isolate px-6 pt-14 lg:px-8 h-screen flex flex-row items-center flex-wrap">
        <div className="flex-auto self-start w-screen md:w-2/5 lg:w-3/5">
          <h1 className="mt-7 text-xl font-bold leading-10 text-gray-900 text-center">
            Get in Contact
          </h1>
        </div>
        <div className="bg-dry-sand-100 relative isolate px-6 p-4 mb-12 lg:px-8 flex-auto w-screen md:w-3/5 lg:w-2/5">
          {formStatus === 'Sent' ? (
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pt-3 pb-12">
                <h2 className="mt-7 text-base font-semibold leading-7 text-gray-900">
                  Thank you for your submission
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  We will be in touch with you soon.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pt-3 pb-12">
                  <h2 className="mt-7 text-xl font-bold text-gray-900 text-center">
                    Please fill out below
                  </h2>
                  {/* <p className="mt-1 text-sm leading-6 text-gray-600">
                    Please fill out with your information and message.
                  </p> */}

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="block sm:col-span-6 justify-around">
                      <label
                        htmlFor="first-name"
                        className="block text-left text-sm font-medium leading-6 text-gray-900"
                      >
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-6 justify-around">
                      <label
                        htmlFor="last-name"
                        className="block text-left text-sm font-medium leading-6 text-gray-900"
                      >
                        Last name
                      </label>
                      <div className="mt-2">
                        <input
                          id="last-name"
                          name="last-name"
                          type="text"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-6 justify-around">
                      <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-6 justify-around">
                      <label
                        htmlFor="mesage"
                        className="block text-left text-sm font-medium leading-6 text-gray-900"
                      >
                        Message
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="message"
                          name="message"
                          autoComplete="message"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-x-6">
                    <button
                      type="submit"
                      className="rounded-md bg-shallow px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-shallow-700 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rock"
                    >
                      {formStatus}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
