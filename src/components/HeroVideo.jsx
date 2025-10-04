// components/HeroVideo.tsx
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { NavLink } from "react-router";
import WebsiteFrontVideo from "../assets/videos/WebsiteFrontVideoCroppedNew.mp4";
import logo from "../assets/images/navLogo.png";
import placeholderImage from "../assets/images/aboutUs.jpg"; // Add your placeholder image

const HeroVideo = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Placeholder image that shows until video is ready */}
      {!isReady && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${placeholderImage})` }}
        />
      )}

      <ReactPlayer
        src={WebsiteFrontVideo}
        playing
        loop
        muted={isMuted}
        width="100%"
        height="100%"
        className="absolute inset-0 object-cover"
        onReady={() => setIsReady(true)}
        onStart={() => setIsReady(true)}
        style={{
          opacity: isReady ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      />

      {/* Gradient Overlay (Luxury Style) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <img src={logo} alt="cherish" />
        <h1 className="text-5xl md:text-7xl font-serif mb-4 text-gold">
          Welcome to Cherish Journeys
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8">
          Recognised by Ministry of Tourism, Government of India
        </p>

        <NavLink
          to="/about"
          onClick={() => setIsMuted(!isMuted)}
          className="bg-transparent border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          Explore More
        </NavLink>
      </div>
    </div>
  );
};

export default HeroVideo;
