import { Link } from "react-router-dom";
import { ArrowRight, Calculator, Landmark, Building2, CheckCircle2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrustBar } from "@/components/TrustBar";
import { SEO } from "@/components/SEO";
import { CTABanner } from "@/components/common/CTABanner";
import { YouTubeIcon } from "@/components/common/Icons";
import { siteConfig } from "@/config/siteConfig";

export function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Income Gain Solutions & Co. | Chartered Accountants"
        description="Simplifying taxation and compliance for individuals, startups, and MSMEs. Led by CA Deepika Awasthi and CA Satyam Gupta."
      />

      {/* Hero Section */}
      <section className="relative mt-[80px] sm:mt-[96px] pt-20 pb-14 md:pt-48 md:pb-24 overflow-hidden min-h-[500px] sm:min-h-[560px] md:min-h-[620px] flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover object-center scale-[1.08] sm:scale-105"
          >
            <source src="/YA_SARA_SERVICE_VIDEO_ME_DIKHE.mp4" type="video/mp4" />
          </video>
          {/* Stronger dark overlay so video stays clear and text remains readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/40 to-slate-950/70" />
        </div>

        {/* Abstract ambient glows */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-navy/10 blur-3xl z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-gold/20 blur-3xl z-0 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] sm:text-xs md:text-sm font-semibold text-white shadow-lg backdrop-blur-sm">
              Chartered Accountants • Lucknow & Pan-India
            </div>

            <motion.h1
              className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_4px_20px_rgba(15,23,42,0.7)]"
              {...fadeInUp}
            >
              Simplifying Taxation & Compliance for Individuals, Startups & MSMEs
            </motion.h1>

            <motion.p
              className="text-sm sm:text-lg md:text-xl text-slate-100 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(15,23,42,0.8)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Professional Integrity | Transparent Engagement | Confidential Handling
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-semibold px-6 sm:px-8 h-11 sm:h-12 w-full sm:w-auto shadow-lg shadow-gold/30"
              >
                <Link to="/contact">Get a Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 font-semibold px-6 sm:px-8 h-11 sm:h-12 w-full sm:w-auto bg-white/10 backdrop-blur-sm shadow-lg"
              >
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
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-semibold uppercase tracking-wider border border-gold/25">
              Practice Areas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Tailored taxation, statutory compliance, and banking documentation services designed for your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-border/70 rounded-2xl flex flex-col h-full group">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center text-navy mb-4 group-hover:bg-navy group-hover:text-gold transition-colors">
                  <Calculator size={24} />
                </div>
                <CardTitle className="text-xl font-bold text-navy">
                  Taxation & Regulatory Compliance
                </CardTitle>
                <CardDescription className="text-sm sm:text-base mt-2 leading-relaxed">
                  Comprehensive handling of Individual ITR, Business Presumptive Taxation, GST, and TDS returns.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-4">
                <Link
                  to="/services"
                  className="inline-flex items-center text-gold-dark font-semibold hover:text-navy transition-colors group-hover:translate-x-1 duration-200"
                >
                  Learn More <ArrowRight size={16} className="ml-1.5" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border/70 rounded-2xl flex flex-col h-full group">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center text-navy mb-4 group-hover:bg-navy group-hover:text-gold transition-colors">
                  <Landmark size={24} />
                </div>
                <CardTitle className="text-xl font-bold text-navy">
                  Banking & Financial Documentation
                </CardTitle>
                <CardDescription className="text-sm sm:text-base mt-2 leading-relaxed">
                  Expert preparation of Project Reports for Term Loans / CC limits, CMA Data, and Bank Proposal filings.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-4">
                <Link
                  to="/services"
                  className="inline-flex items-center text-gold-dark font-semibold hover:text-navy transition-colors group-hover:translate-x-1 duration-200"
                >
                  Learn More <ArrowRight size={16} className="ml-1.5" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border/70 rounded-2xl flex flex-col h-full group">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center text-navy mb-4 group-hover:bg-navy group-hover:text-gold transition-colors">
                  <Building2 size={24} />
                </div>
                <CardTitle className="text-xl font-bold text-navy">
                  Business Registration & Structuring
                </CardTitle>
                <CardDescription className="text-sm sm:text-base mt-2 leading-relaxed">
                  Streamlined MSME, FSSAI, IEC, Trademark, and Company / LLP Incorporation advisory.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-4">
                <Link
                  to="/services"
                  className="inline-flex items-center text-gold-dark font-semibold hover:text-navy transition-colors group-hover:translate-x-1 duration-200"
                >
                  Learn More <ArrowRight size={16} className="ml-1.5" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition Banner */}
      <section className="bg-navy py-16 md:py-20 text-white relative overflow-hidden border-y border-white/10">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed italic text-white/95">
            "Process-driven and review-oriented methodology — ensuring accuracy, completeness, and regulatory adherence."
          </blockquote>
          <div className="mt-4 text-gold font-semibold text-sm uppercase tracking-wider">
            Income Gain Solutions & Co.
          </div>
        </div>
      </section>

      {/* The CA Couple Section */}
      <section className="py-20 md:py-28 bg-warmwhite">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-dark border border-gold/25 uppercase tracking-wider">
                Financial Awareness Platform
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
                The CA Couple — Let's Grow Your Finances Together
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Alongside our professional practice, we operate a financial awareness and knowledge-sharing platform dedicated to simplifying taxation and compliance concepts for entrepreneurs and founders.
              </p>
              <ul className="space-y-3">
                {[
                  "Promote financial literacy",
                  "Simplify taxation concepts",
                  "Educate entrepreneurs about regulatory responsibilities",
                  "Encourage ethical and structured financial practices",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-navy-secondary">
                    <CheckCircle2 size={20} className="text-gold-dark shrink-0" />
                    <span className="font-medium text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#FF0000] hover:bg-[#CC0000] text-white font-semibold shadow-sm"
                >
                  <a
                    href={siteConfig.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <YouTubeIcon className="w-5 h-5" />
                    <span>Visit Our YouTube Channel</span>
                    <ExternalLink size={15} />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-navy text-navy hover:bg-navy/5 font-semibold"
                >
                  <Link to="/ca-couple">About The Initiative</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-navy/5 rounded-3xl border-4 border-white shadow-xl overflow-hidden relative group">
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch The CA Couple videos on YouTube"
                  className="absolute inset-0 flex items-center justify-center z-20 group"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FF0000] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white ml-1 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </a>
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/80 to-transparent mix-blend-multiply z-10 pointer-events-none" />
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
                  alt="Financial advisory and taxation session"
                  loading="lazy"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/20 rounded-full blur-2xl -z-10 pointer-events-none" />
              <div className="absolute -top-6 -right-6 w-36 h-36 bg-navy/10 rounded-full blur-2xl -z-10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CTABanner />
    </div>
  );
}
