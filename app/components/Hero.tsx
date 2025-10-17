/** biome-ignore-all lint/correctness/useUniqueElementIds: <static id is required for gsap animations> */

import { useGSAP } from "@gsap/react";
import { Image } from "@unpic/react";
import gsap from "gsap";

if (typeof window !== "undefined") {
	gsap.registerPlugin(useGSAP);
}

import javed_hero from "@/assets/javed-rasin-hero.jpeg";
import javed_hero_text from "@/assets/javed-rasin-hero-text.svg";
import Pointer from "@/assets/pointer.svg";

export default function Hero() {
	useGSAP(() => {
		const timeline = gsap.timeline();

		// Hero Image
		timeline
			.to("#hero-image", {
				duration: 1,
				opacity: 1,
				y: 0,
				ease: "power2.out",
			})

			// Hero SVG
			.to(
				"#hero-svg",
				{
					duration: 1,
					opacity: 1,
					ease: "power2.out",
				},
				0.7,
			)

			// Subheading text
			.to(
				"#subheading-text",
				{
					duration: 1,
					opacity: 1,
					ease: "power2.out",
				},
				1,
			)

			// Left pointer 1
			.to(
				"#left-pointer-1",
				{
					duration: 1,
					opacity: 1,
					ease: "power2.out",
				},
				1.2,
			)

			// Left pointer 2
			.to(
				"#left-pointer-2",
				{
					duration: 1,
					opacity: 1,
					ease: "power2.out",
				},
				1.4,
			)

			// right pointer 1
			.to(
				"#right-pointer-1",
				{
					duration: 1,
					opacity: 1,
					ease: "power2.out",
				},
				1.6,
			)

			// right pointer 2
			.to(
				"#right-pointer-2",
				{
					duration: 1,
					opacity: 1,
					ease: "power2.out",
				},
				1.8,
			);
	});

	return (
		<section
			className="flex justify-center items-center min-h-svh bg-[#1C1D20]"
			aria-label="This section introduces Javed Rasin"
		>
			<div className="relative flex flex-col items-center">
				<Image
					width={900}
					height={1600}
					id="hero-image"
					src={javed_hero}
					role="presentation"
					layout="constrained"
					fetchPriority="high"
					alt="Javed Rasin looking up into the sky"
					className="w-40 transform translate-y-5 opacity-0"
				/>

				<Image
					alt=""
					width={300}
					height={54}
					id="hero-svg"
					layout="constrained"
					fetchPriority="high"
					src={javed_hero_text}
					className="w-[40rem] px-5 mt-7 opacity-0"
					// No alt because its a decorative text svg
				/>

				<p
					className="text-stone-400 text-sm sm:text-base mx-4 max-w-[35rem] text-center mt-4 opacity-0 select-none"
					id="subheading-text"
				>
					Bridging law, literature, and social development.
				</p>

				{/* Left pointer 1 */}
				<div
					className="hidden md:block absolute left-15 -top-5 opacity-0"
					id="left-pointer-1"
				>
					<div className="relative">
						<p className="text-sm text-stone-400 -rotate-3 select-none text-center">
							Founder & CEO,
							<br />
							SED Foundation.
						</p>

						<Image
							alt=""
							width={300}
							height={90}
							src={Pointer}
							layout="fixed"
							fetchPriority="high"
							className="absolute -right-3 -bottom-8 w-20 rotate-4"
						/>
					</div>
				</div>

				{/* Left pointer 2 */}
				<div
					className="hidden md:block absolute -left-5 top-49 opacity-0"
					id="left-pointer-2"
				>
					<div className="relative">
						<Image
							alt=""
							width={300}
							height={90}
							src={Pointer}
							layout="fixed"
							fetchPriority="high"
							className="absolute -right-5 -top-8 w-20 scale-y-[-1] -rotate-11"
						/>

						<p className="text-sm text-stone-400 select-none text-center">
							Joint Convenor,
							<br />
							National Citizen Party (NCP)
						</p>
					</div>
				</div>

				{/* Right pointer 1 */}
				<div
					className="hidden md:block absolute -right-6 top-3 opacity-0"
					id="right-pointer-1"
				>
					<div className="relative">
						<p className="text-sm text-stone-400 rotate-3 select-none text-center">
							Advocate,
							<br />
							Supreme Court Of Bangladesh.
						</p>

						<Image
							alt=""
							width={300}
							height={90}
							src={Pointer}
							layout="fixed"
							fetchPriority="high"
							className="absolute -left-5 -bottom-8 w-20 scale-x-[-1] -rotate-8"
						/>
					</div>
				</div>

				{/* Right pointer 2 */}
				<div
					className="hidden md:block absolute right-0 top-55 opacity-0"
					id="right-pointer-2"
				>
					<div className="relative">
						<Image
							alt=""
							width={300}
							height={90}
							src={Pointer}
							layout="fixed"
							fetchPriority="high"
							className="absolute -left-5 -top-10 w-20 -rotate-160"
						/>

						<p className="text-sm text-stone-400 select-none text-center">
							Writer, Editor & Publisher,
							<br />
							Eha Prokash
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
