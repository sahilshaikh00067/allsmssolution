import React from 'react'
import campaignicon from "../assets/Images/campaignicon.svg";
import campaign1 from "../assets/Images/campaign1.webp";
import campaign2 from "../assets/Images/campaign2.svg";
import campaign3 from "../assets/Images/campaign3.svg";
import campaign4 from "../assets/Images/campaign4.svg";
import campaign5 from "../assets/Images/campaign5.jpeg";
import campaign6 from "../assets/Images/campaign6.svg";
import FAQ from './FAQ';
import CTASection from './CTASection';
import { Link } from "react-router-dom";


export default function Campaign() {

    return (

        <>
            {/* TOP SPACE KAM KIYA */}
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
                                    src={campaignicon}
                                    alt="Campaign"
                                    className="w-11 h-11 object-contain"
                                />

                                <h3 className="text-[26px] font-semibold text-[#111827]">

                                    Campaign

                                </h3>

                            </div>

                            {/* SMALL TITLE */}
                            <p className="uppercase tracking-[3px] text-[#a240a1] text-[18px] mb-5">

                                Event Base Marketing Automation

                            </p>

                            {/* MAIN HEADING */}
                            <h1 className="text-[35px] lg:text-[45px] leading-[1.05] font-bold text-[#1f2937] max-w-[850px]">

                                Connect conversations across Channels and tools.

                            </h1>

                            {/* DESCRIPTION */}
                            <p className="text-[23px] leading-[36px] text-[#4b5563] mt-3 max-w-[850px]">

                                Deliver personalized, engaging and seamless experiences

                            </p>

                            {/* BUTTON */}
                            <div className="flex flex-wrap items-center gap-3 mt-5">
                                <Link to='/contact'>
                                    <button className="bg-[#000000] hover:bg-[#1b2738] text-[#fafafa] px-4 py-2 rounded-[6px] text-[18px] font-medium transition-all duration-300 border border-[#1a212b]">

                                        Get Started For Free →

                                    </button>
                                </Link>
                            </div>

                        </div>

                        {/* RIGHT SIDE IMAGE */}
                        <div className="relative flex justify-end">

                            <div className="w-full max-w-[900px] h-[510px] rounded-[10px] overflow-hidden">

                                <img
                                    src={campaign1}
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

                            Features of Drip Campaign and Marketing Automation

                        </h2>

                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* CARD 1 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">

                                    Multi channel support

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">

                                    Support your customers on their preferred channel.
                                    Give your customers a better support experience via
                                    Drip Campaign using their preferred channel-SMS,
                                    Email, Voice, Push Notification, WhatsApp and more.

                                    Meet your customers where they are.

                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={campaign2}
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

                                    Draggable Flow

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">

                                    Drag and drop to create an omnichannel flow with
                                    ‘if-then’ scenarios. Choose when you need to
                                    initiate an SMS, mail, or messaging conversation
                                    in a single workflow.

                                    Create a marketing automation flow based on
                                    previous drip campaign flow.

                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={campaign3}
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

                                Time Based Condition

                            </h2>

                            {/* DESCRIPTION */}
                            <p className="text-[15px] leading-[28px] text-[#4b5563] mt-6 max-w-[750px]">


                                Send perfectly timed automated messages. Build a thoughtful sending schedule with time-based conditions that control the time zone of when your drip campaigns are delivered. Support your customers at the right time.

                            </p>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[520px] rounded-[20px] overflow-hidden bg-white">

                                <img
                                    src={campaign4}
                                    alt="Time Based Condition"
                                    className="w-full h-[500px] object-contain"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="w-full py-10 bg-gray-50">

                <div className="w-full px-2">

                    {/* GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* CARD 1 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">

                                    API based Conditions

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">


                                    Get information instantly for real-time interactions. Call for data even when in mid of a flow by sending data to a third-party system or requesting data needed for your communication steps. Deliver real-time information to your customers.

                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={campaign5}
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

                                    Country Based Condition

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">

                                    Support your customers across the world. Create personalized and memorable experiences for your customer across countries, languages, content, channels, flows and more. Easily connect, customize and communicate.

                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={campaign6}
                                    alt="Draggable Flow"
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