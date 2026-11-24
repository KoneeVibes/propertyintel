import Image from "next/image";
import { ChevronRight } from "lucide-react";
import ideaBanner from "../../../public/idea-banner.png";
import { Button } from "@/components/ui/Button";

export function WhyPropertyIntel() {
  return (
    <section className="px-5 py-8 sm:px-8 lg:px-22 lg:py-16" id="whyPropertyIntel">
      <div className="relative mx-auto max-w-475 overflow-hidden rounded-[28px] bg-[#0A7CFF]">
        <Image
          src={ideaBanner}
          alt=""
          fill
          priority
          sizes="(min-width: 1100px) 1100px, 100vw"
          className="h-70 w-full object-cover object-left md:h-auto"
        />

        <div className="relative z-10 grid min-h-105 items-center md:min-h-88 md:grid-cols-[0.9fr_1.1fr]">
          <div aria-hidden className="hidden md:block" />

          <div className="px-6 pb-10 pt-75 sm:px-10 md:py-12 md:pl-0 md:pr-14">
            <p className="text-small font-bold tracking-wide text-bg/40">
              THE IDEA
            </p>

            <h2 className="mt-3 text-3xl text-bg font-bold leading-tight sm:text-[34px]">
              Property decisions deserve
              <br />
              <em className="italic">more than guesswork.</em>
            </h2>

            <p className="mt-4 max-w-115 leading-relaxed text-[#DCDCDC]">
              PropertyIntel brings your request, supporting documents, progress
              updates, and final report into one clear journey. Our team
              investigates the information relevant to the property so you can
              review the findings before your next move.
            </p>

            <Button className="bg-secondary rounded-xl py-6 px-10 mt-5 font-medium transition hover:bg-[#1c0fa8]">
              <span>Start a search</span>
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}



