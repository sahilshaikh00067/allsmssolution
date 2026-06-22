import React from "react";

import helloicon from "../assets/Images/helloicon.svg";
import hellov1 from "../assets/Images/hellov1.mp4";
import HelloDown from "./HelloDown";
import CTASection from "./CTASection";
import { Link } from "react-router-dom";

const Hello = () => {

    return (
        <>

            <section className="w-full min-h-screen flex items-start pt-2 overflow-hidden">

                <div className="w-full px-2">

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

                        {/* LEFT SIDE */}
                        <div>

                            {/* TOP ICON */}
                            <div className="flex items-center gap-4 mb-6">

                                <img
                                    src={helloicon}
                                    alt="Hello"
                                    className="w-11 h-11 object-contain"
                                />

                                <h3 className="text-[26px] font-semibold text-[#111827]">

                                    Hello

                                </h3>

                            </div>

                            {/* SMALL TITLE */}
                            <p className="uppercase tracking-[3px] text-[#9a6a00] text-[18px] mb-5">

                                Customer Support Software

                            </p>

                            {/* MAIN HEADING */}
                            <h1 className="text-[35px] lg:text-[45px] leading-[1.05] font-bold text-[#1f2937] max-w-[850px]">

                                AI-Powered Contact Center

                            </h1>

                            {/* DESCRIPTION */}
                            <p className="text-[23px] leading-[36px] text-[#4b5563] mt-6 max-w-[850px]">

                                Never lose sight of what’s important. Don’t just solve tickets,
                                build customer relationships

                            </p>

                            {/* BUTTONS */}
                            <Link to='/contact' className="flex flex-wrap items-center gap-3 mt-8">

                                {/* GET STARTED */}
                                <button className="bg-[#efc84a] hover:bg-[#d9b02d] text-[#111827] px-2 py-1 rounded-[6px] text-[20px] font-medium transition-all duration-300 border border-[#c99a15]">

                                    Get Started →

                                </button>

                                {/* MEETING */}
                                <button className="border border-[#c99a15] hover:bg-[#efc84a] text-[#9a6a00] hover:text-[#111827] px-2 py-1 rounded-[6px] text-[20px] font-medium transition-all duration-300">

                                    Schedule a Meeting →

                                </button>

                                {/* CHATBOT */}
                                <button className="border border-[#c99a15] hover:bg-[#efc84a] text-[#9a6a00] hover:text-[#111827] px-2 py-1 rounded-[6px] text-[20px] font-medium transition-all duration-300">

                                    Chatbot →

                                </button>
                            </Link>

                        </div>


                        {/* RIGHT SIDE VIDEO */}
                        <div className="relative flex justify-center">

                            {/* VIDEO BOX */}
                            <div className="relative w-full max-w-[700px] rounded-[40px] overflow-hidden">

                                <video
                                    src={hellov1}
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

            <HelloDown />
            <CTASection />
        </>

    );
};

export default Hello;