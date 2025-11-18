import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' https://smacademy.fr data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://api.resend.com https://api.calendly.com",
  "frame-src https://www.google.com https://maps.google.com https://calendly.com",
  "frame-ancestors 'self'",
].join("; ");

const nextConfig: NextConfig = {
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        ...securityHeaders,
        { key: "Content-Security-Policy", value: csp },
      ],
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "smacademy.fr",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
