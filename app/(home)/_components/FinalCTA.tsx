import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-tint flex flex-col gap-6 items-center justify-center py-28">
      <p className="text-surface font-bold text-small uppercase">
        Good to know
      </p>
      <h1 className="text-h1 font-semibold text-surface max-w-250 text-center">
        Make your next property decision with a clearer picture.
      </h1>
      <div className="flex items-center gap-4">
        <Button>
          <span>Start a search</span>
          <ChevronRight size={16} />
        </Button>
        <Button variant="outline">Track an existing search</Button>
      </div>
    </section>
  );
}
