
import React from "react";
import chatbot from "../assets/Images/chatbot.mp4";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

import chatbot2 from "../assets/Images/chatbot2.webp";
import chatbot3 from "../assets/Images/chatbot3.webp";
import chatbot4 from "../assets/Images/chatbot4.webp";
import chatbot5 from "../assets/Images/chatbot5.webp";
import chatbot6 from "../assets/Images/chatbot6.jpeg";
import chatbot7 from "../assets/Images/chatbot7.webp";
import chatbot8 from "../assets/Images/chatbot8.mp4";
import chatbot9 from "../assets/Images/chatbot9.webp";
import chatbot10 from "../assets/Images/chatbot10.webp";
import CTASection from "./CTASection";




const channels = [
    {
        title: "WhatsApp",
        description:
            "Send order updates, respond to FAQs, push personalized offers, and even collect feedback—all in the chat app your customers use daily. Automation makes it easy to broadcast campaigns and enrich every engagement with two-way conversation.",
        image: chatbot2,
        bordered: true,
    },
    {
        title: "Facebook",
        description:
            "Your customers are already on Facebook, asking questions and looking for quick answers. Instead of leaving them waiting, let Hello Chatbot jump in—qualify leads, resolve product queries, share updates, and even offer personalized deals, all in one smooth conversation. Every message becomes an opportunity to connect, engage, and convert—without your team needing to stay online 24/7.",
        image: chatbot3,
        bordered: true,
    },
    {
        title: "Instagram",
        description:
            'Turn Instagram into a conversion hub with AI chatbots that instantly reply to DMs, suggest products, and resolve FAQs. Even post comments like "Price?" or "Size?" get smart replies or a quick DM follow-up—turning casual engagement into sales opportunities.',
        image: chatbot4,
        bordered: true,
    },
    {
        title: "Website Live Chat & Mobile Widget",
        description:
            "Engage visitors the moment they land on your site with an AI-powered live chat widget. Answer FAQs instantly, qualify leads, and guide users to the right product or page—turning passive browsing into active conversations, on web and mobile alike.",
        image: chatbot5,
        bordered: true,
    },
    {
        title: "Voice Calls",
        description:
            "Let your customers speak naturally with your AI Voice Agent — enabling them to book appointments, get support, or resolve complex issues over a simple phone call. No typing, no waiting — just effortless, human-like conversations that work anytime, anywhere",
        image: chatbot6,
        bordered: false,
    },
    {
        title: "Email",
        description:
            "Turn your inbox into a smarter support hub. With AI-powered automation, instantly sort, prioritize, and respond to customer queries. Send personalized offers, acknowledge tickets, and trigger follow-ups automatically—ensuring no customer email gets overlooked.",
        image: chatbot7,
        bordered: true,
    },
];

const features = [
    {
        title: "Natural Conversation",
        description:
            "Our bot understands customer intent, mood, and even complex commands, using advanced artificial intelligence.",
    },
    {
        title: "Automated Call Handling",
        description:
            "Securely collect information, route calls, verify identity, or trigger IVR logic—all without human intervention.",
    },
    {
        title: "Real-Time Responses, No Hold Music",
        description:
            "No more waiting. Customers get instant answers to queries like 'What's my order status?' or 'Schedule my appointment for Thursday at 4pm.'",
    },
    {
        title: "Personalized Service",
        description:
            "Greet callers by name, retrieve their recent orders, and continue conversations across channels seamlessly using AI chatbot features.",
    },
    {
        title: "Multilingual Recognition",
        description:
            "Speak the language your customer chooses, switching context as needed with intelligent chatbots.",
    },
];


const integrations = [
    "CRM Integrations",
    "E-commerce Platforms",
    "Payment Gateways",
    "Productivity Tools",
    "Custom Workflows",
];


const features2 = [
    {
        title: "Intuitive Visual Studio",
        description:
            "Arrange conversational flows with drag-and-drop blocks—add texts, questions, quick replies, action steps, API calls, and more, with ai chatbot support.",
    },
    {
        title: "Pre-Built Industry Templates",
        description:
            "E-commerce order flows, appointment schedulers, lead capture bots, survey bots, feedback collectors, etc.",
    },
    {
        title: "Real-Time Testing",
        description:
            "See how your AI chatbot responds in real scenarios before going live, on your preferred channel.",
    },
    {
        title: "Personalized Service",
        description:
            "Greet callers by name, retrieve their recent orders, and continue conversations across channels seamlessly using AI chatbot features.",
    },
    {
        title: "Easy Handover to Agents",
        description:
            "When needed, let your bot transfer chats seamlessly to a human teammate with all context intact",
    },
];

const features3 = [
    {
        title: "Conversational Intelligence",
        description:
            "Powered by ChatGPT and other advanced models, the bot delivers natural, human-like responses across customer queries—24/7.",
    },
    {
        title: "Media-Savvy Responses",
        description:
            "Accepts media like PDFs, images, and voice notes—understands the content, and responds meaningfully across channels.",
    },
    {
        title: "Real-Time Understanding",
        description:
            "Interprets questions as they come,With LLM-powered response generation, your bot can adapt to unexpected user questions and maintain context seamlessly.",
    },
    {
        title: "Self-Closing & Contextual Escalations",
        description:
            "Knows when to close resolved chats or hand over to a human teammate with full context, ensuring smooth transitions.",
    },
];





const Chatbot = () => {


    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(index);
    };


    return (

        <>
            <section className="w-full min-h-screen bg-white flex items-center overflow-hidden relative">
                <div className="w-full px-2 lg:px-12 py-10">

                    {/* LEFT SIDE */}
                    <div className="flex flex-col justify-center z-10">

                        {/* HEADING */}
                        <h1 className="text-[48px] font-semibold text-[#111827] max-w-[980px]">
                            Automate Customer Conversation with AI Chatbot
                        </h1>

                        {/* SUBHEADING */}
                        <p className="text-[18px] lg:text-[22px] text-[#4b5563] mt-1 max-w-[950px]">
                            Deliver human-like support on WhatsApp, Instagram, and web—without
                            the effort. Just plug, play, and personalize.
                        </p>

                        {/* BUTTON */}
                        <div className="mt-4">
                            <button className="bg-white hover:bg-[#9d8431] text-[#111827] border border-[#c99a15] px-6 py-2 rounded-[8px] text-[18px] font-normal transition-all duration-300">
                                Get Started 
                            </button>
                        </div>

                    </div>

                    {/* RIGHT SIDE - VIDEO */}
                    <div className="relative flex items-center justify-center w-full h-full min-h-[450px]">

                        {/* BG SHAPE (optional) */}
                        <div className="absolute bottom-0 z-10" />

                        {/* VIDEO */}
                        <video
                            src={chatbot}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="relative z-10 w-[100%] max-w-[1100px] object-contain"
                        />

                    </div>

                </div>
            </section>

            <section className="w-full bg-white py-6 px-2 md:px-2 lg:px-6">
                <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-start">
                    {/* Left: Heading + Accordion */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            Omnichannel Conversational AI
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                            Modern customers expect you to meet them wherever they are. With
                            MSG91 Chatbot, deploy your conversational AI assistant across
                            more platforms than ever for seamless customer service:
                        </p>

                        <div className="divide-y divide-gray-200 border-t border-gray-200">
                            {channels.map((channel, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <div key={channel.title}>
                                        <button
                                            onClick={() => handleToggle(index)}
                                            className="w-full flex items-center justify-between py-5 text-left group"
                                        >
                                            <span
                                                className={`text-lg font-semibold transition-colors duration-200 ${isActive
                                                    ? "text-[#9d8431]"
                                                    : "text-gray-900 group-hover:text-[#9d8431]"
                                                    }`}
                                            >
                                                {channel.title}
                                            </span>
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {isActive && (
                                                <motion.div
                                                    key="content"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-gray-500 text-sm md:text-base leading-relaxed pb-4">
                                                        {channel.description}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Image Preview */}
                    <div className="flex justify-center lg:justify-end">
                        <div
                            className={`relative w-full aspect-[4/3] flex items-center justify-center rounded-2xl ${channels[activeIndex].bordered
                                ? " bg-white"
                                : ""
                                }`}
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={channels[activeIndex].image}
                                    src={channels[activeIndex].image}
                                    alt={channels[activeIndex].title}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                    className="max-w-[75%] max-h-[85%] object-contain"
                                />
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-white py-6 px-2 md:px-2 lg:px-6">
                <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2  items-center">
                    {/* Left: Text content */}
                    <div>
                        <span className="text-[#9d8431] font-bold text-sm tracking-wide uppercase">
                            Voice Bot
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Conversational AI Voice Support in Real Time
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                            Empower your contact Center with a self-learning, always-on AI
                            Voice Agent.
                        </p>

                        <div className="space-y-12">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex gap-3">
                                    <ArrowRight className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Voice bot illustration */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={chatbot6}
                            alt="MSG91 Voice Bot"
                            className="w-full max-w-xl object-contain"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#f3effb] py-12 px-2 md:px-2 lg:px-5">
                <div className="max-w-4xl mx-auto">
                    {/* Top: Text content */}
                    <span className="text-[#9d8431] font-bold text-sm tracking-wide uppercase">
                        Plugins &amp; Integrations
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                        Connect Instantly—Integrate With All Your Tools
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg mb-5 leading-relaxed max-w-5xl">
                        MSG91 AI chatbot connects with CRMs like Zoho, HubSpot, and
                        Salesforce; e-commerce platforms like Shopify and WooCommerce; and
                        payment gateways like Razorpay and Stripe. It also syncs with tools
                        like Google Sheets, Slack, and Calendar. With APIs and webhooks,
                        you can link any app and automate workflows effortlessly.
                    </p>

                    <ul className="list-disc list-inside space-y-1 mb-5">
                        {integrations.map((item) => (
                            <li
                                key={item}
                                className="text-gray-900 font-medium text-base md:text-lg"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    {/* Bottom: Video */}
                    <div className="w-full bg-[#f3effb] rounded-2xl overflow-hidden flex items-center justify-center p-2">
                        <video
                            src={chatbot8}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-[420px] object-contain"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full bg-white py-6 px-2 md:px-2 lg:px-4">
                <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* Left: Heading + Flow diagram image */}
                    <div>
                        <span className="text-[#9d8431] font-bold text-sm tracking-wide uppercase">
                            Chatbot Builder
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">
                            Drag, Drop, Deploy—DIY Chatbots
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                            Unleash Your Team's Creativity—Build Bots Your Way, No Code
                            Needed
                        </p>

                        <img
                            src={chatbot9}
                            alt="Chatbot Builder Flow"
                            className="w-full max-w-md object-contain"
                        />
                    </div>

                    {/* Right: Feature list */}
                    <div className="space-y-7 lg:pt-2">
                        {features2.map((feature) => (
                            <div key={feature.title} className="flex gap-3">
                                <ArrowRight className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full bg-white py-6 px-2 md:px-2 lg:px-6">
                <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left: Heading + Features */}
                    <div>
                        <span className="text-[#9d8431] font-bold text-sm tracking-wide uppercase">
                            Agentic AI Bot
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-2">
                            Smarter Conversations with Agentic AI
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                            Let AI Do the Talking—Handle Complex Queries, Seamlessly
                        </p>

                        <div className="space-y-7">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex gap-3">
                                    <ArrowRight className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Bot builder preview image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full max-w-xl bg-[#fbf6e9] border border-[#e8dfc4] rounded-2xl p-5">
                            <img
                                src={chatbot10}
                                alt="Agentic AI Bot Preview"
                                className="w-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />

        </>
    );
};

export default Chatbot;

