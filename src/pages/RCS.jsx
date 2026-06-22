import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import rcsicon from "../assets/Images/rcsicon.svg";
import CTASection from "./CTASection";
import rcs3 from "../assets/Images/rcs3.svg";
import rcs4 from "../assets/Images/rcs4.svg";
import rcs7 from "../assets/Images/rcs7.svg";
import rcs8 from "../assets/Images/rcs8.svg";
import rcs9 from "../assets/Images/rcs9.png";



const codeSamples = {
    python: `import requests

headers = {
    'authkey': '<authkey>',
    'accept': 'application/json',
    'content-type': 'application/json',
}

json_data = {
    'customer_numbers': [
        '918818888761',
        '918818888763',
    ],
    'project_id': '{{project_id}}',
    'function_name': 'text_message',
    'text': 'rcs test',
}

response = requests.post('https://control.msg91.com/api/v5/rcs/send-rcs-message/bulk/', headers=headers,
json=json_data)`,

    node: `import fetch from 'node-fetch';

fetch('https://control.msg91.com/api/v5/rcs/send-rcs-message/bulk/', {
  method: 'POST',
  headers: {
    'authkey': '<authkey>',
    'accept': 'application/json',
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    'customer_numbers': [
      '918818888761',
      '918818888763'
    ],
    'project_id': '{{project_id}}',
    'function_name': 'text_message',
    'text': 'rcs test'
  })
});`,

    php: `<?php

$curl = curl_init();

curl_setopt_array($curl, [
    CURLOPT_URL => "https://control.msg91.com/api/v5/rcs/send-rcs-message/bulk/",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_HTTPHEADER => [
        "authkey: <authkey>",
        "accept: application/json",
        "content-type: application/json"
    ],
    CURLOPT_POSTFIELDS => json_encode([
        "customer_numbers" => [
            "918818888761",
            "918818888763"
        ],
        "project_id" => "{{project_id}}",
        "function_name" => "text_message",
        "text" => "rcs test"
    ])
]);

$response = curl_exec($curl);
curl_close($curl);

echo $response;`,

    ruby: `require 'net/http'
require 'json'

uri = URI('https://control.msg91.com/api/v5/rcs/send-rcs-message/bulk/')
req = Net::HTTP::Post.new(uri)
req.content_type = 'application/json'
req['authkey'] = '<authkey>'
req['accept'] = 'application/json'

req.body = {
  'customer_numbers' => [
    '918818888761',
    '918818888763'
  ],
  'project_id' => '{{project_id}}',
  'function_name' => 'text_message',
  'text' => 'rcs test'
}.to_json

req_options = {
  use_ssl: uri.scheme == 'https'
}
res = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
  http.request(req)
end`,

    curl: `curl -X POST "https://control.msg91.com/api/v5/rcs/send-rcs-message/bulk/" \\
-H "authkey: <authkey>" \\
-H "accept: application/json" \\
-H "content-type: application/json" \\
-d '{"customer_numbers":["918818888761","918818888763"],"project_id":"{{project_id}}","function_name":"text_message","text":"rcs test"}'`
};

const tabs = [
    { key: "python", label: "python" },
    { key: "node", label: "node" },
    { key: "php", label: "php" },
    { key: "ruby", label: "ruby" },
    { key: "curl", label: "curl" }
];

// Very lightweight syntax highlighter (keys, strings, keywords)
const highlight = (code) => {
    return code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        // strings (single + double quoted)
        .replace(/('(?:[^'\\]|\\.)*')/g, '<span class="text-[#7ee787]">$1</span>')
        .replace(/("(?:[^"\\]|\\.)*")/g, '<span class="text-[#7ee787]">$1</span>')
        // keywords
        .replace(
            /\b(import|from|require|method|headers|body|const|let|var|return|echo|do|end|def|use_ssl|CURLOPT_[A-Z_]+)\b/g,
            '<span class="text-[#ff7b72]">$1</span>'
        )
        // numbers
        .replace(/\b(\d{6,})\b/g, '<span class="text-[#79c0ff]">$1</span>');
};

const RCS = ({
    icon = rcsicon,
    name = "RCS",
    eyebrow = "RICH COMMUNICATION SERVICES",
    heading = "Engage customers in their SMS inbox by delivering rich and interactive messages using RCS",
    description = "RCS messaging is an integrated channel that enables businesses to engage customers through rich, immersive, two-way conversations.",
    ctaLabel = "Get Started",
    ctaLink = "/signup",
    samples = codeSamples
}) => {

    const [activeTab, setActiveTab] = useState("python");
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(samples[activeTab]);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Copy failed", err);
        }
    };

    return (
        <>
            <section className="w-full bg-white py-16 px-6">
                <div className="max-w-7xl mx-auto items-start">

                    {/* LEFT CONTENT */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src={icon} alt={name} className="w-10 h-10" />
                            <span className="text-[17px] font-semibold text-[#111827]">{name}</span>
                        </div>

                        <p className="uppercase tracking-[3px] text-[#494cab] text-[18px] mb-6">

                            {eyebrow}

                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#111827] leading-tight mb-5">
                            {heading}
                        </h2>

                        <p className="text-gray-600 text-base mb-7 max-w-xl">
                            {description}
                        </p>

                        <a href={ctaLink}>
                            <button className="bg-[#111827] hover:bg-[#9e892c] transition-colors text-white px-6 py-3 rounded-md text-sm font-medium">
                                {ctaLabel}
                            </button>
                        </a>
                    </div>



                    {/* RIGHT CODE WIDGET */}
                    <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-[#1f2533] mt-10">

                        {/* TABS */}
                        <div className="flex bg-[#1c2333] text-[13px]">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`flex-1 px-4 py-3.5 font-medium transition-colors ${activeTab === tab.key
                                        ? "bg-[#0d1117] text-white"
                                        : "text-gray-400 hover:text-gray-200"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* CODE AREA */}
                        <div className="relative bg-[#0d1117]">

                            <button
                                onClick={handleCopy}
                                className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#21262d] hover:bg-[#30363d] text-gray-200 text-xs px-3 py-1.5 rounded-md transition-colors z-10"
                            >
                                {copied ? (
                                    <>
                                        <FiCheck className="text-green-400" />
                                        Copied
                                    </>
                                ) : (
                                    <>
                                        <FiCopy />
                                        Copy
                                    </>
                                )}
                            </button>

                            <pre className="text-[13px] leading-relaxed p-6 pt-16 font-mono whitespace-pre-wrap break-words">
                                <code
                                    dangerouslySetInnerHTML={{
                                        __html: highlight(samples[activeTab])
                                    }}
                                />
                            </pre>

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

Integrate RCS Messaging API into Your Business in Minutes

                            </h2>

                            {/* DESCRIPTION */}
                            <p className="text-[15px] leading-[28px] text-[#4b5563] mt-6 max-w-[750px]">



Seamlessly integrate RCS with your existing systems via our programmable API. Connect with CRM, email, social media, and SMS platforms to deliver rich messaging, automate workflows, and track campaign performance.                            </p>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[520px] rounded-[20px] overflow-hidden bg-white">

                                <img
                                    src={rcs9}
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

                    {/* HEADING */}
                    <div className="mb-5">

                        <h2 className="text-[28px] lg:text-[33px] font-bold text-[#111827] leading-tight">

                            Features of Google RCS Messages


                        </h2>

                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* CARD 1 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">

                                    Corporate Communications with Branding

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#2c3138] mt-3">

                                    Distinguish by branding Enhance your brand's visibility in the SMS inbox using a distinctive sender ID and logo. Utilize a visually appealing interface to effectively engage customers.

                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={rcs3}
                                    alt="Multi channel support"
                                    className="w-full h-[450px] object-contain"
                                />

                            </div>

                        </div>

                        {/* CARD 2 */}
                        <div className="w-full border border-gray-300 rounded-[8px] bg-white overflow-hidden">

                            {/* CONTENT */}
                            <div className="p-15">

                                <h3 className="text-[28px] font-semibold text-[#111827]">

                                    Provide Multimedia Interactions

                                </h3>

                                <p className="text-[15px] leading-[28px] text-[#282d33] mt-3">


                                    Enhance your brand communication by delivering RCS messages that build trust. Incorporate your logo, brand name, videos, images, and carousels into your messaging to increase conversions.

                                </p>

                            </div>

                            {/* IMAGE */}
                            <div className="mt-8 w-full">

                                <img
                                    src={rcs4}
                                    alt="Draggable Flow"
                                    className="w-full h-[450px] object-contain"
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

                                Boost Sales Through Interactive Conversations

                            </h2>

                            {/* DESCRIPTION */}
                            <p className="text-[15px] leading-[28px] text-[#4b5563] mt-6 max-w-[750px]">



                                Craft an engaging conversation experience with images, videos, carousels, and interactive action buttons. Stand out from competitors by sending engaging and reliable Google RCS messages that drive conversions.
                            </p>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[520px] rounded-[20px] overflow-hidden bg-white">

                                <img
                                    src={rcs7}
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

Enhanced Customer Trust

                            </h2>

                            {/* DESCRIPTION */}
                            <p className="text-[15px] leading-[28px] text-[#4b5563] mt-6 max-w-[750px]">



Understand your customer's habits Personalize your communication, and build lasting relationships that drive loyalty. Utilize verified and badged sender IDs vetted by Google for higher response rates and enhanced trust and credibility.
                            </p>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-[520px] rounded-[20px] overflow-hidden bg-white">

                                <img
                                    src={rcs8}
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
    );
};

export default RCS;