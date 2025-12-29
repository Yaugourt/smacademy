import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingBar from "@/components/site/FloatingBar";
import BackToTop from "@/components/site/BackToTop";
import { reviewsSummary } from "@/data/reviews";
import CookieBanner from "@/components/site/CookieBanner";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smacademy.fr"),
  title: {
    default: "SM Academy – Centre de formation professionnelle à Nîmes (Gard) | Qualiopi",
    template: "%s | SM Academy Nîmes",
  },
  description:
    "Centre de formation Qualiopi à Nîmes (Gard, Occitanie). Formations SST, IRVE, Fibre optique D3, AIPR, Gestes & Postures, Pack Office et Formation de formateur. Financement OPCO et France Travail. Sessions courtes et certifiantes.",
  keywords: [
    "formation professionnelle Nîmes",
    "centre de formation Gard",
    "formation SST Nîmes",
    "formation IRVE Gard",
    "formation fibre optique Nîmes",
    "formation AIPR Gard",
    "Qualiopi Nîmes",
    "OPCO formation Gard",
    "France Travail formation Nîmes",
    "SM Academy",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://smacademy.fr/",
    siteName: "SM Academy",
    title: "SM Academy – Centre de formation professionnelle à Nîmes (Gard) | Qualiopi",
    description:
      "Centre de formation Qualiopi à Nîmes (Gard). Formations SST, IRVE, Fibre optique, AIPR, Gestes & Postures, Pack Office. Financement OPCO et France Travail.",
    images: [
      {
        url: "https://smacademy.fr/Logo_SMACADEMY.png",
        width: 800,
        height: 600,
        alt: "SM Academy - Centre de formation Nîmes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SM Academy – Centre de formation à Nîmes (Gard)",
    description:
      "Formations professionnelles certifiantes à Nîmes : SST, IRVE, Fibre optique, AIPR. Finançables OPCO et France Travail.",
    images: ["https://smacademy.fr/Logo_SMACADEMY.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "votre-code-verification-google",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                name: "SM Academy",
                url: "https://smacademy.fr",
                logo: "https://smacademy.fr/Logo_SMACADEMY.png",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "94 Avenue du Docteur Fleming",
                  addressLocality: "Nîmes",
                  addressRegion: "Occitanie",
                  postalCode: "30900",
                  addressCountry: "FR",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+33982774444",
                  contactType: "customer service",
                  availableLanguage: ["French"],
                },
                aggregateRating:
                  reviewsSummary?.rating && reviewsSummary?.total
                    ? {
                      "@type": "AggregateRating",
                      ratingValue: reviewsSummary.rating,
                      reviewCount: reviewsSummary.total,
                    }
                    : undefined,
              }),
            }}
          />
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "SM Academy",
                url: "https://smacademy.fr",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://smacademy.fr/?s={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              }),
            }}
          />
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "SM Academy",
                url: "https://smacademy.fr",
                image: "https://smacademy.fr/Logo_SMACADEMY.png",
                telephone: "+33982774444",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "94 Avenue du Docteur Fleming",
                  addressLocality: "Nîmes",
                  addressRegion: "Occitanie",
                  postalCode: "30900",
                  addressCountry: "FR",
                },
                hasMap: "https://www.google.com/maps?q=94%20Av.%20du%20Dr%20Fleming%2C%2030900%20N%C3%AEmes",
                areaServed: {
                  "@type": "AdministrativeArea",
                  name: "Gard",
                },
              }),
            }}
          />
          <Analytics />
          <Header />
          <main className="min-h-[60vh] pb-24 md:pb-0">{children}</main>
          <Footer />
          <FloatingBar />
          <BackToTop />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
