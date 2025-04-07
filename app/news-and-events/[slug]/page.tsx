import Footer from "@/app/Footer";
import Navbar from "@/app/Navbar";
import Info from "./Info";

type Props = {
	params: Promise<{ slug: string }>;
};

export default async function About({ params }: Props) {
	const { slug } = await params;

	return (
		<>
			<Navbar buttonColor="#292524" backgroundColor="white" />
			<main>
				<Info slug={slug} />
			</main>

			<Footer />
		</>
	);
}
