import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  const footerData = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Career", path: "/career" },
      { name: "Blog", path: "/blog" },
      { name: "YT Featured Video", path: "/youtube" },
      { name: "Contact Us", path: "/contact" },
    ],
    policies: [
      { name: "Privacy Policies", path: "/privacy" },
      { name: "Terms of Use", path: "/terms" },
      { name: "Secure Shopping", path: "/secure" },
      { name: "Copyright Policy", path: "/copyright" },
    ],
    help: [
      { name: "Payment", path: "/payment" },
      { name: "Shipping", path: "/shipping" },
      { name: "Return", path: "/return" },
      { name: "FAQ", path: "/faq" },
    ],
    misc: [
      { name: "Affiliate", path: "/affiliate" },
      { name: "Sitemap", path: "/sitemap" },
    ],
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column */}
        <FooterColumn title="Company" links={footerData.company} />
        <FooterColumn title="Policies" links={footerData.policies} />
        <FooterColumn title="Help" links={footerData.help} />
        <FooterColumn title="Misc" links={footerData.misc} />

        {/* App Section */}
        <div className="footer-column">
          <h3>Download Our App</h3>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="playstore"
          />
        </div>
      </div>

      {/* Social Icons */}
      <div className="social-icons">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-x-twitter"></i>
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-pinterest"></i>
        <i className="fab fa-youtube"></i>
        <i className="fab fa-instagram"></i>
      </div>

      {/* Bottom */}
      <p className="copyright">
        Copyright © {year} BookStore. All Rights Reserved
      </p>

      {/* Scroll to top */}
      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => {
  return (
    <div className="footer-column">
      <h3>{title}</h3>
      {links.map((link, index) => (
        <Link key={index} to={link.path}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Footer;