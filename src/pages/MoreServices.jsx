import React from "react";
import { Link } from "react-router-dom";

import more1 from "../assets/Images/more1.svg";
import more2 from "../assets/Images/more2.svg";
import more3 from "../assets/Images/more3.svg";
import cs1 from "../assets/Images/cs1.png";
import cs2 from "../assets/Images/cs2.png";
import cs3 from "../assets/Images/cs3.png";

const MoreServices = () => {

    const successData = [
        {
            image: cs1,
            title: "Milkbasket sends regular updates to its customers by offering proactive support and recommendations",
            link: "/milkbasket",
            large: true,
        },
        {
            image: cs2,
            title: "Unacademy using omnichannel keeps its audience engaged and nurtured with personalised campaigns",
            link: "/unacademy",
        },
        {
            image: cs3,
            title: "Ixigo engages and updates its audience through multichannel communication across messaging, email and WhatsApp",
            link: "/ixigo",
        },
    ];

    const services = [
        {
            title: "URL Shortner",
            image: more1,
            heading: "Make your long URLs short",
            desc: "Automatically shortens URL and tracks your success, one click at a time. Turn your long, messy links into short, memorable branded links.",
            link: "/url-shortner"
        },
        {
            title: "KnowledgeBase App",
            image: more2,
            heading: "Manage your help docs and articles",
            desc: "Do not let your customers wait for simple solutions. Give them instant access to the self-service library of information.",
            link: "/knowledgebase"
        },
        {
            title: "File Hosting",
            image: more3,
            heading: "Simple and secured file storage",
            desc: "A central hub for online file storage, sharing and syncing. Store all your files safely using powerful, reliable and easy-to-use cloud storage.",
            link: "/contact"
        }
    ];

    return (
        <>
            <section className="w-full py-3 bg-[#fafafa]">
                <div className="w-full">

                    {/* HEADING */}
                    <div className="px-2">
                        <h2 className="text-[28px] lg:text-[32px] font-semibold text-[#111827]">
                            More services
                        </h2>
                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-4">
                        {services.map((item, index) => (

                            <Link
                                key={index}
                                to={item.link}
                                className="bg-gray-100 p-6 rounded-[10px] transition-all duration-500 hover:bg-[#fcfcfc] hover:shadow-lg block"
                            >
                                {/* TOP TITLE */}
                                <div className="flex items-center gap-3">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-10 h-10 object-contain"
                                    />
                                    <h3 className="text-[20px] lg:text-[22px] font-semibold text-[#111827]">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* MAIN IMAGE */}
                                <div className="mt-6">
                                    <img
                                        src={item.image}
                                        alt={item.heading}
                                        className="w-full h-[250px] object-contain"
                                    />
                                </div>

                                {/* HEADING */}
                                <h2 className="text-[24px] font-bold text-[#111827] mt-5 leading-tight">
                                    {item.heading}
                                </h2>

                                {/* DESC */}
                                <p className="text-[15px] leading-[28px] text-gray-600 mt-4 min-h-[100px]">
                                    {item.desc}
                                </p>

                                {/* LEARN MORE */}
                                <span className="inline-flex items-center gap-2 mt-4 text-[15px] font-semibold text-[#111827] hover:text-[#736216] transition-all duration-300 group">
                                    Learn more
                                    <span className="text-[20px] group-hover:translate-x-1 transition duration-300">›</span>
                                </span>

                            </Link>

                        ))}
                    </div>

                </div>
            </section>

            <section className="w-full bg-[#f5f5f5] py-12 mt-17">
                <div className="w-full px-2">

                    {/* HEADING */}
                    <h2 className="text-[28px] lg:text-[40px] font-bold text-[#111827] mb-10">
                        Customer Success Powered by All SMS Solution
                    </h2>

                    {/* MAIN GRID */}
                    <div className="grid grid-cols-1 xl:grid-cols-[48%_50%] gap-8">

                        {/* LEFT BIG CARD */}
                        <Link
                            to={successData[0].link}
                            className="bg-[#fafafa] rounded-[12px] overflow-hidden block"
                        >
                            <img
                                src={successData[0].image}
                                alt="Milkbasket"
                                className="w-full h-[380px] object-cover"
                            />
                            <div className="p-8">
                                <h3 className="text-[22px] leading-[38px] text-[#111827]">
                                    {successData[0].title}
                                </h3>
                                <span className="inline-flex items-center gap-2 mt-5 font-semibold text-[18px] text-[#111827] hover:text-[#736216] transition-all duration-300 group">
                                    Learn more
                                    <span className="text-[24px] group-hover:translate-x-1 transition duration-300">›</span>
                                </span>
                            </div>
                        </Link>

                        {/* RIGHT SIDE CARDS */}
                        <div className="flex flex-col gap-8">
                            {successData.slice(1).map((item, index) => (

                                <Link
                                    key={index}
                                    to={item.link}
                                    className="bg-[#fafafa] rounded-[12px] overflow-hidden flex flex-col md:flex-row block"
                                >
                                    {/* IMAGE */}
                                    <div className="md:w-[42%]">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* CONTENT */}
                                    <div className="md:w-[58%] p-8 flex flex-col justify-center">
                                        <h3 className="text-[20px] leading-[38px] text-[#111827]">
                                            {item.title}
                                        </h3>
                                        <span className="inline-flex items-center font-semibold gap-2 mt-5 text-[18px] text-[#111827] hover:text-[#736216] transition-all duration-300 group">
                                            Learn more
                                            <span className="text-[24px] group-hover:translate-x-1 transition duration-300">›</span>
                                        </span>
                                    </div>
                                </Link>

                            ))}
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default MoreServices;