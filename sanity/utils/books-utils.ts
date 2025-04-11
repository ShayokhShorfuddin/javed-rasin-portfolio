import type { BookType } from "@/app/books/BooksSection";
import { createClient, groq } from "next-sanity";

const ClientConfig = {
    projectId: "1unvbypl",
    dataset: "production",

    useCdn: true,
    apiVersion: "2025-03-27", // Use current date (UTC format yyyy-mm-dd)
};

// Fetch all the books
export async function getBooks(): Promise<BookType[]> {
    const client = createClient(ClientConfig);

    return client.fetch(
        groq`*[_type == "books"] | order(_createdAt desc){
    _id,
    _createdAt,
    name,
    description,
    ISBN,
    "slug": slug.current,
    rokomariLink,
    "bookCover": bookCover{asset->{url}, alt}
  }`,
        {},
        { cache: "no-store" }
    );
}

// Fetch single books using slug
export function getBookBySlug(slug: string): Promise<BookType> {
    const client = createClient(ClientConfig);

    return client.fetch(
        groq`*[_type == "books" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    description,
    ISBN,
    "slug": slug.current,
    rokomariLink,
    "bookCover": bookCover{asset->{url}, alt}
  }`,
        { slug },
        { cache: "no-store" }
    );
}