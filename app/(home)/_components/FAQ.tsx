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
      "A survey plan and any available title documents are useful. You can submit the information you have when starting the request.",
  },
  {
    question: "How will I get the report?",
    answer:
      "When the report is ready, we’ll notify you and provide a secure download link.",
  },
  {
    question: "Can I get legal guidance afterward?",
    answer:
      "Yes. Contact Capstone to discuss your property or report findings and get advice on the legal steps that may come next.",
  },
];

export function FAQ() {
  return (
    <section className="px-5 py-8 sm:px-8 lg:px-22 mt-15 lg:mt-25 mb-15">
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
