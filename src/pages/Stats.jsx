import React, { useEffect, useState } from "react";

const Stats = () => {

    const stats = [
        {
            number: 10,
            suffix: "Million+",
            title: "API calls",
            subtitle: "per month"
        },

        {
            number: 90,
            suffix: "Million+",
            title: "SMS sent",
            subtitle: "per month"
        },

        {
            number: 30
,            suffix: "Million+",
            title: "OTP sent",
            subtitle: "per month"
        },

        {
            number: 5,
            suffix: "Million+",
            title: "Email sent",
            subtitle: "per month"
        }
    ];

    const Counter = ({ end }) => {

        const [count, setCount] = useState(0);

        useEffect(() => {

            let start = 0;

            const duration = 2500;

            const increment = end / (duration / 16);

            const timer = setInterval(() => {

                start += increment;

                if (start >= end) {
                    start = end;
                    clearInterval(timer);
                }

                setCount(start);

            }, 16);

            return () => clearInterval(timer);

        }, [end]);

        return (
            <>
                {count.toFixed(end % 1 !== 0 ? 1 : 0)}
            </>
        );
    };

    return (

        <section className="w-full py-20 bg-[#fafafa]">

            <div className="w-full">

                {/* MAIN BOX */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-y border-[#e5e7eb] bg-white">

                    {
                        stats.map((item, index) => (

                            <div
                                key={index}
                                className={`relative bg-white p-10 xl:p-14 transition-all duration-500 hover:bg-[#fcfcfc] group ${index !== stats.length - 1
                                        ? "border-b xl:border-b-0"
                                        : ""
                                    }`}
                            >

                                {/* TOP LINE */}
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#736216] scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500"></div>

                                {/* NUMBER */}
                                <h2 className="text-[42px] lg:text-[52px] font-bold text-[#111827] leading-none tracking-tight">

                                    <span className="inline-block group-hover:scale-105 transition duration-500">

                                        <Counter end={item.number} />

                                    </span>

                                    <span className="text-[#736216] ml-2 text-[35px]">
                                        {item.suffix}
                                    </span>

                                </h2>

                                {/* TITLE */}
                                <h3 className="text-[24px] font-semibold text-[#111827] mt-7">

                                    {item.title}

                                </h3>

                                {/* SUBTITLE */}
                                <p className="text-[16px] text-gray-500 mt-3 tracking-wide">

                                    {item.subtitle}

                                </p>

                            </div>

                        ))
                    }

                </div>

            </div>

        </section>
    );
};

export default Stats;