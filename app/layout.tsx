import "./globals.css";
import type { Metadata, Viewport } from "next";
import siteConfig from "@/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s — ${siteConfig.brokerName}`,
  },
  description: siteConfig.seo.defaultDescription,
};

// A separate `viewport` export is required — a `viewport` key nested inside
// `metadata` is unsupported in this Next.js version (it silently doesn't
// emit the tag, which is why the build previously warned about it on pages
// that redeclared it).
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
