import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Javed Rasin | Portfolio",
	description:
		"Javed Rasin (Bengali: জাবেদ রাসিন) is a Bangladeshi poet & fiction writer. He has completed his graduation & post-graduation in law from the University of Dhaka.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}
