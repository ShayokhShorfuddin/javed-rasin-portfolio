import Image from "next/image";
import Javed7 from "@/public/Javed7.jpeg";
import JavedRasinHerotext from "@/public/javed-rasin-hero-text.svg";

export default function Hero() {
	return (
		<section
			className="flex justify-center items-center min-h-svh bg-[#1C1D20]"
			aria-label="This section introduces Javed Rasin"
		>
			<div className="relative flex flex-col items-center">
				<Image
					src={Javed7}
					priority
					placeholder="blur"
					alt="Javed Rasin looking up into the sky"
					className="w-40"
				/>

				<Image
					src={JavedRasinHerotext}
					alt=""
					priority
					className="w-[40rem] px-5 mt-7"
					// No alt because its a decorative text svg
				/>

				<p className="text-stone-400 max-w-[30rem] text-center mt-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>

				{/* Pointers */}
			</div>
		</section>
	);
}
