import React from "react";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-black transition-colors duration-300">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black/80 to-blue-900/20 pointer-events-none z-0" />

      {/* Floating orbs */}
      <div className="fixed top-20 right-20 w-64 h-64 rounded-full bg-purple-500/40 blur-3xl pointer-events-none z-0 animate-float-slow" />
      <div className="fixed bottom-40 left-20 w-80 h-80 rounded-full bg-blue-500/30 blur-3xl pointer-events-none z-0 animate-float-medium" />

      {/* Subtle background overlay */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1677442135136-760c813028c4?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-30 pointer-events-none z-0" />

      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-black/40 backdrop-blur-xl p-8 rounded-xl border border-white/10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              Privacy Policy
            </h1>

            <div className="space-y-6 text-white/80">
              <p className="text-lg">Last Updated: June 1, 2024</p>

              <p>
                At AI Agency Agents ("AAA"), we respect your privacy and are
                committed to protecting your personal data. This Privacy Policy
                explains how we collect, use, and safeguard your information
                when you visit our website.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                Information We Collect
              </h2>

              <p>We may collect the following types of information:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  and other contact details you provide when using our contact
                  form.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you
                  interact with our website, including pages visited, time
                  spent, and referring websites.
                </li>
                <li>
                  <strong>Device Information:</strong> Browser type, IP address,
                  device type, and operating system.
                </li>
                <li>
                  <strong>Cookies:</strong> Small data files stored on your
                  device to enhance your browsing experience.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                How We Use Your Information
              </h2>

              <p>
                We use the information we collect for the following purposes:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our website</li>
                <li>
                  To respond to your inquiries and provide customer support
                </li>
                <li>To improve our website and user experience</li>
                <li>To analyze usage patterns and optimize our content</li>
                <li>
                  To send you updates and marketing communications (with your
                  consent)
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                Data Security
              </h2>

              <p>
                We implement appropriate security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction. However, no method of transmission
                over the internet or electronic storage is 100% secure, and we
                cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                Third-Party Links
              </h2>

              <p>
                Our website contains links to external directories and tools. We
                are not responsible for the privacy practices or content of
                these third-party sites. We encourage you to review the privacy
                policies of any website you visit via our links.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                Your Rights
              </h2>

              <p>
                Depending on your location, you may have certain rights
                regarding your personal data, including:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access your personal data</li>
                <li>The right to correct inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                Changes to This Policy
              </h2>

              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                Contact Us
              </h2>

              <p>
                If you have any questions about this Privacy Policy, please
                contact us at privacy@aiagencyagents.com.
              </p>
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPage;
