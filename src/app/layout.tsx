import type { Metadata, Viewport } from "next";
import { Cairo, Montserrat } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nameAr} | ${site.nameEn} — ${site.taglineAr}`,
    template: `%s | ${site.nameAr}`,
  },
  description: site.description,
  keywords: [
    "دلتا سمارت سيستم",
    "Delta Smart System",
    "تكنولوجيا المعلومات",
    "تطوير البرمجيات",
    "تطوير تطبيقات",
    "شبكات",
    "نظم مدمجة",
    "رقمنة",
    "الإسماعيلية",
  ],
  openGraph: {
    type: "website",
    locale: "ar_EG",
    siteName: site.nameEn,
    title: `${site.nameAr} | ${site.nameEn}`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#030b1c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${montserrat.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
