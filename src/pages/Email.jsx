import React, { useState } from "react";
import email from "../assets/Images/email.svg";
import mail1 from "../assets/Images/mail1.webp";
import mail2 from "../assets/Images/mail2.mp4";
import mail3 from "../assets/Images/mail3.webp";
import mail4 from "../assets/Images/mail4.mp4";
import mail5 from "../assets/Images/mail5.svg";
import mail6 from "../assets/Images/mail6.svg";
import mail7 from "../assets/Images/mail7.svg";
import mail8 from "../assets/Images/mail8.mp4";
import mail9 from "../assets/Images/mail9.mp4";
import mail10 from "../assets/Images/mail10.svg";
import mail11 from "../assets/Images/mail11.svg";
import mail12 from "../assets/Images/mail12.svg";
import mail13 from "../assets/Images/mail13.svg";
import mail14 from "../assets/Images/mail14.svg";
import mail15 from "../assets/Images/mail15.jpg";
import mail16 from "../assets/Images/mail16.svg";
import mail17 from "../assets/Images/mail17.svg";
import mail18 from "../assets/Images/mail18.svg";
import mail19 from "../assets/Images/mail19.mp4";
import CTASection from "./CTASection";













export default function Email() {

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
                                    src={email}
                                    alt="Campaign"
                                    className="w-11 h-11 object-contain"
                                />

                                <h3 className="text-[26px] font-semibold text-[#111827]">

                                    Email API Provider

                                </h3>

                            </div>

                            {/* SMALL TITLE */}
                            <p className="uppercase tracking-[3px] text-[#cb711c] text-[18px] mb-5">

                                smarter email strategy


                            </p>

                            {/* MAIN HEADING */}
                            <h1 className="text-[35px] lg:text-[40px] leading-[1.08] font-bold text-[#1f2937] max-w-[850px]">

                                Deliver Secure & Instant Emails

                            </h1>

                            {/* DESCRIPTION */}
                            <p className="text-[23px] leading-[34px] text-[#4b5563] mt-3 max-w-[850px]">

                                Ensure every message reaches your customers on time with the #1 email automation platform—fast, reliable, and built for seamless transactions.



                            </p>

                            {/* BUTTON */}
                            <div className="flex flex-wrap items-center gap-3 mt-5">

                                <button className="bg-[#201e1e] hover:bg-[#1b2738] text-[#fafafa] px-3 py-1 rounded-[6px] text-[18px] font-medium transition-all duration-300 border border-[#1a212b]">

                                    Get Started

                                </button>

                            </div>

                        </div>

                        {/* RIGHT SIDE IMAGE */}
                        <div className="relative flex justify-end">

                            <div className="w-full max-w-[900px] h-[510px] rounded-[1px] overflow-hidden">

                                <img
                                    src={mail1}
                                    alt="Campaign"
                                    className="w-full h-full rounded-[1px]"
                                />

                            </div>

                        </div>
                    </div>

                </div>

            </section>

            <section className="w-full py-3 bg-gray-50">

                <div className="w-full px-1">

                    {/* GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* CARD 1 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">

                                    Create Email Templates with an AI Email Generator in Seconds!

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">

                                    Accelerate your email creation process with All SMS Solution’s
                                    AI Email Generator, which instantly crafts subject lines,
                                    headers, and full email content perfectly aligned with
                                    your campaign goals and target audience.

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
                                                    • Launch Campaigns Faster with instant email generation.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Multilingual Campaigns in your preferred language.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Maintain a consistent brand voice across emails.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Boost engagement with AI-crafted messaging.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Save time and focus more on strategy.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">

                                                Key Features:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Smart Subject Line Suggestions for higher open rates.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Prompt-Based Content Generator for instant emails.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Generate headers, body, and footers seamlessly.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Engagement optimized content for better conversions.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Flexible tone & style customization options.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* VIDEO */}
                            <div className="mt-8 w-full">

                                <video
                                    src={mail2}
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

                                <h3 className="text-[28px] font-semibold text-[#111827]">

                                    Boost Visibility with Gmail Markup

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">

                                    Make your emails more engaging with Gmail schema markup.
                                    Display rich snippets, action buttons, and event previews
                                    directly in the Gmail inbox to help users take action faster
                                    and improve your email performance.

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
                                                    • Event Invitations with RSVP and calendar actions.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • E-Commerce Offers with “Shop Now” buttons.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Real-time Order & Delivery Updates.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Appointment Confirmations directly from inbox.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Flight & Hotel Bookings with quick actions.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">

                                                Key Features:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Schema-enabled Gmail enhancements.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Interactive action buttons for higher CTR.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Improved inbox visibility with rich snippets.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Faster conversions without opening full email.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Easy Google-compliant schema integration.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={mail3}
                                    alt="Gmail Markup"
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

                                Dynamic Personalization with Handlebar Variables

                            </h2>

                            <p className="text-[16px] leading-[25px] text-[#2c3138] mt-5">

                                Handlebar lets you personalize emails automatically
                                by inserting dynamic data and conditional content.

                                Create relevant, one-to-one messages that boost engagement
                                without any manual work.

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

                                                • User-Specific Greetings with names, cities, and company details.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Custom Discount Codes personalized for each user.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Behavior-Based Messaging using recipient activity.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Transactional Emails with order and delivery details.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Account Notifications for renewals, upgrades, and alerts.

                                            </p>

                                        </div>

                                        {/* KEY FEATURES */}
                                        <h3 className="text-[22px] font-semibold text-[#111827] mt-8">

                                            Key Features:

                                        </h3>

                                        <div className="mt-4 space-y-3">

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Easy {"{{variable}}"} Integration for dynamic email personalization.
                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Supports conditional logic for user-specific content.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Flexible personalization at scale without manual work.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Compatible with any HTML email template.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Automation-ready workflows with real-time updates.

                                            </p>

                                        </div>

                                    </div>

                                )
                            }

                        </div>

                        {/* RIGHT VIDEO */}
                        <div className="w-full flex items-center justify-center p-6">

                            <video
                                src={mail4}
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

            <section className="w-full py-3 bg-gray-50">

                <div className="w-full px-1">

                    {/* GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* CARD 1 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">

                                    Prevent Email Fraud with DMARC Compliance

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">

                                    Protect your brand from email spoofing and phishing
                                    with DMARC (Domain-based Message Authentication,
                                    Reporting & Conformance).

                                    Ensure only legitimate emails reach your audience
                                    while enhancing security and email deliverability.

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
                                                    • Prevent Email Spoofing & Phishing attacks.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Enhance website and domain security.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Improve transactional email deliverability.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Gain visibility on email sending sources.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Boost customer trust and brand reputation.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">

                                                Key Features:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • SPF & DKIM Authentication support.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • DMARC Policy Control with flexible enforcement.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Detailed reporting and monitoring tools.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Complete subdomain protection against misuse.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Geo-location tracking for suspicious activity detection.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={mail5}
                                    alt="DMARC Compliance"
                                    className="w-full h-[420px] object-contain"
                                />

                            </div>

                        </div>

                        {/* CARD 2 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">

                                    Maintain your Domain Reputation with Smart Email Validation

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">

                                    Maintain a clean, effective email list by validating
                                    email addresses before sending email campaigns.

                                    Removing invalid, fake, or risky addresses ensures
                                    higher email deliverability and protects your sender reputation.

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
                                                    • Reduce bounce rates with clean email lists.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Increase inbox deliverability rates.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Target valid and active users effectively.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Improve campaign open and engagement rates.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Protect sender reputation from bad email data.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">

                                                Key Features:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Instantly detect valid, invalid, and risky emails.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Bulk email validation support for large lists.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Remove fake and undeliverable email addresses.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Ensure compliance with DMARC, SPF, and DKIM.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Improve audience targeting and engagement.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={mail6}
                                    alt="Smart Email Validation"
                                    className="w-full h-[420px] object-contain"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="w-full py-3 bg-gray-50">

                <div className="w-full px-1">

                    {/* SINGLE CARD */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border border-gray-300 rounded-[2px] bg-white overflow-hidden">

                        {/* LEFT CONTENT */}
                        <div className="p-15">

                            <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#111827] leading-tight">

                                AI-Powered Email Personalization at Scale

                            </h2>

                            <p className="text-[16px] leading-[25px] text-[#2c3138] mt-5">

                                Transform your email with Intellisend AI - where every email
                                evolves dynamically to match your audience.

                                Our AI-driven system modifies content at scale,
                                ensuring each recipient gets the most relevant message
                                for higher engagement and better deliverability.

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

                                                • Hyper-Personalized Campaigns for different audience groups.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Subject Line Optimization for better open rates.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Static Preview with fully dynamic personalized delivery.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Scalable Product Announcements customized automatically.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Personalized Event & Webinar Campaigns for better attendance.

                                            </p>

                                        </div>

                                        {/* KEY FEATURES */}
                                        <h3 className="text-[22px] font-semibold text-[#111827] mt-8">

                                            Key Features:

                                        </h3>

                                        <div className="mt-4 space-y-3">

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Inbuilt AI Engine for automated email personalization.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Content Variation Scaling for audience-based delivery.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Auto Content Modification without manual effort.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • 2X Scaling pattern for enhanced campaign impact.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Mobile & Desktop optimized responsive templates.

                                            </p>

                                        </div>

                                    </div>

                                )
                            }

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="w-full flex items-center justify-center p-6">

                            <img
                                src={mail7}
                                alt="AI Email Personalization"
                                className="w-full max-w-[500px] h-auto object-contain"
                            />

                        </div>

                    </div>

                </div>

            </section>

            <section className="w-full py-3 bg-gray-50">

                <div className="w-full px-2">

                    {/* GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* CARD 1 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[20px] font-semibold text-[#111827]">

                                    Create Stunning Emails in Minutes

                                </h3>

                                <p className="text-[15px] leading-[24px] text-[#2c3138] mt-3">

                                    Create stunning emails quickly with our drag-and-drop editor.
                                    Customize every detail, from layouts and colors to fonts,
                                    to perfectly match your brand’s identity.

                                    Whether it’s a quick update or an in-depth announcement,
                                    our email solution helps you craft polished emails that
                                    connect with your audience and maximize engagement seamlessly.

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
                                                    • Newsletters: Keep your audience informed with regular updates.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Exclusive Deals: Drive sales with personalized deals.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Product Announcements: Share new launches instantly.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Order Updates: Send real-time order and shipping details.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Abandoned Cart Reminders to recover lost sales.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">

                                                Key Features:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Drag-and-drop editor with no coding required.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Add buttons, images, and videos for rich engagement.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Fully customizable fonts, colors, and logos.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Responsive designs optimized for all devices.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Preview and test compatibility before sending.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* VIDEO */}
                            <div className="mt-1 w-full">

                                <video
                                    src={mail8}
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

                                    Create conversion-driving AMP emails in minutes.

                                </h3>

                                <p className="text-[15px] leading-[24px] text-[#282d33] mt-3">

                                    Elevate your email strategy with AMP technology.
                                    Create interactive and engaging experiences directly
                                    inside the email inbox.

                                    Add dynamic elements like product carousels,
                                    forms, and real-time content to improve engagement
                                    and drive higher conversion rates seamlessly.

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
                                                    • Product Carousels for interactive shopping experiences.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Forms & Surveys directly inside the email.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Real-Time Content like inventory and live pricing.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Event Registrations without leaving the inbox.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Polls & Voting for higher user engagement.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">

                                                Key Features:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Dynamic elements like carousels, forms, and live updates.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Allow users to take actions without leaving inboxes.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Rich interactive content for better visibility.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Boost conversions with seamless email experiences.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Fully optimized for desktop and mobile devices.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* VIDEO */}
                            <div className="mt-1 w-full">

                                <video
                                    src={mail9}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
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

                                Send Email Campaigns Faster with Pre-Designed Templates

                            </h2>

                            <p className="text-[16px] leading-[25px] text-[#2c3138] mt-5">

                                Save time and boost engagement with professionally designed
                                email templates. Choose from a variety of layouts for newsletters
                                and transactional emails using the All SMS Solution Email Template Library.

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

                                                • E-Commerce Sales: Ready-to-use templates for flash sales and launches.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Event Invitations with professionally designed email layouts.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Customer Support follow-up and branded response templates.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Welcome Emails to engage new users instantly.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Product Announcements customized and sent within minutes.

                                            </p>

                                        </div>

                                        {/* KEY FEATURES */}
                                        <h3 className="text-[22px] font-semibold text-[#111827] mt-8">

                                            Key Features:

                                        </h3>

                                        <div className="mt-4 space-y-3">

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Professionally designed mobile-responsive templates.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Drag-and-drop customization with no coding needed.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Pre-built layouts for newsletters and transactional emails.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Save time using pre-tested high-converting designs.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Easily test, optimize, and schedule campaigns instantly.

                                            </p>

                                        </div>

                                    </div>

                                )
                            }

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="w-full flex items-center justify-center p-6">

                            <img
                                src={mail10}
                                alt="Email Templates"
                                className="w-full max-w-[700px] h-auto object-contain"
                            />

                        </div>

                    </div>

                </div>

            </section>

            <section className="w-full py-3 bg-gray-50">

                <div className="w-full px-1">

                    {/* GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* CARD 1 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">

                                    Flexible Email API For Seamless Integration

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">

                                    Ensure seamless and reliable email delivery with our
                                    Transactional Email API.

                                    Send order confirmations, invoices, and notifications
                                    with fast delivery and high deliverability.

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
                                                    • OTP Verification with secure email authentication.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Abandoned Cart Reminders to recover lost sales.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Instant Order Confirmations and receipts.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Shipping & Delivery Alerts with tracking updates.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Refund & Return Updates for customers.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">

                                                Key Features:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • High-speed email delivery for instant communication.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • API integration for seamless automation.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Scalable infrastructure for high-volume emails.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Advanced deliverability with DMARC, SPF & DKIM.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Real-time tracking and performance analytics.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* IMAGE */}
                            <div className="w-full flex items-center justify-center p-6">

                                <img
                                    src={mail11}
                                    alt="Flexible Email API"
                                    className="w-full max-w-[700px] h-auto object-contain"
                                />

                            </div>

                        </div>

                        {/* CARD 2 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">

                                    Seamless Integration with Gmail & Outlook

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">

                                    Integrate effortlessly with Gmail and Outlook using
                                    All SMS Solution’s Email Service.

                                    Send transactional emails, OTPs, notifications,
                                    and bulk campaigns from a single platform with
                                    instant deliverability and detailed tracking.

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
                                                    • Automate transactional emails and OTP delivery.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Send targeted bulk email campaigns instantly.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Lead nurturing with personalized follow-ups.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Track open rates, clicks, and engagement analytics.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Manage campaigns directly from Gmail or Outlook.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">

                                                Key Features:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Send campaigns from one centralized dashboard.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Easily engage customers using your business inbox.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Manage all campaigns from a single interface.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Monitor email performance in real time.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Simplify communication without extra software.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* IMAGE */}
                            <div className="w-full flex items-center justify-center p-6">

                                <img
                                    src={mail12}
                                    alt="Gmail Outlook Integration"
                                    className="w-full max-w-[700px] h-auto object-contain"
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

                                Target the Right Audience & Run Email Campaigns Effortlessly

                            </h2>

                            <p className="text-[16px] leading-[25px] text-[#2c3138] mt-5">

                                Reach the right audience with the right email using advanced
                                segmentation and email automation. Deliver personalized emails
                                that drive engagement and conversions seamlessly.

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

                                                • Personalized Email: Send targeted campaigns based on customer interests and behavior.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Re-Engagement Campaigns: Identify inactive users and send tailored emails to bring them back.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Event-Based Triggers: Automate emails for signups, purchases, and abandoned carts.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Geo-Targeted Campaigns: Reach audiences based on their location and preferences.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • A/B Testing: Test subject lines, content, and designs to optimize email performance.

                                            </p>

                                        </div>

                                        {/* KEY FEATURES */}
                                        <h3 className="text-[22px] font-semibold text-[#111827] mt-8">

                                            Key Features:

                                        </h3>

                                        <div className="mt-4 space-y-3">

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Create precise segments based on user behavior, demographics, and engagement.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Set up trigger-based emails for signups, purchases, and abandoned carts.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Optimize performance with real-time data, smart scheduling, and campaign insights.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Ensure campaign emails comply with DMARC authentication to improve inbox placement and prevent phishing risks.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Connect with CRMs, APIs, and multi-channel platforms for a unified approach.

                                            </p>

                                        </div>

                                    </div>

                                )
                            }

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="w-full flex items-center justify-center p-6">

                            <img
                                src={mail13}
                                alt="Email Campaigns"
                                className="w-full max-w-[700px] h-auto object-contain"
                            />

                        </div>

                    </div>

                </div>

            </section>

            <section className="w-full py-3 bg-gray-50">

                <div className="w-full px-1">

                    {/* GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* CARD 1 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">

                                    Detailed Analytics: Track Delivered, Open, and Click Reports

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">

                                    Gain actionable insights with real-time analytics.
                                    Monitor delivery rates, open rates, click-through rates,
                                    and conversions to optimize your email campaigns effectively.

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
                                                    • Campaign Performance Tracking: Analyze email effectiveness with comprehensive reports.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • A/B Testing Insights: Compare subject lines and email variations for better engagement.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • User Engagement Analysis: Track interactions to optimize future campaigns.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Deliverability Monitoring: Measure email success rates and improve inbox placement.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Geo-Based Analytics: View campaign performance across different countries for better targeting.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">

                                                Key Features:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Access an advanced analytics dashboard for deep, data-driven decision-making.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Gain deliverability insights with DMARC, SPF, and DKIM authentication to improve inbox placement and prevent spoofing.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Track real-time performance metrics like delivered, opens, clicks, and conversions instantly.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Analyze click-through rates to measure email success.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Export campaign analytics with a custom date range for precise audience targeting.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* IMAGE */}
                            <div className="w-full flex items-center justify-center p-6">

                                <img
                                    src={mail14}
                                    alt="Email Analytics"
                                    className="w-full max-w-[500px] h-auto object-contain"
                                />

                            </div>

                        </div>

                        {/* CARD 2 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">

                                    Prevent Spam with Suppression List

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">

                                    Maintain a healthy sender reputation by automatically
                                    filtering out unsubscribed, bounced, or invalid email addresses.
                                    A suppression list prevents emails from being sent to these
                                    addresses, reducing spam risks and enhancing deliverability
                                    and engagement.

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
                                                    • Avoid Spam Complaints: Prevent sending emails to unsubscribed users, reducing spam reports.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Improve Deliverability: Block invalid or bounced addresses to ensure emails reach active recipients.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Enhance Sender Reputation: Enhance sender reputation by aligning with DMARC policies to prevent unauthorized email usage.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Save Costs on Campaigns: Avoid wasting resources on undeliverable emails.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Enhance Engagement Rates: Focus on reaching real, interested users for better open and click-through rates.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">

                                                Key Features:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Automatically blocks emails to unsubscribed, bounced, or invalid addresses.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Continuously updates and manages suppressed contacts.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Easily add and manage suppression lists for better control.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Prevents sending emails to users who opted out, ensuring compliance.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Reduces bounce rates and protects sender reputation.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* IMAGE */}
                            <div className="w-full flex items-center justify-center p-6">

                                <img
                                    src={mail15}
                                    alt="Suppression List"
                                    className="w-full max-w-[500px] h-auto object-contain"
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

                                Send Emails at Optimal Times with Country-Based Scheduling

                            </h2>

                            <p className="text-[16px] leading-[25px] text-[#2c3138] mt-5">

                                Maximize open rates and engagement by sending emails based on the recipient’s local time zone.
                                Automated time-zone-based scheduling ensures emails reach recipients when they are most likely to engage.

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

                                                • Boost Open Rates: Schedule emails to land when recipients are most likely to open them.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Enhance Customer Experience: Deliver emails when recipients are ready to engage.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Drive Meaningful Interactions: Improve conversion chances by timing emails strategically.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Global Campaigns: Optimize send times for recipients across different time zones.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Time-Sensitive Deals: Send at peak times for better action rates.

                                            </p>

                                        </div>

                                        {/* KEY FEATURES */}
                                        <h3 className="text-[22px] font-semibold text-[#111827] mt-8">

                                            Key Features:

                                        </h3>

                                        <div className="mt-4 space-y-3">

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Automatically schedules emails based on each recipient’s local time.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Ensures emails reach users when they are most likely to engage.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Schedule and send emails seamlessly across multiple time zones.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Set up campaigns once, and emails are sent at the right local time.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Boost engagement by delivering emails at the optimal moment.

                                            </p>

                                        </div>

                                    </div>

                                )
                            }

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="w-full flex items-center justify-center p-6">

                            <img
                                src={mail16}
                                alt="Country Based Scheduling"
                                className="w-full max-w-[700px] h-auto object-contain"
                            />

                        </div>

                    </div>

                </div>

            </section>

            <section className="w-full py-3 bg-gray-50">

                <div className="w-full px-1">

                    {/* GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* CARD 1 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">

                                    Boost Performance with A/B Testing for Emails

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">

                                    Optimize your email campaigns by running A/B tests on different email elements.
                                    Test subject lines, content variations, and designs to see what works best
                                    for your audience and improve your email performance.

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
                                                    • Subject Line Optimization: Test different subject lines to determine which one gets higher open rates.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Email Content Variations: Experiment with different text, images, or CTAs to improve engagement.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Personalization vs. Generic Messaging: Compare personalized emails against standard ones to measure impact.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Email Design & Layout: Compare single-column vs. multi-column layouts or dark mode vs. light mode designs.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Performance Testing: Analyze different options to see what drives higher sales.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">

                                                Key Features:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Run A/B tests on different audience segments to understand how variations perform.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Compare different email variations to identify the most effective version.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Leverage past A/B test results to refine future campaigns.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Control how long the test runs and what percentage of recipients receive each variation.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Monitor key metrics such as open rates, CTR, and conversions to analyze test results instantly.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* IMAGE */}
                            <div className="w-full flex items-center justify-center p-6">

                                <img
                                    src={mail17}
                                    alt="AB Testing"
                                    className="w-full max-w-[500px] h-auto object-contain"
                                />

                            </div>

                        </div>

                        {/* CARD 2 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">

                                    Webhooks for Delivery Reports, Incoming Emails, & Domain Status

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">

                                    Stay updated with instant webhook notifications for email delivery,
                                    incoming messages, and domain authentication status.
                                    Automate workflows and track real-time email activity effortlessly.

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
                                                    • Real-Time Delivery Alerts: Get instant notifications for delivered, bounced, or failed emails.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Authentication Monitoring: Stay updated on SPF, DKIM, and DMARC status to maintain email security.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • User Engagement Tracking: Monitor email opens, clicks, and replies for better audience insights.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Automated Lead Capture: Capture form submissions and email inquiries directly into your CRM.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Support Ticket Automation: Convert incoming emails into support tickets and assign them to agents.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">

                                                Key Features:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Get real-time alerts for bounces and spam complaints to protect email deliverability.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Instantly detect unsubscribes to update lists and avoid sending unwanted emails.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Ensure domain security with continuous monitoring of SPF, DKIM, and DMARC records.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Easily connect with CRMs, customer support platforms, and email automation tools.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Receive incoming emails on a specific URL and trigger actions accordingly.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* IMAGE */}
                            <div className="w-full flex items-center justify-center p-6">

                                <img
                                    src={mail18}
                                    alt="Webhook Reports"
                                    className="w-full max-w-[500px] h-auto object-contain"
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

                                Effortlessly Manage Incoming Emails with a Unified Inbox.

                            </h2>

                            <p className="text-[16px] leading-[25px] text-[#2c3138] mt-5">

                                Effortlessly manage incoming emails, collaborate with your team,
                                and respond faster, all from a single, organized inbox.

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

                                                • Centralized Email Management: Handle all customer emails from one inbox.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Team Collaboration: Assign and track email responses within the team.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Faster Response Times: Reduce delays with real-time email tracking and smart sorting.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Automated Email Assignment: Route emails to the right team members instantly.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Categorized Conversations: Organize emails by priority, status, or department for better efficiency.

                                            </p>

                                        </div>

                                        {/* KEY FEATURES */}
                                        <h3 className="text-[22px] font-semibold text-[#111827] mt-8">

                                            Key Features:

                                        </h3>

                                        <div className="mt-4 space-y-3">

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Unified inbox to manage emails from multiple accounts in one place.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Effortlessly Assign emails for seamless team collaboration.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Dedicated Android/IOS App to Efficiently Manage and Respond to Incoming Queries.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Real-time notifications to never miss an important message.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Response analytics to track team performance and email resolution times.

                                            </p>

                                        </div>

                                    </div>

                                )
                            }

                        </div>

                        {/* RIGHT VIDEO */}
                        <div className="w-full flex items-center justify-center p-6">

                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full max-w-[700px] h-auto object-contain rounded-[10px]"
                            >
                                <source src={mail19} type="video/mp4" />
                            </video>

                        </div>

                    </div>

                </div>

            </section>


            <section className="w-full py-10 bg-white">

                <div className="w-full px-4">
                    <div className="mb-5">

                        <h2 className="text-[28px] lg:text-[35px] font-bold text-[#111827] leading-tight">

                            Best-in-class email delivery and industry-leading results
                        </h2>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* BOX 1 */}
                        <div className="border border-gray-300 rounded-[10px] bg-gray-50 p-8 text-center">

                            <h2 className="text-[40px] font-bold text-[#4166b6]">

                                98.5%

                            </h2>

                            <p className="mt-4 text-[17px] leading-[28px] text-[#2c3138] font-medium">

                                Email delivery rate

                            </p>

                        </div>

                        {/* BOX 2 */}
                        <div className="border border-gray-300 rounded-[10px] bg-gray-50 p-8 text-center">

                            <h2 className="text-[40px] font-bold text-[#4166b6]">

                                4M+

                            </h2>

                            <p className="mt-4 text-[17px] leading-[28px] text-[#2c3138] font-medium">

                                Emails delivered successfully every month.

                            </p>

                        </div>

                        {/* BOX 3 */}
                        <div className="border border-gray-300 rounded-[10px] bg-gray-50 p-8 text-center">

                            <h2 className="text-[40px] font-bold text-[#4166b6]">

                                100%

                            </h2>

                            <p className="mt-4 text-[17px] leading-[28px] text-[#2c3138] font-medium">

                                Emails attempted within the first 5 minutes for instant engagement.

                            </p>

                        </div>

                        {/* BOX 4 */}
                        <div className="border border-gray-300 rounded-[10px] bg-gray-50 p-8 text-center">

                            <h2 className="text-[40px] font-bold text-[#4166b6]">

                                24/7

                            </h2>

                            <p className="mt-4 text-[17px] leading-[28px] text-[#2c3138] font-medium">

                                Dedicated support, always ready to assist.

                            </p>

                        </div>

                    </div>

                </div>

            </section>
            <CTASection />



        </>
    )
}
