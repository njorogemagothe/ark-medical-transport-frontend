
export default function Services() {
  const services = [
    {
      title: "Hospital discharge pick-ups",
      description:
        "Transportation to and from routine medical appointments such as doctor visits, dialysis, and physical therapy sessions.",
    },
    {
      title: "Wheelchair and stretcher transportation",
      description:
        "Specialized transportation for patients who require a wheelchair or stretcher due to mobility limitations or medical conditions.",
    },
    {
      title: "Dialysis transportation",
      description:
        "Reliable and comfortable rides to and from dialysis appointments.",
    },
    {
      title: "Doctor and therapy appointments",
      description:
        "Comfortable transportation to ensure you never miss a medical or therapy appoinment.",
    },
    {
      title: "Long-distance medical transportation",
      description:
        "Comfortable and reliable transport for patients traveling long distances for specialized medical care.",
    },
    {
      title: "Ambulatory transportation",
      description:
        "Safe and comfortable transport for patients who can walk or use minimal assistance.",
    },
  ];

  return (
    <>
      {/* Services Section */}
      <div className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-light text-center mb-16">
            Our services
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 shadow-md hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md mb-4">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Why Choose Ark Medical Transport
              </h2>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-4">
              We are committed to providing safe, reliable, and compassionate
              non-emergency medical transportation that supports patient independence and health care access.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Cards */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl mb-4">🚑</div>
              <h3 className="font-semibold text-lg mb-2">Safe & Reliable Service</h3>
              <p className="text-gray-600 text-sm">
                Our vehicles are regularly inspected and maintained to ensure dependable and secure transportation for every patient.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl mb-4">🕒</div>
              <h3 className="font-semibold text-lg mb-2">On-Time Pickups</h3>
              <p className="text-gray-600 text-sm">
                We understand the importance of medical appointments and ensure timely pickups and drop-offs you can count on.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl mb-4">♿</div>
              <h3 className="font-semibold text-lg mb-2">Wheelchair Accessible</h3>
              <p className="text-gray-600 text-sm">
                Our fleet is fully equipped to accommodate wheelchair and mobility needs with comfort and dignity.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl mb-4">❤️</div>
              <h3 className="font-semibold text-lg mb-2">Compassionate Care</h3>
              <p className="text-gray-600 text-sm">
                Our drivers are trained to assist patients with patience, respect, and genuine care throughout the journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Who We Serve Section */}
<section className="bg-gray-100 py-20">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Header */}
    <div className="text-center mb-12">
      <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md mb-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Who We Serve
        </h2>
      </div>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-4">
        Our services are available for Medicaid, private pay, and facility contracts.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
        <div className="text-blue-600 text-4xl mb-4">💳</div>
        <h3 className="font-semibold text-lg mb-2">Medicaid Members</h3>
        <p className="text-gray-600 text-sm">
          Safe and reliable transportation for individuals enrolled in Medicaid programs.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
        <div className="text-blue-600 text-4xl mb-4">♿</div>
        <h3 className="font-semibold text-lg mb-2">Seniors & Individuals with Disabilities</h3>
        <p className="text-gray-600 text-sm">
          Comfortable and accessible rides for seniors and those with mobility challenges.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
        <div className="text-blue-600 text-4xl mb-4">🏥</div>
        <h3 className="font-semibold text-lg mb-2">Hospitals & Clinics</h3>
        <p className="text-gray-600 text-sm">
          Coordinated transportation for patients moving between hospitals and clinics.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
        <div className="text-blue-600 text-4xl mb-4">💉</div>
        <h3 className="font-semibold text-lg mb-2">Dialysis Centers</h3>
        <p className="text-gray-600 text-sm">
          Reliable transport for patients attending regular dialysis treatments.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
        <div className="text-blue-600 text-4xl mb-4">🏡</div>
        <h3 className="font-semibold text-lg mb-2">Nursing Homes & Assisted Living Facilities</h3>
        <p className="text-gray-600 text-sm">
          Safe and timely transport for residents to appointments and therapy sessions.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
        <div className="text-blue-600 text-4xl mb-4">📋</div>
        <h3 className="font-semibold text-lg mb-2">Case Managers & Social Workers</h3>
        <p className="text-gray-600 text-sm">
          Coordinated services to support patient care and transportation planning.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* FOOTER */}
    </>
  );
}
