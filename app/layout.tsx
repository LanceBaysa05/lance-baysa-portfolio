import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Lance Baysa | Computer Engineering Portfolio",
  description: "Portfolio of Lance Baysa, a Computer Engineering student with experience in aerospace quality, automation, data analysis and embedded systems.",
  openGraph: {
    title: "Lance Baysa | Computer Engineering Portfolio",
    description: "Computer Engineering · Automation · Data",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Lance Baysa — Computer Engineering, Automation and Data" }],
  },
  twitter: { card: "summary_large_image", title: "Lance Baysa | Computer Engineering Portfolio", description: "Computer Engineering · Automation · Data", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
