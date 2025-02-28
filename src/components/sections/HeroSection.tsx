import React from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const HeroSection = ({
  title = "AI Agency Agents Directory",
  subtitle = "Discover the Best AI Tools & Directories",
  description = "Your one-stop platform for finding the most comprehensive AI directories and curated selection of top AI tools to supercharge your workflow.",
}: HeroSectionProps) => {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black/30 to-blue-900/30 z-0" />

      {/* Floating orbs */}
      <div className="absolute top-20 right-40 w-72 h-72 rounded-full bg-yellow-500/40 blur-3xl z-0 animate-pulse" />
      <div className="absolute -bottom-20 left-20 w-96 h-96 rounded-full bg-purple-500/30 blur-3xl z-0" />

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-sm z-0" />

      {/* Content container */}
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Glowing accent element */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-xl absolute -top-10 left-1/2 -translate-x-1/2 z-0 opacity-70"
          />

          {/* Title with glow effect */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="relative inline-block">
              {title}
              <span className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 blur-lg opacity-30 z-[-1] rounded-lg"></span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            className="text-xl md:text-2xl text-white/80 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {subtitle}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-white/70 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full flex items-center gap-2 group transition-all duration-300 shadow-lg shadow-purple-500/20"
              size="lg"
            >
              <a href="/directories">
                <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Explore Directories
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/10 px-6 py-2 rounded-full flex items-center gap-2 group transition-all duration-300"
              size="lg"
            >
              <a href="/tools">
                <Sparkles className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                Discover AI Tools
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8 text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-purple-400" />
              <span>100+ AI Directories</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>500+ Curated AI Tools</span>
            </div>
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-green-400" />
              <span>AI-Powered Search</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
