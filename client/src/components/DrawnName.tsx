import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { useCanAnimate, useInView } from "@/lib/use-anime";

export function DrawnName() {
  const canAnimate = useCanAnimate();
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!canAnimate || !inView || !textRef.current) return;
    const lines = textRef.current.querySelectorAll("[data-name-line]");
    animate(lines, {
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 800,
      ease: "outExpo",
      delay: (_: unknown, i: number) => 150 + i * 180,
    });
  }, [canAnimate, inView]);

  return (
    <div ref={ref} role="img" aria-label="Vansh Kalawatia" className="py-1 select-none">
      <span className="sr-only">Vansh Kalawatia</span>
      <div ref={textRef} className="flex flex-col leading-[0.88]">
        <span
          data-name-line
          className="font-bold tracking-tight text-foreground text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem]"
          style={{ fontFamily: "'Caveat', cursive", opacity: canAnimate ? 0 : 1 }}
        >
          Vansh
        </span>
        <span
          data-name-line
          className="font-bold tracking-tight text-primary transition-colors text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem]"
          style={{ fontFamily: "'Caveat', cursive", opacity: canAnimate ? 0 : 1 }}
        >
          Kalawatia
        </span>
      </div>
    </div>
  );
}
