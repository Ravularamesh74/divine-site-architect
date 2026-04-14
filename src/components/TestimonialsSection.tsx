"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ==============================
// 🔹 DATA
// ==============================
const testimonials = [
  {
    quote: "MaplePeak found the right candidate in just two weeks.",
    name: "Jennifer Walsh",
    role: "HR Manager",
    initials: "JW",
  },
  {
    quote: "Fast, professional, and highly reliable staffing partner.",
    name: "Wassem Akram",
    role: "Operations Director",
    initials: "WA",
  },
  {
    quote: "They helped us build a stronger team, not just fill roles.",
    name: "Lakshmi Methri",
    role: "Recruiting Manager",
    initials: "LM",
  },
  {
    quote: "MaplePeak found the right candidate in just two weeks.",
    name: "Sarah Wilson",
    role: "HR Manager",
    initials: "SW",
  },
  {
    quote: "Fast, professional, and highly reliable staffing partner.",
    name: "Jane Smith",
    role: "Operations Director",
    initials: "JS",
  },
  {
    quote: "They helped us build a stronger team, not just fill roles.",
    name: "John Doe",
    role: "Recruiting Manager",
    initials: "JD",
  },
];

// ==============================
// 🔹 ANIMATION
// ==============================
const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir < 0 ? 300 : -300,
    opacity: 0,
  }),
};

// ==============================
// 🔹 COMPONENT
// ==============================
export default function TestimonialsSection() {
  const [[index, direction], setIndex] = useState([0, 0]);

  // 🔥 Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  const paginate = (dir: number) => {
    setIndex([
      (index + dir + testimonials.length) % testimonials.length,
      dir,
    ]);
  };

  return (
    <section id="testimonials" className="py-24">
      <div className="container max-w-4xl mx-auto text-center">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold">
            Trusted by{" "}
            <span className="text-gradient-gold">
              leading companies
            </span>
          </h2>
        </motion.div>

        {/* CAROUSEL */}
        <div className="relative overflow-hidden">

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset }) => {
                if (offset.x < -100) paginate(1);
                if (offset.x > 100) paginate(-1);
              }}
              className="glass-card rounded-2xl p-10"
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
            <button onClick={() => paginate(-1)}>
              <ChevronLeft />
            </button>
            <button onClick={() => paginate(1)}>
              <ChevronRight />
            </button>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  width: i === index ? 24 : 8,
                }}
                className={`h-2 rounded-full ${
                  i === index ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}