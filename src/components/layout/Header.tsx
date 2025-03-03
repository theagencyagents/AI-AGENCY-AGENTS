import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Moon, Sun, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

interface HeaderProps {
  onSearch?: (query: string) => void;
  onThemeToggle?: () => void;
  isDarkMode?: boolean;
}

const Header = ({
  onSearch = () => {},
  onThemeToggle = () => {},
  isDarkMode = true,
}: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="w-full h-20 backdrop-blur-xl bg-black/20 border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link to="/" className="flex items-center">
            <div className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 text-2xl font-bold">
                AAA
              </span>
            </div>
            <span className="ml-3 text-white font-semibold hidden sm:block">
              AI Agency Agents
            </span>
          </Link>
        </motion.div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:block flex-grow max-w-md mx-4">
          <form onSubmit={handleSearchSubmit} className="relative">
            <Input
              type="text"
              placeholder="Search AI directories and tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-purple-500 pr-10"
            />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full text-white/70 hover:text-white hover:bg-transparent"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <div className="flex items-center space-x-2">
            <Moon
              className={`h-4 w-4 ${isDarkMode ? "text-purple-400" : "text-white/50"}`}
            />
            <Switch
              checked={!isDarkMode}
              onCheckedChange={onThemeToggle}
              className="bg-white/10 data-[state=checked]:bg-purple-600"
            />
            <Sun
              className={`h-4 w-4 ${!isDarkMode ? "text-yellow-400" : "text-white/50"}`}
            />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Mobile Search Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => {
              // This would typically open a mobile search overlay
              // For now, we'll just focus the search input if it exists
              const searchInput = document.querySelector('input[type="text"]');
              if (searchInput) {
                (searchInput as HTMLInputElement).focus();
              }
            }}
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10 p-4"
        >
          <form onSubmit={handleSearchSubmit} className="relative mb-4">
            <Input
              type="text"
              placeholder="Search AI directories and tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/50"
            />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full text-white/70 hover:text-white hover:bg-transparent"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/directories"
                  className="block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  AI Directories
                </Link>
              </li>
              <li>
                <Link
                  to="/tools"
                  className="block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  AI Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/chatbots"
                  className="block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link
                  to="/art-image"
                  className="block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  AI Art & Images
                </Link>
              </li>
              <li>
                <Link
                  to="/content-seo"
                  className="block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  Content & SEO
                </Link>
              </li>
              <li>
                <Link
                  to="/video"
                  className="block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  Video Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/music-audio"
                  className="block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  Music & Audio
                </Link>
              </li>
              <li>
                <Link
                  to="/productivity"
                  className="block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  Productivity
                </Link>
              </li>
              <li>
                <Link
                  to="/meeting"
                  className="block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  Meeting Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className="block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  Search Engines
                </Link>
              </li>
              <li>
                <Link
                  to="/research"
                  className="block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  Research Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/writing"
                  className="block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  Writing Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/marketing"
                  className="block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  Marketing Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/presentation"
                  className="block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  Presentation Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/code"
                  className="block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  Code Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  className="block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  Education Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/design"
                  className="block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  Design Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/finance"
                  className="block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  Finance Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/health"
                  className="block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  Health Tools
                </Link>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
