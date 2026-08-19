import { motion } from "framer-motion";

export function TrustBar() {
  const logos = [
    "CBSE New Delhi",
    "UP Housing & Development Board",
    "Udyami",
    "Business Pathshala",
    "Entrepreneur India TV"
  ];

  return (
    <div className="w-full bg-white border-y border-border py-8 overflow-hidden">
      <div className="container mx-auto px-4 mb-4 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Trusted by & Empaneled with
        </p>
      </div>
      <div className="relative flex w-full">
        {/* We use two identical lists to create a seamless infinite scroll effect */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 md:mx-16 flex items-center justify-center text-lg md:text-xl font-bold text-navy-secondary opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
