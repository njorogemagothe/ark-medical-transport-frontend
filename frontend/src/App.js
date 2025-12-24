// src/App.js
import React, { useState, useEffect } from "react";
import Chatbot from "./components/Chatbot"; 
import QuickContacts from "./components/QuickContacts";
import { InlineWidget } from "react-calendly";
import emailjs from "emailjs-com";

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
    {
      src: "/team-800.webp",
      srcSet:
        "/team-400.webp 400w, /team-800.webp 800w, /team-1200.webp 1200w",
      alt: "Medical Team",
    },
  ];

  const [bannerIndex, setBannerIndex] = useState(0);
  const calendlyLink = "https://calendly.com/arkmedicalt/medical-transport-booking-nemt";
  const [userEmail, setUserEmail] = useState("");
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Cycle banner images
  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // Show/hide Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header handleScrollTo={handleScrollTo} />

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
        </div>
      </section>
      {/* Service Area Section */}
<section className="bg-gray-100 py-16">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

    {/* Text Content */}
    <div>
      <h3 className="text-3xl md:text-4xl font-bold mb-4">
        Proudly Serving Colorado
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
        Service Area: Colorado
      </div>
    </div>

    {/* Image */}
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
        {/* Services */}
        <div id="services" className="md:w-1/2">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Non-emergency patient transport</li>
            <li>Senior citizen transport</li>
            <li>Mobility assistance and wheelchair transport</li>
            <li>Medical appointment transport</li>
            <li>Hospital and clinic transfers</li>
          </ul>
        </div>

        {/* Booking */}
        <div id="booking" className="md:w-1/2 mt-6 md:mt-0">
          <h3 className="text-2xl font-bold text-center mb-6">Book Your Medical Transport</h3>
          <div className="flex justify-center">
            <InlineWidget url={calendlyLink} prefill={{ email: userEmail }} />
          </div>
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

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg z-50 hover:bg-blue-700 transition"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}

/* ================= HEADER COMPONENT ================= */
function Header({ handleScrollTo }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Ark Medical Transport Logo" className="w-16 h-16 object-contain" />
          <div>
            <h1 className="text-lg font-semibold">Ark Medical Transport</h1>
            <p className="text-[8px] text-gray-500">Safe, compassionate non-emergency medical transport</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <button onClick={() => handleScrollTo("services")} className="hover:text-blue-600">Services</button>
          <button onClick={() => handleScrollTo("about")} className="hover:text-blue-600">About</button>
          <button onClick={() => handleScrollTo("contacts")} className="hover:text-blue-600">Contact</button>
          <button onClick={() => handleScrollTo("booking")} className="bg-blue-600 text-white px-4 py-2 rounded-md">Book a Ride</button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden relative">
          <button
            className="p-2 rounded-md bg-gray-100 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          <div
            className={`absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md flex flex-col text-sm transition-all duration-300 ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <button onClick={() => { handleScrollTo("services"); setIsOpen(false); }} className="px-4 py-2 hover:bg-gray-100 text-left">Services</button>
            <button onClick={() => { handleScrollTo("about"); setIsOpen(false); }} className="px-4 py-2 hover:bg-gray-100 text-left">About</button>
            <button onClick={() => { handleScrollTo("contacts"); setIsOpen(false); }} className="px-4 py-2 hover:bg-gray-100 text-left">Contact</button>
            <button onClick={() => { handleScrollTo("booking"); setIsOpen(false); }} className="px-4 py-2 bg-blue-600 text-white rounded-md mx-2 my-2 text-center">Book a Ride</button>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ================= FOOTER COMPONENT ================= */
function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold">Ark Medical Transport</h4>
          <p className="mt-2 text-sm text-gray-400">Safe, dignified medical transport for patients and seniors.</p>
        </div>
        <div className="text-sm text-gray-400">
          <div className="font-semibold">Resources</div>
          <ul className="mt-2 space-y-2">
            <li>Fleet Info</li>
            <li>FAQ</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="text-sm text-gray-400">
          <div className="font-semibold">Contact</div>
          <ul className="mt-2 space-y-2">
            <li>Email: arkmedicalt@gmail.com</li>
            <li>Phone: +1 (720) 620-1567</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm py-4">
        © 2025 Ark Medical Transport
      </div>
    </footer>
  );
}
