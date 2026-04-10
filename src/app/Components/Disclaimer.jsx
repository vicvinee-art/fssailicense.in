"use client";

export default function DisclaimerBar() {
  return (
    <section className="w-full bg-gray-100 py-4 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-gray-600 italic text-sm leading-relaxed">
          <span className="text-orange-500 font-semibold not-italic">
            DISCLAIMER:
          </span>{" "}
        </p>

        <div className="mt-2 space-y-2 text-gray-600 text-sm leading-relaxed">
          
          <p>
            <span className="font-semibold text-gray-800">No Government Affiliation:</span>{" "}
            This website is privately operated and provides consultancy services for FSSAI registration and licensing. We are not associated with or authorised by FSSAI or any government body.
          </p>

          <p>
            <span className="font-semibold text-gray-800">No Guarantee Disclaimer:</span>{" "}
            Grant of license/registration is subject to verification and approval by the competent authority. We do not guarantee approval or timelines.
          </p>

          <p>
            <span className="font-semibold text-gray-800">Informational Use:</span>{" "}
            Content on this website is for informational purposes only and should not be treated as legal advice.
          </p>

        </div>

      </div>
    </section>
  );
}