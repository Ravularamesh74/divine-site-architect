"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ==============================
// 🔥 ANIMATION SYSTEM (ADVANCED)
// ==============================
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
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

    // Replace with API
    alert("🚀 Message Sent Successfully!");
  };

  return (
    <>
      <Navbar />
      <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-24 relative overflow-hidden"
    >
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full"
          animate={{
            x: [0, 200, -150, 0],
            y: [0, -200, 150, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* ================= HEADER ================= */}
      <section className="container text-center max-w-2xl mx-auto mb-16">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl font-bold"
          >
            Get in{" "}
            <span className="text-gradient-gold">touch</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-muted-foreground mt-4"
          >
            Let’s connect and build something extraordinary.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= MAIN ================= */}
      <section className="container grid lg:grid-cols-2 gap-12">

        {/* ================= FORM ================= */}
        <motion.form
          onSubmit={handleSubmit}
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-5 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl"
        >
          <motion.h2 variants={item} className="text-2xl font-semibold">
            Send a message
          </motion.h2>

          {["name", "email"].map((field) => (
            <motion.input
              key={field}
              variants={item}
              name={field}
              type={field === "email" ? "email" : "text"}
              placeholder={`Your ${field}`}
              value={(form as any)[field]}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-full p-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md focus:ring-2 focus:ring-primary outline-none"
            />
          ))}

          <motion.textarea
            variants={item}
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
            className="w-full p-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md focus:ring-2 focus:ring-primary outline-none"
          />

          {/* BUTTON */}
          <motion.button
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-full py-3 bg-primary text-white rounded-lg font-medium overflow-hidden"
          >
            <span className="relative z-10">Send Message</span>

            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.form>

        {/* ================= CONTACT INFO ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.h2 variants={item} className="text-2xl font-semibold">
            Contact Information
          </motion.h2>

          {/* CARD COMPONENT */}
          {[
            {
              icon: <Phone className="text-primary" />,
              title: "Phone",
              value: "+91 6309503257",
              link: "tel:+916309503257",
            },
            {
              icon: <Mail className="text-primary" />,
              title: "Email",
              value: "contact@maplepeak.com",
              link: "mailto:contact@maplepeak.com",
            },
            {
              icon: <MapPin className="text-primary" />,
              title: "Location",
              value: "Canada & USA",
            },
          ].map((itemData, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
              }}
              className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              {itemData.icon}
              <div>
                <div className="font-medium">{itemData.title}</div>
                {itemData.link ? (
                  <a href={itemData.link} className="text-muted-foreground">
                    {itemData.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{itemData.value}</p>
                )}
              </div>
            </motion.div>
          ))}

          {/* CTA */}
          <motion.div
            variants={item}
            animate={{
              boxShadow: [
                "0 0 0px rgba(255,255,255,0)",
                "0 0 20px rgba(255,255,255,0.2)",
                "0 0 0px rgba(255,255,255,0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-6 rounded-xl bg-gradient-to-r from-primary/20 to-transparent border border-white/10"
          >
            <h3 className="font-semibold mb-2">
              Need urgent hiring?
            </h3>
            <p className="text-sm text-muted-foreground">
              Call us directly for faster support.
            </p>
            <a href="tel:+12345678900" className="inline-block mt-3 text-primary">
              Call Now →
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= MAP ================= */}
      <section className="container mt-20 mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            Our Location
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-[400px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Location"
            />
          </div>


          <section className="container mt-20">
  <motion.div
    initial="hidden"
    whileInView="show"
    variants={{
      show: { transition: { staggerChildren: 0.2 } },
    }}
    className="grid md:grid-cols-3 gap-6 text-center"
  >
    {[
      { number: "500+", label: "Clients Served" },
      { number: "1200+", label: "Candidates Placed" },
      { number: "98%", label: "Success Rate" },
    ].map((stat, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring" }}
        className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
      >
        <h3 className="text-3xl font-bold text-primary">
          {stat.number}
        </h3>
        <p className="text-muted-foreground mt-2">
          {stat.label}
        </p>
      </motion.div>
    ))}
  </motion.div>
</section>

<section className="container mt-24">
  <motion.h2
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    className="text-3xl font-bold text-center mb-10"
  >
    What Our Clients Say
  </motion.h2>

  <div className="grid md:grid-cols-3 gap-6">
    {[
      {
        name: "John D.",
        text: "Amazing hiring experience. Super fast and professional.",
      },
      {
        name: "Sarah K.",
        text: "They found us top talent within days!",
      },
      {
        name: "Michael R.",
        text: "Highly recommend for scaling teams quickly.",
      },
    ].map((t, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        className="p-6 rounded-xl bg-white/5 border border-white/10"
      >
        <p className="text-muted-foreground">“{t.text}”</p>
        <h4 className="mt-4 font-semibold">{t.name}</h4>
      </motion.div>
    ))}
  </div>
</section>
<section className="container mt-24 mb-20">
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    className="p-10 rounded-2xl text-center bg-gradient-to-r from-primary/20 to-transparent border border-white/10"
  >
    <h2 className="text-3xl font-bold mb-4">
      Ready to hire top talent?
    </h2>

    <p className="text-muted-foreground mb-6">
      Let’s connect and build your dream team today.
    </p>

    <motion.a
      href="#"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block px-6 py-3 bg-primary text-white rounded-lg"
    >
      Get Started →
    </motion.a>
  </motion.div>
</section>


<motion.div
  initial={{ y: 100 }}
  animate={{ y: 0 }}
  className="fixed bottom-0 left-0 right-0 bg-black/70 backdrop-blur-md p-4 flex justify-between items-center z-50"
>
  <span>Need hiring fast?</span>
  <a
    href="tel:+916309503257"
    className="bg-primary px-4 py-2 rounded-lg text-white"
  >
    Call Now
  </a>
</motion.div>

        </motion.div>
      </section>
    </motion.main>
    <Footer />
  </>
);
}