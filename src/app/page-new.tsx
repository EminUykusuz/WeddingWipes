'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Check, Droplet, Leaf, ThumbsUp, Zap } from 'lucide-react';

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const WaveDivider = ({ flip = false }) => (
    <svg
      className={`w-full ${flip ? 'rotate-180' : ''}`}
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="currentColor" />
    </svg>
  );

  return (
    <main className="w-full">
      {/* Top Bar */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[#a3c44c] text-white text-sm py-2 text-center font-semibold"
      >
        ☎️ +31 (0)6 12345678 | 📧 info@weddingwypes.nl | 🎁 Order Your Sample Today
      </motion.div>

      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 bg-[#2e2a5b] text-white shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#a3c44c] rounded-full flex items-center justify-center">
              <Droplet className="w-6 h-6 text-[#2e2a5b]" />
            </div>
            <div className="text-2xl font-bold">Wedding Wypes</div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="hover:text-[#a3c44c] transition">Products</a>
            <a href="#solutions" className="hover:text-[#a3c44c] transition">Solutions</a>
            <a href="#why" className="hover:text-[#a3c44c] transition">Why Us</a>
            <a href="#faq" className="hover:text-[#a3c44c] transition">FAQ</a>
            <button className="bg-[#a3c44c] text-[#2e2a5b] px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Order Sample
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-screen bg-linear-to-br from-[#2e2a5b] to-[#1a1817] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%221200%22%20height=%22600%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect%20fill=%22%23ffffff%22%20width=%221200%22%20height=%22600%22/%3E%3C/svg%3E')] bg-cover" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-white"
            >
              <motion.div
                className="inline-block bg-[#a3c44c] text-[#2e2a5b] px-4 py-2 rounded-lg mb-6 font-semibold text-sm"
                whileHover={{ scale: 1.05 }}
              >
                Premium Quality
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Luxury Hand Wipes with Your Logo
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                For restaurants, hotels, and corporate events. Fresh, hygienic, and striking impression.
              </p>
              <button className="bg-[#a3c44c] text-[#2e2a5b] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition transform hover:scale-105">
                Get Your Quote Today
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="w-80 h-80 bg-[#a3c44c] rounded-full flex items-center justify-center shadow-2xl">
                <Droplet className="w-40 h-40 text-[#2e2a5b]" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 text-white">
          <WaveDivider />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-[#2e2a5b] mb-6">
              Printed Refreshing Wipes: Fresh, Hygienic & Striking
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              We specialize in printing refreshing wipes in all configurations. Your wipes often contain alcohol and are attractive to use, while the design can be perfectly tailored to your preferences.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              At Wedding Wypes, we print the wipes completely according to your wishes. Many companies use these products as a highly valued giveaway.
            </p>
            <button className="bg-[#a3c44c] text-[#2e2a5b] px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition">
              Request Quote
            </button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-linear-to-br from-gray-100 to-gray-200 h-96 rounded-2xl flex items-center justify-center text-6xl"
          >
            🍽️
          </motion.div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="h-24 text-gray-100">
        <WaveDivider />
      </div>

      {/* Solutions Section */}
      <section id="solutions" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h2 className="text-4xl font-bold text-[#2e2a5b] mb-10">Our Solutions</h2>
            <div className="space-y-4">
              {[
                'Reaches Your Target Audience Effectively',
                'Highly Recognizable Brand Design',
                'Premium Quality Materials',
                'Customizable Sizes & Packaging',
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-4 text-lg"
                  variants={fadeInUp}
                >
                  <Check className="w-6 h-6 text-[#a3c44c] shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-linear-to-br from-[#a3c44c] to-yellow-400 h-96 rounded-2xl flex items-center justify-center text-6xl"
          >
            📦
          </motion.div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="h-24 text-white">
        <WaveDivider />
      </div>

      {/* Advantages Section */}
      <section className="bg-[#2e2a5b] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-white mb-16 text-center"
          >
            Why Our Wipes Stand Out
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: '🏥', title: '50g/m² Non-woven', desc: 'Premium Material' },
              { icon: '📏', title: '18x20cm', desc: 'Perfect Size' },
              { icon: '🧪', title: 'Alcohol-Free', desc: 'Skin-Friendly' },
              { icon: '🌱', title: 'Biodegradable', desc: 'Eco-Conscious' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white/10 backdrop-blur p-6 rounded-xl text-center text-white hover:bg-white/20 transition"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <button className="bg-[#a3c44c] text-[#2e2a5b] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition transform hover:scale-105">
              Request Quote
            </button>
          </motion.div>
        </div>
      </section>

      {/* Value Propositions Grid */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-[#2e2a5b] mb-16 text-center"
          >
            What Makes Us Different
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { Icon: Zap, title: 'Hygiene', desc: 'Professional Grade' },
              { Icon: Droplet, title: 'Premium Feel', desc: 'Cotton-Soft Touch' },
              { Icon: Leaf, title: 'Eco-Friendly', desc: 'Sustainable Options' },
              { Icon: ThumbsUp, title: 'Satisfaction', desc: 'Top Choice Giveaway' },
            ].map(({ Icon, title, desc }, idx) => (
              <motion.div
                key={idx}
                className="bg-linear-to-br from-gray-50 to-gray-100 p-8 rounded-xl text-center hover:shadow-lg transition"
                variants={fadeInUp}
              >
                <Icon className="w-12 h-12 text-[#a3c44c] mx-auto mb-4" />
                <h3 className="font-bold text-lg text-[#2e2a5b] mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-linear-to-br from-gray-200 to-gray-300 h-96 rounded-2xl flex items-center justify-center text-6xl order-2 md:order-1"
          >
            🧻
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="order-1 md:order-2"
          >
            <h2 className="text-4xl font-bold text-[#2e2a5b] mb-8">
              Why Choose Wedding Wypes?
            </h2>
            <div className="space-y-4 mb-8">
              {[
                'Reaches Your Target Audience Effectively',
                'Premium Brand Recognition',
                'Environmental Options Available',
                'Fast Turnaround Times',
                'Complete Customization',
                'Expert Support Team',
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3"
                  variants={fadeInUp}
                >
                  <Check className="w-5 h-5 text-[#a3c44c] shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
            <button className="bg-[#a3c44c] text-[#2e2a5b] px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition">
              Get Started Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="h-24 text-white">
        <WaveDivider />
      </div>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-[#2e2a5b] mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                q: 'What is the minimum order quantity?',
                a: 'Our minimum order is 1,000 units. Smaller quantities may be available upon request.',
              },
              {
                q: 'What is the lead time for production?',
                a: 'Standard production time is 2-4 weeks after design approval. Rush orders are available.',
              },
              {
                q: 'Can I customize the packaging?',
                a: 'Yes! We offer full customization of packaging design, colors, and branding options.',
              },
              {
                q: 'Are there eco-friendly options available?',
                a: 'Absolutely. We offer biodegradable and sustainable material options for environmentally conscious brands.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden"
                variants={fadeInUp}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition flex items-center justify-between"
                >
                  <span className="text-lg font-semibold text-[#2e2a5b]">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#a3c44c] transition-transform ${
                      openFAQ === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 py-4 bg-white text-gray-600 border-t border-gray-200"
                  >
                    {item.a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-[#2e2a5b] to-[#1a1817] py-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Order?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your custom wipe requirements and get a personalized quote.
          </p>
          <button className="bg-[#a3c44c] text-[#2e2a5b] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition transform hover:scale-105">
            Request Your Quote
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2e2a5b] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplet className="w-6 h-6 text-[#a3c44c]" />
              <span className="font-bold text-lg">Wedding Wypes</span>
            </div>
            <p className="text-gray-400 text-sm">
              Premium refreshing wipes for restaurants, hotels, and corporate events.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#a3c44c] transition">Wipes</a></li>
              <li><a href="#" className="hover:text-[#a3c44c] transition">Packaging</a></li>
              <li><a href="#" className="hover:text-[#a3c44c] transition">Customization</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm mb-2">📧 info@weddingwypes.nl</p>
            <p className="text-gray-400 text-sm mb-2">📞 +31 (0)6 12345678</p>
            <p className="text-gray-400 text-sm">🏢 Amsterdam, Netherlands</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#a3c44c] transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#a3c44c] transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#a3c44c] transition">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Wedding Wypes. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
