import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import ctaBg from "@/assets/handshake-cta.png";

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="relative py-32 overflow-hidden mt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaBg}
          alt="Business professionals shaking hands"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" /> 
      </div>

      <div className="container relative z-10" ref={ref}>
        <div className={`text-center max-w-4xl mx-auto opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold mb-6 text-white leading-[1.1]">
            Let's find your next<br className="hidden sm:block" /> opportunity
          </h2>
          
          <p className="text-white/80 text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Connect with MaplePeak Staffing today. Call +91 6309503257 or email email@mybusiness.com to discuss your staffing needs or explore career options.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button size="lg" className="w-full sm:w-auto text-base font-semibold h-14 px-8 rounded-full bg-white text-black hover:bg-neutral-200 transition-all border-0" asChild>
              <a href="tel:+916309503257">
                Call us now
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base font-semibold h-14 px-8 rounded-full border-white/20 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all" asChild>
              <a href="mailto:[EMAIL_ADDRESS]">
                Send an inquiry
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
