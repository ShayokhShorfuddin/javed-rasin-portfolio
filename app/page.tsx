import Footer from "./Footer";
import Hero from "./Hero";
import MicrosoftWord from "./MSWord";
import Navbar from "./Navbar";

export default function Page() {
	return (
		<>
			<Navbar buttonColor="#a6a09b" backgroundColor="#d6d3d1" />
			<main>
				<Hero />
				<MicrosoftWord />
			</main>
			<Footer />
		</>
	);
}
