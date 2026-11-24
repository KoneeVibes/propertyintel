import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "./_components/Hero";
import { Services } from "./_components/Services";
import { HowItWorks } from "./_components/HowItWorks";
import { LegalDocuments } from "./_components/LegalDocuments";


export default function Home() {
  return (
   <main>
    <Navbar />
    <Hero />
    <Services />
    <HowItWorks />
    <LegalDocuments />
   </main>
  );
}
