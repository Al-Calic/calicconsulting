import { Link } from "react-router-dom";
import {
  ArrowRight,
  RefreshCw,
  FileText,
  Briefcase,
  ShieldCheck,
  BarChart3,
  Compass,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import dcmsLogo from "@/assets/dcms-logo.png";
import dbtLogo from "@/assets/dbt-logo.png";
import ukriLogo from "@/assets/ukri-logo.png";

const services = [
  { icon: RefreshCw, title: "Finance Transformation", desc: "Designing and delivering operating model changes, process improvements, and capability building across government finance functions." },
  { icon: FileText, title: "Annual Accounts & Financial Reporting", desc: "End-to-end support for the production of compliant annual reports and accounts, including IFRS technical guidance and audit liaison." },
  { icon: Briefcase, title: "Business Case Development", desc: "Robust business cases aligned to HM Treasury Green Book methodology, from strategic outline to full business case." },
  { icon: ShieldCheck, title: "Subsidy Control Assessments", desc: "Independent assessments under the Subsidy Control Act 2022, ensuring compliance and defensibility for government funding decisions." },
  { icon: BarChart3, title: "Financial Modelling", desc: "Bespoke financial models for spending reviews, programme appraisals, grant administration, and investment decisions." },
  { icon: Compass, title: "Strategic Advisory", desc: "Senior-level counsel on Managing Public Money, delegated authority frameworks, and finance leadership challenges." },
];

const differentiators = [
  { title: "Deep Specialism", desc: "We focus exclusively on central government finance. No generalists — only practitioners who understand HMT frameworks, Managing Public Money, and the realities of Whitehall." },
  { title: "Senior-Led Delivery", desc: "Our engagements are led and delivered by experienced professionals — not staffed with juniors after the pitch. You work directly with the people who won your trust." },
  { title: "Lasting Impact", desc: "We build capability, not dependency. Our goal is to leave your team stronger, more confident, and better equipped than when we arrived." },
];

const clients = [
  "DCMS — Department for Culture, Media and Sport",
  "DBT — Department for Business and Trade",
  "UKRI — UK Research and Innovation",
];

const Index = () => (
  <PageLayout>
    {/* Hero */}
    <section className="relative flex min-h-[85vh] items-center bg-charcoal">
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <ScrollReveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Precision. Expertise. Public Value.
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-charcoal-foreground md:text-5xl lg:text-6xl">
            Specialist finance consulting for UK central government
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-foreground/70">
            We help departments strengthen financial capability, navigate HM Treasury frameworks, and deliver lasting transformation.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>

    {/* Client Logos */}
    <section className="border-b border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Trusted By
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
          <div className="flex h-24 items-center">
            <img src={dcmsLogo} alt="Department for Culture, Media and Sport" className="h-20 object-contain grayscale" />
          </div>
          <div className="flex h-24 items-center">
            <img src={dbtLogo} alt="Department for Business and Trade" className="h-20 object-contain grayscale" />
          </div>
          <div className="flex h-24 items-center">
            <img src={ukriLogo} alt="UK Research and Innovation" className="h-20 object-contain grayscale" />
          </div>
        </div>
      </div>
    </section>

    {/* What We Do */}
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold md:text-4xl">What We Do</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Specialist finance consulting across the full range of central government needs.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <div className="group relative rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="absolute left-0 top-0 h-1 w-0 rounded-t-lg bg-primary transition-all duration-300 group-hover:w-full" />
                <s.icon className="mb-4 text-primary" size={28} strokeWidth={1.5} />
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80">
              Explore Our Services <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Why Calic */}
    <section className="section-padding section-alt">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold md:text-4xl">Why Calic</h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {differentiators.map((d, i) => (
            <ScrollReveal key={d.title} delay={i * 0.1}>
              <div>
                <h3 className="mb-3 text-lg font-semibold">{d.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="bg-primary px-6 py-16 text-center">
      <ScrollReveal>
        <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">
          Ready to talk?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80">
          Let's discuss how Calic can support your team.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-charcoal px-8 py-3 text-sm font-semibold text-charcoal-foreground transition-all hover:bg-charcoal/90"
        >
          Contact Us <ArrowRight size={16} />
        </Link>
      </ScrollReveal>
    </section>
  </PageLayout>
);

export default Index;
