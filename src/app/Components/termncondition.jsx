"use client";
import React from "react";
import Link from "next/link";
import {
  FaUserShield,
  FaDatabase,
  FaChartBar,
  FaLock,
  FaCookieBite,
  FaExchangeAlt,
  FaBullhorn,
  FaSyncAlt,
} from "react-icons/fa";

export default function TermsConditions() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          Home <span className="mx-2">››</span>{" "}
          <span className="text-orange-500 font-medium">
            Terms and Conditions
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-orange-500 mb-6">
          Terms and Conditions – FssaiLicense.in
        </h1>

        {/* Content */}
        <div className="bg-white p-8 space-y-8 text-gray-700">

          {/* Intro Paragraph */}
          <p>
            To begin a new relationship with trust, we need to agree on the same
            terms and conditions. Using{" "}
            <span className="text-orange-500 font-medium">
              fssailicence.in
            </span>{" "}
            it is deemed that you have read, understood and agreed to these terms
            and conditions. We reserve the right to change the user agreement from
            time to time without notice. Your continued use of this site after such
            modification will constitute acknowledgement and agreement of the
            modified terms and conditions.
          </p>

          {/* Introduction */}
          <div className="flex items-start gap-4">
            <FaUserShield className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Introduction
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  This website is owned by <strong>LAWFINTY INDIA PRIVATE LIMITED</strong>,
                  having its registered office at T-10, Plot No-7, 3rd Floor,
                  Pankaj Plaza Pocket-7, Sector-12, Dwarka, South West Delhi,
                  Delhi, India, 110078.
                </li>
                <li>
                  These terms and conditions shall govern your use of our website.
                </li>
                <li>
                  By using our website, you accept these terms and conditions in full.
                </li>
              </ul>
            </div>
          </div>

          {/* Responsible Use */}
          <div className="flex items-start gap-4">
            <FaDatabase className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Responsible Use and Conduct
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  During the process of using our services, website, or resources,
                  you may need to provide information.
                </li>
                <li>You are responsible for maintaining confidentiality.</li>
                <li>Attempting to copy is strictly prohibited.</li>
                <li>You are solely responsible for the consequences.</li>
                <li>
                  We may provide various open communication tools on our website.
                </li>
              </ul>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="flex items-start gap-4">
            <FaLock className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Privacy Policy
              </h2>
              <p>
                We have created a separate privacy policy to protect your private
                and confidential data. For more details, please refer to the
                privacy policy.
              </p>
            </div>
          </div>

          {/* Warranty */}
          <div className="flex items-start gap-4">
            <FaChartBar className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Limitation of Warranties
              </h2>
              <p>
                By using our website, you understand and agree that all services
                and resources we provide are “as is” and “as available”.
              </p>
            </div>
          </div>

          {/* Liability */}
          <div className="flex items-start gap-4">
            <FaExchangeAlt className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Limitation of Liability
              </h2>
              <p>
                In conjunction with the Limitation of Warranties, your claim shall
                be limited to the amount you paid.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex items-start gap-4">
            <FaBullhorn className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Copyrights / Trademarks
              </h2>
              <p>
                All content and materials available on{" "}
                <span className="text-orange-500 font-medium">
                  www.fssailicence.in
                </span>{" "}
                are the intellectual property of LAWFINTY INDIA PRIVATE LIMITED.
              </p>
            </div>
          </div>

          {/* Termination */}
          <div className="flex items-start gap-4">
            <FaSyncAlt className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Termination of Use
              </h2>
              <p>
                You agree that we may suspend or terminate your access. Suspected
                illegal, fraudulent or abusive activity may be referred.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div className="flex items-start gap-4">
            <FaCookieBite className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Governing Law
              </h2>
              <p>
                The website{" "}
                <span className="text-orange-500 font-medium">
                  www.fssailicence.in
                </span>{" "}
                is controlled by LAWFINTY INDIA PRIVATE LIMITED from our offices
                located in Delhi, India.
              </p>
            </div>
          </div>

          {/* Payment */}
          <div className="flex items-start gap-4">
            <FaDatabase className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Payment Terms
              </h2>
              <p>
                All services require an advance payment of at least 50%. Placement
                of an order or advance payment constitutes agreement.
              </p>
            </div>
          </div>

          {/* Refund */}
          <div className="flex items-start gap-4">
            <FaExchangeAlt className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Refund and Cancellation
              </h2>
              <p>
                For cancellation of services and refunds, please read the{" "}
                <Link
                  href="/refund-policy"
                  className="font-semibold text-green-500 hover:text-orange-500"
                >
                  Refund and Cancellation Policy
                </Link>.
              </p>
            </div>
          </div>

          {/* Third Party */}
          <div className="flex items-start gap-4">
            <FaUserShield className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Use of Services of a Third Party
              </h2>
              <p>
                To provide better services, sometimes we might require the use of
                third-party services. You agree to indemnify the third party.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}