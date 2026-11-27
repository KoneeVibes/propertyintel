"use client";

import { useState } from "react";
import { SearchStepper } from "./SeachStepper";
import { StepParticulars } from "./StepParticulars";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema, SearchValues } from "@/schemas/search";

const steps = [
  {
    id: 1,
    title: "Particulars",
    description: "Tell us about the property",
  },
  { id: 2, title: "Cost Breakdown & Payment", description: "" },
  { id: 3, title: "Confirmation & Tracking", description: "" },
];

export function SearchFlow() {
  const [step, setStep] = useState(1);

  const methods = useForm<SearchValues>({
    resolver: zodResolver(searchSchema),
    mode: "onTouched",
    defaultValues: {
      applicantName: "",
      email: "",
      phone: "",
      state: "",
      lga: "",
      city: "",
      address: "",
      propertyType: undefined,
      titleClaims: [],
      purposeEnquiry: [],
      createAccount: true,
    },
  });

  const next = async () => {
    if (step === 1) {
      const valid = await methods.trigger();
      if (!valid) return;
    }
    setStep((s) => s + 1);
  };

  return (
    <FormProvider {...methods}>
      <div className="grid lg:grid-cols-[404px_1fr]">
        <SearchStepper steps={steps} current={step} />
        <div>{step === 1 && <StepParticulars onNext={next} />}</div>
      </div>
    </FormProvider>
  );
}
