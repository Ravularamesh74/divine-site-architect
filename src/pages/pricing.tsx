"use client";

import { motion, Variants } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ==============================
// 🔹 DATA
// ==============================
const plans = [
  {
    name: "Single Placement",
    desc: "Best for one-time hiring",
    price: "Custom",
    highlight: false,
    features: [
      "Candidate screening",
      "Background checks",
      "Placement support",
    ],
  },
  {
    name: "Contract Staffing",
    desc: "Flexible workforce solution",
    price: "Custom",
    highlight: true,
    features: [
      "Fast hiring (48h)",
      "Payroll handling",
      "Dedicated manager",
    ],
  },
  {
    name: "Team Building",
    desc: "Scale your organization",
    price: "Custom",
    highlight: false,
    features: [
      "Multi-role hiring",
      "Bulk placements",
      "Team onboarding",
    ],
  },
];

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
// 🔹 PAGE
// ==============================
export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="py-24">

      {/* ================= HERO ================= */}
      <section className="container text-center max-w-2xl mx-auto mb-20">
        <motion.div initial="hidden" animate="show" variants={item}>
          <h1 className="text-4xl sm:text-5xl font-bold">
            Simple, flexible{" "}
            <span className="text-gradient-gold">
              pricing
            </span>
          </h1>

          <p className="text-muted-foreground mt-4">
            Choose the right hiring solution based on your needs.
          </p>
        </motion.div>
      </section>

      {/* ================= PLANS ================= */}
      <section className="container mb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className={`p-6 rounded-xl border border-white/10 backdrop-blur-xl bg-white/5 ${
                plan.highlight ? "ring-2 ring-primary scale-[1.02]" : ""
              }`}
            >
              <h3 className="text-xl font-semibold">
                {plan.name}
              </h3>

              <p className="text-muted-foreground text-sm mt-2">
                {plan.desc}
              </p>

              <div className="text-3xl font-bold mt-4 text-gradient-gold">
                {plan.price}
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm">
                    <Check size={16} className="text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`block mt-6 text-center py-3 rounded-lg ${
                  plan.highlight
                    ? "bg-primary text-white"
                    : "border border-border"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className="container text-center mb-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold">
            Why choose MaplePeak?
          </h2>

          <p className="text-muted-foreground mt-4">
            We focus on quality placements, fast turnaround, and long-term
            success for both clients and candidates.
          </p>
        </motion.div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="container max-w-2xl mx-auto mb-24">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Pricing FAQs
        </h3>

        <div className="space-y-4">
          {[
            {
              q: "Do you offer custom pricing?",
              a: "Yes, pricing depends on role and hiring requirements.",
            },
            {
              q: "Are there any hidden fees?",
              a: "No, all pricing is transparent and discussed upfront.",
            },
            {
              q: "How quickly can you fill a position?",
              a: "Most roles are filled within 48 hours to 7 days depending on complexity and requirements.",
            },
            {
              q: "What industries do you specialize in?",
              a: "We specialize in Technology, Healthcare, Finance, and E-commerce, with tailored hiring solutions for each sector.",
            },
            {
              q: "Do you provide contract and full-time staffing?",
              a: "Yes, we offer flexible hiring solutions including contract, permanent, and project-based staffing.",
            },
            {
              q: "How do you ensure candidate quality?",
              a: "We use a multi-stage screening process including skill assessments, background checks, and behavioral evaluations.",
            },
            {
              q: "Can you handle bulk or team hiring?",
              a: "Absolutely. We support large-scale hiring projects and can build entire teams efficiently.",
            },
            {
              q: "Do you offer post-hiring support?",
              a: "Yes, we provide onboarding assistance and follow-ups to ensure long-term success.",
            },
            {
              q: "What makes your service different?",
              a: "Our combination of speed, precision matching, and personalized support sets us apart from traditional staffing agencies.",
            },
            {
              q: "Do you work with startups or only large companies?",
              a: "We work with startups, mid-sized businesses, and enterprise clients, adapting our approach to each.",
            },
            {
              q: "How do you handle urgent hiring needs?",
              a: "We prioritize urgent roles with dedicated resources and fast-track sourcing strategies.",
            },
            {
              q: "Can you help with remote hiring?",
              a: "Yes, we have strong expertise in sourcing and placing remote talent across global markets.",
            },
          ].map((faq) => (
            <div key={faq.q} className="p-4 border rounded-lg">
              <p className="font-medium">{faq.q}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mb-32">

  {/* 🔹 HEADER */}
  <div className="text-center max-w-3xl mx-auto mb-16">
    <h2 className="text-3xl font-bold">
      Global Hiring Intelligence
    </h2>

    <p className="text-muted-foreground mt-4">
      Real-time insights and global reach that power smarter hiring decisions across industries.
    </p>
  </div>

  {/* 🔥 TOP METRICS */}
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
    {[
      { value: "500+", label: "Placements Delivered" },
      { value: "120+", label: "Active Clients" },
      { value: "95%", label: "Retention Rate" },
      { value: "48h", label: "Avg Hiring Time" },
    ].map((stat, i) => (
      <div
        key={i}
        className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl text-center"
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

  {/* 🌍 REGION INTELLIGENCE */}
  <div className="grid lg:grid-cols-3 gap-6 mb-16">

    {[
      {
        region: "North America",
        data: "High demand in Tech, Healthcare, Finance",
        growth: "+32% hiring growth",
      },
      {
        region: "Europe",
        data: "Strong in Engineering & Remote roles",
        growth: "+21% hiring growth",
      },
      {
        region: "Asia-Pacific",
        data: "Rapid growth in startups & IT services",
        growth: "+45% hiring growth",
      },
    ].map((r, i) => (
      <div
        key={i}
        className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-primary/30 transition"
      >
        <h3 className="font-semibold text-lg">{r.region}</h3>

        <p className="text-sm text-muted-foreground mt-2">
          {r.data}
        </p>

        <p className="text-primary text-sm mt-4">
          {r.growth}
        </p>
      </div>
    ))}
  </div>

  {/* 🧠 TALENT INSIGHTS */}
  <div className="grid lg:grid-cols-2 gap-6 mb-16">

    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
      <h3 className="font-semibold mb-4">Talent Availability</h3>

      <ul className="space-y-3 text-sm text-muted-foreground">
        <li>✔ Software Engineers – High availability</li>
        <li>✔ Data Scientists – Moderate demand</li>
        <li>✔ DevOps Engineers – High demand</li>
        <li>✔ Product Managers – Competitive market</li>
      </ul>
    </div>

    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
      <h3 className="font-semibold mb-4">Hiring Efficiency</h3>

      <ul className="space-y-3 text-sm text-muted-foreground">
        <li>✔ 85% roles filled within 7 days</li>
        <li>✔ 3-stage screening process</li>
        <li>✔ AI-assisted candidate filtering</li>
        <li>✔ 98% client satisfaction rate</li>
      </ul>
    </div>
  </div>

  {/* 💼 INDUSTRY DISTRIBUTION */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

  {[
    {
      name: "Technology",
      percent: 40,
      image: "https://media.istockphoto.com/id/1434742171/photo/laptop-ppt-presentation-business-meeting-and-team-working-on-review-for-new-digital-website.webp?a=1&b=1&s=612x612&w=0&k=20&c=QGR4lIXS1P30qiZnhfq5cKMKLba1N3QGjWT1e012cYU=",
      desc: "Software, AI, Cloud",
    },
    {
      name: "Healthcare",
      percent: 20,
      image: "https://media.istockphoto.com/id/1487839236/photo/couple-meeting-with-financial-advisor.webp?a=1&b=1&s=612x612&w=0&k=20&c=_BYQp7_ZF4o8sXYvTjBtQ7bS53pOJ0RXRlEmrRA53lU=",
      desc: "Medical & Pharma",
    },
    {
      name: "Finance",
      percent: 18,
      image: "https://media.istockphoto.com/id/1365436662/photo/successful-partnership.webp?a=1&b=1&s=612x612&w=0&k=20&c=kIUYPv3BrdyWA_3NQKtzjfCoCCGsm3mN55gmzvU2Kiw=",
      desc: "Banking & FinTech",
    },
    {
      name: "E-commerce",
      percent: 22,
      image: "https://images.unsplash.com/photo-1664651205193-bfb6bfdd3b09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEZJTkFJTkNFJTIwT04lMjBTVEFGRklOR3xlbnwwfHwwfHx8MA%3D%3D",
      desc: "Retail & Digital",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="group relative rounded-2xl overflow-hidden border border-white/10"
    >
      {/* 🔥 IMAGE */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        {/* 🔥 DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* 🔹 CONTENT */}
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-xs text-white/70">{item.desc}</p>

        {/* 🔥 PROGRESS BAR */}
        <div className="mt-3 h-1.5 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-700"
            style={{ width: `${item.percent}%` }}
          />
        </div>

        <p className="text-xs mt-1 text-white/60">
          {item.percent}% hiring share
        </p>
      </div>

      {/* 🔥 HOVER DETAILS */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/80 flex items-center justify-center text-center p-4 text-white transition">
        <p className="text-sm">
          Strong demand and continuous hiring growth in {item.name} sector.
        </p>
      </div>
    </div>
  ))}
</div>

  {/* 🔥 FINAL CTA */}
  <div className="p-10 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 backdrop-blur-xl text-center">
    <h3 className="text-2xl font-bold">
      Data-driven hiring starts here
    </h3>

    <p className="text-muted-foreground mt-2">
      Leverage insights, speed, and precision to build your next high-performing team.
    </p>

    <a
      href="/contact"
      className="inline-block mt-6 px-8 py-3 bg-primary text-white rounded-lg"
    >
      Start Hiring
    </a>
  </div>

    </section>
  </main>
      <Footer />
    </>
  );
}