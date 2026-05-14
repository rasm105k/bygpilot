import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-brand">{siteConfig.name}</div>
          <div className="footer-tagline">{siteConfig.tagline}</div>
        </div>
        <div className="footer-links">
          <a href="#how-it-works">Sådan virker det</a>
          <a href="#pricing">Priser</a>
          <a href="#contact">Kontakt</a>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} {siteConfig.name}
        </div>
      </div>
    </footer>
  );
}
