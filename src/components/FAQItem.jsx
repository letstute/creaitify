"use client";

import React, { useState } from 'react';
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="bg-white rounded-xl shadow-md mb-4 overflow-hidden">
      <button
        className="flex justify-between items-center w-full p-6 text-left text-gray-800 font-semibold text-lg focus:outline-none cursor-pointer"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        {isOpen ? (
          <svg
            className="w-6 h-6 text-gray-500 transform transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-gray-500 transform transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-600 leading-relaxed transition-all duration-300 ease-in-out">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function FAQComponent() { // This component should ideally be in its own file, e.g., FAQComponent.jsx
  const faqData = [
    {
      question: "What is Creaitify and why is it the best content outsourcing partner?",
      answer: "Creaitify is an 11-year-old content creation company that offers end-to-end e-learning solutions. We provide scalable, cost-effective content that engages audiences and supports your business goals."
    },
    {
      question: "How does Creaitify ensure timely project delivery?",
      answer: "We follow a rigorous project management methodology, including detailed planning, regular progress tracking, and dedicated project managers to ensure all projects are delivered on time and within budget."
    },
    {
      question: "Can I customize the content to align with my brand?",
      answer: "Absolutely! We work closely with our clients to understand their brand guidelines, tone of voice, and specific requirements to ensure all content is fully customized and on-brand."
    },
    {
      question: "Does Creaitify support multiple languages and formats?",
      answer: "Yes, we have a team of experienced linguists and content creators who can develop content in multiple languages and various formats, including videos, interactive modules, articles, and more."
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faqs-section" className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans antialiased">
      <div className="w-full max-w-6xl mx-auto py-12 md:flex md:space-x-8">
        <div className="mb-10 text-center md:text-left md:w-2/5 md:pr-8">
          <h2 className="text-5xl font-bold text-gray-800 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about working with us
          </p>
        </div>
        <div className="space-y-4 md:w-3/5">
          {faqData.map((item, index) => (
            <FAQItem
              key={index} // Using index as key is acceptable here as the list is static
              question={item.question}
              answer={item.answer}
              isOpen={index === openIndex} // Check if this item is the currently open one
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
