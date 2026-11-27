import { Navbar } from "@/components/layout/Navbar";

const searchNav = [
  { label: "Home", href: "/" },
  { label: "Contact Us", href: "/contact" },
];

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar
        items={searchNav}
        cta={{ label: "Track a search", href: "/track" }}
      />
      {children}
    </>
  );
}
