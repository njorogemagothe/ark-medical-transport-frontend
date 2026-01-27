import React from "react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">

        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          Terms & Conditions
        </h1>

        <p className="text-gray-700 mb-8 text-center">
          These Terms & Conditions govern the use of services provided by Ark
          Medical Transport. By booking or using our services, you agree to be
          bound by these terms.
        </p>

        {/* Section */}
        <Section title="1. Service Description">
          Ark Medical Transport provides non-emergency medical transportation
          (NEMT) services only. We do not provide emergency medical services or
          medical care during transport.
        </Section>

        <Section title="2. Booking & Scheduling">
          All rides must be scheduled in advance. Booking confirmation is
          subject to availability. Pickup times are estimates and may be affected
          by traffic, weather, or other external conditions.
        </Section>

        <Section title="3. Payment Terms">
          Ark Medical Transport operates on a private-pay basis. Insurance
          coverage is not required to book a ride. Payment terms, pricing, and
          accepted payment methods will be communicated at the time of booking.
        </Section>

        <Section title="4. Cancellations & No-Shows">
          Customers are responsible for notifying Ark Medical Transport of any
          cancellations or changes as early as possible. Failure to be present
          at the scheduled pickup time and location may result in a no-show fee.
        </Section>

        <Section title="5. Customer Responsibilities">
          <ul className="list-disc list-inside space-y-2">
            <li>Be ready at the scheduled pickup time and provided location.</li>
            <li>Provide accurate and complete pickup and drop-off addresses.</li>
            <li>
              Ensure pickup and drop-off locations are reasonably safe and
              accessible.
            </li>
            <li>
              Inform Ark Medical Transport of any special mobility or assistance
              needs at the time of booking.
            </li>
            <li>Treat drivers and staff with respect at all times.</li>
          </ul>

          <p className="mt-4">
            Ark Medical Transport reserves the right to refuse or discontinue
            service to locations deemed unsafe due to crime risk, environmental
            hazards, or security concerns.
          </p>
        </Section>

        <Section title="6. Limitations of Liability">
          Ark Medical Transport is not liable for delays, missed appointments, or
          service interruptions caused by circumstances beyond our control,
          including but not limited to traffic conditions, weather events, road
          closures, facility delays, or acts of God.
        </Section>

        <Section title="7. Privacy">
          Use of our services is also governed by our Privacy Policy, which
          explains how we collect and use personal information.
        </Section>

        <Section title="8. Governing Law">
          These Terms & Conditions are governed by and construed in accordance
          with the laws of the State of Colorado.
        </Section>

        <Section title="9. Changes to Terms">
          Ark Medical Transport reserves the right to update or modify these
          Terms & Conditions at any time. Continued use of our services
          constitutes acceptance of any changes.
        </Section>

      </div>
    </div>
  );
}

/* ===== Reusable Section Component ===== */
function Section({ title, children }) {
  return (
    <div className="mb-6">
      <div className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold mb-3">
        {title}
      </div>
      <div className="text-gray-700 text-base md:text-lg leading-relaxed">
        {children}
      </div>
    </div>
  );
}
