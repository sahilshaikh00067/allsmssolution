import React from "react";
import { Link } from "react-router-dom";

import sms from "../assets/Images/sms.svg";
import email from "../assets/Images/email.svg";
import whatsapp from "../assets/Images/whatsapp.svg";
import voice from "../assets/Images/voice.svg";
import helloicon from "../assets/Images/helloicon.svg";
import rcsicon from "../assets/Images/rcsicon.svg";

const Channels = () => {

    const channels = [
        {
            title: "SMS",
            image: sms,
            desc: "Transform your global communication with reliable SMS services & APIs. Engage, analyze and connect customers globally.",
            link: "/sms"
        },
        {
            title: "Email",
            image: email,
            desc: "Enhance email outreach with templates, AMP, stats, SMTP/API and validation for effective customer engagement.",
            link: "/email"
        },
        {
            title: "WhatsApp",
            image: whatsapp,
            desc: "Improve interaction on WhatsApp with two-way communication, analytics and template management.",
            link: "/whatsapp"
        },
        {
            title: "Voice",
            image: voice,
            desc: "Enhance customer engagement with real-time calls, IVR, bulk voice messaging and monitoring.",
            link: "/voice"
        },
        {
            title: "RCS",
            image: rcsicon,
            desc: "RCS messaging is an integrated channel that enables businesses to engage customers through rich, immersive, two-way conversations.",
            link: "/rcs"
        },
        {
            title: "Chatbot",
            image: helloicon,
            desc: "Automate Customer Conversation with AI Chatbot",
            link: "/chatbot"
        }
    ];

    return (
        <section className="w-full py-11 bg-[#fafafa]">
            <div className="w-full px-2">

                <div className="max-w-[1400px]">
                    <h2 className="text-[38px] lg:text-[35px] font-bold text-[#111827] leading-tight">
                        Communication Channels
                    </h2>
                    <p className="text-[18px] lg:text-[22px] leading-[38px] mt-6 max-w-[1400px]">
                        Empower conversations with best-in-class communication APIs.
                        Full-featured APIs for developers and businesses to connect
                        and engage your customers globally.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
                    {channels.map((item, index) => (
                        <Link
                            key={index}
                            to={item.link}
                            className="bg-white rounded-[20px] p-6 border border-[#edf0f7] hover:border-[#748bf2]/20 hover:shadow-[0_15px_40px_rgba(116,139,242,0.08)] transition-all duration-500 hover:-translate-y-1 block no-underline"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-10 h-10 object-contain"
                            />

                            <h3 className="text-[28px] font-bold text-[#111827] mt-5">
                                {item.title}
                            </h3>

                            <p className="text-[15px] leading-[30px] text-gray-600 mt-4 min-h-[110px]">
                                {item.desc}
                            </p>

                            <span className="inline-flex items-center gap-2 mt-4 text-[15px] font-semibold text-[#111827] hover:text-[#736216] transition-all duration-300 group">
                                Learn more
                                <span className="text-[20px] group-hover:translate-x-2 transition duration-300">›</span>
                            </span>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Channels;