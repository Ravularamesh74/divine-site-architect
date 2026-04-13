import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const plans = [
  {
    name: "Single Placement",
    price: "Custom quote",
    period: "per hire",
    desc: "Perfect for filling one open role with a qualified candidate matched to your requirements.",
    features: [
      "Candidate screening and interviews",
      "Background and reference checks",
      "Placement coordination",
      "30-day candidate replacement guarantee",
    ],
    highlight: false,
    badge: "Most Flexible",
  },
  {
    name: "Contract Staffing",
    price: "Custom quote",
    period: "weekly billing",
    desc: "Temporary or contract workers for short-term projects, seasonal needs, or coverage gaps.",
    features: [
      "Pre-screened contract candidate pool",
      "Fast placement within 48 hours",
      "Payroll and compliance handling",
      "On-demand candidate replacement",
      "Flexible contract lengths",
      "Dedicated account manager",
    ],
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Team Building",
    price: "Custom quote",
    period: "per project",
    desc: "Build a complete team for large initiatives, expansions, or significant operational changes.",
    features: [
      "Multi-role recruitment strategy",
      "Customized candidate sourcing",
      "Bulk placement coordination",
      "Team integration support",
      "Extended candidate guarantee",
    ],
    highlight: false,
    badge: null,
  },
  {
    name: "Retained Search",
    price: "Custom quote",
    period: "engagement-based",
    desc: "Executive and specialized role placements with dedicated research and exclusive candidate access.",
    features: [
      "Executive-level candidate sourcing",
      "In-depth market research",
      "Confidential candidate management",
      "Interview preparation coaching",
    ],
    highlight: false,
    badge: "Premium",
  },
];

export default function PricingSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="pricing" className="py-24 relative">
      <div className="section-divider w-full mb-24" />
      <div className="container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className={`text-primary text-sm font-semibold uppercase tracking-widest opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
            Transparent Pricing
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 opacity-0 ${isVisible ? "animate-fade-up stagger-1" : ""}`}>
            Solutions that fit <span className="text-gradient-gold">your budget</span>
          </h2>
          <p className={`text-muted-foreground mt-4 text-lg opacity-0 ${isVisible ? "animate-fade-up stagger-2" : ""}`}>
            Choose the recruitment package that matches your hiring needs. Each plan includes dedicated placement support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative glass-card-hover rounded-xl p-6 flex flex-col opacity-0 ${isVisible ? "animate-fade-up" : ""} ${
                plan.highlight ? "ring-2 ring-primary" : ""
              }`}
              style={{ animationDelay: `${(i + 3) * 0.1}s` }}
            >
              {plan.badge && (
                <span className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold ${
                  plan.highlight ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }`}>
                  {plan.badge}
                </span>
              )}
              <h3 className="text-lg font-semibold mt-2">{plan.name}</h3>
              <div className="mt-3">
                <span className="text-2xl font-display font-bold text-gradient-gold">{plan.price}</span>
                <span className="text-sm text-muted-foreground ml-2">{plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-3 mb-6">{plan.desc}</p>

              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlight ? "hero" : "heroOutline"}
                className="w-full mt-6"
                asChild
              >
                <a href="tel:+12345678900">Request a Quote</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
