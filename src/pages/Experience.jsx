import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Experience = () => {
  const [pausedStates, setPausedStates] = useState([false, false, false]);
  const navigate = useNavigate();

  // Sample data for experiences
  const experiences = [
    {
      id: 1,
      title: "Luxury Himalayan Retreat",
      description:
        "Experience breathtaking mountain views from our exclusive luxury lodges in the Himalayas.",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
    },
    {
      id: 2,
      title: "Golden Triangle Tour",
      description:
        "Discover India's rich heritage with our curated Golden Triangle journey.",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
    },
    {
      id: 3,
      title: "Kerala Backwaters Cruise",
      description:
        "Sail through serene backwaters in traditional houseboats with premium amenities.",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
    },
    {
      id: 4,
      title: "Rajasthan Royal Experience",
      description:
        "Live like royalty in heritage palaces converted into luxury hotels.",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
    },
    {
      id: 5,
      title: "Goa Beachfront Villas",
      description:
        "Private beach access with world-class service in our premium villas.",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
    },
    {
      id: 6,
      title: "Wildlife Safari Adventure",
      description:
        "Luxury tented camps with exclusive wildlife viewing experiences.",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
    },
  ];

  // Duplicate items for infinite carousel effect
  const carouselItems = [...experiences, ...experiences];

  const handleCardClick = (experience) => {
    navigate(`/experience/${experience.id}`, { state: { experience } });
    // Alternatively for new tab: window.open(`/experience/${experience.id}`, '_blank');
  };

  const togglePause = (index) => {
    const newPausedStates = [...pausedStates];
    newPausedStates[index] = !newPausedStates[index];
    setPausedStates(newPausedStates);
  };

  return (
    <div className="bg-white pt-40 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-4">
          Our Experiences
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Discover handcrafted journeys that create lifelong memories
        </p>

        {/* First Carousel (Left to Right) */}
        <div
          className="mb-20 overflow-hidden relative"
          onMouseEnter={() => togglePause(0)}
          onMouseLeave={() => togglePause(0)}
        >
          <div
            className={`flex ${
              pausedStates[0] ? "animation-paused" : "animate-scroll"
            }`}
          >
            {carouselItems.map((item, index) => (
              <ExperienceCard
                key={`carousel1-${index}`}
                item={item}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>

        {/* Second Carousel (Right to Left) */}
        <div
          className="mb-20 overflow-hidden relative"
          onMouseEnter={() => togglePause(1)}
          onMouseLeave={() => togglePause(1)}
        >
          <div
            className={`flex ${
              pausedStates[1] ? "animation-paused" : "animate-scroll-reverse"
            }`}
          >
            {carouselItems.map((item, index) => (
              <ExperienceCard
                key={`carousel2-${index}`}
                item={item}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>

        {/* Third Carousel (Left to Right) */}
        {/* <div
          className="overflow-hidden relative"
          onMouseEnter={() => togglePause(2)}
          onMouseLeave={() => togglePause(2)}
        >
          <div
            className={`flex ${
              pausedStates[2] ? "animation-paused" : "animate-scroll"
            }`}
          >
            {carouselItems.map((item, index) => (
              <ExperienceCard
                key={`carousel3-${index}`}
                item={item}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

// Experience Card Component
const ExperienceCard = ({ item, onClick }) => {
  return (
    <div
      className="flex-shrink-0 w-80 mx-4 cursor-pointer group"
      onClick={() => onClick(item)}
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
        <div className="h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-serif text-gray-800 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
