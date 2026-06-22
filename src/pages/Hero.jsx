import React from "react";
import { Link } from "react-router-dom";

import home1 from "../assets/Images/home1.jpeg";

const Hero = () => {
    return (

        <section className="w-full min-h-screen bg-white flex items-start pt-8">

            <div className="w-full px-2">

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

                    {/* LEFT SIDE CONTENT */}
                    <div className="w-full mb-25">

                            <p className="uppercase tracking-[3px] text-[#4959ab] text-[18px] mb-6">

                                Customer Solution Platform

                            </p>

                        <h1 className="text-[42px] lg:text-[52px] leading-tight font-bold text-[#111827] mt-5">

                            Cloud Communication Platform

                        </h1>

                        <p className="text-[24px] leading-8 mt-3 max-w-xl text-[#374151]">

                            Secure and robust APIs for WhatsApp, SMS, RCS, Email, Voice, Authentication and more

                        </p>

                        <div className="flex items-center gap-5 mt-10">
                            <Link to='/contact'>
                                <button className="bg-[#111827] hover:bg-[#9e892c] text-white px-5 py-3 rounded-md text-[15px] font-normal transition-all duration-300">

                                    Get Started

                                </button>
                            </Link>

                            <Link to='/contact'>
                                <button className="border border-[#111827] hover:border-[#9e892c] hover:text-[#9e892c] px-5 py-3 rounded-md text-[15px] font-semibold transition-all duration-300">

                                    Live Demo

                                </button>
                            </Link>

                        </div>

                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div className="w-full flex justify-center">

                        <img
                            src={home1}
                            alt="Hero"
                            className="w-full max-w-[600px] object-contain"
                        />

                    </div>

                </div>

            </div>

        </section>

    );
};

export default Hero;