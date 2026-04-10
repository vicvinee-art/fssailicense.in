"use client";
import Link from "next/link";
import React from "react";
import { FaUserTie, FaBalanceScale, FaChartLine, FaHandshake } from "react-icons/fa";

export default function AboutExpertise() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-orange-500">
            Expertise That Simplifies Compliance
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            We understand that navigating India’s regulatory framework can be complex.
            That’s where our experienced team steps in to guide you with clarity and confidence.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              We thoroughly understand that manoeuvring the regulatory framework in India
              can be daunting and the ultimate need behind our team coming into the picture.
            </p>

            <p>
              Our team has the perfect integration of Company Secretaries, Chartered Accountants,
              Advocates, Legal Advisors and Professionals who work closely with you to provide
              the leverage to achieve your specific business objectives.
            </p>

            <p>
              We are committed to assisting you and providing solutions that bring clarity,
              strategy, and most importantly, practical viability.
            </p>

            {/* CTA */}
            <Link href="/apply-now" className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-xl shadow-md hover:bg-orange-600 transition">
              Talk to an Expert
            </Link>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white p-2 rounded-2xl shadow-md text-center hover:shadow-lg transition">
              <FaUserTie className="text-orange-500 text-3xl mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Expert Team</h3>
              <p className="text-sm text-gray-600 mt-2">
                Skilled professionals across legal and financial domains.
              </p>
            </div>

            <div className="bg-white p-2 rounded-2xl shadow-md text-center hover:shadow-lg transition">
              <FaBalanceScale className="text-orange-500 text-3xl mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Legal Clarity</h3>
              <p className="text-sm text-gray-600 mt-2">
                Clear guidance through complex compliance frameworks.
              </p>
            </div>

            <div className="bg-white p-2 rounded-2xl shadow-md text-center hover:shadow-lg transition">
              <FaChartLine className="text-orange-500 text-3xl mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Strategic Approach</h3>
              <p className="text-sm text-gray-600 mt-2">
                Solutions aligned with your business growth goals.
              </p>
            </div>

            <div className="bg-white p-2 rounded-2xl shadow-md text-center hover:shadow-lg transition">
              <FaHandshake className="text-orange-500 text-3xl mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Trusted Support</h3>
              <p className="text-sm text-gray-600 mt-2">
                Long-term partnership built on trust and transparency.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}