import React from 'react';

// TODO: Implement the contact form logic
const Contact = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-2 border border-gray-300 rounded"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;