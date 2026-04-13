import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const testimonials = [
  {
    quote: "MaplePeak Staffing found us the right candidate in just two weeks. The quality of placement was exceptional, and the entire process was seamless from start to finish.",
    name: "Jennifer Walsh",
    role: "HR Manager, Toronto-based Tech Firm",
    initials: "JW",
  },
  {
    quote: "We needed specialized talent fast, and MaplePeak delivered. Their understanding of our industry needs and attention to cultural fit made all the difference in our hiring success.",
    name: "Wassem Akram",
    role: "Operations Director",
    initials: "WA",
  },
  {
    quote: "The level of professionalism and follow-up from MaplePeak Staffing set them apart. They didn't just fill a position; they helped us build a stronger team.",
    name: "Lakshmi Methri",
    role: "Recruiting Manager",
    initials: "LM",
  },
  {
    quote: "As a growing company, we needed staffing partners we could rely on. MaplePeak Staffing has been consistent, responsive, and focused on finding the right fit every single time.",
    name: "Om Prakash Yedla",
    role: "CEO",
    initials: "OP",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="section-divider w-full mb-24" />
      <div className="container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Client Success</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4">
            Trusted by <span className="text-gradient-gold">leading companies</span>
          </h2>
        </div>

        <div className={`max-w-4xl mx-auto opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          <div className="glass-card rounded-2xl p-8 sm:p-12 relative">
            <Quote className="text-primary/20 absolute top-8 left-8" size={48} />
            
            <div className="relative z-10">
              <p className="text-lg sm:text-xl leading-relaxed text-foreground/90 mb-8 min-h-[100px]">
                "{testimonials[active].quote}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {testimonials[active].initials}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonials[active].name}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[active].role}</div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
