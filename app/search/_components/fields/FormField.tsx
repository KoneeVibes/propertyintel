import Image, {StaticImageData} from "next/image";
import { ReactNode } from "react";

type FormFieldProps = {
  label?: string;
  htmlFor?: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
};

export function FormField({ label, htmlFor, required, error, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={htmlFor} className="text-small font-bold text-[#050B10]">
          {label}
          {required && <span className="text-[#FF0000]"> *</span>}
        </label>
      )}
      {children}
      {error && (
        <p className="text-small text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export type iconSrc = string | StaticImageData;

type FieldShellProps = {
  icon?: iconSrc;
  iconTone?: "neutral" | "accent";
  hasError?: boolean;
  className?: string;
  children: ReactNode;
};

export function FieldShell({
  icon,
  iconTone = "neutral",
  hasError,
  className = "",
  children,
}: FieldShellProps) {
  return (
    <div
      className={`relative flex h-13 items-stretch overflow-hidden rounded-lg border bg-white transition-colors focus-within:border-indigo-900 ${
        hasError ? "border-red-500" : "border-[#E4E7EC]"
      } ${className}`}
    >
      {icon && (
        <span
          className={`flex w-11 shrink-0 items-center justify-center ${
            iconTone === "accent"
              ? "bg-[#FEF1E8]"
              : "bg-[#EEEEEE]"
          }`}
        >
          <Image src={icon} alt="" width={18} height={18} />
        </span>
      )}
      {children}
    </div>
  );
}