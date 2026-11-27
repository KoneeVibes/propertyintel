import { ComponentProps } from "react";
import { ChevronDown } from "lucide-react";
import { FormField, FieldShell, iconSrc } from "./FormField";

type FieldSelectProps = ComponentProps<"select"> & {
  label?: string;
  icon?: iconSrc;
  iconTone?: "neutral" | "accent";
  error?: string;
  placeholder?: string;
};

export function FieldSelect({
  label,
  id,
  icon,
  iconTone,
  error,
  placeholder,
  required,
  className = "",
  children,
  ...props
}: FieldSelectProps) {
  return (
    <FormField label={label} htmlFor={id} required={required} error={error}>
      <FieldShell icon={icon} iconTone={iconTone} hasError={!!error} className={className}>
        <select
          id={id}
          required={required}
          defaultValue=""
          className="min-w-0 flex-1 cursor-pointer appearance-none bg-transparent border border-[#EBEBEB] pl-3 pr-10 text-sm outline-none invalid:text-gray-400"
          {...props}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {children}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-black"
        />
      </FieldShell>
    </FormField>
  );
}