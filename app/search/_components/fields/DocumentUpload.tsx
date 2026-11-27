"use client";

import { Controller, useFormContext } from "react-hook-form";
import { Upload, FileText, X } from "lucide-react";

type DocumentUploadProps = {
  name: string;
  label: string;
  hint?: string;
};

export function DocumentUpload({ name, label, hint }: DocumentUploadProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const error = errors[name]?.message as string | undefined;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const file: File | undefined = field.value;

        return (
          <div className="flex flex-col gap-2">
            <p className="text-small font-bold text-[#050B10]">{label}</p>

            {file ? (
              <div className="flex items-center gap-3 rounded-xl border border-[#EBEBEB] bg-white p-4">
                <FileText className="size-5 shrink-0 text-primary" />
                <p className="min-w-0 flex-1 truncate text-sm font-medium text-[#344054]">
                  {file.name}
                </p>
                <button
                  type="button"
                  aria-label={`Remove ${file.name}`}
                  onClick={() => field.onChange(undefined)}
                  className="cursor-pointer rounded-full p-1 text-[#667085] hover:bg-gray-100"
                >
                  <X className="size-4" />
                </button>
              </div>
            ) : (
              <label className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-dashed border-[#DEDEDE] bg-[#FCFCFC] px-4 py-8 text-center has-focus-visible:ring-2 has-focus-visible:ring-primary/40">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="sr-only"
                  onBlur={field.onBlur}
                  onChange={(e) => {
                    const picked = e.target.files?.[0];
                    if (picked) field.onChange(picked);
                    e.target.value = "";
                  }}
                />
                <Upload className="size-7 text-[#050B10]" />
                <p className="text-sm font-semibold text-[#050B10]">
                  Click to upload/re-upload
                </p>
                <p className="text-[10px] text-[#98A2B3]">
                  PDF, JPG, JPEG, PNG less than 10MB
                </p>
              </label>
            )}

            {error && (
              <p className="text-small text-red-500">
                {error}
              </p>
            )}
            {hint && !error && <p className="text-[10.5px] text-[#9F9F9F]">{hint}</p>}
          </div>
        );
      }}
    />
  );
}