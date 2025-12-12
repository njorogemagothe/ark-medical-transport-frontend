// src/App.js
import React, { useState, useEffect } from "react";
import Chatbot from "./components/Chatbot"; 
import QuickContacts from "./components/QuickContacts";
import { InlineWidget } from "react-calendly";
import emailjs from "emailjs-com";

export default function App() {

  // ⭐ UPDATED: Responsive images for slideshow
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

  // Single Calendly Link
  const calendlyLink = "https://calendly.com/arkmedicalt/medical-transport-booking-nemt";

  // Store user's email to prefill Calendly
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
  const interval = setInterval(() => {
    setBannerIndex((prev) => (prev + 1) % bannerImages.length);
  }, 4000);
  return () => clearInterval(interval);
}, [bannerImages.length]); // <- ESLint says: missing dependency 'bannerImages.length'


  // EmailJS send function for chatbot
  const sendChatMessage = (email, question) => {
    const templateParams = {
      user_email: email,
      user_question: question,
    };

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
          setUserEmail(email); // Prefill Calendly with this email
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Ark Medical Transport Logo" className="w-16 h-16 object-contain" />
            <div>
              <h1 className="text-lg font-semibold">Ark Medical Transport</h1>
              <p className="text-[8px] text-gray-500">Safe, compassionate non-emergency medical transport</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#fleet" className="hover:text-blue-600">Fleet</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <a href="#booking" className="bg-blue-600 text-white px-4 py-2 rounded-md">Book a Ride</a>
          </nav>
          <button className="md:hidden p-2 rounded-md bg-gray-100">☰</button>
        </div>
      </header>

      {/* ⭐ UPDATED: RESPONSIVE BANNER SECTION */}
      <section className="w-full relative h-screen overflow-hidden bg-gray-50">
        <img
          key={bannerIndex}
          src={bannerImages[bannerIndex].src}
          srcSet={bannerImages[bannerIndex].srcSet}
          sizes="(max-width: 600px) 400px,
                 (max-width: 1200px) 800px,
                 1200px"
          alt={bannerImages[bannerIndex].alt}
          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100"
        />
      </section>

      {/* About Section */}
      <section className="bg-white py-10">
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

      {/* Booking Section */}
      <section id="booking" className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-center mb-6">Book Your Medical Transport</h3>
        <div className="flex justify-center">
          <InlineWidget url={calendlyLink} prefill={{ email: userEmail }} />
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
              <li>Phone: +254 700 000 000</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm py-4">
          © 2025 Ark Medical Transport
        </div>
      </footer>

    </div>
  );
}
