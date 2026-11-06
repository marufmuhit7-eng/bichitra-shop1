import type { Metadata } from "next";
import { Hind_Siliguri, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Noto_Serif_Bengali({ subsets: ["bengali", "latin"], weight: ["700", "800"], variable: "--font-display", display: "swap" });
const body = Hind_Siliguri({ subsets: ["bengali", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: { default: "বিচিত্রা শপ | সবার জন্য একটি বাজার", template: "%s | বিচিত্রা শপ" },
  description: "স্বাধীন বিক্রেতাদের দোকান থেকে কিনুন, কোনো বিক্রয় কমিশন ছাড়া নিজের দোকান খুলুন।",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn" className={`${display.variable} ${body.variable}`}>
      <body>
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
