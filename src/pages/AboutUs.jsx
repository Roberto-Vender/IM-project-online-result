import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">
            Where we anchor your health in love, care, and service ⚓
          </h1>
          <p className="text-lg text-gray-600">
            Dedicated to improving lives through quality diagnostics and compassionate care.
          </p>
        </div>

        <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-500 mb-3">Who We Are</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Anchor Lab & Medical Center with Dental Clinic is committed to providing accurate diagnostic
              services and quality healthcare. We believe in compassionate care and state-of-the-art services
              to help improve the lives of our patients in Cebu City and beyond.
            </p>
          </div>
          
          {/* Image wrapped with AOS */}
          <div data-aos="fade-up">
            <img
              src="img2.jpg"
              alt="Our Team"
              className="rounded-xl shadow-md w-full h-64 object-cover"
            />
          </div>
        </section>

        <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Image wrapped with AOS */}
          <div data-aos="fade-up">
            <img
              src="img3.jpg"
              alt="Mission Image"
              className="rounded-xl shadow-md w-full h-64 object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-500 mb-3">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              To deliver accessible, affordable, and high-quality medical and dental services with a strong
              emphasis on accuracy, integrity, and care.
            </p>
            <h2 className="text-3xl font-bold text-blue-500 mb-3">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be a trusted leader in laboratory and healthcare services in the region, known for innovation,
              compassion, and excellence.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">Our Advocacy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Anchor Academy</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                <li>Lecture & training for health and medicine topics (with PRC credit).</li>
                <li>Strengthened trainings for Ultrasound with PRC credit.</li>
                <li>Installation and setup of medical projects for remote areas.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Gratitude</h3>
              <p className="text-lg text-gray-700">
                Bring health to the Parish by reaching underserved communities and promoting wellness.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
