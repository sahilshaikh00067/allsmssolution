import React from "react";
import { Link } from "react-router-dom";

import helloone from "../assets/Images/helloone.webp";
import hellotwo from "../assets/Images/hellotwo.png";
import hellothird from "../assets/Images/hellothird.webp";
import hellofive from "../assets/Images/hellofive.webp";
import hellov1 from "../assets/Images/hellov1.mp4";
import hellosix from "../assets/Images/hellosix.webp";
import helloseven from "../assets/Images/helloseven.webp";
import helloeight from "../assets/Images/helloeight.webp";
import hellonine from "../assets/Images/hellonine.webp";
import FAQ from "./FAQ";







const HelloDown = () => {

    return (
        <>
            <section className="w-full py-20 bg-white overflow-hidden">

                <div className="w-full px-2">

                    {/* 60% CONTENT — 40% IMAGE */}
                    <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-10">

                        {/* LEFT CONTENT */}
                        <div className="mt-25">

                            {/* HEADING */}
                            <h2 className="text-[34px] lg:text-[32px] leading-tight font-bold text-[#111827] max-w-[900px]">

                                Unify Every Conversation, Empower Every Team

                            </h2>

                            {/* SUBTITLE */}
                            <h3 className="text-[20px] lg:text-[20px] font-normal text-[#111827] mt-2">

                                Seamless Multichannel Inbox for Your Business

                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-[18px] leading-[30px] text-[#374151] mt-4 max-w-[950px]">

                                Bring together all your customer conversations—across WhatsApp,
                                Email, Instagram, Facebook, Website, and more—into one easy-to-use,
                                centralized platform. No more juggling tabs, forwarding messages,
                                or letting customer inquiries slip through the cracks.

                                With Hello, your teams (from sales to customer service)
                                collaborate effortlessly, handle every sales lead, customer support
                                request, or feedback together, and never lose track of a single customer.

                            </p>

                            {/* FEATURES */}
                            <div className="mt-5 space-y-2">

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Enjoy an all-in-one message view for every channel you use and keep every conversation chatbot at your fingertips.

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Assign and prioritize conversations to the right team members with one click.

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Effortlessly search, filter, and tag communications for instant context using intelligent chatbots.

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Keep complete customer histories at your fingertips.

                                    </p>

                                </div>

                            </div>

                            {/* BUTTON */}
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 mt-3   text-[18px] font-medium text-[#1d4ed8] hover:text-[#9a6a00] transition-all duration-300"
                            >

                                Talk to Us

                                <span className="text-[28px]">

                                    ›

                                </span>

                            </Link>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[600px] rounded-[20px] overflow-hidden">

                                <img
                                    src={helloone}
                                    alt="Hello Inbox"
                                    className="w-full h-full object-cover rounded-[10px]"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="w-full py-10 bg-white overflow-hidden">

                <div className="w-full px-2">

                    {/* 45% IMAGE — 55% CONTENT */}
                    <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] items-center gap-10">

                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[620px] rounded-[20px] overflow-hidden">

                                <img
                                    src={hellotwo}
                                    alt="Hello Widget"
                                    className="w-full h-full object-cover rounded-[10px]"
                                />

                            </div>

                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="mt-10 lg:mt-20">

                            {/* HEADING */}
                            <h2 className="text-[34px] lg:text-[32px] leading-tight font-bold text-[#111827] max-w-[900px]">

                                Connect, Engage, and Convert Instantly

                            </h2>

                            {/* SUBTITLE */}
                            <h3 className="text-[20px] lg:text-[20px] font-normal text-[#111827] mt-2">

                                Chat Widget That Converts—From First Hello to Lasting Loyalty

                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-[18px] leading-[30px] text-[#374151] mt-4 max-w-[950px]">

                                Hello’s live chat widget sits right on your website,
                                becoming the instant bridge between your business and
                                curious visitors. Customers can chat, share files,
                                leave voice notes, or even switch to a voice call—
                                all without leaving your page, enabled by artificial intelligence.

                            </p>

                            {/* FEATURES */}
                            <div className="mt-5 space-y-2">

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Website visitors start a chat or call with just one click

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Escalate complex queries from chat to voice call, seamlessly with an AI Voice Agent

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Fully customizable widget to match your brand and workflow for every AI Chatbot journey

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Reduce bounce rates, capture more leads, and create memorable first impressions

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="w-full py-20 bg-white overflow-hidden">

                <div className="w-full px-2">

                    {/* 55% CONTENT — 45% IMAGE */}
                    <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-10">

                        {/* LEFT CONTENT */}
                        <div className="mt-10 lg:mt-20">

                            {/* HEADING */}
                            <h2 className="text-[34px] lg:text-[32px] leading-tight font-bold text-[#111827] max-w-[900px]">

                                Handle Even the Toughest Calls with Ease

                            </h2>

                            {/* SUBTITLE */}
                            <h3 className="text-[20px] lg:text-[20px] font-normal text-[#111827] mt-2">

                                Voice Bot and IVR Automation That Never Sleeps

                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-[18px] leading-[30px] text-[#374151] mt-4 max-w-[950px]">

                                Deliver world-class telephony and voice support.
                                With Hello’s advanced AI Voice Agent, every caller is greeted,
                                guided, and helped—without wait times or misrouted calls.

                            </p>

                            {/* FEATURES */}
                            <div className="mt-5 space-y-2">

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Multi-level menus and custom call flows direct callers to the perfect agent or department

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Play personalized greetings and collect critical information up front

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Record calls for training, compliance, or quality assurance

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Dramatically reduce hold times while maintaining a warm, branded voice experience

                                    </p>

                                </div>

                            </div>

                            {/* BUTTON */}
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 mt-4 text-[18px] font-medium text-[#1d4ed8] hover:text-[#9a6a00] transition-all duration-300"
                            >

                                Get In Action

                                <span className="text-[28px]">

                                    ›

                                </span>

                            </Link>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[600px] rounded-[20px] overflow-hidden">

                                <img
                                    src={hellothird}
                                    alt="Voice Bot and IVR"
                                    className="w-full h-full object-cover rounded-[10px]"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* video here */}
            <section className="w-full py-20 bg-white overflow-hidden">

                <div className="w-full px-2">

                    {/* 45% VIDEO — 55% CONTENT */}
                    <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] items-center gap-10">

                        {/* LEFT SIDE VIDEO */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[600px] rounded-[20px] overflow-hidden">

                                <video
                                    src={hellov1}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover rounded-[10px]"
                                />

                            </div>

                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="mt-10 lg:mt-20">

                            {/* HEADING */}
                            <h2 className="text-[34px] lg:text-[32px] leading-tight font-bold text-[#111827] max-w-[900px]">

                                Reply Smarter and Faster—Every Time

                            </h2>

                            {/* SUBTITLE */}
                            <h3 className="text-[20px] lg:text-[20px] font-normal text-[#111827] mt-2">

                                AI-Powered Smart Suggestions for Human-Like Support

                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-[18px] leading-[30px] text-[#374151] mt-4 max-w-[950px]">

                                With AI Reply, every customer interaction is elevated.
                                Agents receive instant, context-aware reply suggestions
                                that are professional, empathetic, and tailored to each chat
                                through the power of artificial intelligence capabilities.

                                This not only accelerates response times, but also ensures
                                consistent, on-brand communication, even for new team members.

                            </p>

                            {/* FEATURES */}
                            <div className="mt-5 space-y-2">

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Intelligent, ready-to-send replies at your fingertips

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Reduce typing fatigue and cut training time for new agents.

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Spots clarity issues to support agents in delivering perfect responses.

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="w-full py-20 bg-white overflow-hidden">

                <div className="w-full px-2">

                    {/* 55% CONTENT — 45% IMAGE */}
                    <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-10">

                        {/* LEFT CONTENT */}
                        <div className="mt-10 lg:mt-20">

                            {/* HEADING */}
                            <h2 className="text-[34px] lg:text-[32px] leading-tight font-bold text-[#111827] max-w-[900px]">

                                Speak Their Language—Break Barriers, Build Trust

                            </h2>

                            {/* SUBTITLE */}
                            <h3 className="text-[20px] lg:text-[20px] font-normal text-[#111827] mt-2">

                                Global Multilingual Messaging Made Simple

                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-[18px] leading-[30px] text-[#374151] mt-4 max-w-[950px]">

                                Don’t let language limit your reach. Hello’s multilingual
                                messaging breaks down borders, automatically translating
                                every customer chat in real time—letting your team reply
                                in any language, effortlessly.

                            </p>

                            {/* FEATURES */}
                            <div className="mt-5 space-y-2">

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Bi-directional translations in over 100 global and regional languages

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Customers chat, ask, and buy in their preferred language

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Your team expands internationally — no added staff or language training needed

                                    </p>

                                </div>

                            </div>

                            {/* BUTTON */}
                            <Link
                                to="/demo"
                                className="inline-flex items-center gap-2 mt-4 text-[18px] font-medium text-[#1d4ed8] hover:text-[#9a6a00] transition-all duration-300"
                            >

                                Book A Demo

                                <span className="text-[28px]">

                                    ›

                                </span>

                            </Link>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[600px] rounded-[20px] overflow-hidden">

                                <img
                                    src={hellofive}
                                    alt="Multilingual Messaging"
                                    className="w-full h-full object-cover rounded-[10px]"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="w-full py-20 bg-white overflow-hidden">

                <div className="w-full px-2">

                    {/* 45% IMAGE — 55% CONTENT */}
                    <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] items-center gap-10">

                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[600px] rounded-[20px] overflow-hidden">

                                <img
                                    src={hellosix}
                                    alt="Advanced Ticket Management"
                                    className="w-full h-full object-cover rounded-[10px]"
                                />

                            </div>

                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="mt-10 lg:mt-20">

                            {/* HEADING */}
                            <h2 className="text-[34px] lg:text-[32px] leading-tight font-bold text-[#111827] max-w-[900px]">

                                Keep Support Flowing, Even at Scale

                            </h2>

                            {/* SUBTITLE */}
                            <h3 className="text-[20px] lg:text-[20px] font-normal text-[#111827] mt-2">

                                Advanced Ticket Management and Effortless Automation

                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-[18px] leading-[30px] text-[#374151] mt-4 max-w-[950px]">

                                Every support ticket is more than a message—it’s a chance to impress.
                                With Hello, incoming queries are auto-sorted by urgency, topic,
                                or customer profile, ensuring the right person handles each situation.

                                Set smart rules so common issues are solved by bots;
                                complex ones are prioritized or escalated in real time
                                by your customer support automation system.

                            </p>

                            {/* FEATURES */}
                            <div className="mt-5 space-y-2">

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Route tickets by skill, department, or VIP status

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Auto-resolve repetitive issues, freeing up agent time with specialized chatbots

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Trigger escalations and actions based on custom logic

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Scale seamlessly from dozens to thousands of requests per day

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="w-full py-20 bg-white overflow-hidden">

                <div className="w-full px-2">

                    {/* 55% CONTENT — 45% IMAGE */}
                    <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-10">

                        {/* LEFT CONTENT */}
                        <div className="mt-10 lg:mt-20">

                            {/* HEADING */}
                            <h2 className="text-[34px] lg:text-[32px] leading-tight font-bold text-[#111827] max-w-[900px]">

                                Get the Full Picture, Instantly

                            </h2>

                            {/* SUBTITLE */}
                            <h3 className="text-[20px] lg:text-[20px] font-normal text-[#111827] mt-2">

                                Advanced Analytics Dashboard for Smarter Decisions

                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-[18px] leading-[30px] text-[#374151] mt-4 max-w-[950px]">

                                Unlock actionable insights into everything happening across your
                                communication channels. Hello’s analytics dashboard gives you
                                real-time stats on message volumes, agent performance,
                                ChatBot Involvement In Ticket Resolution, Peak Days Analytics,
                                Tickets Distribution By Channel, and more.

                                Visualize your entire operation with graphs and dynamic reports
                                supported by artificial intelligence.

                            </p>

                            {/* FEATURES */}
                            <div className="mt-5 space-y-2">

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Track sentiment scores, and agent productivity

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Identify issues, top performers, and growth opportunities

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Export and share actionable insights across your business

                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[600px] rounded-[20px] overflow-hidden">

                                <img
                                    src={helloseven}
                                    alt="Advanced Analytics Dashboard"
                                    className="w-full h-full object-cover rounded-[10px]"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="w-full py-20 bg-white overflow-hidden">

                <div className="w-full px-2">

                    {/* 45% IMAGE — 55% CONTENT */}
                    <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] items-center gap-10">

                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[600px] rounded-[20px] overflow-hidden">

                                <img
                                    src={helloeight}
                                    alt="AI Chatbot Solution"
                                    className="w-full h-full object-cover rounded-[10px]"
                                />

                            </div>

                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="mt-10 lg:mt-20">

                            {/* HEADING */}
                            <h2 className="text-[34px] lg:text-[32px] leading-tight font-bold text-[#111827] max-w-[900px]">

                                Automated, Always-On Support That Scales With You

                            </h2>

                            {/* SUBTITLE */}
                            <h3 className="text-[20px] lg:text-[20px] font-normal text-[#111827] mt-2">

                                No-Code AI Chatbot Solution for Every Channel

                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-[18px] leading-[30px] text-[#374151] mt-4 max-w-[950px]">

                                Empower your brand to provide instant support day or night—at scale.
                                Hello’s intuitive drag-and-drop AI chatbot maker lets anyone create
                                and launch highly-capable chatbots on WhatsApp, Instagram,
                                Facebook, your website, or more.

                                Collect leads, answer FAQs, process orders,
                                and hand off to humans when needed.

                            </p>

                            {/* FEATURES */}
                            <div className="mt-5 space-y-2">

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Visual bot builder: Create flows without coding

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Multichannel deployment in minutes

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Multilingual support and seamless escalation

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Available 24/7—delivering answers, leads, and happy customers

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="w-full py-20 bg-white overflow-hidden">

                <div className="w-full px-2">

                    {/* 55% CONTENT — 45% IMAGE */}
                    <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-10">

                        {/* LEFT CONTENT */}
                        <div className="mt-10 lg:mt-20">

                            {/* HEADING */}
                            <h2 className="text-[34px] lg:text-[32px] leading-tight font-bold text-[#111827] max-w-[900px]">

                                Resolve Complex Issues Instantly

                            </h2>

                            {/* SUBTITLE */}
                            <h3 className="text-[20px] lg:text-[20px] font-normal text-[#111827] mt-2">

                                Empower agents to solve problems in real time by taking control of your customer’s screen.

                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-[18px] leading-[30px] text-[#374151] mt-4 max-w-[950px]">

                                Instead of spending hours exchanging screenshots,
                                instructions, and explanations, agents can directly access
                                the customer’s screen (with their permission) and handle
                                the issue as if they were physically present.

                                They can navigate the interface, operate the mouse and
                                keyboard, and fix errors on the spot. This hands-on support
                                eliminates back-and-forth confusion, prevents miscommunication,
                                and significantly reduces resolution time—turning what could
                                be a long, frustrating process into a seamless one-click fix.

                            </p>

                            {/* FEATURES */}
                            <div className="mt-5 space-y-2">

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Instantly access customer screens with secure permission-based control

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Eliminate confusion caused by screenshots and lengthy explanations

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Reduce issue resolution time with real-time assistance

                                    </p>

                                </div>

                                <div className="flex items-start gap-2">

                                    <span className="text-[20px] text-[#111827]">

                                        →

                                    </span>

                                    <p className="text-[15px] leading-[24px] text-[#374151]">

                                        Deliver seamless support experiences that increase customer satisfaction

                                    </p>

                                </div>

                            </div>

                            {/* BUTTON */}
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 mt-4 text-[18px] font-medium text-[#1d4ed8] hover:text-[#9a6a00] transition-all duration-300"
                            >

                                Get Started

                                <span className="text-[28px]">

                                    ›

                                </span>

                            </Link>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[600px] rounded-[20px] overflow-hidden">

                                <img
                                    src={hellonine}
                                    alt="Remote Screen Support"
                                    className="w-full h-full object-cover rounded-[10px]"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <FAQ />





        </>
    );
};

export default HelloDown;