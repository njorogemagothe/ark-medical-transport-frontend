import React from "react";

const QuickContacts = () => {
  return (
    <div className="text-sm text-gray-700 space-y-3">
      <div>
        📞 Phone:{" "}
        <a
          href="tel:+17206201567"
          className="text-blue-600 hover:underline font-semibold"
        >
          +1 (720) 620-1567
        </a>
      </div>

      <div>
        ✉️ Email:{" "}
        <a
          href="mailto:arkmedicalt@gmail.com"
          className="text-blue-600 hover:underline font-semibold"
        >
          arkmedicalt@gmail.com
        </a>
      </div>

      <div>📍 Service area: Colorado</div>

      {/* WhatsApp button */}
      <a
        href="https://wa.me/17206201567?text=Hello%20Ark%20Medical%20Transport,%20I%20need%20your%20assistance%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-2 bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-600"
      >
        <img src="/icons/whatsapp-icon.jpg" alt="WhatsApp" className="w-5 h-5" />
        Chat on WhatsApp
      </a>

      <div className="mt-6">
        <h5 className="text-sm font-medium">Hours</h5>
        <div className="text-sm text-gray-600">
          Open Monday–Friday for scheduled & urgent non-emergency transport
        </div>
      </div>
    </div>
  );
};

export default QuickContacts;
