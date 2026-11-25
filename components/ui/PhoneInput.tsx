"use client";

import { InputHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type PhoneInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const countries = [
  { code: "+234", currency: "NGN" },
  { code: "+233", currency: "GHS" },
  { code: "+1", currency: "USD" },
];

export function PhoneInput({
  label,
  id,
  className = "",
  ...props
}: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="text-[#344054] text-small font-plus font-medium"
        >
          {label}
        </label>
      )}

      <div
        className={`flex h-11 items-center rounded-md border border-[#D0D5DD] focus-within:border-indigo-900 ${className}`}
      >
        <div className="relative h-full">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-full items-center gap-2 px-4 text-[#344054] outline-none"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
          >
            {selectedCountry.currency}
            <ChevronDown className="size-4 text-gray-500" />
          </button>

          {isOpen && (
            <div
              role="listbox"
              className="absolute left-0 top-full z-50 mt-1 min-w-full overflow-hidden rounded-md border border-[#D0D5DD] bg-white shadow-lg"
            >
              {countries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  role="option"
                  aria-selected={selectedCountry.code === country.code}
                  onClick={() => {
                    setSelectedCountry(country);
                    setIsOpen(false);
                  }}
                  className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                    selectedCountry.code === country.code
                      ? "bg-blue-600 text-white hover:bg-blue-600"
                      : "text-[#344054]"
                  }`}
                >
                  {country.currency}
                </button>
              ))}
            </div>
          )}
        </div>

        <input
          id={id}
          type="tel"
          className="h-full min-w-0 flex-1 bg-transparent px-3 outline-none placeholder:text-gray-400"
          {...props}
        />
      </div>
    </div>
  );
}
