import { User } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";

const team = [
  {
    name: "Altaf Daya",
    role: "Director",
    bio: "Al is a chartered accountant and the founder of Calic Consulting. With a career spanning KPMG, senior finance roles in the energy sector, and Accenture's M&A advisory practice, Al brings a rare combination of technical depth and practical delivery experience to every engagement. He has spent over a decade working with central government departments on finance transformation, annual accounts, business case development, and HM Treasury processes. Al is passionate about delivering genuine value — not just reports — and ensuring that every engagement leaves clients stronger and more capable.",
  },
  {
    name: "Bidesh Sarkar CBE",
    role: "Strategic Partner",
    bio: "Bidesh is a former Chief Finance Officer of the Department for Business and Trade (DBT), bringing decades of senior leadership experience at the heart of central government. Awarded a CBE for his contribution to public service, Bidesh provides strategic counsel to Calic's clients on the most complex finance and governance challenges. His first-hand understanding of HM Treasury processes, departmental dynamics, and the demands facing government CFOs makes him an invaluable partner to the organisations we serve.",
  },
];

const Team = () => (
  <PageLayout>
    <section className="section-padding bg-charcoal">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Team</p>
          <h1 className="max-w-2xl text-4xl font-bold text-charcoal-foreground md:text-5xl">Our Team</h1>
          <p className="mt-4 max-w-xl text-charcoal-foreground/70">
            Senior professionals with deep expertise in government finance.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2">
          {team.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="rounded-lg border border-border bg-card p-8">
                {/* Headshot placeholder */}
                <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-secondary">
                  <User className="text-muted-foreground" size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold">{t.name}</h3>
                <p className="mb-4 text-sm font-semibold text-primary">{t.role}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.bio}</p>
                {/* Accreditation badge placeholder */}
                <div className="mt-6 inline-block rounded border border-border px-3 py-1 text-xs text-muted-foreground">
                  Professional accreditations
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Team;
