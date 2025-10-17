import Hero from "~/components/Hero";
import MicrosoftWord from "~/components/MSWord";

export function meta() {
	return [
		{ title: "Javed Rasin | Portfolio" },
		{
			name: "description",
			content:
				"Javed Rasin (Bengali: জাবেদ রাসিন) is a Bangladeshi poet & fiction writer. He has completed his graduation & post-graduation in law from the University of Dhaka.",
		},
	];
}

export default function Home() {
	return (
		<main>
			<Hero />
			<MicrosoftWord />
		</main>
	);
}
