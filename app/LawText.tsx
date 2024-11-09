import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Libre_Baskerville } from "next/font/google";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
});

export default function LawText() {
  const sectionRef = useRef(null);
  const divRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.to(divRef.current, {
      backgroundColor: "#09090b",
      duration: 3,

      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "top top",
        markers: true,
      },
    });
  });

  return (
    <section className="h-svh" ref={sectionRef}>
      <div className="h-full bg-white" ref={divRef}>
        <h1
          className={`before:content-["Law"] before:text-xl before:border before:rounded-full before:px-3 before:py-[.5px] before:mr-3 text-6xl leading-tight text-white ${libre.className}`}
          ref={textRef}
        >
          The people are not just abstract numbers or cases, but individuals
          with real hopes, fears, and struggles.
        </h1>
      </div>
    </section>
  );
}
