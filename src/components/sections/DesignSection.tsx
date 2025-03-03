import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AiToolCard from "../cards/AiToolCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { aiTools } from "@/data/ai-tools";

const DesignSection = () => {
  // Filter tools by category
  const designTools = aiTools
    .filter((tool) => tool.category === "🎨 Design & Creative")
    .sort((a, b) => b.rating - a.rating);

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-transparent backdrop-blur-none">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🎨 Design & Creative Tools
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Unleash your creativity with AI-powered design tools that help you
            create stunning visuals and designs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {designTools.map((tool) => (
            <motion.div key={tool.id} variants={itemVariants}>
              <AiToolCard
                name={tool.name}
                description={tool.description}
                category={tool.category}
                rating={tool.rating}
                imageUrl={tool.imageUrl}
                externalLink={tool.externalLink}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Button
            asChild
            variant="outline"
            className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-6 py-6 rounded-full group transition-all duration-300"
            size="lg"
          >
            <Link
              to="/tools?category=🎨 Design & Creative"
              className="text-white hover:text-white"
            >
              Explore All Design Tools
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
