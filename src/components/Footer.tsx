import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { YouTubeIcon, InstagramIcon, LinkedInIcon, FacebookIcon } from "@/components/common/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const hasAnySocial = Boolean(
    siteConfig.social.youtube ||
    siteConfig.social.instagram ||
    siteConfig.social.linkedin ||
    siteConfig.social.facebook
  );

  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-white/95 p-2 rounded-lg shadow-sm"
              aria-label="Income Gain Solutions & Co. Home"
            >
              <img
                src="/logo..png"
                alt="Income Gain Solutions & Co."
                className="h-12 w-auto object-contain"
                width={160}
                height={48}
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              {siteConfig.firm.description}
            </p>
            {/* Social Icons - Render ONLY if non-empty */}
            {hasAnySocial && (
              <div className="flex space-x-3 pt-2">
                {siteConfig.social.youtube && (
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-colors"
                    aria-label="Visit our YouTube channel"
                  >
                    <YouTubeIcon className="w-5 h-5" />
                  </a>
                )}
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                )}
                {siteConfig.social.linkedin && (
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors"
                    aria-label="Connect on LinkedIn"
                  >
                    <LinkedInIcon className="w-5 h-5" />
                  </a>
                )}
                {siteConfig.social.facebook && (
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                    aria-label="Follow us on Facebook"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-white/10 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-gold transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-gold transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/80 hover:text-gold transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/ca-couple"
                  className="text-white/80 hover:text-gold transition-colors text-sm"
                >
                  The CA Couple
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-gold transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-white/10 pb-2">
              Our Practice Areas
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services#taxation"
                  className="text-white/80 hover:text-gold transition-colors text-sm block"
                >
                  Income Tax Advisory & Filings
                </Link>
              </li>
              <li>
                <Link
                  to="/services#taxation"
                  className="text-white/80 hover:text-gold transition-colors text-sm block"
                >
                  GST Registration & Statutory Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/services#banking"
                  className="text-white/80 hover:text-gold transition-colors text-sm block"
                >
                  Bank Loan Project Reports & CMA Data
                </Link>
              </li>
              <li>
                <Link
                  to="/services#registration"
                  className="text-white/80 hover:text-gold transition-colors text-sm block"
                >
                  Business Registration (MSME, LLP, Pvt Ltd)
                </Link>
              </li>
              <li>
                <Link
                  to="/services#taxation"
                  className="text-white/80 hover:text-gold transition-colors text-sm block"
                >
                  TDS Compliance & Regulatory Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-white/10 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gold shrink-0 mt-0.5" />
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-gold transition-colors text-sm leading-relaxed"
                >
                  {siteConfig.addressLines.map((line, idx) => (
                    <span key={idx} className="block">
                      {line}
                    </span>
                  ))}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gold shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="text-white/80 hover:text-gold transition-colors text-sm"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gold shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white/80 hover:text-gold transition-colors text-sm break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-white/60 text-sm">
            © {currentYear} {siteConfig.firm.name} All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="text-white/60 hover:text-white text-sm transition-colors">
              Schedule Consultation
            </Link>
            <Link to="/about" className="text-white/60 hover:text-white text-sm transition-colors">
              About the Firm
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
