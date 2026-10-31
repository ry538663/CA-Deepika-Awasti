import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  displayPlaceholder?: string;
  className?: string;
}

export function StatCard({
  value,
  suffix = "+",
  prefix = "",
  label,
  displayPlaceholder,
  className,
}: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState<number>(0);

  // If user provided a literal placeholder and no numeric value (or value <= 0)
  const isPlaceholderOnly = Boolean(displayPlaceholder && value <= 0);

  useEffect(() => {
    if (!isInView || isPlaceholderOnly || value <= 0) return;

    let startTime: number | null = null;
    const duration = 1600; // ms

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic curve
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * value);
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    const frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, isPlaceholderOnly]);

  const formattedNumber =
    displayValue >= 1000 ? displayValue.toLocaleString("en-IN") : displayValue;

  return (
    <div
      ref={ref}
      className={cn(
        "p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col items-center justify-center backdrop-blur-sm transition-all hover:bg-white/[0.08] hover:border-gold/30",
        className
      )}
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold tracking-tight mb-2">
        {isPlaceholderOnly ? (
          <span>{displayPlaceholder}</span>
        ) : (
          <span>
            {prefix}
            {formattedNumber}
            {suffix}
          </span>
        )}
      </div>
      <div className="text-xs sm:text-sm font-medium text-white/80 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

