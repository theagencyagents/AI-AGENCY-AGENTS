import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

interface FooterProps {
  links?: Array<{ label: string; url: string }>;
  socialLinks?: Array<{ icon: string; url: string }>;
  copyrightText?: string;
}

const Footer = ({
  links = [
    { label: "About", url: "/about" },
    { label: "Privacy", url: "/privacy" },
    { label: "Terms", url: "/terms" },
    { label: "Contact", url: "/contact" },
    { label: "Directories", url: "/directories" },
    { label: "Tools", url: "/tools" },
  ],
  socialLinks = [
    { icon: "github", url: "https://github.com" },
    { icon: "twitter", url: "https://twitter.com" },
    { icon: "linkedin", url: "https://linkedin.com" },
    { icon: "mail", url: "mailto:info@example.com" },
  ],
  copyrightText = "© 2023 AI Agency Agents Directory. All rights reserved.",
}: FooterProps) => {
  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <Github size={18} />;
      case "twitter":
        return <Twitter size={18} />;
      case "linkedin":
        return <Linkedin size={18} />;
      case "mail":
        return <Mail size={18} />;
      default:
        return null;
    }
  };

  return (
    <footer className="w-full py-8 px-6 bg-black/20 backdrop-blur-xl border-t border-white/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              AI Agency Agents
            </h3>
            <p className="text-white/70 text-sm">
              Discover the best AI directories and tools in one place, curated
              for maximum productivity and innovation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.url}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                    whileHover={{ x: 3 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Stay Connected
            </h3>
            <p className="text-white/70 text-sm mb-4">
              Follow us for the latest updates on AI tools and directories.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-colors duration-200"
                  whileHover={{ y: -3 }}
                >
                  {renderSocialIcon(social.icon)}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">{copyrightText}</p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-white/60 text-sm flex items-center">
              Made with{" "}
              <Heart size={14} className="mx-1 text-red-500 fill-red-500" /> for
              the AI community
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
