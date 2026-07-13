import React from "react";
import { Link } from "react-router-dom";

import helloicon from "../assets/Images/helloicon.svg";
import campaignicon from "../assets/Images/campaignicon.svg";
import segmentoicon from "../assets/Images/segmentoicon.svg";
import otpicon from "../assets/Images/otpicon.svg";

import hello from "../assets/Images/hello.jpg";
import campaign from "../assets/Images/campaign.jpg";
import segmento from "../assets/Images/segmento.jpg";
import otp from "../assets/Images/otp.jpg";
import Channels from "./Channels";
import Stats from "./Stats";
import Carousel from "./Carousel";

const Products = () => {

    const products = [
        {
            icon: helloicon,
            tag: "CONTACT CENTER",
            title: "Hello",
            subtitle: "Empower your employees, Support your customers.",
            image: hello,
            bg: "bg-[#1e3a5f]", // deep professional navy
            link: "/hello"
        },
        {
            icon: campaignicon,
            tag: "EVENT BASED AUTOMATION",
            title: "Campaign",
            subtitle: "Boost audience engagement through smart Platform.",
            image: campaign,
            bg: "bg-[#5b3a8e]", // rich royal purple
            link: "/campaign"
        },
        {
            icon: segmentoicon,
            tag: "CUSTOMER DATA PLATFORM",
            title: "Segmento",
            subtitle: "Customer segmentation by their actions or events.",
            image: segmento,
            bg: "bg-[#0f766e]", // deep teal
            link: "/segmento"
        },
        {
            icon: otpicon,
            tag: "INSTANT SECURE VERIFICATION",
            title: "OTP",
            subtitle: "Quick and reliable multichannel OTP verification",
            image: otp,
            bg: "bg-[#1d4ed8]", // strong professional blue
            link: "/otp"
        }
    ];

    return (
        <>
            <section className="w-full py-14 bg-white">
                <div className="w-full px-1 xl:px-1">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {products.map((item, index) => (

                            <Link
                                key={index}
                                to={item.link}
                                className={`${item.bg} rounded-[10px] overflow-hidden min-h-[300px] group transition-all duration-500 hover:-translate-y-1 block`}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 h-full">

                                    {/* LEFT CONTENT */}
                                    <div className="p-8 lg:p-9 flex flex-col justify-center">

                                        <div className="mb-6">
                                            <img
                                                src={item.icon}
                                                alt={item.title}
                                                className="w-11 h-11 object-contain"
                                            />
                                        </div>

                                        <p className="text-[13px] tracking-[3px] text-white/70 font-medium uppercase">
                                            {item.tag}
                                        </p>

                                        <h2 className="text-[36px] font-bold text-white mt-4 leading-none">
                                            {item.title}
                                        </h2>

                                        <p className="text-[17px] leading-[30px] text-white/90 mt-5 max-w-[380px]">
                                            {item.subtitle}
                                        </p>

                                        <span className="flex items-center gap-2 mt-7 text-[17px] font-semibold text-white hover:text-white/70 transition-all duration-300 group">
                                            Learn more
                                            <span className="text-[22px] group-hover:translate-x-2 transition duration-300">
                                                ›
                                            </span>
                                        </span>

                                    </div>

                                    {/* RIGHT IMAGE */}
                                    <div className="relative flex items-center justify-center overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-[350px] h-[350px] object-contain group-hover:scale-105 transition-all duration-700"
                                        />
                                    </div>

                                </div>
                            </Link>

                        ))}
                    </div>

                </div>
            </section>
            <Carousel />
            <Channels />

            <Stats />
        </>
    );
};

export default Products;