import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });

    // Optional: reset the submission status after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000); // hide after 5 seconds
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 ">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-purple-500">Contact Us</h1>
        </div>

        {isSubmitted && (
          <div className="text-center text-green-600 font-bold">
            Message sent successfully!
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6 p-6 rounded-md bg-gray-50"
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label
                htmlFor="name"
                className="sr-only"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-0 focus:border-purple-500 border focus:border-2 focus:ring-purple-500 focus:z-10 sm:text-sm"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="sr-only"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full mt-2 px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-0 focus:border-purple-500 border focus:border-2 focus:ring-purple-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="sr-only"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="appearance-none rounded-none relative block w-full mt-2 px-3 py-2 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-0 focus:border-purple-500 border  focus:border-2 focus:ring-purple-500 focus:z-10 sm:text-sm"
                placeholder="Your message"
                required
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
