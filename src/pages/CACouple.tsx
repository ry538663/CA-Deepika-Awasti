import { Video, Camera, PlayCircle, BookOpen, GraduationCap, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CACouple() {
  const missions = [
    { icon: <BookOpen className="w-6 h-6 text-gold" />, text: "Promote financial literacy" },
    { icon: <GraduationCap className="w-6 h-6 text-gold" />, text: "Simplify taxation & compliance concepts" },
    { icon: <Building className="w-6 h-6 text-gold" />, text: "Educate entrepreneurs about regulatory responsibilities" },
    { icon: <Scale className="w-6 h-6 text-gold" />, text: "Encourage ethical and structured financial practices" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-warmwhite pb-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden bg-navy text-white text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6 border border-gold/30">
            <Video size={16} /> Knowledge-Sharing Platform
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The CA Couple — Let's Grow Your Finances Together</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            A dedicated platform to simplify complex financial concepts for everyone.
          </p>
          <Button asChild size="lg" className="bg-[#FF0000] hover:bg-[#CC0000] text-white">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Video className="mr-2" /> Subscribe on YouTube
            </a>
          </Button>
        </div>
      </section>

      {/* About Initiative */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border">
            <h2 className="text-3xl font-bold text-navy mb-6 text-center">About The Initiative</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Alongside our professional practice, we operate a financial awareness and knowledge-sharing platform titled 'The CA Couple.' This platform reflects our commitment toward responsible advisory and informed financial decision-making within the business community.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {missions.map((mission, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-warmwhite p-6 rounded-xl border border-border/50 hover:border-gold/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                    {mission.icon}
                  </div>
                  <span className="font-semibold text-navy">{mission.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Integration */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-[#FF0000]/10 flex items-center justify-center">
                <Video className="w-8 h-8 text-[#FF0000]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy">Latest Videos</h3>
                <p className="text-muted-foreground font-medium">1.63K Subscribers • 389+ Videos</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button asChild variant="outline" className="border-[#E1306C] text-[#E1306C] hover:bg-[#E1306C]/10">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Camera className="mr-2" size={18} /> Instagram
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-video bg-navy/10 rounded-xl overflow-hidden relative mb-4">
                  <div className="absolute inset-0 flex items-center justify-center bg-navy/20 group-hover:bg-transparent transition-colors">
                    <PlayCircle className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </div>
                  <img src={`https://images.unsplash.com/photo-${1554224155 - idx}?auto=format&fit=crop&w=600&q=80`} alt="Video Thumbnail" className="w-full h-full object-cover mix-blend-multiply" />
                </div>
                <h4 className="font-semibold text-navy group-hover:text-gold transition-colors line-clamp-2">
                  Understanding Tax Deductions & Section 80C Explained | CA Couple
                </h4>
                <p className="text-sm text-muted-foreground mt-1">2.1K views • 2 days ago</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Inline component for Building since it's not exported from lucide directly by that exact name sometimes.
function Building(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}
