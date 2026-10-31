import { Link } from "react-router-dom";
import { ArrowRight, MessageSquareCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

export function CTABanner({
  heading = "Have a tax, GST or compliance question?",
  subtext = "Talk to our team and get clear, practical guidance.",
  buttonText = "Get Consultation",
  buttonLink = "/contact",
  className,
}: CTABannerProps) {
  return (
    <section className={cn("py-16 md:py-20 bg-warmwhite", className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="relative rounded-3xl bg-navy text-white p-8 md:p-14 overflow-hidden shadow-xl border border-white/10">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-gold/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-navy-secondary/50 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-gold text-xs font-semibold tracking-wider uppercase border border-white/15">
                <MessageSquareCheck size={14} /> Professional Consultation
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                {heading}
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                {subtext}
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gold hover:bg-gold-hover text-navy font-bold px-8 h-12 shadow-md transition-all group"
              >
                <Link to={buttonLink} className="inline-flex items-center gap-2">
                  <span>{buttonText}</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

