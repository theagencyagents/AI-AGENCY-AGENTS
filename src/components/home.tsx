import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "./layout/Header";
import HeroSection from "./sections/HeroSection";
import DirectoriesSection from "./sections/DirectoriesSection";
import AiToolsSection from "./sections/AiToolsSection";
import Footer from "./layout/Footer";
import SearchOverlay from "./search/SearchOverlay";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearchOpen(true);
  };

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-black" : "bg-gray-50"} transition-colors duration-300`}
    >
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black/80 to-blue-900/20 pointer-events-none z-0" />

      {/* Floating orbs with animation */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="fixed top-20 right-20 w-64 h-64 rounded-full bg-yellow-500/40 blur-3xl pointer-events-none z-0"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="fixed bottom-40 left-20 w-80 h-80 rounded-full bg-purple-500/30 blur-3xl pointer-events-none z-0"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.7, 0.3],
          x: [0, 15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="fixed top-1/2 left-1/3 w-40 h-40 rounded-full bg-blue-500/30 blur-3xl pointer-events-none z-0"
      />

      {/* Subtle background overlay */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1677442135136-760c813028c4?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-30 pointer-events-none z-0" />

      <div className="relative z-10">
        <Header
          onSearch={handleSearch}
          onThemeToggle={handleThemeToggle}
          isDarkMode={isDarkMode}
        />

        <main>
          <HeroSection />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            id="directories"
          >
            <DirectoriesSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            id="tools"
          >
            <AiToolsSection />
          </motion.div>
        </main>

        <Footer />
      </div>

      {/* Search Overlay */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        initialQuery={searchQuery}
      />
    </div>
  );
};

export default Home;
