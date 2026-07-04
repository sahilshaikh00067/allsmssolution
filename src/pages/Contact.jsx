import React, { useState, useRef } from "react";

const whatsappNumber = "919920067649";

function sendToWhatsApp(formData) {
  const msg = `🔔 *New Meeting Request*

👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
🏢 *Company:* ${formData.company}
💬 *Message:* ${formData.message}`;

  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
}

const CHECKMARK = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="7" fill="#22c55e" opacity="0.15" />
    <path d="M4 7l2 2 4-4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function GetInTouch() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.email) return;
    sendToWhatsApp(form);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", phone: "", email: "", company: "", message: "" });
    }, 3500);
  };

  const inputStyle = (name) => ({
    width: "100%",
    background: focused === name ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
    border: `1px solid ${focused === name ? "rgba(99,135,255,0.7)" : "rgba(255,255,255,0.09)"}`,
    borderRadius: "14px",
    padding: "13px 16px",
    fontSize: "13.5px",
    color: "#f0f0f5",
    outline: "none",
    transition: "all 0.2s ease",
    letterSpacing: "0.01em",
    boxSizing: "border-box",
    fontFamily: "inherit",
  });

  return (
    <section
      style={{
        width: "100%",
        background: "white",
        padding: "40px 0",
        fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(99,135,255,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168,99,255,0.04) 0%, transparent 50%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

<div
  style={{
    width: "100%",
    maxWidth: "100%",
    margin: 0,
    padding: "0 20px",
    position: "relative",
    zIndex: 1,
  }}
>        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <span
            style={{
              display: "inline-block",
              padding: "6px 18px",
              borderRadius: "999px",
              background: "rgba(99,135,255,0.08)",
              border: "1px solid rgba(99,135,255,0.2)",
              color: "#5b7fff",
              fontSize: "11.5px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Get in Touch
          </span>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 50px)",
              fontWeight: 700,
              color: "#0d0f1a",
              margin: "0 0 14px",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            How can we help you?
          </h2>
          <p style={{ color: "#6b7280", fontSize: "16px", maxWidth: "440px", margin: "0 auto", lineHeight: 1.65 }}>
            Reach our sales or support teams, or send us a message directly on WhatsApp.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr 1fr",
            gap: "20px",
            alignItems: "stretch",
          }}
        >
          {/* ── Sales Card ── */}
          <div
            style={{
              background: "#fff",
              borderRadius: "24px",
             padding: "24px",
              border: "1px solid rgba(0,0,0,0.07)",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 2px 24px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "13px",
                background: "rgba(99,135,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#5b7fff" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7h-3V5a3 3 0 00-3-3H10a3 3 0 00-3 3v2H4a1 1 0 00-1 1v10a2 2 0 002 2h14a2 2 0 002-2V8a1 1 0 00-1-1zM9 5a1 1 0 011-1h4a1 1 0 011 1v2H9V5z" />
              </svg>
            </div>

            <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#0d0f1a", marginBottom: "6px" }}>Sales Team</h3>
            <p style={{ fontSize: "13px", color: "#9ca3af", marginBottom: "20px", lineHeight: 1.6 }}>
              Plans, pricing, and finding the right fit for your business.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Explore plans and pricing", "Find the right fit for your needs"].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: "9px", fontSize: "13.5px", color: "#374151" }}>
                  {CHECKMARK} {item}
                </li>
              ))}
            </ul>

            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href="mailto:info@allsmssolution.com"
                style={{ display: "flex", alignItems: "center", gap: "9px", fontSize: "13.5px", color: "#5b7fff", textDecoration: "none", fontWeight: 500 }}
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@allsmssolution.com
              </a>

              {[
                { num: "+91 9967007649", whatsapp: true },
                { num: "+91 7900097353", whatsapp: false },
              ].map(({ num, whatsapp }) => (
                <div key={num} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="#5b7fff" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span style={{ fontSize: "13.5px", color: "#374151", fontWeight: 500 }}>{num}</span>
                  {whatsapp && (
                    <a href={`https://wa.me/91${num.replace(/\D/g, "").slice(-10)}`} target="_blank" rel="noreferrer"
                      style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "28px", height: "28px", borderRadius: "8px", background: "rgba(37,211,102,0.12)" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#25d166">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.554 4.099 1.523 5.82L.057 23.25a.75.75 0 00.918.919l5.487-1.461A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.668-.523-5.185-1.432l-.372-.221-3.856 1.026 1.035-3.774-.241-.387A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                      </svg>
                    </a>
                  )}
                  <a href={`tel:${num.replace(/\s/g, "")}`}
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "28px", height: "28px", borderRadius: "8px", background: "rgba(99,135,255,0.1)" }}>
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#5b7fff" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ── Schedule / WhatsApp Form Card ── */}
          <div
            style={{
              background: "#0c1022",
              borderRadius: "24px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 8px 48px rgba(10,14,40,0.18)",
            }}
          >
            {/* Glow orb */}
            <div style={{
              position: "absolute", top: "-40px", right: "-40px",
              width: "180px", height: "180px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(99,135,255,0.18) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <div
              style={{
                width: "46px", height: "46px", borderRadius: "13px",
                background: "rgba(99,135,255,0.2)", display: "flex",
                alignItems: "center", justifyContent: "center", marginBottom: "22px",
              }}
            >
              {/* WhatsApp icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#25d166">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.554 4.099 1.523 5.82L.057 23.25a.75.75 0 00.918.919l5.487-1.461A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.668-.523-5.185-1.432l-.372-.221-3.856 1.026 1.035-3.774-.241-.387A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </div>

            <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#f0f0f5", marginBottom: "6px" }}>
              Schedule a Meeting
            </h3>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginBottom: "24px", lineHeight: 1.65 }}>
              Fill in your details — we'll receive them instantly on WhatsApp.
            </p>

            {sent ? (
              <div style={{
                flex: 1, display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: "12px",
                paddingBottom: "24px",
              }}>
                <div style={{
                  width: "56px", height: "56px", borderRadius: "50%",
                  background: "rgba(37,209,102,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="#25d166" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p style={{ color: "#f0f0f5", fontWeight: 600, fontSize: "15px", margin: 0 }}>Sent to WhatsApp!</p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", margin: 0, textAlign: "center" }}>
                  WhatsApp opened with your message pre-filled.
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { name: "name", placeholder: "Full Name", type: "text" },
                  { name: "phone", placeholder: "Phone Number", type: "tel" },
                  { name: "email", placeholder: "Email Address", type: "email" },
                  { name: "company", placeholder: "Company Name", type: "text" },
                ].map(({ name, placeholder, type }) => (
                  <input
                    key={name}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={form[name]}
                    onChange={handleChange}
                    onFocus={() => setFocused(name)}
                    onBlur={() => setFocused(null)}
                    style={{
                      ...inputStyle(name),
                      "::placeholder": { color: "rgba(255,255,255,0.25)" },
                    }}
                  />
                ))}
                <textarea
                  name="message"
                  placeholder="Your Message (optional)"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  style={{ ...inputStyle("message"), resize: "none" }}
                />
              </div>
            )}

            {!sent && (
              <button
                onClick={handleSubmit}
                style={{
                  marginTop: "16px",
                  width: "100%",
                  background: form.name && form.phone && form.email
                    ? "linear-gradient(135deg, #25d166 0%, #1aab52 100%)"
                    : "rgba(255,255,255,0.07)",
                  border: "none",
                  borderRadius: "14px",
                  padding: "15px 0",
                  color: form.name && form.phone && form.email ? "#fff" : "rgba(255,255,255,0.3)",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: form.name && form.phone && form.email ? "pointer" : "not-allowed",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "all 0.2s ease",
                  letterSpacing: "0.01em",
                  fontFamily: "inherit",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" opacity={form.name && form.phone && form.email ? 1 : 0.4}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.115.554 4.099 1.523 5.82L.057 23.25a.75.75 0 00.918.919l5.487-1.461A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.668-.523-5.185-1.432l-.372-.221-3.856 1.026 1.035-3.774-.241-.387A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Send Now
              </button>
            )}

            <p style={{ textAlign: "center", fontSize: "11.5px", color: "rgba(255,255,255,0.2)", marginTop: "12px", marginBottom: 0 }}>
              Opens WhatsApp with your message pre-filled
            </p>
          </div>

          {/* ── Technical Support Card ── */}
          <div
            style={{
              background: "#fff",
              borderRadius: "24px",
              padding: "24px",
              border: "1px solid rgba(0,0,0,0.07)",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 2px 24px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "13px",
                background: "rgba(168,99,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#a855f7" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
              </svg>
            </div>

            <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#0d0f1a", marginBottom: "6px" }}>Technical Support</h3>
            <p style={{ fontSize: "13px", color: "#9ca3af", marginBottom: "20px", lineHeight: 1.6 }}>
              Reliable assistance when you need it, with clear answers.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Reliable assistance when you need it", "Clear answers, fewer back-and-forths"].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: "9px", fontSize: "13.5px", color: "#374151" }}>
                  {CHECKMARK} {item}
                </li>
              ))}
            </ul>

            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href="mailto:support@allsmssolution.com"
                style={{ display: "flex", alignItems: "center", gap: "9px", fontSize: "13.5px", color: "#a855f7", textDecoration: "none", fontWeight: 500 }}
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@allsmssolution.com
              </a>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="#a855f7" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span style={{ fontSize: "13.5px", color: "#374151", fontWeight: 500 }}>+91 7977505642</span>

                <a href="https://wa.me/917977505642" target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "28px", height: "28px", borderRadius: "8px", background: "rgba(37,211,102,0.12)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#25d166">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.554 4.099 1.523 5.82L.057 23.25a.75.75 0 00.918.919l5.487-1.461A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.668-.523-5.185-1.432l-.372-.221-3.856 1.026 1.035-3.774-.241-.387A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                </a>

                <a href="tel:+917977505642"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "28px", height: "28px", borderRadius: "8px", background: "rgba(168,99,255,0.1)" }}>
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#a855f7" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>

              {/* Quick WhatsApp CTA */}
              <a
                href="https://wa.me/917977505642?text=Hi%2C%20I%20need%20technical%20support."
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  marginTop: "8px", padding: "12px 0", borderRadius: "12px",
                  background: "rgba(37,209,102,0.08)", border: "1px solid rgba(37,209,102,0.2)",
                  color: "#16a34a", textDecoration: "none", fontSize: "13.5px", fontWeight: 600,
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#16a34a">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.115.554 4.099 1.523 5.82L.057 23.25a.75.75 0 00.918.919l5.487-1.461A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.668-.523-5.185-1.432l-.372-.221-3.856 1.026 1.035-3.774-.241-.387A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Chat with Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}