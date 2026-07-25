import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Building2, Mail, MapPin, Briefcase, Sparkles, ArrowRight } from "lucide-react";

const SERVICES = [
  "Bulk SMS",
  "Voice Call",
  "RCS Message",
  "WhatsApp API",
  "Chatbot System",
];

export default function LeadPopup({ buttonText = "", renderTrigger }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    address: "",
    businessType: "",
    services: [],
  });

  const toggleService = (service) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.fullName || !form.email) {
      alert("Please fill Full Name and Email.");
      return;
    }

    const message = `New Inquiry:%0A
Full Name: ${form.fullName}%0A
Company: ${form.companyName}%0A
Email: ${form.email}%0A
Address: ${form.address}%0A
Business Type: ${form.businessType}%0A
Services: ${form.services.join(", ")}`;

    const whatsappNumber = "919920067649";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

    setOpen(false);
    setForm({
      fullName: "",
      companyName: "",
      email: "",
      address: "",
      businessType: "",
      services: [],
    });
  };

  const fields = [
    { name: "fullName", placeholder: "Full Name", icon: User, type: "text", required: true },
    { name: "companyName", placeholder: "Company Name", icon: Building2, type: "text" },
    { name: "email", placeholder: "Email ID", icon: Mail, type: "email", required: true },
    { name: "address", placeholder: "Address", icon: MapPin, type: "text" },
    { name: "businessType", placeholder: "Business Type", icon: Briefcase, type: "text" },
  ];

  return (
    <>
      {renderTrigger ? (
        renderTrigger(() => setOpen(true))
      ) : (
        <button>

        </button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center px-4"
            style={{ perspective: 1200 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            {/* backdrop */}
            <motion.div
              className="absolute inset-0 bg-[#050a14]/85 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* ambient glows */}
            <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#efc84a]/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#1a2f6e]/40 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, opacity: 0, rotateX: 12, y: 40 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, rotateX: 8, y: 30 }}
              transition={{ type: "spring", damping: 18, stiffness: 260 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full max-w-lg rounded-[24px] p-[1.5px] bg-gradient-to-br from-[#efc84a] via-[#c99a15]/40 to-[#1a2f6e] shadow-[0_25px_80px_-15px_rgba(0,0,0,0.9)]"
            >
              <div className="relative rounded-[22px] bg-gradient-to-b from-[#0d1526] to-[#080d18] p-5 sm:p-6 max-h-[85vh] overflow-y-auto">

                {/* subtle top shine */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#efc84a]/60 to-transparent" />

                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-[#111827] hover:bg-[#efc84a] hover:border-[#efc84a] hover:rotate-90 transition-all duration-300"
                >
                  <X size={16} />
                </button>

                <div className="flex items-center gap-2 mb-1">
                  <Sparkles size={16} className="text-[#efc84a]" />
                  <span className="text-[11px] tracking-[3px] uppercase text-[#efc84a] font-semibold">
                    All SMS Solution Enquiry
                  </span>
                </div>

                <h2 className="text-[22px] font-bold text-white mb-0.5 tracking-tight">
                  Let's Get Started
                </h2>
                <p className="text-white/40 text-[13px] mb-4">
                  Fill in your details and our team will reach out shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-2.5">
                  {fields.map(({ name, placeholder, icon: Icon, type, required }, i) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i }}
                      className="relative group"
                    >
                      <Icon
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-[#efc84a] transition-colors"
                      />
                      <input
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        value={form[name]}
                        onChange={handleChange}
                        required={required}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-[14px] text-white placeholder-white/30 focus:outline-none focus:border-[#efc84a]/70 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(239,200,74,0.12)] transition-all duration-300"
                      />
                    </motion.div>
                  ))}

                  <div>
                    <p className="text-white/50 text-[12px] mb-2 tracking-wide">
                      Services you're interested in
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {SERVICES.map((service) => {
                        const active = form.services.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`px-3 py-1.5 rounded-lg text-[12px] font-medium border transition-all duration-300 ${
                              active
                                ? "bg-gradient-to-r from-[#efc84a] to-[#c99a15] border-[#efc84a] text-[#111827] shadow-[0_4px_16px_-4px_rgba(239,200,74,0.6)] scale-105"
                                : "bg-white/[0.03] border-white/10 text-white/50 hover:border-[#efc84a]/40 hover:text-white/80"
                            }`}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full py-2.5 mt-1 rounded-xl bg-gradient-to-r from-[#c99a15] via-[#efc84a] to-[#c99a15] bg-[length:200%_100%] text-[#111827] font-bold text-[14px] overflow-hidden shadow-[0_10px_35px_-8px_rgba(239,200,74,0.6)] hover:bg-[position:100%_0] transition-all duration-500"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Submit via WhatsApp
                      <ArrowRight size={16} />
                    </span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}