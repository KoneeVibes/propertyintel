import { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export function Textarea({ label, id, className = "", ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-[#344054] text-small font-plus font-medium">
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={5}
        className={`min-h-36 resize-none rounded-md border border-[#D0D5DD] px-4 py-3 placeholder:text-gray-400 focus:border-indigo-900 focus:outline-none ${className}`}
        {...props}
      />
    </div>
  );
}