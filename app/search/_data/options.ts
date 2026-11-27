import { ChoiceOption } from "../_components/fields/ChoiceGroup";

export const propertyOptions: ChoiceOption[] = [
  { value: "land", label: "Land", hint: "Undeveloped" },
  { value: "building", label: "Building", hint: "Residential" },
  { value: "commercial", label: "Commercial", hint: "Office / retail" },
];

export const titleClaimOptions: ChoiceOption[] = [
  { value: "certificate-of-occupancy", label: "Certificate of Occupancy" },
  { value: "right-of-occupancy", label: "Right of occupancy" },
  { value: "deed-of-assignment", label: "Deed of Assignment" },
  { value: "power-of-attorney", label: "Power of Attorney" },
  { value: "not-sure", label: "Not sure / seller hasn't said" },
];


export const enquiryOptions: ChoiceOption[] = [
  { value: "due-diligence", label: "Due Diligence", hint: "Verify ownership and property documents" },
  { value: "physical-inspection", label: "Physical Inspection", hint: "Verify the property's physical condition and details" },
];
