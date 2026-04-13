import { Target, Zap, Globe, HeadphonesIcon, Shield, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: Target,
    title: "Precision Talent Matching",
    description: "We assess skills, culture fit, and career goals to connect you with candidates who truly succeed in your role.",
  },
  {
    icon: Zap,
    title: "Fast, Reliable Placements",
    description: "From initial screening to offer, we move quickly without cutting corners. Your team gets staffed on your timeline.",
  },
  {
    icon: Globe,
    title: "North American Expertise",
    description: "We understand labor markets, hiring requirements, and workforce trends across both Canada and the United States.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Account Support",
    description: "You get direct access to the team who knows your hiring needs, team dynamics, and long-term goals.",
  },
  {
    icon: Shield,
    title: "Risk-Free Trial Periods",
    description: "New placements include a trial period so you can confirm the fit works before committing long-term.",
  },
  {
    icon: CheckCircle,
    title: "Compliance & Screening",
    description: "Every candidate passes background checks, reference verification, and skill assessments before we send them your way.",
  },
];

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-24 relative">
      <div className="section-divider w-full mb-24" />
      <div className="container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Core Strengths</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4">
            What sets <span className="text-gradient-gold">MaplePeak</span> apart
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            We match the right talent to the right roles with precision and care, delivering staffing solutions that work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`glass-card-hover rounded-xl p-8 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
