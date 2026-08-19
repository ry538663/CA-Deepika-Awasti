import { Link } from "react-router-dom";
import { ArrowRight, Calculator, Landmark, Building2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrustBar } from "@/components/TrustBar";

export function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-warmwhite overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-navy/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-navy tracking-tight"
              {...fadeInUp}
            >
              Simplifying Taxation & Compliance for Individuals, Startups & MSMEs
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Professional Integrity | Transparent Engagement | Confidential Handling
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button asChild size="lg" className="bg-navy hover:bg-navy-secondary text-white px-8 h-12 w-full sm:w-auto">
                <Link to="/contact">Get a Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-navy text-navy hover:bg-navy/5 px-8 h-12 w-full sm:w-auto">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Services Preview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Comprehensive Financial Solutions</h2>
            <p className="text-muted-foreground text-lg">
              Tailored taxation, compliance, and regulatory documentation services for your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-navy mb-4">
                  <Calculator size={24} />
                </div>
                <CardTitle className="text-xl">Taxation & Regulatory Compliance</CardTitle>
                <CardDescription className="text-base mt-2">
                  Comprehensive handling of Individual ITR, Business Taxation, GST, and TDS.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/services" className="inline-flex items-center text-gold font-medium hover:text-gold/80 group">
                  Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-navy mb-4">
                  <Landmark size={24} />
                </div>
                <CardTitle className="text-xl">Banking & Financial Documentation</CardTitle>
                <CardDescription className="text-base mt-2">
                  Expert preparation of Project Reports, CMA Data, and Loan Proposals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/services" className="inline-flex items-center text-gold font-medium hover:text-gold/80 group">
                  Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-navy mb-4">
                  <Building2 size={24} />
                </div>
                <CardTitle className="text-xl">Business Registration & Structuring</CardTitle>
                <CardDescription className="text-base mt-2">
                  Streamlined MSME, FSSAI, IEC, and Company Incorporation services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/services" className="inline-flex items-center text-gold font-medium hover:text-gold/80 group">
                  Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition Banner */}
      <section className="bg-navy py-16 md:py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium leading-relaxed">
            "Process-driven and review-oriented methodology — ensuring accuracy, completeness, and regulatory adherence."
          </h2>
        </div>
      </section>

      {/* The CA Couple Section */}
      <section className="py-20 md:py-28 bg-warmwhite">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-gold/20 px-3 py-1 text-sm font-medium text-gold mb-2">
                Knowledge Initiative
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">The CA Couple — Let's Grow Your Finances Together</h2>
              <p className="text-lg text-muted-foreground">
                Alongside our professional practice, we operate a financial awareness and knowledge-sharing platform dedicated to simplifying taxation and compliance concepts for everyone.
              </p>
              <ul className="space-y-3">
                {["Promote financial literacy", "Simplify taxation concepts", "Educate entrepreneurs"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-navy-secondary">
                    <CheckCircle2 size={20} className="text-gold" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button asChild size="lg" className="bg-[#FF0000] hover:bg-[#CC0000] text-white">
                  <Link to="/ca-couple">Visit Our YouTube Channel</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-navy/5 rounded-2xl border-4 border-white shadow-xl overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Placeholder for video thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/80 to-transparent mix-blend-multiply"></div>
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80" alt="Financial Planning" className="w-full h-full object-cover mix-blend-overlay" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gold/20 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-navy/10 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
