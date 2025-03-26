import Image from "next/image";
import Javed2 from "@/public/Javed2.jpeg";

export default function Hero() {
	return (
		<section className="flex justify-center items-center min-h-svh bg-[#1C1D20]">
			<div className="flex">
				{/* Texts */}
				<p>Hello</p>

				{/* Image */}
				<Image src={Javed2} alt="Javed" />
			</div>
		</section>
	);
}
