"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

// ==============================
// 🔹 ANIMATION
// ==============================
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

// ==============================
// 🔹 COMPONENT
// ==============================
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);

    // 🔥 Replace with API call
    alert("Message sent!");
  };

  return (
    <main className="py-24">

      {/* ================= HEADER ================= */}
      <section className="container text-center max-w-2xl mx-auto mb-16">
        <motion.div
          initial="hidden"
          animate="show"
          variants={item}
        >
          <h1 className="text-4xl sm:text-5xl font-bold">
            Get in{" "}
            <span className="text-gradient-gold">
              touch
            </span>
          </h1>

          <p className="text-muted-foreground mt-4">
            Let’s connect and find the right talent for your business.
          </p>
        </motion.div>
      </section>

      {/* ================= MAIN ================= */}
      <section className="container grid lg:grid-cols-2 gap-12">

        {/* ================= FORM ================= */}
        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          animate="show"
          variants={item}
          className="space-y-5 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <h2 className="text-2xl font-semibold mb-2">
            Send us a message
          </h2>

          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-border bg-transparent outline-none"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-border bg-transparent outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-border bg-transparent outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* ================= CONTACT INFO ================= */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={item}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold">
            Contact Information
          </h2>

          {/* PHONE */}
          <div className="flex items-start gap-4">
            <Phone className="text-primary" />
            <div>
              <div className="font-medium">Phone</div>
              <a href="tel:+916309503257" className="text-muted-foreground">
                +91 6309503257
              </a>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-start gap-4">
            <Mail className="text-primary" />
            <div>
              <div className="font-medium">Email</div>
              <a href="mailto:[EMAIL_ADDRESS]" className="text-muted-foreground">
                [EMAIL_ADDRESS]
              </a>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-start gap-4">
            <MapPin className="text-primary" />
            <div>
              <div className="font-medium">Location</div>
              <p className="text-muted-foreground">
                Canada & United States
              </p>
            </div>
          </div>

          {/* CTA CARD */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl mt-6">
            <h3 className="font-semibold mb-2">
              Need urgent hiring?
            </h3>
            <p className="text-sm text-muted-foreground">
              Call us directly for faster support.
            </p>
            <a
              href="tel:+12345678900"
              className="inline-block mt-3 text-primary"
            >
              Call Now →
            </a>
          </div>
        </motion.div>

      </section>

      {/* ================= MAP ================= */}
      <section className="container mt-20 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            Our Location
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-[400px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.435749419192!2d-79.38971208450204!3d43.64955357912166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d2a33d602f%3A0x15923de1f8d4e92!2sToronto%20Financial%20District%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MaplePeak Staffing Location"
            />
          </div>
        </motion.div>
      </section>

    </main>
  );
}