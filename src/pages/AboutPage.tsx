import React from "react";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black transition-colors duration-300">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black/80 to-blue-900/20 pointer-events-none z-0" />

      {/* Floating orbs */}
      <div className="fixed top-20 right-20 w-64 h-64 rounded-full bg-green-500/40 blur-3xl pointer-events-none z-0 animate-float-slow" />
      <div className="fixed bottom-40 left-20 w-80 h-80 rounded-full bg-purple-500/30 blur-3xl pointer-events-none z-0 animate-float-medium" />

      {/* Subtle background overlay */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1677442135136-760c813028c4?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-30 pointer-events-none z-0" />

      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-black/40 backdrop-blur-xl p-8 rounded-xl border border-white/10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              About AI Agency Agents
            </h1>

            <div className="space-y-6 text-white/80">
              <p>
                AI Agency Agents (AAA) is a comprehensive meta-directory
                platform designed to help users navigate the rapidly expanding
                landscape of AI tools and directories. Our mission is to provide
                a single, user-friendly hub where AI enthusiasts, professionals,
                and businesses can discover the most valuable AI resources
                available online.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                Our Mission
              </h2>

              <p>
                In the fast-evolving world of artificial intelligence, finding
                the right tools can be overwhelming. AAA was created to solve
                this problem by curating and organizing the best AI directories
                and tools in one place, ranked by domain authority and
                usefulness.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                What We Offer
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  A meta-directory of the top AI directories across the web
                </li>
                <li>
                  Curated collections of best-in-class AI tools for various
                  purposes
                </li>
                <li>
                  Domain Rating (DR) scores to help you identify the most
                  authoritative sources
                </li>
                <li>
                  Intuitive search functionality to quickly find what you need
                </li>
                <li>
                  Regular updates to ensure you have access to the latest
                  resources
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                Our Approach
              </h2>

              <p>
                We believe in quality over quantity. Each directory and tool
                featured on our platform has been carefully evaluated based on
                several criteria, including domain authority, content quality,
                user experience, and overall value. Our goal is to save you time
                by connecting you with only the most reliable and useful AI
                resources.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                Join Our Community
              </h2>

              <p>
                AI Agency Agents is more than just a directory—it's a community
                of AI enthusiasts and professionals. We welcome your feedback,
                suggestions, and contributions to help make our platform even
                better. Together, we can navigate the exciting future of
                artificial intelligence.
              </p>
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
