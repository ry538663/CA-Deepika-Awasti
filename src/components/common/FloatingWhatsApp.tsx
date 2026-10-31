import { siteConfig } from "@/config/siteConfig";

export function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello, I would like a consultation."
  )}`;

  return (
    <aside aria-label="Quick Contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp for consultation"
        className="fixed bottom-6 right-4 sm:right-6 z-50 group flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.778.978-.954 1.178-.175.2-.351.226-.652.075s-1.272-.469-2.424-1.496c-.896-.799-1.501-1.786-1.677-2.087-.175-.3-.019-.462.132-.612.136-.135.301-.35.452-.526.15-.175.201-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.677-1.633-.928-2.238-.244-.589-.493-.509-.677-.518-.175-.009-.376-.011-.577-.011s-.527.075-.803.375c-.276.3-1.054 1.03-1.054 2.513s1.079 2.913 1.23 3.114c.15.2 2.123 3.242 5.143 4.547.718.311 1.278.497 1.716.636.721.229 1.377.197 1.895.12.578-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.125-.276-.2-.577-.35zM12.042 2C6.516 2 2.028 6.486 2.028 12c0 1.956.56 3.784 1.533 5.334L2 22l4.821-1.517A9.972 9.972 0 0 0 12.042 22c5.526 0 10.014-4.486 10.014-10S17.568 2 12.042 2zm0 18.272c-1.687 0-3.257-.492-4.582-1.341l-.329-.211-2.86.899.917-2.784-.23-.348A8.257 8.257 0 0 1 3.771 12c0-4.561 3.71-8.272 8.271-8.272s8.271 3.711 8.271 8.272-3.71 8.272-8.271 8.272z" />
        </svg>

        {/* Text pill visible on hover or large screens */}
        <span className="hidden sm:inline-block text-xs font-semibold tracking-wide pr-1">
          Chat with us
        </span>
      </a>
    </aside>
  );
}

