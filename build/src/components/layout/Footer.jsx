import { SITE_CONFIG } from "../../data/config";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const footerQuote =
    SITE_CONFIG.footer && SITE_CONFIG.footer[0]
      ? SITE_CONFIG.footer[0]
      : {
          Quote:
            "Wake up to reality. Nothing ever goes as planned in this world.",
          author: "Madara Uchiha",
        };

  return (
    <footer className="footer">
      <div className="footer__inner container">
        {/* Footer Quote */}
        <div className="footer__quote-container">
          <p className="footer__quote">
            "{footerQuote.Quote}"
          </p>

          <span className="footer__author">
            — {footerQuote.author.toUpperCase()}
          </span>
        </div>

        {/* Copyright */}
        <p className="footer__developer">
          DESIGNED & DEVELOPED BY BINIT SINGH © {year}
        </p>
      </div>
    </footer>
  );
}

