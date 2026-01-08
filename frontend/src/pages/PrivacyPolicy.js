export default function PrivacyPolicy() { return (
<div className="min-h-screen bg-white text-gray-900">
  <div className="max-w-4xl mx-auto px-6 py-12">
    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

    <p className="mb-6 text-gray-700">
      Ark-Ride Medical Transportation LLC is committed to protecting your
      privacy and safeguarding personal information in accordance with
      applicable laws, including the Health Insurance Portability and
      Accountability Act (HIPAA).
    </p>

    {/* Information We Collect */}
    <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
    <p className="text-gray-700 mb-3">
      We may collect limited personal information such as:
    </p>
    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
      <li>Name</li>
      <li>Contact information</li>
      <li>Pickup and drop-off addresses</li>
      <li>Appointment date and time</li>
    </ul>
    <p className="text-gray-700 mb-6">
      We do <strong>not</strong> request diagnoses, Social Security numbers, or
      full medical records through our website.
    </p>

    {/* How We Use Information */}
    <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Information</h2>
    <p className="text-gray-700 mb-3">Information is used solely to:</p>
    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
      <li>Schedule and coordinate transportation</li>
      <li>Communicate regarding services</li>
      <li>Comply with legal and regulatory requirements</li>
    </ul>

    {/* Information Protection */}
    <h2 className="text-2xl font-semibold mt-8 mb-4">Information Protection</h2>
    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
      <li>Secure communication methods</li>
      <li>Restricted access to information</li>
      <li>HIPAA-trained staff</li>
    </ul>

    {/* Information Sharing */}
    <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing</h2>
    <p className="text-gray-700 mb-3">
      We do not sell or share personal information except:
    </p>
    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
      <li>As required by law</li>
      <li>
        With authorized healthcare partners for transportation coordination
      </li>
    </ul>

    {/* Your Rights */}
    <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
    <p className="text-gray-700 mb-6">
      You may request access to or correction of your information by contacting
      us.
    </p>

    {/* Contact */}
    <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
    <p className="text-gray-700">
      Phone:
      <a href="tel:17205131611" className="text-blue-600 underline"
        >720-513-1611</a
      >
    </p>
    <p className="text-gray-700">
      Toll-Free:
      <a href="tel:18004781689" className="text-blue-600 underline"
        >800-478-1689</a
      >
    </p>
  </div>
</div>
); }
