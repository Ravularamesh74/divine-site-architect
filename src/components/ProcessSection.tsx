import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Search, FileCheck, Users, Briefcase } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    desc: "We start by understanding your business, team culture, and specific hiring requirements through a detailed consultation.",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Sourcing & Screening",
    desc: "Our team identifies top candidates from our extensive network, conducts thorough interviews, background checks, and skills assessments.",
  },
  {
    icon: Users,
    step: "03",
    title: "Matching & Presentation",
    desc: "We present a shortlist of pre-vetted candidates tailored to your needs, complete with detailed profiles and our professional recommendations.",
  },
  {
    icon: Briefcase,
    step: "04",
    title: "Placement & Support",
    desc: "After your selection, we handle onboarding coordination and provide ongoing support through the trial period to ensure a successful placement.",
  },
];

export default function ProcessSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 relative">
      <div className="section-divider w-full mb-24" />
      <div className="container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className={`text-primary text-sm font-semibold uppercase tracking-widest opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
            How It Works
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 opacity-0 ${isVisible ? "animate-fade-up stagger-1" : ""}`}>
            Our proven <span className="text-gradient-gold">4-step process</span>
          </h2>
          <p className={`text-muted-foreground mt-4 text-lg opacity-0 ${isVisible ? "animate-fade-up stagger-2" : ""}`}>
            A streamlined approach designed to find you the perfect candidate efficiently and reliably.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.step}
              className={`relative glass-card-hover rounded-xl p-8 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${(i + 3) * 0.1}s` }}
            >
              <span className="text-5xl font-display font-bold text-primary/10 absolute top-4 right-6">
                {step.step}
              </span>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <step.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
