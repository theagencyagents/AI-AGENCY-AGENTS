import React from "react";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-black transition-colors duration-300">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black/80 to-blue-900/20 pointer-events-none z-0" />

      {/* Floating orbs */}
      <div className="fixed top-20 right-20 w-64 h-64 rounded-full bg-yellow-500/40 blur-3xl pointer-events-none z-0 animate-float-slow" />
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
              Terms of Service
            </h1>

            <div className="space-y-6 text-white/80">
              <p className="text-lg">Last Updated: June 1, 2024</p>

              <p>
                Welcome to AI Agency Agents ("AAA"). By accessing or using our
                website, you agree to be bound by these Terms of Service. Please
                read them carefully.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                1. Acceptance of Terms
              </h2>

              <p>
                By accessing or using our website, you agree to these Terms of
                Service and our Privacy Policy. If you do not agree to these
                terms, please do not use our website.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                2. Use of Our Website
              </h2>

              <p>
                You agree to use our website only for lawful purposes and in a
                way that does not infringe upon the rights of others or restrict
                their use of the website. Prohibited activities include but are
                not limited to:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Violating any applicable laws or regulations</li>
                <li>
                  Attempting to interfere with the proper functioning of the
                  website
                </li>
                <li>
                  Engaging in any activity that could harm our servers or
                  networks
                </li>
                <li>
                  Scraping or collecting data from our website without
                  permission
                </li>
                <li>
                  Using our website to distribute malware or other harmful code
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                3. Intellectual Property
              </h2>

              <p>
                All content on our website, including text, graphics, logos, and
                software, is the property of AAA or our content suppliers and is
                protected by copyright and other intellectual property laws. You
                may not reproduce, distribute, or create derivative works from
                this content without explicit permission.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                4. External Links
              </h2>

              <p>
                Our website contains links to external directories and tools.
                These links are provided for your convenience and do not signify
                our endorsement of these websites or their content. We are not
                responsible for the content or practices of any linked websites.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                5. Disclaimer of Warranties
              </h2>

              <p>
                Our website is provided "as is" without any warranties,
                expressed or implied. We do not guarantee that our website will
                be uninterrupted, secure, or error-free. We make no warranties
                regarding the accuracy, reliability, or availability of our
                website.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                6. Limitation of Liability
              </h2>

              <p>
                To the fullest extent permitted by law, AAA shall not be liable
                for any indirect, incidental, special, consequential, or
                punitive damages arising out of or relating to your use of our
                website.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                7. Changes to Terms
              </h2>

              <p>
                We reserve the right to modify these Terms of Service at any
                time. We will notify users of any significant changes by posting
                the new Terms on this page and updating the "Last Updated" date.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                8. Governing Law
              </h2>

              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the United States, without regard to its
                conflict of law provisions.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                9. Contact Us
              </h2>

              <p>
                If you have any questions about these Terms of Service, please
                contact us at terms@aiagencyagents.com.
              </p>
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default TermsPage;
