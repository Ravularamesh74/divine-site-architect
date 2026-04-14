"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Target, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import omImage from "@/assets/om.jpeg";
import aboutTeamImage from "@/assets/about-team.jpg";

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
    image: omImage,
    initials: "OY",
    description: "Om Prakash Yedla is the founder of MaplePeak Staffing, leading the company with a clear vision to transform how businesses connect with top talent. With strong expertise in recruitment strategy and workforce planning, he focuses on delivering high-quality, long-term placements. His approach combines deep industry knowledge with a personalized understanding of client needs. Om believes that successful hiring goes beyond resumes and requires aligning skills with culture and business goals. He has built MaplePeak on trust, speed, and precision, ensuring every placement adds real value. His leadership continues to drive growth and innovation across North American hiring markets.",        
    linkedin: "https://www.linkedin.com/in/omprakash-yedla/",   
  },
  {
    name: "Jessica Chen",
    role: "Senior Recruiter",
    initials: "JC",
    image: "",
    description: "Jessica Chen is a Senior Recruiter at MaplePeak Staffing, bringing extensive experience in talent acquisition and team building. She specializes in understanding client needs and delivering high-quality placements across North America. Her approach focuses on precision, speed, and building long-term relationships. Jessica is dedicated to helping businesses find the right people to achieve their goals." ,
    linkedin: "https://www.linkedin.com/in/jessicachen/",
  },
];

// ==============================
// 🔹 TEAM MEMBER CARD
// ==============================
function TeamMemberCard({ member }: { member: any }) {
  const [expanded, setExpanded] = useState(false);
  
  // Cutoff at 150 characters
  const isLong = member.description && member.description.length > 150;
  const displayedText = expanded 
    ? member.description 
    : (isLong ? `${member.description.substring(0, 150)}... ` : member.description);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col h-full transition-all duration-300"
    >
      {member.image ? (
        <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border-4 border-white/10 shadow-xl" />
      ) : (
        <div className="w-24 h-24 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center text-2xl font-bold shadow-xl">
          {member.initials}
        </div>
      )}

      <h3 className="font-semibold text-xl text-center">
        {member.name}
      </h3>

      <p className="text-primary font-medium mb-5 text-center">
        {member.role}
      </p>

      {member.description && (
        <div className="text-sm text-muted-foreground text-left leading-relaxed mb-6 flex-grow">
          {displayedText}
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-primary font-semibold hover:underline inline-block mt-1"
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>
      )}

      {member.linkedin && (
        <div className="text-center mt-auto pt-4 border-t border-white/10">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold hover:bg-primary/20 transition-colors">
            Connect on LinkedIn
          </a>
        </div>
      )}
    </motion.div>
  );
}

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

          <p className="text-muted-foreground leading-relaxed">
            Our mission is to deliver high-quality staffing solutions by
            understanding each client’s unique needs. We focus on building
            long-term partnerships through trust, speed, and precision.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={aboutTeamImage}
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
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="container text-center mb-24">
        <h2 className="text-3xl font-bold mb-6">
          Where to find us
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          We operate across North America with strong connections in major business hubs.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-[450px] w-full"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.435749419192!2d-79.38971208450204!3d43.64955357912166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d2a33d602f%3A0x15923de1f8d4e92!2sToronto%20Financial%20District%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
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
            className="inline-block mt-6 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </motion.div>
      </section>

    </main>
  );
}