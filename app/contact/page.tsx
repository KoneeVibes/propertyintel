import { FinalCTA } from "@/components/sections/FinalCTA";
import { ContactForm } from "./_components/ContactForm";
import { ContactInfo } from "./_components/ContactInfo";

export default function Contact() {
  return (
    <main>
      <section className="px-5 pt-12 pb-12 sm:px-8 sm:pt-14 lg:px-22 lg:pt-18 grid w-full max-w-360 lg:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </section>
      <FinalCTA />
    </main>
  );
}
