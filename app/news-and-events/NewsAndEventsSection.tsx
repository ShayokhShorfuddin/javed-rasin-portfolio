"use client";

import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Outfit } from "next/font/google";
import Link from "next/link";

import {
	Pagination,
	PaginationContent,
	PaginationItem,
} from "@/components/ui/pagination";
import { getNewsAndEvents } from "@/sanity/utils/news-and-events-utils";
import { useEffect, useState } from "react";

const outfit = Outfit({
	subsets: ["latin"],
	weight: ["200", "300", "400"],
});

const NEWS_AND_EVENTS_PER_PAGE = 6;

export type NewsAndEventsType = {
	_id: string;
	_createdAt: Date;

	title: string;
	slug: string;
	content: PortableTextBlock[];

	cardThumbnail: {
		asset: {
			url: string;

			metadata: {
				dimensions: {
					width: number;
					height: number;
				};
			};
		};
		alt: string;
	};

	date: Date;
};

export default function NewsAndEventsSection() {
	const [currentPage, setCurrentPage] = useState(1);
	const [NewsAndEventsData, setNewsAndEventsData] = useState<
		NewsAndEventsType[]
	>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		async function fetchNewsAndEventsData() {
			try {
				const data = await getNewsAndEvents();
				setNewsAndEventsData(data);
			} catch (error) {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		}

		fetchNewsAndEventsData();
	}, []);

	const totalPages = Math.ceil(
		NewsAndEventsData.length / NEWS_AND_EVENTS_PER_PAGE,
	);

	function handleNextPage() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		const nextPage = Math.min(currentPage + 1, totalPages);
		setCurrentPage(nextPage);
	}

	function handlePrevPage() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		const prevPage = Math.max(currentPage - 1, 1);
		setCurrentPage(prevPage);
	}

	return (
		<section
			className="container mx-auto min-h-svh"
			aria-label="Stay up to date with Javed Rasin's latest news and events"
		>
			<div className="flex flex-col items-center mb-10">
				<div className="flex flex-col gap-y-2 mt-20 mx-5">
					<h1
						className={`text-2xl sm:text-3xl text-center font-medium text-stone-900 ${outfit.className}`}
					>
						News and Events
					</h1>

					<p className="max-w-[30rem] text-center text-sm text-stone-800">
						Stay up to date with Javed Rasin's latest news and events.
					</p>
				</div>

				{/* Loading */}
				{isLoading && (
					<div>
						<svg
							aria-hidden="true"
							className="size-7 sm:size-8 md:size-9 lg:size-10 text-stone-200 animate-spin fill-stone-300 mt-20"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="currentColor"
							/>
							<path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentFill"
							/>
						</svg>
						<span className="sr-only">Loading</span>
					</div>
				)}

				{/* Error */}
				{!isLoading && isError && (
					<p className="text-red-500 text-center mt-20">
						Error while loading news and events.
						<br />
						Please try again later.
					</p>
				)}

				{/* No news or events available */}
				{!isLoading && !isError && NewsAndEventsData.length === 0 && (
					<p className="mt-20">No news or events available for now.</p>
				)}

				{/* News and events available. Show grid and pagination */}
				{!isLoading && !isError && NewsAndEventsData.length > 0 && (
					<>
						{/* News And Events grid */}
						<NewsAndEventsGrid
							currentPage={currentPage}
							NewsAndEventsData={NewsAndEventsData}
						/>

						{/* Pagination */}
						<PaginationSection
							currentPage={currentPage}
							totalPages={totalPages}
							onNextPage={handleNextPage}
							onPrevPage={handlePrevPage}
						/>
					</>
				)}
			</div>
		</section>
	);
}

function NewsAndEventsGrid({
	currentPage,
	NewsAndEventsData,
}: {
	currentPage: number;
	NewsAndEventsData: NewsAndEventsType[];
}) {
	const startIndex = (currentPage - 1) * NEWS_AND_EVENTS_PER_PAGE;
	const endIndex = startIndex + NEWS_AND_EVENTS_PER_PAGE;
	const displayedNewsAndEvents = NewsAndEventsData.slice(startIndex, endIndex);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-7 gap-y-12 w-full my-20 px-5">
			{displayedNewsAndEvents.map((entry) => (
				<NewsAndEventCard
					key={entry.title}
					image={entry.cardThumbnail.asset.url}
					alt={entry.cardThumbnail.alt}
					href={entry.slug}
					title={entry.title}
					content={entry.content}
				/>
			))}
		</div>
	);
}

function NewsAndEventCard({
	image,
	alt,
	href,
	title,
	content,
}: {
	image: string;
	alt: string;
	href: string;
	title: string;
	content: PortableTextBlock[];
}) {
	return (
		<Link href={`/news-and-events/${href}`}>
			<div className="flex flex-col w-full group">
				{/* Not using next/image because of its annoying Timeout error */}
				<img
					src={image}
					alt={alt}
					fetchPriority="high"
					className="h-60 object-contain"
				/>

				<p className="text-sm text-stone-700 mt-3">27/3/2025</p>

				<div className="flex justify-between mt-2">
					<p className="text-xl font-semibold max-w-[90%]">{title}</p>

					<ArrowUpRight
						strokeWidth={1}
						className="opacity-0 group-hover:opacity-100 transition-opacity duration-220"
					/>
				</div>

				<div className="text-sm mt-2 line-clamp-4 text-gray-800">
					<PortableText value={content} />
				</div>
			</div>
		</Link>
	);
}

function PaginationSection({
	currentPage,
	totalPages,
	onNextPage,
	onPrevPage,
}: {
	currentPage: number;
	totalPages: number;
	onNextPage: () => void;
	onPrevPage: () => void;
}) {
	return (
		<Pagination>
			<PaginationContent>
				{currentPage > 1 && (
					<PaginationItem>
						<button
							type="button"
							onClick={() => onPrevPage()}
							className="px-3 py-2 hover:bg-gray-200 transform duration-200 hover:cursor-pointer flex justify-center items-center gap-x-1 rounded-lg text-sm"
						>
							<ChevronLeft size={15} />
							Previous
						</button>
					</PaginationItem>
				)}

				{currentPage < totalPages && (
					<PaginationItem>
						<button
							type="button"
							onClick={() => onNextPage()}
							className="px-3 py-2 hover:bg-gray-200 transform duration-200 hover:cursor-pointer flex justify-center items-center gap-x-1 rounded-lg text-sm"
						>
							Next
							<ChevronRight size={15} />
						</button>
					</PaginationItem>
				)}
			</PaginationContent>
		</Pagination>
	);
}
