"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "1. Who is required to get the FSSAI State License?",
    answer:
      "Food Business Operators whose annual turnover exceeds ₹12 lakhs but is less than ₹20 Crores are required to obtain a State License, along with other prescribed criteria.",
  },
  {
    question: "2. What is the validity period of the FSSAI State License?",
    answer:
      "The State License is valid for 1 to 5 years, depending on the application. Food Business Operators (FBOs) can obtain the license for a period of 1, 2, 3, 4, or 5 years.",
  },
  {
    question: "3. Who is the issuing authority of the State License?",
    answer:
      "The State License is issued by the State Licensing Authority operating in each State. It consists of Designated Officers authorised to issue licenses subject to compliance by FBOs.",
  },
  {
    question:
      "4. Can the FBO exhibit the State License at its business premises?",
    answer:
      "Yes, after obtaining a State License, FBOs must display the license certificate at their business premises and exhibit the 14-digit license number on their products.",
  },
  {
    question:
      "5. In what circumstances will the application be rejected?",
    answer:
      "The Licensing Officer may reject the application if the required information is not provided within the stipulated period of 30 days.",
  },
  {
    question: "6. Is renewal of the license mandatory?",
    answer:
      "Yes, renewal of the license is mandatory as per the FSSAI regulations.",
  },
  {
    question:
      "7. What happens if I run a business without an FSSAI License?",
    answer:
      "Running a food business without an FSSAI License can lead to a penalty of up to ₹5 lakhs and imprisonment of up to six months.",
  },
];

export default function FssaiFAQState() {
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