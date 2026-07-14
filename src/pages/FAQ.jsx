import React, { useState } from "react";

const FAQ = () => {

    const [openIndex, setOpenIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    const faqs = [
        {
            question: "How can All SMS Solution benefit my business?",
            answer:
                "All SMS Solution offers numerous benefits for businesses, including improved customer engagement, streamlined communication workflows, increased operational efficiency, and enhanced brand reputation. Our platform enables businesses to automate communication, personalize interactions, and reach their target audience through their preferred channels.",
        },

        {
            question: "What makes All SMS Solution different from other communication platforms?",
            answer:
                "All SMS Solution stands out due to its reliability, scalability, and versatility. We specialize in providing mobile cloud communication platforms in India, addressing the unique needs of businesses in this market. Our platform offers advanced features, customizable solutions, and exceptional customer support to help businesses achieve their communication goals.",
        },

        {
            question: "Is All SMS Solution suitable for businesses of all sizes?",
            answer:
                "Yes, All SMS Solution caters to businesses of all sizes. Whether you're a startup, small business, or large enterprise, our platform can be tailored to meet your specific requirements. We offer scalable solutions that can accommodate the communication needs of businesses as they grow and expand.",
        },

        {
            question: "Is All SMS Solution secure?",
            answer:
                "Security is a top priority at All SMS Solution. We implement segmento-standard protocols and encryption techniques to ensure the confidentiality and integrity of your data. Our enterprise cloud communications platform offers features like two-factor authentication and OTP verification to enhance security and protect sensitive information.",
        },

        {
            question: "Can I integrate All SMS Solution with my existing systems or applications?",
            answer:
                "Absolutely! All SMS Solution provides developer-friendly APIs and documentation, making it easy to integrate our platform with your existing systems or applications. Our APIs allow you to incorporate our communication functionalities seamlessly, enabling you to automate communication and streamline your workflows.",
        },
    ];

    return (

        <section className="w-full bg-[#f7f7f7] py-14">

            <div className="w-full px-2 lg:px-4">

                {/* HEADING */}
                <h2 className="text-[32px] lg:text-[30px] font-bold text-[#111827] mb-4">

                    Frequently Asked Questions

                </h2>

                {/* FAQ */}
                <div className="space-y-4">

                    {
                        faqs.map((item, index) => (

                            <div
                                key={index}
                                className="bg-white rounded-[4px] overflow-hidden"
                            >

                                {/* QUESTION */}
                                <button
                                    onClick={() =>
                                        setOpenIndex(openIndex === index ? null : index)
                                    }
                                    className={`w-full flex items-center justify-between text-left px-6 py-4 transition-all duration-300 ${openIndex === index
                                            ? "bg-[#dbe8f6]"
                                            : "bg-white"
                                        }`}
                                >

                                    <h3 className="text-[20px] lg:text-[20px] font-semibold text-[#111827]">

                                        {item.question}

                                    </h3>

                                    <span className="text-[28px] font-light text-[#111827]">

                                        {openIndex === index ? "−" : "+"}

                                    </span>

                                </button>

                                {/* ANSWER */}
                                <div
                                    className={`transition-all duration-500 overflow-hidden ${openIndex === index
                                            ? "max-h-[500px] opacity-100"
                                            : "max-h-0 opacity-0"
                                        }`}
                                >

                                    <div className="px-6 pb-6 pt-2">

                                        <p className="text-[18px] leading-[38px] text-[#374151]">

                                            {item.answer}

                                        </p>

                                    </div>

                                </div>

                            </div>

                        ))
                    }

                </div>

                {/* READ MORE SECTION */}
                <div className="mt-14">

                    <h2 className="text-[25px] lg:text-[28px] font-bold text-[#111827] leading-tight">

                        Welcome to All SMS Solution: Your Trusted Cloud Communication Platform as a Service

                    </h2>

                    <p className="text-[16px] leading-[30px] text-[#374151] mt-4">

                        Are you searching for a reliable and versatile cloud communication platform as a service? Look no further! At All SMS Solution, we specialize in providing top-notch mobile cloud communication platforms in India. Whether you're a startup, small business, or a large enterprise, we have the perfect solution to enhance your business communication.

                    </p>

                    {/* READ MORE BUTTON */}
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="mt-2 inline-flex items-center gap-1 text-[16px] font-semibold text-[#111827] hover:text-[#736216] transition-all duration-300"
                    >

                        {showMore ? "Read less" : "Read more"}

                        <span className="text-[18px]">
                            {showMore ? "−" : "+"}
                        </span>

                    </button>

                    {/* EXTRA CONTENT */}
                    {
                        showMore && (

                            <div className="mt-8 space-y-8">

                                <p className="text-[16px] leading-[30px] text-[#374151]">

                                    Our cloud based communication platform in India is designed to address the unique needs of Indian businesses. With multiple communication channels like SMS, voice, email, and instant messaging, shorturl and many more so that you can reach your audience through their preferred mode of communication.

                                </p>

                                <p className="text-[16px] leading-[30px] text-[#374151]">

                                    We understand that businesses come in different sizes, so our scalable and customizable solutions can adapt to your evolving needs. Plus, our dedicated support team is available to assist you every step of the way.

                                </p>

                                <p className="text-[16px] leading-[30px] text-[#374151]">

                                    Experience the difference with All SMS Solution. Join us today and unlock the full potential with our best business communication platforms for your business in India.

                                </p>

                                <h3 className="text-[24px] font-bold text-[#111827]">

                                    Cloud Communication - All You Need to Know

                                </h3>

                                <p className="text-[16px] leading-[30px] text-[#374151]">

                                    Cloud communication refers to using cloud-based technologies such as cloud communication software to facilitate communication processes and services. Instead of relying on traditional on-premises hardware and infrastructure, cloud communication leverages the internet and cloud computing's power to enable seamless and flexible communication.

                                </p>

                                <h3 className="text-[24px] font-bold text-[#111827]">

                                    What All SMS Solution Offers to the World?

                                </h3>

                                <p className="text-[16px] leading-[30px] text-[#374151]">

                                    We offer a comprehensive cloud communication platform as a service (CPaaS) that empowers businesses to seamlessly integrate communication functionalities into their applications, systems, or processes.

                                </p>

                                <p className="text-[16px] leading-[30px] text-[#374151]">

                                    Our platform provides communication channels including SMS, voice, email, instant messaging, OTP verification, and personalized messaging to improve engagement and security.

                                </p>

                                <h3 className="text-[26px] font-bold text-[#111827]">

                                    Experience the Difference with All SMS Solution

                                </h3>

                                <p className="text-[16px] leading-[30px] text-[#374151]">

                                    Reliability, scalability, developer-friendly APIs, and excellent customer support are at the core of All SMS Solution. Our infrastructure ensures smooth and uninterrupted communication for businesses of every size.

                                </p>

                                <h3 className="text-[26px] font-bold text-[#111827]">

                                    Our Vision Statement

                                </h3>

                                <p className="text-[16px] leading-[30px] text-[#374151]">

                                    At All SMS Solution, our vision is to revolutionize business communication by seamlessly connecting organizations with their customers, employees, and stakeholders through innovative cloud communication technologies.

                                </p>
                                <button
                                    onClick={() => setShowMore(!showMore)}
                                    className="mt-2 inline-flex items-center gap-1 text-[15px] font-semibold text-[#111827] hover:text-[#736216] transition-all duration-300"
                                >

                                    {showMore ? "Read less" : "Read more"}

                                    <span className="text-[19px]">
                                        {showMore ? "−" : "+"}
                                    </span>

                                </button>

                            </div>


                        )
                    }

                </div>

            </div>

        </section>
    );
};

export default FAQ;