import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AiToolCardProps {
  name?: string;
  description?: string;
  category?: string;
  rating?: number;
  imageUrl?: string;
  externalLink?: string;
}

const AiToolCard = ({
  name = "AI Assistant Pro",
  description = "A powerful AI assistant that helps with various tasks including content creation, research, and data analysis.",
  category = "Productivity",
  rating = 4.8,
  imageUrl = "https://images.unsplash.com/photo-1677442135136-760c813028c4?q=80&w=300&h=200&auto=format&fit=crop",
  externalLink = "https://example.com/ai-tool",
}: AiToolCardProps) => {
  // Function to get a themed image based on category
  const getThemedImage = () => {
    const categoryLower = category.toLowerCase();

    if (categoryLower.includes("chat")) {
      return "https://images.unsplash.com/photo-1677442135136-760c813028c4?w=800&auto=format&fit=crop";
    } else if (
      categoryLower.includes("art") ||
      categoryLower.includes("image")
    ) {
      return "https://images.unsplash.com/photo-1675271591211-930246f80c5e?w=800&auto=format&fit=crop";
    } else if (
      categoryLower.includes("content") ||
      categoryLower.includes("seo")
    ) {
      return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop";
    } else if (
      categoryLower.includes("video") ||
      categoryLower.includes("editing")
    ) {
      return "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?w=800&auto=format&fit=crop";
    } else if (
      categoryLower.includes("music") ||
      categoryLower.includes("audio")
    ) {
      return "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop";
    } else if (
      categoryLower.includes("productivity") ||
      categoryLower.includes("growth")
    ) {
      return "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop";
    } else if (
      categoryLower.includes("meeting") ||
      categoryLower.includes("assistant")
    ) {
      return "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop";
    } else if (
      categoryLower.includes("code") ||
      categoryLower.includes("database")
    ) {
      return "https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=800&auto=format&fit=crop";
    } else if (categoryLower.includes("writing")) {
      return "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop";
    } else if (
      categoryLower.includes("sales") ||
      categoryLower.includes("marketing")
    ) {
      return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop";
    } else if (
      categoryLower.includes("search") ||
      categoryLower.includes("research")
    ) {
      return "https://images.unsplash.com/photo-1655720828018-7467e2ecc6b1?w=800&auto=format&fit=crop";
    } else if (
      categoryLower.includes("slides") ||
      categoryLower.includes("presentations")
    ) {
      return "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop";
    } else {
      return "https://images.unsplash.com/photo-1673297001830-e7b06d8d8a34?w=800&auto=format&fit=crop";
    }
  };

  // Use provided image or get a themed one
  const displayImage = imageUrl || getThemedImage();

  // Add error handling for images
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = getThemedImage();
  };

  // Get rating color based on score
  const getRatingColor = () => {
    if (rating >= 4.8) return "text-yellow-500 fill-yellow-500";
    if (rating >= 4.5) return "text-green-500 fill-green-500";
    if (rating >= 4.0) return "text-blue-500 fill-blue-500";
    if (rating >= 3.5) return "text-purple-500 fill-purple-500";
    return "text-gray-500 fill-gray-500";
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden bg-black/30 backdrop-blur-xl border border-white/30 hover:border-white/40 transition-all duration-500 relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="h-40 w-full overflow-hidden">
            <img
              src={displayImage}
              alt={name}
              onError={handleImageError}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl text-white">{name}</CardTitle>
              <Badge
                variant="secondary"
                className="bg-white/10 text-white hover:bg-white/20"
              >
                {category.split(" ").slice(1).join(" ")}
              </Badge>
            </div>
            <div className="flex items-center mt-1">
              <Star className={`h-4 w-4 ${getRatingColor()}`} />
              <span className="text-sm text-white/70 ml-1">{rating}</span>
            </div>
          </CardHeader>

          <CardContent>
            <CardDescription className="text-white/70">
              {description}
            </CardDescription>
          </CardContent>

          <CardFooter className="flex justify-between items-center">
            <Button
              variant="outline"
              className="text-white border-white/30 bg-white/5 hover:bg-white/10 hover:text-white"
              onClick={() => window.open(externalLink, "_blank")}
            >
              Try Tool
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white/70 hover:text-white hover:bg-white/10"
              onClick={() => window.open(externalLink, "_blank")}
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
};

export default AiToolCard;
