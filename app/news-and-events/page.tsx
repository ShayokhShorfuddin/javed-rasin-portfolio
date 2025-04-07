import Footer from "@/app/Footer";
import Navbar from "@/app/Navbar";
import NewsAndEventsSection from "./NewsAndEventsSection";

export default function Page() {
	return (
		<>
			<Navbar buttonColor="#292524" backgroundColor="white" />
			<main>
				<NewsAndEventsSection />
			</main>
			<Footer />
		</>
	);
}
