import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};
export function Input({ label, id, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && <p className="text-[#344054] text-small font-plus font-medium">{label}</p>}

      <input
        id={id}
        className={`h-11 border border-[#D0D5DD] rounded-md px-4 placeholder:text-gray-400 focus:border-indigo-900 focus:outline-none ${className}`}
        {...props}
      />
    </div>
  );
}
