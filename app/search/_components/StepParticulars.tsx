"use client";

import { Button } from "@/components/ui/Button";
import { FieldInput } from "./fields/FieldInput";
import callAdd from "../../../public/call-add.png";
import mail from "../../../public/mail.png";
import orangeCity from "../../../public/orange-city.png";
import orangeOffice from "../../../public/orange-office.png";
import city from "../../../public/city.png";
import { FieldSelect } from "./fields/FieldSelect";
import { ChoiceGroup } from "./fields/ChoiceGroup";
import {
  propertyOptions,
  enquiryOptions,
  titleClaimOptions,
} from "../_data/options";
import { DocumentUpload } from "./fields/DocumentUpload";
import { CheckboxField } from "./fields/CheckboxField";
import { useFormContext } from "react-hook-form";
import { SearchValues } from "@/schemas/search";

export function StepParticulars({ onNext }: { onNext: () => void }) {
   const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<SearchValues>();
  return (
    <div className="flex flex-col gap-10 px-16 py-19">
      <div>
        <p className="text-[11px] font-extrabold text-[#464646] uppercase">
          Start a search
        </p>

        <div className="border border-b border-[#D8DFD4] my-4" />

        <h3 className="text-h3 text-black font-bold">Tell us what to search</h3>

        <p className="font-semibold text-small">
          Kindly enter the applicant(s) information
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <FieldInput
          label="Applicant Name"
          id="applicantName"
          required
          icon={orangeOffice}
          iconTone="accent"
          placeholder="Enter applicant name"
          {...register("applicantName")}
          error={errors.applicantName?.message}
        />

        <FieldInput
          label="Email Address"
          id="email"
          type="email"
          required
          icon={mail}
          placeholder="Enter applicant email"
          {...register("email")}
          error={errors.email?.message}
        />

        <FieldInput
          label="Phone number"
          id="phone"
          type="tel"
          required
          icon={callAdd}
          placeholder="Enter applicant phone"
          {...register("phone")}
          error={errors.phone?.message}
        />

        <p className="text-small mt-3">Where is the property</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FieldSelect
            label="State"
            id="state"
            required
            icon={city}
            placeholder="Select state where property is located"
               error={errors.state?.message}
        {...register("state")}
          ></FieldSelect>

          <FieldSelect
            label="Local Govt. (LGA)"
            id="lga"
            required
            icon={city}
            placeholder="Select local government where property is located"
               error={errors.lga?.message}
        {...register("lga")}
          ></FieldSelect>
        </div>

        <FieldSelect
          label="City"
          id="city"
          required
          icon={orangeCity}
          iconTone="accent"
          placeholder="Select city where property is located"
             error={errors.city?.message}
        {...register("city")}
        >
          <option value="ikeja">Ikeja</option>
          <option value="lekki">Lekki</option>
        </FieldSelect>

        <FieldInput
          label="Address or description"
          id="address"
          required
          placeholder="Enter address of property"
          {...register("address")}
          error={errors.address?.message}
        />
      </div>

      <div>
        <p className="text-small mb-5">What is being sold</p>

        <div className="flex flex-col gap-6">
          <ChoiceGroup
            name="propertyType"
            label="Means of identification"
            required
            options={propertyOptions}
            columns={3}
          />

          <ChoiceGroup
            name="titleClaims"
            label="Title the seller claims"
            required
            multiple
            columns={1}
            exclusiveValue="not-sure"
            options={titleClaimOptions}
          />

          <ChoiceGroup
            name="purposeInquiry"
            label="Purpose of Inquiry"
            required
            multiple
            columns={2}
            options={enquiryOptions}
          />
        </div>

        <p className="text-small mt-3 mb-5">Document you already have</p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <DocumentUpload
            name="surveyPlan"
            label="Survey Plan"
            hint="Survey Plan, Beacon Certificate, Surveyor's Report"
          />
          <DocumentUpload
            name="titleDocument"
            label="Title Deocuments"
            hint="C of O, deed, receipts"
          />
        </div>
      </div>

      <CheckboxField
        label="Create an account to track this search"
        description="We'll use the email and phone above. More information will be communicated after payment."
        {...register("createAccount")}
      />

      <Button onClick={onNext} className="rounded-xl py-7 mb-20">See the Price</Button>
    </div>
  );
}
