"use client";

import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzpWmN24gOLibBJjnyKaD-6wX5EDsdxnokn5yPN7tk_10dzIqf_MyGtAvrlMucM-c6r/exec';

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'cors', // Required for cross-origin requests to Apps Script
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.result === "success") {
        console.log('Form submitted successfully to Google Sheets:', formData);
        setFormData({
          name: '',
          companyName: '',
          phone: '',
          email: '',
          message: '',
        });
        setIsSubmitted(true);
      } else {
        setError('Failed to submit the form. Please try again. Error: ' + result.error);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to submit the form due to a network error. Please try again. Details: ' + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans antialiased">
      <div className="w-full max-w-6xl mx-auto py-12 md:flex md:space-x-8 bg-white rounded-xl shadow-xl p-8 md:p-12">
        {isSubmitted ? (
          <div className="text-center w-full py-10">
            <h2 className="text-3xl font-bold text-green-600 mb-4">Thank you!</h2>
            <p className="text-lg text-gray-700">Your entry is submitted. We will get back to you shortly.</p>
          </div>
        ) : (
          <div className="mb-10 md:mb-0 md:w-1/2 md:pr-8">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Contact us</h2>
            <p className="text-xl text-gray-600 mb-8">
              Want to get in touch for any requirements. Please fill up the form and we’ll get in touch with you shortly.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full p-4 border border-gray-300 bg-white text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="companyName"
                name="companyName"
                placeholder="Name of the company*"
                value={formData.companyName}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full p-4 border border-gray-300 bg-white text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone number*"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full p-4 border border-gray-300 bg-white text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Business email*"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full p-4 border border-gray-300 bg-white text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Message*"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full p-4 border border-gray-300 bg-white text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                required
              ></textarea>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Get in touch with us'}
            </button>
          </form>
          </div>
        )}
        <div className="md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7972622991524!2d72.83966507497605!3d19.028653282166154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ced27a1e32a5%3A0x23f485b803444872!2sLetsTute!5e0!3m2!1sen!2sin!4v1748009314012!5m2!1sen!2sin"
            width="600" // Explicit width from user's code
            height="450" // Explicit height from user's code
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl h-96 md:h-full w-full"
            title="Google Map Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
