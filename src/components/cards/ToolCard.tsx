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

interface ToolCardProps {
  name?: string;
  description?: string;
  category?: string;
  rating?: number;
  imageUrl?: string;
  externalLink?: string;
}

const ToolCard = ({
  name = "AI Assistant Pro",
  description = "A powerful AI assistant that helps with various tasks including content creation, research, and data analysis.",
  category = "Productivity",
  rating = 4.8,
  imageUrl = "https://images.unsplash.com/photo-1677442135136-760c813028c4?q=80&w=300&h=200&auto=format&fit=crop",
  externalLink = "https://example.com/ai-tool",
}: ToolCardProps) => {
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
              src={imageUrl}
              alt={name}
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
                {category}
              </Badge>
            </div>
            <div className="flex items-center mt-1">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
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

export default ToolCard;
