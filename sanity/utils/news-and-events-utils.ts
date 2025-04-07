import type { NewsAndEventsType } from "@/app/news-and-events/NewsAndEventsSection";
import { createClient, groq } from "next-sanity";

const ClientConfig = {
    projectId: "1unvbypl",
    dataset: "production",

    useCdn: true,
    apiVersion: "2025-03-27", // Use current date (UTC format yyyy-mm-dd)
};

// Fetch all the news and events
export async function getNewsAndEvents(): Promise<NewsAndEventsType[]> {
    const client = createClient(ClientConfig);

    return client.fetch(
        groq`*[_type == "NewsAndEvents"] | order(_createdAt desc){
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content,
    "cardThumbnail": thumbnail{asset->{url}, alt},
    date
  }`,
        {},
        { cache: "no-store" }
    );
}

// Fetch single news or event using slug
export function getNewsOrEventBySlug(slug: string): Promise<NewsAndEventsType> {
    const client = createClient(ClientConfig);

    return client.fetch(
        groq`*[_type == "NewsAndEvents" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content,
    "cardThumbnail": thumbnail{asset->{url, metadata {dimensions}}, alt},
    date
  }`,
        { slug },
        { cache: "no-store" }
    );
}