import type { Metadata, Viewport } from "next";
import { Syne, Fira_Code } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "SOULCLAWLIBUR // Persona Archive",
  description: "soul.md persona files for OpenClaw bots",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${firaCode.variable}`}>
      <body className="font-mono min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
