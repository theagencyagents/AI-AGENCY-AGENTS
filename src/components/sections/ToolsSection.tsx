import React, { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Search } from "lucide-react";
import ToolCard from "../cards/ToolCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tools as toolsData } from "@/data/tools";

interface ToolsSectionProps {
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
}

const ToolsSection = ({
  title = "Curated AI Tools",
  description = "Discover the best AI tools handpicked by our experts to supercharge your workflow.",
  tools = toolsData,
}: ToolsSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Extract unique categories from tools
  const categories = ["all", ...new Set(tools.map((tool) => tool.category))];

  // Filter tools based on search query and active category
  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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

        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search AI tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-purple-500/50"
            />
          </div>
        </div>

        {filteredTools.length === 0 ? (
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTools.map((tool) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ToolCard
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
      </div>
    </section>
  );
};

export default ToolsSection;
