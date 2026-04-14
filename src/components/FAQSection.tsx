"use client";

import { useState, useMemo } from "react";
import { ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ==============================
// 🔹 DATA (WITH CATEGORIES)
// ==============================
const faqs = [
  {
    category: "Hiring",
    q: "How quickly can you fill a position?",
    a: "The time required to fill a position depends on factors such as role complexity, required experience, and market demand. In most cases, we successfully place candidates within 1–3 weeks. For urgent hiring needs, we utilize our pre-screened talent pool to accelerate the process significantly. Our recruitment team works efficiently without compromising on quality. We ensure that every candidate is carefully evaluated before being presented. This approach helps reduce hiring risks while maintaining speed. Ultimately, our goal is to deliver the right candidate as quickly as possible while ensuring long-term success for your organization.",
  },

  {
    category: "Hiring",
  q: "What industries do you specialize in?",
  a: "We specialize in a diverse range of industries including technology, finance, healthcare, construction, manufacturing, logistics, and professional services. Our team understands that each industry has unique hiring requirements and standards. We tailor our recruitment strategies based on specific sector demands. This allows us to identify candidates with the right technical expertise and industry knowledge. We also stay updated with market trends and evolving skill requirements. Our goal is to ensure every placement aligns with both role expectations and business objectives. This industry-focused approach enables us to deliver consistent and high-quality results."
},
{
  category: "Hiring",
  q: "What types of roles do you typically fill?",
  a: "We recruit for a wide range of roles across various industries and experience levels. This includes entry-level positions, mid-level professionals, senior specialists, and executive leadership roles. We support hiring for technical roles such as developers, engineers, and IT specialists, as well as non-technical positions like operations, finance, HR, and customer support. Our approach is tailored to each client’s specific requirements and business goals. We take the time to understand the responsibilities, skills, and cultural expectations of every role. This allows us to match candidates who are not only qualified but also aligned with your organization. Whether you need a single hire or an entire team, we ensure precise and effective recruitment solutions."
},
{
  category: "Hiring",
  q: "Do you offer temporary, contract, and permanent staffing?",
  a: "Yes, we offer flexible staffing solutions including temporary, contract, and permanent placements to meet diverse business needs. Temporary staffing is ideal for short-term projects, seasonal demand, or covering employee absences. Contract staffing provides skilled professionals for defined project durations without long-term commitment. Permanent staffing focuses on long-term hires who contribute to your organization’s growth and stability. We work closely with you to understand your workforce requirements and recommend the most suitable hiring model. Our process ensures that every candidate is carefully screened and aligned with your expectations. This flexibility allows you to scale your team efficiently while maintaining productivity and quality."
},
{
  category: "Hiring",
  q: "How do you ensure candidate quality?",
  a: "We ensure candidate quality through a structured and multi-step screening process designed to evaluate both technical expertise and overall suitability. Every candidate undergoes detailed interviews, skill assessments, and background verification where required. We also conduct reference checks to validate past performance and reliability. In addition to qualifications, we assess communication skills, work ethic, and cultural fit. Our team carefully matches candidates to your specific role requirements and company environment. Only those who meet our quality standards are shortlisted and presented. This thorough approach minimizes hiring risks and improves long-term retention. Our goal is to deliver candidates who contribute effectively from day one."
},
{
  category: "Hiring",
  q: "How quickly can you fill a position?",
  a: "The time required to fill a position depends on factors such as role complexity, required skills, and market availability. In most cases, we successfully place candidates within 1–3 weeks. For urgent hiring needs, we leverage our pre-screened talent pool to accelerate the process. Our team uses efficient sourcing and screening methods to identify qualified candidates quickly. We focus on delivering quality without compromising speed. Each candidate is carefully evaluated before being presented to you. This ensures fewer interview rounds and faster decision-making. Our goal is to provide the right candidate in the shortest possible time while ensuring long-term success."
},
{
  category: "Hiring",
  q: "Do you provide support after placement?",
  a: "Yes, we provide ongoing support even after a candidate has been successfully placed. Our team stays engaged during the onboarding phase to ensure a smooth and seamless transition. We maintain regular communication with both the client and the candidate to address any early concerns. This helps prevent potential issues and improves overall satisfaction. We also offer guidance during the initial working period to support performance and integration. Our focus is on building long-term success rather than just completing a placement. By staying involved, we ensure both parties are aligned and comfortable. Our goal is to create lasting partnerships and successful outcomes."
},
{
  category: "Hiring",
  q: "Is there a guarantee on placements?",
  a: "Yes, we provide a placement guarantee to ensure confidence and reliability in our services. If a candidate does not meet expectations within the agreed guarantee period, we will promptly initiate a replacement process. Our team works closely with you to understand the issue and refine the requirements if needed. We maintain a pool of qualified candidates to minimize delays during replacement. This approach reduces hiring risks and ensures continuity in your operations. We carefully screen candidates to avoid such situations, but we are always prepared to support you if needed. Our guarantee reflects our commitment to quality, accountability, and long-term client satisfaction."
},
{
  category: "Hiring",
  q: "Can you help with bulk or large-scale hiring?",
a: "Yes, we are fully equipped to support bulk and large-scale hiring requirements across various industries. Whether you are expanding your workforce, opening new locations, or managing large projects, we can efficiently handle multiple roles at once. Our structured recruitment process allows us to maintain consistency and quality even at scale. We assign dedicated recruiters and use advanced sourcing strategies to manage high-volume hiring. Each candidate is carefully screened to ensure they meet your standards. We also coordinate timelines to meet your business deadlines without delays. This ensures a smooth, organized, and efficient hiring experience. Our goal is to help you scale quickly while maintaining high-quality placements."
},
{
  category: "Hiring",
  q: "Do you assist candidates in finding jobs?",
  a: "Yes, we actively assist candidates in their job search. Our team helps you identify suitable opportunities, prepare your resume, and get ready for interviews. We work with you to understand your career goals and match you with the right companies. Whether you're looking for temporary, contract, or permanent roles, we provide guidance and support throughout the process. Our goal is to help you find a position where you can grow and succeed."
},
{
  category: "Process",
  q: "What is your recruitment process like?",
  a: "Our recruitment process begins with a thorough consultation to understand your specific hiring needs and business objectives. We then move to targeted sourcing to identify qualified candidates from our extensive network and various platforms. Each candidate undergoes a rigorous screening process including interviews, skill assessments, and background checks where applicable. We present you with a shortlist of top candidates along with detailed profiles and recommendations. After your selection, we coordinate interviews and provide support throughout the hiring process. Finally, we follow up after placement to ensure a smooth transition and long-term satisfaction."
},
{
  category: "Process",
  q: "How do you understand company culture before hiring?",
  a: "We take a detailed and consultative approach to understanding your company culture before starting the hiring process. This begins with in-depth discussions about your organization’s values, work environment, team dynamics, and leadership style. We also learn about your expectations, communication patterns, and long-term business goals. By understanding both the formal and informal aspects of your workplace, we can identify what makes a candidate truly successful in your organization. We then evaluate candidates not only on skills but also on cultural alignment and attitude. This ensures better team integration and long-term retention. Our goal is to match candidates who naturally fit into your company’s culture and contribute positively from day one."
},
{
  category: "Process",
  q: "Do you handle remote or hybrid hiring?",
  a: "Yes, we handle remote, hybrid, and on-site hiring based on your organization’s specific requirements. We understand that modern workplaces operate with flexible work models, and we adapt our recruitment process accordingly. Our team evaluates candidates not only on technical skills but also on their ability to work effectively in remote or hybrid environments. We assess communication skills, time management, and adaptability to ensure productivity. Additionally, we consider factors such as time zones, collaboration tools, and team dynamics. This ensures seamless integration into your existing workflow. Our goal is to provide candidates who can perform efficiently regardless of the work setup."
},
{
  category: "Process",
  q: "What makes your recruitment process efficient?",
  a: "Our recruitment process is efficient because it combines structured methodology with industry expertise and modern sourcing techniques. We begin with a clear understanding of your requirements to avoid unnecessary delays later in the process. Our team uses a strong candidate network and targeted sourcing strategies to quickly identify qualified talent. Each candidate is carefully screened before being presented, reducing the time spent on unsuitable profiles. We streamline communication and coordinate interviews efficiently to keep the process moving forward. Our experience allows us to anticipate challenges and resolve them proactively. By balancing speed with quality, we ensure faster hiring decisions without compromising on results."
},
{
  category: "Process",
  q: "How do you stay updated with market trends?",
  a: "We stay updated with market trends through continuous research, industry insights, and active engagement with hiring networks across Canada and the United States. Our team regularly analyzes labor market data, salary benchmarks, and emerging skill demands. We also maintain close relationships with clients and candidates to understand real-time hiring challenges. This helps us identify shifts in workforce needs and industry expectations. Additionally, we monitor technological advancements and evolving job roles across sectors. By combining data-driven insights with hands-on experience, we ensure our recruitment strategies remain relevant and effective. This allows us to provide informed guidance and deliver competitive hiring solutions to our clients."
},
{
  category: "Process",
  q: "Can startups or small businesses work with you?",
  a: "Yes, we work closely with startups and small businesses, understanding that their hiring needs are often unique and rapidly evolving. We provide flexible staffing solutions that align with your budget, growth stage, and business goals. Our team helps identify candidates who can adapt to dynamic environments and contribute immediately. We take the time to understand your vision, culture, and long-term objectives. This allows us to match you with talent that supports sustainable growth. Whether you need your first hire or are building a small team, we offer personalized support throughout the process. Our goal is to help startups and small businesses scale efficiently with the right people in place."
},
  {
    category: "Hiring",
    q: "Do you offer contract staffing?",
    a: "Yes, we offer contract staffing as part of our flexible workforce solutions. Contract staffing is ideal for businesses that need skilled professionals for specific projects or defined time periods without long-term commitments. We help you quickly onboard qualified candidates who can contribute immediately. Our team handles sourcing, screening, and placement to ensure you get the right talent. We also assist with contract management and compliance requirements. This approach allows you to scale your workforce based on project demands. It reduces hiring risks while maintaining productivity and efficiency. Our goal is to provide reliable contract professionals who meet both your technical and business needs."
  },
  {
    category: "Process",
    q: "How does your recruitment process work?",
    a: "Our recruitment process is designed to be structured, efficient, and tailored to your specific hiring needs. We begin with a detailed consultation to understand your role requirements, company culture, and expectations. Next, we source candidates through our network, databases, and targeted outreach strategies. Each candidate is carefully screened through interviews, skill assessments, and reference checks. We then present a shortlist of the most suitable candidates along with our recommendations. Once you select a candidate, we assist with interview coordination and offer management. After placement, we continue to provide support during onboarding to ensure a smooth transition. This end-to-end approach ensures high-quality hires and long-term success."
  },
  {
    category: "Candidates",
    q: "How do I apply for a job?",
    a: "Applying for a job with us is simple and straightforward. You can submit your resume through our contact form on the website or send it directly to our official email address. Once we receive your application, our recruitment team carefully reviews your profile, skills, and experience. If your qualifications match any current or upcoming opportunities, we will reach out to you for the next steps. We may also guide you through interview preparation and provide insights about the role. Even if there isn’t an immediate match, we keep your profile in our database for future openings. Our goal is to connect you with opportunities that align with your career goals and strengths."
  },
  {
    category: "Guarantee",
    q: "Do you offer replacement guarantees?",
    a: "Yes, we offer a replacement guarantee to ensure confidence in every placement we make. If a candidate does not meet expectations within the agreed guarantee period, we will promptly initiate a replacement process at no additional cost, subject to our terms. Our team works closely with you to understand the issue and refine the requirements if needed. We maintain a pipeline of qualified candidates to minimize downtime during replacement. This guarantee reflects our commitment to quality and accountability. We aim to reduce hiring risks while ensuring long-term success for your organization. Our priority is to deliver reliable placements that meet both performance and cultural expectations."
  },

];

// ==============================
// 🔹 ANIMATION
// ==============================
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// ==============================
// 🔹 COMPONENT
// ==============================
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(faqs.map(f => f.category))];

  // 🔥 FILTER LOGIC
  const filtered = useMemo(() => {
    return faqs.filter((faq) => {
      const matchCategory =
        category === "All" || faq.category === category;

      const matchSearch =
        faq.q.toLowerCase().includes(search.toLowerCase()) ||
        faq.a.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [search, category]);

  return (
    <section className="py-24">
      <div className="container max-w-3xl">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-2">
            Find answers instantly
          </p>
        </div>

        {/* 🔍 SEARCH */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 text-muted-foreground" size={18} />
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-transparent focus:outline-none"
          />
        </div>

        {/* 🧩 FILTERS */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                category === cat
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ LIST */}
        <div className="space-y-3">
          <AnimatePresence>
            {filtered.length === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-muted-foreground"
              >
                No results found.
              </motion.p>
            )}

            {filtered.map((faq, i) => (
              <motion.div
                key={faq.q}
                variants={item}
                initial="hidden"
                animate="show"
                className="rounded-xl border border-border bg-white/5 backdrop-blur-xl"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  className="w-full flex justify-between items-center p-5"
                >
                  <span className="font-medium text-left">
                    {faq.q}
                  </span>

                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                  >
                    <ChevronDown />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-muted-foreground">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}