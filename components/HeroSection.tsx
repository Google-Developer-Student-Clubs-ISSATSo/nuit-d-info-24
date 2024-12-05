"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center bg-cover bg-center bg-no-repeat" 
         style={{ backgroundImage: "url('/images/ocean-hero.jpg')" }}>
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-[#F4A261] drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Ocean & Human Parallels
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl text-white drop-shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Dive into the connections between the ocean and the human body.
      </motion.p>
      <motion.a
        href="#about"
        className="mt-8 px-6 py-3 bg-[#F4A261] text-[#1A374D] font-semibold rounded-lg shadow-lg hover:opacity-90"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Learn More
      </motion.a>
    </div>
  );
};

export default HeroSection;
