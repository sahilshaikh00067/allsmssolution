import React from "react";
import { Link } from "react-router-dom";

import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
    FaTelegramPlane,
    FaWhatsapp,
    FaAndroid,
    FaApple,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import finallogo from "../assets/Images/finallogo.png";
import meta from "../assets/Images/meta.svg";
import google from "../assets/Images/google.png";


const Footer = () => {

    return (

        <footer className="w-full bg-[#13223a] text-white">

            {/* TOP FOOTER */}
            <div className="w-full px-2 py-14">

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12">

                    {/* COLUMN 1 */}
                    <div>

                        <h3 className="text-[20px] font-semibold mb-6">

                            Our Products

                        </h3>

                        <div className="flex flex-col gap-3 text-[15px] text-[#d1d5db]">

                            <Link to="/hello" className="hover:text-white transition">
                                Hello
                            </Link>

                            <Link to="/industry" className="hover:text-white transition">
                                Industry
                            </Link>

                            <Link to="/campaign" className="hover:text-white transition">
                                Campaign
                            </Link>

                            <Link to="/otp" className="hover:text-white transition">
                                OTP
                            </Link>
                            <Link to="/whatsapp" className="hover:text-white transition">
                                WhatsApp Api
                            </Link>

                        </div>

                    </div>

                    {/* COLUMN 2 */}
                    <div>

                        <h3 className="text-[20px] font-semibold mb-6">

                            Channels

                        </h3>

                        <div className="flex flex-col gap-3 text-[15px] text-[#d1d5db]">

                            <Link to="/sms" className="hover:text-white transition">
                                SMS
                            </Link>

                            <Link to="/email" className="hover:text-white transition">
                                Email
                            </Link>
                            <Link to="/rcs" className="hover:text-white transition">
                                RCS
                            </Link>

                            <Link to="/whatsapp" className="hover:text-white transition">
                                WhatsApp
                            </Link>

                            <Link to="/voice" className="hover:text-white transition">
                                Voice
                            </Link>

                            <Link to="/chatbot" className="hover:text-white transition">
                                Chatbot
                            </Link> 

                        </div>


                    </div>

                    {/* COLUMN 3 */}
                    <div>

                        <h3 className="text-[20px] font-semibold mb-6">

                            Discover

                        </h3>

                        <div className="flex flex-col gap-3 text-[15px] text-[#d1d5db]">

                            <Link to="/contact" className="hover:text-white transition">
                                Contact Us
                            </Link>

                            <Link to="/about" className="hover:text-white transition">
                                Career
                            </Link>

                        </div>

                    </div>

                    {/* COLUMN 4 */}
                    <div className="xl:text-right">

                        {/* LOGO */}
                        <div className="flex justify-end w-full">
                            <img
                                src={finallogo}
                                alt="All SMS Solution"
                                className="h-35 object-contain"
                            />
                        </div>

                        {/* SOCIAL MEDIA */}
                        <div className="mt-10">

                            <h3 className="text-[20px] font-semibold mb-4">

                                Follow Us

                            </h3>

                            <div className="flex xl:justify-end items-center gap-4 text-[24px]">

                                <a
                                    href="https://www.facebook.com/share/1aY6Q2dtup/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-[#1877F2] transition"
                                >
                                    <FaFacebookF />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/all-sms-solution-23087a419?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-[#0A66C2] transition"
                                >
                                    <FaLinkedinIn />
                                </a>

                                <a
                                    href="https://www.instagram.com/allsmssolution?igsh=MTJ2Mnp4bmQ4NHlmNg=="
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-pink-400 transition"
                                >
                                    <FaInstagram />
                                </a>

                                <a
                                    href="https://x.com/allsmssolution?s=20"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-white transition"
                                >
                                    <FaXTwitter />
                                </a>

                                <a
                                    href="https://wa.me/919920067649"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-[#25D366] transition"
                                >
                                    <FaWhatsapp />
                                </a>

                            </div>

                        </div>

                        {/* ADDRESS */}
                        <div className="mt-10">

                            <p className="text-[15px] leading-[32px] text-[#d1d5db] xl:text-right">

                                Shop No 302 ,3rd floor , Auris Galleria,
                                <br />
                                Opp Landmark Hotel New Link Rd, Malad West,
                                <br />
                                Mumbai, Maharashtra 400064

                            </p>

                        </div>

                        {/* META IMAGE */}
                        <div className="mt-10 flex xl:justify-end">
                            <a
                                href="https://www.facebook.com/business/partner-directory/search?solution_type=messaging&ref=pd_home_hero_cta&id=5412005225590465&section=overview"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4"
                            >
                                <img
                                    src={google}
                                    alt="Google Partner"
                                    className="h-20 rounded-2xl object-contain hover:scale-105 transition-all duration-300"
                                />
                                <img
                                    src={meta}
                                    alt="Meta Business Partner"
                                    className="h-20 object-contain hover:scale-105 transition-all duration-300"
                                />
                            </a>
                        </div>
                    </div>

                </div>

            </div>

            {/* BOTTOM FOOTER */}
            <div className="w-full bg-[#071224] px-4 lg:px-8 py-6">

                <div className="flex flex-wrap items-center gap-3 text-[14px] text-[#d1d5db]">

                    <Link to="/terms" className="hover:text-white transition">
                        Terms and Condition
                    </Link>

                    <span>|</span>

                    <Link to="/privacy-policy" className="hover:text-white transition">
                        Privacy policy
                    </Link>

                    <span>|</span>

                </div>

                {/* COPYRIGHT */}
                <p className="text-[14px] text-[#9ca3af] mt-6">

                    © 2024  All SMS Solution. All rights reserved.

                </p>

            </div>

        </footer>

    );
};

export default Footer;