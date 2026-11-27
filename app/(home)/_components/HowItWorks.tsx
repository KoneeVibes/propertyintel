import {  ButtonLink } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";

export function HowItWorks() {
  const process = [
    {
      title: "Prepare legal documents",
      content:
        "Enter its location and details, then upload a survey plan or title documents if available.",
    },
    {
      title: "Confirm your request",
      content:
        "Complete payment and receive a request ID to keep track of your search.",
    },
    {
      title: "Follow the review",
      content:
        "See status updates while our team reviews documents and investigates relevant property records.",
    },
    {
      title: "Receive your report",
      content:
        "When the report is ready, you’ll receive a secure link to download it.",
    },
  ];
  return (
    <section
      className="bg-tint px-5 py-8 sm:px-8 lg:p-22 mt-10"
      id="howItWorks"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
        <div>
          <p className="text-[#B1B1B1] text-small font-bold">THE PROCESS</p>
          <h2 className="text-h2 text-surface font-bold my-6 max-w-md">
            A clear path from question to{" "}
            <span className="text-primary">report.</span>
          </h2>
          <p className="max-w-md ">
            Submitting a search starts a managed review. You can follow the case
            as our team works through it.
          </p>

          <ButtonLink href="/search" className="mt-10 font-medium px-13">
            <span>Start a search</span>
            <ChevronRight size={16} />
          </ButtonLink>
        </div>

        <div>
          {process.map((p) => (
            <div key={p.title} className="flex flex-col gap-1 mb-3">
              <h3 className={`text-h3 font-bold text-black`}>{p.title}</h3>

              <p className="max-w-md mb-2">{p.content}</p>
              <div className="border-[#BECAD8] border max-w-150" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
