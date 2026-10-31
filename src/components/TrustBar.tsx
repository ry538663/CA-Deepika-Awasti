import { siteConfig } from "@/config/siteConfig";

export function TrustBar() {
  const logos = siteConfig.empaneledWith;

  return (
    <div
      className="w-full bg-white border-y border-border py-8 overflow-hidden select-none"
      aria-label="Empaneled organizations and institutions"
    >
      <div className="container mx-auto px-4 mb-4 text-center">
        <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Trusted by & Empaneled with
        </p>
      </div>

      <div className="relative flex w-full overflow-hidden">
        {/* Infinite scrolling track with pause-on-hover & reduced-motion support */}
        <div className="marquee-track flex items-center">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6 md:mx-12 flex items-center justify-center text-base sm:text-lg md:text-xl font-bold text-navy-secondary opacity-60 hover:opacity-100 transition-opacity cursor-default"
            >
              <span>{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
