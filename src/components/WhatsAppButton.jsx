import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "919920067649";

  const message = encodeURIComponent(
`👋 Hello!

I visited your website and I'm interested in your services.

🌐 Lead Source: Website
📩 Please share more details.

Thank you!`
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[999] group"
    >
      {/* Premium Glow */}
      <span className="absolute -inset-4 rounded-full bg-green-500/20 blur-3xl animate-pulse"></span>

      {/* Rotating Ring */}
      <motion.span
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -inset-2 rounded-full border border-green-400/40"
      />

      {/* Floating Button */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.12,
          rotate: 8,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-700 shadow-[0_15px_45px_rgba(34,197,94,.45)] border border-white/20 backdrop-blur-xl"
      >
        <FaWhatsapp className="text-white text-3xl" />

        {/* Online Dot */}
        <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-lime-300 border-2 border-white animate-pulse"></span>
      </motion.div>

      {/* Premium Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none"
      >
        <div className="bg-black/90 backdrop-blur-xl text-white rounded-2xl px-5 py-4 shadow-2xl border border-white/10 min-w-[220px]">
          <p className="font-semibold text-base">
            💬 Chat with us
          </p>

          <p className="text-xs text-gray-300 mt-1">
            Instant WhatsApp Support
          </p>

          <div className="mt-3 text-[11px] bg-green-500/15 text-green-300 px-3 py-2 rounded-lg">
            ✓ Website Lead will be detected automatically
          </div>
        </div>
      </motion.div>
    </a>
  );
}