import Image from "next/image";
import legal from "../../../public/legal.png";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";

export function LegalConsultancy() {
  const docs = [
    { label: "Discuss your findings" },
    { label: "Understand your options" },
    { label: "Plan the next step" },
  ];
  return (
    <section
      className="px-5 py-8 mt-10 mb-6 sm:px-8 lg:px-22 lg:mt-18 lg:mb-10"
      id="legalConsultancy"
    >
      <div className="grid grid-cols-1 gap-13 lg:gap-25 lg:grid-cols-[4fr_6fr]">
        <div className="relative min-h-72 sm:min-h-96 lg:min-h-80 overflow-hidden rounded-xl">
          <Image
            src={legal}
            alt=""
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-[#B1B1B1] text-small font-bold uppercase">
            beyond the report
          </p>
          <h2 className="text-h2 text-secondary font-bold">
            Understand your options.
            <span className="text-primary"> Know your next step.</span>
          </h2>

          <p className="max-w-md">
            Have questions about a property or the findings in your report?
            Reach out to Capstone for a legal consultation. Our team can discuss
            your situation, advise you on how to move forward, and explain what
            documents or other steps may be needed for your transaction.
          </p>
          <div className="flex items-center gap-2 flex-wrap max-w-200">
            {docs.map((d) => (
              <div
                key={d.label}
                className="flex items-center justify-center rounded-xl bg-primary/25 py-3 px-4 sm:px-8 lg:px-12"
              >
                <span className="text-primary font-bold">{d.label}</span>
              </div>
            ))}
          </div>

          <p className="text-[#767676] max-w-md text-small">
            You can contact us after submitting a search or once you have received your report.
          </p>

          <Button className="font-medium w-65">
            <span>Contact Capstone</span>
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
