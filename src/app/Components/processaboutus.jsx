"use client";
import Link from "next/link";
import React from "react";
import {
  FaLightbulb,
  FaClipboardCheck,
  FaFileAlt,
  FaPaperPlane,
  FaSearch,
  FaCheckCircle,
} from "react-icons/fa";

export default function FssaiProcessSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-orange-500">
            Simplifying Your FSSAI Licensing Journey
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            We simplify complex procedures so you can focus on growing your
            business while we handle compliance seamlessly.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Our strength lies in making intricate procedures easy to handle,
              allowing business owners and entrepreneurs to focus on their core
              operations and scale their organisations effectively.
            </p>

            <p>
              When it comes to obtaining an FSSAI License, our experienced team
              assists you at every stage — from identifying the right license,
              checking eligibility, preparing documents, filing applications,
              handling inspections, to ensuring post-registration compliance.
            </p>

            <p>
              We are committed to keeping the entire process transparent,
              precise, timely, and hassle-free, so you can move forward with
              confidence and clarity.
            </p>
            <p>We handle the complexities so you can focus on what matters most —
            growing your business with confidence and conviction.
            </p>

            {/* CTA */}
            <Link href="/apply-now" className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-xl shadow-md hover:bg-orange-600 transition">
              Get Started Now
            </Link>
          </div>

          {/* Right Step Cards */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-orange-50 p-2 rounded-2xl text-center shadow-sm hover:shadow-md transition">
              <FaLightbulb className="text-orange-500 text-2xl mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-800">
                License Advisory
              </p>
            </div>

            <div className="bg-orange-50 p-2 rounded-2xl text-center shadow-sm hover:shadow-md transition">
              <FaClipboardCheck className="text-orange-500 text-2xl mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-800">
                Eligibility Check
              </p>
            </div>

            <div className="bg-orange-50 p-2 rounded-2xl text-center shadow-sm hover:shadow-md transition">
              <FaFileAlt className="text-orange-500 text-2xl mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-800">
                Documentation
              </p>
            </div>

            <div className="bg-orange-50 p-2 rounded-2xl text-center shadow-sm hover:shadow-md transition">
              <FaPaperPlane className="text-orange-500 text-2xl mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-800">
                Application Filing
              </p>
            </div>

            <div className="bg-orange-50 p-2 rounded-2xl text-center shadow-sm hover:shadow-md transition">
              <FaSearch className="text-orange-500 text-2xl mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-800">
                Inspection Support
              </p>
            </div>

            <div className="bg-orange-50 p-2 rounded-2xl text-center shadow-sm hover:shadow-md transition">
              <FaCheckCircle className="text-orange-500 text-2xl mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-800">
                Compliance Assurance
              </p>
            </div>

          </div>
        </div>

       

      </div>
    </section>
  );
}