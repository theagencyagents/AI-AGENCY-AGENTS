import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import DirectoryCard from "@/components/cards/DirectoryCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { directories as directoryData } from "@/data/directories";
import { Link } from "react-router-dom";

interface DirectoryData {
  id: string;
  name: string;
  description: string;
  url: string;
  imageUrl: string;
  category: string;
  dr?: number;
}

interface DirectoriesSectionProps {
  title?: string;
  description?: string;
  directories?: DirectoryData[];
  showAll?: boolean;
  page?: number;
}

const ITEMS_PER_PAGE = 12;

const DirectoriesSection = ({
  title = "AI Directories",
  description = "Explore our curated collection of the best AI directories across the web",
  directories = directoryData,
  showAll = false,
  page = 1,
}: DirectoriesSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(page);
  const [totalPages, setTotalPages] = useState(1);

  const filteredDirectories = directories.filter((directory) => {
    const matchesSearch =
      directory.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      directory.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSearch;
  });

  // Sort directories by DR rating (high to low)
  const sortedDirectories = [...filteredDirectories].sort(
    (a, b) => (b.dr || 0) - (a.dr || 0),
  );

  // Calculate total pages
  useEffect(() => {
    setTotalPages(Math.ceil(sortedDirectories.length / ITEMS_PER_PAGE));
  }, [sortedDirectories.length]);

  // Get directories for current page or top 3 for homepage
  const displayDirectories = showAll
    ? sortedDirectories.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE,
      )
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        {showAll && (
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-md">
              <Input
                type="text"
                placeholder="Search directories..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="bg-black/30 border-white/10 text-white placeholder:text-white/50 pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
            </div>
          </div>
        )}

        {displayDirectories.length > 0 ? (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                    id={directory.id}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            {showAll && totalPages > 1 && (
              <div className="flex justify-center mt-12 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                >
                  Previous
                </Button>
                <div className="flex items-center gap-2 px-4">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNum) => (
                      <Button
                        key={pageNum}
                        variant={
                          pageNum === currentPage ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setCurrentPage(pageNum)}
                        className={
                          pageNum === currentPage
                            ? "bg-purple-600 hover:bg-purple-700 text-white"
                            : "border-white/20 bg-white/5 text-white hover:bg-white/10"
                        }
                      >
                        {pageNum}
                      </Button>
                    ),
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                >
                  Next
                </Button>
              </div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-white/70 text-lg mb-4">
              No directories found matching your criteria
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setCurrentPage(1);
              }}
              className="border-white/10 text-white hover:bg-white/10"
            >
              Reset Filters
            </Button>
          </motion.div>
        )}

        {!showAll && displayDirectories.length > 0 && (
          <div className="mt-10 text-center">
            <Button
              asChild
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-6 py-6 rounded-full group transition-all duration-300"
              size="lg"
            >
              <Link to="/directories">
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
