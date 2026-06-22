import React from 'react'

import shorturl from "../assets/Images/shorturl.svg";
import url1 from "../assets/Images/url1.svg";
import url2 from "../assets/Images/url2.svg";
import url3 from "../assets/Images/url3.svg";
import CTASection from './CTASection';

export default function UrlShorter() {
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
                                    src={shorturl}
                                    alt="Campaign"
                                    className="w-11 h-11 object-contain"
                                />

                                <h3 className="text-[26px] font-semibold text-[#111827]">

                                    URL Shortner

                                </h3>

                            </div>

                            {/* SMALL TITLE */}
                            <p className="uppercase tracking-[3px] text-[#cd7b33] text-[18px] mb-5">

Simplify your links


                            </p>

                            {/* MAIN HEADING */}
                            <h1 className="text-[35px] lg:text-[45px] leading-[1.08] font-bold text-[#1f2937] max-w-[850px]">

Customise, share and track smart links

                            </h1>

                            {/* DESCRIPTION */}
                            <p className="text-[23px] leading-[34px] text-[#4b5563] mt-3 max-w-[850px]">

Optimise your complex links to create short, cleaner links that are easier to share..



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

                            <div className="w-full max-w-[900px] h-[510px] rounded-[10px] overflow-hidden">

                                <img
                                    src={url1}
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

No Code

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">

No code and fewer credits makes it a smart link.Shorten your URL in real-time without putting in any code. Just paste your link and you have a smart link that is easy to share, saves you space and consumes fewer credit.

                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={url2}
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

NumberWise Tracking

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">


Gather statistics by monitoring the number of hits from your URL.Track the performance of your shortURL and the number of hits for each recipient. Know how many times the link has been clicked, where is it shared, and how is it driving traffic.

                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={url3}
                                    alt="Draggable Flow"
                                    className="w-full h-[420px] object-contain"
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
