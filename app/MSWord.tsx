import {
	ChevronDown,
	Copy,
	Minus,
	RotateCw,
	Save,
	Undo2,
	X,
} from "lucide-react";

export default function MicrosoftWord() {
	return (
		<section
			className=""
			aria-label="Since Javed Rasin is writer, this section tries to present details about his backstory in a simulated Microsoft Word User Interface. This is not the Microsoft Word software itself, but rather a replica created using React and Tailwind CSS."
		>
			<TopLevelRibbon />
		</section>
	);
}

// Top level ribbon (includes save, undo, minimize, maximize, close buttons etc.)
function TopLevelRibbon() {
	return (
		<div className="flex justify-between items-center bg-[#4170CF] px-2 pt-1">
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
					className="hover:bg-[#6699ff] p-1 cursor-pointer"
				/>
			</div>

			{/* Middle filename text */}
			<p className="text-gray-200 text-sm select-none">Document1 - Word</p>

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

// TODO: Add xs breakpoint
