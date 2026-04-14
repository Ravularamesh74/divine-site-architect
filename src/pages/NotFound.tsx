"use client";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Search } from "lucide-react";

// ==============================
// 🧠 SMART ROUTE MATCHING
// ==============================
const routes = [
  "/",
  "/services",
  "/about",
  "/contact",
  "/testimonials",
];

// simple similarity matcher
const findClosestRoute = (path: string) => {
  return routes.find((r) => path.includes(r.replace("/", ""))) || "/";
};

// ==============================
// 🎯 COMPONENT
// ==============================
export default function NotFound() {
  const location = useLocation();
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [timeLeft, setTimeLeft] = useState(10);
  const [cancelRedirect, setCancelRedirect] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const suggestion = findClosestRoute(location.pathname);

  // ==============================
  // 🔥 EFFECTS
  // ==============================
  useEffect(() => {
    console.error("404:", location.pathname);

    // Track event
    // trackEvent("404_hit", { path: location.pathname });

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [location.pathname]);

  // ⏱ AUTO REDIRECT
  useEffect(() => {
    if (cancelRedirect) return;

    if (timeLeft <= 0) {
      navigate(suggestion);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, cancelRedirect, navigate, suggestion]);

  // ⌨️ KEYBOARD SHORTCUTS
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "h") navigate("/");
      if (e.key === "b") navigate(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [navigate]);

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/search?q=${query}`);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* ================= CURSOR GLOW ================= */}
      <motion.div
        className="pointer-events-none fixed w-40 h-40 bg-primary/20 blur-3xl rounded-full"
        animate={{
          x: mouse.x - 80,
          y: mouse.y - 80,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: ["0%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* ================= MAIN ================= */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-xl px-6"
      >

        {/* 🔥 BIG 404 */}
        <motion.h1
          animate={{ rotate: [0, 2, -2, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="text-9xl font-extrabold text-gradient-gold"
        >
          404
        </motion.h1>

        {/* MESSAGE */}
        <h2 className="text-2xl font-semibold mt-4">
          Lost in space? 🚀
        </h2>

        <p className="text-muted-foreground mt-2 text-sm">
          We couldn’t find <span className="text-primary">{location.pathname}</span>
        </p>

        {/* 🧠 SUGGESTION */}
        <p className="mt-4 text-sm">
          Did you mean:
          <button
            onClick={() => navigate(suggestion)}
            className="ml-2 text-primary underline"
          >
            {suggestion}
          </button>
        </p>

        {/* 🔍 SEARCH */}
        <div className="mt-6 flex gap-2 justify-center">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the site..."
            className="px-4 py-2 rounded-lg border border-border bg-transparent focus:ring-2 focus:ring-primary/40"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-primary text-white rounded-lg flex items-center gap-2"
          >
            <Search size={16} />
          </button>
        </div>

        {/* 🎯 ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-5 py-3 border rounded-lg"
          >
            <ArrowLeft size={16} /> Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-lg"
          >
            <Home size={16} /> Home
          </button>
        </div>

        {/* ⏱ REDIRECT */}
        <div className="mt-6 text-xs text-muted-foreground">
          {!cancelRedirect ? (
            <>
              Redirecting to <b>{suggestion}</b> in {timeLeft}s...
              <button
                onClick={() => setCancelRedirect(true)}
                className="ml-2 underline"
              >
                cancel
              </button>
            </>
          ) : (
            "Auto redirect paused"
          )}
        </div>

        {/* ⌨️ SHORTCUT HINT */}
        <p className="text-xs mt-3 text-muted-foreground">
          Press <b>H</b> for Home • <b>B</b> to go back
        </p>

      </motion.div>
    </section>
  );
}