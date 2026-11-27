import { Check } from "lucide-react";

type Steps = {
  id: number;
  title: string;
  description: string;
};

type SearchStepperProps = {
  steps: Steps[];
  current: number;
};

export function SearchStepper({ steps, current }: SearchStepperProps) {
  return (
    <div className="bg-[#F8FAFB] px-12 py-18 rounded-xl shadow-sm">
      <div className="text-[20px] text-[#0D333B] font-semibold max-w-42.5">
        Let&apos;s look closer
        <span className="text-[20px] text-primary font-semibold">
          {" "}
          at the property.
        </span>
      </div>

      <p className="text-[#989898] mt-3">
        Share what you know. Our team uses these details and supporting
        documents to begin a property due diligence request.
      </p>

      <div className="mt-8 flex flex-col gap-4">
        {steps.map((st, index) => {
          const isActive = st.id === current;
          const isLast = index === steps.length - 1;
          return (
       
              <div
                key={st.id}
                className={`relative border border-[#EAECF0] rounded-xl py-3 px-4 w-74 flex items-center gap-2 ${isActive ? "bg-[#F3F4F6]" : "bg-bg"}`}
              >
                <div
                  className={`h-4 w-4 flex items-center justify-center rounded-full ${isActive ? "bg-primary" : "bg-gray-300"}`}
                >
                  <Check size={11} className="text-bg" />
                </div>

                <div>
                  <p className="text-small text-[#4A5565] font-medium">
                    {st.title}
                  </p>
                  {st.description && (
                    <p className="text-[9px] text-[#4A5565] font-medium">
                      {st.description}
                    </p>
                  )}
                </div>

                 {!isLast && (
                <span
                  className={`absolute left-6 top-full h-4.25 w-px -translate-x-1/2 ${
                    isActive ? "bg-primary" : "bg-[#D0D5DD]"
                  }`}
                />
              )}
              </div>

             
           
          );
        })}
      </div>
    </div>
  );
}
