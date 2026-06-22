import React, { useState } from "react";
import otpicon from "../assets/Images/otpicon.svg";
import otp1 from "../assets/Images/otp1.webp";
import otp2 from "../assets/Images/otp2.mp4";
import otp3 from "../assets/Images/otp3.jpeg";
import otp4 from "../assets/Images/otp4.mp4";
import otp5 from "../assets/Images/otp5.mp4";
import otp6 from "../assets/Images/otp6.jpeg";
import otp7 from "../assets/Images/otp7.webp";
import otp8 from "../assets/Images/otp8.webp";
import CTASection from "./CTASection";





export default function Otp() {

    const [showMoreLeft, setShowMoreLeft] = useState(false);
    const [showMoreRight, setShowMoreRight] = useState(false);
    const [showMore, setShowMore] = useState(false);

    return (
        <>
            <section className="w-full min-h-screen flex items-start pt-4 overflow-hidden">

                {/* NO LEFT RIGHT PADDING */}
                <div className="w-full">

                    {/* BIGGER IMAGE SIDE */}
                    <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] items-center gap-10">

                        {/* LEFT SIDE */}
                        <div className="px-2">

                            {/* TOP ICON */}
                            <div className="flex items-center gap-4 mb-6">

                                <img
                                    src={otpicon}
                                    alt="Campaign"
                                    className="w-11 h-11 object-contain"
                                />

                                <h3 className="text-[26px] font-semibold text-[#111827]">

                                    OTP

                                </h3>

                            </div>

                            {/* SMALL TITLE */}
                            <p className="uppercase tracking-[3px] text-[#4885bd] text-[18px] mb-5">

                                Instant Secure Verification

                            </p>

                            {/* MAIN HEADING */}
                            <h1 className="text-[35px] lg:text-[45px] leading-[1.08] font-bold text-[#1f2937] max-w-[850px]">

                                Effortless OTP Verification Across Channels

                            </h1>

                            {/* DESCRIPTION */}
                            <p className="text-[23px] leading-[34px] text-[#4b5563] mt-3 max-w-[850px]">

                                Integrate our OTP Widget to verify users instantly via SMS, WhatsApp, email, and more — no code hassles, just secure and seamless multi-channel authentication.



                            </p>

                            {/* BUTTON */}
                            <div className="flex flex-wrap items-center gap-3 mt-5">

                                <button className="bg-[#201e1e] hover:bg-[#1b2738] text-[#fafafa] px-3 py-1 rounded-[6px] text-[18px] font-medium transition-all duration-300 border border-[#1a212b]">

                                    Get Started For Free

                                </button>

                            </div>

                        </div>

                        {/* RIGHT SIDE IMAGE */}
                        <div className="relative flex justify-end">

                            <div className="w-full max-w-[800px] h-[510px] rounded-[10px] overflow-hidden">

                                <img
                                    src={otp1}
                                    alt="Campaign"
                                    className="w-full h-full rounded-[10px]"
                                />

                            </div>

                        </div>
                    </div>

                </div>

            </section>


            <section className="w-full py-10 bg-gray-50">

                <div className="w-full px-2">

                    {/* HEADING */}
                    <div className="mb-5">

                        <h2 className="text-[28px] lg:text-[33px] font-bold text-[#111827] leading-tight">

                            Features

                        </h2>

                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* CARD 1 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">

                                    Invisible OTP: Secure Authentication Made Simple

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">

                                    Invisible OTP is a secure and seamless authentication
                                    method that verifies a user’s identity without requiring
                                    them to enter a code manually.

                                    Invisible OTP works silently in the background,
                                    detecting and verifying the OTP automatically.

                                    This not only simplifies the login process but
                                    also strengthens security.

                                </p>

                                {/* READ MORE */}
                                <button
                                    onClick={() => setShowMoreLeft(!showMoreLeft)}
                                    className="mt-4 text-[#1d4ed8] text-[16px] font-medium hover:text-[#9a6a00] transition-all duration-300"
                                >

                                    {showMoreLeft ? "Read Less" : "Read More"}

                                </button>

                                {/* EXTRA CONTENT */}
                                {
                                    showMoreLeft && (

                                        <div className="mt-5">

                                            <h4 className="text-[20px] font-semibold text-[#111827]">

                                                Use Cases:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Mobile Banking Apps: Prevent unauthorized access effortlessly.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • E-commerce Platforms: Enable fast checkout in the background.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Online Games: Secure in-app purchases smoothly.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Streaming Services: Verify new logins seamlessly.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Healthcare Apps: Reduce delays in patient access.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">

                                                Key Features:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • No manual code entry required.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Smooth authentication without interruption.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Minimizes OTP fraud risks.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Secure background verification.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Hassle-free authentication flow.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* VIDEO */}
                            <div className="w-full flex items-center justify-center p-6">

                                <video
                                    src={otp2}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full max-w-[500px] h-auto object-contain"
                                />

                            </div>

                        </div>

                        {/* CARD 2 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">

                                    Magic Links: Password-Free Authentication in One Click

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">

                                    Magic Link is a secure login method where users
                                    don’t need to enter a password.

                                    After providing their email or phone number,
                                    they receive a unique, time-sensitive link.

                                    Clicking the link verifies their identity and
                                    logs them in seamlessly and securely.

                                </p>

                                {/* READ MORE */}
                                <button
                                    onClick={() => setShowMoreRight(!showMoreRight)}
                                    className="mt-4 text-[#1d4ed8] text-[16px] font-medium hover:text-[#9a6a00] transition-all duration-300"
                                >

                                    {showMoreRight ? "Read Less" : "Read More"}

                                </button>

                                {/* EXTRA CONTENT */}
                                {
                                    showMoreRight && (

                                        <div className="mt-5">

                                            <h4 className="text-[20px] font-semibold text-[#111827]">

                                                Use Cases:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Passwordless Login for easier authentication.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Instant Account Recovery without reset steps.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • One-Click Sign-Up for better conversions.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Secure Authentication without password risks.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Better User Experience across devices.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">

                                                Key Features:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Single-session secure login links.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Auto-expiring links for protection.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Flexible expiration timing support.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Secure link generation.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Simplified login process.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={otp3}
                                    alt="Magic Link"
                                    className="w-full h-[420px] object-contain"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="w-full py-3 bg-gray-50">

                <div className="w-full px-2">

                    {/* SINGLE BOX */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border border-gray-300 rounded-[2px] bg-white overflow-hidden">

                        {/* LEFT CONTENT */}
                        <div className="p-15">

                            <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#111827] leading-tight">

                                Multi-Channel OTP Delivery: OTP That Finds You, Always

                            </h2>

                            <p className="text-[16px] leading-[25px] text-[#2c3138] mt-5">

                                Multi-Channel OTP Delivery ensures secure access by
                                sending OTPs through various channels, like OTP SMS,
                                WhatsApp OTP, OTP email, and voice OTP, guaranteeing
                                that users receive their codes no matter the medium.

                            </p>

                            {/* READ MORE BUTTON */}
                            <button
                                onClick={() => setShowMore(!showMore)}
                                className="mt-5 text-[#1d4ed8] text-[16px] font-medium hover:text-[#9a6a00] transition-all duration-300"
                            >

                                {showMore ? "Read Less" : "Read More"}

                            </button>

                            {/* EXTRA CONTENT */}
                            {
                                showMore && (

                                    <div className="mt-6">

                                        {/* USE CASES */}
                                        <h3 className="text-[22px] font-semibold text-[#111827]">

                                            Use Cases:

                                        </h3>

                                        <div className="mt-4 space-y-3">

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • E-commerce & Online Retail: Secure user login & checkout via multi-channel OTPs.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Travel Apps: Ensure secure booking and payment processes with multi-factor authentication.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Financial Institutions: Provide secure access through preferred communication channels.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Telecom Services: Authenticate users with SMS, email, or voice OTPs.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Retail Apps: Ensure successful user login using multiple channels.

                                            </p>

                                        </div>

                                        {/* KEY FEATURES */}
                                        <h3 className="text-[22px] font-semibold text-[#111827] mt-8">

                                            Key Features:

                                        </h3>

                                        <div className="mt-4 space-y-3">

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • OTPs delivered via SMS, Email, WhatsApp, and Voice.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Ensures delivery via the user’s preferred channel.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Supports international OTP delivery for global accessibility.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Reliable OTP delivery even in low-network areas.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Smart fallback system ensures instant alternate delivery.

                                            </p>

                                        </div>

                                    </div>

                                )
                            }

                        </div>

                        {/* RIGHT VIDEO */}
                        <div className="w-full flex items-center justify-center p-6">

                            <video
                                src={otp4}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full max-w-[700px] h-auto object-contain"
                            />

                        </div>

                    </div>

                </div>

            </section>


            <section className="w-full py-6 bg-gray-50">

                <div className="w-full px-2">

                    {/* GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* CARD 1 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[20px] font-semibold text-[#111827]">

                                    Failover Mechanism: Ensuring Uninterrupted OTP Delivery

                                </h3>

                                <p className="text-[15px] leading-[24px] text-[#2c3138] mt-3">

                                    The OTP failover mechanism guarantees that users
                                    receive their OTP codes by automatically switching
                                    to an alternate channel if the primary OTP delivery fails.

                                    This ensures seamless and timely authentication.

                                </p>

                                {/* READ MORE */}
                                <button
                                    onClick={() => setShowMoreLeft(!showMoreLeft)}
                                    className="mt-4 text-[#1d4ed8] text-[16px] font-medium hover:text-[#9a6a00] transition-all duration-300"
                                >

                                    {showMoreLeft ? "Read Less" : "Read More"}

                                </button>

                                {/* EXTRA CONTENT */}
                                {
                                    showMoreLeft && (

                                        <div className="mt-5">

                                            <h4 className="text-[20px] font-semibold text-[#111827]">

                                                Use Cases:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Real-Time Delivery Tracking across channels.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Emergency Services with reliable authentication.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Online Ticketing during high-traffic times.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • International Businesses with reliable delivery.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Secure Logins using backup channels.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">

                                                Key Features:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Delivers OTPs without delay.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Auto-retries through alternate channels.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Reduces login failures and improves retention.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Guarantees reliable OTP delivery worldwide.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Ideal for low-network coverage areas.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* VIDEO */}
                            <div className="mt-1 w-full">

                                <video
                                    src={otp5}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />

                            </div>

                        </div>

                        {/* CARD 2 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[20px] font-semibold text-[#111827]">

                                    Plug & Play Integration: Effortless Setup, Instant Connectivity

                                </h3>

                                <p className="text-[15px] leading-[22px] text-[#282d33] mt-3">

                                    OTP Widget with Plug & Play Integration allows
                                    you to easily connect and start using OTP
                                    authentication without complex configurations,
                                    ensuring a hassle-free and quick setup.

                                </p>

                                {/* READ MORE */}
                                <button
                                    onClick={() => setShowMoreRight(!showMoreRight)}
                                    className="mt-4 text-[#1d4ed8] text-[16px] font-medium hover:text-[#9a6a00] transition-all duration-300"
                                >

                                    {showMoreRight ? "Read Less" : "Read More"}

                                </button>

                                {/* EXTRA CONTENT */}
                                {
                                    showMoreRight && (

                                        <div className="mt-5">

                                            <h4 className="text-[20px] font-semibold text-[#111827]">

                                                Use Cases:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Startups with quick OTP integration.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • SaaS Platforms with secure user logins.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Mobile Apps using OTP verification SDKs.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Enterprise Solutions with minimal infrastructure changes.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Online Marketplaces for secure buyer-seller transactions.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">

                                                Key Features:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Easy setup with minimal coding.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Ready-to-use SDKs for web and mobile.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Seamless integration with existing systems.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Saves development time and resources.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Scalable for growing businesses.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={otp6}
                                    alt="Plug & Play Integration"
                                    className="w-full h-[420px] object-contain"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="w-full py-3 bg-gray-50">

                <div className="w-full px-2">

                    {/* SINGLE BOX */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border border-gray-300 rounded-[2px] bg-white overflow-hidden">

                        {/* LEFT CONTENT */}
                        <div className="p-15">

                            <h2 className="text-[17px] lg:text-[22px] font-semibold text-[#111827] leading-tight">

                                Real-Time Analytics & Reporting: Instant Insights for Smarter Decisions

                            </h2>

                            <p className="text-[16px] leading-[25px] text-[#2c3138] mt-5">

                                Real-Time Analytics & Reporting offer detailed insights,
                                allowing you to track OTP delivery, channel wise performance,
                                and user engagement instantly to make smarter & data-driven decisions.

                            </p>

                            {/* READ MORE BUTTON */}
                            <button
                                onClick={() => setShowMore(!showMore)}
                                className="mt-5 text-[#1d4ed8] text-[16px] font-medium hover:text-[#9a6a00] transition-all duration-300"
                            >

                                {showMore ? "Read Less" : "Read More"}

                            </button>

                            {/* EXTRA CONTENT */}
                            {
                                showMore && (

                                    <div className="mt-6">

                                        {/* USE CASES */}
                                        <h3 className="text-[22px] font-semibold text-[#111827]">

                                            Use Cases:

                                        </h3>

                                        <div className="mt-4 space-y-3">

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • E-commerce Platforms: Analyze OTP delivery during high-traffic sales events.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Online Banking: Track OTP delivery times for secure transactions.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Travel Services: Monitor OTP delivery in remote areas.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Education Platforms: Optimize login success rates for students.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Tech Services: Ensure users receive OTPs on time during critical logins.

                                            </p>

                                        </div>

                                        {/* KEY FEATURES */}
                                        <h3 className="text-[22px] font-semibold text-[#111827] mt-8">

                                            Key Features:

                                        </h3>

                                        <div className="mt-4 space-y-3">

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Track OTP delivery rates, failures, and response times in real time.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Gain insights into OTP channel performance and user activity.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Monitor OTP success rates for optimization and troubleshooting.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Customize reports based on business metrics and requirements.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Improve OTP workflows for a better customer experience.

                                            </p>

                                        </div>

                                    </div>

                                )
                            }

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="w-full flex items-center justify-center p-6">

                            <img
                                src={otp7}
                                alt="Image"
                                className="w-full max-w-[700px] h-auto object-contain"
                            />

                        </div>

                    </div>

                </div>

            </section>


            <section className="w-full py-3 bg-gray-50">

                <div className="w-full px-2">

                    {/* SINGLE BOX */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border border-gray-300 rounded-[2px] bg-white overflow-hidden">

                        {/* LEFT CONTENT */}
                        <div className="p-15">

                            <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#111827] leading-tight">

                                Inbuilt IP Security: Protecting Access from Unauthorized Locations

                            </h2>

                            <p className="text-[16px] leading-[25px] text-[#2c3138] mt-5">

                                Inbuilt IP Security ensures that OTPs and sensitive data
                                are only accessible from trusted IP addresses, adding an
                                extra layer of protection against unauthorized access
                                and potential threats.

                            </p>

                            {/* READ MORE BUTTON */}
                            <button
                                onClick={() => setShowMore(!showMore)}
                                className="mt-5 text-[#1d4ed8] text-[16px] font-medium hover:text-[#9a6a00] transition-all duration-300"
                            >

                                {showMore ? "Read Less" : "Read More"}

                            </button>

                            {/* EXTRA CONTENT */}
                            {
                                showMore && (

                                    <div className="mt-6">

                                        {/* USE CASES */}
                                        <h3 className="text-[22px] font-semibold text-[#111827]">

                                            Use Cases:

                                        </h3>

                                        <div className="mt-4 space-y-3">

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Enhanced User Authentication with trusted IP-based access.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Secure Transactions for high-value operations.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Geographically Restrict Access based on IP ranges or regions.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Corporate Network Protection for internal systems.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Fraud Prevention by blocking suspicious IP addresses.

                                            </p>

                                        </div>

                                        {/* KEY FEATURES */}
                                        <h3 className="text-[22px] font-semibold text-[#111827] mt-8">

                                            Key Features:

                                        </h3>

                                        <div className="mt-4 space-y-3">

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Restrict access to trusted IP addresses only.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Monitor and block unauthorized IPs in real time.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Set location-based access restrictions for regions or IPs.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Get instant alerts for suspicious access attempts.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Easily integrate with existing authentication systems.

                                            </p>

                                        </div>

                                    </div>

                                )
                            }

                        </div>

                        <div className="w-full flex items-center justify-center p-6">

                            <img
                                src={otp8}
                                alt="Image"
                                className="w-full max-w-[600px] h-auto object-contain"
                            />

                        </div>

                    </div>

                </div>

            </section>

            <CTASection />





        </>
    )
}
