// components/Footer.js
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold">Ark Medical Transport</h4>
          <p className="mt-2 text-sm text-gray-400">
            Safe, dignified medical transport for patients and seniors.
          </p>
        </div>

        {/* Support */}
        <div className="text-sm text-gray-400">
          <div className="font-semibold text-gray-200">Support</div>
          <ul className="mt-2 space-y-2">
            
            <li>
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/Terms" className="hover:underline">
                Terms & conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-sm text-gray-400">
          <div className="font-semibold text-gray-200">Contact</div>
          <ul className="mt-2 space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:info@arkmedicalride.com"
                className="hover:underline"
              >
                info@arkmedicalride.com
              </a>
            </li>
            <li>
              Tel:{" "}
              <a href="tel:17205131611" className="hover:underline">
                +1 (720) 513-1611
              </a>
            </li>
            <li>FAX: 800-478-1689</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm py-4">
        © 2025 Ark Medical Transport
      </div>
    </footer>
  );
}
