import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import ProblemSection from "@/components/sections/ProblemSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import OfflineCalloutSection from "@/components/sections/OfflineCalloutSection";
import GuestModeSection from "@/components/sections/GuestModeSection";
import DownloadSection from "@/components/sections/DownloadSection";

export const metadata: Metadata = {
  title: "Getso — Stop buying four pints of milk",
  description:
    "Getso is the shared shopping list your household actually sticks to. Add items, see what your partner added, and tick things off together.",
  openGraph: {
    title: "Getso — Stop buying four pints of milk",
    description:
      "Getso is the shared shopping list your household actually sticks to.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <SocialProofSection />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorksSection />
        <OfflineCalloutSection />
        <GuestModeSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
