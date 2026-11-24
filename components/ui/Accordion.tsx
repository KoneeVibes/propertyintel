"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpen?: number | null;
};

export function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="border-t border-[#BECAD8]">
      {items.map((item, i) => {
        const isOpen = open === i;

        return (
          <div key={item.question} className="border-b border-[#BECAD8]">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className={`flex w-full cursor-pointer items-center justify-between gap-4  text-left text-h3 font-semibold text-black ${isOpen ? "py-4" : "py-8"}`}
              >
                {item.question}
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </button>
            </h3>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out-expo ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-md pb-5 text-small text-text">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
