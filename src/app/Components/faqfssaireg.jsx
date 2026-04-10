"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "1. Who is required to get the FSSAI Registration?",
    answer:
      "Petty Food Business Operators whose annual turnover does not exceed ₹12 lakhs are required to get registration, among other applicable criteria.",
  },
  {
    question: "2. What is the validity period of FSSAI Registration?",
    answer:
      "FSSAI Registration is valid for 1 to 5 years. Food Business Operators (FBOs) can choose a validity period of 1, 2, 3, 4, or 5 years.",
  },
  {
    question:
      "3. If an FBO operates its business in more than one state, is Registration sufficient?",
    answer:
      "No, if an FBO operates in two or more states, it must obtain a Central License for its Head Office along with separate licenses or registrations for each unit based on capacity or turnover.",
  },
  {
    question:
      "4. Can the FBOs display the Registration Certificate at their business premises?",
    answer:
      "Yes, after registration, the certificate must be displayed at the business premises of the FBO.",
  },
  {
    question: "5. How to renew the registration of an FBO?",
    answer:
      "Renewal can be done through the FoSCoS portal. It must be applied at least 30 days before expiry. The renewal window opens 180 days before expiration. After expiry, a fresh application is required.",
  },
  {
    question:
      "6. In what circumstances will the application be rejected?",
    answer:
      "The Licensing Officer may reject the application if required information is not provided within the stipulated 30 days.",
  },
  {
    question: "7. Can I renew my FSSAI Registration after expiry?",
    answer:
      "Yes, but renewal should be applied at least 30 days before expiry to avoid cancellation and the need for fresh registration.",
  },
];

export default function FssaiFAQreg() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Frequently Asked Questions
        </h2>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-200 transition duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-6"
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180 text-orange-500" : ""
                  }`}
                />
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}