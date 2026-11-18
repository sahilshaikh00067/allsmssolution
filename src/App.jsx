
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { Routes, Route } from "react-router-dom";

import Hello from "./pages/Hello";
import Campaign from "./pages/Campaign";
import Otp from "./pages/Otp";
import Sms from "./pages/Sms";
import ScrollToTop from "./components/ScrollToTop";
import Whatsapp from "./pages/Whatsapp";
import Email from "./pages/Email";
import Voice from "./pages/Voice";
import RCS from "./pages/RCS";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import WhatsAppButton from "./components/WhatsAppButton";
import Chatbot from "./pages/Chatbot";
import Industry from "./pages/Industry";
import LeadPopup from "./components/Leadpopup";

import SEO from "./components/SEO";

function App() {
  return (
    <>
      <Navbar />

      <ScrollToTop />

      <LeadPopup />

      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <SEO
                title="All SMS Solution | Bulk SMS & WhatsApp API Provider"
                description="Grow your business with All SMS Solution. Explore Bulk SMS, WhatsApp Business API, RCS Messaging, Voice Calls, IVR, Email Marketing and AI Chatbot services."
                path="/"
              />
              <Home />
            </>
          }
        />

        {/* Hello */}
        <Route
          path="/hello"
          element={
            <>
              <SEO
                title="Hello | All SMS Solution"
                description="Discover All SMS Solution business communication services."
                path="/hello"
              />
              <Hello />
            </>
          }
        />

        {/* Campaign */}
        <Route
          path="/campaign"
          element={
            <>
              <SEO
                title="Campaign Management Solutions | All SMS Solution"
                description="Explore business messaging campaign solutions with All SMS Solution."
                path="/campaign"
              />
              <Campaign />
            </>
          }
        />

        {/* Industry */}
        <Route
          path="/industry"
          element={
            <>
              <SEO
                title="Industry Solutions | All SMS Solution"
                description="Explore communication and customer engagement solutions for different industries."
                path="/industry"
              />
              <Industry />
            </>
          }
        />

        {/* OTP */}
        <Route
          path="/otp"
          element={
            <>
              <SEO
                title="OTP SMS Service & API Provider | All SMS Solution"
                description="Explore OTP SMS solutions for business authentication, verification and secure customer communication."
                path="/otp"
              />
              <Otp />
            </>
          }
        />

        {/* SMS */}
        <Route
          path="/sms"
          element={
            <>
              <SEO
                title="Bulk SMS Service Provider India | All SMS Solution"
                description="Reach customers with business SMS, promotional SMS, transactional SMS and bulk messaging solutions."
                path="/sms"
              />
              <Sms />
            </>
          }
        />

        {/* Email */}
        <Route
          path="/email"
          element={
            <>
              <SEO
                title="Bulk Email Marketing Services | All SMS Solution"
                description="Explore business email marketing and bulk email communication solutions with All SMS Solution."
                path="/email"
              />
              <Email />
            </>
          }
        />

        {/* WhatsApp */}
        <Route
          path="/whatsapp"
          element={
            <>
              <SEO
                title="WhatsApp Business API Provider | All SMS Solution"
                description="Connect with customers using WhatsApp Business API, business messaging and automated communication solutions."
                path="/whatsapp"
              />
              <Whatsapp />
            </>
          }
        />

        {/* Voice */}
        <Route
          path="/voice"
          element={
            <>
              <SEO
                title="Bulk Voice Call & IVR Solutions | All SMS Solution"
                description="Explore automated voice calls, IVR and business voice communication solutions."
                path="/voice"
              />
              <Voice />
            </>
          }
        />

        {/* RCS */}
        <Route
          path="/rcs"
          element={
            <>
              <SEO
                title="RCS Messaging Services | All SMS Solution"
                description="Discover RCS business messaging solutions for interactive and engaging customer communication."
                path="/rcs"
              />
              <RCS />
            </>
          }
        />

        {/* Chatbot */}
        <Route
          path="/chatbot"
          element={
            <>
              <SEO
                title="AI Chatbot Solutions for Business | All SMS Solution"
                description="Automate customer interactions with AI chatbot and business communication solutions."
                path="/chatbot"
              />
              <Chatbot />
            </>
          }
        />

        {/* Services */}
        <Route
          path="/services"
          element={
            <>
              <SEO
                title="Our Services | All SMS Solution"
                description="Explore Bulk SMS, WhatsApp API, RCS, Voice Calls, IVR, Email Marketing and AI Chatbot services."
                path="/services"
              />
              <Services />
            </>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <>
              <SEO
                title="About Us | All SMS Solution"
                description="Learn about All SMS Solution and our business communication and customer engagement solutions."
                path="/about"
              />
              <About />
            </>
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <>
              <SEO
                title="Contact All SMS Solution | Get in Touch"
                description="Contact All SMS Solution to discuss Bulk SMS, WhatsApp API, RCS, Voice and business communication solutions."
                path="/contact"
              />
              <Contact />
            </>
          }
        />

        {/* Terms */}
        <Route
          path="/terms"
          element={
            <>
              <SEO
                title="Terms and Conditions | All SMS Solution"
                description="Read the terms and conditions for using All SMS Solution services."
                path="/terms"
              />
              <Terms />
            </>
          }
        />

        {/* Privacy Policy */}
        <Route
          path="/privacy-policy"
          element={
            <>
              <SEO
                title="Privacy Policy | All SMS Solution"
                description="Read the privacy policy of All SMS Solution and learn how information is handled."
                path="/privacy-policy"
              />
              <PrivacyPolicy />
            </>
          }
        />
      </Routes>

      <WhatsAppButton />

      <Footer />
    </>
  );
}

export default App;
