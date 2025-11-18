import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingBar from "@/components/site/FloatingBar";
import BackToTop from "@/components/site/BackToTop";
import { reviewsSummary } from "@/data/reviews";
import CookieBanner from "@/components/site/CookieBanner";

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
    default: "SM Academy – Centre de formation à Nîmes (Qualiopi)",
    template: "%s · SM Academy",
  },
  description:
    "Formations professionnelles à Nîmes: SST, IRVE, Fibre optique, Gestes & Postures, Pack Office, Formation de formateur.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://smacademy.fr/",
    siteName: "SM Academy",
    title: "SM Academy – Centre de formation à Nîmes (Qualiopi)",
    description:
      "Formations professionnelles à Nîmes: SST, IRVE, Fibre optique, Gestes & Postures, Pack Office, Formation de formateur.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "SM Academy",
              url: "https://smacademy.fr",
              logo: "https://smacademy.fr/wp-content/uploads/2024/09/logo-sma.png",
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
              image: "https://smacademy.fr/wp-content/uploads/2024/09/logo-sma.png",
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
        <Header />
        <main className="min-h-[60vh] pb-24 md:pb-0">{children}</main>
        <Footer />
        <FloatingBar />
        <BackToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
