import Image from "next/image";
import hero from "../../../public//hero.png";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className=" pl-22 grid grid-cols-1 lg:grid-cols-2  items-center gap-8">
      <div className="flex flex-col gap-30">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-8 ">
            <div className="text-[#2783FC] bg-tint rounded-sm py-2 px-1 w-50 text-center font-semibold text-meta">
              Propery due diligence in Nigeria
            </div>
            <h1 className="text-h1 font-bold text-surface">
              Know the property.
              <br />
              Move with <span className="text-primary">clarity.</span>
            </h1>

            <p className="max-w-md text-body text-text">
              Before you buy or invest, get a clearer picture of the property in
              front of you. Submit the details online, follow the review, and
              receive a due diligence report from our team.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button>
              <span>Start a search</span>
              <ArrowRight size={10} />
            </Button>
            <Button variant="outline">Track an existing search</Button>
          </div>
        </div>

        <div className="text-black font-medium">
          <span className="text-primary">© </span> A guided process from request
          to report
        </div>
      </div>

      <div>
        <Image
          src={hero}
          alt="Hero image"
          priority
          className="h-full w-full  object-cover"
        />
      </div>
    </section>
  );
}
