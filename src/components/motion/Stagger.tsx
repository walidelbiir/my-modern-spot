import { motion } from "motion/react";
import type { ReactNode } from "react";
import { staggerContainer, staggerItem, VIEWPORT } from "@/lib/motion";

type StaggerProps = {
  children: ReactNode;
  className?: string;
};

export function Stagger({ children, className }: StaggerProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: StaggerProps) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}
