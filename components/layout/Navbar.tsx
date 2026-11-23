import Image from "next/image";
import logo from "../../public/logo.png";
import { Button } from "../ui/Button";

const navItems = [
  { label: "Why PropertyIntel", href: "#whyPropertyIntel" },
  { label: "How it works", href: "#howItWorks" },
  { label: "Legal documents", href: "#legalDocuments" },
  { label: "Track a search", href: "#trackSearch" },
];

export function Navbar() {
  return (
    <header className="relative top-0 z-40 border-b border-border py-3 px-22 ">
      <div className="flex items-center gap-50">
        <div>
          <Image src={logo} alt="Property intel logo" />
        </div>
        <div className="flex items-center gap-30">
          <nav className="flex items-center gap-12">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="link-underline text-[#0E100F] font-medium">
                {item.label}
              </a>
            ))}
          </nav>
          <Button>Start a Search</Button>
        </div>
      </div>
    </header>
  );
}
