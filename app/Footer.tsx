"use client";

import Image from "next/image";
import Javed from "@/public/javed.jpg";
import JavedRasinText from "@/public/javed-rasin-footer-text.svg";
import { Outfit } from "next/font/google";
import { useState, useEffect, useCallback } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Alert from "./Alert";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const outfit = Outfit({
	subsets: ["latin"],
	weight: ["200", "300", "400"],
});

export default function Footer() {
	const [time, setTime] = useState("");

	useGSAP(() =>
		gsap.to("#hr-line", {
			width: "100%",
			ease: "power3.out",
			duration: 2,

			scrollTrigger: {
				trigger: "#hr-line",
				start: "top bottom",
				toggleActions: "restart none none none",
			},
		}),
	);

	const getBangladeshTime = useCallback(() => {
		const date = new Date();
		const formatter = new Intl.DateTimeFormat("en", {
			timeZone: "Asia/Dhaka",
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		});

		return formatter.format(date);
	}, []);

	useEffect(() => {
		// Initial update
		setTime(getBangladeshTime());

		// Update every second
		const interval = setInterval(() => {
			setTime(getBangladeshTime());
		}, 1000);

		// Cleanup interval on component unmount
		return () => clearInterval(interval);
	}, [getBangladeshTime]);

	return (
		<footer className="flex flex-col">
			<div className="flex justify-center items-center h-svh bg-[#1C1D20]">
				<div className="flex flex-col items-center">
					{/* Image and CTA */}
					<div className="flex gap-x-6 items-center">
						<Image
							src={Javed}
							alt="Javed Rasin scrolling on his phone"
							placeholder="blur"
							className="size-24 rounded-full hover:scale-110 transition-all duration-300"
						/>

						<p
							className={`text-4xl md:text-6xl text-center text-white select-none ${outfit.className}`}
						>
							Let's work together.
						</p>
					</div>

					{/* Line */}
					<hr
						className="w-[0%] border-[#ffffff33] mt-10 md:mt-12"
						id="hr-line"
					/>

					{/* Time and contact */}
					<div className="flex justify-between w-full items-start mt-5">
						<div className="flex flex-col">
							<p className="text-stone-400 text-sm">Local Time</p>
							<p className="text-xl text-gray-200">
								{time} <span className="text-sm text-stone-400">GMT+6</span>
							</p>
						</div>

						<Alert />
					</div>
				</div>
			</div>

			{/* Huge footer text */}
			<Image
				src={JavedRasinText}
				alt="Javed Rasin"
				className="w-full px-2 bg-[#1C1D20]"
			/>
		</footer>
	);
}
