import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Award,
  Clock,
  ShieldCheck,
  FileCheck2,
  Scale,
  LineChart,
  Target,
  Compass,
  ArrowRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { TrustBar } from "@/components/TrustBar";
import { SEO } from "@/components/SEO";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StatCard } from "@/components/common/StatCard";
import { FeatureCard } from "@/components/common/FeatureCard";
import { CTABanner } from "@/components/common/CTABanner";
import { YouTubeIcon } from "@/components/common/Icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";

/**
 * =========================================================================
 * CONFIGURABLE STATS STRIP VALUES
 * Edit the stats displayed in the dark navy strip on the About page below:
 * =========================================================================
 */
const aboutStatsConfig = [
  {
    value: 10,
    suffix: "+",
    label: "Years of Experience",
    displayPlaceholder: "[X]+",
  },
  {
    value: 500,
    suffix: "+",
    label: "Clients Served",
    displayPlaceholder: "[X]+",
  },
  {
    value: 2500,
    suffix: "+",
    label: "Filings Completed",
    displayPlaceholder: "[X]+",
  },
  {
    value: 1630,
    suffix: "+",
    label: "YouTube Subscribers",
    displayPlaceholder: "[X]+",
  },
];

export function About() {
  const values = [
    "Professional Integrity",
    "Transparent Engagement",
    "Systematic Documentation",
    "Confidential Handling",
  ];

  const methodologySteps = [
    {
      step: "01",
      title: "Initial Assessment",
      desc: "Understanding specific client needs, historical data, and current compliance status.",
    },
    {
      step: "02",
      title: "Data Structuring",
      desc: "Organizing financial data and supporting schedules systematically for processing.",
    },
    {
      step: "03",
      title: "Analytical Review",
      desc: "Multi-tier verification to ensure statutory compliance and mathematical precision.",
    },
    {
      step: "04",
      title: "Final Compliance",
      desc: "Punctual e-filing, verification receipts, and structured delivery of documentation.",
    },
  ];

  const whyChooseUsItems = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Professionally Qualified Leadership",
      desc: "Direct guidance by qualified Chartered Accountants with extensive regulatory, tax, and audit experience.",
    },
    {
      icon: <FileCheck2 className="w-6 h-6" />,
      title: "Structured Documentation Methodology",
      desc: "Process-driven documentation frameworks ensuring complete transparency and institutional readiness.",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Compliance-Focused Approach",
      desc: "Proactive adherence to changing statutory guidelines, minimizing scrutiny and penalties.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely Delivery of Assignments",
      desc: "Strict adherence to filing deadlines and prompt execution of all financial certifications.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Confidential & Ethical Practices",
      desc: "Uncompromising data security, professional confidentiality, and ethical client engagement.",
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Analytical & Practical Financial Structuring",
      desc: "Tailored financial modeling, bank-grade CMA data, and pragmatic tax structuring.",
    },
  ];

  const caCoupleBullets = [
    "Promote financial literacy",
    "Simplify taxation & compliance concepts",
    "Educate entrepreneurs about regulatory responsibilities",
    "Encourage ethical and structured financial practices",
  ];

  const commitments = [
    "Professional integrity",
    "Confidential handling of information",
    "Compliance with applicable laws and regulations",
    "Timely execution and structured review",
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5 },
  };

  const { deepika, satyam } = siteConfig.team;

  return (
    <div className="pt-24 min-h-screen bg-warmwhite flex flex-col">
      <SEO
        title="About Us"
        description="Learn about Income Gain Solutions & Co., founded by CA Deepika Awasthi and CA Satyam Gupta. Dedicated to transparent, ethical, and timely taxation and compliance services."
      />

      {/* 1. HERO SECTION (Existing, preserved) */}
      <section className="py-16 md:py-24 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            About The Firm
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Income Gain Solutions is established with the objective of simplifying taxation and compliance processes for individuals, startups, MSMEs, and business entities.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-10">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm font-medium backdrop-blur-sm"
              >
                <CheckCircle2 size={16} className="text-gold" />
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. OUR STORY SECTION (New: After Hero, before profile cards) */}
      <motion.section
        className="py-16 md:py-24 bg-white border-b border-border/50"
        {...fadeInUp}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
            {/* Left: Heading + Paragraph */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-semibold uppercase tracking-wider border border-gold/25">
                <Sparkles size={14} /> Our Journey & Vision
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
                Our Story
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Income Gain Solutions was founded by CA Deepika Awasthi with a simple belief: taxation and compliance should not be a burden for business owners. What began as a practice serving individuals and small businesses has grown into a full-service advisory firm supporting startups, MSMEs and institutions with structured, transparent and timely financial services.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="border-navy text-navy hover:bg-navy/5 font-semibold"
                >
                  <Link to="/contact">Discuss Your Requirements</Link>
                </Button>
              </div>
            </div>

            {/* Right: Highlights Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-warmwhite border border-border/80 p-7 sm:p-9 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-[80px] pointer-events-none" />
                <h3 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                  Key Highlights
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-navy text-gold flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                      01
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy text-base">
                        Entrepreneur-First Mindset
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                        Simplifying complex regulatory requirements into practical, actionable steps.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-navy text-gold flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                      02
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy text-base">
                        End-to-End Service Spectrum
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                        From company incorporation and GST to multi-crore bank project reports and tax litigation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-navy text-gold flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                      03
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy text-base">
                        Analytical & Bank-Grade Precision
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                        High-accuracy documentation trusted by leading scheduled banks and public institutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. TEAM SECTION (Existing: Profile Cards with Improvements) */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <SectionHeading
            badge="Leadership & Expertise"
            title="Partners in Your Financial Success"
            description="Our practice is led by qualified Chartered Accountants committed to ethical standards, analytical depth, and regulatory rigor."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Deepika Profile Card */}
            <div className="flex flex-col bg-warmwhite/40 p-6 sm:p-8 rounded-3xl border border-border/70 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/5] bg-warmwhite rounded-2xl mb-6 overflow-hidden relative border border-border/50">
                <img
                  src={deepika.image}
                  alt={deepika.name}
                  loading="lazy"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-grow">
                <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-1">
                  {deepika.name}
                </h2>
                <p className="text-gold-dark font-semibold text-sm sm:text-base mb-2">
                  {deepika.designation}
                </p>

                {/* ICAI Membership No. (Hides if empty) */}
                {deepika.membershipNo && deepika.membershipNo.trim() !== "" && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/5 border border-navy/10 text-xs font-semibold text-navy mb-4 self-start">
                    <Award size={14} className="text-gold" />
                    <span>ICAI Membership No. {deepika.membershipNo}</span>
                  </div>
                )}

                <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
                  {deepika.bio}
                </p>

                {/* Consistent Expertise Block */}
                <div className="mt-auto pt-4 border-t border-border/60">
                  <h3 className="font-bold text-navy text-sm uppercase tracking-wider mb-3">
                    {deepika.expertiseHeading}:
                  </h3>
                  <ul className="space-y-2">
                    {deepika.expertise.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-navy-secondary"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Satyam Profile Card */}
            <div className="flex flex-col bg-warmwhite/40 p-6 sm:p-8 rounded-3xl border border-border/70 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/5] bg-warmwhite rounded-2xl mb-6 overflow-hidden relative border border-border/50">
                <img
                  src={satyam.image}
                  alt={satyam.name}
                  loading="lazy"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-grow">
                <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-1">
                  {satyam.name}
                </h2>
                <p className="text-gold-dark font-semibold text-sm sm:text-base mb-2">
                  {satyam.designation}
                </p>

                {/* ICAI Membership No. (Hides if empty) */}
                {satyam.membershipNo && satyam.membershipNo.trim() !== "" && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/5 border border-navy/10 text-xs font-semibold text-navy mb-4 self-start">
                    <Award size={14} className="text-gold" />
                    <span>ICAI Membership No. {satyam.membershipNo}</span>
                  </div>
                )}

                <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
                  {satyam.bio}
                </p>

                {/* Consistent Expertise Block */}
                <div className="mt-auto pt-4 border-t border-border/60">
                  <h3 className="font-bold text-navy text-sm uppercase tracking-wider mb-3">
                    {satyam.expertiseHeading}:
                  </h3>
                  <ul className="space-y-2">
                    {satyam.expertise.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-navy-secondary"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION (New: After profile cards) */}
      <motion.section
        className="py-16 md:py-20 bg-warmwhite border-t border-border/50"
        {...fadeInUp}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="rounded-3xl bg-white p-8 md:p-10 border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="w-14 h-14 rounded-2xl bg-navy text-gold flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-sm">
                <Target size={28} />
              </div>
              <h2 className="text-2xl font-bold text-navy mb-3">Our Mission</h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                "To simplify taxation and compliance through accurate, ethical and timely professional services."
              </p>
            </div>

            {/* Vision Card */}
            <div className="rounded-3xl bg-white p-8 md:p-10 border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="w-14 h-14 rounded-2xl bg-navy text-gold flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-sm">
                <Compass size={28} />
              </div>
              <h2 className="text-2xl font-bold text-navy mb-3">Our Vision</h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                "To be a trusted financial partner for every entrepreneur and institution we serve."
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. WHY CHOOSE US (New: Grid of 6 cards with lucide icons) */}
      <motion.section
        className="py-20 md:py-24 bg-white border-t border-border/50"
        {...fadeInUp}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <SectionHeading
            badge="Why Income Gain Solutions"
            title="Why Choose Us"
            description="Our foundation is built on uncompromising professional ethics, deep statutory expertise, and structured delivery."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseUsItems.map((item, idx) => (
              <FeatureCard
                key={idx}
                icon={item.icon}
                title={item.title}
                description={item.desc}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6. STATS STRIP (New: Dark navy band with gold numbers, animated count-up on scroll) */}
      <section className="py-16 md:py-20 bg-navy text-white relative overflow-hidden border-y border-white/10">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-gold/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-navy-secondary blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {aboutStatsConfig.map((stat, idx) => (
              <StatCard
                key={idx}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                displayPlaceholder={stat.displayPlaceholder}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR WORK METHODOLOGY (Existing: with desktop flow connector lines) */}
      <section className="py-20 md:py-24 bg-warmwhite">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl text-center">
          <SectionHeading
            badge="Process-Driven Workflow"
            title="Our Work Methodology"
            description="A structured 4-step execution framework ensuring regulatory adherence, data confidentiality, and timely filing."
            className="mb-16"
          />

          <div className="relative">
            {/* Desktop connecting flow line */}
            <div
              className="hidden md:block absolute top-12 left-14 right-14 h-0.5 bg-gradient-to-r from-gold/20 via-gold/60 to-gold/20 z-0 pointer-events-none"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              {methodologySteps.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-navy text-gold font-bold text-base flex items-center justify-center mb-5 border-2 border-gold/40 shadow-sm group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. THE CA COUPLE TEASER (New: After methodology section) */}
      <motion.section
        className="py-20 md:py-24 bg-white border-t border-border/50"
        {...fadeInUp}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-dark border border-gold/25 uppercase tracking-wider">
                <YouTubeIcon className="w-4 h-4 text-[#FF0000]" /> Financial Literacy Initiative
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
                The CA Couple — Financial Awareness Platform
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Alongside our practice, we run 'The CA Couple', a financial awareness platform where we simplify taxation and compliance for entrepreneurs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {caCoupleBullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-warmwhite/70 border border-border/60"
                  >
                    <CheckCircle2 size={18} className="text-gold-dark shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-navy leading-snug">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#FF0000] hover:bg-[#CC0000] text-white font-semibold shadow-sm transition-all"
                >
                  <a
                    href={siteConfig.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <YouTubeIcon className="w-5 h-5" />
                    <span>Visit Our Channel</span>
                    <ExternalLink size={15} />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-navy text-navy hover:bg-navy/5 font-semibold"
                >
                  <Link to="/ca-couple" className="inline-flex items-center gap-2">
                    <span>Learn About The CA Couple</span>
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Card / Video Preview Visual */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-navy text-white p-7 sm:p-9 shadow-xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-gold/15 blur-2xl pointer-events-none" />
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[#FF0000] mb-5">
                  <YouTubeIcon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Simplifying Finance for 1,600+ Founders
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Weekly explainers on GST updates, income tax optimization, MSME incentives, and bank loan approvals.
                </p>

                <div className="space-y-3 pt-2 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Subscribers</span>
                    <span className="font-bold text-gold">1.63K+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Educational Videos</span>
                    <span className="font-bold text-gold">380+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Community Focus</span>
                    <span className="font-bold text-gold">Startups & MSMEs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 9. OUR COMMITMENT (New: Before trusted-by marquee) */}
      <motion.section
        className="py-16 md:py-20 bg-warmwhite border-t border-border/50"
        {...fadeInUp}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <SectionHeading
            badge="Standards of Practice"
            title="Our Commitment"
            description="Our practice is anchored in uncompromising principles that protect your interests at every step."
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {commitments.map((commitment, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm hover:border-gold/50 transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-gold-dark" />
                </div>
                <span className="text-base font-semibold text-navy">
                  {commitment}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 10. TRUSTED BY MARQUEE (Existing, with config list and pause-on-hover) */}
      <div className="py-2 bg-white">
        <TrustBar />
      </div>

      {/* 11. CLOSING CTA BANNER (New: Right before the footer) */}
      <CTABanner
        heading="Have a tax, GST or compliance question?"
        subtext="Talk to our team and get clear, practical guidance."
        buttonText="Get Consultation"
        buttonLink="/contact"
      />
    </div>
  );
}
