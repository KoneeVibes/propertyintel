import { ComponentProps } from "react";
import { Check } from "lucide-react";

type CheckboxFieldProps = Omit<ComponentProps<"input">, "type"> & {
  label: string;
  description?: string;
};

export function CheckboxField({
  label,
  description,
  className = "",
  ...props
}: CheckboxFieldProps) {
  return (
    <label
      className={`flex cursor-pointer items-start gap-4 rounded-xl bg-[#F9F9F9] px-6 py-3 ${className}`}
    >
      <span className="relative mt-0.5 shrink-0">
        <input type="checkbox" className="peer sr-only" {...props} />
        <span className="flex size-5 items-center justify-center rounded border border-[#D0D5DD] bg-white transition-colors peer-checked:border-[#404443] peer-checked:bg-[#404443] peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40" />
        <Check
          className="pointer-events-none absolute inset-0 m-auto size-3.5 text-white opacity-0 peer-checked:opacity-100"
        />
      </span>

      <span className="flex flex-col gap-1">
        <span className="text-[13px] font-semibold text-[#2A2A2A]">{label}</span>
        {description && (
          <span className="max-w-sm text-[11px] text-[#818181]">{description}</span>
        )}
      </span>
    </label>
  );
}