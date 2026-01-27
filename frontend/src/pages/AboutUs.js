export default function About() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* About Us */}
        <h1 className="text-5xl font-light mb-10">About Us</h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Ark-Ride Medical Transportation LLC was founded with a mission to
          ensure no patient misses care due to lack of transportation. We
          combine professionalism, compassion, and reliability to support
          healthier communities.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Ark is more than transportation — it’s a mission through service.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-16">
          Our drivers are trained to assist passengers with dignity, patience,
          and respect — every ride, every time.
        </p>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Mission Statement
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To provide safe, reliable, and compassionate non-emergency medical
              transportation that supports patient independence and health care
              access.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Vision Statement
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To become one of the most trusted NEMT providers in the Denver
              Metro Area and Aurora, recognized for reliability, customer
              satisfaction, and excellent service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
