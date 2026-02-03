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
  metadataBase: new URL("https://soulclawlibur.com"), // Update with your production URL
  title: "SOULCLAWLIBUR // Persona Archive",
  description: "soul.md persona files for OpenClaw bots",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "SOULCLAWLIBUR // Persona Archive",
    description: "soul.md persona files for OpenClaw bots",
    url: "/",
    siteName: "SOULCLAWLIBUR",
    images: [
      {
        url: "/og-image.png",
        width: 1920,
        height: 1080,
        alt: "SOULCLAWLIBUR - Persona Archive for OpenClaw Bots",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOULCLAWLIBUR // Persona Archive",
    description: "soul.md persona files for OpenClaw bots",
    images: ["/og-image.png"],
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
