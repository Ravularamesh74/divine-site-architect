import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const faqs = [
  {
    q: "What types of positions does MaplePeak Staffing fill?",
    a: "We handle recruitment across multiple industries and roles throughout Canada and the United States. Whether you need permanent placements, temporary staff, or contract workers, we connect you with qualified candidates tailored to your specific business needs.",
  },
  {
    q: "How does your recruitment process work?",
    a: "We start by understanding your role requirements and company culture. Then we source and screen candidates, conduct interviews, and present top matches for your consideration. We manage the entire process so you can focus on running your business.",
  },
  {
    q: "Can MaplePeak Staffing help with urgent staffing needs?",
    a: "Yes. We work to fill positions quickly when you need them. Contact us with your timeline and requirements, and we'll prioritize finding the right fit for your urgent staffing demands across Canada and the US.",
  },
  {
    q: "What makes MaplePeak Staffing different from other recruiting firms?",
    a: "We're a premium staffing partner that focuses on quality placements over volume. We take time to understand your business goals and culture, then match you with candidates who are not just qualified, but the right fit for your team long-term.",
  },
  {
    q: "Do you serve both Canada and the United States?",
    a: "Yes. MaplePeak Staffing operates across North America, serving clients and candidates throughout Canada and the United States. Whether you're hiring locally in Toronto or across borders, we can help.",
  },
  {
    q: "What if a placement doesn't work out?",
    a: "We stand behind our placements and work with you to address any concerns. If a candidate isn't the right fit, we'll help find a replacement. Your success is our priority.",
  },
  {
    q: "How long does the hiring and placement process typically take?",
    a: "Timeline varies by role and position level. We work quickly to understand your needs, screen qualified candidates, and facilitate interviews. Most placements move forward within weeks once the right candidate is identified.",
  },
  {
    q: "How do I apply for a position or submit my resume?",
    a: "You can submit your application and resume directly through our contact form or email us at email@mybusiness.com. We review every submission and reach out to candidates who match active opportunities.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 relative">
      <div className="section-divider w-full mb-24" />
      <div className="container max-w-3xl" ref={ref}>
        <div className="text-center mb-16">
          <span className={`text-primary text-sm font-semibold uppercase tracking-widest opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
            Questions Answered
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 opacity-0 ${isVisible ? "animate-fade-up stagger-1" : ""}`}>
            Common <span className="text-gradient-gold">staffing questions</span>
          </h2>
          <p className={`text-muted-foreground mt-4 text-lg opacity-0 ${isVisible ? "animate-fade-up stagger-2" : ""}`}>
            Find answers about how MaplePeak Staffing works, our services, and what to expect.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`glass-card rounded-xl overflow-hidden opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${(i + 3) * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
              >
                <span className="font-semibold text-sm pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
