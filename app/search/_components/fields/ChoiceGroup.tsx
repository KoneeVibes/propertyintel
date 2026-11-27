"use client";

import { Controller, useFormContext } from "react-hook-form";

const columnClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4",
} as const;

export type ChoiceOption = {
  value: string;
  label: string;
  hint?: string;
};

type ChoiceGroupProps = {
  name: string;
  label?: string;
  required?: boolean;
  options: ChoiceOption[];
  multiple?: boolean;
  exclusiveValue?: string;
  columns: 1 | 2 | 3 | 4;
};

export function ChoiceGroup({
  name,
  label,
  required,
  options,
  multiple = false,
  exclusiveValue,
  columns,
}: ChoiceGroupProps) {
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
        const selected: string[] = multiple
          ? Array.isArray(field.value)
            ? field.value
            : []
          : field.value
            ? [field.value]
            : [];

        const hasOthers = selected.some((v) => v !== exclusiveValue);

        const handleToggle = (value: string) => {
          if (!multiple) return field.onChange(value);

          if (selected.includes(value)) {
            return field.onChange(selected.filter((v) => v !== value));
          }
          field.onChange([
            ...selected.filter((v) => v !== exclusiveValue),
            value,
          ]);
        };

        return (
          <fieldset className="flex flex-col gap-2">
            {label && (
              <legend className="mb-2 text-small font-semibold text-[#050B10]">
                {label}
                {required && <span className="text-[#FF0000]"> *</span>}
              </legend>
            )}

            <div className={`grid ${columnClasses[columns]} gap-3`}>
              {options.map((o) => {
                const checked = selected.includes(o.value);
                const disabled =
                  multiple && o.value === exclusiveValue && hasOthers;

                return (
                  <label
                    key={o.value}
                    className={
                      disabled ? "cursor-not-allowed" : "cursor-pointer"
                    }
                  >
                    <input
                      type={multiple ? "checkbox" : "radio"}
                      name={name}
                      value={o.value}
                      checked={checked}
                      disabled={disabled}
                      onChange={() => handleToggle(o.value)}
                      onBlur={field.onBlur}
                      className="peer sr-only"
                    />
                    <div className="rounded-lg border border-[#EBEBEB] bg-white p-4 transition-colors peer-checked:border-primary peer-checked:bg-primary/5 peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40 peer-disabled:opacity-50">
                      <p className="text-[13px] font-bold text-[#3B3B3B]">
                        {o.label}
                      </p>
                      {o.hint && <p className="text-meta">{o.hint}</p>}
                    </div>
                  </label>
                );
              })}
            </div>

            {error && (
              <p role="alert" className="text-small text-red-500">
                {error}
              </p>
            )}
          </fieldset>
        );
      }}
    />
  );
}
