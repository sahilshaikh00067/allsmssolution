import React from 'react'
import knowicon from "../assets/Images/knowicon.svg";
import know1 from "../assets/Images/know1.svg";
import know2 from "../assets/Images/know2.svg";
import know3 from "../assets/Images/know3.svg";
import know4 from "../assets/Images/know4.svg";
import CTASection from './CTASection';

export default function Knowlodge() {
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
                                    src={knowicon}
                                    alt="Campaign"
                                    className="w-11 h-11 object-contain"
                                />

                                <h3 className="text-[26px] font-semibold text-[#111827]">

                                    KnowledgeBase

                                </h3>

                            </div>

                            {/* SMALL TITLE */}
                            <p className="uppercase tracking-[3px] text-[#bbac26] text-[18px] mb-5">

                                Empower Customers with Self-Service Options


                            </p>

                            {/* MAIN HEADING */}
                            <h1 className="text-[35px] lg:text-[45px] leading-[1.08] font-bold text-[#1f2937] max-w-[850px]">

                                Knowledge base is the backbone for good customer support

                            </h1>

                            {/* DESCRIPTION */}
                            <p className="text-[23px] leading-[34px] text-[#4b5563] mt-3 max-w-[850px]">

                                Get all essential features of KnowledgeBase software



                            </p>

                            {/* BUTTON */}
                            <div className="flex flex-wrap items-center gap-3 mt-5">

                                <button className="bg-[#201e1e] hover:bg-[#1b2738] text-[#fafafa] px-3 py-1 rounded-[6px] text-[18px] font-medium transition-all duration-300 border border-[#1a212b]">

                                    Get Started Free Forever

                                </button>

                            </div>

                        </div>

                        {/* RIGHT SIDE IMAGE */}
                        <div className="relative flex justify-end">

                            <div className="w-full max-w-[900px] h-[510px] rounded-[10px] overflow-hidden">

                                <img
                                    src={know1}
                                    alt="Campaign"
                                    className="w-full h-full rounded-[10px]"
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

                                    WYSIWYG editor

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">

                                    Easily create or edit your knowledge base articlesQuickly create your articles with the what you see is what you get content editor. It is as simple to use as if you were using a Word Processor or HTML Editor.

                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={know2}
                                    alt="Multi channel support"
                                    className="w-full h-[420px] object-contain"
                                />

                            </div>

                        </div>

                        {/* CARD 2 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">

                                    SEO friendly (Subfolder and subdomain both support)

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">


                                    An SEO-friendly optimized knowledge baseYour knowledge base is run on your own domain and not on any subdomain so the algorithms treat it as your website giving it the same importance as your other webpages.

                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={know3}
                                    alt="Draggable Flow"
                                    className="w-full h-[420px] object-contain"
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

                                Whitelabel

                            </h2>

                            {/* DESCRIPTION */}
                            <p className="text-[15px] leading-[28px] text-[#4b5563] mt-6 max-w-[750px]">



                                It works on your branding and not oursYour users view your knowledge base under your branding on your website. Our whitelabel services ensure there’s no indication of it being powered by All SMS Solution.
                            </p>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[520px] rounded-[20px] overflow-hidden bg-white">

                                <img
                                    src={know4}
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
    )
}
