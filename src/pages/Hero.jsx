import React from "react";
import { Link } from "react-router-dom";
import home1 from "../assets/Images/home1.jpeg";

const Hero = () => {
  return (
    <>
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-white via-[#f8fbff] to-[#eef4ff]">
      
      {/* Background Blur */}
      <div className="absolute top-[-150px] left-[-100px] h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-[-150px] right-[-100px] h-[450px] w-[450px] rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="relative max-w-[1500px] mx-auto min-h-screen px-6 lg:px-16">

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">

          {/* LEFT CONTENT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-[#eef3ff] border border-[#dbe7ff] rounded-full px-5 mt-10 py-2 mb-8">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-[#4959ab] text-sm font-medium tracking-wide">
                Customer Solution Platform
              </span>
            </div>

            <h1 className="text-[52px] sm:text-[65px] xl:text-[82px] leading-[1.05] font-bold text-[#111827]">
Cloud Communication Platform

            </h1>

            <p className="text-[20px] lg:text-[24px] text-[#4b5563] mt-8 max-w-[700px] leading-relaxed">
              Powerful APIs for WhatsApp, SMS, RCS, Email, Voice Calls,
              Authentication and Customer Engagement — all from one secure
              cloud platform.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center gap-5 mt-12">

              <Link to="/contact">
                <button className="group relative overflow-hidden rounded-xl bg-[#111827] px-8 py-4 text-white font-medium transition-all duration-300 hover:scale-105">
                  <span className="relative z-10">
                    Get Started
                  </span>

                  <div className="absolute inset-0 bg-gradient-to-r from-[#4959ab] to-[#6d7cff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>
              </Link>

              <Link to="/contact">
                <button className="rounded-xl border border-[#d1d5db] bg-white/80 backdrop-blur-md px-8 py-4 font-medium text-[#111827] shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#4959ab] hover:text-[#4959ab]">
                  Live Demo
                </button>
              </Link>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center items-center">

            {/* Glow */}
            <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="relative">

              <div className="absolute inset-0 bg-gradient-to-r from-[#4959ab]/15 to-blue-500/15 rounded-[40px] blur-3xl scale-110"></div>

              <img
                src={home1}
                alt="Cloud Communication Platform"
                className=" w-full max-w-[850px] object-contain"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
    </>
  );
};

export default Hero;