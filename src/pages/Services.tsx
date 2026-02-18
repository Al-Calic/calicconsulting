import {
  BarChart3, Monitor, Users, RefreshCw, ClipboardList, Target, Handshake,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: BarChart3,
    title: "Finance & Financial Management",
    desc: "We help organisations build finance functions that are resilient, efficient, and strategically valuable. From strengthening day-to-day financial management to delivering complex transformation, our team brings deep technical expertise and practical delivery experience.",
    items: ["Financial reporting and accounts production", "Finance operating model design", "Financial controls and governance frameworks", "Financial modelling and analysis", "Budgeting, forecasting, and planning", "Finance capability building and training"],
  },
  {
    icon: Monitor,
    title: "Digital, Data & Technology",
    desc: "We support organisations in harnessing technology and data to improve services, drive efficiency, and enable transformation. Our approach is grounded in practical delivery, not theoretical frameworks.",
    items: ["Digital strategy and roadmap development", "Service design and user research", "Data strategy and architecture", "Technology operating model reviews", "Systems implementation and integration support", "Legacy system migration planning"],
  },
  {
    icon: Users,
    title: "People & Workforce Transformation",
    desc: "We help organisations rethink how they attract, develop, manage, and deploy their people — ensuring workforce strategies are aligned to organisational objectives and changing demands.",
    items: ["Organisational design and restructuring", "Workforce planning and capability assessments", "HR transformation and process improvement", "Culture change and employee engagement", "Talent strategy and succession planning", "Learning and development frameworks"],
  },
  {
    icon: RefreshCw,
    title: "Change & Transformation",
    desc: "We lead and deliver complex change programmes — from strategy through to implementation. Whether you're transforming operating models, responding to policy changes, or embedding new ways of working, we bring experienced leadership and disciplined delivery.",
    items: ["Transformation strategy and programme design", "Business readiness and change impact assessment", "Stakeholder engagement and communications", "Benefits identification, tracking, and realisation", "Operating model design and implementation", "Post-implementation review and lessons learned"],
  },
  {
    icon: ClipboardList,
    title: "Programme & Portfolio Management",
    desc: "We bring structure, governance, and grip to complex programmes and portfolios. Our programme professionals have led delivery in some of the most demanding environments in government and the private sector.",
    items: ["Programme and project leadership", "Portfolio governance and prioritisation", "Assurance and gateway reviews", "Programme reporting and performance management", "Risk and issue management", "PMO design and implementation"],
  },
  {
    icon: Target,
    title: "Strategy & Business Cases",
    desc: "We develop clear, evidence-based strategies and business cases that withstand scrutiny. Whether for major investment decisions, organisational change, or policy implementation, we bring analytical rigour and practical experience.",
    items: ["Strategic options appraisal", "Business case development (all stages)", "Cost-benefit and economic analysis", "Investment prioritisation frameworks", "Strategic planning and away-day facilitation", "Post-implementation evaluation"],
  },
  {
    icon: Handshake,
    title: "Commercial & Procurement",
    desc: "We support organisations across the full commercial lifecycle — helping you get better value from your supply chain, manage contracts more effectively, and make smarter sourcing decisions.",
    items: ["Procurement strategy and sourcing", "Contract management and performance", "Supplier relationship management", "Commercial assurance and due diligence", "Value-for-money assessments", "Commercial capability building"],
  },
];

const Services = () => (
  <PageLayout>
    <section className="section-padding bg-charcoal">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Services</p>
          <h1 className="max-w-2xl text-4xl font-bold text-charcoal-foreground md:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-xl text-charcoal-foreground/70">
            We provide specialist consulting across the disciplines that drive organisational performance.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {services.map((s, i) => (
      <section key={s.title} className={`section-padding ${i % 2 === 0 ? "bg-background" : "section-alt"}`}>
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="flex items-start gap-4">
              <s.icon className="mt-1 shrink-0 text-primary" size={28} strokeWidth={1.5} />
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">{s.title}</h2>
                <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    ))}
  </PageLayout>
);

export default Services;
