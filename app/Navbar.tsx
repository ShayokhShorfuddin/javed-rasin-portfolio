"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar({
	buttonColor,
	backgroundColor,
}: { buttonColor: string; backgroundColor: string }) {
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
		<header>
			<nav className="absolute top-5 right-5">
				{isMenuOpen ? (
					<button
						type="button"
						className="hover: cursor-pointer"
						onClick={() => setIsMenuOpen(false)}
					>
						<X size={22} color={buttonColor} />
					</button>
				) : (
					<button
						type="button"
						className="hover: cursor-pointer"
						onClick={() => setIsMenuOpen(true)}
					>
						<Menu size={22} color={buttonColor} />
					</button>
				)}

				{/* Mobile Navbar Dropdown */}
				<div
					className={`${isMenuOpen ? "block" : "hidden"} absolute top-full right-0 mr-2 z-50`}
					ref={dropdownRef}
				>
					<div className="animate-in fade-in duration-240">
						<MobileNavbarDropdown backgroundColor={backgroundColor} />
					</div>
				</div>
			</nav>
		</header>
	);
}

// The dropdown for mobile devices
function MobileNavbarDropdown({
	backgroundColor,
}: { backgroundColor: string }) {
	return (
		<div
			className="border border-stone-700 rounded-xl px-4 py-3 w-min"
			style={{ backgroundColor: backgroundColor }}
		>
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
