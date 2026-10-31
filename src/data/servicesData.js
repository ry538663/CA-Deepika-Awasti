/**
 * Single source of truth for all services on the Services page.
 * Each item has:
 *  - title: Exact title from the Services page
 *  - officialUrl: Direct government portal link (or null if no portal exists)
 */

export const servicesData = [
  {
    category: "Taxation & Regulatory Compliance",
    id: "taxation",
    tagline: "End-to-end direct & indirect tax filing and advisory",
    iconName: "Calculator",
    note: "All filings are double-verified against 26AS, AIS, and TIS records to guarantee maximum accuracy and eliminate notice risks.",
    items: [
      {
        title: "Individual Income Tax Returns (Salaried, Professional, Capital Gains)",
        officialUrl: "https://www.incometax.gov.in",
      },
      {
        title: "Business & Presumptive Taxation (Section 44AD / 44ADA / 44AE)",
        officialUrl: "https://www.incometax.gov.in",
      },
      {
        title: "Company & Trust Statutory Returns",
        officialUrl: "https://www.incometax.gov.in",
      },
      {
        title: "Capital Gain Computation (Property, Equity, Mutual Funds)",
        officialUrl: "https://www.incometax.gov.in",
      },
      {
        title: "Share Market (F&O / Intraday) Tax Audit & Compliance",
        officialUrl: "https://www.incometax.gov.in",
      },
      {
        title: "TDS / TCS Quarterly Returns & Form 26QB (Property TDS)",
        officialUrl: "https://www.tdscpc.gov.in",
      },
      {
        title: "GST Registration, Monthly GSTR-1 & 3B, Annual Returns & Audit",
        officialUrl: "https://www.gst.gov.in",
      },
    ],
  },
  {
    category: "Banking & Financial Documentation",
    id: "banking",
    tagline: "Bank-approved project reports & loan structuring",
    iconName: "Landmark",
    note: "We ensure that all financial documents are prepared with clarity, realistic assumptions, and analytical justification suitable for nationalized banks and NBFC credit appraisals.",
    items: [
      {
        title: "Comprehensive Project Reports for Term Loans / CC Limits / Mudra Loans",
        officialUrl: "https://www.mudra.org.in",
      },
      {
        title: "CMA Data Preparation (Credit Monitoring Arrangement)",
        officialUrl: null,
      },
      {
        title: "Projected & Estimated Balance Sheets and Profit & Loss Statements",
        officialUrl: null,
      },
      {
        title: "Loan Proposal Financial Scrutiny & Justification Notes",
        officialUrl: null,
      },
      {
        title: "Net Worth Certificates & Solvency Certificates",
        officialUrl: null,
      },
      {
        title: "Capital Gain Working for Loan Processing & Mortgage Review",
        officialUrl: "https://www.incometax.gov.in",
      },
    ],
  },
  {
    category: "Business Registration & Structuring",
    id: "registration",
    tagline: "Smooth entity setup and regulatory licenses",
    iconName: "Building2",
    note: "From initial entity selection to operational registrations, we ensure your venture starts with compliant legal foundations.",
    items: [
      {
        title: "MSME / Udyam Registration & Government Subsidy Advisory",
        officialUrl: "https://udyamregistration.gov.in",
      },
      {
        title: "Labour Law Registration & Shop & Establishment Act",
        officialUrl: "https://labour.gov.in",
      },
      {
        title: "FSSAI Food License (Basic, State & Central)",
        officialUrl: "https://foscos.fssai.gov.in",
      },
      {
        title: "Import Export Code (IEC) Registration & DGFT Compliance",
        officialUrl: "https://www.dgft.gov.in",
      },
      {
        title: "PAN / TAN Allotment & Corrections",
        officialUrl: "https://www.incometax.gov.in",
      },
      {
        title: "Partnership Firm Deed Drafting & Registration",
        officialUrl: null,
      },
      {
        title: "LLP (Limited Liability Partnership) Incorporation",
        officialUrl: "https://www.mca.gov.in",
      },
      {
        title: "Private Limited & Section 8 Company Incorporation",
        officialUrl: "https://www.mca.gov.in",
      },
      {
        title: "Trademark Application & Class 3 Digital Signature Certificates (DSC)",
        officialUrl: "https://ipindia.gov.in",
      },
    ],
  },
];

