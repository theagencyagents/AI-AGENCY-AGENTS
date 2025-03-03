import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DirectoryCard from "../cards/DirectoryCard";
import { Button } from "@/components/ui/button";
import { directories } from "@/data/directories";
import { Link } from "react-router-dom";

interface DirectoriesSectionProps {
  title?: string;
  description?: string;
  directories?: Array<{
    id: string;
    name: string;
    description: string;
    url: string;
    imageUrl: string;
    category: string;
    dr: number;
  }>;
  showAll?: boolean;
}

const DirectoriesSection = ({
  title = "AI Directories Meta-Directory",
  description = "Discover the best AI directories from across the web, ranked by domain authority and usefulness.",
  directories: directoryList = directories,
  showAll = false,
}: DirectoriesSectionProps) => {
  // Sort directories by DR (highest first)
  const sortedDirectories = [...directoryList].sort((a, b) => b.dr - a.dr);

  // Get directories for display (all if showAll is true, otherwise just 3)
  const displayDirectories = showAll
    ? sortedDirectories
    : sortedDirectories.slice(0, 3);

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
            {title}
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayDirectories.map((directory) => (
            <motion.div key={directory.id} variants={itemVariants}>
              <DirectoryCard
                name={directory.name}
                description={directory.description}
                url={directory.url}
                imageUrl={directory.imageUrl}
                category={directory.category}
                dr={directory.dr}
              />
            </motion.div>
          ))}
        </motion.div>

        {!showAll && displayDirectories.length > 0 && (
          <div className="mt-10 text-center">
            <Button
              asChild
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-6 py-6 rounded-full group transition-all duration-300"
              size="lg"
            >
              <Link to="/directories" className="text-white hover:text-white">
                View All Directories
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DirectoriesSection;
