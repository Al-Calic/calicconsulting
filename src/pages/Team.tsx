import { User } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import altafPhoto from "@/assets/altaf-photo.png";
import bideshPhoto from "@/assets/bidesh-photo.png";

const team = [
  {
    name: "Altaf Daya",
    role: "Founding Partner",
    bio: "Altaf is a Chartered Accountant and the founder of Calic Consulting. With a career spanning KPMG, senior finance roles in the energy sector, Accenture's advisory practice, and across Government, Altaf brings a rare combination of technical depth, commercial acumen, and practical delivery experience. He has spent over a decade working with complex organisations on transformation, operational improvement, and capability building - with particular depth in finance, programme delivery, and business case development. Altaf is passionate about delivering genuine impact and ensuring that every engagement leaves clients stronger and more capable.",
    photo: altafPhoto,
  },
  {
    name: "Bidesh Sarkar CBE",
    role: "Strategic Partner",
    bio: "Bidesh brings more than 20 years of C-suite leadership experience spanning Government, and the public, private, and non-profit sectors, most recently as the Chief Financial Officer at the Department for Business & Trade. He is an experienced leader of finance, and a range of operational and corporate functions, and has long track record of successfully leading continuous improvement and transformative change. Drawing on his wealth of experience, Bidesh provides strategic counsel to those we serve.",
    photo: bideshPhoto,
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
            Senior professionals with deep expertise across transformation, operations, and organisational improvement.
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
                {t.photo ? (
                  <img src={t.photo} alt={t.name} className="mb-6 h-28 w-28 rounded-full object-cover object-top" />
                ) : (
                  <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-secondary">
                    <User className="text-muted-foreground" size={40} strokeWidth={1.5} />
                  </div>
                )}
                <h3 className="text-xl font-bold">{t.name}</h3>
                <p className="mb-4 text-sm font-semibold text-primary">{t.role}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.bio}</p>
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
