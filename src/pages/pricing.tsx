"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

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
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

// ==============================
// 🔹 PAGE
// ==============================
export default function PricingPage() {
  return (
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

      {/* ================= CTA ================= */}
      <section className="container text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="p-10 rounded-2xl bg-white/5 border border-white/10"
        >
          <h3 className="text-2xl font-bold">
            Need help choosing a plan?
          </h3>

          <p className="text-muted-foreground mt-2">
            Contact us and we’ll guide you.
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