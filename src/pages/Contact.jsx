import React from "react";
import whatsappicon from "../assets/Images/whatsappicon.svg";
import callicon from "../assets/Images/callicon.svg";

export default function GetInTouch() {
  return (
    <section className="w-full bg-white py-6 px-2">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f1f1f1 1px, transparent 1px), linear-gradient(to bottom, #f1f1f1 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto text-center">
        {/* Eyebrow badge */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide mb-5">
          GET IN TOUCH
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          How can we help you?
        </h2>

        {/* Subheading */}
        <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto mb-14">
          Reach out to our global sales and support teams, or book a direct
          consultation instantly.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Sales Team Card */}
          <div className="bg-gray-50/60 rounded-3xl p-8 text-left flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 7h-3V5a3 3 0 00-3-3H10a3 3 0 00-3 3v2H4a1 1 0 00-1 1v10a2 2 0 002 2h14a2 2 0 002-2V8a1 1 0 00-1-1zM9 5a1 1 0 011-1h4a1 1 0 011 1v2H9V5z"
                />
              </svg>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Sales Team
            </h3>

            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-green-500 mt-0.5">✓</span>
                Explore plans and pricing
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-green-500 mt-0.5">✓</span>
                Find the right fit for your needs
              </li>
            </ul>

            <a
              href="mailto:info@allsmssolution.com"
              className="flex items-center gap-2 text-sm text-blue-600 font-medium mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
info@allsmssolution.com            </a>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-sm text-gray-700 font-medium">
                +91 9967007649
              </span>
              <img src={whatsappicon} alt="WhatsApp" className="w-8 h-8" />
              <img src={callicon} alt="Call" className="w-8 h-8" />
            </div>

            <div className="flex items-center gap-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-sm text-gray-700 font-medium">
                +91 7900097353
              </span>
              <img src={callicon} alt="Call" className="w-8 h-8" />
            </div>
          </div>

          {/* Schedule a Meeting Card (highlighted) */}
          <div className="bg-[#0f1525] rounded-3xl p-8 text-left flex flex-col relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth={2} />
                <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </div>

            <h3 className="text-lg font-bold text-white mb-3">
              Schedule a Meeting
            </h3>

            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              Got a question or need to talk to someone? Our assistant
              answers your query and books the right meeting — all in one
              place.
            </p>

            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-green-400 mt-0.5">✓</span>
                Query resolution
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-green-400 mt-0.5">✓</span>
                Real-time slot availability
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-green-400 mt-0.5">✓</span>
                Multilingual support
              </li>
            </ul>

            <button className="mt-auto w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2">
              Book a Slot
              <span aria-hidden>→</span>
            </button>
          </div>

          {/* Technical Support Card */}
          <div className="bg-gray-50/60 rounded-3xl p-8 text-left flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 18v-6a9 9 0 0118 0v6M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z"
                />
              </svg>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Technical Support
            </h3>

            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-green-500 mt-0.5">✓</span>
                Reliable assistance when you need it
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-green-500 mt-0.5">✓</span>
                Clear answers, fewer back-and-forths
              </li>
            </ul>

            <a
              href="mailto:support@allsmssolution.com"
              className="flex items-center gap-2 text-sm text-blue-600 font-medium mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
support@allsmssolution.com
            </a>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-sm text-gray-700 font-medium">
                +91 7977505642
              </span>
              <img src={whatsappicon} alt="WhatsApp" className="w-8 h-8" />
              <img src={callicon} alt="Call" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}