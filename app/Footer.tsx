"use client";

import Image from "next/image";
import Javed from "@/public/javed.jpg";
import JavedRasinText from "@/public/javed-rasin-footer-text.svg";
import { Outfit } from "next/font/google";
import { useState, useEffect, useCallback } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

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

						<AlertDialog>
							<AlertDialogTrigger className="hover:cursor-pointer">
								<p className="text-stone-400 select-none">Contact</p>
							</AlertDialogTrigger>

							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>Contact</AlertDialogTitle>
									<AlertDialogDescription>
										Let's get in touch.
									</AlertDialogDescription>
								</AlertDialogHeader>

								<div className="flex flex-col gap-y-4 text-neutral-800">
									<ContactFacebook />
									<ContactPhone />
									<ContactEmail />
									<ContactAddress />
								</div>

								<AlertDialogFooter>
									<AlertDialogCancel>Close</AlertDialogCancel>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
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

export function ContactFacebook() {
	return (
		<Link
			href="https://www.facebook.com/m.javed.rasin"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Visit SED Bangladesh Facebook page"
			className="hover:opacity-80 transition-opacity"
		>
			<div className="flex gap-x-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="black"
					className="size-6"
				>
					<title>Facebook</title>
					<path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
				</svg>

				<p className="text-sm">Javed Rasin (জাবেদ রাসিন)</p>
			</div>
		</Link>
	);
}

export function ContactPhone() {
	return (
		<div className="flex gap-x-4">
			<Phone strokeWidth={1.5} />
			<p className="text-sm">+8801553657919</p>
		</div>
	);
}

export function ContactEmail() {
	return (
		<div className="flex gap-x-4">
			<Mail strokeWidth={1.5} />
			<Link
				href="mailto:javed.rasin@gmail.com"
				className="hover:underline text-sm"
			>
				javed.rasin@gmail.com
			</Link>
		</div>
	);
}

export function ContactAddress() {
	return (
		<div className="flex gap-x-4">
			<MapPin strokeWidth={1.5} />

			<Link
				href="https://maps.app.goo.gl/4G3GuXeUcgA7P1BR8"
				className="hover:underline text-sm"
				target="_blank"
			>
				Iha Prokash, 803/A, Khilgaon Tilpapara, Road 14, Dhaka-1219.
			</Link>
		</div>
	);
}
