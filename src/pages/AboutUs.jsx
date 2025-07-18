import React from "react";
import aboutUs from "../assets/images/aboutUs.jpg"; // Adjust the path as necessary
const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      {/* <div className="relative h-56 w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img
          src={aboutUs} // Replace with your about us hero image
          alt="Cherish Journeys Team"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4 text-gold">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Crafting unforgettable journeys since our inception
          </p>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pt-28 py-16">
        {/* Mission Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src={aboutUs} // Replace with your image
                alt="Our Mission"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Cherish Journeys, we are committed to being the one-stop
                provider for all your travel needs. As a Ministry of Tourism
                recognised agency, we pride ourselves on being leading,
                innovative, and highly efficient in crafting exceptional travel
                experiences.
              </p>
              <p className="text-lg text-gray-600">
                Our primary aim is to provide quality travel services to both
                business and leisure travellers, with a special focus on bespoke
                travel plans tailored exactly to your desires.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20 bg-gray-50 p-12 rounded-xl">
          <h2 className="text-3xl font-serif text-center text-gray-800 mb-12">
            Why Choose Cherish Journeys
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-gold text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-3">
                Tailored Experiences
              </h3>
              <p className="text-gray-600">
                Every vacation is customized to your specific tastes, needs, and
                budget with our personal touch.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-gold text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3">
                Transparent Pricing
              </h3>
              <p className="text-gray-600">
                No hidden costs - we're upfront about what's included and
                excluded in your tour package.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-gold text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3">Quality Partners</h3>
              <p className="text-gray-600">
                We work only with the best transport companies, qualified
                guides, hotels, and restaurants.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-center text-gray-800 mb-12">
            Our Commitment
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Client Satisfaction First
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our team of professionals does everything possible to ensure
                your holiday in India or abroad is perfectly arranged. Years of
                careful research go into creating the right balance of quality
                and adventure that best suits our travellers.
              </p>
              <p className="text-lg text-gray-600">
                Wherever you need us, we're always there for you - via email,
                phone, or social media. We're honored to have you as part of our
                travel community.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img
                src={aboutUs} // Replace with your team image
                alt="Our Team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gold text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-serif mb-6">
            Ready to Cherish Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us craft the perfect travel experience tailored exactly to your
            desires.
          </p>
          <button className="bg-white text-gold px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Contact Us Today
          </button>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
