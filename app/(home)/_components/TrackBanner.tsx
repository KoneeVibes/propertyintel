import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import tracker from "../../../public/tracker.png";

export function TrackBanner() {
  return (
    <section className="px-5 py-8 sm:px-8 lg:px-22 relative w-full overflow-hidden bg-[#0029D3]">
      <div className="absolute inset-x-0 bottom-0 h-34 sm:h-80 lg:inset-0 lg:h-auto">
        <Image
          src={tracker}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom-right"
        />
      </div>

      <div className="relative z-10  flex min-h-95 max-w-275 py-8 lg:py-16">
        <div className="max-w-400">
          <p className="text-small font-bold tracking-wide text-tint">
            ALREADY STARTED?
          </p>

          <h2 className="my-6 text-h2  font-bold  text-[#9BC6FF]">
            Your search is in motion.
            <br />
            <span className="text-[#DCE2EB]">See where it stands.</span>
          </h2>

          <p className="mt-4 max-w-85 text-bg">
            Enter your tracking ID to view the latest status of your existing
            search.
          </p>

          <Button className="mt-7 rounded-lg bg-secondary px-6 py-3  font-medium transition hover:bg-[#1c0fa8] ">
            <span>Track a search</span>
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
