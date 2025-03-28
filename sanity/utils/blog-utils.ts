import type { BlogType } from "@/app/blogs/BlogsSection";
import { createClient, groq } from "next-sanity";

const ClientConfig = {
    projectId: "1unvbypl",
    dataset: "production",

    useCdn: true,
    apiVersion: "2025-03-27", // Use current date (UTC format yyyy-mm-dd)
};

// Fetch all the blogs
export async function getBlogs(): Promise<BlogType[]> {
    const client = createClient(ClientConfig);

    return client.fetch(
        groq`*[_type == "blog"] | order(_createdAt desc){
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

// Fetch single blog using slug
export async function getBlogBySlug(slug: string): Promise<BlogType> {
    const client = createClient(ClientConfig);

    return client.fetch(
        groq`*[_type == "blog" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content,
    "cardThumbnail": thumbnail{asset->{url}, alt},
    date
  }`,
        { slug },
        { cache: "no-store" }
    );
}

// TODO: Not tested if these grok queries work or not