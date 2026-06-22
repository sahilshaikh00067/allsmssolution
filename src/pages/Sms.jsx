import React from 'react'
import sms from "../assets/Images/sms.svg"
import sms1 from "../assets/Images/sms1.svg"
import sms2 from "../assets/Images/sms2.svg"
import sms3 from "../assets/Images/sms3.svg"
import sms4 from "../assets/Images/sms4.svg"
import sms5 from "../assets/Images/sms5.svg"
import sms6 from "../assets/Images/sms6.svg"
import sms7 from "../assets/Images/sms7.svg"
import FAQ from './FAQ'
import CTASection from './CTASection'



export default function Sms() {
    return (
        <>
            <section className="w-full flex items-center overflow-hidden">

                {/* FULL WIDTH */}
                <div className="w-full px-1">

                    {/* FULL SCREEN CONTENT */}
                    <div className="w-full max-w-full">

                        {/* TOP ICON */}
                        <div className="flex items-center gap-4 mb-6">

                            <img
                                src={sms}
                                alt="SMS"
                                className="w-11 h-11 object-contain"
                            />

                            <h3 className="text-[26px] font-semibold text-[#111827]">

                                SMS

                            </h3>

                        </div>

                        {/* SMALL TITLE */}
                        <p className="uppercase tracking-[3px] text-[#507cda] text-[18px] mb-8">

                            Next level messaging

                        </p>

                        {/* MAIN HEADING */}
                        <h1 className="text-[40px] lg:text-[50px] leading-[1.05] font-bold text-[#1f2937] w-full max-w-[1400px]">

                            Reach your customers globally with quick, scalable, and customizable message

                        </h1>

                        {/* DESCRIPTION */}
                        <p className="text-[20px] leading-[38px] text-[#4b5563] mt-6 max-w-[1200px]">

                            Integrate our developer-friendly SMS API to send and receive text messages.
                            Our distributed carrier network and intelligent routing ensure the highest
                            delivery and lowest latency.

                        </p>

                        {/* BUTTON */}
                        <div className="flex flex-wrap items-center gap-3 mt-8">

                            <button className="bg-[#201e1e] hover:bg-[#1b2738] text-[#fafafa] px-3 py-1 rounded-[6px] text-[20px] font-medium transition-all duration-300 border border-[#1a212b]">

                                Get Started

                            </button>

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

                                    Intelligent SMS Retry Algorithm

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">

                                    Our SMS API service finds the most reliable and quickest telecom route for every message you send. In case the SMS fails, our algorithm retries it within a fraction of a second and delivers your messages using another telecom route.

                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={sms1}
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

                                    Reliable, Scalable, and Feature-Rich SMS API

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">


                                    Available in all programming languages, integration with our SMS API for developers is quick, easy, and seamless. Built for developers by developers, explore quick-start guides, code snippets, SDKs, and more.

                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={sms2}
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

                                Enjoy Low Latency Delivery-Worldwide

                            </h2>

                            {/* DESCRIPTION */}
                            <p className="text-[15px] leading-[28px] text-[#4b5563] mt-6 max-w-[750px]">



                                Reach 210+ countries reliably with localized telecom operators. The automatic rerouting of global traffic in real-time helps us avoid outages and latency.
                            </p>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[520px] rounded-[20px] overflow-hidden bg-white">

                                <img
                                    src={sms3}
                                    alt="Time Based Condition"
                                    className="w-full h-[500px] object-contain"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="w-full py-16 bg-gray-50">

                <div className="w-full px-2">

                    {/* GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* CARD 1 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">

                                    Multi-Lingual Support

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">

                                    Converse with your audience in their local language and take your customer engagement to the next level. Build customer confidence as you send messages in their regional language anywhere across the world.

                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={sms4}
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

                                    Personalized SMS

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">


                                    Increase customer satisfaction with meaningful engagement.Don’t just engage with customers, create personalized experiences by adding characteristics to your messages. Harness the power of personalization to boost your ROI.

                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={sms5}
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

                                Link Shortener

                            </h2>

                            {/* DESCRIPTION */}
                            <p className="text-[15px] leading-[28px] text-[#4b5563] mt-6 max-w-[750px]">



                                Transform a long URL into a shorter, more readable link.Enable the deeply integrated link shortener to convert long URLs to shorter links. Get a detailed user report on clicks with mobile numbers, browser, and IP.
                            </p>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[520px] rounded-[20px] overflow-hidden bg-white">

                                <img
                                    src={sms6}
                                    alt="Time Based Condition"
                                    className="w-full h-[500px] object-contain"
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

                                Enhanced Analytics

                            </h2>

                            {/* DESCRIPTION */}
                            <p className="text-[15px] leading-[28px] text-[#4b5563] mt-6 max-w-[750px]">



                                Real-time graphical view for monitoring and troubleshooting.Optimize your SMS delivery, measure the effectiveness of your campaigns, and improve ROI. Always be in the know which messages customers have received and which are missed.
                            </p>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[520px] rounded-[20px] overflow-hidden bg-white">

                                <img
                                    src={sms7}
                                    alt="Time Based Condition"
                                    className="w-full h-[500px] object-contain"
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
