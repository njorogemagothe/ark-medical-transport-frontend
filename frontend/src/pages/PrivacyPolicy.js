import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-700 text-lg md:text-xl mb-8 text-center">
          Ark-Ride Medical Transportation LLC is committed to protecting your
          privacy and safeguarding personal information in accordance with
          applicable laws, including the Health Insurance Portability and
          Accountability Act (HIPAA).
        </p>

        <Section title="Information We Collect">
          <p className="mb-3">
            We may collect limited personal information such as:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Name</li>
            <li>Contact information</li>
            <li>Pickup and drop-off addresses</li>
            <li>Appointment date and time</li>
          </ul>
          <p className="mt-4">
            We do <strong>not</strong> request diagnoses, Social Security numbers,
            or full medical records through our website.
          </p>
        </Section>

        <Section title="How We Use Information">
          <p className="mb-3">Information is used solely to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Schedule and coordinate transportation</li>
            <li>Communicate regarding services</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>
        </Section>

        <Section title="Information Protection">
          <ul className="list-disc list-inside space-y-2">
            <li>Secure communication methods</li>
            <li>Restricted access to information</li>
            <li>HIPAA-trained staff</li>
          </ul>
        </Section>

        <Section title="Information Sharing">
          <p className="mb-3">
            We do not sell or share personal information except:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>As required by law</li>
            <li>
              With authorized healthcare partners for transportation
              coordination
            </li>
          </ul>
        </Section>

        <Section title="Your Rights">
          You may request access to or correction of your information by
          contacting us.
        </Section>

        <Section title="Contact">
          <p>
            Phone:{" "}
            <a
              href="tel:17205131611"
              className="text-blue-600 hover:underline font-medium"
            >
              720-513-1611
            </a>
          </p>
          <p className="mt-2">
            FAX :{" "}
            <a
              href="tel:18004781689"
              className="text-blue-600 hover:underline font-medium"
            >
              800-478-1689
            </a>
          </p>
        </Section>

      </div>
    </div>

  );
}
/* ===== Reusable Section Component ===== */
function Section({ title, children }) {
  return (
    <div className="mb-6">
      <div className="bg-blue-600 text-white px-4 py-3 rounded-md font-semibold text-lg md:text-xl mb-3">
        {title}
      </div>
      <div className="text-gray-700 text-base md:text-lg leading-relaxed">
        {children}
      </div>
    </div>
  );
}
