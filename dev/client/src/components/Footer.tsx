// @ts-nocheck
import React, { useState } from "react";
function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // You can integrate an API here to send the contact details
  };

  return (
    <footer className="bg-[#0A192F] text-white py-12 px-6 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-semibold text-[#FFD700]">CXO India</h2>
          <p className="text-gray-300">India, Europe, and USA</p>
          <p className="text-gray-300">info@cxo-india.com</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold text-[#FFD700]">Quick Links</h3>
          <a href="/events" className="hover:text-[#FFD700] transition">
            Events
          </a>
          <a href="/blogs" className="hover:text-[#FFD700] transition">
            Blogs | Newsletters
          </a>
          <a href="/about" className="hover:text-[#FFD700] transition">
            About Us
          </a>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-[#FFD700]">Get In Touch</h3>
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              className="w-full p-2 mb-2 bg-[#1E1E1E] text-white rounded-md focus:outline-none"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              className="w-full p-2 mb-2 bg-[#1E1E1E] text-white rounded-md focus:outline-none"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-2 mb-2 bg-[#1E1E1E] text-white rounded-md focus:outline-none"
              required
              value={formData.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-[#0047AB] cursor-pointer px-5 py-2 rounded-md hover:bg-[#00838F] transition w-full"
            >
              Join Now
            </button>
          </form>
        </div>
      </div>

      {/* Social & Legal Section */}
      <div className="mt-12 border-t border-gray-600 pt-6 text-center">
        <p className="text-gray-400">©2025 CXO India. All Rights Reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="/privacy-notice" className="hover:text-[#FFD700] transition">
            Privacy Notice
          </a>
          <span className="text-gray-400">|</span>
          <a href="/cookie-policy" className="hover:text-[#FFD700] transition">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
