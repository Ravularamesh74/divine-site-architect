import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-main.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary/3 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="container relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 text-xs font-medium text-primary animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Premium Staffing Solutions
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] animate-fade-up stagger-1">
              Find the{" "}
              <span className="text-gradient-gold">perfect talent</span>{" "}
              for your team
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-up stagger-2">
              We connect top talent with the right opportunities across North America. 
              Fast placements, reliable service, tailored to your needs.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up stagger-3">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="#contact">
                  Start Hiring
                  <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+12345678900">
                  <Phone className="mr-1" size={16} />
                  Free Consultation
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4 animate-fade-up stagger-4">
              <div>
                <div className="text-2xl font-bold text-gradient-gold">2</div>
                <div className="text-xs text-muted-foreground">Countries</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="text-2xl font-bold text-gradient-gold">100%</div>
                <div className="text-xs text-muted-foreground">Quality Focus</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="text-2xl font-bold text-gradient-gold">24h</div>
                <div className="text-xs text-muted-foreground">Response</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden glow-gold">
              <img
                src={heroImage}
                alt="Two professionals discussing staffing opportunities"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-lg">✓</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">Trusted Partner</div>
                  <div className="text-xs text-muted-foreground">Canada & US</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
