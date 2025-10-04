import { useLocation, useParams } from "react-router";
import { useEffect } from "react";
const ExperienceDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const experience = state?.experience || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fbfbfb] min-h-screen pt-8">
      <div className="max-w-7xl mx-auto py-10 md:py-20 px-4">
        <h1 className="text-2xl md:text-3xl font-serif text-gray-800 mb-2 pl-4 border-l-4 border-gold">
          {experience.title || "Royal India & Wildlife Odyssey"}
        </h1>

        {/* Location Covered */}
        <div className="mb-6 md:mb-8 pl-4">
          <p className="text-gray-600 text-lg font-medium">
            Location covered :{" "}
            <span className="text-gray-600">{experience.description}</span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            <div className="relative h-full">
              <img
                src={experience.image}
                alt={experience.title}
                className="rounded-xl shadow-lg w-full h-full object-cover"
              />
              {/* Duration Label */}
              {experience.duration && (
                <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {experience.duration}
                </div>
              )}
            </div>
          </div>

          {/* Journey Overview Section - Beside Image */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 h-full flex flex-col">
              <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-6 pl-4 border-l-4 border-gold">
                Journey Overview
              </h2>
              <div className="flex-1 overflow-y-auto pr-2 space-y-6 max-h-[500px]">
                {experience.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="flex flex-col sm:flex-row sm:items-start gap-4 pb-6 border-b border-gray-100 last:border-b-0 last:pb-0"
                  >
                    <div className="flex-shrink-0">
                      {/* <div className="bg-gold text-white rounded-full w-16 h-16 flex items-center justify-center font-serif font-bold flex-col">
                        <p className="text-xs leading-3 font-semibold tracking-wider uppercase">
                          Day
                        </p>
                        <h1 className="text-2xl leading-7">{day.day}</h1>
                      </div> */}
                      <div className="bg-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-serif font-bold flex-col">
                        <p className="text-[10px] leading-3 font-semibold tracking-wider">
                          DAY
                        </p>
                        <h1 className="text-lg leading-5">{day.day}</h1>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg md:text-xl text-gray-800 mb-2">
                        {day.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {day.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Book Button inside Journey Overview */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="w-full bg-gold text-white px-6 py-3 rounded-full hover:bg-gold-dark transition text-lg font-semibold">
                  Book This Experience
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tour Highlights Section - Full Width Below */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-6 pl-4 border-l-4 border-gold">
            Tour Highlights
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {experience.tourHighlights.map((highlight, index) => {
                const parts = highlight.split(":");
                const beforeColon = parts[0];
                const afterColon = parts.slice(1).join(":");

                return (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-gold text-lg mt-1">✨</span>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      <span className="font-bold">{beforeColon}:</span>
                      {afterColon}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-12 text-center">
          <button className="bg-gold text-white px-8 py-4 rounded-full hover:bg-gold-dark transition text-lg font-semibold shadow-lg">
            Book Your Royal India & Wildlife Odyssey
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
