import { Link } from "react-router-dom";
import {
  Calculator,
  Landmark,
  Building2,
  ChevronRight,
  FileText,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { CTABanner } from "@/components/common/CTABanner";
import { servicesData } from "@/data/servicesData";

export function Services() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Calculator":
        return <Calculator className="w-8 h-8 text-gold" />;
      case "Landmark":
        return <Landmark className="w-8 h-8 text-gold" />;
      case "Building2":
        return <Building2 className="w-8 h-8 text-gold" />;
      default:
        return <Calculator className="w-8 h-8 text-gold" />;
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-warmwhite pb-16">
      <SEO
        title="Scope of Professional Services"
        description="Comprehensive taxation, GST compliance, bank loan project reports, CMA data, and business registration services by Income Gain Solutions & Co."
      />

      {/* Header */}
      <section className="py-16 md:py-20 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-semibold uppercase tracking-wider mb-4 border border-gold/25">
            <FileText size={14} /> Comprehensive Practice Scope
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4 tracking-tight">
            Scope of Professional Services
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Structured, transparent, and timely financial solutions tailored for individuals, growing enterprises, and established institutions.
          </p>

          <p className="text-xs sm:text-sm text-muted-foreground/80 mt-4 font-medium">
            Click any service to open the related official government portal.
          </p>

          {/* Quick jump anchor navigation pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {servicesData.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm text-xs sm:text-sm font-semibold text-navy hover:border-gold hover:text-gold-dark transition-all"
              >
                <span>{cat.category}</span>
                <ChevronRight size={14} className="text-gold-dark" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="space-y-12 md:space-y-16">
          {servicesData.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="scroll-mt-28 bg-white rounded-3xl shadow-sm border border-border p-8 md:p-12 relative overflow-hidden group hover:shadow-md transition-all"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-gold/5 rounded-bl-[100px] -z-0 group-hover:bg-gold/10 transition-colors pointer-events-none" />

              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-navy flex items-center justify-center shrink-0 shadow-sm">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div className="flex-1 w-full">
                  <div className="mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-1">
                      <a
                        href={`#${category.id}`}
                        className="hover:text-gold-dark transition-colors inline-flex items-center gap-2"
                      >
                        <span>{category.category}</span>
                      </a>
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-gold-dark">
                      {category.tagline}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Click any service to open the related official government portal.
                    </p>
                  </div>

                  {/* Service items list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-8">
                    {category.items.map((item, idx) => {
                      if (item.officialUrl) {
                        return (
                          <a
                            key={idx}
                            href={item.officialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${item.title} (opens official website in a new tab)`}
                            className="group/item flex items-start gap-2.5 p-2.5 -mx-2 rounded-xl transition-all duration-200 hover:bg-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-pointer"
                          >
                            <ChevronRight
                              size={18}
                              className="text-gold-dark shrink-0 mt-0.5 transition-transform duration-200 group-hover/item:translate-x-1"
                            />
                            <span className="text-navy-secondary text-sm font-medium leading-snug transition-colors group-hover/item:text-gold-dark group-hover/item:underline flex-1">
                              {item.title}
                            </span>
                            <ExternalLink
                              size={14}
                              className="text-muted-foreground/60 shrink-0 mt-0.5 transition-colors group-hover/item:text-gold-dark"
                              aria-hidden="true"
                            />
                          </a>
                        );
                      }

                      // Fallback for items with officialUrl = null -> link to /contact?service=<encoded title>
                      return (
                        <Link
                          key={idx}
                          to={`/contact?service=${encodeURIComponent(item.title)}`}
                          aria-label={`${item.title} (contact our team for consultation)`}
                          className="group/item flex items-start gap-2.5 p-2.5 -mx-2 rounded-xl transition-all duration-200 hover:bg-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-pointer"
                        >
                          <ChevronRight
                            size={18}
                            className="text-gold-dark shrink-0 mt-0.5 transition-transform duration-200 group-hover/item:translate-x-1"
                          />
                          <span className="text-navy-secondary text-sm font-medium leading-snug transition-colors group-hover/item:text-gold-dark group-hover/item:underline flex-1">
                            {item.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>

                  {category.note && (
                    <div className="mt-8 p-5 bg-warmwhite rounded-2xl border-l-4 border-navy text-xs sm:text-sm text-navy-secondary leading-relaxed flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-gold-dark shrink-0 mt-0.5" />
                      <span>{category.note}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <CTABanner
        heading="Need Expert Assistance With Your Taxes or Loan Documentation?"
        subtext="Schedule a direct consultation with our Chartered Accountants to review your case."
        buttonText="Schedule Consultation"
        buttonLink="/contact"
      />
    </div>
  );
}
