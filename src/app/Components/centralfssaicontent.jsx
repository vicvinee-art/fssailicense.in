import { Handshake, ShoppingCart, ShieldCheck, TrendingUp, Users, Smile, Globe, Banknote, HeartPulse } from "lucide-react";
import { FaCheckCircle, FaUtensils, FaStore, FaCalendarAlt, FaHotel } from "react-icons/fa";
import Contact from "./subpageconsultation";
import Link from "next/link";

export default function FssaiCentralLicense() {
  return (
    <section className="w-full bg-white py-14">

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-3/4">

            <div className=" p-8 md:p-6">

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-center text-orange-600 mb-10">
                FSSAI Central License
              </h1>

              {/* Intro */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                The Food Safety and Standards Authority of India (FSSAI) regulates
                food businesses to ensure safe and hygienic food practices across
                India. Large food businesses operating across multiple states or
                having high turnover must obtain an FSSAI Central License for commencing or carrying on food business, which falls under Schedule 1, shall be granted by the Central Licensing Authority, provided that Food Authority may through notification make such changes or modify the list given in the Schedule I as considered necessary. Generally, large food business operators fall within this category and are required to obtain a Central Licence. FSSAI provides a Central License after satisfying certain criteria. 
              </p>

              {[
               {
  title: "Eligibility for FSSAI Central License",
  content: (
    <div className="grid md:grid-cols-3 gap-6 mt-6">

      {/* Card 1 */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
        
        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-200 mb-4">
          <FaCheckCircle className="text-green-600 text-2xl" />
        </div>

        <h3 className="font-semibold text-[16px] mb-2 text-gray-800">
          High Turnover Businesses
        </h3>

        <p className="text-gray-600 text-sm">
          Any Food Business Operators (FBOs) dealing in food with turnover exceeding ₹20 crores are required to obtain a Central License.
        </p>

      </div>

      {/* Card 2 */}
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-left shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
        
        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-purple-200 mb-4">
          <FaUtensils className="text-purple-600 text-2xl" />
        </div>

        <h3 className="font-semibold text-[16px] mb-3 text-gray-800 text-center">
          Mandatory Categories (Irrespective of Turnover)
        </h3>

        <ul className="text-gray-600 text-sm space-y-1 list-disc pl-5">
          <li>Operating in two or more states</li>
          <li>Importers and exporters</li>
          <li>Proprietary and non-specified food</li>
          <li>Food/health supplements and nutraceuticals</li>
          <li>Radiation processing of foods</li>
          <li>Food business at Central Government premises</li>
          <li>Railway catering, hawkers, canteens, retailers</li>
          <li>E-commerce food business</li>
        </ul>

      </div>

      {/* Card 3 */}
      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 text-left shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
        
        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-yellow-200 mb-4">
          <FaStore className="text-yellow-600 text-2xl" />
        </div>

        <h3 className="font-semibold text-[16px] mb-3 text-gray-800 text-center">
          Large Scale Business Capacity
        </h3>

        <ul className="text-gray-600 text-sm space-y-1 list-disc pl-5">
          <li>Food production &gt; 2 MT per day (excluding milk & meat)</li>
          <li>Milk handling &gt; 50,000 litres/day or &gt; 2500 MT/year</li>
          <li>Slaughter &gt; 50 large / 150 small animals / 1000 poultry per day</li>
          <li>Storage &gt; 10,000 MT</li>
          <li>Transportation &gt; 100 vehicles</li>
          <li>Hotels with 5-star and above ratings</li>
          <li>More than 100 vending machines across states/UTs</li>
        </ul>

      </div>

    </div>
  ),
},

                {
  title: "Procedures for Obtaining FSSAI Central License",
  content: (
    <div className="max-w-5xl mx-auto pt-10 md:pt-14 pb-20 md:pb-28 relative">

      {/* LEFT HEADING (Desktop Only) */}
      <div className="hidden md:block absolute left-0 top-1/3 text-gray-700 font-semibold text-lg">
        Certification <br /> Process
      </div>

      {(() => {
        const steps = [
          "a. Food Business Operators (FBOs) can get an FSSAI Central License online by filing and submitting FORM-B on the FoSCoS portal. FBOs can also register offline by submitting FORM-B to the Food and Safety Department.",
          "b. The FSSAI Central Licence form must be accompanied by the required documents and submitted online on the portal at the time of filing (Physical submission required only if the authority asks).",
          "c. The FSSAI Central Licence application can be accepted or rejected by the department within 60 working days from the date of application. If rejected, it has to be intimated to the applicant in writing.",
          "d. Department will scrutinise the documents submitted by the Food Business Operators (FBOs).",
          "e. The Department may conduct a physical inspection of the food premises if necessary, before granting the FSSAI Central Licence Certificate.",
          "f. If the Department is satisfied that the Food Business Operator (FBO) has complied with all criteria, then it will grant the FSSAI Central Licence Certificate, and the Food Business Operator can download that certificate from the portal.",
          "g. Food Business Operators (FBOs) must display that certificate at the place of business.",
        ];

        const colors = [
          "bg-red-500",
          "bg-orange-500",
          "bg-green-500",
          "bg-yellow-500",
          "bg-indigo-500",
          "bg-blue-500",
          "bg-purple-500",
        ];

        const bgColors = [
          "bg-red-100",
          "bg-orange-100",
          "bg-green-100",
          "bg-yellow-100",
          "bg-indigo-100",
          "bg-blue-100",
          "bg-purple-100",
        ];

        return (
          <>
            {/* ================= DESKTOP VIEW ================= */}
            <div className="hidden md:block relative">

              {/* SVG PATH */}
              <svg
                className="absolute left-20 top-0 h-full"
                width="160"
                height="600"
                viewBox="0 0 160 600"
                fill="none"
              >
                <path
                  d="M80 20 
                     C20 80,140 120,80 180 
                     S20 280,80 340 
                     S140 440,80 520"
                  stroke="#9CA3AF"
                  strokeWidth="3"
                  strokeDasharray="8 8"
                  fill="transparent"
                />
              </svg>

              {/* STEPS */}
              <div className="ml-44 space-y-14 mb-10">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div className="flex items-start gap-4 max-w-lg">

                      {/* CIRCLE */}
                      <div
                        className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold shadow shrink-0 ${colors[index]}`}
                      >
                        {index + 1}
                      </div>

                      {/* TEXT */}
                      <div
                        className={`px-6 py-4 rounded-xl shadow-md ${bgColors[index]} w-full`}
                      >
                        <p className="text-gray-800 font-medium text-base leading-relaxed">
                          {step}
                        </p>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= MOBILE VIEW ================= */}
            <div className="block md:hidden space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">

                  {/* CIRCLE */}
                  <div
                    className={`w-9 h-9 flex items-center justify-center rounded-full text-white font-bold shadow shrink-0 ${colors[index]}`}
                  >
                    {index + 1}
                  </div>

                  {/* TEXT */}
                  <div
                    className={`px-4 py-3 rounded-xl shadow-md ${bgColors[index]} w-full`}
                  >
                    <p className="text-gray-800 font-medium text-sm leading-relaxed">
                      {step}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </>
        );
      })()}

    </div>
  ),
},
{
  title: "Advantages & Benefits of FSSAI Central License",
  content: (
    <div className="mt-12">

      <p className="text-gray-700 mb-10">
        Having an FSSAI license provides multiple advantages and
        benefits to food businesses. It not only ensures compliance
        with government regulations but also helps build customer
        trust and business growth opportunities.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {[
          {
            title: "Goodwill Creation",
            description:
              "Helps in the Goodwill Creation of the food business.",
            color: "green",
            icon: <Users size={28} />,
          },
          {
            title: "Customer Satisfaction",
            description:
              "Enhanced Customer satisfaction and Loyalty.",
            color: "orange",
            icon: <Smile size={28} />,
          },
          {
            title: "E-commerce Recognition",
            description:
              "Recognised by e-commerce portal (listing on Online Delivery app or websites like Swiggy, Zomato).",
            color: "green",
            icon: <Globe size={28} />,
          },
          {
            title: "Cost Savings",
            description:
              "FSSAI License helps FBOs in cost savings in any Governmental penalty or fine.",
            color: "orange",
            icon: <Banknote size={28} />,
          },
          {
            title: "Quality & Hygiene",
            description:
              "Ensuring quality and hygiene of the food products.",
            color: "green",
            icon: <ShieldCheck size={28} />,
          },
          {
            title: "Consumer Health",
            description:
              "Ensuring Good health and welfare of the end consumer.",
            color: "orange",
            icon: <HeartPulse size={28} />,
          },
          {
            title: "Consumer Trust",
            description:
              "Winning consumer confidence and trust.",
            color: "green",
            icon: <Handshake size={28} />,
          },
          {
            title: "Preferred Choice",
            description:
              "Consumers first preferred Food Business Operators (FBOs) who follow FSSAI regulations.",
            color: "orange",
            icon: <ShoppingCart size={28} />,
          },
          {
            title: "Sahi Bhojan Mission",
            description:
              'Helps in achieving the government slogan of "Sahi Bhojan. Behtar Jeevan." (Right Food. Better Life.)',
            color: "green",
            icon: <TrendingUp size={28} />,
          },
        ].map((feature, index) => (
          <div key={index} className="relative">

            <div
              className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full shadow-lg ${
                feature.color === "green"
                  ? "bg-green-600 text-white"
                  : "bg-orange-600 text-white"
              }`}
            >
              {feature.icon}
            </div>

            <div className="bg-white rounded-2xl shadow-md pt-12 pb-8 px-6 text-center border border-gray-100 hover:shadow-xl transition">

              <h3
                className={`text-lg font-semibold ${
                  feature.color === "green"
                    ? "text-green-700"
                    : "text-orange-600"
                }`}
              >
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm mt-4">
                {feature.description}
              </p>

              <div
                className={`w-10 h-1 mx-auto mt-6 rounded-full ${
                  feature.color === "green"
                    ? "bg-green-600"
                    : "bg-orange-600"
                }`}
              ></div>

            </div>
          </div>
        ))}

      </div>
    </div>
  ),
},
{
  title: "Validity for FSSAI Central License",
  content: (
    <div className="mt-6">

      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 shadow-md">

        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Validity
        </h3>

        <p className="text-gray-700 leading-relaxed">
          • Validity of the FSSAI Central License is 
          <span className="font-semibold text-green-700"> 1 year to 5 years</span>, 
          depending on the choice of the Food Business Operators (FBOs) at the time of application, calculated from the date of issue of the license.
        </p>

      </div>

    </div>
  ),
},

               {
  title: "Documents Required For Central License",
  content: (
    <div className="mt-10 flex flex-col items-center">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full px-4">

        {[
          "a. Form-B duly completed and signed (in duplicate) by the proprietor/ partner or the authorised signatory",
          "b. Blueprint/layout plan of the processing unit showing the dimensions in metres/square metres and operation-wise area allocation.",
          "c. NOC from manufacturer in case of Re-labellers",
          "d. Food Safety Management System plan or certificate if any",
          "e. Source of milk or procurement plan for milk including location of milk collection centres etc in case of Milk and Milk Products processing units",
          "f. Source of raw material for meat and meat processing plants",
          "g. Pesticide residues report of water to be used as ingredient in case of units manufacturing Packaged drinking water, packaged Mineral water and/or carbonated water",
          "h. Recall plan wherever applicable, with details on whom the product is distributed",
          "i. NOCs from Municipality or local body and from State Pollution Control Board except in case of notified industrial area",
          "j. List of Directors with full address and contact details",
          "k. Name and List of Equipment and Machinery along with the number, installed capacity and horse power used",
          "l. Photo I.D and address proof issued by the Government authority of Proprietor/Partner/Director(s)/Authorised Signatory",
          "m. List of food category desired to be manufactured (in case of manufacturers)",
          "n. Authority letter with name and address of responsible person nominated by the manufacturer",
          "o. Analysis report (Chemical & Bacteriological) of water from a recognized/public health laboratory",
          "p. Proof of possession of premises (Sale deed/ Rent agreement/ Electricity bill, etc.)",
          "q. Partnership Deed/Affidavit/Memorandum & Articles of Association",
          "r. Copy of certificate obtained under Coop Act - 1861/Multi State Coop Act - 2002",
        ].map((doc, index) => {

          const bgColors = [
            "bg-red-100 text-red-700",
            "bg-orange-100 text-orange-700",
            "bg-green-100 text-green-700",
            "bg-yellow-100 text-yellow-700",
            "bg-indigo-100 text-indigo-700",
            "bg-blue-100 text-blue-700",
            "bg-purple-100 text-purple-700",
          ];

          return (
            <div
              key={index}
              className={`${bgColors[index % bgColors.length]} p-4 rounded-xl shadow flex items-start gap-3`}
            >

              {/* NUMBER */}
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-700 font-bold text-sm shrink-0">
                {index + 1}
              </div>

              {/* TEXT */}
              <p className="text-sm leading-snug">
                {doc}
              </p>

            </div>
          );
        })}

      </div>

    </div>
  ),
},
                {
  title: "The Importance Of FSSAI Central License",
  content: (
    <div className="space-y-6 mt-4">

      <p className="text-gray-700 leading-relaxed">
        Operating at a vast level and regulating all the food sectors across the
        country, the Food Safety and Standards Authority of India (FSSAI) ensures
        that food businesses maintain proper safety standards. Many food
        entrepreneurs often wonder why this license is necessary and why the
        government requires food businesses to obtain it before operating.
      </p>

      <p className="text-gray-700 leading-relaxed">
        The authority has been created to monitor and regulate Food Business
        Operators (FBOs). Food safety is extremely important because consumers
        eat and drink from restaurants, cafes, hotels, and other establishments
        without knowing the exact quality of ingredients used or the environment
        in which the food was prepared. FSSAI registration ensures that food is
        prepared and served following strict safety standards.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">

        {[
          {
            title: "Food Safety and Hygiene",
            desc: "FSSAI-certified food business operators strictly follow cleanliness, preparation, cooking, packaging, and serving standards.",
          },
          {
            title: "Government Approved Products",
            desc: "Only government-approved ingredients of proper quality are used for preparing food products.",
          },
          {
            title: "No Harmful Chemicals",
            desc: "FSSAI ensures that harmful substances such as artificial colours, toxins, or drugs are not used in food.",
          },
          {
            title: "Accurate Food Labelling",
            desc: "Food businesses must clearly display ingredients, manufacturing date, expiry date, and other information for full consumer transparency.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-orange-600 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-700 text-sm">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </div>
  ),
},
{
  title: "Food Safety Inspection (Audit)",
  content: (
    <div className="mt-6">

      <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-8 shadow-md">

        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Food Safety Inspection (Audit)
        </h3>

        <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-5">

          <li>
            Periodical food safety audit and inspection shall be conducted by the licensing authority of the licensed establishment.
          </li>

          <li>
            Food safety audits can be performed at any time in the licensed establishment.
          </li>

          <li>
            These audits can be carried out either by FSSAI directly or through accredited agencies.
          </li>

        </ul>

        {/* Special Rules Section */}
        <div className="mt-6 pt-6 border-t border-indigo-200">

          <h4 className="text-md font-semibold text-gray-800 mb-3">
            Special Rules for Large Central Government Organizations
          </h4>

          <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-5">

            <li>
              Central government organizations like Railways, Defence, etc., where multiple food businesses operate.
            </li>

            <li>
              To ensure food safety across such establishments, additional monitoring is required.
            </li>

            <li>
              The Food Authority may conduct a food safety audit at least once every year.
            </li>

          </ul>

        </div>

      </div>

    </div>
  ),
},
{
  title: "Returns for FSSAI Central License",
  content: (
    <div className="mt-6">

      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 shadow-md">

        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Return
        </h3>

        {/* Annual Return */}
        <ul className="space-y-3 text-gray-700 leading-relaxed list-decimal pl-5 mb-6">
          <li>
            Every Licensed establishment shall submit a return electronically in Form-D1.
          </li>
          <li>
            The return must be filed with the licensing authority on or before 31 May of every year.
          </li>
          <li>
            A separate return shall be filed for each class of license.
          </li>
        </ul>

        {/* Milk Products Section */}
        <div className="mt-4 pt-4 border-t border-green-200">
          <p className="text-gray-800 font-medium mb-3">
            Every Licensed establishment engaged in the manufacturing of Milk and/or Milk products:
          </p>

          <ul className="space-y-3 text-gray-700 leading-relaxed list-decimal pl-5">
            <li>
              Shall file a half-yearly return in Form-D2.
            </li>
            <li>
              For the period 1 April to 30 September — On or before 31 October.
            </li>
            <li>
              For the period 1 October to 31 March — On or before 30 April.
            </li>
          </ul>
        </div>

        {/* Penalty Section */}
        <div className="mt-6 pt-4 border-t border-green-200">
          <p className="text-gray-800 font-semibold mb-2">
            Penalty for delayed filing
          </p>

          <p className="text-gray-700 leading-relaxed">
            • Any delay in filing a return beyond 31st May of each year, 31st October and 30th April in case of Milk and/or Milk products, shall attract a 
            <span className="font-semibold text-green-700"> penalty of Rs 100 per day</span> of delay.
          </p>
        </div>

      </div>

    </div>
  ),
},
{
  title: "FSSAI Central License Fee Structure",
  content: (
    <div className="mt-10">

      {/* Pricing Layout */}
      <div className="grid md:grid-cols-3 gap-2 max-w-5xl mx-auto">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-2xl transition">

          <div className="w-16 h-16 mx-auto rounded-xl bg-orange-100 flex items-center justify-center mb-6">
            <span className="text-xl">📄</span>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Central License
          </h3>

          <p className="text-gray-500 mb-6">
            Service Type: <span className="font-semibold text-gray-700">New</span>
          </p>

          <div className="text-3xl font-bold text-orange-500 mb-4">
            ₹ 7000
          </div>

          <p className="text-gray-600">
            Government Fees:{" "}
            <span className="text-green-600 font-semibold">₹ 7500</span>
          </p>

        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center hover:shadow-2xl transition">

          <div className="w-16 h-16 mx-auto rounded-xl bg-blue-100 flex items-center justify-center mb-6">
            <span className="text-2xl">🔄</span>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Central License
          </h3>

          <p className="text-gray-500 mb-6">
            Service Type: <span className="font-semibold text-gray-700">Renewal</span>
          </p>

          <div className="text-3xl font-bold text-blue-600 mb-4">
            ₹ 3,000
          </div>

          <p className="text-gray-600">
            Government Fees:{" "}
            <span className="text-green-600 font-semibold text-lg">₹ 7500</span>
          </p>

        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-2xl transition">

          <div className="w-16 h-16 mx-auto rounded-xl bg-purple-100 flex items-center justify-center mb-6">
            <span className="text-xl">⚙️</span>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Central License
          </h3>

          <p className="text-gray-500 mb-4">
            Service Type: <span className="font-semibold text-gray-700">Modification</span>
          </p>

          <div className="text-3xl font-bold text-purple-600 mb-4">
            ₹ 5,000  
          </div>

          <p className="text-gray-600">
            Government Fees:{" "}
            <span className="text-green-600 font-semibold">₹ 1000</span>
          </p>

        </div>

      </div>
      {/* Simple Text instead of Card */}
      <div className="max-w-3xl mx-auto mt-10 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Fee Information
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Central License requires a government fee of ₹7500 for both new applications and renewals and ₹1000 for modification. The service fee charged by consultants or agencies for assisting with the application process may vary based on the complexity of the case and the level of assistance required. 
          
        </p>
      </div>

      {/* Contact Link */}
      <div className="text-center mt-12">
        <Link
          href="/contact-us"
          className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Contact Us
        </Link>

        <p className="text-gray-700 mt-4">
          Contact us now and know more about the fee structure!
        </p>
      </div>

    </div>
  ),
},
{
  title: "Penalties Without an FSSAI Licence",
  content: (
    <div className="mt-6">

      <div className="grid md:grid-cols-2 gap-6">

        {[
          {
            title: "Operating Without License",
            desc: "•	Running a food business without a license is punishable under Section 63 of the FSS Act, 2006, and shall be punishable with imprisonment for a term of a maximum of six months and also with a fine for a maximum of ₹5 Lakhs.",
          },
          {
            title: "False Information",
            desc: "Providing false or misleading information during the application process can lead to cancellation of the licence.",
          },
          {
            title: "Non-Compliance",
            desc: "Failure to comply with food safety and hygiene standards may result in penalties ranging from ₹1 lakh to ₹10 lakhs.",
          },
          {
            title: "Repeated Violations",
            desc: "Continuous violations or repeated non-compliance may lead to suspension or permanent cancellation of the licence.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-700 text-sm">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </div>
  ),
},
{
  title: "FSSAI Central License Renewal",
  content: (
    <div className="space-y-10 mt-6">

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        FSSAI Central License renewal is not a one-time process. Every Food Business
        Operator (FBO) must renew the license before its expiry to
        continue operating legally. Timely renewal helps avoid penalties
        and ensures uninterrupted business operations.Food Business Operators (FBOs) can renew their FSSAI Central License online by filing and submitting FORM-A on the FoSCoS portal.
      </p>

      {/* Renewal Timeline */}
      <div>
        <h3 className="text-xl font-semibold text-green-700 mt-4 mb-6">
          Renewal Timeline
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "The window opens for renewal of the FSSAI Registration 180 days before expiry. But you can also file a renewal up to 30 days before the expiry of the Food Registration",
            "The renewal of an FSSAI Registration in India is essential to ensure the uninterrupted legal operation of a food business in India",
            "The process is carried out online through the FoSCoS (Food Safety Compliance System) portal of FSSAI and should ideally be initiated at least 30 days before the expiry date of the existing registration.",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-green-50 border border-green-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white font-bold mb-4">
                {index + 1}
              </div>

              <p className="text-gray-700 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Renewal Process */}
      <div>
  <h3 className="text-xl font-semibold text-orange-600 mt-4 mb-6">
    Renewal Process: How to Renew?
  </h3>

  <div className="space-y-4">

    {[
      "Log in to the FoSCoS portal using your credentials.",
      "Go to the renewal section.",
      "Go to Dashboard > Renewal",
      "Select Validity Period (1 to 5 Years)",
      "Upload Required Documents",
      "Make Payment Online",
      "Submit Application & Note Reference Number",
      "Inspection (If Applicable), FSSAI may conduct a site inspection before approval.",
      "Download Renewed Food License Certificate."
    ].map((step, index) => (
      <div
        key={index}
        className="bg-orange-50 border border-orange-200 rounded-2xl p-5 shadow-md"
      >
        <div className="flex items-center gap-4">

          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-orange-600 text-white font-semibold">
            {index + 1}
          </div>

          <p className="text-gray-700">{step}</p>

        </div>
      </div>
    ))}

  </div>

  {/* NOTE */}
  <p className="mt-6 text-sm text-gray-600 italic">
    <span className="text-blue-600 font-semibold">Note:</span> A late fee of ₹100 per day will be charged by the authority for a late application for renewal beyond 30 days prior to expiration.
  </p>

</div>
      {/* Documents for Renewal */}
      <div>
        <h3 className="text-xl font-semibold text-green-700 mt-4 mb-6">
          Documents for Renewal
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            "Previous FSSAI Central License certificate",
            "Self-declaration confirming continued compliance",
            "Annual returns from the previous year",
            "Updated business information",
            "Proof of payment for the renewal fee",
          ].map((doc, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white font-bold mb-4">
                {index + 1}
              </div>

              <p className="text-gray-700 text-sm">{doc}</p>

              <div className="w-10 h-1 bg-orange-600 rounded-full mt-4"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Post Renewal Actions */}
      <div>
        <h3 className="text-xl font-semibold text-orange-600 mt-4 mb-6">
          Post-Renewal Actions
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Update the display of your renewed FSSAI License certificate at the business premises.",
            "Communicate the renewed license number to business partners.",
            "Update packaging and labelling with the new validity dates.",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-md"
            >
              <p className="text-gray-700 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  ),
},

                
              ].map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl font-semibold text-green-700 mb-4">
                    {section.title}
                  </h2>
                  <div className="text-gray-700">{section.content}</div>
                </div>
              ))}

              {/* CTA */}
              <div className="mt-12 text-center">
                <Link
          href="/apply-now"
          className="inline-block mt-8 bg-orange-500 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
        >
          Apply for FSSAI Central License
        </Link>
              </div>

            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="w-full lg:w-1/4">
            <Contact />
          </div>

        </div>
      </div>
    </section>
  );
}