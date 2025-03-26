import Footer from "./Footer";
import Hero from "./Hero";
import MicrosoftWord from "./MSWord";
import Navbar from "./Navbar";

export default function Page() {
	return (
		<>
			<Navbar />

			<main>
				<Hero />
				<MicrosoftWord />
			</main>

			<Footer />
		</>
	);
}
