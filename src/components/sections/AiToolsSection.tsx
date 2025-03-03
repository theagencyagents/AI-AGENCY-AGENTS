import React, { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Search, ArrowRight } from "lucide-react";
import AiToolCard from "../cards/AiToolCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { aiTools } from "@/data/ai-tools";
import { Link } from "react-router-dom";

interface AiToolsSectionProps {
  title?: string;
  description?: string;
  tools?: Array<{
    id: string;
    name: string;
    description: string;
    category: string;
    rating: number;
    imageUrl: string;
    externalLink: string;
  }>;
  showAll?: boolean;
  initialCategory?: string;
}

const AiToolsSection = ({
  title = "Curated AI Tools",
  description = "Discover the best AI tools handpicked by our experts to supercharge your workflow.",
  tools = aiTools,
  showAll = false,
  initialCategory = "all",
}: AiToolsSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  // Extract unique categories from tools
  const uniqueCategories = [
    "all",
    ...new Set(tools.map((tool) => tool.category)),
  ];

  // Organize tools by category
  const toolsByCategory = {};
  tools.forEach((tool) => {
    if (!toolsByCategory[tool.category]) {
      toolsByCategory[tool.category] = [];
    }
    toolsByCategory[tool.category].push(tool);
  });

  // Sort categories by number of tools (descending)
  const sortedCategories = Object.keys(toolsByCategory).sort(
    (a, b) => toolsByCategory[b].length - toolsByCategory[a].length,
  );

  // Filter tools based on search query and active category
  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort tools by rating (highest first)
  const sortedTools = [...filteredTools].sort((a, b) => b.rating - a.rating);

  // Get tools for display (all if showAll is true, otherwise just top tools from each category)
  const displayTools = showAll ? sortedTools : [];

  // For homepage, get top tools from each major category
  const featuredCategories = [
    "🤖💬 Chat Bot",
    "🌄 Art & Image Generator",
    "📠 Content Generation & Seo",
    "🎬 Video Generation & Editing",
    "🎼 Music & Audio Generation",
    "💻 Code & Database Assistant",
    "🚀 Productivity & Personal Growth",
    "👨‍💻 Meeting Assistant",
    "✍️ Writing Assistant",
    "🔍 Search Engines",
    "🎓 Research Assistant",
    "📊 Slides & Presentations",
    "💰 Sales & Marketing",
  ];

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

  // Add event listeners after component mounts
  React.useEffect(() => {
    const dropdownButton = document.getElementById("dropdown-button");
    const dropdownContent = document.querySelector(".dropdown-content");

    if (dropdownButton && dropdownContent) {
      // Toggle dropdown when button is clicked
      const handleClick = (e: MouseEvent) => {
        e.stopPropagation();
        dropdownContent.classList.toggle("hidden");
      };

      // Close dropdown when clicking outside
      const handleOutsideClick = (e: MouseEvent) => {
        if (
          !dropdownContent.contains(e.target as Node) &&
          e.target !== dropdownButton &&
          !dropdownButton.contains(e.target as Node)
        ) {
          dropdownContent.classList.add("hidden");
        }
      };

      dropdownButton.addEventListener("click", handleClick);
      document.addEventListener("click", handleOutsideClick);

      // Cleanup event listeners
      return () => {
        dropdownButton.removeEventListener("click", handleClick);
        document.removeEventListener("click", handleOutsideClick);
      };
    }
  }, []);

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

        {showAll && (
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="relative w-full md:w-auto md:flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search AI tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-purple-500/50"
              />
            </div>

            <div className="relative w-full md:w-auto">
              <div className="relative">
                <div className="dropdown">
                  <Button
                    variant="outline"
                    id="dropdown-button"
                    className="w-full md:w-auto bg-black/30 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 flex items-center justify-between gap-2 py-2 px-4"
                  >
                    <span>
                      {activeCategory === "all"
                        ? "All Categories"
                        : activeCategory}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </Button>

                  <div className="dropdown-content absolute right-0 z-50 mt-2 w-full md:w-[500px] bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl hidden">
                    <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-2 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent">
                      <Button
                        key="all"
                        variant="ghost"
                        onClick={() => {
                          setActiveCategory("all");
                          const dropdownContent =
                            document.querySelector(".dropdown-content");
                          if (dropdownContent)
                            dropdownContent.classList.add("hidden");
                        }}
                        className={`justify-start text-left ${activeCategory === "all" ? "bg-gradient-to-r from-purple-600/80 to-blue-600/80 text-white" : "text-white/80 hover:text-white hover:bg-white/10"} rounded-lg transition-all duration-300 py-2 px-3`}
                      >
                        All Categories
                      </Button>
                      {sortedCategories.map((category) => (
                        <Button
                          key={category}
                          variant="ghost"
                          onClick={() => {
                            setActiveCategory(category);
                            const dropdownContent =
                              document.querySelector(".dropdown-content");
                            if (dropdownContent)
                              dropdownContent.classList.add("hidden");
                          }}
                          className={`justify-start text-left ${activeCategory === category ? "bg-gradient-to-r from-purple-600/80 to-blue-600/80 text-white" : "text-white/80 hover:text-white hover:bg-white/10"} rounded-lg transition-all duration-300 py-2 px-3`}
                        >
                          {category} ({toolsByCategory[category].length})
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Display tools by category on homepage */}
        {!showAll && (
          <div className="space-y-16">
            {featuredCategories.map((category) => {
              const categoryTools = tools
                .filter((tool) => tool.category === category)
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 3);

              if (categoryTools.length === 0) return null;

              return (
                <div key={category} className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">
                      {category}
                    </h3>
                    <Button
                      asChild
                      variant="ghost"
                      className="text-white/70 hover:text-white hover:bg-white/10 group"
                    >
                      <Link
                        to={`/tools?category=${encodeURIComponent(category)}`}
                        className="flex items-center"
                      >
                        View All
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {categoryTools.map((tool) => (
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
                </div>
              );
            })}
          </div>
        )}

        {/* Display filtered tools on tools page */}
        {showAll && (
          <>
            {displayTools.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-white/70 text-lg">
                  No tools found matching your criteria.
                </p>
                <Button
                  variant="outline"
                  className="mt-4 text-white border-white/20 hover:bg-white/10"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {displayTools.map((tool) => (
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
            )}
          </>
        )}

        {!showAll && (
          <div className="mt-16 text-center">
            <Button
              asChild
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-6 py-6 rounded-full group transition-all duration-300"
              size="lg"
            >
              <Link to="/tools" className="text-white hover:text-white">
                Explore All AI Tools
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AiToolsSection;
