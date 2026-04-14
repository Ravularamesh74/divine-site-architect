"use client";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

// ==============================
// 🔹 COMPONENT
// ==============================
export default function NotFound() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error:",
      location.pathname
    );

    // 🔥 (Optional) Send to analytics
    // trackEvent("404_page", { path: location.pathname });
  }, [location.pathname]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-lg px-6"
      >

        {/* 404 */}
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-7xl font-bold text-gradient-gold"
        >
          404
        </motion.h1>

        {/* TEXT */}
        <h2 className="text-2xl font-semibold mt-4">
          Page not found
        </h2>

        <p className="text-muted-foreground mt-3">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

          {/* BACK */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-border hover:bg-muted transition"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>

          {/* HOME */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-white hover:opacity-90 transition"
          >
            <Home size={16} />
            Go Home
          </button>
        </div>

      </motion.div>
    </section>
  );
}