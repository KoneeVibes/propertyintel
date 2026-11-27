import { ComponentProps } from "react";
import { FormField, FieldShell, iconSrc } from "./FormField";

type FieldInputProps = ComponentProps<"input"> & {
  label?: string;
  icon?: iconSrc;
  iconTone?: "neutral" | "accent";
  error?: string;
};

export function FieldInput({
  label,
  id,
  icon,
  iconTone,
  error,
  required,
  className = "",
  ...props
}: FieldInputProps) {
  return (
    <FormField label={label} htmlFor={id} required={required} error={error}>
      <FieldShell
        icon={icon}
        iconTone={iconTone}
        hasError={!!error}
        className={className}
      >
        <input
          id={id}
          required={required}
          className="min-w-0 flex-1 bg-transparent border border-[#EBEBEB] px-3  text-small outline-none placeholder:text-gray-400"
          {...props}
        />
      </FieldShell>
    </FormField>
  );
}
