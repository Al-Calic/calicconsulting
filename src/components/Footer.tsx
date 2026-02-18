import { Link } from "react-router-dom";
import calicLogo from "@/assets/calic-logo.png";

const Footer = () => (
  <footer className="bg-charcoal text-charcoal-foreground/80">
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-12 md:grid-cols-3">
        <div>
          <img src={calicLogo} alt="Calic Consulting" className="mb-4 h-20 w-auto" />
          <p className="text-sm leading-relaxed text-charcoal-foreground/60">
            Transformation consulting for complex organisations. Precision, expertise, and lasting impact.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-charcoal-foreground/50">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/experience", label: "Experience" },
              { to: "/team", label: "Team" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-charcoal-foreground/50">Contact</h4>
          <p className="text-sm">sarah@calicconsulting.co.uk</p>
          <a href="https://www.linkedin.com/in/altaf-daya-Calic" target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm transition-colors hover:text-primary">LinkedIn</a>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-charcoal-foreground/10 pt-8 text-xs text-charcoal-foreground/40 md:flex-row">
        <p>© 2025 Calic Consulting Limited. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="#" className="hover:text-primary">Privacy Policy</Link>
          <Link to="#" className="hover:text-primary">Terms</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
