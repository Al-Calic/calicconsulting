import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { num: "01", title: "Understand", desc: "We invest time in understanding your organisation's context, constraints, and ambitions before proposing solutions." },
  { num: "02", title: "Deliver", desc: "We embed with your teams, working at pace to deliver tangible outputs — not slide decks." },
  { num: "03", title: "Sustain", desc: "We transfer knowledge and build capability so improvements last well beyond our engagement." },
];

const values = ["Integrity", "Rigour", "Partnership", "Value"];

const About = () => (
  <PageLayout>
    {/* Hero */}
    <section className="section-padding bg-charcoal">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">About</p>
          <h1 className="max-w-2xl text-4xl font-bold text-charcoal-foreground md:text-5xl">
            About Calic Consulting
          </h1>
        </ScrollReveal>
      </div>
    </section>

    {/* Narrative */}
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-3xl space-y-6">
        <ScrollReveal>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Calic Consulting is a boutique advisory firm built around a single conviction: that central government deserves the same calibre of finance expertise typically reserved for the private sector — delivered with commitment, without the overhead of large consultancy firms.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Founded by Altaf Daya, a chartered accountant with experience spanning KPMG, Accenture, and senior finance roles in the energy sector, Calic brings together a carefully selected network of specialists who understand the unique demands of public sector finance.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We work alongside departments and arms-length bodies to strengthen financial capability, navigate complex HM Treasury processes, and deliver transformation that endures beyond our engagement.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Approach */}
    <section className="section-padding section-alt">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="mb-14 text-3xl font-bold md:text-4xl">Our Approach</h2>
        </ScrollReveal>
        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 0.1}>
              <div className="relative pl-16">
                <span className="absolute left-0 top-0 text-4xl font-bold text-primary/30">{s.num}</span>
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">Our Values</h2>
        </ScrollReveal>
        <div className="flex flex-wrap gap-4">
          {values.map((v, i) => (
            <ScrollReveal key={v} delay={i * 0.08}>
              <span className="inline-block rounded-md border border-border px-8 py-4 text-sm font-semibold tracking-wide">
                {v}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default About;
