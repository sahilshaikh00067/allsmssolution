import React, { useState } from "react";

const whatsappNumber = "919920067649";

function sendToWhatsApp(formData) {
  const msg = `🚀 *NEW WEBSITE LEAD*

━━━━━━━━━━━━━━━━━━━━━━
🌐 *Lead Source:* Website
📩 *New Meeting Request*
━━━━━━━━━━━━━━━━━━━━━━

👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
🏢 *Company:* ${formData.company}

💬 *Requirement:*
${formData.message}

━━━━━━━━━━━━━━━━━━━━━━
⏰ *Submitted On:*
${new Date().toLocaleString("en-IN")}

✅ *Please contact this customer as soon as possible.*
━━━━━━━━━━━━━━━━━━━━━━`;

  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
}

const CHECKMARK = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="7" fill="#22c55e" opacity="0.15" />
    <path d="M4 7l2 2 4-4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WA_ICON_PATH = (
  <>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.554 4.099 1.523 5.82L.057 23.25a.75.75 0 00.918.919l5.487-1.461A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.668-.523-5.185-1.432l-.372-.221-3.856 1.026 1.035-3.774-.241-.387A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </>
);

const PHONE_ICON_PATH = (
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
);

const MAIL_ICON_PATH = (
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
);

const RESPONSIVE_CSS = `
.gt-section { width: 100%; background: #ffffff; padding: clamp(48px, 8vw, 88px) 0; font-family: 'Inter','SF Pro Display',-apple-system,sans-serif; box-sizing: border-box; position: relative; overflow: hidden; }
.gt-bgtexture { position: absolute; inset: 0; background-image: radial-gradient(circle at 20% 50%, rgba(99,135,255,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168,99,255,0.05) 0%, transparent 50%); pointer-events: none; z-index: 0; }
.gt-wrap { width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 1; box-sizing: border-box; }
.gt-header { text-align: center; margin-bottom: clamp(28px, 5vw, 44px); }
.gt-eyebrow { display: inline-block; padding: 6px 18px; border-radius: 999px; background: rgba(99,135,255,0.08); border: 1px solid rgba(99,135,255,0.2); color: #5b7fff; font-size: 11.5px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 20px; }
.gt-title { font-size: clamp(28px, 5vw, 50px); font-weight: 700; color: #0d0f1a; margin: 0 0 14px; letter-spacing: -0.03em; line-height: 1.1; }
.gt-sub { color: #6b7280; font-size: clamp(14px, 2vw, 16px); max-width: 460px; margin: 0 auto; line-height: 1.65; }

.gt-grid { display: grid; grid-template-columns: 1fr 1.25fr 1fr; gap: 22px; align-items: stretch; }
@media (max-width: 1024px) {
  .gt-grid { grid-template-columns: 1fr 1fr; }
  .gt-card-form { grid-column: 1 / -1; }
}
@media (max-width: 720px) {
  .gt-grid { grid-template-columns: 1fr; gap: 18px; }
  .gt-wrap { padding: 0 18px; }
}

.gt-card { background: #fff; border-radius: 24px; padding: clamp(20px, 3vw, 26px); border: 1px solid rgba(0,0,0,0.07); display: flex; flex-direction: column; box-shadow: 0 2px 24px rgba(0,0,0,0.04); transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease; }
.gt-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(13,15,26,0.09); border-color: rgba(0,0,0,0.1); }

.gt-icon-box { width: 46px; height: 46px; border-radius: 13px; display: flex; align-items: center; justify-content: center; margin-bottom: clamp(18px, 3vw, 24px); }
.gt-card-title { font-size: 17px; font-weight: 700; color: #0d0f1a; margin-bottom: 6px; }
.gt-card-desc { font-size: 13px; color: #9ca3af; margin-bottom: 20px; line-height: 1.6; }
.gt-list { list-style: none; padding: 0; margin: 0 0 24px; display: flex; flex-direction: column; gap: 10px; }
.gt-list li { display: flex; align-items: center; gap: 9px; font-size: 13.5px; color: #374151; }

.gt-mail-link { display: flex; align-items: center; gap: 9px; font-size: 13.5px; text-decoration: none; font-weight: 500; transition: opacity 0.2s ease; }
.gt-mail-link:hover { opacity: 0.75; }
.gt-phone-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.gt-phone-num { font-size: 13.5px; color: #374151; font-weight: 500; }
.gt-round-btn { display: flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 9px; transition: transform 0.2s ease, filter 0.2s ease; }
.gt-round-btn:hover { transform: scale(1.08); filter: brightness(1.05); }

.gt-chat-cta { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 8px; padding: 12px 0; border-radius: 12px; background: rgba(37,209,102,0.08); border: 1px solid rgba(37,209,102,0.2); color: #16a34a; text-decoration: none; font-size: 13.5px; font-weight: 600; transition: background 0.2s ease, transform 0.2s ease; }
.gt-chat-cta:hover { background: rgba(37,209,102,0.14); transform: translateY(-2px); }

.gt-form-card { background: linear-gradient(155deg, #0c1022 0%, #0a0d1c 100%); border-radius: 24px; padding: clamp(20px, 3vw, 26px); display: flex; flex-direction: column; position: relative; overflow: hidden; box-shadow: 0 8px 48px rgba(10,14,40,0.18); border: 1px solid rgba(99,135,255,0.12); }
.gt-glow { position: absolute; top: -40px; right: -40px; width: 180px; height: 180px; border-radius: 50%; background: radial-gradient(circle, rgba(99,135,255,0.2) 0%, transparent 70%); pointer-events: none; }
.gt-glow2 { position: absolute; bottom: -60px; left: -60px; width: 200px; height: 200px; border-radius: 50%; background: radial-gradient(circle, rgba(37,209,102,0.1) 0%, transparent 70%); pointer-events: none; }

.gt-form-icon { width: 46px; height: 46px; border-radius: 13px; background: rgba(99,135,255,0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 22px; position: relative; z-index: 1; }
.gt-form-title { font-size: 17px; font-weight: 700; color: #f0f0f5; margin-bottom: 6px; position: relative; z-index: 1; }
.gt-form-desc { font-size: 13px; color: rgba(255,255,255,0.42); margin-bottom: 22px; line-height: 1.65; position: relative; z-index: 1; }

.gt-fields { display: flex; flex-direction: column; gap: 10px; position: relative; z-index: 1; }
.gt-input { width: 100%; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09); border-radius: 14px; padding: 13px 16px; font-size: 13.5px; color: #f0f0f5; outline: none; transition: all 0.2s ease; letter-spacing: 0.01em; box-sizing: border-box; font-family: inherit; }
.gt-input::placeholder { color: rgba(255,255,255,0.28); }
.gt-input:focus { background: rgba(255,255,255,0.08); border-color: rgba(99,135,255,0.7); box-shadow: 0 0 0 3px rgba(99,135,255,0.12); }
.gt-textarea { resize: none; }

.gt-submit { margin-top: 16px; width: 100%; border: none; border-radius: 14px; padding: 15px 0; font-size: 14px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s ease; letter-spacing: 0.01em; font-family: inherit; position: relative; z-index: 1; }
.gt-submit.active { background: linear-gradient(135deg, #25d166 0%, #1aab52 100%); color: #fff; cursor: pointer; box-shadow: 0 8px 24px rgba(37,209,102,0.28); }
.gt-submit.active:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(37,209,102,0.36); }
.gt-submit.disabled { background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.3); cursor: not-allowed; }
.gt-form-note { text-align: center; font-size: 11.5px; color: rgba(255,255,255,0.2); margin-top: 12px; margin-bottom: 0; position: relative; z-index: 1; }

.gt-success { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; padding-bottom: 24px; position: relative; z-index: 1; animation: gt-pop 0.4s ease; }
@keyframes gt-pop { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
.gt-success-icon { width: 56px; height: 56px; border-radius: 50%; background: rgba(37,209,102,0.15); display: flex; align-items: center; justify-content: center; }
.gt-success-title { color: #f0f0f5; font-weight: 600; font-size: 15px; margin: 0; }
.gt-success-sub { color: rgba(255,255,255,0.42); font-size: 13px; margin: 0; text-align: center; }

@media (max-width: 480px) {
  .gt-card, .gt-form-card { border-radius: 18px; }
  .gt-title { letter-spacing: -0.02em; }
}
`;

export default function GetInTouch() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

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

  const canSubmit = form.name && form.phone && form.email;

  return (
    <section className="gt-section">
      <style>{RESPONSIVE_CSS}</style>
      <div className="gt-bgtexture" />

      <div className="gt-wrap">
        {/* Header */}
        <div className="gt-header">
          <span className="gt-eyebrow">Get in Touch</span>
          <h2 className="gt-title">How can we help you?</h2>
          <p className="gt-sub">Reach our sales or support teams, or send us a message directly on WhatsApp.</p>
        </div>

        {/* Cards Grid */}
        <div className="gt-grid">
          {/* ── Sales Card ── */}
          <div className="gt-card">
            <div className="gt-icon-box" style={{ background: "rgba(99,135,255,0.1)" }}>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#5b7fff" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7h-3V5a3 3 0 00-3-3H10a3 3 0 00-3 3v2H4a1 1 0 00-1 1v10a2 2 0 002 2h14a2 2 0 002-2V8a1 1 0 00-1-1zM9 5a1 1 0 011-1h4a1 1 0 011 1v2H9V5z" />
              </svg>
            </div>

            <h3 className="gt-card-title">Sales Team</h3>
            <p className="gt-card-desc">Plans, pricing, and finding the right fit for your business.</p>

            <ul className="gt-list">
              {["Explore plans and pricing", "Find the right fit for your needs"].map((item) => (
                <li key={item}>{CHECKMARK} {item}</li>
              ))}
            </ul>

            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="mailto:info@allsmssolution.com" className="gt-mail-link" style={{ color: "#5b7fff" }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>{MAIL_ICON_PATH}</svg>
                info@allsmssolution.com
              </a>

              {[
                { num: "+91 9967007649", whatsapp: true },
                { num: "+91 7900097353", whatsapp: false },
              ].map(({ num, whatsapp }) => (
                <div key={num} className="gt-phone-row">
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="#5b7fff" strokeWidth={2}>{PHONE_ICON_PATH}</svg>
                  <span className="gt-phone-num">{num}</span>
                  {whatsapp && (
                    <a href={`https://wa.me/91${num.replace(/\D/g, "").slice(-10)}`} target="_blank" rel="noreferrer"
                      className="gt-round-btn" style={{ background: "rgba(37,211,102,0.12)" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#25d166">{WA_ICON_PATH}</svg>
                    </a>
                  )}
                  <a href={`tel:${num.replace(/\s/g, "")}`} className="gt-round-btn" style={{ background: "rgba(99,135,255,0.1)" }}>
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#5b7fff" strokeWidth={2}>{PHONE_ICON_PATH}</svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ── Schedule / WhatsApp Form Card ── */}
          <div className="gt-card-form gt-form-card">
            <div className="gt-glow" />
            <div className="gt-glow2" />

            <div className="gt-form-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#25d166">{WA_ICON_PATH}</svg>
            </div>

            <h3 className="gt-form-title">Schedule a Meeting</h3>
            <p className="gt-form-desc">Fill in your details — we'll receive them instantly on WhatsApp.</p>

            {sent ? (
              <div className="gt-success">
                <div className="gt-success-icon">
                  <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="#25d166" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="gt-success-title">Sent to WhatsApp!</p>
                <p className="gt-success-sub">WhatsApp opened with your message pre-filled.</p>
              </div>
            ) : (
              <div className="gt-fields">
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
                    className="gt-input"
                  />
                ))}
                <textarea
                  name="message"
                  placeholder="Your Message (optional)"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  className="gt-input gt-textarea"
                />
              </div>
            )}

            {!sent && (
              <button onClick={handleSubmit} className={`gt-submit ${canSubmit ? "active" : "disabled"}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" opacity={canSubmit ? 1 : 0.4}>{WA_ICON_PATH}</svg>
                Send Now
              </button>
            )}

            <p className="gt-form-note">Opens WhatsApp with your message pre-filled</p>
          </div>

          {/* ── Technical Support Card ── */}
          <div className="gt-card">
            <div className="gt-icon-box" style={{ background: "rgba(168,99,255,0.1)" }}>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#a855f7" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
              </svg>
            </div>

            <h3 className="gt-card-title">Technical Support</h3>
            <p className="gt-card-desc">Reliable assistance when you need it, with clear answers.</p>

            <ul className="gt-list">
              {["Reliable assistance when you need it", "Clear answers, fewer back-and-forths"].map((item) => (
                <li key={item}>{CHECKMARK} {item}</li>
              ))}
            </ul>

            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="mailto:support@allsmssolution.com" className="gt-mail-link" style={{ color: "#a855f7" }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>{MAIL_ICON_PATH}</svg>
                support@allsmssolution.com
              </a>

              <div className="gt-phone-row">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="#a855f7" strokeWidth={2}>{PHONE_ICON_PATH}</svg>
                <span className="gt-phone-num">+91 7977505642</span>

                <a href="https://wa.me/917977505642" target="_blank" rel="noreferrer" className="gt-round-btn" style={{ background: "rgba(37,211,102,0.12)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#25d166">{WA_ICON_PATH}</svg>
                </a>

                <a href="tel:+917977505642" className="gt-round-btn" style={{ background: "rgba(168,99,255,0.1)" }}>
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#a855f7" strokeWidth={2}>{PHONE_ICON_PATH}</svg>
                </a>
              </div>

              <a href="https://wa.me/917977505642?text=Hi%2C%20I%20need%20technical%20support." target="_blank" rel="noreferrer" className="gt-chat-cta">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#16a34a">{WA_ICON_PATH}</svg>
                Chat with Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}