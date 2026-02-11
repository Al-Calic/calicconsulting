import { Link } from "react-router-dom";
import calicLogo from "@/assets/calic-logo.png";

const Footer = () => (
  <footer className="bg-charcoal text-charcoal-foreground/80">
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-12 md:grid-cols-3">
        {/* Col 1 */}
        <div>
          <img src={calicLogo} alt="Calic Consulting" className="mb-4 h-20 w-auto" />
          <p className="text-sm leading-relaxed text-charcoal-foreground/60">
            Specialist finance consulting for UK central government. Precision, expertise, and lasting public value.
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-charcoal-foreground/50">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/case-studies", label: "Case Studies" },
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

        {/* Col 3 */}
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-charcoal-foreground/50">Contact</h4>
          <p className="text-sm">altaf@calicconsulting.co.uk</p>
          <p className="mt-2 text-sm text-charcoal-foreground/50">LinkedIn — coming soon</p>
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
