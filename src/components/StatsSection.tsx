import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useCountUp } from "@/hooks/use-count-up";
import teamImage from "@/assets/team-collab.jpg";

const stats = [
  { value: 2, suffix: "", label: "Countries Served", desc: "Staffing across Canada and the United States" },
  { value: 1, suffix: "", label: "Dedicated Specialist", desc: "Personalized attention from Om Prakash Yedla" },
  { value: 100, suffix: "%", label: "Focus on Quality", desc: "Every placement reflects premium standards" },
  { value: 24, suffix: "h", label: "Response Time", desc: "Fast, professional communication guaranteed" },
];

function StatCard({ stat, visible, delay }: { stat: typeof stats[0]; visible: boolean; delay: number }) {
  const count = useCountUp(stat.value, 1500, visible);

  return (
    <div
      className={`text-center opacity-0 ${visible ? "animate-fade-up" : ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-4xl sm:text-5xl font-display font-bold text-gradient-gold">
        {count}{stat.suffix}
      </div>
      <div className="font-semibold mt-2">{stat.label}</div>
      <div className="text-sm text-muted-foreground mt-1">{stat.desc}</div>
    </div>
  );
}

export default function StatsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 relative">
      <div className="section-divider w-full mb-24" />
      <div className="container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Track Record</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4">
            Proven <span className="text-gradient-gold">expertise</span> delivering results
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} visible={isVisible} delay={i * 0.15} />
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden max-w-5xl mx-auto">
          <img
            src={teamImage}
            alt="Professional team reviewing candidate profiles"
            loading="lazy"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent flex items-center">
            <div className="p-8 sm:p-12 max-w-lg">
              <h3 className="text-2xl font-display font-bold mb-3">Built on expertise, driven by results</h3>
              <p className="text-muted-foreground">
                MaplePeak Staffing connects top talent with organizations across Canada and the United States. 
                We focus on understanding what each client needs and delivering placements that work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
