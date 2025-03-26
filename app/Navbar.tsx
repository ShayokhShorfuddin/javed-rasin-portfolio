"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Close dropdown when clicking outside
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsMenuOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<header className="bg-[#1C1D20]">
			<nav className="absolute top-5 right-5">
				{isMenuOpen ? (
					<button
						type="button"
						className="hover: cursor-pointer"
						onClick={() => setIsMenuOpen(false)}
					>
						<X size={22} color="#a6a09b" />
					</button>
				) : (
					<button
						type="button"
						className="hover: cursor-pointer"
						onClick={() => setIsMenuOpen(true)}
					>
						<Menu size={22} color="#a6a09b" />
					</button>
				)}

				{/* Mobile Navbar Dropdown */}
				<div
					className={`${isMenuOpen ? "block" : "hidden"} absolute top-full right-0 mr-2 z-50`}
					ref={dropdownRef}
				>
					<div className="animate-in fade-in duration-240">
						<MobileNavbarDropdown />
					</div>
				</div>
			</nav>
		</header>
	);
}

// The dropdown for mobile devices
function MobileNavbarDropdown() {
	return (
		<div className=" rounded-xl px-4 py-3 w-min bg-stone-300">
			<ul className="space-y-2.5">
				<li>
					<Link href="/blogs">
						<p className="text-sm text-nowrap">Blogs</p>
					</Link>
				</li>
				<li>
					<Link href="/books">
						<p className="text-sm text-nowrap">Books</p>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<p className="text-sm text-nowrap">About me</p>
					</Link>
				</li>
				<li>
					<Link href="/uploads">
						<p className="text-sm text-nowrap">Uploads</p>
					</Link>
				</li>
				<li>
					<Link href="/social-and-legal-works">
						<p className="text-sm text-nowrap">Social & Legal Works</p>
					</Link>
				</li>
			</ul>
		</div>
	);
}

// "use client";

// import Wordmark from "@/public/wordmark-transparent.png";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useRef, useEffect } from "react";
// import { ChevronDown, Menu, X } from "lucide-react";

// export default function Navbar() {
// 	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// 	const [isProgramsOpen, setIsProgramsOpen] = useState(false);
// 	const programsRef = useRef<HTMLLIElement>(null);

// // Close dropdown when clicking outside
// useEffect(() => {
// 	function handleClickOutside(event: MouseEvent) {
// 		if (
// 			programsRef.current &&
// 			!programsRef.current.contains(event.target as Node)
// 		) {
// 			setIsProgramsOpen(false);
// 		}
// 	}
// 	document.addEventListener("mousedown", handleClickOutside);
// 	return () => {
// 		document.removeEventListener("mousedown", handleClickOutside);
// 	};
// }, []);

// 	return (
// 		<header>
// 			{/* Mobile Navbar */}
// 			<nav className="relative container mx-auto flex md:hidden justify-between items-center px-5 pt-3">
// 				{/* Wordmark */}
// 				<Link href="/">
// 					<Image
// 						src={Wordmark}
// 						priority
// 						alt="Wordmark of SED Foundation"
// 						height={90}
// 						width={90}
// 					/>
// 				</Link>

// 				{/* Fixed-width container for menu icons */}
// 				<div className="relative h-[25px] w-[25px] flex items-center justify-center">
// 					{isMobileMenuOpen ? (
// 						<X
// 							size={25}
// 							aria-label="Close menu"
// 							className="hover:cursor-pointer z-50 absolute"
// 							onClick={() => setIsMobileMenuOpen(false)}
// 							tabIndex={0}
// 							onKeyDown={(e) => {
// 								if (e.key === "Enter" || e.key === " ") {
// 									setIsMobileMenuOpen(false);
// 								}
// 							}}
// 						/>
// 					) : (
// 						<Menu
// 							size={25}
// 							aria-label="Open menu"
// 							className="hover:cursor-pointer z-50 absolute"
// 							onClick={() => setIsMobileMenuOpen(true)}
// 							tabIndex={0}
// 							onKeyDown={(e) => {
// 								if (e.key === "Enter" || e.key === " ") {
// 									setIsMobileMenuOpen(true);
// 								}
// 							}}
// 						/>
// 					)}
// 				</div>

// 				{/* Mobile Navbar Dropdown */}
// 				<div
// 					className={`${isMobileMenuOpen ? "block" : "hidden"} absolute top-full right-0 mr-2 z-50`}
// 				>
// 					<div className="animate-in fade-in duration-200">
// 						<MobileNavbarDropdown />
// 					</div>
// 				</div>
// 			</nav>

// 			{/* PC Navbar */}
// 			<nav className="container mx-auto hidden md:flex justify-between items-center px-5 pt-3">
// 				{/* Wordmark */}
// 				<Link href="/">
// 					<Image
// 						src={Wordmark}
// 						priority
// 						alt="Wordmark of SED Foundation"
// 						height={90}
// 						width={90}
// 					/>
// 				</Link>

// 				{/* Nav links */}
// 				<ul className="flex gap-x-4 px-3 py-2 border border-stone-400 rounded-xl">
// 					<li>
// 						<Link href="/">
// 							<p className="text-sm">Home</p>
// 						</Link>
// 					</li>
// 					<li>
// 						<Link href="/about">
// 							<p className="text-sm">About</p>
// 						</Link>
// 					</li>
// 					<li
// 						className="relative flex items-center gap-x-1 hover:cursor-pointer group"
// 						ref={programsRef}
// 					>
// 						<button
// 							type="button"
// 							className="flex items-center gap-x-1 focus:outline-none focus:ring-1 rounded-md px-1"
// 							onClick={() => setIsProgramsOpen(!isProgramsOpen)}
// 							onKeyDown={(e) => {
// 								if (e.key === "Escape") {
// 									setIsProgramsOpen(false);
// 								}
// 							}}
// 							aria-expanded={isProgramsOpen}
// 							aria-haspopup="true"
// 						>
// 							<p className="text-sm">Programs</p>
// 							<ChevronDown
// 								size={13}
// 								aria-hidden="true"
// 								className={`transition-transform duration-300 ${
// 									isProgramsOpen ? "rotate-180" : ""
// 								} group-hover:rotate-180`}
// 							/>
// 						</button>
// 						{/* Dropdown */}
// 						<div
// 							className={`absolute top-full ${isProgramsOpen ? "block" : "hidden"} group-hover:block`}
// 						>
// 							<div className="animate-in fade-in duration-300">
// 								<NavbarDropdown setIsProgramsOpen={setIsProgramsOpen} />
// 							</div>
// 						</div>
// 					</li>
// 					<li>
// 						<Link href="/news">
// 							<p className="text-sm">News</p>
// 						</Link>
// 					</li>
// 					<li>
// 						<Link href="/events">
// 							<p className="text-sm">Events</p>
// 						</Link>
// 					</li>
// 					<li>
// 						<Link href="/donate">
// 							<p className="text-sm text-sedGreen">Donate</p>
// 						</Link>
// 					</li>
// 				</ul>

// 				{/* Social media icons */}
// 				<div className="flex gap-x-4">
// 					{/* Facebook */}
// 					<Link
// 						href="https://www.facebook.com/sedbangladesh"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						aria-label="Visit SED Bangladesh Facebook page"
// 						className="hover:opacity-80 transition-opacity"
// 					>
// 						<svg
// 							xmlns="http://www.w3.org/2000/svg"
// 							viewBox="0 0 512 512"
// 							fill="black"
// 							className="size-6"
// 						>
// 							<title>Facebook</title>
// 							<path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
// 						</svg>
// 					</Link>

// 					{/* Twitter */}
// 					<Link
// 						href="https://x.com/SED_Foundation"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						aria-label="Visit SED Foundation X (Formally Twitter) page"
// 						className="hover:opacity-80 transition-opacity"
// 					>
// 						<svg
// 							xmlns="http://www.w3.org/2000/svg"
// 							viewBox="0 0 512 512"
// 							fill="black"
// 							className="size-6"
// 						>
// 							<title>X (formerly Twitter)</title>
// 							<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
// 						</svg>
// 					</Link>

// 					{/* LinkedIn */}
// 					<Link
// 						href="https://www.linkedin.com/company/strategy-for-environmental-development-sed-/"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						aria-label="Visit SED Foundation LinkedIn page"
// 						className="hover:opacity-80 transition-opacity"
// 					>
// 						<svg
// 							xmlns="http://www.w3.org/2000/svg"
// 							viewBox="0 0 448 512"
// 							fill="black"
// 							className="size-6"
// 						>
// 							<title>LinkedIn</title>
// 							<path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
// 						</svg>
// 					</Link>
// 				</div>
// 			</nav>
// 		</header>
// 	);
// }

// // The dropdown that appears when "Programs" is hovered over
// function NavbarDropdown({
// 	setIsProgramsOpen,
// }: { setIsProgramsOpen: (value: boolean) => void }) {
// 	return (
// 		<div className="border border-stone-700 rounded-xl p-2 z-50 bg-white">
// 			<ul className="space-y-1">
// 				<li>
// 					<Link href="/climate-action" onClick={() => setIsProgramsOpen(false)}>
// 						<p className="text-sm text-nowrap">Climate Action</p>
// 					</Link>
// 				</li>
// 				<li>
// 					<Link
// 						href="/research-and-publications"
// 						onClick={() => setIsProgramsOpen(false)}
// 					>
// 						<p className="text-sm text-nowrap">Research & Publications</p>
// 					</Link>
// 				</li>
// 				<li>
// 					<Link href="/autumn-school" onClick={() => setIsProgramsOpen(false)}>
// 						<p className="text-sm text-nowrap">Environmental Autumn School</p>
// 					</Link>
// 				</li>
// 			</ul>
// 		</div>
// 	);
// }

// // The dropdown for mobile devices
// function MobileNavbarDropdown() {
// 	return (
// 		<div className="border border-stone-700 rounded-xl px-4 py-3 w-min bg-white">
// 			<ul className="space-y-3">
// 				<li>
// 					<Link href="/">
// 						<p className="text-sm text-nowrap">Home</p>
// 					</Link>
// 				</li>
// 				<li>
// 					<Link href="/about">
// 						<p className="text-sm text-nowrap">About</p>
// 					</Link>
// 				</li>
// 				<li>
// 					<details className="group">
// 						<summary className="list-none hover:cursor-pointer">
// 							<div className="flex items-center gap-x-1">
// 								<p className="text-sm text-nowrap">Programs</p>
// 								<ChevronDown
// 									size={13}
// 									aria-hidden="true"
// 									className="transition-transform duration-300 group-open:rotate-180"
// 								/>
// 							</div>
// 						</summary>
// 						<ul className="pl-4 pt-2 space-y-2">
// 							<li>
// 								<Link href="/climate-action">
// 									<p className="text-sm text-nowrap">Climate Action</p>
// 								</Link>
// 							</li>
// 							<li>
// 								<Link href="/research-and-publications">
// 									<p className="text-sm text-nowrap">Research & Publications</p>
// 								</Link>
// 							</li>
// 							<li>
// 								<Link href="/autumn-school">
// 									<p className="text-sm text-nowrap">
// 										Environmental Autumn School
// 									</p>
// 								</Link>
// 							</li>
// 						</ul>
// 					</details>
// 				</li>
// 				<li>
// 					<Link href="/news">
// 						<p className="text-sm text-nowrap">News</p>
// 					</Link>
// 				</li>
// 				<li>
// 					<Link href="/events">
// 						<p className="text-sm text-nowrap">Events</p>
// 					</Link>
// 				</li>
// 				<li>
// 					<Link href="/donate">
// 						<p className="text-sm text-nowrap text-sedGreen">Donate</p>
// 					</Link>
// 				</li>
// 			</ul>
// 		</div>
// 	);
// }
