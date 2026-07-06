import React from "react";
import rcsicon from "../assets/Images/rcsicon.svg";
import CTASection from "./CTASection";
import rcs3 from "../assets/Images/rcs3.jpg";
import rcs4 from "../assets/Images/rcs4.jpg";
import rcs7 from "../assets/Images/rcs5.jpg";
import rcs8 from "../assets/Images/rcs6.jpg";
import rcs9 from "../assets/Images/rcs9.jpg";
import rcs10 from "../assets/Images/rcs10.jpg";
import rcs11 from "../assets/Images/rcs11.jpg";
import rcs12 from "../assets/Images/rcs12.jpg";
import rcs13 from "../assets/Images/rcs13.jpg";
import rcsv from "../assets/Images/rcsv.mp4";


const RCS = ({
    icon = rcsicon,
    name = "RCS",
    eyebrow = "RICH COMMUNICATION SERVICES",
    heading = "Engage customers in their SMS inbox by delivering rich and interactive messages using RCS",
    description = "RCS messaging is an integrated channel that enables businesses to engage customers through rich, immersive, two-way conversations.",
    ctaLabel = "Get Started",
    ctaLink = "/signup",
}) => {

    return (
        <>
            <section className="w-full bg-white py-4 px-2">
                <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src={icon} alt={name} className="w-14 h-14" />
                            <span className="text-[22px] font-semibold text-[#111827]">{name}</span>
                        </div>

                        <p className="uppercase tracking-[3px] text-[#494cab] text-[18px] mb-3">
                            {eyebrow}
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#111827] leading-tight mb-5">
                            {heading}
                        </h2>

                        <p className="text-gray-600 text-base mb-7 max-2xl">
                            {description}
                        </p>

                        <a href={ctaLink}>
                            <button className="bg-[#111827] hover:bg-[#9e892c] transition-colors text-white px-6 py-3 rounded-md text-sm font-medium">
                                {ctaLabel}
                            </button>
                        </a>
                    </div>

                    {/* RIGHT VIDEO */}
                    <div className=" rounded-2xl overflow-hidden">
                        <video
                            src={rcsv}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full md:h-[595px] object-cover"
                        />
                    </div>

                </div>
            </section>

            {/* FOUR COLUMN FEATURE GRID */}
            <section className="w-full py-6 bg-white">
                <div className="max-w-8xl px-2">

                    {/* HEADING */}
                    <div className="mb-14 text-center">
                        <h2 className="text-[28px] lg:text-[33px] font-bold text-[#111827] leading-tight">
                            Why Businesses Choose RCS Messaging
                        </h2>
                    </div>

                    {/* GRID - 4 COLUMNS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* CARD 1 */}
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={rcs13}
                                alt="Verified Sender ID"
                                className="w-160 h-50 object-contain mb-2"
                            />
                            <h3 className="text-[20px] font-semibold text-[#111827] mb-2">
                                Verified Sender ID
                            </h3>
                            <p className="text-[15px] leading-[24px] text-[#4b5563]">
                                Build instant trust with a Google-verified business profile, logo, and branded name in every conversation.
                            </p>
                        </div>

                        {/* CARD 2 */}
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={rcs11}
                                alt="Rich Media Messages"
                                className="w-160 h-50 object-contain mb-2"
                            />
                            <h3 className="text-[20px] font-semibold text-[#111827] mb-2">
                                Rich Media Messages
                            </h3>
                            <p className="text-[15px] leading-[24px] text-[#4b5563]">
                                Share images, videos, carousels, and interactive buttons directly inside the native SMS inbox.
                            </p>
                        </div>

                        {/* CARD 3 */}
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={rcs10}
                                alt="Two-Way Conversations"
                                className="w-160 h-50 object-contain mb-2"
                            />
                            <h3 className="text-[20px] font-semibold text-[#111827] mb-2">
                                Two-Way Conversations
                            </h3>
                            <p className="text-[15px] leading-[24px] text-[#4b5563]">
                                Enable real-time, two-way chat that lets customers respond, ask questions, and complete actions instantly.
                            </p>
                        </div>

                        {/* CARD 4 */}
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={rcs12}
                                alt="Delivery & Read Reports"
                                className="w-160 h-50 object-contain mb-2"
                            />
                            <h3 className="text-[20px] font-semibold text-[#111827] mb-2">
                                Delivery & Read Reports
                            </h3>
                            <p className="text-[15px] leading-[24px] text-[#4b5563]">
                                Track delivered, read, and replied statuses in real time to measure campaign performance accurately.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="w-full border border-gray-300 bg-white overflow-hidden ">

                <div className="w-full px-2">

                    {/* 60% CONTENT — 40% IMAGE */}
                    <div className=" p-2 grid grid-cols-1 lg:grid-cols-[60%_40%] items-center gap-12">

                        {/* LEFT CONTENT */}
                        <div>

                            {/* HEADING */}
                            <h2 className="text-[25px] lg:text-[30px] font-bold text-[#111827] leading-tight max-w-[900px]">

                                Integrate RCS Messaging API into Your Business in Minutes

                            </h2>

                            {/* DESCRIPTION */}
                            <p className="text-[15px] leading-[28px] text-[#4b5563] mt-6 max-w-[750px]">



                                Seamlessly integrate RCS with your existing systems via our programmable API. Connect with CRM, email, social media, and SMS platforms to deliver rich messaging, automate workflows, and track campaign performance.                            </p>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[520px] rounded-[20px] overflow-hidden bg-white">

                                <img
                                    src={rcs9}
                                    alt="Time Based Condition"
                                    className="w-full h-[500px] object-contain"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="w-full py-16 bg-gray-50">

                <div className="w-full px-2">

                    {/* HEADING */}
                    <div className="mb-5">

                        <h2 className="text-[28px] lg:text-[33px] font-bold text-[#111827] leading-tight">

                            Features of Google RCS Messages


                        </h2>

                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* CARD 1 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">

                                    Corporate Communications with Branding

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">

                                    Distinguish by branding Enhance your brand's visibility in the SMS inbox using a distinctive sender ID and logo. Utilize a visually appealing interface to effectively engage customers.

                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={rcs3}
                                    alt="Multi channel support"
                                    className="w-full h-[450px] object-contain"
                                />

                            </div>

                        </div>

                        {/* CARD 2 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">

                                    Provide Multimedia Interactions

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">


                                    Enhance your brand communication by delivering RCS messages that build trust. Incorporate your logo, brand name, videos, images, and carousels into your messaging to increase conversions.

                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={rcs4}
                                    alt="Draggable Flow"
                                    className="w-full h-[450px] object-contain"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="w-full border border-gray-300 bg-white overflow-hidden ">

                <div className="w-full px-2">

                    {/* 60% CONTENT — 40% IMAGE */}
                    <div className=" p-12 grid grid-cols-1 lg:grid-cols-[60%_40%] items-center gap-12">

                        {/* LEFT CONTENT */}
                        <div>

                            {/* HEADING */}
                            <h2 className="text-[25px] lg:text-[30px] font-bold text-[#111827] leading-tight max-w-[900px]">

                                Boost Sales Through Interactive Conversations

                            </h2>

                            {/* DESCRIPTION */}
                            <p className="text-[15px] leading-[28px] text-[#4b5563] mt-6 max-w-[750px]">



                                Craft an engaging conversation experience with images, videos, carousels, and interactive action buttons. Stand out from competitors by sending engaging and reliable Google RCS messages that drive conversions.
                            </p>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[520px] rounded-[20px] overflow-hidden bg-white">

                                <img
                                    src={rcs7}
                                    alt="Time Based Condition"
                                    className="w-full h-[500px] object-contain"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="w-full border border-gray-300 bg-white overflow-hidden ">

                <div className="w-full px-2">

                    {/* 60% CONTENT — 40% IMAGE */}
                    <div className=" p-12 grid grid-cols-1 lg:grid-cols-[60%_40%] items-center gap-12">

                        {/* LEFT CONTENT */}
                        <div>

                            {/* HEADING */}
                            <h2 className="text-[25px] lg:text-[30px] font-bold text-[#111827] leading-tight max-w-[900px]">

                                Enhanced Customer Trust

                            </h2>

                            {/* DESCRIPTION */}
                            <p className="text-[15px] leading-[28px] text-[#4b5563] mt-6 max-w-[750px]">



                                Understand your customer's habits Personalize your communication, and build lasting relationships that drive loyalty. Utilize verified and badged sender IDs vetted by Google for higher response rates and enhanced trust and credibility.
                            </p>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[520px] rounded-[20px] overflow-hidden bg-white">

                                <img
                                    src={rcs8}
                                    alt="Time Based Condition"
                                    className="w-full h-[500px] object-contain"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <CTASection />
        </>
    );
};

export default RCS;