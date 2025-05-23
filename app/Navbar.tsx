"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
						className="hover:cursor-pointer"
						aria-label="Close Menu"
						onClick={() => setIsMenuOpen(false)}
					>
						<X size={22} color={buttonColor} />
					</button>
				) : (
					<button
						type="button"
						className="hover:cursor-pointer"
						aria-label="Menu"
						onClick={() => setIsMenuOpen(true)}
					>
						<Menu size={22} color={buttonColor} />
					</button>
				)}

				{/* Navbar Dropdown */}
				<div
					className={`${isMenuOpen ? "block" : "hidden"} absolute top-full right-0 mr-2 z-50`}
					ref={dropdownRef}
				>
					<div className="animate-in fade-in duration-240">
						<NavbarDropdown backgroundColor={backgroundColor} />
					</div>
				</div>
			</nav>
		</header>
	);
}

function NavbarDropdown({ backgroundColor }: { backgroundColor: string }) {
	return (
		<div
			className="border border-stone-700 rounded-xl px-4 py-3 w-min"
			style={{ backgroundColor: backgroundColor }}
		>
			<ul className="space-y-2.5">
				<li>
					<Link href="/">
						<p className="text-sm text-nowrap">Home</p>
					</Link>
				</li>
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
					<Link href="/news-and-events">
						<p className="text-sm text-nowrap">News & Events</p>
					</Link>
				</li>
			</ul>
		</div>
	);
}
