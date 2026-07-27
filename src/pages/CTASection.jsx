import React from "react";
import { Link } from "react-router-dom";
import LeadPopup from "../components/Leadpopup";
import { openDirectWhatsApp } from "../utils/whatsapp";

const CTASection = () => {

    return (

        <section className="w-full bg-[#f5f5f5] py-14">

            <div className="w-full px-3 lg:px-4">

                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

                    {/* LEFT CONTENT */}
                    <div className="max-w-[750px]">

                        <h2 className="text-[30px] lg:text-[30px] font-bold leading-tight text-[#111827]">

                            Start building your ideal customer engagement experience

                        </h2>

                    </div>

                    {/* RIGHT BUTTONS */}
                    <div className="flex flex-wrap items-center gap-5">

                        {/* CONTACT SALES */}
                        <Link
                            to="/contact"
                            className="px-4 py-2 border border-[#111827] text-[#111827] text-[18px] font-medium rounded-[6px] hover:bg-[#111827] hover:text-white transition-all duration-300"
                        >

                            Contact sales

                        </Link>

                        {/* GET STARTED — default number */}
                        <LeadPopup
                            renderTrigger={(open) => (
                                <button
                                      onClick={openDirectWhatsApp}
                                    className="px-4 py-2 bg-[#111827] text-white text-[18px] font-semibold rounded-[6px] hover:bg-[#2a3b69] transition-all duration-300"
                                >
                                    Get started
                                </button>
                            )}
                        />

                        {/* CHATBOT — custom number */}
                        <LeadPopup
                            whatsappNumber="918108378154"
                            renderTrigger={(open) => (
                                <button
                                      onClick={openDirectWhatsApp}
                                    className="px-4 py-2 border border-[#111827] text-[#111827] text-[18px] font-medium rounded-[6px] hover:bg-[#111827] hover:text-white transition-all duration-300"
                                >
                                    Chatbot
                                </button>
                            )}
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default CTASection;