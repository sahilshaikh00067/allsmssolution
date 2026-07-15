import React, { useState } from "react";
import otpicon from "../assets/Images/otpicon.svg";
import CTASection from "./CTASection";
import ind from '../assets/Images/ind.jpg'
import ind1 from "../assets/Images/ind1.jpg";
import ind2 from "../assets/Images/ind2.jpg";
import ind3 from "../assets/Images/ind3.png";
import ind4 from "../assets/Images/ind4.jpg";
import ind5 from "../assets/Images/ind5.jpg";
import ind6 from "../assets/Images/ind6.jpg";
import ind8 from "../assets/Images/ind8.jpg";
import { Link } from "react-router-dom";



export default function Industry() {

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

                                <h3 className="text-[26px] font-semibold text-[#111827]">

                                    Industry

                                </h3>

                            </div>

                            {/* SMALL TITLE */}
                            <p className="uppercase tracking-[3px] text-[#4885bd] text-[18px] mb-5">

                                Built For Every Industry

                            </p>

                            {/* MAIN HEADING */}
                            <h1 className="text-[35px] lg:text-[45px] leading-[1.08] font-bold text-[#1f2937] max-w-[850px]">

                                Communication Solutions Tailored For Every Industry

                            </h1>

                            {/* DESCRIPTION */}
                            <p className="text-[20px] leading-[34px] text-[#4b5563] mt-3 max-w-[850px]">

                                Empower businesses across every industry with reliable, secure, and scalable
                                communication solutions. From healthcare and financial services to retail,
                                hospitality, real estate, travel, fitness, and automotive, our omnichannel
                                platform helps organizations connect with customers through WhatsApp, SMS,
                                Email, Voice, and RCS—driving engagement, automation, and business growth.
                            </p>

                            {/* BUTTON */}
                            <div className="flex flex-wrap items-center gap-3 mt-15">
                                <Link to='/contact'>

                                    <button className="bg-[#201e1e] hover:bg-[#1b2738] text-[#fafafa] px-3 py-1 rounded-[6px] text-[18px] font-medium transition-all duration-300 border border-[#1a212b]">

                                        Get Started For Free

                                    </button>
                                </Link>

                            </div>

                        </div>

                        {/* RIGHT SIDE IMAGE */}
                        <div className="relative flex justify-end">

                            <div className="w-full max-w-[700px] h-[510px] rounded-[10px] overflow-hidden">

                                <img
                                    src={ind}
                                    alt="segmento Communication Solutions"
                                    className="w-full h-full object-cover rounded-[10px]"
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

                        <h2 className="text-[28px] lg:text-[33px] font-bold text-[#111827]">
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
                                    Retail &amp; E-commerce
                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">
                                    Empower your retail business with intelligent customer
                                    engagement across every stage of the shopping journey.
                                    From secure OTP verification and promotional campaigns
                                    to order confirmations, shipping notifications, payment
                                    reminders, and personalized offers, our omnichannel
                                    communication platform helps increase customer
                                    satisfaction, boost conversions, and build long-term
                                    loyalty through WhatsApp, SMS, Email, Voice, and RCS.
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
                                                Who Uses This / Use Cases:
                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • OTP verification for customer logins and secure checkout.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Instant order confirmation and payment notifications.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Shipping, delivery, and return status updates.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Personalized offers, discounts, and festive campaigns.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Abandoned cart recovery through WhatsApp and SMS.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Customer feedback and loyalty program notifications.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Real-time engagement across WhatsApp, SMS, Email & Voice.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">
                                                Key Features:
                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Automated order & delivery notifications.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Omnichannel promotional campaigns.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Secure OTP & authentication messaging.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Customer segmentation & personalization.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Advanced analytics and campaign tracking.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* IMAGE */}
                            <div className="w-full flex items-center justify-center p-6">

                                <img
                                    src={ind1}
                                    alt="Retail & E-commerce"
                                    className="w-full max-w-[650px] h-[600px] object-cover rounded-[8px]"
                                />

                            </div>

                        </div>

                        {/* CARD 2 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">
                                    Restaurants &amp; Hospitality
                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">
                                    Enhance every guest experience with fast, personalized,
                                    and reliable communication. From reservation confirmations
                                    and table booking reminders to promotional offers,
                                    loyalty rewards, order updates, and customer feedback,
                                    our communication platform enables restaurants, hotels,
                                    cafés, and hospitality brands to engage customers across
                                    WhatsApp, SMS, Email, Voice, and RCS from a single platform.
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
                                                Who Uses This / Use Cases:
                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Restaurant table booking confirmations.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Hotel reservation reminders and check-in updates.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Food delivery status notifications.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Promotional offers, coupons, and seasonal campaigns.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Loyalty rewards and membership communication.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Customer feedback and review requests.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Instant guest support through WhatsApp and Voice.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">
                                                Key Features:
                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Reservation & booking automation.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Omnichannel guest communication.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Promotional & loyalty campaigns.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Real-time delivery and service updates.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Customer engagement analytics.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={ind2}
                                    alt="Restaurants & Hospitality"
                                    className="w-full h-[420px] object-cover"
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

                                Travel & Tourism: Seamless Communication for Every Journey

                            </h2>

                            <p className="text-[16px] leading-[25px] text-[#2c3138] mt-5">

                                Deliver exceptional travel experiences with instant and
                                personalized communication. From booking confirmations
                                and itinerary updates to flight alerts, hotel reminders,
                                promotional offers, and customer support, our platform
                                keeps travelers informed across WhatsApp, SMS, Email,
                                and Voice throughout their entire journey.

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

                                            Who Uses This / Use Cases:

                                        </h3>

                                        <div className="mt-4 space-y-3">

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • Travel Agencies: Booking confirmations, itinerary sharing, and travel package promotions.
                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • Airlines: Flight booking confirmations, boarding reminders, gate changes, and delay notifications.
                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • Hotels & Resorts: Reservation confirmations, check-in reminders, and guest communication.
                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • Tour Operators: Tour schedules, travel updates, and customer assistance.
                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • Car Rental Services: Vehicle booking confirmations and pickup reminders.
                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • Cruise & Holiday Packages: Trip updates, travel documents, and promotional campaigns.
                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • Tourism Boards: Event announcements, destination promotions, and visitor engagement.
                                            </p>

                                        </div>

                                        {/* KEY FEATURES */}
                                        <h3 className="text-[22px] font-semibold text-[#111827] mt-8">

                                            Key Features:

                                        </h3>

                                        <div className="mt-4 space-y-3">

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • Instant booking and reservation confirmations.
                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • Flight, hotel, and itinerary notifications.
                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • Multi-channel messaging via WhatsApp, SMS, Email, and Voice.
                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • Automated travel reminders and promotional campaigns.
                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • Real-time customer support and engagement.
                                            </p>

                                        </div>

                                    </div>

                                )
                            }

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="w-full flex items-center justify-center p-6">

                            <img
                                src={ind3}
                                alt="Travel & Tourism"
                                className="w-full max-w-[700px] h-[420px] object-cover rounded-[8px]"
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

                                    Healthcare &amp; Wellness: Secure Patient Communication

                                </h3>

                                <p className="text-[15px] leading-[24px] text-[#2c3138] mt-3">

                                    Improve patient engagement with secure and reliable
                                    communication. Send appointment reminders, prescription
                                    notifications, lab reports, vaccination alerts, health
                                    check-up reminders, and wellness campaigns through
                                    WhatsApp, SMS, Email, and Voice while ensuring timely
                                    communication and an exceptional patient experience.

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

                                                Who Uses This / Use Cases:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Hospitals: Appointment confirmations and patient reminders.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Clinics: Follow-up consultations and prescription notifications.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Diagnostic Labs: Test booking confirmations and report delivery.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Pharmacies: Medicine refill reminders and order updates.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Wellness Centers: Membership renewals and health campaigns.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Telemedicine Platforms: Consultation reminders and secure notifications.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Health Insurance Providers: Claim status and policy renewal alerts.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">

                                                Key Features:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Automated appointment reminders.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Secure patient communication.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Lab report & prescription notifications.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Wellness campaign automation.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Multi-channel patient engagement.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* IMAGE */}
                            <div className="mt-1 w-full">

                                <img
                                    src={ind4}
                                    alt="Healthcare & Wellness"
                                    className="w-full h-[300px] object-cover"
                                />

                            </div>

                        </div>

                        {/* CARD 2 */}
                        {/* CARD 2 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[20px] font-semibold text-[#111827]">

                                    Real Estate: Accelerate Lead Conversion

                                </h3>

                                <p className="text-[15px] leading-[22px] text-[#282d33] mt-3">

                                    Convert every property inquiry into a valuable business
                                    opportunity with intelligent customer communication.
                                    Instantly engage buyers and investors through WhatsApp,
                                    SMS, Email, and Voice by sending property details,
                                    project launches, site visit reminders, pricing updates,
                                    and personalized follow-ups from one unified platform.

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

                                                Who Uses This / Use Cases:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Property Developers: Launch campaigns and buyer engagement.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Real Estate Agencies: Instant lead follow-ups and appointment scheduling.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Builders: Construction progress and possession updates.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Property Portals: Automated enquiry notifications and lead nurturing.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Commercial Real Estate: Investor communication and project updates.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Rental Agencies: Tenant communication, rent reminders, and maintenance alerts.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • CRM Platforms: Automated campaigns, personalized follow-ups, and lead management.
                                                </p>

                                            </div>

                                            <h4 className="text-[20px] font-semibold text-[#111827] mt-6">

                                                Key Features:

                                            </h4>

                                            <div className="mt-3 space-y-2">

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Instant property enquiry notifications.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Automated site visit reminders.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Project launch & promotional campaigns.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Personalized customer follow-up automation.
                                                </p>

                                                <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                    • Multi-channel communication via WhatsApp, SMS, Email & Voice.
                                                </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={ind5}
                                    alt="Real Estate"
                                    className="w-full h-[420px] object-cover"
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

                                Fitness &amp; Wellness: Inspire Health Through Smart Communication

                            </h2>

                            <p className="text-[16px] leading-[25px] text-[#2c3138] mt-5">

                                Strengthen member engagement with personalized and
                                automated communication. Send membership reminders,
                                class schedules, appointment confirmations, promotional
                                offers, wellness tips, and renewal notifications through
                                WhatsApp, SMS, Email, and Voice to keep members motivated
                                and connected with your fitness or wellness brand.

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

                                            Who Uses This / Use Cases:

                                        </h3>

                                        <div className="mt-4 space-y-3">

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Gyms &amp; Fitness Centers: Membership renewals, workout reminders, and promotional campaigns.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Yoga Studios: Class schedules, session reminders, and wellness updates.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Personal Trainers: Appointment confirmations and personalized fitness plans.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Wellness Clinics: Health program notifications and follow-up reminders.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Spa &amp; Wellness Resorts: Booking confirmations and exclusive offers.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Nutrition &amp; Diet Consultants: Meal plan updates and consultation reminders.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Health &amp; Lifestyle Apps: User engagement, onboarding, and wellness notifications.

                                            </p>

                                        </div>

                                        {/* KEY FEATURES */}
                                        <h3 className="text-[22px] font-semibold text-[#111827] mt-8">

                                            Key Features:

                                        </h3>

                                        <div className="mt-4 space-y-3">

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Automated membership renewal reminders.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Class schedules and appointment notifications.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Promotional offers and loyalty campaigns.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Personalized wellness tips and engagement.

                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">

                                                • Multi-channel communication via WhatsApp, SMS, Email &amp; Voice.

                                            </p>

                                        </div>

                                    </div>

                                )
                            }

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="w-full flex items-center justify-center p-6">

                            <img
                                src={ind6}
                                alt="Fitness & Wellness"
                                className="w-full max-w-[700px] h-auto object-cover rounded-[8px]"
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

                                Financial Services: Secure & Intelligent Customer Communication

                            </h2>

                            <p className="text-[16px] leading-[25px] text-[#2c3138] mt-5">

                                Deliver secure, reliable, and real-time communication for banks,
                                fintech companies, insurance providers, and financial institutions.
                                Instantly send OTPs, transaction alerts, payment reminders,
                                fraud notifications, loan updates, and account-related messages
                                through WhatsApp, SMS, Email, and Voice while maintaining the
                                highest standards of security and customer trust.

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

                                            Who Uses This / Use Cases:

                                        </h3>

                                        <div className="mt-4 space-y-3">

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • Banks: Secure OTP verification, transaction alerts, and account notifications.
                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • FinTech Companies: Instant payment confirmations and digital wallet updates.
                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • Insurance Providers: Policy renewals, premium reminders, and claim status updates.
                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • NBFCs & Lending Platforms: EMI reminders, loan approvals, and repayment notifications.
                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • Investment Firms: Portfolio updates, market alerts, and investment confirmations.
                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • Credit Card Companies: Spending alerts, billing reminders, and fraud detection.
                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • Payment Gateways: Secure authentication and payment success notifications.
                                            </p>

                                        </div>

                                        {/* KEY FEATURES */}
                                        <h3 className="text-[22px] font-semibold text-[#111827] mt-8">

                                            Key Features:

                                        </h3>

                                        <div className="mt-4 space-y-3">

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • Secure OTP and two-factor authentication messaging.
                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • Instant transaction and payment notifications.
                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • Fraud detection and suspicious activity alerts.
                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • Automated loan, EMI, and policy renewal reminders.
                                            </p>

                                            <p className="text-[15px] leading-[28px] text-[#2c3138]">
                                                • Multi-channel communication via WhatsApp, SMS, Email & Voice.
                                            </p>

                                        </div>

                                    </div>

                                )
                            }

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="w-full flex items-center justify-center p-6">

                            <img
                                src={ind8}
                                alt="Financial Services"
                                className="w-full max-w-[600px] h-auto object-cover rounded-[8px]"
                            />

                        </div>

                    </div>

                </div>

            </section>


            <CTASection />

        </>
    )
}