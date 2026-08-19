import { Calculator, Landmark, Building2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Services() {
  const services = [
    {
      title: "Taxation & Regulatory Compliance",
      icon: <Calculator className="w-8 h-8 text-gold" />,
      items: [
        "Individual Income Tax Returns",
        "Business & Presumptive Taxation (44AD/44ADA)",
        "Company & Trust Returns",
        "Capital Gain Computation",
        "Share Market (F&O / Intraday) Compliance",
        "TDS Returns & Form 26QB",
        "GST Registration & Compliance"
      ]
    },
    {
      title: "Banking & Financial Documentation",
      icon: <Landmark className="w-8 h-8 text-gold" />,
      items: [
        "Project Reports for Term Loan / CC Limit",
        "CMA Data Preparation",
        "Projected & Estimated Financial Statements",
        "Loan Proposal Financial Documentation",
        "Capital Gain Working for Loan Processing",
        "Financial Certifications"
      ],
      note: "We ensure that all financial documents are prepared with clarity, realistic assumptions, and analytical justification suitable for institutional review."
    },
    {
      title: "Business Registration & Structuring",
      icon: <Building2 className="w-8 h-8 text-gold" />,
      items: [
        "MSME Registration",
        "Labour Registration",
        "FSSAI Registration",
        "Import Export Code (IEC)",
        "PAN / TAN Services",
        "Partnership Firm Registration",
        "LLP Incorporation",
        "Company Incorporation",
        "Trademark Application & Digital Signature"
      ]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-warmwhite pb-20">
      {/* Header */}
      <section className="py-16 md:py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Scope of Professional Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive financial and compliance solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 max-w-5xl">
        <div className="space-y-12">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-border p-8 md:p-12 relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-[100px] -z-10 group-hover:bg-gold/10 transition-colors" />
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-navy mb-6">{service.title}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                    {service.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2">
                        <ChevronRight size={18} className="text-gold shrink-0 mt-0.5" />
                        <span className="text-navy-secondary text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  {service.note && (
                    <div className="mt-8 p-4 bg-navy/5 border-l-4 border-navy rounded-r-lg text-sm text-navy-secondary font-medium italic">
                      {service.note}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 mt-16 text-center">
        <h3 className="text-2xl font-bold text-navy mb-6">Need expert financial advisory?</h3>
        <Button asChild size="lg" className="bg-navy hover:bg-navy-secondary text-white">
          <Link to="/contact">Schedule a Consultation</Link>
        </Button>
      </section>
    </div>
  );
}
