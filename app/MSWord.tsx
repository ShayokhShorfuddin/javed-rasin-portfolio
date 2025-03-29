"use client";

import {
	BookOpenCheck,
	BookOpenText,
	ChevronDown,
	Copy,
	FileText,
	Fullscreen,
	Minus,
	RotateCw,
	Save,
	Undo2,
	X,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import TextEditor from "./Editor";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export default function MicrosoftWord() {
	return (
		<section
			className="relative min-h-screen"
			aria-label="Since Javed Rasin is writer, this section tries to present details about his backstory in a simulated Microsoft Word User Interface. This is not the Microsoft Word software itself, but rather a replica created using React and Tailwind CSS."
		>
			<TopLevelRibbon />
			<SecondLevelRibbon />
			<TextEditor />
			<BottomRibbon />
		</section>
	);
}

// Top level ribbon (includes save, undo, minimize, maximize, close buttons etc.)
function TopLevelRibbon() {
	return (
		<div className="flex justify-between items-center bg-[#4170CF]">
			{/* Left icons */}
			<div className="flex justify-center items-center gap-x-1">
				<Save
					color="#f3f4f6"
					strokeWidth={1.5}
					className="hover:bg-[#6699ff] p-1 cursor-pointer"
				/>

				<Undo2
					color="#e5e7eb"
					strokeWidth={1.5}
					className="hover:bg-[#6699ff] p-1 cursor-pointer"
				/>

				<RotateCw
					color="#e5e7eb"
					strokeWidth={1.5}
					className="hover:bg-[#6699ff] p-1 cursor-pointer"
				/>

				<ChevronDown
					color="#e5e7eb"
					strokeWidth={1.5}
					className="hidden sm:block hover:bg-[#6699ff] p-1 cursor-pointer"
				/>
			</div>

			{/* Middle filename text */}
			<p className="text-gray-200 text-sm select-none text-center">
				Document1 - Word
			</p>

			{/* Right icons */}
			<div className="flex justify-center items-center gap-x-1">
				<Minus
					color="#f3f4f6"
					strokeWidth={1.5}
					className="hover:bg-[#6699ff] p-1 cursor-pointer"
				/>

				<Copy
					color="#e5e7eb"
					strokeWidth={1.5}
					className="hover:bg-[#6699ff] p-1 cursor-pointer"
				/>

				<X
					color="#e5e7eb"
					strokeWidth={1.5}
					className="hover:bg-red-500 p-1 cursor-pointer"
				/>
			</div>
		</div>
	);
}

// 2nd level ribbon (includes File, Home, Insert, Layout etc...)
function SecondLevelRibbon() {
	return (
		<div className="flex items-center bg-[#4170CF] pt-3 overflow-hidden">
			<p className="text-gray-200 text-sm px-4 py-1 hover:bg-[#6699ff] transition-colors duration-200 select-none">
				File
			</p>
			<p className="text-[#4170cf] bg-white px-4 py-1 text-sm select-none">
				Home
			</p>
			<p className="text-gray-200 text-sm px-4 py-1 hover:bg-[#6699ff] transition-colors duration-200 select-none">
				Insert
			</p>
			<p className="text-gray-200 text-sm px-4 py-1 hover:bg-[#6699ff] transition-colors duration-200 select-none">
				Design
			</p>
			<p className="hidden xs:block text-gray-200 text-sm px-4 py-1 hover:bg-[#6699ff] transition-colors duration-200 select-none">
				Layout
			</p>
			<p className="hidden xs:block text-gray-200 text-sm px-4 py-1 hover:bg-[#6699ff] transition-colors duration-200 select-none">
				References
			</p>
			<p className="hidden sm:block text-gray-200 text-sm px-4 py-1 hover:bg-[#6699ff] transition-colors duration-200 select-none">
				Mailings
			</p>
			<p className="hidden md:block text-gray-200 text-sm px-4 py-1 hover:bg-[#6699ff] transition-colors duration-200 select-none">
				Review
			</p>
			<p className="hidden lg:block text-gray-200 text-sm px-4 py-1 hover:bg-[#6699ff] transition-colors duration-200 select-none">
				View
			</p>
			<p className="hidden xl:block text-gray-200 text-sm px-4 py-1 hover:bg-[#6699ff] transition-colors duration-200 select-none">
				Help
			</p>
		</div>
	);
}

// Bottom ribbon (includes page, word, etc.)
function BottomRibbon() {
	return (
		<div className="flex justify-between w-full bg-[#4170CF] px-3 absolute bottom-0">
			{/* Page and word count */}
			<div className="flex gap-x-5">
				<p className="text-sm text-gray-200 select-none text-nowrap">
					Page 1 of 1
				</p>
				<p className="text-sm text-gray-200 select-none text-nowrap">
					1918 words
				</p>
				<BookOpenCheck
					color="#e5e7eb"
					strokeWidth={1.5}
					className="hidden sm:block hover:bg-[#6699ff] p-1 cursor-pointer"
				/>
			</div>

			{/* Other icons */}
			<div className="flex gap-x-2">
				<div className="hidden sm:flex items-center hover:bg-[#6699ff] cursor-pointer pr-2">
					<Fullscreen color="#e5e7eb" strokeWidth={1.5} className="p-1" />
					<p className="text-sm text-gray-200 select-none">Focus</p>
				</div>

				<BookOpenText
					color="#e5e7eb"
					strokeWidth={1.5}
					className="hover:bg-[#6699ff] p-1 cursor-pointer"
				/>

				<FileText
					color="#e5e7eb"
					strokeWidth={1.5}
					className="hover:bg-[#6699ff] p-1 cursor-pointer"
				/>
			</div>
		</div>
	);
}
