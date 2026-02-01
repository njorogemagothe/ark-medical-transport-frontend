// src/components/FAQ.js
import React, { useState } from "react";

const faqs = [
  {
  question: "Do I need insurance to book a ride?",
  answer:
    "No. Ark Medical Transport does not require insurance approval. Patients, caregivers, and healthcare facilities can book rides directly with us without going through an insurance provider. This makes us a reliable option if your insurance transportation is delayed, denied, or unavailable."
},

  {
    question: "What areas do you serve?",
    answer: "We provide safe and reliable transport services in Aurora, Denver, Centennial, Lakewood, and surrounding areas across Colorado. For locations outside these areas, please contact us to confirm availability.",
  },
  {
    question: "Who can use your services?",
    answer: "Our services are available for seniors, individuals with disabilities, patients attending medical appointments, and anyone requiring non-emergency medical transport.",
  },
  {
    question: "What types of transport do you offer?",
    answer: "Wheelchair transport, Ambulatory transport for seniors or special needs patients, Assisted living facility transport, Dialysis and therapy visits, Hospital discharge pickups, Behavioral health appointments, Long-distance transport within Colorado.",
  },
  {
    question: "How do I book a ride?",
    answer: "You can book a ride quickly online using our Booking widget, or call us directly at +1 (720) 513-1611. We also offer scheduling through our mobile CTA buttons for immediate access.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 24 hours in advance to ensure availability. For recurring appointments, you can schedule in advance for multiple dates.",
  },
  {
    question: "Are your drivers trained?",
    answer: "Yes. All our drivers are fully trained in patient care, safe transport, and handling mobility equipment. They prioritize your comfort and safety during every ride.",
  },
  {
    question: "Can I bring a caregiver or companion?",
    answer: "Absolutely! Companions or caregivers are welcome to travel with the patient at no additional charge.",
  },
  {
    question: "What if I need last-minute transport?",
    answer: "We will do our best to accommodate urgent requests. Please call us directly to check availability.",
  },
  {
    question: "How do you ensure safety during transport?",
    answer: "Sanitized vehicles before every ride, properly secured wheelchairs and mobility aids, trained compassionate drivers, and compliance with all local and state safety regulations.",
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer: "Please contact us as soon as possible to cancel or reschedule. This allows us to serve other patients efficiently.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-md overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 bg-gray-100 flex justify-between items-center focus:outline-none"
            >
              <span className="font-medium">{faq.question}</span>
              <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-white text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
