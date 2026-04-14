"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ==============================
// 🔹 DATA
// ==============================
const testimonials = [
  {
    quote: "MaplePeak found us the perfect candidate in just two weeks.",
    name: "Jennifer Walsh",
    role: "HR Manager",
    initials: "JW",
  },
  {
    quote: "Fast, reliable, and professional staffing partner.",
    name: "Wassem Akram",
    role: "Operations Director",
    initials: "WA",
  },
  {
    quote: "They helped us build a strong team, not just hire.",
    name: "Lakshmi Methri",
    role: "Recruiting Manager",
    initials: "LM",
  },
  {
    quote: "Excellent communication and follow-up.",
    name: "Marcus Thompson",
    role: "Hiring Manager",
    initials: "MT",
  },
];

// ==============================
// 🔹 ANIMATION
// ==============================
const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir < 0 ? 200 : -200,
    opacity: 0,
  }),
};

// ==============================
// 🔹 PAGE
// ==============================
export default function TestimonialsPage() {
  const [[index, dir], setIndex] = useState([0, 0]);

  const next = () =>
    setIndex([(index + 1) % testimonials.length, 1]);

  const prev = () =>
    setIndex([
      (index - 1 + testimonials.length) %
        testimonials.length,
      -1,
    ]);

  // 🔥 Auto-play
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <Navbar />
      <main className="py-24">

      {/* ================= HERO ================= */}
      <section className="container text-center max-w-3xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold">
            Client{" "}
            <span className="text-gradient-gold">
              Success Stories
            </span>
          </h1>

          <p className="text-muted-foreground mt-4">
            See how businesses trust MaplePeak Staffing.
          </p>
        </motion.div>
      </section>

      {/* ================= CAROUSEL ================= */}
      <section className="container max-w-3xl mx-auto mb-24">
        <div className="relative overflow-hidden">

          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="p-10 rounded-2xl bg-white/5 border border-white/10 text-center"
            >
              <Quote className="mx-auto text-primary/20 mb-4" size={40} />

              <p className="text-lg mb-6">
                "{testimonials[index].quote}"
              </p>

              <div className="flex justify-center items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  {testimonials[index].initials}
                </div>
                <div>
                  <div className="font-semibold">
                    {testimonials[index].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[index].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ARROWS */}
          <div className="flex justify-between mt-6">
            <button onClick={prev}>
              <ChevronLeft />
            </button>
            <button onClick={next}>
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* ================= GRID ================= */}
      <section className="container mb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              whileHover={{ y: -6 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <p className="text-sm mb-4">
                "{t.quote}"
              </p>

              <div className="font-semibold">
                {t.name}
              </div>

              <div className="text-xs text-muted-foreground">
                {t.role}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="container text-center mb-24">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { value: "95%", label: "Satisfaction" },
            { value: "50+", label: "Placements" },
            { value: "2", label: "Countries" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-gradient-gold">
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="container text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="p-10 rounded-2xl bg-white/5 border border-white/10"
        >
          <h3 className="text-2xl font-bold">
            Join our satisfied clients
          </h3>

          <p className="text-muted-foreground mt-2">
            Let’s find the right talent for your business.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-lg"
          >
            Get Started
          </Link>
        </motion.div>
      </section>
    </main>

      <Footer />
    </>
  );
}