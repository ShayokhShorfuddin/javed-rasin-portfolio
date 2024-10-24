import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Loader() {
  const sentences = [
    "Who am I?",
    "An agent of justice.",
    "An artist of words.",
    "A voice for the nation.",
  ];

  useGSAP(() => {
    const timeline = gsap.timeline();

    sentences.forEach((_, index) => {
      timeline
        .fromTo(
          `#sentence-${index}`,
          { opacity: 0, display: "none" },
          { opacity: 1, display: "block", duration: 1 }
        )
        .to(`#sentence-${index}`, {
          opacity: 0,
          display: "none",
          duration: 1,
          delay: 1.1,
        });
    });

    timeline.to("#loader", {
      opacity: 0,
    });

    timeline.to("#loader", {
      display: "none",
    });
  }, []);

  return (
    <div
      className="flex justify-center items-center h-full w-full fixed top-0 z-30 bg-black text-white font-nb"
      id="loader"
    >
      {sentences.map((sentence, index) => (
        <h1 key={index} id={`sentence-${index}`} className="text-3xl">
          {sentence}
        </h1>
      ))}
    </div>
  );
}
