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
    image: "https://images.unsplash.com/photo-1637855192324-54a17785d1ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEplc3NpY2ElMjBJTiUyME9GRklDRXxlbnwwfHwwfHx8MA%3D%3D",
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
  const [missionExpanded, setMissionExpanded] = useState(false);
  const missionText = "We deliver high-quality staffing solutions built around a deep understanding of each client’s unique goals. We connect organizations with exceptional talent that drives innovation, performance, and long-term growth. Every hire is guided by precision, combining industry insight with advanced sourcing strategies. We move fast—without compromising on quality—helping businesses scale with confidence. Our relationships are built on trust, transparency, and long-term value. We continuously evolve with the market to deliver agile, future-ready hiring solutions. Through thoughtful engagement, we create meaningful experiences for both clients and candidates. We focus on lasting impact—not just placements, but sustainable workforce growth. Our ambition is simple: to be the partner behind every high-performing team.";
  const truncatedMission = "We deliver high-quality staffing solutions built around a deep understanding of each client’s unique goals. We connect organizations with exceptional talent that drives innovation, performance, and long-term growth.";

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

          <div className="text-muted-foreground leading-relaxed">
            <p>
              {missionExpanded ? missionText : truncatedMission}
              <button
                onClick={() => setMissionExpanded(!missionExpanded)}
                className="text-primary font-semibold hover:underline inline-block ml-2 cursor-pointer"
              >
                {missionExpanded ? "Read less" : "Read more"}
              </button>
            </p>
          </div>
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

  {/* 🔹 HEADER */}
  <h2 className="text-3xl font-bold mb-6">
    Global Presence
  </h2>

  <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
    We operate across key global markets, connecting businesses with top-tier talent through strong regional expertise.
  </p>

  {/* 🔥 REGION CARDS */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {[
      {
        region: "North America",
        image: "https://images.unsplash.com/photo-1546083381-2bed38b42cac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Strong network across US & Canada with deep hiring expertise.",
        tag: "Primary Market",
      },
      {
        region: "Europe",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
        desc: "Access to diverse and highly skilled talent pools across the continent.",
        tag: "Expanding",
      },
      {
        region: "Asia-Pacific",
        image: "https://images.unsplash.com/photo-1531421389064-2100a1b71999?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Fast-growing region with scalable hiring solutions for tech and operations.",
        tag: "Emerging",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="group relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-primary/30 transition overflow-hidden flex flex-col"
      >
        {/* 🔥 IMAGE CONTAINER */}
        <div className="h-48 w-full overflow-hidden">
          <img 
            src={item.image} 
            alt={item.region} 
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        {/* 🔥 CONTENT */}
        <div className="p-6 relative">
          {/* 🔥 GLOW */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/5 to-transparent blur-xl transition" />

          <h3 className="font-semibold text-xl">{item.region}</h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            {item.desc}
          </p>

          <span className="inline-block mt-4 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
            {item.tag}
          </span>
        </div>
      </div>
    ))}
  </div>

  {/* 🔥 STATS (CREDIBILITY BOOST) */}
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

    {[
      { value: "500+", label: "Successful Placements" },
      { value: "120+", label: "Global Clients" },
      { value: "95%", label: "Retention Rate" },
      { value: "48h", label: "Avg. Response Time" },
    ].map((stat, i) => (
      <div
        key={i}
        className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl"
      >
        <h3 className="text-2xl font-bold text-primary">
          {stat.value}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          {stat.label}
        </p>
      </div>
    ))}
  </div>

  {/* 🔥 CONTACT STRIP */}
  <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-6">

    <div className="text-left">
      <h3 className="text-xl font-semibold">
        Let’s build your team globally
      </h3>
      <p className="text-sm text-muted-foreground mt-1">
        Reach out to our team for tailored hiring solutions.
      </p>
    </div>

    <div className="flex gap-4">
      <a
        href="mailto:info@hirexpert.com"
        className="px-6 py-3 bg-primary text-white rounded-lg"
      >
        Email Us
      </a>

      <a
        href="/contact"
        className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition"
      >
        Contact Page
      </a>
    </div>
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
            className="inline-block mt-6 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </motion.div>
      </section>

    </main>
  );
}


