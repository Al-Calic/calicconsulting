import {
  RefreshCw, FileText, Briefcase, ShieldCheck, BarChart3, Compass,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: RefreshCw,
    title: "Finance Transformation",
    desc: "We help government finance functions modernise — from operating model design and process re-engineering to systems implementation and team capability building. Whether you're responding to spending review pressures or preparing for machinery of government changes, we bring practical expertise to complex transformation.",
    items: ["Operating model design and implementation", "Process mapping and improvement", "Finance capability assessments", "Change management and stakeholder engagement", "Post-implementation review and benefits realisation", "AI enablement"],
  },
  {
    icon: FileText,
    title: "Annual Accounts & Financial Reporting",
    desc: "We provide hands-on support for the production of annual reports and accounts, working alongside your finance team to ensure compliance with FReM, IFRS standards, and NAO expectations.",
    items: ["Annual report and accounts preparation", "IFRS technical accounting guidance", "Audit liaison and query resolution", "Consolidation and group reporting", "Dry-run reviews and quality assurance", "Accounting policy development"],
  },
  {
    icon: Briefcase,
    title: "Business Case Development",
    desc: "Robust, evidence-based business cases that satisfy HM Treasury scrutiny. We work across all stages of the Green Book five-case model, from strategic outline cases through to full business cases and post-implementation reviews.",
    items: ["Strategic Outline Cases (SOC)", "Outline Business Cases (OBC)", "Full Business Cases (FBC)", "Options appraisal and cost-benefit analysis", "Post-implementation reviews", "HMT and departmental approval support"],
  },
  {
    icon: ShieldCheck,
    title: "Subsidy Control Assessments",
    desc: "Independent, rigorous assessments under the Subsidy Control Act 2022. We help departments and public authorities ensure their funding decisions are compliant, defensible, and properly documented.",
    items: ["Subsidy control compliance assessments", "Subsidy scheme design and review", "Transparency and reporting obligations", "Legal framework navigation", "Training and awareness for programme teams"],
  },
  {
    icon: BarChart3,
    title: "Financial Modelling",
    desc: "Bespoke models built to government standards — whether for spending review submissions, programme appraisals, grant scheme administration, or investment decisions. Clear, auditable, and designed for handover.",
    items: ["Spending review and budgeting models", "Programme and project appraisal models", "Grant administration financial frameworks", "Scenario analysis and sensitivity testing", "Model audit and quality assurance", "Knowledge transfer and documentation"],
  },
  {
    icon: Compass,
    title: "Strategic Advisory",
    desc: "Senior counsel on the challenges facing government finance leaders — from navigating Managing Public Money and delegated authority frameworks to advising on organisational design and cross-government coordination.",
    items: ["Managing Public Money guidance and compliance", "Delegated authority and financial control frameworks", "Finance leadership coaching and mentoring", "Organisational design for finance functions", "Cross-departmental coordination and governance"],
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
            Specialist finance consulting across the full range of central government needs.
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
