import React from "react";
import { motion } from "framer-motion";
import Header from "../layout/Header";
import MusicAudioSection from "../sections/MusicAudioSection";
import Footer from "../layout/Footer";

const MusicAudioPage = () => {
  return (
    <div className="min-h-screen bg-black transition-colors duration-300">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black/80 to-blue-900/20 pointer-events-none z-0" />

      {/* Floating orbs */}
      <div className="fixed top-20 right-20 w-64 h-64 rounded-full bg-pink-500/40 blur-3xl pointer-events-none z-0 animate-float-slow" />
      <div className="fixed bottom-40 left-20 w-80 h-80 rounded-full bg-indigo-500/30 blur-3xl pointer-events-none z-0 animate-float-medium" />

      {/* Subtle background overlay */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-30 pointer-events-none z-0" />

      <div className="relative z-10">
        <Header />

        <main>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-10 pb-4 px-4 md:px-8 max-w-7xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI Music & Audio Generation
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Transform your audio projects with AI-powered tools for music
              creation, voice synthesis, and audio enhancement
            </p>
          </motion.div>

          <MusicAudioSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MusicAudioPage;
