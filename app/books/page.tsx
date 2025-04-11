import Footer from "@/app/Footer";
import Navbar from "@/app/Navbar";
import BooksSection from "./BooksSection";

export default function Page() {
	return (
		<>
			<Navbar buttonColor="#292524" backgroundColor="white" />
			<main>
				<BooksSection />
			</main>
			<Footer />
		</>
	);
}
