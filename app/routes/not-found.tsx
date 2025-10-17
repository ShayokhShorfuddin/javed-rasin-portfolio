import { useNavigate } from "react-router";

export default function NotFound() {
	const navigate = useNavigate();

	return (
		<main className="flex flex-col h-svh w-full justify-center items-center font-sans">
			<h1 className="text-2xl xs:text-4xl sm:text-5xl text-center font-medium text-white">
				Not Found
			</h1>

			<p className="mt-2 px-5 text-sm xs:text-base text-center text-neutral-400">
				Let's take you back to home.
			</p>

			<button
				type="button"
				onClick={() => {
					navigate("/");
				}}
				className="py-1 px-3 rounded mt-5 text-white text-sm font-medium hover:cursor-pointer border border-stone-500"
			>
				Go Back
			</button>
		</main>
	);
}
