import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, ExternalLink } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import DirectoryCard from "../cards/DirectoryCard";
import ToolCard from "../cards/ToolCard";

interface SearchResult {
  id: string;
  type: "directory" | "tool";
  name: string;
  description: string;
  url: string;
  category?: string;
  imageUrl?: string;
  rating?: number;
}

interface SearchOverlayProps {
  isOpen?: boolean;
  onClose?: () => void;
  initialQuery?: string;
}

const SearchOverlay = ({
  isOpen = true,
  onClose = () => {},
  initialQuery = "",
}: SearchOverlayProps) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(
    null,
  );

  // Import data from our directories and tools
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    // Import the data dynamically to avoid circular dependencies
    const importData = async () => {
      const directoriesModule = await import("@/data/directories");
      const toolsModule = await import("@/data/tools");

      const directories = directoriesModule.directories;
      const tools = toolsModule.tools;

      // Convert directories to search results
      const directoryResults: SearchResult[] = directories.map((dir) => ({
        id: dir.id,
        type: "directory",
        name: dir.name,
        description: dir.description,
        url: dir.url,
        category: dir.category,
        imageUrl: dir.imageUrl,
      }));

      // Convert tools to search results
      const toolResults: SearchResult[] = tools.map((tool) => ({
        id: tool.id,
        type: "tool",
        name: tool.name,
        description: tool.description,
        url: tool.externalLink,
        category: tool.category,
        imageUrl: tool.imageUrl,
        rating: tool.rating,
      }));

      // Combine and filter results
      const allResults = [...directoryResults, ...toolResults].filter(
        (result) =>
          result.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.description.toLowerCase().includes(searchQuery.toLowerCase()),
      );

      setSearchResults(allResults);
    };

    // Add a small delay for better UX
    const timer = setTimeout(() => {
      importData();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSelectResult = (result: SearchResult) => {
    setSelectedResult(result);
  };

  const handleClosePreview = () => {
    setSelectedResult(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      if (selectedResult) {
        handleClosePreview();
      } else {
        onClose();
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="sm:max-w-[800px] p-0 gap-0 bg-black/30 backdrop-blur-xl border border-white/30 overflow-hidden rounded-xl"
        onKeyDown={handleKeyDown}
      >
        <div className="flex h-full max-h-[500px]">
          <div
            className={`flex-1 ${selectedResult ? "hidden md:block" : "w-full"}`}
          >
            <Command className="rounded-lg border-none bg-transparent">
              <div className="flex items-center border-b border-white/10 px-3">
                <Search className="mr-2 h-4 w-4 shrink-0 text-white/50" />
                <CommandInput
                  placeholder="Search AI directories and tools..."
                  value={searchQuery}
                  onValueChange={setSearchQuery}
                  className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/50"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-white/50 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <CommandList className="max-h-[400px] overflow-y-auto custom-scrollbar">
                <AnimatePresence>
                  {searchResults.length === 0 && searchQuery !== "" ? (
                    <CommandEmpty className="py-6 text-center text-sm text-white/70">
                      No results found for "{searchQuery}"
                    </CommandEmpty>
                  ) : (
                    <>
                      {searchResults.some((r) => r.type === "directory") && (
                        <CommandGroup
                          heading="AI Directories"
                          className="text-white/70"
                        >
                          {searchResults
                            .filter((result) => result.type === "directory")
                            .map((result) => (
                              <motion.div
                                key={result.id}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <CommandItem
                                  className="flex items-center gap-2 px-4 py-3 cursor-pointer hover:bg-white/5 text-white"
                                  onSelect={() => handleSelectResult(result)}
                                >
                                  <div className="flex-1">
                                    <div className="font-medium">
                                      {result.name}
                                    </div>
                                    <div className="text-sm text-white/60 truncate">
                                      {result.description}
                                    </div>
                                  </div>
                                  <ArrowRight className="h-4 w-4 text-white/50" />
                                </CommandItem>
                              </motion.div>
                            ))}
                        </CommandGroup>
                      )}

                      {searchResults.some((r) => r.type === "directory") &&
                        searchResults.some((r) => r.type === "tool") && (
                          <CommandSeparator className="bg-white/10" />
                        )}

                      {searchResults.some((r) => r.type === "tool") && (
                        <CommandGroup
                          heading="AI Tools"
                          className="text-white/70"
                        >
                          {searchResults
                            .filter((result) => result.type === "tool")
                            .map((result) => (
                              <motion.div
                                key={result.id}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <CommandItem
                                  className="flex items-center gap-2 px-4 py-3 cursor-pointer hover:bg-white/5 text-white"
                                  onSelect={() => handleSelectResult(result)}
                                >
                                  <div className="flex-1">
                                    <div className="font-medium">
                                      {result.name}
                                    </div>
                                    <div className="text-sm text-white/60 truncate">
                                      {result.description}
                                    </div>
                                  </div>
                                  <ArrowRight className="h-4 w-4 text-white/50" />
                                </CommandItem>
                              </motion.div>
                            ))}
                        </CommandGroup>
                      )}
                    </>
                  )}
                </AnimatePresence>
              </CommandList>
            </Command>
          </div>

          <AnimatePresence>
            {selectedResult && (
              <motion.div
                className="w-full md:w-1/2 border-l border-white/10 bg-black/50 overflow-y-auto custom-scrollbar"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {selectedResult.name}
                    </h3>
                    <button
                      onClick={handleClosePreview}
                      className="text-white/50 hover:text-white md:hidden"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="mt-4">
                    {selectedResult.type === "directory" ? (
                      <DirectoryCard
                        name={selectedResult.name}
                        description={selectedResult.description}
                        url={selectedResult.url}
                        imageUrl={selectedResult.imageUrl}
                        category={selectedResult.category}
                      />
                    ) : (
                      <ToolCard
                        name={selectedResult.name}
                        description={selectedResult.description}
                        externalLink={selectedResult.url}
                        imageUrl={selectedResult.imageUrl}
                        category={selectedResult.category}
                        rating={selectedResult.rating}
                      />
                    )}
                  </div>

                  <div className="mt-6">
                    <a
                      href={selectedResult.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Visit{" "}
                      {selectedResult.type === "directory"
                        ? "Directory"
                        : "Tool"}{" "}
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchOverlay;
