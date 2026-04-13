import { Target, Zap, Globe, HeadphonesIcon, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import talentImg from "@/assets/talent-matching.jpg";
import fastImg from "@/assets/fast-placement.jpg";
import northAmericaImg from "@/assets/north-america.jpg";
import accountImg from "@/assets/account-support.jpg";
import trialImg from "@/assets/trial-period.jpg";
import complianceImg from "@/assets/compliance.jpg";

const services = [
  {
    icon: Target,
    title: "Precision Talent Matching",
    description: "We assess skills, culture fit, and career goals to connect you with candidates who truly succeed in your role. Our proprietary assessment methodology evaluates technical competencies, soft skills, and organizational alignment to ensure every placement is a perfect match.",
    details: [
      "In-depth skills & competency assessments",
      "Cultural alignment evaluation",
      "Career trajectory mapping",
      "Industry-specific expertise matching",
    ],
    image: talentImg,
    imageAlt: "Recruitment interview with talent matching process",
  },
  {
    icon: Zap,
    title: "Fast, Reliable Placements",
    description: "From initial screening to offer, we move quickly without cutting corners. Your team gets staffed on your timeline. Our streamlined recruitment pipeline leverages advanced candidate databases and AI-powered screening to reduce time-to-hire by up to 60%.",
    details: [
      "Average 2-week placement cycle",
      "Pre-screened candidate database",
      "Rapid shortlisting process",
      "Dedicated recruitment coordinator",
    ],
    image: fastImg,
    imageAlt: "Team of recruiters working efficiently on placements",
  },
  {
    icon: Globe,
    title: "North American Expertise",
    description: "We understand labor markets, hiring requirements, and workforce trends across both Canada and the United States. Our cross-border expertise means we navigate employment regulations, visa requirements, and regional market dynamics seamlessly.",
    details: [
      "Canada & US labor law compliance",
      "Regional market salary benchmarking",
      "Cross-border hiring facilitation",
      "Local market trend analysis",
    ],
    image: northAmericaImg,
    imageAlt: "North American city skylines representing cross-border expertise",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Account Support",
    description: "You get direct access to the team who knows your hiring needs, team dynamics, and long-term goals. Your dedicated account manager becomes an extension of your HR team, proactively identifying talent needs before they become urgent.",
    details: [
      "Single point of contact",
      "Proactive talent pipeline building",
      "Quarterly business reviews",
      "24/7 emergency staffing support",
    ],
    image: accountImg,
    imageAlt: "Dedicated account manager providing personalized support",
  },
  {
    icon: Shield,
    title: "Risk-Free Trial Periods",
    description: "New placements include a trial period so you can confirm the fit works before committing long-term. If the candidate doesn't meet expectations during the trial, we'll find a replacement at no additional cost — guaranteed.",
    details: [
      "30-90 day trial periods available",
      "Free replacement guarantee",
      "Performance milestone tracking",
      "Smooth transition support",
    ],
    image: trialImg,
    imageAlt: "New employee being welcomed during trial period",
  },
  {
    icon: CheckCircle,
    title: "Compliance & Screening",
    description: "Every candidate passes background checks, reference verification, and skill assessments before we send them your way. Our thorough vetting process ensures you receive only the most qualified and trustworthy candidates.",
    details: [
      "Criminal background checks",
      "Professional reference verification",
      "Skills & certification validation",
      "Drug screening (where applicable)",
    ],
    image: complianceImg,
    imageAlt: "Document verification and compliance screening process",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
    >
      <div className={`space-y-5 ${isEven ? "" : "lg:order-2"}`}>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <service.icon className="text-primary" size={24} />
        </div>
        <h3 className="text-2xl lg:text-3xl font-display font-bold">{service.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
        <ul className="space-y-3">
          {service.details.map((detail) => (
            <li key={detail} className="flex items-center gap-3 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="text-foreground/80">{detail}</span>
            </li>
          ))}
        </ul>
        <Button variant="heroOutline" size="lg" className="mt-2" asChild>
          <a href="#contact">
            Learn More <ArrowRight size={16} className="ml-1" />
          </a>
        </Button>
      </div>
      <div className={`${isEven ? "" : "lg:order-1"}`}>
        <div className="rounded-2xl overflow-hidden shadow-lg shadow-primary/5">
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            className="w-full h-72 lg:h-80 object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-24 relative">
      <div className="section-divider w-full mb-24" />
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20" ref={ref}>
          <span className={`text-primary text-sm font-semibold uppercase tracking-widest opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
            Our Services
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 opacity-0 ${isVisible ? "animate-fade-up stagger-1" : ""}`}>
            What sets <span className="text-gradient-gold">MaplePeak</span> apart
          </h2>
          <p className={`text-muted-foreground mt-4 text-lg opacity-0 ${isVisible ? "animate-fade-up stagger-2" : ""}`}>
            We match the right talent to the right roles with precision and care, delivering comprehensive staffing solutions across North America.
          </p>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
