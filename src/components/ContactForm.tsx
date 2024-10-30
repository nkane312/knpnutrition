import React, { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState('');

  const [formStatus, setFormStatus] = useState('Send');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('Sending...');
    emailjs
      .sendForm('service_rurm1ir', 'template_default', e.currentTarget, {
        publicKey: 'MRoT83nur7YQvdCzu',
      })
      .then(
        (result) => {
          setStateMessage('Thank you for your submission!');
          setIsSubmitting(false);
          setFormStatus('Sent');
          // setTimeout(() => {
          //   setStateMessage('');
          // }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later.');
          setIsSubmitting(false);
          // setTimeout(() => {
          //   setStateMessage('');
          // }, 5000); // hide message after 5 seconds
        },
      );

    // Clears the form after sending the email
    e.currentTarget.removeAttribute('disabled');
    e.currentTarget.reset();
  };

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setFormStatus('Sending...');

  //   setFormStatus('Sent');
  // };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-dry-sand-100 relative isolate px-6 p-4 mb-12 lg:px-8 flex-auto w-screen md:w-3/5 lg:w-2/5 animate-fade-right">
      {formStatus === 'Sent' ? (
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pt-3 pb-12">
            <h2 className="mt-7 text-xl font-semibold leading-7 text-gray-900">{stateMessage}</h2>
            {/* <p className="mt-1 text-sm leading-6 text-gray-600">
              We will be in touch with you soon.
            </p> */}
          </div>
        </div>
      ) : (
        <form onSubmit={sendEmail}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pt-3 pb-12">
              <h2 className="mt-7 text-xl font-bold text-gray-900 text-center">
                Please fill out below
              </h2>
              {/* <p className="mt-1 text-sm leading-6 text-gray-600">
                    Please fill out with your information and message.
                  </p> */}

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                <div className="justify-around">
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-700 sm:text-sm sm:leading-6"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="justify-around">
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-700 sm:text-sm sm:leading-6"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 justify-around">
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-700 sm:text-sm sm:leading-6"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 justify-around">
                  <p className="block text-left text-sm font-medium leading-6 text-gray-900">
                    Services
                  </p>
                  <div className="flex items-center ps-4 border rounded bg-wet-sand-100 mb-1 has-[input:checked]:bg-rock-500 cursor-pointer">
                    <input
                      id="service-a"
                      type="checkbox"
                      value="service-a"
                      name="services"
                      className="peer w-4 h-4 border-none text-rock-500 rounded ring-0 ring-opacity-0 focus:ring-opacity-0 focus:ring-0 bg-wet-sand-100 cursor-pointer"
                    />
                    <label
                      htmlFor="service-a"
                      className="w-full py-4 me-2 text-sm font-medium text-gray-900 peer-checked:text-white cursor-pointer"
                    >
                      Service A
                    </label>
                  </div>
                  <div className="flex items-center ps-4 border rounded bg-wet-sand-100 mb-1 has-[input:checked]:bg-rock-500 cursor-pointer">
                    <input
                      id="service-b"
                      type="checkbox"
                      value="service-b"
                      name="services"
                      className="peer w-4 h-4 border-none text-rock-500 rounded ring-0 ring-opacity-0 focus:ring-opacity-0 focus:ring-0 bg-wet-sand-100 cursor-pointer"
                    />
                    <label
                      htmlFor="service-b"
                      className="w-full py-4 me-2 text-sm font-medium text-gray-900 cursor-pointer peer-checked:text-white"
                    >
                      Service B
                    </label>
                  </div>
                </div>

                <div className="sm:col-span-2 justify-around">
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
                      placeholder="Reason for inquiring..."
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-700 sm:text-sm sm:leading-6"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-x-6">
                <button
                  type="submit"
                  className="rounded-md bg-shallow px-10 py-3 text-sm font-semibold text-black shadow-sm ease-in-out transition duration-500 hover:bg-shallow-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rock"
                  disabled={formStatus === 'Sending...' ? true : false}
                >
                  {formStatus === 'Sending...' ? (
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-6 h-6 me-2 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                  ) : (
                    ''
                  )}
                  {formStatus}
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
export default ContactForm;
