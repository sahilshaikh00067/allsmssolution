import React, { useState } from "react";
import whatsapp from "../assets/Images/whatsapp.svg";
import whatsapp1 from "../assets/Images/whatsapp1.mp4";
import whatsapp2 from "../assets/Images/whatsapp2.mp4";
import whatsapp3 from "../assets/Images/whatsapp3.mp4";
import whatsapp4 from "../assets/Images/whatsapp4.mp4";
import whatsapp5 from "../assets/Images/whatsapp5.mp4";
import whatsapp6 from "../assets/Images/whatsapp6.svg";
import whatsapp7 from "../assets/Images/whatsapp7.svg";
import whatsapp8 from "../assets/Images/whatsapp8.svg";
import whatsapp9 from "../assets/Images/whatsapp9.svg";
import whatsapp10 from "../assets/Images/whatsapp10.svg";
import whatsapp11 from "../assets/Images/whatsapp11.svg";
import whatsapp12 from "../assets/Images/whatsapp12.svg";
import whatsapp13 from "../assets/Images/whatsapp13.svg";
import whatsapp14 from "../assets/Images/whatsapp14.svg";
import whatsapp15 from "../assets/Images/whatsapp15.svg";
import whatsapp16 from "../assets/Images/whatsapp16.svg";
import whatsapp17 from "../assets/Images/whatsapp17.svg";
import whatsapp18 from "../assets/Images/campaign5.jpeg";
import whatsapp19 from "../assets/Images/whatsapp19.svg";
import whatsapp20 from "../assets/Images/whatsapp20.svg";
import FAQ from "./FAQ";
import CTASection from "./CTASection";




export default function Whatsapp() {

    const [showMoreLeft, setShowMoreLeft] = useState(false);
    const [showMoreRight, setShowMoreRight] = useState(false);
    const [showMore, setShowMore] = useState(false);


    return (
        <>

            <section className="w-full min-h-screen flex items-center overflow-hidden">

                <div className="w-full px-2">

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

                        {/* LEFT SIDE */}
                        <div>

                            {/* TOP ICON */}
                            <div className="flex items-center gap-4 mb-8">

                                <img
                                    src={whatsapp}
                                    alt="Hello"
                                    className="w-11 h-11 object-contain"
                                />

                                <h3 className="text-[26px] font-semibold text-[#111827]">

                                    WhatsApp Api

                                </h3>

                            </div>

                            {/* SMALL TITLE */}
                            <p className="uppercase tracking-[3px] text-[#2be68f] text-[18px] mb-6">

                                WhatsApp Business Solutions

                            </p>

                            {/* MAIN HEADING */}
                            <h1 className="text-[35px] lg:text-[40px] leading-[1.05] font-bold text-[#1f2937] max-w-[850px]">

                                Seamless Global messaging and communications.

                            </h1>

                            {/* DESCRIPTION */}
                            <p className="text-[20px] leading-[30px] text-[#4b5563] mt-8 max-w-[850px]">

                                Use Developer Friendly API to ensure smooth, real-time communication with your customers globally, enhancing engagement and satisfaction.


                            </p>

                            {/* BUTTONS */}
                            <div className="flex flex-wrap items-center gap-3 mt-10">

                                {/* GET STARTED */}
                                <button className="bg-black hover:bg-[#253254] text-white px-2 py-1 rounded-[6px] text-[20px] font-medium transition-all duration-300 border">

                                    Get Started

                                </button>

                                {/* MEETING */}
                                <button className="border border-black hover:bg-black text-black hover:text-white px-2 py-1 rounded-[6px] text-[20px] font-medium transition-all duration-300">

                                    Schedule a Meeting

                                </button>

                            </div>

                        </div>

                        {/* RIGHT SIDE VIDEO */}
                        <div className="relative flex justify-center">

                            {/* VIDEO BOX */}
                            <div className="relative w-full max-w-[720px] overflow-hidden">

                                <video
                                    src={whatsapp1}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover rounded-[40px]"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="w-full bg-[#f8fff4] py-16 overflow-hidden">
                <div className=" px-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-black mb-3">
                            Why Choose All SMS Solution for WhatsApp Business?
                        </h2>

                        <p className="text-[16px] text-gray-800 leading-5 mb-11">
                            All SMS Solution makes WhatsApp your most powerful communication channel — for
                            marketing, support, sales, and everything in between. Reach customers
                            where they actually respond.
                        </p>

                        <div className="mt-5">
                            <h3 className="text-3xl font-bold text-black leading-tight">
                                Promotional Bulk WhatsApp Messaging via CSV
                            </h3>

                            <h4 className="text-1xl font-semibold text-black mb-3">
                                Turn Offers into Orders — Instantly
                            </h4>

                            <p className="text-[16px] text-gray-800 leading-6 mb-5">
                                Send personalized promotional messages via CSV straight to your
                                customers’ WhatsApp inboxes — where they actually read and click.
                            </p>

                            <ul className="space-y-1 text-[15px] text-black mb-5">
                                <li>• Flash Sales & Limited-Time Discounts</li>
                                <li>• New Product Launches</li>
                                <li>• Festive & Seasonal Campaigns</li>
                                <li>• Win-back & Re-engagement Messages</li>
                                <li>• Upsell & Cross-sell Offers</li>
                            </ul>

                            <p className="text-[17px] text-gray-800 leading-5 mb-4">
                                Reach thousands. Get instant clicks. Drive real sales. No spam
                                folder. Just results.
                            </p>

                            <a
                                href="/contact"
                                className="inline-flex items-center gap-1 text-[#2563eb] text-1xl font-medium hover:gap-4 transition-all duration-300"
                            >
                                Talk to Us
                                <span>➜</span>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT VIDEO */}
                    <div className="relative">
                        <div className="bg-white rounded-[20px] shadow-xl overflow-hidden border border-gray-200 p-4">
                            <video
                                src={whatsapp2}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full rounded-[14px] object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>

            <section className="w-full bg-[#f8fff4] overflow-hidden">
                <div className="px-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT VIDEO */}
                    <div className="relative order-2 lg:order-1">
                        <div className="bg-white rounded-[9px] shadow-xl overflow-hidden border border-gray-200 p-4">
                            <video
                                src={whatsapp3}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full rounded-[9px] object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="order-1 lg:order-2">
                        <h3 className="text-3xl lg:text-3xl font-bold text-black leading-tight mb-3">
                            Transactional WhatsApp Messaging
                        </h3>

                        <h4 className="text-1xl font-semibold text-black mb-4">
                            Messages That Matter — Delivered Fast
                        </h4>

                        <p className="text-[14px] text-gray-800 leading-7 mb-4">
                            Keep customers informed with real-time, automated updates on
                            WhatsApp.
                        </p>

                        <ul className="space-y-2 text-[14px] text-black mb-5">
                            <li>• Order & Payment Notifications</li>
                            <li>• OTPs, Login Alerts & Password Resets</li>
                            <li>• Appointment, Renewal & Payment Reminders</li>
                            <li>• Invoices, Tickets & Documents</li>
                            <li>• Delivery Status & Service Updates</li>
                        </ul>

                        <p className="text-[16px] text-gray-800 leading-7 mb-4">
                            Reliable. Timely. Expected. Exactly what transactional messaging
                            should be.
                        </p>

                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 text-[#2563eb] text-[16px] font-medium hover:gap-4 transition-all duration-300"
                        >
                            Book A Demo
                            <span>➜</span>
                        </a>
                    </div>

                </div>
            </section>

            <section className="w-full bg-[#f8fff4] overflow-hidden">
                <div className="px-2 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h3 className="text-3xl lg:text-3xl font-bold text-black leading-tight mb-2">
                            Customer Support on WhatsApp
                        </h3>

                        <h4 className="text-1xl font-semibold text-black mb-5">
                            Support That Feels Like a Conversation
                        </h4>

                        <p className="text-[15px] text-gray-800 leading-7 mb-6">
                            No more waiting. No more forms. Just real-time reply to your
                            customers via WhatsApp — from bots or human agents.
                        </p>

                        <ul className="space-y-2 text-[16px] text-black mb-4">
                            <li>• Smart Chatbots for Instant Replies</li>
                            <li>• Seamless Handoff to Human Agents</li>
                            <li>• Inbound Calling on WhatsApp</li>
                            <li>• One Unified Inbox for All Chats - Instagram, Emails, Webchat</li>
                            <li>• Real-Time Customer Updates</li>
                        </ul>

                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 text-[#2563eb] text-[16px] font-medium hover:gap-4 transition-all duration-300"
                        >
                            Try WhatsApp Support in Action
                            <span>➜</span>
                        </a>
                    </div>

                    {/* RIGHT VIDEO */}
                    <div className="relative">
                        <div className="bg-white rounded-[8px] shadow-xl overflow-hidden border border-gray-200 p-4">
                            <video
                                src={whatsapp4}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full rounded-[4px] object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>


            <section className="w-full bg-[#f8fff4] overflow-hidden">
                <div className="px-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT VIDEO */}
                    <div className="relative order-2 lg:order-1">
                        <div className="bg-white rounded-[6px] shadow-xl overflow-hidden border border-gray-200 p-4">
                            <video
                                src={whatsapp5}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full rounded-[6px] object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="order-1 lg:order-2">
                        <h3 className="text-3xl lg:text-3xl font-bold text-black leading-tight mb-2">
                            Drive Sales Directly on WhatsApp
                        </h3>

                        <h4 className="text-1xl font-semibold text-black mb-3">
                            Sell Smarter — Where Customers Already Are.
                        </h4>

                        <p className="text-[15px] text-gray-800 leading-5 mb-3">
                            Showcase products, run ads, take orders — all inside a
                            WhatsApp chat.
                        </p>

                        <div className="space-y-3 mb-4">

                            <div>
                                <h5 className="text-[17px] font-semibold text-black mb-2">
                                    Click-to-WhatsApp Ads
                                </h5>

                                <p className="text-[15px] text-gray-700 leading-6">
                                    Use Instagram & Facebook to drive leads straight to chat.
                                </p>
                            </div>

                            <div>
                                <h5 className="text-[17px] font-semibold text-black mb-2">
                                    Make shopping easy on WhatsApp
                                </h5>

                                <p className="text-[15px] text-gray-700 leading-6">
                                    Let customers browse, chat, and order with catalogs and
                                    payments.
                                </p>
                            </div>

                            <div>
                                <h5 className="text-[17px] font-semibold text-black mb-2">
                                    Customize Sales Journeys via WhatsApp
                                </h5>

                                <p className="text-[15px] text-gray-700 leading-4">
                                    Send bulk offers, upsell intelligently, and close deals
                                    faster — all from one panel.
                                </p>
                            </div>

                        </div>

                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 text-[#2563eb] text-[16   px] font-medium hover:gap-4 transition-all duration-300"
                        >
                            Book a Meeting
                            <span>➜</span>
                        </a>
                    </div>

                </div>
            </section>

            <section className="w-full py-13 bg-gray-50">

                <div className="w-full px-1">

                    {/* GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* CARD 1 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">
                                    WhatsApp ChatBot
                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">
                                    Automated interactions on the messaging platform,
                                    providing instant responses, handling customer inquiries,
                                    and performing tasks such as customer support, order
                                    tracking, place order and providing information.

                                    It enhances customer service efficiency and availability.
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
                                                Features:
                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Instant automated customer replies.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • 24/7 customer support availability.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Order tracking and status updates.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Smart lead generation and qualification.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Personalized customer interactions.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">
                                                Benefits:
                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Reduce response time instantly.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Improve customer satisfaction rates.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Handle multiple conversations together.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Increase operational efficiency.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Scale customer support effortlessly.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={whatsapp6}
                                    alt="WhatsApp ChatBot"
                                    className="w-full h-[420px] object-contain"
                                />

                            </div>

                        </div>

                        {/* CARD 2 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">
                                    Whatsapp Integrations
                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">
                                    Our WhatsApp Business API integrates seamlessly with
                                    numerous platforms, allowing for easy plug-and-play
                                    functionality without the need for additional development.

                                    Some of the supported whatsapp api integration include
                                    Zoho, Freshworks, WebEngage, MoEngage, CleverTap,
                                    Shopify, Wix, Google Sheet, Tally, GIDDH and more.
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
                                                Supported Platforms:
                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • CRM integrations like Zoho & Freshworks.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Marketing automation with WebEngage & MoEngage.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • E-commerce support for Shopify & Wix.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Accounting integrations with Tally & GIDDH.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Google Sheets integration for easy workflow automation.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">
                                                Advantages:
                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • No-code and plug-and-play setup.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Faster business workflow automation.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Centralized customer communication.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Improve customer engagement and retention.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Easy scalability with multiple platforms.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={whatsapp7}
                                    alt="Whatsapp Integrations"
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

                                Click-to-WhatsApp Ads: Drive Engagement with Zero Costs

                            </h2>

                            <p className="text-[16px] leading-[25px] text-[#2c3138] mt-5">

                                Maximize your marketing efforts with Click-to-WhatsApp Ads,
                                a powerful solution to connect with customers instantly.

                                This feature allows businesses to drive traffic from online
                                advertisements directly to WhatsApp conversations, creating
                                a seamless transition from discovery to engagement.

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

                                                • Lead Generation: Drive potential customers from ads to WhatsApp for instant engagement.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Customer Support: Allow users to connect with support teams directly from ads.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Product Inquiries: Enable customers to ask questions about products or services.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Event Registrations: Use ads to promote events and collect RSVPs via WhatsApp.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Exclusive Offers: Advertise limited-time deals and redirect users to WhatsApp for redemption.

                                            </p>

                                        </div>

                                        {/* KEY FEATURES */}
                                        <h3 className="text-[22px] font-semibold text-[#111827] mt-8">

                                            Key Features:

                                        </h3>

                                        <div className="mt-4 space-y-3">

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Zero panel fees and no hidden costs.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Seamless transition from ads to WhatsApp chats.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Instant responses using AI-powered WhatsApp chatbots and bulk messaging.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Cost-effective advertising with full ROI transparency.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Enhanced WhatsApp lead generation capabilities.

                                            </p>

                                        </div>

                                    </div>

                                )
                            }

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="w-full flex items-center justify-center p-6">

                            <img
                                src={whatsapp8}
                                alt="Click To WhatsApp Ads"
                                className="w-full max-w-[600px] h-auto object-contain"
                            />

                        </div>

                    </div>

                </div>

            </section>

            <section className="w-full py-13 bg-gray-50">

                <div className="w-full px-1">

                    {/* GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* CARD 1 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">
                                    Whatsapp Catalogue
                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">
                                    WhatsApp's catalogue feature lets businesses showcase
                                    products and services within the app.

                                    It uses whatsapp business api application to serves as a
                                    digital storefront, allowing customers to browse, view
                                    details, and make inquiries without leaving WhatsApp.

                                    Businesses can organize items, include images, prices,
                                    and descriptions, and update inventory in real time,
                                    making it easier for customers to explore and shop.
                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={whatsapp9}
                                    alt="Whatsapp Catalogue"
                                    className="w-full h-[420px] object-contain"
                                />

                            </div>

                        </div>

                        {/* CARD 2 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">
                                    Broadcast / Campaign
                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">
                                    WhatsApp's broadcast lets you send the same message to
                                    multiple contacts at once, ideal for updates and
                                    announcements.

                                    Campaigns, available in the WhatsApp Business API,
                                    enable targeted marketing with automated, personalized
                                    messages.

                                    Both help businesses reach more people efficiently.
                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={whatsapp10}
                                    alt="Broadcast Campaign"
                                    className="w-full h-[420px] object-contain"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="w-full py-2 bg-gray-50">

                <div className="w-full px-1">

                    {/* SINGLE CARD */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border border-gray-300 rounded-[2px] bg-white overflow-hidden">

                        {/* LEFT CONTENT */}
                        <div className="p-15">

                            <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#111827] leading-tight">

                                Click Counts

                            </h2>

                            <p className="text-[16px] leading-[25px] text-[#2c3138] mt-5">

                                Click counts indicate how many businesses or customers use
                                a feature - high click counts show its popularity and
                                effectiveness for customer engagement.

                                You can view all click counts for a button either in the
                                analytics section or through your webhook.

                            </p>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="w-full flex items-center justify-center p-6">

                            <img
                                src={whatsapp11}
                                alt="Click Counts"
                                className="w-full max-w-[500px] h-auto object-contain"
                            />

                        </div>

                    </div>

                </div>

            </section>


            <section className="w-full py-13 bg-gray-50">

                <div className="w-full px-1">

                    {/* GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* CARD 1 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">
                                    Support Base64
                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">
                                    Send the body in JSON and leave the rest to us.

                                    No need to make a URL or upload your file as you can
                                    directly send JSON body and it will be converted
                                    automatically into Base64 format and sent via WhatsApp.
                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={whatsapp12}
                                    alt="Support Base64"
                                    className="w-full h-[420px] object-contain"
                                />

                            </div>

                        </div>

                        {/* CARD 2 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">
                                    2-way Communication
                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">
                                    Say hello to go on HELLO.

                                    Give your customer the right platform to continue the
                                    conversation. Once they reply, they are directly taken
                                    to HELLO to start a 2-way communication with your
                                    business.
                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={whatsapp13}
                                    alt="2-way Communication"
                                    className="w-full h-[420px] object-contain"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="w-full py-2 bg-gray-50">

                <div className="w-full px-1">

                    {/* SINGLE CARD */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border border-gray-300 rounded-[2px] bg-white overflow-hidden">

                        {/* LEFT CONTENT */}
                        <div className="p-15">

                            <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#111827] leading-tight">

                                Manage Template Inside Panel

                            </h2>

                            <p className="text-[16px] leading-[25px] text-[#2c3138] mt-5">

                                Create and manage your template right here.

                                No need to switch platforms to create your template.
                                You can create the templates, manage it and check
                                the status of it right here without going on Facebook.

                            </p>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="w-full flex items-center justify-center p-6">

                            <img
                                src={whatsapp15}
                                alt="Manage Template Inside Panel"
                                className="w-full max-w-[600px] h-auto object-contain"
                            />

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

                                WhatsApp Payments

                            </h2>

                            <p className="text-[16px] leading-[25px] text-[#2c3138] mt-5">

                                Transform WhatsApp into your onestop sales channel by
                                sharing interactive product catalogs.

                                Let your customers browse products, explore categories,
                                and discover their preferences within a familiar chat
                                environment.

                                Enable WhatsApp payment solutions for instant, secure
                                transactions, simplifying the buyer journey and reducing
                                dropoff rates.

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

                                                • E-commerce Sales: Showcase products directly on WhatsApp for seamless shopping with the help of WhatsApp catalog templates.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • DirecttoConsumer (D2C): Enable customers to browse and buy without leaving the app with instant WhatsApp payments.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Instant Checkout: Reduce cart abandonment with WhatsApp payment solutions.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Product Discovery: Help customers explore categories and find their preferences with WhatsApp Chatbot flows.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Upselling and CrossSelling: Recommend related products through interactive catalogs.

                                            </p>

                                        </div>

                                        {/* KEY FEATURES */}
                                        <h3 className="text-[22px] font-semibold text-[#111827] mt-8">

                                            Key Features:

                                        </h3>

                                        <div className="mt-4 space-y-3">

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Interactive product catalogs with images and descriptions.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Secure WhatsApp payment solutions for instant transactions.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Faster checkout process to boost sales.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Frictionless shopping experience for customers.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Integration with WhatsApp for ecommerce platforms.

                                            </p>

                                        </div>

                                    </div>

                                )
                            }

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="w-full flex items-center justify-center p-6">

                            <img
                                src={whatsapp14}
                                alt="WhatsApp Payments"
                                className="w-full max-w-[600px] h-auto object-contain"
                            />

                        </div>

                    </div>

                </div>

            </section>

            <section className="w-full py-13 bg-gray-50">

                <div className="w-full px-1">

                    {/* GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* CARD 1 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">
                                    Bulk Sending Through CSV: Scale Your WhatsApp Marketing Effortlessly
                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">
                                    Simplify your communication strategy with bulk WhatsApp
                                    messaging through CSV uploads.

                                    Engage thousands of users simultaneously while maintaining
                                    a personalized touch for each recipient.

                                    Our WhatsApp Business API solution ensures high delivery
                                    rates and advanced analytics to optimize your campaigns.
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
                                                    • Product Launches: Share new product details with thousands of customers instantly with WhatsApp catalog and carousel.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Exclusive Offers: Send personalized discount codes or limited time offers to drive sales through WhatsApp Interactive templates.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Critical Alerts: Notify customers about urgent updates, such as service disruptions or security alerts through WhatsApp API.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Event Invitations: Invite customers to webinars, workshops, or sales events with WhatsApp campaign.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Customer Updates: Share important updates like order confirmations, shipping details, or policy changes through WhatsApp API.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">
                                                Key Features:
                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Schedule campaigns for optimal timing.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Automate followups to improve engagement.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Use CSV uploads for seamless bulk WhatsApp messaging.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Track delivery rates and optimize campaigns.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Gain insights through WhatsApp analytics and reporting.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={whatsapp16}
                                    alt="Bulk Sending Through CSV"
                                    className="w-full h-[420px] object-contain"
                                />

                            </div>

                        </div>

                        {/* CARD 2 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">
                                    OptOut Feature: Ensure Compliance in WhatsApp Marketing Automation
                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">
                                    Give your customers the power to control their communication
                                    preferences with the OptOut feature.

                                    This functionality ensures that recipients can unsubscribe
                                    from WhatsApp messages easily, maintaining a positive and
                                    respectful relationship with your brand.

                                    Transparency builds trust, creating a loyal and engaged audience.
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
                                                    • Compliance with Regulations: Ensure adherence to global communication laws.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • List Hygiene: Maintain a clean and engaged customer list by removing uninterested users.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Customer Trust: Build transparency and trust by allowing users to control their preferences.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Reduced Spam: Minimize spam complaints and improve sender reputation of your WhatsApp number.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Personalized Journeys: Focus on engaged customers for more effective WhatsApp communication.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">
                                                Key Features:
                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Easy optout option for customers.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Automated list updates to remove unsubscribed users.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Compliance with legal requirements.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Improved WhatsApp customer engagement and loyalty.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Enhanced WhatsApp marketing strategies for better targeting.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={whatsapp17}
                                    alt="OptOut Feature"
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

                                Scalable WhatsApp Business API

                            </h2>

                            <p className="text-[16px] leading-[25px] text-[#2c3138] mt-5">

                                Achieve seamless communication scalability with our robust
                                WhatsApp Business API solution.

                                Integrate messaging capabilities directly into your existing
                                systems to create a unified customer experience.

                                Whether it's sending notifications, handling support queries,
                                or managing automated workflows, the API adapts to your
                                business needs.

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

                                                • Order Updates & Tracking: Send realtime order confirmations, shipping updates, and delivery notifications directly to customers with WhatsApp API.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • 24/7 Customer Support: Automate responses to FAQs, troubleshoot issues, and provide instant support using AIpowered WhatsApp chatbots.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Appointment Scheduling: Allow customers to book, reschedule, or cancel appointments seamlessly through WhatsApp.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Payment Notifications & Reminders: Notify customers about pending payments, subscription renewals, or transaction confirmations.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Feedback Collection: Automate postpurchase or postservice feedback requests to improve customer satisfaction with AI Assistance.

                                            </p>

                                        </div>

                                        {/* KEY FEATURES */}
                                        <h3 className="text-[22px] font-semibold text-[#111827] mt-8">

                                            Key Features:

                                        </h3>

                                        <div className="mt-4 space-y-3">

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Scalable and secure WhatsApp Business API.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Customizable solutions for unique business processes.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Highspeed performance during hightraffic scenarios.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Unified customer experience across platforms.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Integration with WhatsApp automation tools for efficiency.

                                            </p>

                                        </div>

                                    </div>

                                )
                            }

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="w-full flex items-center justify-center p-6">

                            <img
                                src={whatsapp18}
                                alt="Scalable WhatsApp Business API"
                                className="w-full max-w-[600px] h-auto object-contain"
                            />

                        </div>

                    </div>

                </div>

            </section>

            <section className="w-full py-13 bg-gray-50">

                <div className="w-full px-1">

                    {/* GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* CARD 1 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">
                                    Automated Reminders: Never Miss an Opportunity
                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">
                                    Never miss an opportunity to engage your customers with
                                    automated WhatsApp reminders for birthdays,
                                    anniversaries, class schedules, and more.

                                    Strengthen customer relationships by sending personalized
                                    messages that make them feel valued and appreciated.
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
                                                    • Birthday Wishes: Send personalized birthday whatsapp messages to customers.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Anniversary Reminders: Celebrate customer milestones with special offers WhatsApp automations.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Class Schedules: Notify students or participants about upcoming sessions through WhatsApp business API.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Appointment Reminders: Reduce noshows for appointments or consultations with WhatsApp campaigns.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Subscription Renewals: Remind customers about upcoming renewals with WhatsApp AI Chatbots.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">
                                                Key Features:
                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Automated recurring reminders.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Personalized messages for better engagement.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Timely updates to improve attendance and conversions.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Enhanced customer relationships through thoughtful communication.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Integration with WhatsApp for appointment scheduling.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={whatsapp19}
                                    alt="Automated Reminders"
                                    className="w-full h-[420px] object-contain"
                                />

                            </div>

                        </div>

                        {/* CARD 2 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">
                                    Audience Segmentation: Deliver Targeted Campaigns
                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">
                                    Unlock the power of WhatsApp audience segmentation to
                                    send tailored messages to specific customer groups.

                                    Whether targeting premium clients, firsttime buyers,
                                    or repeat customers, segmentation helps deliver highly
                                    relevant campaigns that drive engagement and conversions.
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
                                                    • Premium Clients: Send exclusive offers to highvalue customers with our simplified WhatsApp marketing automation tools.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • FirstTime Buyers: Welcome new customers with special discounts through WhatsApp Chatbots.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Repeat Customers: Reward loyal customers with personalized deals with Coupons through WhatsApp Business API.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Location Based Campaigns: Target users based on their geographic location and create Personalized customer journey.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Behavioral Segmentation: Send tailored WhatsApp messages based on user engagement or purchase history with the help of WhatsApp marketing tools.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">
                                                Key Features:
                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Automated segmentation for precise targeting and WhatsApp campaigns.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Personalized customer journeys for better engagement.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Relevant offers and updates based on user data with WhatsApp marketing automations.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Improved WhatsApp campaign effectiveness and ROI.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • WhatsApp Integration for lead nurturing.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={whatsapp20}
                                    alt="Audience Segmentation"
                                    className="w-full h-[420px] object-contain"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


                <FAQ />
    <CTASection />







        </>
    )
}
