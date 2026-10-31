import {
  Video,
  PlayCircle,
  BookOpen,
  GraduationCap,
  Building2,
  Scale,
  ExternalLink,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { CTABanner } from "@/components/common/CTABanner";
import { siteConfig } from "@/config/siteConfig";
import { YouTubeIcon, InstagramIcon } from "@/components/common/Icons";

export function CACouple() {
  const missions = [
    {
      icon: <BookOpen className="w-6 h-6 text-gold" />,
      title: "Promote Financial Literacy",
      desc: "Demystifying balance sheets, tax returns, and banking criteria for non-finance founders.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-gold" />,
      title: "Simplify Taxation & Compliance",
      desc: "Breaking down complex CBDT and GST notifications into practical, step-by-step guidance.",
    },
    {
      icon: <Building2 className="w-6 h-6 text-gold" />,
      title: "Educate Entrepreneurs on Regulations",
      desc: "Guiding micro and small businesses through statutory deadlines and risk-free documentation.",
    },
    {
      icon: <Scale className="w-6 h-6 text-gold" />,
      title: "Encourage Ethical Financial Practices",
      desc: "Advocating for transparent books, legitimate tax deductions, and sustainable compliance habits.",
    },
  ];

  const videoList = [
    {
      title: "Understanding Tax Deductions & Section 80C Explained",
      views: "2.8K views",
      time: "Recent Upload",
      url: siteConfig.socials.youtube,
      thumbnail:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Bank Project Report & CMA Data Preparation for MSME Loan",
      views: "3.4K views",
      time: "Popular",
      url: siteConfig.socials.youtube,
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "GST Returns & Common Notice Pitfalls to Avoid in 2026",
      views: "1.9K views",
      time: "Essential Guide",
      url: siteConfig.socials.youtube,
      thumbnail:
        "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-warmwhite pb-16">
      <SEO
        title="The CA Couple | Financial Awareness & Education"
        description="The CA Couple is an initiative by CA Deepika Awasthi and CA Satyam Gupta to promote financial literacy, simplify taxation, and empower entrepreneurs across India."
      />

      {/* Hero */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-navy text-white text-center">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-gold/15 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 text-xs sm:text-sm font-semibold text-gold mb-6 border border-gold/30">
            <Video size={16} /> Knowledge-Sharing Platform
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
            The CA Couple — Let's Grow Your Finances Together
          </h1>
          <p className="text-base sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            A dedicated awareness platform founded by CA Deepika Awasthi and CA Satyam Gupta to simplify taxation, compliance, and wealth creation for everyone.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#FF0000] hover:bg-[#CC0000] text-white font-bold shadow-lg transition-transform hover:scale-105 h-12 px-7"
            >
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-white"
              >
                <YouTubeIcon className="w-5 h-5 fill-current" />
                <span>Subscribe on YouTube</span>
                <ExternalLink size={15} className="opacity-80" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 text-white font-bold shadow-lg transition-transform hover:scale-105 h-12 px-7 border-0"
            >
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-white"
              >
                <InstagramIcon className="w-5 h-5 fill-current" />
                <span>Follow on Instagram</span>
                <ExternalLink size={15} className="opacity-80" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Initiative */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="bg-white rounded-3xl p-8 md:p-14 shadow-sm border border-border">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-semibold uppercase tracking-wider mb-3 border border-gold/25">
                Our Purpose
              </div>
              <h2 className="text-3xl font-bold text-navy mb-4">
                About The Initiative
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Alongside our professional practice, we operate 'The CA Couple' as our contribution toward informed financial decision-making. We believe that when business owners understand their numbers and tax regulations, their businesses grow sustainably and ethically.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {missions.map((mission, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-warmwhite/60 p-6 rounded-2xl border border-border/60 hover:border-gold/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    {mission.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-base mb-1">
                      {mission.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {mission.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Featured Videos */}
      <section className="py-12 md:py-16 bg-white border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FF0000]/10 flex items-center justify-center text-[#FF0000]">
                <Video size={28} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy">
                  Popular Video Guides
                </h2>
                <p className="text-sm text-muted-foreground flex items-center gap-2 mt-0.5">
                  <Users size={14} className="text-gold-dark" />
                  <span>1.63K+ Subscribers • 380+ Practical Videos</span>
                </p>
              </div>
            </div>

            <Button
              asChild
              className="bg-[#FF0000] hover:bg-[#CC0000] text-white font-semibold"
            >
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <span>View All on YouTube</span>
                <ExternalLink size={15} />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {videoList.map((video, idx) => (
              <a
                key={idx}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl overflow-hidden bg-warmwhite border border-border shadow-sm hover:shadow-md transition-all"
              >
                <div className="aspect-video bg-navy/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-navy/20 group-hover:bg-transparent transition-colors z-10">
                    <PlayCircle className="w-12 h-12 text-white opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-md" />
                  </div>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    loading="lazy"
                    width={600}
                    height={338}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 z-10 bg-black/70 backdrop-blur-sm text-white text-[11px] font-semibold px-2 py-0.5 rounded">
                    {video.time}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-navy group-hover:text-gold-dark transition-colors line-clamp-2 text-base leading-snug mb-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-auto">
                    {video.views}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CTABanner
        heading="Have a question inspired by our videos?"
        subtext="Get customized, professional tax and compliance assistance from CA Deepika Awasthi and CA Satyam Gupta."
        buttonText="Get Consultation"
        buttonLink="/contact"
      />
    </div>
  );
}
