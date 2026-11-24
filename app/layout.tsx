import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#fff5f8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "CareerFlow — Modern Job Application Tracker & Career Pipeline",
  description:
    "Organize applications, master interview stages, track offers, and land your dream role with clarity and confidence.",
  keywords: [
    "job tracker",
    "application tracker",
    "career pipeline",
    "ATS resume checker",
    "interview notes",
    "salary compensation calculator",
  ],
  authors: [{ name: "CareerFlow Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{ colorScheme: "light" }}
      className={`${geistSans.variable} ${geistMono.variable} light h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-pink-300/50 selection:text-pink-950">
        {children}
      </body>
    </html>
  );
}
