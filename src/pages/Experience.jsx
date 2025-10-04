import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";

const Experience = () => {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const animationRef = useRef(null);
  const scrollPositionRef = useRef(0); // Track scroll position
  const navigate = useNavigate();

  // Sample data for experiences
  const experiences = [
    {
      id: 1,
      title: "Royal India & Wildlife Odyssey",
      description: "DELHI-AGRA-RANTHAMBORE-JAIPUR",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      duration: "9 Days / 8 Nights",
      price: "INR 16,888",
      tourHighlights: [
        "Delhi Discovery in Style: Explore the contrasts of Old & New Delhi with private guided visits to Jama Masjid, India Gate, Qutub Minar, and the vibrant Khari Baoli Spice Market.",
        "Agra & The Eternal Taj Mahal: Admire the timeless beauty of the Taj Mahal at sunrise and step into history at the majestic Agra Fort.",
        "Fatehpur Sikri Heritage Stop: Stroll through the red sandstone Mughal marvel, a UNESCO World Heritage Site, en route to Ranthambore.",
        "Luxury Wildlife Adventure: Embark on exclusive morning and afternoon safaris in Ranthambore National Park, with chances to spot Bengal Tigers, leopards, sloth bears, and over 300 bird species.",
        "Jaipur – The Regal Pink City: Discover Amber Fort, City Palace, and Jantar Mantar. Enhance your experience with a curated block-printing and carpet-weaving workshop led by master artisans.",
        "Immersive Cultural Journey: Indulge in India's rich heritage, exquisite architecture, and timeless crafts with personalized experiences.",
        "Seamless Luxury Travel: Private transfers, chauffeured journeys, and expert guides ensuring comfort at every step.",
        "Grand Farewell in Delhi: Conclude your journey with a specially curated farewell dinner, celebrating the flavors and traditions of India.",
      ],
      itinerary: [
        {
          day: 1,
          title: "Delhi: Arrival",
          description: "Arrival, transfer to hotel, overnight stay.",
        },
        {
          day: 2,
          title: "Delhi: Full-day Sightseeing",
          description:
            "Old & New Delhi, Khari Baoli Spice Market, Jama Masjid, India Gate, Qutub Minar.",
        },
        {
          day: 3,
          title: "Agra",
          description: "Drive to Agra, visit Agra Fort.",
        },
        {
          day: 4,
          title: "Taj Mahal & Ranthambore",
          description:
            "Visit Taj Mahal, stop at Fatehpur Sikri, transfer to Ranthambore.",
        },
        {
          day: 5,
          title: "Ranthambore: Wildlife Safari",
          description:
            "Morning & afternoon wildlife safaris to spot tigers, leopards, and birds.",
        },
        {
          day: 6,
          title: "Jaipur",
          description: "Drive to Jaipur, day at leisure.",
        },
        {
          day: 7,
          title: "Jaipur: Sightseeing",
          description:
            "Hawa Mahal, Amber Fort, City Palace, Jantar Mantar, block printing & carpet weaving workshop.",
        },
        {
          day: 8,
          title: "Delhi: Return",
          description: "Return to Delhi, farewell dinner.",
        },
        {
          day: 9,
          title: "Departure",
          description: "Transfer to Delhi airport for flight home.",
        },
      ],
    },
    {
      id: 2,
      title: "Golden Triangle Tour",
      description: "DELHI-AGRA-RANTHAMBORE-JAIPUR",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      duration: "9 Days / 8 Nights",
      price: "INR 16,888",
      tourHighlights: [
        "Delhi Discovery in Style: Explore the contrasts of Old & New Delhi with private guided visits to Jama Masjid, India Gate, Qutub Minar, and the vibrant Khari Baoli Spice Market.",
        "Agra & The Eternal Taj Mahal: Admire the timeless beauty of the Taj Mahal at sunrise and step into history at the majestic Agra Fort.",
        "Fatehpur Sikri Heritage Stop: Stroll through the red sandstone Mughal marvel, a UNESCO World Heritage Site, en route to Ranthambore.",
        "Luxury Wildlife Adventure: Embark on exclusive morning and afternoon safaris in Ranthambore National Park, with chances to spot Bengal Tigers, leopards, sloth bears, and over 300 bird species.",
        "Jaipur – The Regal Pink City: Discover Amber Fort, City Palace, and Jantar Mantar. Enhance your experience with a curated block-printing and carpet-weaving workshop led by master artisans.",
        "Immersive Cultural Journey: Indulge in India's rich heritage, exquisite architecture, and timeless crafts with personalized experiences.",
        "Seamless Luxury Travel: Private transfers, chauffeured journeys, and expert guides ensuring comfort at every step.",
        "Grand Farewell in Delhi: Conclude your journey with a specially curated farewell dinner, celebrating the flavors and traditions of India.",
      ],
      itinerary: [
        {
          day: 1,
          title: "Delhi: Arrival",
          description: "Arrival, transfer to hotel, overnight stay.",
        },
        {
          day: 2,
          title: "Delhi: Full-day Sightseeing",
          description:
            "Old & New Delhi, Khari Baoli Spice Market, Jama Masjid, India Gate, Qutub Minar.",
        },
        {
          day: 3,
          title: "Agra",
          description: "Drive to Agra, visit Agra Fort.",
        },
        {
          day: 4,
          title: "Taj Mahal & Ranthambore",
          description:
            "Visit Taj Mahal, stop at Fatehpur Sikri, transfer to Ranthambore.",
        },
        {
          day: 5,
          title: "Ranthambore: Wildlife Safari",
          description:
            "Morning & afternoon wildlife safaris to spot tigers, leopards, and birds.",
        },
        {
          day: 6,
          title: "Jaipur",
          description: "Drive to Jaipur, day at leisure.",
        },
        {
          day: 7,
          title: "Jaipur: Sightseeing",
          description:
            "Hawa Mahal, Amber Fort, City Palace, Jantar Mantar, block printing & carpet weaving workshop.",
        },
        {
          day: 8,
          title: "Delhi: Return",
          description: "Return to Delhi, farewell dinner.",
        },
        {
          day: 9,
          title: "Departure",
          description: "Transfer to Delhi airport for flight home.",
        },
      ],
    },
    {
      id: 3,
      title: "Kerala Backwaters Cruise",
      description: "DELHI-AGRA-RANTHAMBORE-JAIPUR",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      duration: "9 Days / 8 Nights",
      price: "INR 16,888",
      tourHighlights: [
        "Delhi Discovery in Style: Explore the contrasts of Old & New Delhi with private guided visits to Jama Masjid, India Gate, Qutub Minar, and the vibrant Khari Baoli Spice Market.",
        "Agra & The Eternal Taj Mahal: Admire the timeless beauty of the Taj Mahal at sunrise and step into history at the majestic Agra Fort.",
        "Fatehpur Sikri Heritage Stop: Stroll through the red sandstone Mughal marvel, a UNESCO World Heritage Site, en route to Ranthambore.",
        "Luxury Wildlife Adventure: Embark on exclusive morning and afternoon safaris in Ranthambore National Park, with chances to spot Bengal Tigers, leopards, sloth bears, and over 300 bird species.",
        "Jaipur – The Regal Pink City: Discover Amber Fort, City Palace, and Jantar Mantar. Enhance your experience with a curated block-printing and carpet-weaving workshop led by master artisans.",
        "Immersive Cultural Journey: Indulge in India's rich heritage, exquisite architecture, and timeless crafts with personalized experiences.",
        "Seamless Luxury Travel: Private transfers, chauffeured journeys, and expert guides ensuring comfort at every step.",
        "Grand Farewell in Delhi: Conclude your journey with a specially curated farewell dinner, celebrating the flavors and traditions of India.",
      ],
      itinerary: [
        {
          day: 1,
          title: "Delhi: Arrival",
          description: "Arrival, transfer to hotel, overnight stay.",
        },
        {
          day: 2,
          title: "Delhi: Full-day Sightseeing",
          description:
            "Old & New Delhi, Khari Baoli Spice Market, Jama Masjid, India Gate, Qutub Minar.",
        },
        {
          day: 3,
          title: "Agra",
          description: "Drive to Agra, visit Agra Fort.",
        },
        {
          day: 4,
          title: "Taj Mahal & Ranthambore",
          description:
            "Visit Taj Mahal, stop at Fatehpur Sikri, transfer to Ranthambore.",
        },
        {
          day: 5,
          title: "Ranthambore: Wildlife Safari",
          description:
            "Morning & afternoon wildlife safaris to spot tigers, leopards, and birds.",
        },
        {
          day: 6,
          title: "Jaipur",
          description: "Drive to Jaipur, day at leisure.",
        },
        {
          day: 7,
          title: "Jaipur: Sightseeing",
          description:
            "Hawa Mahal, Amber Fort, City Palace, Jantar Mantar, block printing & carpet weaving workshop.",
        },
        {
          day: 8,
          title: "Delhi: Return",
          description: "Return to Delhi, farewell dinner.",
        },
        {
          day: 9,
          title: "Departure",
          description: "Transfer to Delhi airport for flight home.",
        },
      ],
    },
    {
      id: 4,
      title: "Rajasthan Royal Experience",
      description: "DELHI-AGRA-RANTHAMBORE-JAIPUR",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      duration: "9 Days / 8 Nights",
      price: "INR 16,888",
      tourHighlights: [
        "Delhi Discovery in Style: Explore the contrasts of Old & New Delhi with private guided visits to Jama Masjid, India Gate, Qutub Minar, and the vibrant Khari Baoli Spice Market.",
        "Agra & The Eternal Taj Mahal: Admire the timeless beauty of the Taj Mahal at sunrise and step into history at the majestic Agra Fort.",
        "Fatehpur Sikri Heritage Stop: Stroll through the red sandstone Mughal marvel, a UNESCO World Heritage Site, en route to Ranthambore.",
        "Luxury Wildlife Adventure: Embark on exclusive morning and afternoon safaris in Ranthambore National Park, with chances to spot Bengal Tigers, leopards, sloth bears, and over 300 bird species.",
        "Jaipur – The Regal Pink City: Discover Amber Fort, City Palace, and Jantar Mantar. Enhance your experience with a curated block-printing and carpet-weaving workshop led by master artisans.",
        "Immersive Cultural Journey: Indulge in India's rich heritage, exquisite architecture, and timeless crafts with personalized experiences.",
        "Seamless Luxury Travel: Private transfers, chauffeured journeys, and expert guides ensuring comfort at every step.",
        "Grand Farewell in Delhi: Conclude your journey with a specially curated farewell dinner, celebrating the flavors and traditions of India.",
      ],
      itinerary: [
        {
          day: 1,
          title: "Delhi: Arrival",
          description: "Arrival, transfer to hotel, overnight stay.",
        },
        {
          day: 2,
          title: "Delhi: Full-day Sightseeing",
          description:
            "Old & New Delhi, Khari Baoli Spice Market, Jama Masjid, India Gate, Qutub Minar.",
        },
        {
          day: 3,
          title: "Agra",
          description: "Drive to Agra, visit Agra Fort.",
        },
        {
          day: 4,
          title: "Taj Mahal & Ranthambore",
          description:
            "Visit Taj Mahal, stop at Fatehpur Sikri, transfer to Ranthambore.",
        },
        {
          day: 5,
          title: "Ranthambore: Wildlife Safari",
          description:
            "Morning & afternoon wildlife safaris to spot tigers, leopards, and birds.",
        },
        {
          day: 6,
          title: "Jaipur",
          description: "Drive to Jaipur, day at leisure.",
        },
        {
          day: 7,
          title: "Jaipur: Sightseeing",
          description:
            "Hawa Mahal, Amber Fort, City Palace, Jantar Mantar, block printing & carpet weaving workshop.",
        },
        {
          day: 8,
          title: "Delhi: Return",
          description: "Return to Delhi, farewell dinner.",
        },
        {
          day: 9,
          title: "Departure",
          description: "Transfer to Delhi airport for flight home.",
        },
      ],
    },
    {
      id: 5,
      title: "Goa Beachfront Villas",
      description: "DELHI-AGRA-RANTHAMBORE-JAIPUR",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      duration: "9 Days / 8 Nights",
      price: "INR 16,888",
      tourHighlights: [
        "Delhi Discovery in Style: Explore the contrasts of Old & New Delhi with private guided visits to Jama Masjid, India Gate, Qutub Minar, and the vibrant Khari Baoli Spice Market.",
        "Agra & The Eternal Taj Mahal: Admire the timeless beauty of the Taj Mahal at sunrise and step into history at the majestic Agra Fort.",
        "Fatehpur Sikri Heritage Stop: Stroll through the red sandstone Mughal marvel, a UNESCO World Heritage Site, en route to Ranthambore.",
        "Luxury Wildlife Adventure: Embark on exclusive morning and afternoon safaris in Ranthambore National Park, with chances to spot Bengal Tigers, leopards, sloth bears, and over 300 bird species.",
        "Jaipur – The Regal Pink City: Discover Amber Fort, City Palace, and Jantar Mantar. Enhance your experience with a curated block-printing and carpet-weaving workshop led by master artisans.",
        "Immersive Cultural Journey: Indulge in India's rich heritage, exquisite architecture, and timeless crafts with personalized experiences.",
        "Seamless Luxury Travel: Private transfers, chauffeured journeys, and expert guides ensuring comfort at every step.",
        "Grand Farewell in Delhi: Conclude your journey with a specially curated farewell dinner, celebrating the flavors and traditions of India.",
      ],
      itinerary: [
        {
          day: 1,
          title: "Delhi: Arrival",
          description: "Arrival, transfer to hotel, overnight stay.",
        },
        {
          day: 2,
          title: "Delhi: Full-day Sightseeing",
          description:
            "Old & New Delhi, Khari Baoli Spice Market, Jama Masjid, India Gate, Qutub Minar.",
        },
        {
          day: 3,
          title: "Agra",
          description: "Drive to Agra, visit Agra Fort.",
        },
        {
          day: 4,
          title: "Taj Mahal & Ranthambore",
          description:
            "Visit Taj Mahal, stop at Fatehpur Sikri, transfer to Ranthambore.",
        },
        {
          day: 5,
          title: "Ranthambore: Wildlife Safari",
          description:
            "Morning & afternoon wildlife safaris to spot tigers, leopards, and birds.",
        },
        {
          day: 6,
          title: "Jaipur",
          description: "Drive to Jaipur, day at leisure.",
        },
        {
          day: 7,
          title: "Jaipur: Sightseeing",
          description:
            "Hawa Mahal, Amber Fort, City Palace, Jantar Mantar, block printing & carpet weaving workshop.",
        },
        {
          day: 8,
          title: "Delhi: Return",
          description: "Return to Delhi, farewell dinner.",
        },
        {
          day: 9,
          title: "Departure",
          description: "Transfer to Delhi airport for flight home.",
        },
      ],
    },
    {
      id: 6,
      title: "Wildlife Safari Adventure",
      description: "DELHI-AGRA-RANTHAMBORE-JAIPUR",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      duration: "9 Days / 8 Nights",
      price: "INR 16,888",
      tourHighlights: [
        "Delhi Discovery in Style: Explore the contrasts of Old & New Delhi with private guided visits to Jama Masjid, India Gate, Qutub Minar, and the vibrant Khari Baoli Spice Market.",
        "Agra & The Eternal Taj Mahal: Admire the timeless beauty of the Taj Mahal at sunrise and step into history at the majestic Agra Fort.",
        "Fatehpur Sikri Heritage Stop: Stroll through the red sandstone Mughal marvel, a UNESCO World Heritage Site, en route to Ranthambore.",
        "Luxury Wildlife Adventure: Embark on exclusive morning and afternoon safaris in Ranthambore National Park, with chances to spot Bengal Tigers, leopards, sloth bears, and over 300 bird species.",
        "Jaipur – The Regal Pink City: Discover Amber Fort, City Palace, and Jantar Mantar. Enhance your experience with a curated block-printing and carpet-weaving workshop led by master artisans.",
        "Immersive Cultural Journey: Indulge in India's rich heritage, exquisite architecture, and timeless crafts with personalized experiences.",
        "Seamless Luxury Travel: Private transfers, chauffeured journeys, and expert guides ensuring comfort at every step.",
        "Grand Farewell in Delhi: Conclude your journey with a specially curated farewell dinner, celebrating the flavors and traditions of India.",
      ],
      itinerary: [
        {
          day: 1,
          title: "Delhi: Arrival",
          description: "Arrival, transfer to hotel, overnight stay.",
        },
        {
          day: 2,
          title: "Delhi: Full-day Sightseeing",
          description:
            "Old & New Delhi, Khari Baoli Spice Market, Jama Masjid, India Gate, Qutub Minar.",
        },
        {
          day: 3,
          title: "Agra",
          description: "Drive to Agra, visit Agra Fort.",
        },
        {
          day: 4,
          title: "Taj Mahal & Ranthambore",
          description:
            "Visit Taj Mahal, stop at Fatehpur Sikri, transfer to Ranthambore.",
        },
        {
          day: 5,
          title: "Ranthambore: Wildlife Safari",
          description:
            "Morning & afternoon wildlife safaris to spot tigers, leopards, and birds.",
        },
        {
          day: 6,
          title: "Jaipur",
          description: "Drive to Jaipur, day at leisure.",
        },
        {
          day: 7,
          title: "Jaipur: Sightseeing",
          description:
            "Hawa Mahal, Amber Fort, City Palace, Jantar Mantar, block printing & carpet weaving workshop.",
        },
        {
          day: 8,
          title: "Delhi: Return",
          description: "Return to Delhi, farewell dinner.",
        },
        {
          day: 9,
          title: "Departure",
          description: "Transfer to Delhi airport for flight home.",
        },
      ],
    },
  ];

  // Duplicate items for infinite carousel effect
  const carouselItems = [...experiences, ...experiences];

  useEffect(() => {
    const carousel = carouselRef.current;
    let lastTimestamp = 0;
    const speed = 0.5; // Slower speed for better control

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isPaused && carousel) {
        // Update position based on time for smooth animation
        scrollPositionRef.current += (speed * deltaTime) / 16;

        // Reset to start when reaching the end for seamless loop
        if (scrollPositionRef.current >= carousel.scrollWidth / 2) {
          scrollPositionRef.current = 0;
        }

        carousel.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  const handleCardClick = (experience) => {
    navigate(`/experience/${experience.id}`, { state: { experience } });
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

        <h2 className="text-2xl font-serif text-gray-800 mb-8 pl-4 border-l-4 border-gold">
          Featured Experiences
        </h2>
        {/* Single Carousel */}
        <div
          className="mb-20 py-3 px-3 overflow-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={carouselRef}
            className="flex justify-center"
            style={{
              willChange: "transform",
              // Initialize position
              transform: `translateX(-${scrollPositionRef.current}px)`,
            }}
          >
            {carouselItems.map((item, index) => (
              <ExperienceCard
                key={`carousel-${index}`}
                item={item}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-serif text-gray-800 mb-8 pl-4 border-l-4 border-gold">
            All Experiences
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6">
            {experiences.map((item, index) => (
              <ExperienceCard
                key={`static-${index}`}
                item={item}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Experience Card Component
const ExperienceCard = ({ item, onClick }) => {
  return (
    <div
      className="flex-shrink-0 w-72 mx-3 cursor-pointer group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
      onClick={() => onClick(item)}
    >
      <div className="h-48 overflow-hidden relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Duration Label */}
        {item.duration && (
          <div className="absolute top-3 left-3 bg-black bg-opacity-80 text-white px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm border border-white border-opacity-20">
            {item.duration}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-serif text-gray-800 mb-2 line-clamp-2 group-hover:text-gold transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
      </div>

      {/* Price & CTA Section */}
      <div className="px-6 pb-6 ">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
              Starting from
            </p>
            <h1 className="text-xl font-bold text-gray-800 font-serif">
              {item.price || "INR 16,888"}
            </h1>
          </div>
          <div>
            <button className="bg-gold text-white px-2 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-dark transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50">
              View Package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
