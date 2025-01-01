import clsx from "clsx";
import { AllHTMLAttributes, ReactNode, Ref } from "react";

interface SectionProps extends AllHTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  ref?: Ref<HTMLDivElement>;
}

export const Section = ({ className, ref, ...props }: SectionProps) => (
  <div className={clsx("section", className)} ref={ref} {...props} />
);

export const SectionTitle = ({ className, ref, ...props }: SectionProps) => (
  <h2
    className={clsx(
      "font-Poppins text-2xl font-semibold md:text-4xl",
      className,
    )}
    {...props}
    ref={ref}
  />
);
