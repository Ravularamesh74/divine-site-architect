import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Users, Award, Clock, MapPin } from "lucide-react";
import aboutTeamImg from "@/assets/about-team.jpg";
import omImg from "@/assets/om.jpeg";

const values = [
  {
    icon: Users,
    title: "People First",
    desc: "We believe every placement is about real people — not just filling a seat. We take time to understand candidates and clients on a personal level.",
  },
  {
    icon: Award,
    title: "Excellence Always",
    desc: "Our commitment to quality means we never settle. Every candidate is thoroughly vetted, and every client receives white-glove service.",
  },
  {
    icon: Clock,
    title: "Speed & Reliability",
    desc: "In today's fast-paced market, timing matters. We combine efficiency with thoroughness to deliver results when you need them.",
  },
  {
    icon: MapPin,
    title: "Local Knowledge",
    desc: "With deep roots in both Canadian and American markets, we understand the unique hiring landscapes, regulations, and culture of each region.",
  },
];

const team = [
  {
    name: "Om Prakash Yedla",
    role: "Founder and Principal Recruiter",
    img: "omImg",
    desc: "Om leads MaplePeak Staffing with a vision to connect top talent with the right opportunities across North America. His strategic approach ensures every placement drives real value for clients and candidates.",
    initials: "OY",
  },
  {
    name: "Jessica Chen",
    role: "Senior Recruitment Specialist",
    desc: "Jessica brings expertise in talent acquisition and candidate relations. She works directly with clients to understand staffing needs and sources qualified professionals throughout Canada and the United States.",
    initials: "JC",
  },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal();
  const { ref: teamRef, isVisible: teamVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 relative">
      <div className="section-divider w-full mb-24" />
      <div className="container">
        {/* About intro */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className={`opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Foundation</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4">
              Building North American staffing <span className="text-gradient-gold">from the ground up</span>
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed text-lg">
              MaplePeak Staffing launched with a clear mission: connect skilled talent with organizations across Canada and the United States that need reliable, qualified professionals. We started in Toronto and are committed to understanding the staffing challenges businesses face in today's market.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Our approach combines deep industry expertise with a personal touch. We don't just match resumes to job descriptions — we understand the unique dynamics of your team, your company culture, and your long-term vision. This allows us to deliver placements that don't just fill a position but strengthen your entire organization.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Whether you need permanent placements, temporary staff, or contract workers, we connect you with qualified candidates tailored to your specific business needs across multiple industries throughout North America.
            </p>
          </div>
          <div className={`opacity-0 ${isVisible ? "animate-slide-in-right" : ""}`}>
            <div className="rounded-2xl overflow-hidden shadow-lg shadow-primary/5">
              <img
                src={aboutTeamImg}
                alt="MaplePeak Staffing professional team"
                loading="lazy"
                className="w-full h-80 lg:h-[420px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div ref={teamRef} className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className={`text-primary text-sm font-semibold uppercase tracking-widest opacity-0 ${teamVisible ? "animate-fade-up" : ""}`}>
              Leadership Team
            </span>
            <h2 className={`text-3xl sm:text-4xl font-display font-bold mt-4 opacity-0 ${teamVisible ? "animate-fade-up stagger-1" : ""}`}>
              Meet the team driving <span className="text-gradient-gold">your success</span>
            </h2>
            <p className={`text-muted-foreground mt-4 opacity-0 ${teamVisible ? "animate-fade-up stagger-2" : ""}`}>
              Our dedicated professionals combine deep recruitment expertise with a commitment to matching you with the right talent.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`glass-card-hover rounded-xl p-8 text-center opacity-0 ${teamVisible ? "animate-fade-up" : ""}`}
                style={{ animationDelay: `${(i + 3) * 0.1}s` }}
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <span className="text-primary text-2xl font-bold">{member.initials}</span>
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-primary font-medium mt-1">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div ref={valuesRef}>
          <h3 className={`text-2xl font-display font-bold text-center mb-12 opacity-0 ${valuesVisible ? "animate-fade-up" : ""}`}>
            Our Core <span className="text-gradient-gold">Values</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`glass-card-hover rounded-xl p-6 text-center opacity-0 ${valuesVisible ? "animate-fade-up" : ""}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary" size={22} />
                </div>
                <h4 className="font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
