"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target,
  Zap,
  Globe,
  HeadphonesIcon,
} from "lucide-react";

// ==============================
// 🔹 ANIMATION
// ==============================
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

// ==============================
// 🔹 SERVICES DATA
// ==============================
const services = [
  {
    icon: Target,
    title: "Precision Talent Matching",
    desc: "We match candidates based on skills, culture, and long-term fit.",
  },
  {
    icon: Zap,
    title: "Fast Placements",
    desc: "Quick hiring without compromising quality.",
  },
  {
    icon: Globe,
    title: "North America Hiring",
    desc: "Canada & US hiring expertise.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    desc: "We stay with you through the entire hiring process.",
  },
];

// ==============================
// 🔹 PAGE
// ==============================
export default function ServicesPage() {
  return (
    <main className="py-24">

      {/* ================= HERO ================= */}
      <section className="container text-center max-w-3xl mx-auto mb-20">
        <motion.div initial="hidden" animate="show" variants={item}>
          <h1 className="text-4xl sm:text-5xl font-bold">
            Our{" "}
            <span className="text-gradient-gold">
              Services
            </span>
          </h1>

          <p className="text-muted-foreground mt-4 text-lg">
            We provide end-to-end staffing solutions tailored to your business needs.
          </p>
        </motion.div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="container mb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              whileHover={{ y: -6 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 flex items-center justify-center rounded-lg">
                <s.icon className="text-primary" />
              </div>

              <h3 className="font-semibold">{s.title}</h3>

              <p className="text-sm text-muted-foreground mt-2">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="container mb-24 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-3xl font-bold">
            How it works
          </h2>

          <p className="text-muted-foreground mt-4">
            We follow a structured process to deliver the best results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {["Discover", "Source", "Match", "Hire"].map((step, i) => (
            <motion.div
              key={step}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg border border-border"
            >
              <div className="text-2xl font-bold text-gradient-gold">
                {i + 1}
              </div>
              <div className="mt-2 font-medium">{step}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="container text-center mb-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold">
            Why choose us?
          </h2>

          <p className="text-muted-foreground mt-4">
            We focus on quality hiring, fast turnaround, and long-term success.
          </p>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="container text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="p-10 rounded-2xl bg-white/5 border border-white/10"
        >
          <h3 className="text-2xl font-bold">
            Ready to hire top talent?
          </h3>

          <p className="text-muted-foreground mt-2">
            Let’s build your team together.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-lg"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>

    </main>
  );
}