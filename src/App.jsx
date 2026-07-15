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
// import Numbers from "./pages/Numbers";
import UrlShorter from "./pages/UrlShorter";
import Knowlodge from "./pages/Knowlodge";
import RCS from "./pages/RCS";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import WhatsAppButton from "./components/WhatsAppButton";
import Chatbot from "./pages/Chatbot";
import Industry from "./pages/Industry";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/sms" element={<Sms />} />
        <Route path="/email" element={<Email />} />
        <Route path="/whatsapp" element={<Whatsapp />} />
        <Route path="/voice" element={<Voice />} />
        {/* <Route path="/numbers" element={<Numbers />} /> */}
        <Route path="/rcs" element={<RCS />} />
        <Route path="/chatbot" element={<Chatbot />} />
        {/* <Route path="/url-shortner" element={<UrlShorter />} /> */}
        {/* <Route path="/knowledgebase" element={<Knowlodge />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      </Routes>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;