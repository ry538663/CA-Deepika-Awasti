import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  Send,
  CheckCircle2,
  Bookmark,
  ExternalLink,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SEO } from "@/components/SEO";
import { siteConfig } from "@/config/siteConfig";
import {
  YouTubeIcon,
  InstagramIcon,
  LinkedInIcon,
  FacebookIcon,
} from "@/components/common/Icons";

const SERVICE_OPTIONS = [
  "Individual Income Tax Returns",
  "Business & Presumptive Taxation (44AD / 44ADA)",
  "Company & Statutory Audit",
  "Capital Gains (Property / Shares / Mutual Funds)",
  "Share Market (F&O / Intraday) Tax Compliance",
  "TDS / TCS Returns & Form 26QB",
  "GST Registration & Monthly Filings",
  "Bank Loan Project Reports & CMA Data",
  "Business Registration (MSME / Pvt Ltd / LLP)",
  "General Financial Advisory",
  "Institutional Empanelment / Bank Association",
  "Other",
];

function matchServiceOption(param: string): string {
  const clean = param.trim().toLowerCase();
  const exact = SERVICE_OPTIONS.find((opt) => opt.toLowerCase() === clean);
  if (exact) return exact;

  if (
    clean.includes("project report") ||
    clean.includes("cma") ||
    clean.includes("loan") ||
    clean.includes("mudra")
  ) {
    return "Bank Loan Project Reports & CMA Data";
  }
  if (clean.includes("gst")) {
    return "GST Registration & Monthly Filings";
  }
  if (
    clean.includes("tds") ||
    clean.includes("tcs") ||
    clean.includes("26qb")
  ) {
    return "TDS / TCS Returns & Form 26QB";
  }
  if (clean.includes("presumptive") || clean.includes("44ad")) {
    return "Business & Presumptive Taxation (44AD / 44ADA)";
  }
  if (
    clean.includes("capital gain") ||
    clean.includes("property") ||
    clean.includes("mutual fund")
  ) {
    return "Capital Gains (Property / Shares / Mutual Funds)";
  }
  if (
    clean.includes("share market") ||
    clean.includes("f&o") ||
    clean.includes("intraday")
  ) {
    return "Share Market (F&O / Intraday) Tax Compliance";
  }
  if (
    clean.includes("company") ||
    clean.includes("audit") ||
    clean.includes("statutory") ||
    clean.includes("trust")
  ) {
    return "Company & Statutory Audit";
  }
  if (clean.includes("individual") || clean.includes("salaried")) {
    return "Individual Income Tax Returns";
  }
  if (
    clean.includes("registration") ||
    clean.includes("llp") ||
    clean.includes("pvt") ||
    clean.includes("msme") ||
    clean.includes("structuring")
  ) {
    return "Business Registration (MSME / Pvt Ltd / LLP)";
  }
  if (
    clean.includes("institution") ||
    clean.includes("bank association") ||
    clean.includes("empanel")
  ) {
    return "Institutional Empanelment / Bank Association";
  }
  if (clean.includes("advisory") || clean.includes("consult")) {
    return "General Financial Advisory";
  }
  return "Other";
}

export function Contact() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get("service");

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    botcheck: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Check Web3Forms key
  const formAccessKey = import.meta.env.VITE_FORM_ACCESS_KEY;
  const isFormConfigured = Boolean(formAccessKey && formAccessKey.trim() !== "");

  // Pre-fill service from query param ?service=<title or query>
  useEffect(() => {
    if (serviceParam) {
      const decodedService = decodeURIComponent(serviceParam);
      const matched = matchServiceOption(decodedService);

      setFormData((prev) => ({
        ...prev,
        service: matched,
        message:
          prev.message ||
          `I would like to inquire about professional assistance with ${decodedService}.`,
      }));
    }
  }, [serviceParam]);

  const decodedServiceName = serviceParam
    ? decodeURIComponent(serviceParam)
    : null;

  // Validation functions
  const validateField = (field: string, value: string): string => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Full name is required.";
        return "";
      case "email":
        if (!value.trim()) return "Email address is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return "Please enter a valid email address.";
        }
        return "";
      case "phone": {
        if (!value.trim()) return "Phone number is required.";
        const clean = value.replace(/[\s\-()]/g, "");
        const isValid =
          /^(\+91)?[6-9]\d{9}$/.test(clean) || /^(\+91)?[0-9]{10}$/.test(clean);
        if (!isValid) {
          return "Please enter a valid 10-digit mobile number (e.g. +91 83189 72751).";
        }
        return "";
      }
      case "service":
        if (!value.trim()) return "Please select a service.";
        return "";
      case "message":
        if (!value.trim()) return "Message / Requirement details are required.";
        if (value.trim().length < 10) {
          return "Message must be at least 10 characters long.";
        }
        return "";
      default:
        return "";
    }
  };

  const validateAll = (): boolean => {
    const newErrors: Record<string, string> = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      service: validateField("service", formData.service),
      message: validateField("message", formData.message),
    };
    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      service: true,
      message: true,
    });
    return !Object.values(newErrors).some((err) => err !== "");
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (
    field: string,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  // WhatsApp Fallback URL builder
  const getWhatsAppFallbackUrl = () => {
    const msg = `Hello Income Gain Solutions,
I would like a consultation:
- *Name*: ${formData.name || "N/A"}
- *Email*: ${formData.email || "N/A"}
- *Phone*: ${formData.phone || "N/A"}
- *Service*: ${formData.service || "General"}
- *Requirement*: ${formData.message || "Consultation enquiry"}`;
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Run client validation
    const isValid = validateAll();
    if (!isValid) {
      return;
    }

    // Anti-spam honeypot check
    if (formData.botcheck) {
      setFormSubmitted(true);
      return;
    }

    // If endpoint is unconfigured in development/environment, route to WhatsApp directly
    if (!isFormConfigured) {
      window.open(getWhatsAppFallbackUrl(), "_blank", "noopener,noreferrer");
      setFormSubmitted(true);
      return;
    }

    // Double-submit prevention
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: formAccessKey,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          botcheck: formData.botcheck,
          subject: `New enquiry from website: ${formData.service}`,
          from_name: "Income Gain Solutions Website",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setFormSubmitted(true);
      } else {
        setSubmitError(
          result.message ||
            "Submission failed. Please try again or reach out on WhatsApp."
        );
      }
    } catch {
      setSubmitError(
        "Network connection error. Please try again or WhatsApp us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const institutionalStrengths = [
    "Professionally Qualified Leadership",
    "Timely Delivery of Assignments",
    "Structured Documentation Methodology",
    "Confidential & Ethical Practices",
    "Compliance-Focused Approach",
    "Analytical & Practical Financial Structuring",
  ];

  const hasAnySocial = Boolean(
    siteConfig.social.youtube ||
    siteConfig.social.instagram ||
    siteConfig.social.linkedin ||
    siteConfig.social.facebook
  );

  // Schema.org AccountingService JSON-LD data
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Income Gain Solutions & Co.",
    founder: {
      "@type": "Person",
      name: "CA Deepika Awasthi",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "1st Floor, C-4023, Sector-10, Rajajipuram",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      postalCode: "226017",
      addressCountry: "IN",
    },
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    url: "https://incomegainsolutions.com",
    openingHours: "Mo-Sa 10:00-19:00",
    priceRange: "$$",
  };

  return (
    <div className="pt-24 min-h-screen bg-warmwhite pb-28 sm:pb-24">
      <SEO
        title="Contact Us | Income Gain Solutions & Co., Lucknow"
        description="Contact CA Deepika Awasthi at Income Gain Solutions & Co., Rajajipuram, Lucknow. Expert income tax, GST, project report and business advisory services. Call +91 83189 72751."
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Header */}
      <section className="py-14 md:py-18 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Have a taxation question, need bank-ready project documentation, or
            business registration advice? Talk to our professional team in
            Rajajipuram, Lucknow today.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start mb-16 sm:mb-20">
          {/* STEP 2: Contact Information Card (Left) */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-sm">
              <h2 className="text-2xl font-bold text-navy mb-6 pb-3 border-b border-border/60">
                Contact Information
              </h2>
              <div className="space-y-6">
                {/* Office Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center shrink-0 text-gold-dark mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-base">Office Address</h3>
                    <a
                      href={siteConfig.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block text-muted-foreground hover:text-navy mt-1 text-sm sm:text-base leading-relaxed transition-colors"
                      aria-label="View office location on Google Maps"
                    >
                      {siteConfig.addressLines.map((line, idx) => (
                        <span key={idx} className="block">
                          {line}
                        </span>
                      ))}
                    </a>
                    <a
                      href={siteConfig.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-dark hover:underline mt-2"
                    >
                      Get Directions <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center shrink-0 text-gold-dark mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-base">Phone Number</h3>
                    <p className="mt-1">
                      <a
                        href={`tel:${siteConfig.phoneTel}`}
                        className="text-navy hover:text-gold-dark font-medium text-sm sm:text-base transition-colors"
                      >
                        {siteConfig.phone}
                      </a>
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Direct line / WhatsApp consultation available
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center shrink-0 text-gold-dark mt-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-base">Email Address</h3>
                    <p className="mt-1">
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-navy hover:text-gold-dark font-medium text-sm sm:text-base transition-colors break-all"
                      >
                        {siteConfig.email}
                      </a>
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      We typically respond within 24 business hours
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center shrink-0 text-gold-dark mt-1">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-base">Working Hours</h3>
                    <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                      {siteConfig.hours}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {siteConfig.hoursNote}
                    </p>
                  </div>
                </div>

                {/* Follow Us Row - rendered only if non-empty */}
                {hasAnySocial && (
                  <div className="pt-4 border-t border-border/60">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Follow Us
                    </h4>
                    <div className="flex items-center gap-3">
                      {siteConfig.social.youtube && (
                        <a
                          href={siteConfig.social.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Visit our YouTube channel"
                          className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy hover:bg-[#FF0000] hover:text-white transition-colors"
                        >
                          <YouTubeIcon className="w-4 h-4" />
                        </a>
                      )}
                      {siteConfig.social.instagram && (
                        <a
                          href={siteConfig.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Follow us on Instagram"
                          className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy hover:bg-[#E1306C] hover:text-white transition-colors"
                        >
                          <InstagramIcon className="w-4 h-4" />
                        </a>
                      )}
                      {siteConfig.social.linkedin && (
                        <a
                          href={siteConfig.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Connect on LinkedIn"
                          className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy hover:bg-[#0A66C2] hover:text-white transition-colors"
                        >
                          <LinkedInIcon className="w-4 h-4" />
                        </a>
                      )}
                      {siteConfig.social.facebook && (
                        <a
                          href={siteConfig.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Follow us on Facebook"
                          className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy hover:bg-[#1877F2] hover:text-white transition-colors"
                        >
                          <FacebookIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick WhatsApp Card */}
            <div className="bg-navy rounded-3xl p-7 text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm border border-white/10">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Prefer a Quick Chat?
                </h3>
                <p className="text-xs sm:text-sm text-white/80">
                  Connect directly with our team on WhatsApp for prompt responses.
                </p>
              </div>
              <Button
                asChild
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold shrink-0 shadow-md transition-all duration-200"
              >
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                    "Hello, I would like a consultation."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>

          {/* STEP 4: Working Contact Form (Right) */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-2">Send Us a Message</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Fill in your details below and an expert from our team will reach out
              to you.
            </p>

            {/* Form not configured warning banner in development */}
            {!isFormConfigured && (
              <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                <AlertCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-amber-800">
                  <span className="font-semibold">Notice: </span>
                  Form endpoint not configured. Submissions are temporarily
                  routed to WhatsApp.
                </div>
              </div>
            )}

            {/* Service inquiry notification banner if pre-filled */}
            {decodedServiceName && !formSubmitted && (
              <div className="mb-6 p-4 rounded-2xl bg-gold/10 border border-gold/30 flex items-start gap-3">
                <Bookmark size={20} className="text-gold-dark shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-semibold text-navy">
                    Inquiring regarding:{" "}
                  </span>
                  <span className="text-navy font-bold">{decodedServiceName}</span>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Our team will prepare the necessary compliance and
                    documentation guidelines for you.
                  </p>
                </div>
              </div>
            )}

            {/* Submission Error Banner */}
            {submitError && (
              <div
                className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 space-y-3"
                role="alert"
                aria-live="assertive"
              >
                <div className="flex items-start gap-3">
                  <AlertCircle size={20} className="text-red-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800 font-medium">{submitError}</p>
                </div>
                <div className="pl-8">
                  <a
                    href={getWhatsAppFallbackUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-semibold shadow hover:bg-[#20ba5a] transition-colors"
                  >
                    WhatsApp us directly at {siteConfig.phone}
                  </a>
                </div>
              </div>
            )}

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-emerald-900">
                  Thank you! Our team will contact you within 24 business hours.
                </h3>
                <p className="text-sm text-emerald-700 max-w-md mx-auto leading-relaxed">
                  Your enquiry has been received. Our advisory team will review
                  your requirements and connect with you shortly.
                </p>
                <Button
                  variant="outline"
                  className="mt-4 border-emerald-300 text-emerald-800 hover:bg-emerald-100"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      service: "",
                      message: "",
                      botcheck: "",
                    });
                    setErrors({});
                    setTouched({});
                  }}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                {/* Honeypot field for anti-spam */}
                <input
                  type="text"
                  name="botcheck"
                  value={formData.botcheck}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, botcheck: e.target.value }))
                  }
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: "none" }}
                  aria-hidden="true"
                />

                {/* Full Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-semibold text-navy"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="fullName"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                    placeholder="Enter your full name"
                    className={`bg-warmwhite/50 focus-visible:ring-gold ${
                      touched.name && errors.name ? "border-red-500" : ""
                    }`}
                    aria-invalid={Boolean(touched.name && errors.name)}
                    aria-describedby={
                      touched.name && errors.name ? "name-error" : undefined
                    }
                  />
                  {touched.name && errors.name && (
                    <p
                      id="name-error"
                      className="text-xs text-red-600 font-medium mt-1"
                      role="alert"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-navy"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      placeholder="your.email@example.com"
                      className={`bg-warmwhite/50 focus-visible:ring-gold ${
                        touched.email && errors.email ? "border-red-500" : ""
                      }`}
                      aria-invalid={Boolean(touched.email && errors.email)}
                      aria-describedby={
                        touched.email && errors.email ? "email-error" : undefined
                      }
                    />
                    {touched.email && errors.email && (
                      <p
                        id="email-error"
                        className="text-xs text-red-600 font-medium mt-1"
                        role="alert"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold text-navy"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      onBlur={() => handleBlur("phone")}
                      placeholder="+91 83189 72751"
                      className={`bg-warmwhite/50 focus-visible:ring-gold ${
                        touched.phone && errors.phone ? "border-red-500" : ""
                      }`}
                      aria-invalid={Boolean(touched.phone && errors.phone)}
                      aria-describedby={
                        touched.phone && errors.phone ? "phone-error" : undefined
                      }
                    />
                    {touched.phone && errors.phone && (
                      <p
                        id="phone-error"
                        className="text-xs text-red-600 font-medium mt-1"
                        role="alert"
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Dropdown */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="service"
                    className="text-sm font-semibold text-navy"
                  >
                    Service Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => handleChange("service", e.target.value)}
                    onBlur={() => handleBlur("service")}
                    className={`flex h-11 w-full items-center justify-between rounded-md border bg-warmwhite/50 px-3 py-2 text-sm text-navy ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold disabled:cursor-not-allowed disabled:opacity-50 ${
                      touched.service && errors.service
                        ? "border-red-500"
                        : "border-input"
                    }`}
                    aria-invalid={Boolean(touched.service && errors.service)}
                    aria-describedby={
                      touched.service && errors.service
                        ? "service-error"
                        : undefined
                    }
                  >
                    <option value="">Select a service...</option>
                    {SERVICE_OPTIONS.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {touched.service && errors.service && (
                    <p
                      id="service-error"
                      className="text-xs text-red-600 font-medium mt-1"
                      role="alert"
                    >
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Requirement / Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-navy"
                  >
                    Requirement / Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    placeholder="Briefly describe your requirements or inquiry (min 10 characters)..."
                    className={`min-h-[120px] bg-warmwhite/50 focus-visible:ring-gold ${
                      touched.message && errors.message
                        ? "border-red-500"
                        : "border-input"
                    }`}
                    aria-invalid={Boolean(touched.message && errors.message)}
                    aria-describedby={
                      touched.message && errors.message
                        ? "message-error"
                        : undefined
                    }
                  />
                  {touched.message && errors.message && (
                    <p
                      id="message-error"
                      className="text-xs text-red-600 font-medium mt-1"
                      role="alert"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold-hover text-navy font-bold h-12 text-base mt-2 shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : !isFormConfigured ? (
                    <>
                      <span>Send Consultation via WhatsApp</span>
                      <Send size={18} />
                    </>
                  ) : (
                    <>
                      <span>Send Consultation Request</span>
                      <Send size={18} />
                    </>
                  )}
                </Button>

                {/* Confidentiality Note */}
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Your information is kept confidential and used only to respond to
                  your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* STEP 3: Google Map Card */}
        <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden mb-16 sm:mb-20">
          <div className="px-6 py-4 bg-navy text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <MapPin size={18} className="text-gold shrink-0" />
              <span className="font-semibold text-sm sm:text-base text-white">
                Income Gain Solutions & Co. • Rajajipuram, Lucknow
              </span>
            </div>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-gold hover:text-navy text-white text-xs font-semibold transition-colors"
            >
              Open in Google Maps <ExternalLink size={13} />
            </a>
          </div>

          <div className="w-full h-[360px] md:h-[400px] bg-warmwhite relative">
            <iframe
              src={siteConfig.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Income Gain Solutions office location, Rajajipuram, Lucknow"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Banking & Institutional Association Section */}
      <section className="bg-navy py-16 md:py-20 text-white border-y border-white/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border border-gold/30 scale-110 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none" />
                <Building size={56} className="text-gold" />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-gold text-xs font-semibold uppercase tracking-wider mb-3 border border-white/15">
                Institutional Empanelment
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                For Banking & Institutional Associations
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed text-sm sm:text-base">
                Income Gain Solutions actively associates with scheduled
                commercial banks, NBFCs, and state boards for concurrent audit,
                CMA verification, and project loan financial scrutiny.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8 text-left">
                {institutionalStrengths.map((prop, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="text-sm font-medium text-white/90">
                      {prop}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-hover text-navy font-bold shadow-md"
                >
                  <a
                    href={`mailto:${siteConfig.email}?subject=Institutional%20Association%20Inquiry`}
                  >
                    Partner With Us
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="border-2 border-white/40 text-white hover:bg-white/15 bg-transparent font-semibold shadow-sm"
                >
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
