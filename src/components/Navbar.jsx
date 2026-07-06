import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import {
    FaPhoneAlt,
    FaSignInAlt,
    FaChevronDown,
    FaBars,
    FaTimes,
    FaBell
} from "react-icons/fa";

import finallogo from "../assets/Images/finallogo.jpeg";

// Applications
import helloicon from "../assets/Images/helloicon.svg";
import campaignicon from "../assets/Images/campaignicon.svg";
import segmentoicon from "../assets/Images/segmentoicon.svg";
import otpicon from "../assets/Images/otpicon.svg";

// Channels
import sms from "../assets/Images/sms.svg";
import rcsicon from "../assets/Images/rcsicon.svg";
import email from "../assets/Images/email.svg";
import whatsapp from "../assets/Images/whatsapp.svg";
import voice from "../assets/Images/voice.svg";
import numbers from "../assets/Images/numbers.svg";


const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);

    const countries = [
        { name: "Global", flag: "https://flagcdn.com/w20/un.png" },
        { name: "India", flag: "https://flagcdn.com/w20/in.png" },
        { name: "Brazil", flag: "https://flagcdn.com/w20/br.png" },
        { name: "United Arab Emirates", flag: "https://flagcdn.com/w20/ae.png" },
        { name: "Philippines", flag: "https://flagcdn.com/w20/ph.png" },
        { name: "Singapore", flag: "https://flagcdn.com/w20/sg.png" },
        { name: "Spain", flag: "https://flagcdn.com/w20/es.png" },
        { name: "United Kingdom", flag: "https://flagcdn.com/w20/gb.png" },
        { name: "United States", flag: "https://flagcdn.com/w20/us.png" }
    ];

    const applications = [
        { name: "Hello", desc: "Ticketing and Chat", icon: helloicon, to: "/hello" },
        { name: "Campaign", desc: "Event-based Automation", icon: campaignicon, to: "/campaign" },
        { name: "Segment", desc: "Contact Management", icon: segmentoicon, to: "/segmento" },
        { name: "OTP", desc: "Simplified OTP Platform", icon: otpicon, to: "/otp" }
    ];

    const channels = [
        { name: "SMS", icon: sms, to: "/sms" },
        { name: "Email", icon: email, to: "/email" },
        { name: "RCS", icon: rcsicon, to: "/rcs" },
        { name: "WhatsApp", icon: whatsapp, to: "/whatsapp" },
        { name: "Voice", icon: voice, to: "/voice" },
                { name: "Chatbot", icon: helloicon, to: "/chatbot" },
        { name: "Numbers", icon: numbers, to: "/numbers" },
    ];

    return (
        <header className="w-full bg-white relative top-0 left-0 z-50">

            {/* TOP HEADER */}
            <div className="border-b border-gray-200 hidden lg:block">

                <div className="w-full px-2 py-2.5 flex justify-end items-center gap-8 text-[13px] text-[#111827]">

                    {/* COUNTRY DROPDOWN */}
                    <div className="relative group">

                        <div className="flex items-center gap-2 cursor-pointer hover:text-[#9e892c] transition-all duration-300">

                            <img
                                src="https://flagcdn.com/w20/in.png"
                                alt="India"
                                className="w-4 h-3 rounded-sm object-cover"
                            />

                            <span className="font-medium">
                                India
                            </span>

                            <FaChevronDown className="text-[10px]" />

                        </div>

                        {/* DROPDOWN */}
                        <div className="absolute right-0 top-8 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">

                            {
                                countries.map((country, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition"
                                    >

                                        <img
                                            src={country.flag}
                                            alt={country.name}
                                            className="w-4 h-3 rounded-sm object-cover"
                                        />

                                        <span className="text-[14px] font-medium text-gray-700">
                                            {country.name}
                                        </span>

                                    </div>
                                ))
                            }

                        </div>

                    </div>

                    {/* CONTACT */}
                    <Link
                        to="/contact"
                        className="flex items-center gap-2 hover:text-[#9e892c] transition"
                    >

                        <FaPhoneAlt className="text-[11px]" />

                        <span className="font-medium">
                            Contact Us
                        </span>

                    </Link>

                    {/* LOGIN */}
                    <Link
                        to="/contact"
                        className="flex items-center gap-2 hover:text-[#9e892c] transition"
                    >

                        <FaSignInAlt className="text-[11px]" />

                        <span className="font-medium">
                            LOG IN
                        </span>

                    </Link>

                </div>

            </div>



            {/* MAIN NAVBAR */}
            <nav className="w-full px-1 flex items-center justify-between relative">

                {/* LEFT MENU */}
                <div className="hidden lg:flex items-center gap-7 text-[17px] font-normal text-[#111827]">

                    {/* PRODUCTS WITH MEGA MENU */}
                    <div
                        className="relative"
                        onMouseEnter={() => setProductsOpen(true)}
                        onMouseLeave={() => setProductsOpen(false)}
                    >

                        <button
                            className={`relative group flex items-center gap-1.5 transition ${productsOpen ? "text-[#9e892c]" : "hover:text-[#9e892c]"
                                }`}
                        >
                            Products

                            <FaChevronDown
                                className={`text-[11px] transition-transform duration-300 ${productsOpen ? "rotate-180" : ""
                                    }`}
                            />

                            <span
                                className={`absolute left-0 -bottom-2 h-[2px] bg-[#9e892c] transition-all duration-300 ${productsOpen ? "w-full" : "w-0"
                                    }`}
                            ></span>
                        </button>

                        {/* MEGA MENU + OVERLAY */}
                        <AnimatePresence>
                            {productsOpen && (
                                <>
                                    {/* DIMMED OVERLAY OVER REST OF PAGE */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="fixed inset-x-0 top-[64px] bottom-0 bg-black/40 z-40"
                                        onClick={() => setProductsOpen(false)}
                                    />

                                    {/* SLIDE-IN PANEL FROM LEFT */}
                                    <motion.div
                                        initial={{ x: "-100%", opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: "-100%", opacity: 0 }}
                                        transition={{ duration: 0.35, ease: "easeOut" }}
                                        className="fixed left-0 top-[64px] w-full max-w-[800px] bg-white z-50 shadow-2xl rounded-br-2xl overflow-hidden"
                                        style={{ height: "calc(100vh - 64px)", overflowY: "auto" }}                                                                           >

                                        <div className="grid grid-cols-2 gap-12 p-12">
                                            {/* APPLICATIONS */}
                                            <div>
                                                <p className="text-[16px] font-semibold tracking-wide text-gray-400 uppercase mb-4">
                                                    Applications
                                                </p>

                                                <div className="flex flex-col gap-5">
                                                    {applications.map((item, index) => (
                                                        <Link
                                                            key={index}
                                                            to={item.to}
                                                            onClick={() => setProductsOpen(false)}
                                                            className="flex items-start gap-3 group/item"
                                                        >
                                                            <img
                                                                src={item.icon}
                                                                alt={item.name}
                                                                className="w-13 h-13 object-contain mt-0.6"
                                                            />

                                                            <div>
                                                                <p className="text-[17px] font-semibold text-[#111827] group-hover/item:text-[#9e892c] transition">
                                                                    {item.name}
                                                                </p>
                                                                <p className="text-[15px] text-gray-500">
                                                                    {item.desc}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* CHANNELS */}
                                            <div>
                                                <p className="text-[16px] font-semibold tracking-wide text-gray-400 uppercase mb-4">
                                                    Channels
                                                </p>

                                                <div className="flex flex-col gap-5">
                                                    {channels.map((item, index) => (
                                                        <Link
                                                            key={index}
                                                            to={item.to}
                                                            onClick={() => setProductsOpen(false)}
                                                            className="flex items-center gap-3 group/item"
                                                        >
                                                            {item.icon ? (
                                                                <img
                                                                    src={item.icon}
                                                                    alt={item.name}
                                                                    className="w-13 h-13 object-contain"
                                                                />
                                                            ) : (
                                                                <span className="w-13 h-13 flex items-center justify-center rounded-full bg-green-50 text-green-600">
                                                                    <FaBell className="text-[15px]" />
                                                                </span>
                                                            )}

                                                            <p className="text-[17px] font-semibold text-[#111827] group-hover/item:text-[#9e892c] transition">
                                                                {item.name}
                                                            </p>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>

                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>

                    </div>

                    {/* <Link
                        to="/integrations"
                        className="relative group hover:text-[#9e892c] transition"
                    >
                        Integrations

                        <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#9e892c] transition-all duration-300 group-hover:w-full"></span>
                    </Link> */}

                    <Link
                        to="/about"
                        className="relative group hover:text-[#9e892c] transition"
                    >
                        About Us

                        <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#9e9a33] transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link
                        to="/contact"
                        className="relative group hover:text-[#9e892c] transition"
                    >
                        Contact

                        <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#9e9a33] transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                </div>

                {/* LOGO */}
                <Link
                    to="/"
                    className="flex items-center justify-center"
                >

                    <img
                        src={finallogo}
                        alt="All SMS Solution"
                        className="h-22 object-contain"
                    />

                </Link>

                {/* RIGHT MENU */}
                <div className="hidden lg:flex items-center gap-7">

                    <Link
                        to="/contact"
                        className="relative group text-[16px] font-normal text-[#111827] hover:text-[#9e892c] transition"
                    >

                        API Docs

                        <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#9e892c] transition-all duration-300 group-hover:w-full"></span>

                    </Link>

                    <Link to="/contact  ">

                        <button className="bg-[#111827] hover:bg-[#9e892c] text-white px-7 py-2.5 rounded-md text-[14px] font-normal transition-all duration-300">
                            SIGN UP
                        </button>

                    </Link>

                </div>

                {/* MOBILE MENU BUTTON */}
                <div
                    className="lg:hidden text-2xl text-black cursor-pointer"
                    onClick={() => setMobileMenu(!mobileMenu)}
                >

                    {
                        mobileMenu
                            ? <FaTimes />
                            : <FaBars />
                    }

                </div>

            </nav>

            {/* MOBILE MENU */}
            <div
                className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${mobileMenu
                    ? "max-h-screen py-6"
                    : "max-h-0"
                    }`}
            >

                <div className="flex flex-col px-6 gap-5 text-[16px] font-medium text-[#111827]">

                    <Link to="/">Home</Link>

                    <Link to="/">Products</Link>

                    {/* <Link to="/integrations">Integrations</Link> */}

                    <Link to="/about">About Us</Link>

                    <Link to="/contact">Contact</Link>

                    <Link to="/api-docs">API Docs</Link>

                    <Link to="/contact">Contact</Link>

                    <Link to="/login">Login</Link>

                    <Link to="/signup">

                        <button className="w-full bg-[#111827] text-white py-3 rounded-lg mt-2">
                            SIGN UP
                        </button>

                    </Link>

                </div>

            </div>

        </header>
    );
};

export default Navbar;