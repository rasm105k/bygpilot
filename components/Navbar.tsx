import { siteConfig } from "@/lib/config";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="nav-logo">{siteConfig.name}</a>
        <div className="nav-links">
          {siteConfig.navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-nav-cta">{siteConfig.primaryCta}</a>
        </div>
      </div>
    </nav>
  );
}
