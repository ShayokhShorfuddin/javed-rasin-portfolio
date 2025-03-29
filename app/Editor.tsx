import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextPlugin from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const content: string =
	"Javed Rasin's story is one of dedication to both law and literature in Bangladesh. As the Founder and CEO of SED Foundation, he has worked to bridge gaps in education and social development in his community. His dual role as both a Supreme Court advocate and a publisher showcases his commitment to both justice and cultural enrichment. In his early career, Rasin faced the typical challenges of establishing himself in Bangladesh's competitive legal field. The path to becoming a Supreme Court advocate requires years of dedication, extensive study, and proving oneself through countless cases in lower courts. Despite these hurdles, he persevered and eventually earned the prestigious position of arguing cases before Bangladesh's highest court. While building his legal career, Rasin maintained his passion for literature and publishing. He established ঈহা প্রকাশ (Iha Prokash), a publishing house that has become a platform for both established and emerging Bengali writers. This venture wasn't without its challenges - the publishing industry in Bangladesh faces numerous obstacles, from distribution difficulties to financial constraints. However, Rasin's determination helped him overcome these hurdles. The founding of the SED Foundation marked another significant chapter in his life. Recognizing the need for organized social development initiatives, he established the foundation to address educational disparities and promote social welfare. Under his leadership, the foundation has likely implemented various programs aimed at improving access to education and supporting underprivileged communities. Rasin's multifaceted career demonstrates his belief in using different platforms to create positive change. Whether through legal advocacy, publishing important literary works, or leading social development initiatives, he has shown a commitment to contributing to Bangladesh's progress in various ways. ";

// Text editor
export default function TextEditor() {
	useGSAP(() => {
		const timeline = gsap.timeline();
		timeline.pause();

		timeline
			// Typewriter effect on text content
			.to("#text-content", {
				scrollTrigger: {
					trigger: "#text-content",
					start: "top 85%",

					onEnter: () => {
						timeline.play();
					},
				},

				text: {
					value: content,
				},

				duration: 90,
				ease: "none",
			})

			// Cursor flickering
			.to("#cursor", {
				duration: 0.06,
				opacity: 0,

				yoyo: true,
				ease: "none",

				repeat: -1,
				repeatDelay: 0.5,
			});
	});

	return (
		<div className="flex flex-col mx-auto pt-[3rem] gap-y-6 max-w-[60rem] pb-[5rem] px-5">
			{/* Heading */}
			<p className="text-lg md:text-xl text-center select-none">
				The Tale Of A Storyteller
			</p>

			{/* Backstory of Javed Rasin */}
			<p className="text-sm lg:text-base md:text-justify select-none">
				{/* Text content */}
				<span id="text-content" />
				{/* Custom cursor flicker */}
				<span
					className="inline-block w-[0.6px] h-5 bg-black align-middle"
					id="cursor"
				/>
			</p>
		</div>
	);
}
