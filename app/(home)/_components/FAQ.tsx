import { Accordion } from "@/components/ui/Accordion";

const faqs = [
  {
    question: "Is a property search instant?",
    answer:
      "Enter its location and details, then upload a survey plan or title documents if available.",
  },
  {
    question: "What documents should I upload?",
    answer:
      "Upload any property documents you have, such as a survey plan, title document, deed of assignment, or contract of sale. If you're not sure what applies, submit what you have and the team will tell you what else is needed.",
  },
  {
    question: "How will I get the report?",
    answer:
      "Once the review is complete, your due diligence report is delivered to the email you provided. You can also use your email or request ID on the Track a search page to follow progress.",
  },
  {
    question: "Can I request legal documents too?",
    answer:
      "Yes. After submitting a verification request or receiving your report, you can ask for legal documentation assistance. You'll provide the transaction details, review a draft, and receive the final document when it's ready.",
  },
];

export function FAQ() {
  return (
    <section className="px-22 mt-25 mb-15">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[4fr_6fr]">
        <div>
          <p className="text-meta font-bold uppercase text-[#B1B1B1]">
            Good to know
          </p>
          <h2 className="mt-2 text-h2 font-bold text-surface">
            Questions before you begin?
          </h2>
        </div>

        <Accordion items={faqs} />
      </div>
    </section>
  );
}