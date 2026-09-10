import "../globals.css";
import { Metadata } from "next";
import RecaptchaProvider from "@/components/providers/RecaptchaProvider";
import siteConfig from "@/siteConfig";
import Navbar from "@/components/layout/Navbar";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/layout/Footer";
import ContactFloat from "@/components/ui/ContactFloat";

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s — ${siteConfig.brokerName}`,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: [
    "real estate Egypt",
    "property Egypt",
    "buy property Hurghada",
    "apartments Sahl Hasheesh",
    "villa Red Sea Egypt",
    "investment Egypt",
    "El Gouna property",
    "Soma Bay real estate",
    "Egypt holiday home",
    siteConfig.brokerName,
  ],
  authors: [{ name: siteConfig.brokerName, url: siteConfig.seo.siteUrl }],
  creator: siteConfig.brokerName,
  publisher: siteConfig.brokerName,

  // ── Canonical & Robots ────────────────────────────────────
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph (Facebook, WhatsApp, LinkedIn) ─────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.brokerName,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.brokerName,
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [siteConfig.seo.ogImage],
  },

  // ── Icons ─────────────────────────────────────────────────
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  // ── Verification (add your codes from Google/Bing) ────────
  verification: {
    google: "ObyOV5UmPjPz3sJJgJHmpt8d6NJ5m4CLHRS9GuO2jT4",
  },
};

// This is a nested layout under the root layout in app/layout.tsx, which
// already renders <html>/<body> — it must not render them again. (It
// previously did, producing invalid nested-document markup; Next merges
// this `metadata` export with the root layout's automatically, no <head>
// tag needed either — and a `viewport` key isn't valid here, see the
// dedicated `viewport` export in app/layout.tsx.)
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD — Local Business structured data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: siteConfig.brokerName,
            description: siteConfig.seo.defaultDescription,
            url: siteConfig.seo.siteUrl,
            telephone: siteConfig.contact.phone,
            email: siteConfig.contact.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: siteConfig.contact.address,
              addressCountry: "EG",
            },
            openingHours: "Mo-Su 09:00-20:00",
            priceRange: "EGP 1,000,000 — EGP 20,000,000",
            areaServed: [
              "El Gouna",
              "Hurghada",
              "Makadi Heights",
              "Makadina",
              "Sahl Hasheesh",
              "Soma Bay",
              "Ras Soma Travco",
            ],
          }),
        }}
      />
      <RecaptchaProvider>
        <Navbar />
        <main>{children}</main>
        <CtaBanner />
        <Footer />
        <ContactFloat />
      </RecaptchaProvider>
    </>
  );
}
