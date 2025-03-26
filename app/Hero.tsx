import Image from "next/image";
import Javed7 from "@/public/Javed7.jpeg";
import Pointer from "@/public/pointer.svg";
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

				<p className="text-stone-400 max-w-[30rem] text-center mt-4 select-none">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>

				{/* Left pointer */}
				<div className="absolute left-10 top-0">
					<div className="relative">
						<p className="text-sm text-stone-400 -rotate-3 select-none">
							Founder & CEO,
							<br />
							The SED Foundation.
						</p>

						<Image
							src={Pointer}
							alt=""
							priority
							className="absolute right-0 -bottom-8 w-20 rotate-4"
						/>
					</div>
				</div>

				{/* Right pointers */}
				<div className="absolute right-7 top-17">
					<div className="relative">
						<p className="text-sm text-stone-400 rotate-3 select-none">
							Legal Advocate,
							<br />
							The Supreme Court.
						</p>

						<Image
							src={Pointer}
							alt=""
							priority
							className="absolute -left-5 -bottom-8 w-20 scale-x-[-1] -rotate-8"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
