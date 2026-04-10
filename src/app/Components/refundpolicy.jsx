"use client";
import React from "react";
import Link from "next/link";
import {
  FaUserShield,
  FaDatabase,
  FaChartBar,
  FaExchangeAlt,
  FaBullhorn,
  FaSyncAlt,
} from "react-icons/fa";

export default function RefundPolicy() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          Home <span className="mx-2">››</span>{" "}
          <span className="text-orange-500 font-medium">
            Refund and Cancellation Policy
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-orange-500 mb-6">
          Refund and Cancellation Policy – FssaiLicense.in
        </h1>

        {/* Content */}
        <div className="bg-white p-8 space-y-8 text-gray-700">

          {/* Intro */}
          <p>
            <strong>LAWFINITY INDIA PRIVATE LIMITED</strong> is your trusted
            partner in achieving your goals and laying a significant foundation
            for your startup. We believe in long-term relationship building and
            maximising value through mutual trust.
          </p>

          <p>
            At{" "}
            <span className="text-orange-500 font-medium">
              fssailicence.in
            </span>
            , we prioritise transparency, client satisfaction, and efficient
            service delivery. We understand that sometimes plans change, and
            clients may need to cancel their service requests. To ensure a fair
            and smooth process, we have outlined our cancellation and refund
            policy below. Please review it carefully before placing an order.
          </p>

          {/* 24 Hours Refund */}
          <div className="flex items-start gap-4">
            <FaUserShield className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                100% Refund Within 24 Hours
              </h2>
              <p>
                If a cancellation request is made within{" "}
                <strong>24 hours of successful payment</strong>, the client will
                be eligible for a <strong>100% refund</strong> of the total amount
                paid. This refund will be issued without any deductions, provided
                that the request is communicated within the stipulated timeframe
                and the rendering of service has not been initiated.
              </p>
            </div>
          </div>

          {/* Government Fees */}
          <div className="flex items-start gap-4">
            <FaDatabase className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Government Fees
              </h2>
              <p>
                Any government fees paid on behalf of the client are{" "}
                <strong>non-refundable</strong> under any circumstances. However,
                the official fee receipt or acknowledgement issued by the
                respective department will be provided as proof of payment.
              </p>
            </div>
          </div>

          {/* 7 Days Policy */}
          <div className="flex items-start gap-4">
            <FaChartBar className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Refund Within 7 Days
              </h2>
              <p>
                For cancellation requests received after 24 hours but within{" "}
                <strong>7 calendar days</strong> from the date of payment, a{" "}
                <strong>20% deduction</strong> will be applied. The remaining{" "}
                <strong>80%</strong> will be refunded via the original payment
                method within a reasonable timeframe.
              </p>
            </div>
          </div>

          {/* After 7 Days */}
          <div className="flex items-start gap-4">
            <FaExchangeAlt className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Cancellation After 7 Days
              </h2>
              <p>
                If cancellation is requested after 7 days, the refund amount will
                be determined on a <strong>pro-rata basis</strong> depending on
                the stage of work completed. The final decision will be made by
                our internal operations team after review.
              </p>
            </div>
          </div>

          {/* Important Note */}
          <div className="flex items-start gap-4">
            <FaBullhorn className="text-orange-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Important Note
              </h2>
              <p>
                The refundable amount, if any, will depend on actual work
                progress, resources utilised, and time invested by our experts.
              </p>
            </div>
          </div>

          {/* Contact Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3">
            <FaSyncAlt className="text-amber-600 text-lg mt-1" />
            <p className="text-sm text-gray-800 leading-relaxed">
              For all refund-related queries, concerns, or cancellation requests,
              clients are required to send an email to{" "}
              <Link
                href="mailto:refunds@fssailicence.in"
                className="text-green-600 font-medium hover:underline"
              >
                refunds@fssailicence.in
              </Link>
              . The timestamp of the email will be considered the official time
              of refund intimation. Clients are advised to include their order
              number, registered email address, payment details, and reason for
              cancellation to ensure faster processing.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}