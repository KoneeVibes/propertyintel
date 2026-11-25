import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { Textarea } from "@/components/ui/Textarea";

export function ContactForm() {
  return (
    <div  className="w-full max-w-120">
      <div className="flex flex-col gap-4 lg:gap-10">
        <h2 className="text-h2 text-[#131313]">Get in touch</h2>
        <p className="font-plus">
          We’d love to hear from you. Please fill out this form.
        </p>
      </div>
      <form className="my-6 flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-5  sm:grid-cols-2">
          <Input
            label="First name"
            id="firstName"
            placeholder="First name"
            required
            className="w-full shadow-sm"
          />
          <Input
            label="Last name"
            id="lastName"
            placeholder="Last name"
            required
             className="w-full shadow-sm"
          />
        </div>
        <Input
          label="Email"
          id="email"
          type="email"
          placeholder="you@company.com"
          required
          className="shadow-sm w-full "
        />

        <PhoneInput
          label="Phone number"
          id="phoneNumber"
          placeholder="+234 (080) 000-0000"
          className="shadow-sm w-full "
        />

        <Textarea
          label="Message"
          id="message"
          placeholder="Leave us a message..."
          className="w-full "
        />

        <div className="flex items-center gap-3">
          <Input type="checkbox" />
          <label className="font-plus text-[#475467]">
            You agree to our friendly privacy policy.
          </label>
        </div>

        <Button className="bg-secondary w-full  rounded-xl hover:bg-[#1c0fa8]">Send Message</Button>
      </form>
    </div>
  );
}
