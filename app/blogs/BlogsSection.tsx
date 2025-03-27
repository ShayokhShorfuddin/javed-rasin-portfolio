import { Outfit } from "next/font/google";
import Image, { type StaticImageData } from "next/image";

import NatureVertical from "@/public/nature-vertical.jpg";
import NatureHorizontal from "@/public/nature-horizontal.jpg";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const outfit = Outfit({
	subsets: ["latin"],
	weight: ["200", "300", "400"],
});

export default function BlogsSection() {
	return (
		<section
			className="container mx-auto min-h-svh"
			aria-label="All the blogs uploaded by Javed Rasin"
		>
			<div className="flex flex-col gap-y-20 items-center">
				<div className="flex flex-col gap-y-4 mt-20">
					<h1
						className={`text-4xl text-center font-light text-stone-800 ${outfit.className}`}
					>
						Javed Rasin's Blogs
					</h1>

					<p className="max-w-[30rem] text-center text-sm text-stone-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>

				<BlogsGrid />
			</div>
		</section>
	);
}

// TODO: Take idea from NewsSection.tsx and implement the same for BlogsSection.tsx

function BlogsGrid() {
	const blogs = [
		{
			image: NatureVertical,
			alt: "Nature vertical",
			href: "/blogs/nature-vertical",
			title: "Nature Vertical",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			image: NatureHorizontal,
			alt: "Nature horizontal",
			href: "/blogs/nature-horizontal",
			title:
				"Nature Horizontal Is such a great title for a blog. Lorem ipsum dolor sit amet, consectetur",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu",
		},
		{
			image: NatureVertical,
			alt: "Nature vertical",
			href: "/blogs/nature-vertical",
			title: "Nature Vertical",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			image: NatureHorizontal,
			alt: "Nature horizontal",
			href: "/blogs/nature-horizontal",
			title:
				"Nature Horizontal Is such a great title for a blog. Lorem ipsum dolor sit amet, consectetur",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu",
		},
		{
			image: NatureVertical,
			alt: "Nature vertical",
			href: "/blogs/nature-vertical",
			title: "Nature Vertical",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			image: NatureHorizontal,
			alt: "Nature horizontal",
			href: "/blogs/nature-horizontal",
			title:
				"Nature Horizontal Is such a great title for a blog. Lorem ipsum dolor sit amet, consectetur",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu",
		},
	];

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-7 gap-y-12 w-full mb-26">
			{blogs.map((blog) => (
				<BlogCard
					key={blog.title}
					image={blog.image}
					alt={blog.alt}
					href={blog.href}
					title={blog.title}
					content={blog.content}
				/>
			))}
		</div>
	);
}

function BlogCard({
	image,
	alt,
	href,
	title,
	content,
}: {
	image: StaticImageData;
	alt: string;
	href: string;
	title: string;
	content: string;
}) {
	return (
		<Link href={href}>
			<div className="flex flex-col w-full">
				<Image src={image} alt={alt} priority className="h-60 object-cover" />

				<p className="text-sm text-stone-700 mt-3">27/3/2025</p>

				<div className="flex justify-between mt-2">
					<p className="text-xl font-semibold max-w-[90%]">{title}</p>

					<ArrowUpRight strokeWidth={1} />
				</div>

				<p className="text-sm mt-2 line-clamp-4 text-gray-800">{content}</p>
			</div>
		</Link>
	);
}
