import { Navbar } from "@/components/layout/Navbar";

const homeNav = [
  { label: "Why PropertyIntel", href: "/#whyPropertyIntel" },
  { label: "How it works", href: "/#howItWorks" },
  { label: "Legal consultancy", href: "/#legalConsultancy" },
  { label: "Contact Us", href: "/contact" },
  { label: "Track a search", href: "#trackSearch" },
];

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar items={homeNav} cta={{ label: "Start a search", href: "/search" }} />
      {children}
    </>
  );
}
