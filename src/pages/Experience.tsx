import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";

const studies = [
  {
    sector: "Central Government",
    title: "Finance Transformation Programme",
    summary: "Led the design and delivery of a multi-year finance transformation programme for a major government department, encompassing operating model redesign, process improvement, and capability building across the finance function.",
  },
  {
    sector: "Public Sector Body",
    title: "Digital Service Delivery Programme",
    summary: "Provided programme leadership and governance for a national digital service rollout, coordinating across technology, operations, and policy teams to deliver on time and within budget.",
  },
  {
    sector: "Non-Profit Organisation",
    title: "Organisational Restructure & Workforce Planning",
    summary: "Supported a major non-profit through a full organisational restructure, including workforce planning, role design, change management, and stakeholder engagement — ensuring continuity of service delivery throughout the transition.",
  },
];

const Experience = () => (
  <PageLayout>
    <section className="section-padding bg-charcoal">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Experience</p>
          <h1 className="max-w-2xl text-4xl font-bold text-charcoal-foreground md:text-5xl">Experience</h1>
          <p className="mt-4 max-w-xl text-charcoal-foreground/70">
            A selection of the work delivered by our team — across the public, private, and non-profit sectors.
          </p>
          <p className="mt-3 max-w-xl text-sm text-charcoal-foreground/60">
            Our team brings decades of combined experience from senior roles in government, Big Four firms, and leading consultancies. Below is a sample of the engagements our people have led.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          {studies.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-lg border border-border bg-secondary p-8">
                <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">{s.sector}</span>
                <h3 className="mb-3 text-lg font-semibold">{s.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                <Link to="#" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80">
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="mt-16 text-center text-muted-foreground">
            We're happy to discuss our experience in more detail.{" "}
            <Link to="/contact" className="font-semibold text-primary hover:text-primary/80">
              Get in touch →
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  </PageLayout>
);

export default Experience;
