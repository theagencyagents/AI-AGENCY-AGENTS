import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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

interface DirectoryCardProps {
  name?: string;
  description?: string;
  url?: string;
  imageUrl?: string;
  category?: string;
  dr?: number;
}

const DirectoryCard = ({
  name = "AI Directory Hub",
  description = "A comprehensive collection of AI tools and resources for various applications.",
  url = "https://example.com/directory",
  imageUrl = "https://images.unsplash.com/photo-1677442135136-760c813028c4?q=80&w=300&h=200&auto=format&fit=crop",
  category = "General",
  dr = 65,
}: DirectoryCardProps) => {
  // Function to get a themed image based on category
  const getThemedImage = () => {
    const categoryLower = category.toLowerCase();

    if (categoryLower.includes("general")) {
      return "https://images.unsplash.com/photo-1677442135136-760c813028c4?w=800&auto=format&fit=crop";
    } else if (categoryLower.includes("comprehensive")) {
      return "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop";
    } else if (categoryLower.includes("curated")) {
      return "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&auto=format&fit=crop";
    } else if (categoryLower.includes("navigation")) {
      return "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?w=800&auto=format&fit=crop";
    } else if (categoryLower.includes("search")) {
      return "https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=800&auto=format&fit=crop";
    } else if (categoryLower.includes("productivity")) {
      return "https://images.unsplash.com/photo-1673297001830-e7b06d8d8a34?w=800&auto=format&fit=crop";
    } else if (categoryLower.includes("free")) {
      return "https://images.unsplash.com/photo-1664575599736-c5197c684128?w=800&auto=format&fit=crop";
    } else if (categoryLower.includes("aggregator")) {
      return "https://images.unsplash.com/photo-1655720828018-7467e2ecc6b1?w=800&auto=format&fit=crop";
    } else if (categoryLower.includes("discovery")) {
      return "https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=800&auto=format&fit=crop";
    } else {
      return "https://images.unsplash.com/photo-1675271591211-930246f80c5e?w=800&auto=format&fit=crop";
    }
  };

  // Use provided image or get a themed one
  const displayImage = imageUrl || getThemedImage();

  // Add error handling for images
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = getThemedImage();
  };

  // Get DR color based on score
  const getDRColor = () => {
    if (dr >= 70) return "bg-green-500";
    if (dr >= 50) return "bg-blue-500";
    if (dr >= 30) return "bg-purple-500";
    return "bg-gray-500";
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
          <div className="h-40 w-full overflow-hidden relative">
            <img
              src={displayImage}
              alt={name}
              onError={handleImageError}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute top-2 right-2 px-2 py-1 rounded-md backdrop-blur-md bg-black/50 border border-white/20 flex items-center justify-center text-white text-xs font-semibold shadow-lg">
              <span className="mr-1 text-xs font-bold bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
                DR
              </span>
              <span className="font-mono font-bold text-white">#{dr}</span>
            </div>
          </div>

          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl text-white">{name}</CardTitle>
              <Badge
                variant="secondary"
                className="bg-white/10 text-white hover:bg-white/20"
              >
                {category}
              </Badge>
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
              onClick={() => window.open(url, "_blank")}
            >
              Visit Directory
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white/70 hover:text-white hover:bg-white/10"
              onClick={() => window.open(url, "_blank")}
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
};

export default DirectoryCard;
