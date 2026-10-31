/**
 * Central configuration file for Income Gain Solutions & Co.
 * Single source of truth for firm details, contacts, links, and credentials.
 */

export const siteConfig = {
  firmName: "Income Gain Solutions & Co.",
  proprietor: "CA Deepika Awasthi",
  addressLines: [
    "1st Floor, C-4023, Sector-10",
    "Rajajipuram, Lucknow - 226017",
    "Next to Globe Hospital",
  ],
  addressFull:
    "1st Floor, C-4023, Sector-10, Rajajipuram, Lucknow - 226017 (Next to Globe Hospital)",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=C-4023+Sector-10+Rajajipuram+Lucknow+226017",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=C-4023+Sector-10+Rajajipuram+Lucknow+226017&output=embed",
  phone: "+91 83189 72751",
  phoneTel: "+918318972751",
  whatsappNumber: "918318972751",
  email: "theincomegainsolutions@gmail.com",
  hours: "Mon - Sat: 10:00 AM - 7:00 PM",
  hoursNote: "Sunday closed. Scheduled consultations by prior appointment",
  social: {
    youtube: "",
    instagram: "",
    linkedin: "",
    facebook: "",
  },
  frn: "",
  icai: {
    deepika: "",
    satyam: "",
  },

  firm: {
    name: "Income Gain Solutions & Co.",
    shortName: "Income Gain Solutions",
    tagline: "Chartered Accountants",
    description:
      "Simplifying taxation, regulatory compliance, and banking documentation for individuals, startups, and MSMEs with professional integrity.",
    foundedBy: "CA Deepika Awasthi",
  },

  contact: {
    address:
      "1st Floor, C-4023, Sector-10, Rajajipuram, Lucknow - 226017 (Next to Globe Hospital)",
    addressDisplay:
      "1st Floor, C-4023, Sector-10, Rajajipuram, Lucknow - 226017 (Next to Globe Hospital)",
    phone: "+91 83189 72751",
    phoneDisplay: "+91 83189 72751",
    phoneClean: "918318972751",
    email: "theincomegainsolutions@gmail.com",
    emailDisplay: "theincomegainsolutions@gmail.com",
    workingHours: "Mon - Sat: 10:00 AM - 7:00 PM",
    workingHoursNote:
      "Sunday closed. Scheduled consultations by prior appointment",
  },

  socials: {
    youtube: "https://www.youtube.com/@The_CACouple",
    instagram: "https://www.instagram.com/the_ca_couplesatyika/",
    linkedin: "",
    facebook: "",
  },

  theCaCouple: {
    youtube: "https://www.youtube.com/@The_CACouple",
    instagram: "https://www.instagram.com/the_ca_couplesatyika/",
  },

  whatsapp: {
    phone: "918318972751",
    defaultMessage: "Hello, I would like a consultation.",
    get url() {
      return `https://wa.me/${this.phone}?text=${encodeURIComponent(
        this.defaultMessage
      )}`;
    },
  },

  empaneledWith: [
    "CBSE New Delhi",
    "UP Housing & Development Board",
    "Udyami",
    "Business Pathshala",
    "Entrepreneur India TV",
  ],

  team: {
    deepika: {
      name: "CA Deepika Awasthi",
      designation: "Chartered Accountant | Proprietor",
      membershipNo: "",
      image: "/CA%20Deepika%20Awasthi.jpeg",
      bio: "She oversees professional review, compliance supervision, and institutional assignments. Her leadership drives the firm's commitment to precision and regulatory adherence.",
      expertiseHeading: "Core Expertise",
      expertise: [
        "Income Tax Compliance & Advisory",
        "GST & Statutory Compliance",
        "Loan Project Reports & Financial Projections",
        "Capital Gain & Property Taxation",
        "TDS Compliance & Regulatory Documentation",
        "Business Registrations & Structuring",
      ],
    },
    satyam: {
      name: "CA Satyam Gupta",
      designation: "Chartered Accountant | Financial Associate",
      membershipNo: "",
      image: "/CA%20Satyam%20Gupta.jpeg",
      bio: "He supports analytical review, financial structuring, and documentation validation, ensuring robust financial insights and structured reporting.",
      expertiseHeading: "Qualifications & Expertise",
      expertise: [
        "Certificate Course on Concurrent Audit of Banks (ICAI, 2020)",
        "Certificate Course on Corporate Social Responsibility (ICAI)",
        "Financial Analysis & Risk Assessment",
        "Loan Documentation & CMA Preparation",
        "Regulatory Compliance Advisory & Strategic Review",
      ],
    },
  },

  stats: [
    {
      value: 10,
      suffix: "+",
      label: "Years of Experience",
      displayPlaceholder: "[X]+",
    },
    {
      value: 500,
      suffix: "+",
      label: "Clients Served",
      displayPlaceholder: "[X]+",
    },
    {
      value: 2500,
      suffix: "+",
      label: "Filings Completed",
      displayPlaceholder: "[X]+",
    },
    {
      value: 1630,
      suffix: "+",
      label: "YouTube Subscribers",
      displayPlaceholder: "[X]+",
    },
  ],

  seo: {
    siteName: "Income Gain Solutions & Co.",
    defaultTitle: "Income Gain Solutions & Co. | Chartered Accountants, Lucknow",
    titleTemplate: "%s | Income Gain Solutions & Co., Lucknow",
    defaultDescription:
      "Income Gain Solutions & Co. is a leading Chartered Accountant firm in Lucknow led by CA Deepika Awasthi, providing expert taxation, GST compliance, banking documentation, and business advisory services.",
    siteUrl: "https://incomegainsolutions.com",
    ogImage: "/logo..png",
  },
};

