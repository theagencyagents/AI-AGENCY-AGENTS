import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AiToolCard from "../cards/AiToolCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const chatbots = [
  {
    id: "1",
    name: "ChatGPT",
    description:
      "Advanced language model for conversation and content creation.",
    category: "🤖💬 Chat Bot",
    rating: 4.9,
    imageUrl:
      "https://images.unsplash.com/photo-1677442135136-760c813028c4?w=800&auto=format&fit=crop",
    externalLink: "https://chat.openai.com/",
  },
  {
    id: "7",
    name: "Anthropic Claude",
    description:
      "Conversational AI assistant focused on helpfulness and safety.",
    category: "🤖💬 Chat Bot",
    rating: 4.8,
    imageUrl:
      "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&auto=format&fit=crop",
    externalLink: "https://www.anthropic.com/claude",
  },
  {
    id: "31",
    name: "Gemini",
    description:
      "Google's multimodal AI model that can understand and generate text, images, audio, and code.",
    category: "🤖💬 Chat Bot",
    rating: 4.8,
    imageUrl:
      "https://images.unsplash.com/photo-1677442135136-760c813028c4?w=800&auto=format&fit=crop",
    externalLink: "https://gemini.google.com/",
  },
  {
    id: "101",
    name: "Bing Chat",
    description:
      "Microsoft's AI-powered chat assistant integrated with Bing search engine.",
    category: "🤖💬 Chat Bot",
    rating: 4.6,
    imageUrl:
      "https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=800&auto=format&fit=crop",
    externalLink: "https://www.bing.com/chat",
  },
  {
    id: "102",
    name: "Character.AI",
    description:
      "Platform for creating and chatting with AI characters with unique personalities.",
    category: "🤖💬 Chat Bot",
    rating: 4.7,
    imageUrl:
      "https://images.unsplash.com/photo-1675271591211-930246f80c5e?w=800&auto=format&fit=crop",
    externalLink: "https://character.ai/",
  },
  {
    id: "103",
    name: "Pi",
    description:
      "Personal AI assistant designed for natural, empathetic conversations.",
    category: "🤖💬 Chat Bot",
    rating: 4.5,
    imageUrl:
      "https://images.unsplash.com/photo-1673297001830-e7b06d8d8a34?w=800&auto=format&fit=crop",
    externalLink: "https://heypi.com/",
  },
  {
    id: "104",
    name: "Poe",
    description:
      "Platform that provides access to multiple AI chatbots in one interface.",
    category: "🤖💬 Chat Bot",
    rating: 4.6,
    imageUrl:
      "https://images.unsplash.com/photo-1655720828018-7467e2ecc6b1?w=800&auto=format&fit=crop",
    externalLink: "https://poe.com/",
  },
  {
    id: "105",
    name: "Replika",
    description:
      "AI companion designed for meaningful conversations and emotional support.",
    category: "🤖💬 Chat Bot",
    rating: 4.4,
    imageUrl:
      "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?w=800&auto=format&fit=crop",
    externalLink: "https://replika.com/",
  },
  {
    id: "106",
    name: "ChatSonic",
    description:
      "AI chatbot with real-time information access and voice capabilities.",
    category: "🤖💬 Chat Bot",
    rating: 4.5,
    imageUrl:
      "https://images.unsplash.com/photo-1664575599736-c5197c684128?w=800&auto=format&fit=crop",
    externalLink: "https://writesonic.com/chat",
  },
];

const ChatbotSection = () => {
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
            🤖💬 Chat Bot Collection
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI chatbots, from
            general-purpose assistants to specialized conversation partners
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {chatbots.map((chatbot) => (
            <motion.div key={chatbot.id} variants={itemVariants}>
              <AiToolCard
                name={chatbot.name}
                description={chatbot.description}
                category={chatbot.category}
                rating={chatbot.rating}
                imageUrl={chatbot.imageUrl}
                externalLink={chatbot.externalLink}
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
              to="/tools?category=🤖💬 Chat Bot"
              className="text-white hover:text-white"
            >
              Explore All Chatbots
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
