import "@/styles/globals.css";
import { Metadata } from "next";
import { fontSans, fontHeading } from "./assets/fonts";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";


export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Institution",
    "SASS Platform",
    "Collge Management",
    "CMS",
    "School Management",
    "School",
    "College",
  ],
  authors: [
    {
      name: "Astreak",
      url: "https://astreak.in/",
    },
  ],
  publisher: "Astreak",
  openGraph: {
    image:{
      url: `${siteConfig.url}/og.jpg`,
      width: 1200,
      height: 630,
      alt: siteConfig.name,
    },
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    // images: [`${siteConfig.url}/og.jpg`],
    creator: "@theskaai",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
