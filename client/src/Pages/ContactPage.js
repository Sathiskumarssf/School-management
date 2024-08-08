import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import emailjs

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const YOUR_SERVICE_ID = "service_z7dgq2s";
  const YOUR_TEMPLATE_ID = "template_dxramba";
  const YOUR_USER_ID = "FnHI1Uxv-Bzrva0fy";

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        {
          from_name: formData.firstname + " " + formData.lastname,
          from_email: formData.email,
          message: formData.message,
        },
        YOUR_USER_ID
      )
      .then(
        (response) => {
          console.log("Email sent!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Failed to send email. Error:", error);
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your First Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your Last Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
              {status && (
                <p className="mt-4 text-center text-gray-800">{status}</p>
              )}
            </form>
          </div>
          {/* Contact Information */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-2 text-lg font-medium text-gray-900">
              St. Peter's College
            </p>
            <p className="mb-4 text-gray-600">
              456 Maple Street Toronto, ON M5A 1A1 Canada.
            </p>
            <p className="mb-2 text-lg font-medium text-gray-900">Phone</p>
            <p className="mb-4 text-gray-600">+1 (234) 567-890</p>
            <p className="mb-2 text-lg font-medium text-gray-900">Email</p>
            <p className="mb-4 text-gray-600">
              stpeterscollege@schooldomain.com
            </p>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

