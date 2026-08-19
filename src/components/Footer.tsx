import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Video, Camera, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <Link to="/" className="inline-block mb-6 bg-white/95 p-2 rounded-lg">
              <img src="/logo..png" alt="Income Gain Solutions" className="h-14 w-auto" />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              Simplifying taxation and compliance processes for individuals, startups, MSMEs, and business entities with professional integrity.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Video size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Camera size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/80 hover:text-gold transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-gold transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-gold transition-colors text-sm">Services</Link></li>
              <li><Link to="/ca-couple" className="text-white/80 hover:text-gold transition-colors text-sm">The CA Couple</Link></li>
              <li><Link to="/resources" className="text-white/80 hover:text-gold transition-colors text-sm">Resources</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-gold transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-white/80 text-sm">Taxation & Regulatory</li>
              <li className="text-white/80 text-sm">Banking Documentation</li>
              <li className="text-white/80 text-sm">Business Registration</li>
              <li className="text-white/80 text-sm">GST Compliance</li>
              <li className="text-white/80 text-sm">Project Reports</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gold shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">123 Financial District, New Delhi, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gold shrink-0" />
                <span className="text-white/80 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gold shrink-0" />
                <span className="text-white/80 text-sm">contact@incomegainsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2026 Income Gain Solutions. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-white/60 hover:text-white text-sm">Privacy Policy</Link>
            <Link to="#" className="text-white/60 hover:text-white text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
