"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  animationClass: string; // Tailwind/CSS class that runs the animation
  className?: string;
  delay?: string; // e.g. "0.2s"
}

export default function Reveal({
  children,
  animationClass,
  className = "",
  delay,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { animationDelay: delay } : undefined}
      className={`${className} opacity-0 ${
        visible ? animationClass : ""
      }`.trim()}
    >
      {children}
    </div>
  );
}
