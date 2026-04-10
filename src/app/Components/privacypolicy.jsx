"use client";
import React from "react";
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

export default function PrivacyPolicy() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          Home <span className="mx-2">››</span>{" "}
          <span className="text-orange-500 font-medium">
            Privacy Policy
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-orange-500 mb-6">
          Privacy Policy – FssaiLicense
        </h1>

        {/* Content */}
        <div className="bg-white p-8 space-y-8 text-gray-700">

          {/* Intro */}
          <p>
            <strong>LAWFINITY INDIA PRIVATE LIMITED</strong>, a company incorporated
            under the Companies Act, 2013 (hereinafter referred to as “Lawfinity”
            or “LIPL”) operates{" "}
            <span className="text-orange-500 font-medium">
              fssailicence.in
            </span>{" "}
            and may operate other websites. It is the policy of
            LAWFINITY to respect your privacy regarding any information we might
            collect while operating our websites.
          </p>

          {/* Website Visitors */}
          <div className="flex items-start gap-4">
            <FaUserShield className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Website Visitors
              </h2>
              <p>
                Like most website operators, LIPL collects non-personally-identifying
                information such as browser type, language preference, referring
                site, and the date and time of each visitor request. The purpose
                is to better understand how visitors use the website. From time to
                time, LIPL may release non-personally-identifying information in
                aggregate, such as reports on usage trends.
              </p>
              <p className="mt-2">
                LIPL also collects potentially personally-identifying information
                like IP addresses for logged-in users and commenters. Such
                information is disclosed only under the same circumstances as
                personally-identifying information, except that commenter IP
                addresses and email addresses are visible to site administrators.
              </p>
            </div>
          </div>

          {/* Gathering Info */}
          <div className="flex items-start gap-4">
            <FaDatabase className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Gathering of Personally-Identifying Information
              </h2>
              <p>
                Certain visitors choose to interact with LIPL in ways that require
                collecting personal information. The type and amount depend on the
                interaction. For example, users signing up may provide username and
                email, while transactions may require additional personal or
                financial information.
              </p>
              <p className="mt-2">
                LIPL collects such information only as necessary and does not
                disclose it except as described below. Visitors may refuse to
                provide personal information, though it may limit website usage.
              </p>
            </div>
          </div>

          {/* Aggregated Stats */}
          <div className="flex items-start gap-4">
            <FaChartBar className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Aggregated Statistics
              </h2>
              <p>
                LIPL may collect statistics about visitor behaviour and may display
                or share this information publicly. However, personally-identifying
                information is not disclosed except as stated in this policy.
              </p>
            </div>
          </div>

          {/* Protection */}
          <div className="flex items-start gap-4">
            <FaLock className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Protection of Certain Personally-Identifying Information
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  LIPL discloses information only to employees, contractors, and
                  affiliated organisations who need it and agree not to disclose it.
                </li>
                <li>
                  Some parties may be located outside your country; by using the
                  website, you consent to such transfers.
                </li>
                <li>LIPL does not rent or sell personal information.</li>
                <li>
                  Disclosure may occur only when legally required or necessary to
                  protect rights, property, or safety.
                </li>
                <li>
                  LIPL may email users about updates, features, or request feedback.
                </li>
                <li>
                  User requests or feedback may be published for support purposes.
                </li>
                <li>
                  LIPL takes reasonable measures to protect data from unauthorized
                  access or misuse.
                </li>
              </ul>
            </div>
          </div>

          {/* Cookies */}
          <div className="flex items-start gap-4">
            <FaCookieBite className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Cookies
              </h2>
              <p>
                Cookies are used to track visitors and preferences. Users can
                disable cookies in browser settings, though some features may not
                function properly without them.
              </p>
            </div>
          </div>

          {/* Business Transfers */}
          <div className="flex items-start gap-4">
            <FaExchangeAlt className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Business Transfers
              </h2>
              <p>
                In case LIPL or its assets are acquired, or in the event of closure
                or bankruptcy, user information may be transferred to a third party.
                Such parties may continue to use your information as per this policy.
              </p>
            </div>
          </div>

          {/* Ads */}
          <div className="flex items-start gap-4">
            <FaBullhorn className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Advertisements (Ads)
              </h2>
              <p>
                Ads may be delivered by partners who use cookies to track user
                interactions and serve relevant advertisements. This policy covers
                LIPL cookies only, not advertiser cookies.
              </p>
            </div>
          </div>

          {/* Changes */}
          <div className="flex items-start gap-4">
            <FaSyncAlt className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Privacy Policy Changes
              </h2>
              <p>
                LIPL may update this Privacy Policy from time to time. Users are
                encouraged to check this page regularly. Continued use of the
                website constitutes acceptance of changes.
              </p>
            </div>
          </div>

          {/* Grievance */}
          <div className="flex items-start gap-4">
            <FaUserShield className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Grievance Officer
              </h2>
              <p>Name:</p>
              <p>Contact:</p>
              <p>Email:</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}