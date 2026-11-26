"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { Textarea } from "@/components/ui/Textarea";
import { contactSchema, ContactFormValues } from "@/schemas/contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

const FieldError = ({ message }: { message?: string }) =>
  message ? <p className="mt-1 text-small text-red-500">{message}</p> : null;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      agree: false,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("idle");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phoneNumber,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY!,
      );
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      console.error(err);
    }
  };

  useEffect(() => {
    if (status === "idle") return;

    const timer = setTimeout(() => setStatus("idle"), 5000);
    return () => clearTimeout(timer);
  }, [status]);

  return (
    <div className="w-full max-w-120">
      <div className="flex flex-col gap-4 lg:gap-10">
        <h2 className="text-h2 text-[#131313]">Get in touch</h2>
        <p className="font-plus">
          We’d love to hear from you. Please fill out this form.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-6 flex flex-col gap-5"
      >
        <div className="grid grid-cols-1 gap-5  sm:grid-cols-2">
          <div>
            <Input
              label="First name"
              id="firstName"
              placeholder="First name"
              required
              className="w-full shadow-sm"
              {...register("firstName")}
            />
            <FieldError message={errors.firstName?.message} />
          </div>

          <div>
            <Input
              label="Last name"
              id="lastName"
              placeholder="Last name"
              required
              className="w-full shadow-sm"
              {...register("lastName")}
            />
            <FieldError message={errors.lastName?.message} />
          </div>
        </div>

        <div>
          <Input
            label="Email"
            id="email"
            type="email"
            placeholder="you@company.com"
            required
            className="shadow-sm w-full"
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>

        <div>
          <PhoneInput
            label="Phone number"
            id="phoneNumber"
            placeholder="+234 (080) 000-0000"
            className="shadow-sm w-full"
            {...register("phoneNumber")}
          />
          <FieldError message={errors.phoneNumber?.message} />
        </div>

        <div>
          <Textarea
            label="Message"
            id="message"
            placeholder="Leave us a message..."
            className="w-full"
            {...register("message")}
          />
          <FieldError message={errors.message?.message} />
        </div>

        <div>
          <div className="flex items-center gap-3">
            <Input type="checkbox" id="agree" {...register("agree")} />
            <label className="font-plus text-[#475467]">
              You agree to our friendly privacy policy.
            </label>
          </div>
          <FieldError message={errors.agree?.message} />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-secondary w-full  rounded-xl hover:bg-[#1c0fa8]"
        >
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Send Message"
          )}
        </Button>

        {status === "success" && (
          <p className="text-center text-green-600">
            Message sent! We’ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-red-500">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
