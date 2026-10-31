import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "space-y-3",
        isCenter ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
            isDark
              ? "bg-white/10 text-gold border border-white/15"
              : "bg-gold/15 text-gold-dark border border-gold/25"
          )}
        >
          {badge}
        </div>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold tracking-tight",
          isDark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed",
            isDark ? "text-white/80" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

