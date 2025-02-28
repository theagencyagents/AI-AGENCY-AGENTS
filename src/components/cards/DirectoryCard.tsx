import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DirectoryCardProps {
  name: string;
  description: string;
  url: string;
  imageUrl?: string;
  category?: string;
  dr?: number;
  id?: string;
}

const DirectoryCard = ({
  name = "AI Tools Directory",
  description = "A comprehensive collection of the latest AI tools and resources for various applications.",
  url = "https://example.com",
  imageUrl = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop",
  category = "General",
  dr = 50,
  id = "1",
}: DirectoryCardProps) => {
  // Function to get a themed image based on category
  const getThemedImage = () => {
    const categoryLower = category.toLowerCase();

    if (categoryLower.includes("general")) {
      return "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop";
    } else if (categoryLower.includes("productivity")) {
      return "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop";
    } else if (
      categoryLower.includes("curated") ||
      categoryLower.includes("collection")
    ) {
      return "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&auto=format&fit=crop";
    } else if (
      categoryLower.includes("comprehensive") ||
      categoryLower.includes("database")
    ) {
      return "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop";
    } else if (
      categoryLower.includes("search") ||
      categoryLower.includes("navigation")
    ) {
      return "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?w=800&auto=format&fit=crop";
    } else if (categoryLower.includes("generative")) {
      return "https://images.unsplash.com/photo-1675271591211-930246f80c5e?w=800&auto=format&fit=crop";
    } else if (
      categoryLower.includes("business") ||
      categoryLower.includes("startup")
    ) {
      return "https://images.unsplash.com/photo-1661347333292-b85d7a70c00f?w=800&auto=format&fit=crop";
    } else if (categoryLower.includes("free")) {
      return "https://images.unsplash.com/photo-1664575599736-c5197c684128?w=800&auto=format&fit=crop";
    } else if (
      categoryLower.includes("news") ||
      categoryLower.includes("daily")
    ) {
      return "https://images.unsplash.com/photo-1655720828018-7467e2ecc6b1?w=800&auto=format&fit=crop";
    } else {
      return "https://images.unsplash.com/photo-1677442135136-760c813028c4?w=800&auto=format&fit=crop";
    }
  };

  // Use provided image or get a themed one
  const displayImage = imageUrl || getThemedImage();

  // Get DR color based on rating
  const getDrColor = () => {
    if (dr >= 70) return "text-yellow-500";
    if (dr >= 60) return "text-orange-500";
    if (dr >= 50) return "text-green-500";
    if (dr >= 40) return "text-blue-500";
    if (dr >= 30) return "text-purple-500";
    if (dr >= 20) return "text-pink-500";
    if (dr >= 10) return "text-red-500";
    return "text-gray-500";
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden backdrop-blur-xl bg-black/30 border border-white/30 relative group">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500/10 to-blue-500/10 transition-opacity duration-500" />
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />

        {/* DR Rank Badge */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/30">
          <Award className={`h-3 w-3 ${getDrColor()}`} />
          <span className="text-xs font-semibold text-white">DR {dr}</span>
        </div>

        <div className="w-full h-32 overflow-hidden">
          <img
            src={displayImage}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl font-bold text-white">
              {name}
            </CardTitle>
            <span className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/80">
              {category}
            </span>
          </div>
          <CardDescription className="text-white/70">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* Rank indicator */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/60">Rank:</span>
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full ${getDrColor()} bg-black/50`}
            >
              #{id}
            </span>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between items-center border-t border-white/10 pt-4">
          <span className="text-xs text-white/60">AI Directory</span>
          <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            whileHover={{ x: 3 }}
          >
            Visit <ExternalLink size={14} />
          </motion.a>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default DirectoryCard;
