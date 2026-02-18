import { useState, FormEvent } from "react";
import { Mail, Linkedin } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";

const subjects = [
  "General Enquiry",
  "Transformation & Change",
  "Finance",
  "Digital & Technology",
  "People & Workforce",
  "Programme Delivery",
  "Commercial",
  "Other",
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <section className="section-padding bg-charcoal">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Contact</p>
            <h1 className="max-w-2xl text-4xl font-bold text-charcoal-foreground md:text-5xl">Get in Touch</h1>
            <p className="mt-4 max-w-xl text-charcoal-foreground/70">
              Whether you have a specific requirement or would like an informal conversation about how we might help, we'd be pleased to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2">
            {/* Form */}
            <ScrollReveal>
              {submitted ? (
                <div className="flex h-full items-center justify-center rounded-lg border border-border bg-secondary p-12 text-center">
                  <div>
                    <h3 className="text-xl font-semibold">Thank you</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      We'll be in touch shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Name</label>
                    <input required className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none ring-ring focus:ring-2" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Email</label>
                    <input required type="email" className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none ring-ring focus:ring-2" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Organisation</label>
                    <input className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none ring-ring focus:ring-2" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Subject</label>
                    <select required className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none ring-ring focus:ring-2">
                      <option value="">Select a subject</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Message</label>
                    <textarea required rows={5} className="w-full resize-none rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none ring-ring focus:ring-2" />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
                  <div className="space-y-4">
                    <a href="mailto:sarah@calicconsulting.co.uk" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary">
                      <Mail size={18} className="text-primary" />
                      sarah@calicconsulting.co.uk
                    </a>
                    <a href="https://www.linkedin.com/in/altaf-daya-Calic" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary">
                      <Linkedin size={18} className="text-primary" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-secondary p-6">
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Calic Consulting Limited is a company registered in England and Wales. Registered company details available on request.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
