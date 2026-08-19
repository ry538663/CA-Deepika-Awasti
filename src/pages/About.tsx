import { CheckCircle2 } from "lucide-react";
import { TrustBar } from "@/components/TrustBar";

export function About() {
  const values = [
    "Professional Integrity",
    "Transparent Engagement",
    "Systematic Documentation",
    "Confidential Handling"
  ];

  return (
    <div className="pt-24 min-h-screen bg-warmwhite">
      {/* Firm Header */}
      <section className="py-16 md:py-24 bg-navy text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About The Firm</h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Income Gain Solutions is established with the objective of simplifying taxation and compliance processes for individuals, startups, MSMEs, and business entities.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {values.map((value, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <CheckCircle2 size={16} className="text-gold" />
                <span className="text-sm font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            {/* Deepika */}
            <div className="flex flex-col">
              <div className="aspect-[4/5] bg-warmwhite rounded-2xl mb-8 overflow-hidden relative">
                {/* Portrait Placeholder */}
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" alt="CA Deepika Awasthi" className="w-full h-full object-cover object-top" />
              </div>
              <h2 className="text-3xl font-bold text-navy mb-2">CA Deepika Awasthi</h2>
              <p className="text-gold font-medium mb-6">Chartered Accountant | Proprietor</p>
              <p className="text-muted-foreground mb-6">
                She oversees professional review, compliance supervision, and institutional assignments. Her leadership drives the firm's commitment to precision and regulatory adherence.
              </p>
              <h4 className="font-semibold text-navy mb-3">Core Expertise:</h4>
              <ul className="space-y-2">
                {["Income Tax Compliance & Advisory", "GST & Statutory Compliance", "Loan Project Reports & Financial Projections", "Capital Gain & Property Taxation", "TDS Compliance & Regulatory Documentation", "Business Registrations & Structuring"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-navy-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Satyam */}
            <div className="flex flex-col">
              <div className="aspect-[4/5] bg-warmwhite rounded-2xl mb-8 overflow-hidden relative">
                {/* Portrait Placeholder */}
                <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80" alt="CA Satyam Gupta" className="w-full h-full object-cover object-top" />
              </div>
              <h2 className="text-3xl font-bold text-navy mb-2">CA Satyam Gupta</h2>
              <p className="text-gold font-medium mb-6">Chartered Accountant | Financial Associate</p>
              <p className="text-muted-foreground mb-6">
                He supports analytical review, financial structuring, and documentation validation, ensuring robust financial insights and structured reporting.
              </p>
              <h4 className="font-semibold text-navy mb-3">Qualifications & Expertise:</h4>
              <ul className="space-y-2">
                {["Certificate Course on Concurrent Audit of Banks (ICAI, 2020)", "Certificate Course on Corporate Social Responsibility (ICAI)", "Financial Analysis & Risk Assessment", "Loan Documentation & CMA Preparation", "Regulatory Compliance Advisory & Strategic Review"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-navy-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-warmwhite border-t border-border/50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-navy mb-12">Our Work Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border/80 -translate-y-1/2 z-0" />
            
            {[
              { step: "01", title: "Initial Assessment", desc: "Understanding specific client needs and compliance status." },
              { step: "02", title: "Data Structuring", desc: "Organizing financial data systematically for processing." },
              { step: "03", title: "Analytical Review", desc: "Process-driven verification to ensure complete accuracy." },
              { step: "04", title: "Final Compliance", desc: "Timely submission and delivery of regulatory documentation." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-border shadow-sm relative z-10 text-center">
                <div className="w-10 h-10 rounded-full bg-navy text-gold font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Trust Bar below Methodology */}
      <div className="py-8 bg-white border-y border-border/50">
         <TrustBar />
      </div>
    </div>
  );
}
