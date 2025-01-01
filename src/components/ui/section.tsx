import clsx from "clsx";
import { AllHTMLAttributes, ReactNode, Ref } from "react";

interface BaseProps<T extends HTMLElement> extends AllHTMLAttributes<T> {
  className?: string;
  children: ReactNode;
  ref?: Ref<T>;
}

export const Section = ({
  className,
  ref,
  ...props
}: BaseProps<HTMLDivElement>) => (
  <div className={clsx("section", className)} ref={ref} {...props} />
);

export const SectionTitle = ({
  className,
  ref,
  ...props
}: BaseProps<HTMLHeadingElement>) => (
  <h2
    className={clsx(
      "font-Poppins text-xl font-semibold md:text-3xl",
      className,
    )}
    {...props}
    ref={ref}
  />
);

export const SectionDescription = ({
  className,
  ref,
  ...props
}: BaseProps<HTMLParagraphElement>) => (
  <p
    className={clsx(
      "max-w-xs text-center text-sm text-muted-foreground md:max-w-sm",
      className,
    )}
    ref={ref}
    {...props}
  />
);
