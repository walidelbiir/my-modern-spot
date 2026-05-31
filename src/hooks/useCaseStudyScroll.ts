import { useEffect, useRef, useState } from "react";

export function useCaseStudyScroll(slideCount = 6) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const prevIndexRef = useRef(0);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const target = Math.max(0, Math.min(slideCount - 1, i));
    setDirection(target > index ? 1 : -1);
    el.scrollTo({ top: target * el.clientHeight, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollTop / el.clientHeight);
      if (i !== prevIndexRef.current) {
        setDirection(i > prevIndexRef.current ? 1 : -1);
        prevIndexRef.current = i;
      }
      setIndex(i);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return { scrollerRef, index, direction, go };
}

export const slideEnterClass = (isActive: boolean, direction: number) => {
  if (!isActive) return "";
  return direction >= 0 ? "animate-slide-enter-from-bottom" : "animate-slide-enter-from-top";
};

export const staggerClass = (isActive: boolean) => (isActive ? "animate-fade-up" : "");

export const SLIDE_LABELS = [
  "Hero",
  "01 Problem",
  "02 Need",
  "03 Solution",
  "04 Implementation",
  "05 Results",
];
