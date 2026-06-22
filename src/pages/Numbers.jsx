import React from 'react'
import numbers from "../assets/Images/numbers.svg";
import numbers1 from "../assets/Images/numbers1.svg";
import number2 from "../assets/Images/number2.svg";
import number3 from "../assets/Images/number3.svg";
import number4 from "../assets/Images/number4.svg";
import number5 from "../assets/Images/number5.svg";
import number6 from "../assets/Images/number6.svg";
import number7 from "../assets/Images/number7.svg";
import number8 from "../assets/Images/number8.svg";
import number9 from "../assets/Images/number9.svg";
import number10 from "../assets/Images/number10.svg";
import campaign5 from "../assets/Images/campaign5.svg";
import CTASection from './CTASection';


export default function Numbers() {
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
                                    src={numbers}
                                    alt="Campaign"
                                    className="w-11 h-11 object-contain"
                                />

                                <h3 className="text-[26px] font-semibold text-[#111827]">

                                    Numbers

                                </h3>

                            </div>

                            {/* SMALL TITLE */}
                            <p className="uppercase tracking-[3px] text-[#21b7c2] text-[18px] mb-5">

                                Unlock the Power of Virtual Numbers


                            </p>

                            {/* MAIN HEADING */}
                            <h1 className="text-[35px] lg:text-[45px] leading-[1.08] font-bold text-[#1f2937] max-w-[850px]">

                                Receive, Reply, and Customize SMS with Long Codes, for Ultimate Engagement and Communication!

                            </h1>

                            {/* DESCRIPTION */}
                            <p className="text-[23px] leading-[34px] text-[#4b5563] mt-3 max-w-[850px]">

                                Segment people based on their demographics, behaviour, interests and other characteristics.


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

                            <div className="w-full max-w-[900px] h-[510px] rounded-[10px] overflow-hidden">

                                <img
                                    src={numbers1}
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

                                    Global Market Entry with Numbers: Empowering Your Business in India

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">

                                    Empowering Your Business in India Numbers provide a seamless gateway for businesses aiming to expand their reach in India's dynamic market. These numbers enable companies to establish a local presence by acquiring an Indian phone number, simplifying connections with Indian customers and partners. By using India-based virtual numbers, businesses can foster trust, improve accessibility, and bridge geographical gaps, all while projecting professionalism and cost-effectiveness in their interactions. This approach is particularly valuable for international companies looking to unlock opportunities in the vibrant Indian market.

                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={number2}
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

                                    Cost Efficiency

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">


                                    Numbers in India offer a more budget-friendly alternative compared to traditional landlines. They entail lower setup costs, reduced maintenance expenses, and eliminate the need for physical infrastructure, delivering a cost-effective solution for businesses of all sizes operating in the Indian market.

                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={number3}
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

                                Missed Call Services

                            </h2>

                            {/* DESCRIPTION */}
                            <p className="text-[15px] leading-[28px] text-[#4b5563] mt-6 max-w-[750px]">



                                Certain virtual number providers include features like missed call alerts and notifications, allowing Indian businesses to swiftly respond to customers who couldn't connect with them. This feature helps in providing timely assistance and enhancing customer engagement in the Indian market.
                            </p>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[520px] rounded-[20px] overflow-hidden bg-white">

                                <img
                                    src={number4}
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

                                    Keyword Specific Messaging

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">

                                    You can choose a unique keyword for your business or campaign When users send an SMS starting with your chosen keyword to your dedicated or shared long code, you can receive these messages. This feature enables personalized and context-specific communication.

                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={number5}
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

                                    Keyword Independent Messaging

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">


                                    In addition to keywordsyou can receive messages without specific keywords. This broadens your communication options, allowing users to reach you without the need for predefined keywords.

                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={number6}
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

                                Pre-formatted Set of Questions

                            </h2>

                            {/* DESCRIPTION */}
                            <p className="text-[15px] leading-[28px] text-[#4b5563] mt-6 max-w-[750px]">



                                You can set up a pre-formatted set of questions to send to your audience. This is particularly useful for conducting surveys, quizzes, or gathering specific information in a structured format.
                            </p>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[520px] rounded-[20px] overflow-hidden bg-white">

                                <img
                                    src={number7}
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

                                    Online Surveys

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">

                                    Use our Numbers service to create and conduct online surveys. Collect valuable insights and feedback from your audience with ease.

                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={number8}
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

                                    Lead Generation

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">


                                    Engage in lead generation by allowing potential customers to reach out to you through SMS. Gather contact details and inquiries, helping you grow your customer base.

                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={number9}
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

                                Create Auto Responses

                            </h2>

                            {/* DESCRIPTION */}
                            <p className="text-[15px] leading-[28px] text-[#4b5563] mt-6 max-w-[750px]">



                                You have the option to set up automated responses for messages you receive. Customize these responses to provide immediate feedback or information to your users.
                            </p>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[520px] rounded-[20px] overflow-hidden bg-white">

                                <img
                                    src={number10}
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

                                Integration into Web Applications

                            </h2>

                            {/* DESCRIPTION */}
                            <p className="text-[15px] leading-[28px] text-[#4b5563] mt-6 max-w-[750px]">



                                Seamlessly integrate Numbers into your web application or software. This allows you to extend the capabilities of your software and enhance user communication.
                            </p>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[520px] rounded-[20px] overflow-hidden bg-white">

                                <img
                                    src={campaign5}
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
