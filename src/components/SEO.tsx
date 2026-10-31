import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig } from "@/config/siteConfig";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: string;
}

export function SEO({
  title,
  description = siteConfig.seo.defaultDescription,
  keywords = [
    "Chartered Accountant",
    "Income Tax Filing",
    "GST Compliance",
    "Project Reports",
    "CA Deepika Awasthi",
    "The CA Couple",
    "MSME Registration",
    "Income Gain Solutions",
  ],
  image = siteConfig.seo.ogImage,
  type = "website",
}: SEOProps) {
  const location = useLocation();
  const fullTitle = title
    ? (title.includes(siteConfig.firm.name) ? title : `${title} | ${siteConfig.firm.name}`)
    : siteConfig.seo.defaultTitle;
  const canonicalUrl = `${siteConfig.seo.siteUrl}${location.pathname}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

    // Helper to update or create a meta tag
    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Standard Meta Tags
    setMetaTag("name", "description", description);
    if (keywords && keywords.length > 0) {
      setMetaTag("name", "keywords", keywords.join(", "));
    }

    // 3. Open Graph Tags
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", type);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:site_name", siteConfig.firm.name);
    setMetaTag("property", "og:image", `${siteConfig.seo.siteUrl}${image}`);

    // 4. Twitter Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", `${siteConfig.seo.siteUrl}${image}`);

    // 5. Canonical Link
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [fullTitle, description, keywords, image, type, canonicalUrl]);

  return null;
}

