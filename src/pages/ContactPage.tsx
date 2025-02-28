import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically connect to a backend service
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-black transition-colors duration-300">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black/80 to-blue-900/20 pointer-events-none z-0" />

      {/* Floating orbs */}
      <div className="fixed top-20 right-20 w-64 h-64 rounded-full bg-blue-500/40 blur-3xl pointer-events-none z-0 animate-float-slow" />
      <div className="fixed bottom-40 left-20 w-80 h-80 rounded-full bg-purple-500/30 blur-3xl pointer-events-none z-0 animate-float-medium" />

      {/* Subtle background overlay */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1677442135136-760c813028c4?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-30 pointer-events-none z-0" />

      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              Contact Us
            </h1>

            <div className="bg-black/40 backdrop-blur-xl p-8 rounded-xl border border-white/10">
              <p className="text-white/80 mb-8 text-center">
                Have questions, suggestions, or want to collaborate? We'd love
                to hear from you. Fill out the form below and we'll get back to
                you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-purple-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="What is this regarding?"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    required
                    rows={6}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-purple-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-2 rounded-md flex items-center justify-center gap-2 group transition-all duration-300"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>

              <div className="mt-12 pt-8 border-t border-white/10">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Other Ways to Reach Us
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/80">
                  <div>
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <p className="mt-1">info@aiagencyagents.com</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-white">
                      Social Media
                    </h3>
                    <p className="mt-1">Follow us on Twitter @AIAgencyAgents</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
