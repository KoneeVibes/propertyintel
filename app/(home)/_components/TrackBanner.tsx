import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import tracker from "../../../public/tracker.png"

export function TrackBanner() {
  return (
    <section className="px-5 py-8 sm:px-8 lg:px-22 relative w-full overflow-hidden">
      <Image
        src={tracker}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-bottom-right"
      />


      <div className="relative z-10  flex min-h-[380px] max-w-[1100px] py-8 lg:py-16">
        <div className="max-w-400">
          <p className="text-small font-bold tracking-wide text-tint">
            ALREADY STARTED?
          </p>

          <h2 className="my-6 text-h2  font-bold  text-[#9BC6FF]">
            Your search is in motion.
            <br />
            <span className="text-[#DCE2EB]">See where it stands.</span> 
          </h2>

          <p className="mt-4 max-w-[340px] text-bg">
            Enter your tracking ID to view the latest status of your existing
            search.
          </p>

          <Button

            className="mt-7 rounded-lg bg-secondary px-6 py-3  font-medium transition hover:bg-[#1c0fa8] "
          >
            <span>Track a search</span>
            <ChevronRight size={16}/>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Usage ----------
 *
 * <Hero />
 * <IdeaBanner />
 * <TrackBanner />   // or place it lower if you want other content in between
 * <Services />
 */
