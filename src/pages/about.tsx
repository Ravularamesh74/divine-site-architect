"use client";

import { motion } from "framer-motion";
import { Users, Target, Globe } from "lucide-react";
import { Link } from "react-router-dom";

// ==============================
// 🔹 ANIMATION
// ==============================
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ==============================
// 🔹 DATA
// ==============================
const values = [
  {
    icon: Users,
    title: "People First",
    desc: "We focus on long-term relationships, not just placements.",
  },
  {
    icon: Target,
    title: "Precision Hiring",
    desc: "Matching the right talent with the right role.",
  },
  {
    icon: Globe,
    title: "North America Focus",
    desc: "Serving Canada & United States with local expertise.",
  },
];

const team = [
  {
    name: "Om Prakash Yedla",
    role: "Founder",
    initials: "OY",
  },
  {
    name: "Jessica Chen",
    role: "Senior Recruiter",
    initials: "JC",
  },
];

// ==============================
// 🔹 COMPONENT
// ==============================
export default function AboutPage() {
  return (
    <main className="py-24">

      {/* ================= HERO ================= */}
      <section className="container text-center max-w-3xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold">
            About{" "}
            <span className="text-gradient-gold">
              MaplePeak Staffing
            </span>
          </h1>

          <p className="text-muted-foreground mt-6 text-lg">
            We connect top talent with organizations across North America,
            helping businesses grow with the right people.
          </p>
        </motion.div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="container grid lg:grid-cols-2 gap-12 items-center mb-24">
        <motion.div variants={item} initial="hidden" animate="show">
          <h2 className="text-3xl font-bold mb-4">
            Our Mission
          </h2>

          <p className="text-muted-foreground">
            Our mission is to deliver high-quality staffing solutions by
            understanding each client’s unique needs. We focus on building
            long-term partnerships through trust, speed, and precision.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="rounded-2xl overflow-hidden"
        >
          <img
            src="/about-team.jpg"
            alt="team"
            className="w-full h-80 object-cover"
          />
        </motion.div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="container mb-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={item}
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 flex items-center justify-center rounded-lg">
                <v.icon className="text-primary" />
              </div>

              <h3 className="font-semibold">{v.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="container text-center mb-24">
        <h2 className="text-3xl font-bold mb-12">
          Leadership Team
        </h2>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member) => (
            <motion.div
              key={member.name}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center text-lg font-bold">
                {member.initials}
              </div>

              <h3 className="font-semibold">
                {member.name}
              </h3>

              <p className="text-sm text-muted-foreground">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-bold">
            Ready to find the right talent?
          </h3>

          <p className="text-muted-foreground mt-2">
            Let’s connect and build your team.
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
  );
}