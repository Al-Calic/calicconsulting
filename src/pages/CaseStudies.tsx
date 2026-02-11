import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";

const studies = [
  {
    sector: "Central Government Department",
    title: "Finance Transformation Programme Support",
    summary: "Calic provided senior finance expertise to support a major departmental transformation programme, delivering financial modelling, business case development, and programme reporting across multiple workstreams.",
  },
  {
    sector: "Arms-Length Body",
    title: "Annual Accounts Delivery & Audit Liaison",
    summary: "We embedded with the department's finance team to deliver the annual report and accounts on time and to a high standard, providing technical accounting guidance and acting as the primary liaison with external auditors.",
  },
  {
    sector: "Central Government Department",
    title: "Subsidy Control Assessment for a National Grant Scheme",
    summary: "Calic conducted an independent subsidy control assessment for a new national funding scheme, ensuring compliance with the Subsidy Control Act 2022 and providing assurance to the department's accounting officer.",
  },
];

const CaseStudies = () => (
  <PageLayout>
    <section className="section-padding bg-charcoal">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Case Studies</p>
          <h1 className="max-w-2xl text-4xl font-bold text-charcoal-foreground md:text-5xl">Case Studies</h1>
          <p className="mt-4 max-w-xl text-charcoal-foreground/70">
            Selected examples of our work across central government.
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

export default CaseStudies;
