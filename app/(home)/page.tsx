import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "./_components/Hero";
import { Services } from "./_components/Services";
import { HowItWorks } from "./_components/HowItWorks";
import { LegalConsultancy } from "./_components/LegalConsultancy";
import { FAQ } from "./_components/FAQ";
import { FinalCTA } from "./_components/FinalCTA";
import { Footer } from "@/components/layout/Footer";
import { WhyPropertyIntel } from "./_components/WhyPropertyIntel";
import { TrackBanner } from "./_components/TrackBanner";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyPropertyIntel />
      <Services />
      <HowItWorks />
      <LegalConsultancy />
      <TrackBanner />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
