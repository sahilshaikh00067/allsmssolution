import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {

    const phone = "919920067649"

    return (

        <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 group"
        >

            {/* glow background */}

            <span className="absolute inset-0 rounded-full bg-green-500 blur-2xl opacity-40 animate-pulse"></span>

            {/* outer pulse ring */}

            <span className="absolute inset-0 rounded-full border-2 border-green-400 opacity-40 animate-ping"></span>


            <motion.div

                animate={{
                    y: [0, -12, 0],
                    rotate: [0, 2, -2, 0]
                }}

                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}

                whileHover={{
                    scale: 1.15,
                    rotate: 8
                }}

                whileTap={{
                    scale: 0.92
                }}

                className="relative w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-green-400 via-green-500 to-green-600 shadow-2xl shadow-green-500/40 backdrop-blur-xl border border-white/20 cursor-pointer"
            >

                {/* icon */}

                <FaWhatsapp className="text-white text-3xl drop-shadow-lg" />

            </motion.div>


            {/* tooltip */}

            <div className="absolute right-20 top-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300">

                <div className="bg-black/80 backdrop-blur-xl text-white text-sm px-4 py-4 rounded-lg shadow-lg whitespace-nowrap border border-white/10">
                    Chat with Us
                </div>

            </div>

        </a>

    )

}