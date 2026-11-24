import search from "../../../public/search.png";
import doc from "../../../public/doc.png";
import compass from "../../../public/Compass.png";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Services() {
  const services = [
    {
      id: 1,
      icon: search,
      title: "Search a propery",
      content:
        "Share the location, property type, title details, and any documents you have. We’ll review the information and carry out the requested due diligence.",
      textLink: "Search a property",
    },
    {
      id: 2,
      icon: compass,
      title: "Track your search",
      content:
        "Use your email or request ID to see your current stage, from request received through review, due diligence, and report ready.",
      textLink: "Track a search",
    },
    {
      id: 3,
      icon: doc,
      title: "Get legal guidance",
      content:
        "Speak with Capstone about your findings and the legal steps that may come next for your property transaction.",
      textLink: "Explore documents",
    },
  ];
  return (
    <section className="px-5 py-8 sm:px-8 lg:p-22">
      <div className="mb-4">
        <h2 className="text-h2 text-surface font-bold">One Place to Move</h2>
        <h2 className="text-h2 text-surface font-bold italic">
          Your property plans forward
        </h2>
      </div>

      <p className="max-w-md text-body">
        Whether you are checking a property or preparing transaction documents,
        the process starts here
      </p>

      <div className="grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3 my-16">
        {services.map((sr) => (
          <div
            key={sr.id}
            className={` py-9 px-4 rounded-xl ${sr.id == 2 ? "bg-primary" : "bg-tint"}`}
          >
            <div className="bg-[#C9E1FF] rounded-full flex size-20 items-center justify-center">
              <Image
                src={sr.icon}
                alt={sr.title}
                className="size-8 object-contain"
              />
            </div>

            <h3
              className={`${sr.id == 2 ? "text-bg" : "text-black"} text-h3 font-bold mt-4`}
            >
              {sr.title}
            </h3>

            <p
              className={`${sr.id == 2 ? "text-[#E1EEFF]" : "text-text"} my-3`}
            >
              {sr.content}
            </p>

            <Link
              href="/"
              className={`font-medium flex items-center gap-2 ${sr.id == 2 ? "text-tint" : "text-primary"}`}
            >
              <span>{sr.textLink}</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
