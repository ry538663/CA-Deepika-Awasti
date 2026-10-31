import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group p-6 sm:p-7 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md hover:border-gold/50 transition-all duration-300 flex flex-col h-full relative overflow-hidden",
        className
      )}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-[60px] group-hover:bg-gold/10 transition-colors pointer-events-none" />
      <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center text-gold group-hover:bg-navy group-hover:text-gold transition-colors mb-5 shrink-0">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-gold-dark transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
        {description}
      </p>
    </div>
  );
}

