import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextPlugin from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export default function Editor() {
  const content: string =
    "Javed Rasin's story is one of dedication to both law and literature in Bangladesh. As the Founder and CEO of SED Foundation, he has worked to bridge gaps in education and social development in his community. His dual role as both a Supreme Court advocate and a publisher showcases his commitment to both justice and cultural enrichment. In his early career, Rasin faced the typical challenges of establishing himself in Bangladesh's competitive legal field. The path to becoming a Supreme Court advocate requires years of dedication, extensive study, and proving oneself through countless cases in lower courts. Despite these hurdles, he persevered and eventually earned the prestigious position of arguing cases before Bangladesh's highest court. While building his legal career, Rasin maintained his passion for literature and publishing. He established ঈহা প্রকাশ (Iha Prokash), a publishing house that has become a platform for both established and emerging Bengali writers. This venture wasn't without its challenges - the publishing industry in Bangladesh faces numerous obstacles, from distribution difficulties to financial constraints. However, Rasin's determination helped him overcome these hurdles. The founding of the SED Foundation marked another significant chapter in his life. Recognizing the need for organized social development initiatives, he established the foundation to address educational disparities and promote social welfare. Under his leadership, the foundation has likely implemented various programs aimed at improving access to education and supporting underprivileged communities. Rasin's multifaceted career demonstrates his belief in using different platforms to create positive change. Whether through legal advocacy, publishing important literary works, or leading social development initiatives, he has shown a commitment to contributing to Bangladesh's progress in various ways. ";

  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.pause();

    timeline
      .to("#content-span", {
        scrollTrigger: {
          trigger: "#content-span",
          start: "top bottom",

          onEnter: () => {
            timeline.play();
          },
        },

        text: {
          value: content,
        },

        duration: 230,
        ease: "none",
      })
      .to("#custom-cursor", {
        duration: 0.06,
        opacity: 0,

        yoyo: true,
        ease: "none",

        repeat: -1,
        repeatDelay: 0.5,
      });
  });

  return (
    <div className="w-full">
      <div className="flex flex-col mx-auto w-[80vw] sm:w-[70vw]">
        <h1 className="mt-5 text-xl md:text-2xl text-center">
          From A Writer To Storyteller.
        </h1>

        <p className="mt-7 md:text-justify mb-2">
          <span id="content-span" className="text-sm md:text-base"></span>
          <span
            className="inline-block w-[0.5px] h-5 bg-black align-middle"
            id="custom-cursor"
          ></span>
        </p>
      </div>
    </div>
  );
}
