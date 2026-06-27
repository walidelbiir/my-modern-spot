import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none font-semibold uppercase tracking-[0.06em] ring-offset-background transition-[transform,box-shadow,background-color,color] duration-150 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-x-0 active:translate-y-0 active:scale-[0.98] active:shadow-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Ink button — bone text, lifts onto a yellow shadow
        default:
          "border-2 border-foreground bg-primary text-primary-foreground hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-glow",
        // Loud yellow CTA — the signature button
        hero:
          "border-2 border-foreground bg-accent text-accent-foreground hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-card",
        destructive:
          "border-2 border-foreground bg-destructive text-destructive-foreground hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-card",
        // Outline — fills with ink on hover
        outline:
          "border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background",
        secondary:
          "border-2 border-foreground bg-secondary text-secondary-foreground hover:bg-foreground hover:text-background",
        ghost: "rounded-none hover:bg-foreground hover:text-background",
        link: "text-foreground underline-offset-4 decoration-2 decoration-accent hover:underline normal-case tracking-normal",
      },
      size: {
        default: "h-11 px-5 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-sm md:text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
