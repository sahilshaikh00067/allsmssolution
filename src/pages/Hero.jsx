import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ShieldCheck, Zap, Globe2, ArrowRight } from "lucide-react";
import home1 from "../assets/Images/home1.png";

const logos = ["IVR Call", "Whatsapp Api Services", "RCS SMS", "Bulk SMS", "Voice Call", "Chatbot"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-white via-[#f8fbff] to-[#eef4ff]">
      <style>{`
        @keyframes floatY { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
        @keyframes floatY2 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(12px); } }
        @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes shimmer { 0% { transform: translateX(-120%) skewX(-15deg); } 100% { transform: translateX(220%) skewX(-15deg); } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes pulseGlow { 0%,100% { opacity: 0.35; } 50% { opacity: 0.6; } }
        .hero-float { animation: floatY 5s ease-in-out infinite; }
        .hero-float2 { animation: floatY2 6s ease-in-out infinite; }
        .hero-spin-slow { animation: spinSlow 22s linear infinite; }
        .hero-shimmer::after { content: ""; position: absolute; top: 0; left: 0; width: 40%; height: 100%; background: linear-gradient(115deg, transparent, rgba(255,255,255,0.5), transparent); animation: shimmer 3s ease-in-out infinite; }
        .hero-marquee-track { animation: marquee 22s linear infinite; }
        .hero-pulse { animation: pulseGlow 4s ease-in-out infinite; }
      `}</style>

      {/* Background Blurs */}
      <div className="absolute top-[-150px] left-[-100px] h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[120px] hero-pulse" />
      <div className="absolute bottom-[-150px] right-[-100px] h-[450px] w-[450px] rounded-full bg-indigo-500/10 blur-[120px] hero-pulse" />

      {/* Particle dots */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.35]">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#4959ab]/40"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              animation: `floatY ${4 + (i % 5)}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-[1500px] mx-auto min-h-screen px-6 lg:px-16 flex flex-col">
        <div className="grid lg:grid-cols-2 gap-12 items-center flex-1">

          {/* LEFT CONTENT */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 bg-[#eef3ff] border border-[#dbe7ff] rounded-full px-5 mt-10 py-2 mb-8 shadow-sm"
            >
              <span className="relative h-2 w-2 rounded-full bg-green-500">
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping" />
              </span>
              <span className="text-[#4959ab] text-sm font-medium tracking-wide">
                Customer Solution Platform
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-[52px] sm:text-[65px] xl:text-[82px] leading-[1.05] font-bold text-[#111827]"
            >
              Cloud{" "}
              <span className="bg-gradient-to-r from-[#4959ab] via-[#6d7cff] to-[#4959ab] bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_5s_linear_infinite]">
                Communication
              </span>{" "}
              Platform
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-[20px] lg:text-[24px] text-[#4b5563] mt-8 max-w-[700px] leading-relaxed"
            >
              Powerful APIs for WhatsApp, SMS, RCS, Email, Voice Calls,
              Authentication and Customer Engagement — all from one secure
              cloud platform.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="flex flex-wrap items-center gap-5 mt-12"
            >
              <Link to="/contact">
                <button className="hero-shimmer group relative overflow-hidden rounded-xl bg-[#111827] px-8 py-4 text-white font-medium transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_-8px_rgba(17,24,39,0.5)]">
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4959ab] to-[#6d7cff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>
              </Link>

              <Link to="/contact">
                <button className="rounded-xl border border-[#d1d5db] bg-white/80 backdrop-blur-md px-8 py-4 font-medium text-[#111827] shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#4959ab] hover:text-[#4959ab]">
                  Live Demo
                </button>
              </Link>
            </motion.div>

            {/* MINI STATS */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="flex flex-wrap gap-8 mt-14"
            >
              {[
                ["99.9%", "Uptime SLA"],
                ["25+", "Countries"],
                ["1B+", "Messages / Mo"],
              ].map(([num, label]) => (
                <div key={label}>
                  <p className="text-[26px] font-bold text-[#111827]">{num}</p>
                  <p className="text-[13px] text-[#6b7280] tracking-wide">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Glow */}
            <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]" />

            {/* Dashed rotating ring */}
            <div className="absolute h-[560px] w-[560px] rounded-full border border-dashed border-[#4959ab]/20 hero-spin-slow hidden lg:block" />

            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1200}
              scale={1.02}
              transitionSpeed={1500}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#ffffff"
              glarePosition="all"
              className="relative"
            >
              <div className="absolute inset-0 bg-sky-50 rounded-[40px] blur-2xl scale-110" />
              <img
                src={home1}
                alt="Cloud Communication Platform"
                className="relative w-full max-w-[850px] object-contain"
              />
            </Tilt>

            {/* Floating glass badge 1 */}
            <div className="hero-float absolute top-10 left-0 lg:left-[-10px] hidden sm:flex items-center gap-3 bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl px-4 py-3 shadow-xl">
              <div className="h-9 w-9 rounded-xl bg-green-500/10 flex items-center justify-center">
                <ShieldCheck size={18} className="text-green-600" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#111827] leading-none">Secure & Encrypted</p>
                <p className="text-[11px] text-[#6b7280] mt-1">ISO 27001 Certified</p>
              </div>
            </div>

            {/* Floating glass badge 2 */}
            <div className="hero-float2 absolute bottom-16 right-0 lg:right-[-10px] hidden sm:flex items-center gap-3 bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl px-4 py-3 shadow-xl">
              <div className="h-9 w-9 rounded-xl bg-[#4959ab]/10 flex items-center justify-center">
                <Zap size={18} className="text-[#4959ab]" />
              </div>
            </div>

            {/* Floating glass badge 3 */}
            <div className="hero-float absolute top-1/2 right-[-10px] lg:right-[-30px] hidden xl:flex items-center gap-3 bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl px-4 py-3 shadow-xl">
              <div className="h-9 w-9 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                <Globe2 size={18} className="text-indigo-600" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#111827] leading-none">Global Reach</p>
                <p className="text-[11px] text-[#6b7280] mt-1">25+ countries</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* TRUST LOGO MARQUEE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-full py-10 border-t border-[#e5e9f5] mt-6"
        >
          <p className="text-center text-[12px] tracking-[3px] text-[#9ca3af] uppercase mb-6">
            Our Services
          </p>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max gap-16 hero-marquee-track">
              {[...logos, ...logos].map((logo, i) => (
                <span
                  key={i}
                  className="text-[20px] font-semibold text-[#9ca3af]/80 whitespace-nowrap"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;