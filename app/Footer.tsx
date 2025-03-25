"use client";

import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import Javed from "@/public/javed.jpg";
import { Outfit } from "next/font/google";
import { useState, useEffect, useCallback } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
import { Button } from "@/components/ui/button";

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
		<footer className="flex justify-center items-center h-svh bg-[#1C1D20]">
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
						className={`text-4xl md:text-6xl text-center text-white ${outfit.className}`}
					>
						Let's work together.
					</p>
				</div>

				{/* Line */}
				<hr className="w-[0%] border-[#ffffff33] mt-10 md:mt-12" id="hr-line" />

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
							<p className="text-stone-400">Contact</p>
						</AlertDialogTrigger>

						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>Contact</AlertDialogTitle>
								<AlertDialogDescription>
									Let's get in touch.
								</AlertDialogDescription>
							</AlertDialogHeader>

							<div className="flex flex-col gap-y-5 text-neutral-800">
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
		</footer>
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
