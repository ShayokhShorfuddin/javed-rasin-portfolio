"use client";

import Javed9 from "@/public/Javed9.jpeg";
import JavedRasinHerotext from "@/public/javed-rasin-hero-text.svg";
import Pointer from "@/public/pointer.svg";
import Image from "next/image";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

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
				1.4,
			)

			// Left pointer 2
			.to(
				"#left-pointer-2",
				{
					duration: 1,
					opacity: 1,
					ease: "power2.out",
				},
				1.7,
			)

			// right pointer
			.to(
				"#right-pointer",
				{
					duration: 1,
					opacity: 1,
					ease: "power2.out",
				},
				2,
			);
	});

	return (
		<section
			className="flex justify-center items-center min-h-svh bg-[#1C1D20]"
			aria-label="This section introduces Javed Rasin"
		>
			<div className="relative flex flex-col items-center">
				<Image
					src={Javed9}
					priority
					placeholder="blur"
					alt="Javed Rasin looking up into the sky"
					className="w-40 transform translate-y-5 opacity-0"
					id="hero-image"
				/>

				<Image
					src={JavedRasinHerotext}
					alt=""
					priority
					className="w-[40rem] px-5 mt-7 opacity-0"
					id="hero-svg"
					// No alt because its a decorative text svg
				/>

				<p
					className="text-stone-400 text-sm sm:text-base mx-4 max-w-[30rem] text-center mt-4 opacity-0 select-none"
					id="subheading-text"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
							src={Pointer}
							alt=""
							priority
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
							src={Pointer}
							alt=""
							priority
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
					id="right-pointer"
				>
					<div className="relative">
						<p className="text-sm text-stone-400 rotate-3 select-none text-center">
							Advocate,
							<br />
							Supreme Court Of Bangladesh.
						</p>

						<Image
							src={Pointer}
							alt=""
							priority
							className="absolute -left-5 -bottom-8 w-20 scale-x-[-1] -rotate-8"
						/>
					</div>
				</div>

				{/* Right pointer 2 */}
				<div
					className="hidden md:block absolute right-0 top-55 opacity-0"
					id="left-pointer-2"
				>
					<div className="relative">
						<Image
							src={Pointer}
							alt=""
							priority
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
