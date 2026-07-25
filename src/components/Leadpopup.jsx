import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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

    const whatsappNumber = "919920067649"; // receives form submissions
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="w-full max-w-lg bg-[#0f0f1a] border border-white/10 rounded-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition"
              >
                <X size={22} />
              </button>

              <h2 className="text-2xl font-bold text-white mb-1">
                Let's Get Started
              </h2>
              <p className="text-white/50 text-sm mb-6">
                Fill in your details and we'll reach out shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition"
                  required
                />

                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={form.companyName}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition"
                  required
                />

                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition"
                />

                <input
                  type="text"
                  name="businessType"
                  placeholder="Business Type"
                  value={form.businessType}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition"
                />

                <div>
                  <p className="text-white/70 text-sm mb-2">
                    Services you're interested in:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map((service) => {
                      const active = form.services.includes(service);
                      return (
                        <button
                          type="button"
                          key={service}
                          onClick={() => toggleService(service)}
                          className={`px-3 py-2 rounded-lg text-sm border transition ${
                            active
                              ? "bg-indigo-600 border-indigo-600 text-white"
                              : "bg-white/5 border-white/10 text-white/60 hover:border-white/30"
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
                >
                  Submit via WhatsApp
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}