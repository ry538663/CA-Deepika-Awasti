import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "The CA Couple", path: "/ca-couple", alias: "/the-ca-couple" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string, alias?: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return (
      location.pathname === path ||
      (alias && location.pathname === alias) ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white shadow-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo linking to Home */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg p-1"
            aria-label="Income Gain Solutions & Co. Home"
          >
            <img
              src="/logo..png"
              alt="Income Gain Solutions Logo"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              width={180}
              height={64}
            />
            <img
              src="/CA .png"
              alt="ICAI Chartered Accountant Emblem"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain hidden sm:block"
              width={56}
              height={56}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.path, link.alias);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold transition-all relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded ${
                    active
                      ? "text-gold-dark"
                      : "text-foreground/80 hover:text-gold-dark"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-dark rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              variant="default"
              className="bg-navy hover:bg-navy-secondary text-white font-medium shadow-sm transition-all hover:shadow focus-visible:ring-2 focus-visible:ring-gold"
            >
              <Link to="/contact">Get Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden text-foreground p-2 rounded-lg hover:bg-navy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-border py-5 px-6 flex flex-col gap-2 animate-in slide-in-from-top-2 duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {navLinks.map((link) => {
            const active = isActive(link.path, link.alias);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-medium py-2.5 px-3 rounded-lg transition-colors flex items-center justify-between ${
                  active
                    ? "bg-gold/10 text-gold-dark font-bold"
                    : "text-foreground hover:bg-navy/5"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={active ? "page" : undefined}
              >
                <span>{link.name}</span>
                {active && (
                  <span className="w-2 h-2 rounded-full bg-gold-dark" />
                )}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-border/60">
            <Button
              asChild
              className="w-full bg-navy hover:bg-navy-secondary text-white font-semibold h-11"
            >
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Get Consultation
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
