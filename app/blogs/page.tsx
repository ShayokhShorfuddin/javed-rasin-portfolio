import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import BlogsSection from "./BlogsSection";

export default function Page() {
	return (
		<>
			<Navbar />

			<main>
				<BlogsSection />
			</main>

			<Footer />
		</>
	);
}
