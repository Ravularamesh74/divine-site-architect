import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-divider w-full mb-24" />
      <div className="container" ref={ref}>
        <div className={`glass-card rounded-2xl p-8 sm:p-16 text-center max-w-4xl mx-auto relative overflow-hidden opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          {/* Glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
              Let's find your next <span className="text-gradient-gold">great hire</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Connect with MaplePeak Staffing today. We'll match you with qualified talent across Canada and the United States.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="tel:+12345678900">
                  <Phone size={18} className="mr-2" />
                  Call +1 234 567 8900
                  <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" size={16} />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="mailto:email@mybusiness.com">
                  <Mail size={18} className="mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
