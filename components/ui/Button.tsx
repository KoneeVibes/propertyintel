import { ComponentProps } from "react";
import { extendTailwindMerge } from "tailwind-merge";
import Link from "next/link";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display", "h1", "h2", "h3", "body", "small", "meta"] }],
    },
  },
});

type ButtonProps = {
  variant?: "primary" | "outline";
  size?: "md" | "lg";
};

const base = `inline-flex items-center justify-center gap-3 rounded-sm font-medium transition duration-300 ease-out-expo active:scale-[0.98] cursor-pointer disabled:pointer-events-none disabled:opacity-50`;

const variants = {
  primary: "bg-primary text-bg hover:bg-accent",
  outline: "border border-accent text-accent bg-bg",
};

const sizes = {
  md: "h-11 px-7 text-body",
  lg: "h-14 px-9 text-display",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps & { className?: string }) {
    return twMerge(base, variants[variant], sizes[size], className);
}

export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: ButtonProps & ComponentProps<"button">) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, className })}
      {...props}
    />
  );
}



export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: ButtonProps & ComponentProps<typeof Link>) {
  return (
    <Link className={buttonStyles({ variant, size, className })} {...props} />
  );
}
