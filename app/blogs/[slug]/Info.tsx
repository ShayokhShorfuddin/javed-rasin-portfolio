"use client";

import type { BlogType } from "@/app/blogs/BlogsSection";
import { getBlogBySlug } from "@/sanity/utils/blog-utils";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { useEffect, useState } from "react";

export default function Info({ slug }: { slug: string }) {
	const [blog, setBlog] = useState<BlogType | null>(null);

	useEffect(() => {
		getBlogBySlug(slug).then(setBlog);
	}, [slug]);

	if (!blog) return null;

	return <BlogContent blog={blog} />;
}

const components: PortableTextComponents = {
	block: {
		// Custom serializer for paragraphs
		normal: ({ children }) => (
			<p className="leading-loose text-sm mb-6">{children}</p>
		),
	},
};

function BlogContent({ blog }: { blog: BlogType }) {
	// State to store the calculated width class for the image
	const [imageWidthClass, setImageWidthClass] = useState<string>("w-full");

	useEffect(() => {
		// Ensure the image has metadata (height and width)
		if (blog.cardThumbnail.asset.metadata.dimensions) {
			const { height, width } = blog.cardThumbnail.asset.metadata.dimensions;

			// Determine if the image is vertical or horizontal
			if (height > width) {
				setImageWidthClass("w-[50%]"); // Vertical image: set width to 50%
			} else {
				setImageWidthClass("w-full"); // Horizontal image: keep width as full
			}
		}
	}, [blog.cardThumbnail.asset.metadata.dimensions]);

	return (
		<section className="container mx-auto flex justify-center">
			<div className="flex flex-col max-w-[50rem] mx-5 my-20">
				{/* Heading image */}
				<img
					src={blog.cardThumbnail.asset.url}
					alt={blog.cardThumbnail.alt}
					fetchPriority="high"
					className={`rounded-lg ${imageWidthClass} self-center`}
				/>

				{/* Headline */}
				<h1 className="text-base sm:text-lg md:text-xl lg:text-2xl mt-8 font-semibold">
					{blog.title}
				</h1>

				{/* DD/MM/YYYY */}
				<p className="px-3 py-1 border border-stone-400 w-min rounded-full text-sm mt-5">
					{new Intl.DateTimeFormat("en-GB").format(new Date(blog.date))}
				</p>

				<div className="mt-10 text-sm">
					<PortableText value={blog.content} components={components} />
				</div>
			</div>
		</section>
	);
}
