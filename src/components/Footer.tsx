"use client";

import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { Phone, Mail, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import { useState } from "react";

// ==============================
// 🔥 ANIMATION
// ==============================
const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

const socials = [
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/maplepeak" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/maplepeak" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/maplepeak" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      console.log("Newsletter subscription for:", email);
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative py-20 border-t border-border overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full"
          animate={{ x: [0, 200, -100, 0], y: [0, -100, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container">

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mb-16 text-center p-8 rounded-2xl bg-white/5 border border-white/10"
        >
          <h2 className="text-2xl font-bold mb-3">
            Let’s build your dream team 🚀
          </h2>
          <p className="text-muted-foreground mb-6">
            Get started with MaplePeak Staffing today.
          </p>
          <Link
            to="/contact"
            className="px-6 py-3 bg-primary text-white rounded-lg"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* ================= MAIN GRID ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
        >
          {/* LOGO */}
          <motion.div variants={item} className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="MaplePeak"
                className="h-10 w-10 rounded-full border border-primary/30"
              />
              <span className="text-lg font-bold text-gradient-gold">
                MaplePeak Staffing
              </span>
            </Link>

            <p className="text-muted-foreground text-sm max-w-sm">
              Premium staffing solutions connecting top talent with organizations
              across Canada and the United States.
            </p>

            {/* 🔥 TRUST BADGES */}
            <div className="flex gap-4 mt-4 text-xs text-muted-foreground">
              <span>🔒 Secure</span>
              <span>⚡ Fast Hiring</span>
              <span>🌍 Global Talent</span>
            </div>
          </motion.div>

          {/* LINKS */}
          <motion.div variants={item}>
            <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
            <div className="space-y-3">
              {["Home", "Services", "About", "Testimonials", "Contact"].map((l) => (
                <Link
                  key={l}
                  to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-primary transition"
                >
                  {l}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={item}>
            <h4 className="font-semibold mb-4 text-sm">Contact</h4>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+916309503257">+91 6309503257</a>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:contact@maplepeak.com" className="hover:text-primary transition">contact@maplepeak.com</a>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Canada & USA</span>
              </div>
            </div>

            {/* 🔥 SOCIAL LINKS */}
            <div className="flex gap-4 mt-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition"
                  aria-label={s.name}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ================= NEWSLETTER ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-10 text-center max-w-md mx-auto"
        >
          <h4 className="font-semibold mb-3">Subscribe to updates</h4>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 p-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none transition"
              aria-label="Email address for newsletter"
            />
            <button 
              type="submit" 
              disabled={subscribed}
              className="px-5 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition disabled:opacity-50"
            >
              {subscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </motion.div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} MaplePeak Staffing. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}