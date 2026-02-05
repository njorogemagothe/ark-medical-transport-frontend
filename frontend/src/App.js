// src/App.js
import React, { useState, useEffect } from "react";
import Chatbot from "./components/Chatbot"; 
import QuickContacts from "./components/QuickContacts";
import { InlineWidget, PopupWidget } from "react-calendly";
import emailjs from "emailjs-com";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQ from "./components/FAQ"; 
import Terms from "./pages/Terms";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import Reviews from "./components/Reviews";




export default function App() {
  const bannerImages = [
    {
      src: "/assistance-team-800.webp",
      srcSet:
        "/assistance-team-400.webp 400w, /assistance-team-800.webp 800w, /assistance-team-1200.webp 1200w",
      alt: "Assistance Team",
    },
    {
      src: "/fleet-800.webp",
      srcSet:
        "/fleet-400.webp 400w, /fleet-800.webp 800w, /fleet-1200.webp 1200w",
      alt: "Ambulance Fleet",
    },
  ];

  const [bannerIndex, setBannerIndex] = useState(0);
  const calendlyLink = "https://calendly.com/arkmedicalride-info/30min";
  const [userEmail, setUserEmail] = useState("");
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showCalendlyPopup, setShowCalendlyPopup] = useState(false);
  const [showMobileCTA, setShowMobileCTA] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Cycle banner images
 // Cycle banner images safely
useEffect(() => {
  // Ensure bannerIndex is always within bounds
  setBannerIndex((prev) => (prev >= bannerImages.length ? 0 : prev));

  const interval = setInterval(() => {
    setBannerIndex((prev) => {
      // Wrap around when reaching the end
      return (prev + 1) % bannerImages.length;
    });
  }, 4000);

  return () => clearInterval(interval);
}, [bannerImages.length]);

  // Show/hide Back to Top button
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show/hide mobile CTA after scroll
  useEffect(() => {
    const handleScroll = () => setShowMobileCTA(window.scrollY > 120);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
  if (window.location.pathname === "/") {
    const sections = ["services", "about", "reviews", "faq", "contacts", "booking"];

    const handleScroll = () => {
      let current = "home";
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 100) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }
}, []);



  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const sendChatMessage = (email, question) => {
    const templateParams = { user_email: email, user_question: question };
    emailjs
      .send(
        "service_i8dkd48",
        "template_gwqavtt",
        templateParams,
        "Jx9ggl9Hx9qfsXLfd"
      )
      .then(
        () => {
          alert("Thanks! Your question has been submitted. We'll get back to you via email.");
          setUserEmail(email);
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <Router>
       <ScrollToTop />
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Header handleScrollTo={handleScrollTo} activeSection={activeSection} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Banner Section */}
                <section className="w-full relative h-screen overflow-hidden bg-gray-50">
                  <img
                    key={bannerIndex}
                    src={bannerImages[bannerIndex].src}
                    srcSet={bannerImages[bannerIndex].srcSet}
                    sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
                    alt={bannerImages[bannerIndex].alt}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100"
                  />
                </section>

                {/* About Section */}
                <section id="about" className="bg-white py-10">
                  <div className="max-w-7xl mx-auto px-6 text-center">
                    <img src="/logo.png" alt="Ark Logo" className="w-28 mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold">Ark Medical Transport</h2>
                    <p className="text-lg md:text-xl text-gray-600 mt-2">
                      Safe, compassionate non-emergency medical transport services.
                      At Ark Medical Transport, we’re not just a ride—we’re a partner
                      in your care journey. With patience, kindness, and genuine 
                      compassion, we ensure you or your loved one arrives safely,
                      comfortably, and with dignity to every medical appointment.
                      No one should miss the care they need because of transportation. 
                      Let us carry that worry for you.
                      We’re here to listen, to help, and to drive with heart—every step of the way.
                    </p>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold">Mission Statement</h2>
                      <p className="text-lg md:text-xl text-gray-600 mt-2">
                        To provide safe, reliable and compassionate Non-emmergency Medical
                        transportation that supports patient independence and health care access. 
                      </p>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">Vision statement</h2>
                    <p className="text-lg md:text-xl text-gray-600 mt-2">
                      To become one of the most trusted NEMT providers in the Denver Metro Area 
                      and Aurora, recognized for reliability, customer satisfaction and excellent services.
                    </p>
                  </div>
                </section>

                {/* Service Area Section */}
                <section className="bg-gray-100 py-16">
                  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        Proudly Serving Aurora, Denver, Centennial, Lakewood, and surrounding areas.
                      </h3>
                      <p className="text-lg text-gray-700 mb-4">
                        Ark Medical Transport provides safe, reliable, and compassionate
                        non-emergency medical transportation services across the state of
                        Colorado.
                      </p>
                      <p className="text-gray-600">
                        From urban centers to rural communities, our trained professionals
                        ensure patients, seniors, and individuals with mobility needs arrive
                        at their medical appointments comfortably and on time.
                      </p>
                      <div className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium">
                        Service Areas: Aurora, Denver, Centennial, Lakewood, and surrounding areas.
                      </div>
                    </div>
                    <div className="w-full h-80 md:h-[420px] rounded-xl overflow-hidden shadow-lg">
                      <img
                        src="/service-areas-800.webp"
                        srcSet="
                          /service-areas-400.webp 400w,
                          /service-areas-800.webp 800w,
                          /service-areas-1200.webp 1200w
                        "
                        sizes="(max-width: 640px) 400px,
                               (max-width: 1024px) 800px,
                               1200px"
                        alt="Map of Colorado showing Ark Medical Transport service area"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </section>
                

                {/* Service + Booking Section */}
                <section className="max-w-7xl mx-auto px-6 py-16 md:flex md:gap-10">
                  <div id="services" className="md:w-1/2">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Wheelchair transportation</li>
                      <li>Ambulatory transport for seniors and special needs transport</li>
                      <li>Assisted living facility transport</li>
                      <li>Dialysis transportation and therapy visits</li>
                      <li>Hospital discharge pick-ups</li>
                      <li>Behavioral health appointment transport</li>
                      <li>Long distance medical transport (within Colorado)</li>
                    </ul>
                  </div>
                
                  <div id="booking" className="md:w-1/2 mt-6 md:mt-0">
                    <h3 className="text-2xl font-bold text-center mb-6">Book Your Medical Transport</h3>
                    <div className="flex justify-center">
                      <InlineWidget url={calendlyLink} prefill={{ email: userEmail }} />
            
                    </div>
                    <p className="text-xs text-gray-500 text-center mt-3">
                  By booking a ride, you agree to our{" "}
                  <Link to="/terms" className="text-blue-600 hover:underline">
                   Terms & Conditions
                   </Link>.
                  </p>
                  </div>
                </section>
        


                

                {/* Chatbot Section */}
                <section id="chatbot" className="my-16 max-w-7xl mx-auto px-6">
                  <Chatbot sendChatMessage={sendChatMessage} />
                </section>
                {/* Quick Contacts Section */}
                <section id="contacts" className="my-16 max-w-7xl mx-auto px-6">
                  <QuickContacts />
                </section>
                {/* Reviews Section */}
                <section id="Reviews" className="max-w-7xl mx-auto px-6 py-16">
                  <Reviews/>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="max-w-7xl mx-auto px-6 py-16">
                  <FAQ/>
                </section>

      

                {/* Back to Top Button */}
                {showTopBtn && (
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-20 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg z-50 hover:bg-blue-700 transition"
                  >
                    ↑ Top
                  </button>
                )}

                {/* Sticky Bottom CTA Bar (Mobile Only — Shows After Scroll) */}
                {showMobileCTA && (
                  <div className="fixed bottom-0 left-0 w-full flex justify-around md:hidden bg-blue-600 p-2 z-50">
                    <a
                      href="tel:+17205131611"
                      className="flex-1 mx-1 px-4 py-3 text-center rounded-md bg-blue-800 text-white font-semibold hover:bg-blue-900"
                    >
                      📞 Call Now
                    </a>
                    <button
                      onClick={() => setShowCalendlyPopup(true)}
                      className="flex-1 mx-1 px-4 py-3 text-center rounded-md bg-blue-800 text-white font-semibold hover:bg-blue-900"
                    >
                      📅 Book Now
                    </button>
                  </div>
                )}

                {/* Calendly Popup Widget */}
                {showCalendlyPopup && (
                  <PopupWidget
                    url={calendlyLink}
                    rootElement={document.getElementById("root")}
                    text="Book Now"
                    color="#0a65c2"
                    textColor="#ffffff"
                    pageSettings={{ hideLandingPageDetails: true }}
                    onModalClose={() => setShowCalendlyPopup(false)}
                  />
                )}
              </>
            }
          />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/Services" element={<Services />} />
           <Route path="/About Us" element={<AboutUs />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
/* ================= HEADER COMPONENT ================= */
function Header({ handleScrollTo }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const activeClass = "text-blue-600 font-semibold";
  const defaultClass = "hover:text-blue-600";

  // ✅ NEW: Handles scroll from any page
  const handleNavScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Ark Medical Transport Logo" className="w-16 h-16 object-contain" />
          <div>
            <h1 className="text-lg font-semibold">Ark Medical Transport</h1>
            <p className="text-[8px] text-gray-500">
              Safe, compassionate non-emergency medical transport
            </p>
          </div>
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <Link to="/" className={isActive("/") ? activeClass : defaultClass}>
            Home
          </Link>

          <Link to="/Services" className={isActive("/Services") ? activeClass : defaultClass}>
            Services
          </Link>

          <button onClick={() => handleNavScroll("faq")} className={defaultClass}>
            FAQ
          </button>

          <Link to="/privacy-policy" className={isActive("/privacy-policy") ? activeClass : defaultClass}>
            Privacy Policy
          </Link>
          
          <Link to="/About Us" className={isActive("/AboutUs") ? activeClass : defaultClass}>
            About us
          </Link>
          <button
            onClick={() => handleNavScroll("booking")}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Book a Ride.
          </button>
        </nav>

        {/* ================= MOBILE MENU ================= */}
        <div className="md:hidden relative">
          <button
            className="p-2 rounded-md bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md flex flex-col text-sm">
              <Link to="/" onClick={() => setIsOpen(false)} className="px-4 py-2">
                Home
              </Link>

              <Link to="/Services" onClick={() => setIsOpen(false)} className="px-4 py-2">
                Services
              </Link>

              <Link to="/About us" onClick={() => setIsOpen(false)} className="px-4 py-2">
                About us
              </Link>

              <button onClick={() => { handleNavScroll("faq"); setIsOpen(false); }} className="px-4 py-2 text-left">
                FAQ
              </button>

              <Link to="/privacy-policy" onClick={() => setIsOpen(false)} className="px-4 py-2">
                Privacy Policy
              </Link>

              <button
                onClick={() => { handleNavScroll("booking"); setIsOpen(false); }}
                className="bg-blue-600 text-white mx-3 my-2 px-3 py-2 rounded-md"
              >
                Book a Ride
              </button>
            </div>
          )}
        </div>
      </div>
        </header>
         
    </>
  );
}
