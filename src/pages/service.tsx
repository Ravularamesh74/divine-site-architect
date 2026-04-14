"use client";

import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target,
  Zap,
  Globe,
  HeadphonesIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ==============================
// 🔹 ANIMATION
// ==============================
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
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
    desc: "AI-driven candidate matching.",
    image: "/images/service1.png",
    details:
      "Advanced screening + behavioral analysis ensures perfect company fit.",
  },
  {
    icon: Zap,
    title: "Fast Placements",
    desc: "Accelerated hiring pipeline.",
    image: "/images/service2.png",
    details:
      "Reduced time-to-hire while maintaining top-tier candidate quality.",
  },
  {
    icon: Globe,
    title: "Global Hiring",
    desc: "US & Canada expertise.",
    image: "/images/service3.png",
    details:
      "Deep compliance knowledge and access to global talent pools.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    desc: "End-to-end assistance.",
    image: "/images/service4.png",
    details:
      "From sourcing → onboarding → retention support.",
  },
];

// ==============================
// 🔹 PAGE
// ==============================
export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="relative py-24 overflow-hidden">

      {/* 🔥 BACKGROUND EFFECTS */}
      <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/20 blur-[140px] opacity-40" />

      {/* ================= HERO ================= */}
      <section className="container text-center max-w-3xl mx-auto mb-20">
        <motion.div initial="hidden" animate="show" variants={item}>
          <h1 className="text-5xl font-bold">
            Premium{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          <p className="text-muted-foreground mt-4 text-lg">
            We deliver high-performance hiring solutions with speed, precision, and scalability.
          </p>
        </motion.div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="container mb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* 🔥 GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* 🔹 IMAGE */}
              <div className="relative h-80 overflow-hidden rounded-2xl">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* 🔹 CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-xl bg-white/10 border-t border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <s.icon className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-white">{s.title}</h3>
                </div>

                <p className="text-sm text-white/70">{s.desc}</p>
              </div>

              {/* 🔥 HOVER DETAILS */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center text-center p-6 text-white bg-black/80"
              >
                <p className="text-sm">{s.details}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= PROCESS ================= */}
     <section className="container text-center mb-24">
  <h2 className="text-3xl font-bold">Our Process</h2>

  <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
    A structured, high-performance hiring pipeline designed for speed, accuracy, and long-term success.
  </p>

  <div className="relative mt-16">

    {/* 🔥 Timeline Line */}
    <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
      
      {[
        {
          title: "Discover",
          image: "/images/process1.jpg",
          desc: "We analyze your business goals, team structure, and hiring needs.",
          details:
            "Deep consultation to understand role requirements, company culture, and long-term hiring strategy.",
        },
        {
          title: "Source",
          image: "/images/process2.jpg",
          desc: "We identify and attract top-tier candidates.",
          details:
            "Using AI tools, global networks, and industry databases to find the best talent.",
        },
        {
          title: "Match",
          image: "/images/process3.jpg",
          desc: "We evaluate and shortlist perfect candidates.",
          details:
            "Skill validation, behavioral analysis, and technical screening ensure high-quality matches.",
        },
        {
          title: "Hire",
          image: "/images/process4.jpg",
          desc: "We help you finalize and onboard candidates.",
          details:
            "Offer negotiation, onboarding support, and post-hire assistance included.",
        },
      ].map((step, i) => (
        <motion.div
          key={step.title}
          whileHover={{ y: -10 }}
          className="group relative rounded-2xl overflow-hidden"
        >
          {/* 🔥 IMAGE */}
          <div className="relative h-56 overflow-hidden rounded-2xl">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* 🔥 Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          </div>

          {/* 🔢 STEP NUMBER */}
          <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg">
            {i + 1}
          </div>

          {/* 🔹 CONTENT */}
          <div className="absolute bottom-0 left-0 right-0 p-5 backdrop-blur-xl bg-white/10 border-t border-white/10">
            <h3 className="text-white font-semibold">{step.title}</h3>
            <p className="text-xs text-white/70 mt-1">{step.desc}</p>
          </div>

          {/* 🔥 HOVER DETAILS */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center text-center p-6 bg-black/80 text-white"
          >
            <p className="text-sm leading-relaxed">{step.details}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* ================= CTA ================= */}
      <section className="container text-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <h3 className="text-3xl font-bold">
            Ready to build your dream team?
          </h3>

          <p className="text-muted-foreground mt-3">
            Let’s scale your business with top-tier talent.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-6 px-8 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition"
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