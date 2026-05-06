import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Getso — The shared shopping list",
  description:
    "Stop buying four pints of milk. Getso is the shared shopping list your household actually sticks to.",
  metadataBase: new URL("https://getso.app"),
  openGraph: {
    title: "Getso — The shared shopping list",
    description:
      "Stop buying four pints of milk. Getso is the shared shopping list your household actually sticks to.",
    url: "https://getso.app",
    siteName: "Getso",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={poppins.variable}>
      <head>
        {/* Plausible analytics — cookieless, GDPR-compliant, no consent banner needed */}
        <script
          defer
          data-domain="getso.app"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
