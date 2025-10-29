"use client"
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I book a flight on Ehan Tours & Travel?",
    answer:
      "Simply use our website or mobile app to search for flights, compare prices, and book securely in just a few clicks.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit and debit cards, mobile banking, and international payment gateways like Visa and Mastercard.",
  },
  {
    question: "Can I cancel or modify my booking?",
    answer:
      "Yes, you can manage cancellations or modifications directly from your account. Fees may apply depending on the airline’s policy.",
  },
  {
    question: "How do I receive my e-ticket?",
    answer:
      "Once your booking is confirmed, your e-ticket will be sent to your registered email instantly.",
  },
  {
    question: "What documents do I need for international travel?",
    answer:
      "You will need a valid passport, visa (if required), and any additional travel documents mandated by your destination country.",
  },
  {
    question: "Do you offer group booking discounts?",
    answer:
      "Yes! We provide special rates for group bookings. Please contact our support team for custom offers.",
  },
];

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index : any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FAFBFC] py-16 px-6 rounded-3xl">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 mb-10">
          Find answers to common questions about booking flights
        </p>

        {/* FAQ ITEMS */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-gray-800 font-medium focus:outline-none"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CONTACT SUPPORT */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-3">Still have questions?</p>
          <button className="bg-[#0028A8] text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
