import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalBooks() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const parentDiv = useRef<HTMLDivElement>(null); // Necessary for pin to work

  useGSAP(() => {
    gsap.to(textRef.current, {
      transform: "translateX(-110%)", // TODO: Fixed values gets you killed when screeen size changes. Go understand the responsive approach.

      scrollTrigger: {
        trigger: parentDiv.current,
        scroller: "body",
        markers: true,

        start: "top 0%",
        end: "top -450%",

        scrub: 1,
        pin: true,
      },
    });
  });

  return (
    <div className="overflow-x-hidden" ref={parentDiv}>
      <h1 className="text-[34vw]" ref={textRef}>
        EXPERIENCES
      </h1>
    </div>
  );
}
