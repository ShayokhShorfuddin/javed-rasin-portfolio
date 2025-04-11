import type { Rule } from "sanity";

const BooksSchema = {
    name: "books",
    title: "Books",
    type: "document",

    fields: [
        // Name of the book
        {
            name: "name",
            title: "Name",
            type: "string",

            validation: (rule: Rule) => rule.required(),
        },

        // Book description
        {
            name: "description",
            title: "Description",
            type: "string",

            validation: (rule: Rule) => rule.required(),
        },

        // ISBN
        {
            name: "ISBN",
            title: "ISBN",
            type: "string",

            validation: (rule: Rule) => rule.required(),
        },

        // Slug for the book (auto-generated from name). Looks like this: /books/my-awesome-book
        {
            name: "slug",
            title: "Slug",
            type: "slug",

            options: {
                source: "name", // Uses the title as the slug
                maxLength: 96,
            },

            validation: (rule: Rule) => rule.required(),
        },

        // Rokomari store link
        {
            name: "rokomariLink",
            title: "Rokomari store link",
            type: "string",

            validation: (rule: Rule) => rule.required(),
        },

        // Book cover
        {
            name: "bookCover",
            title: "Book cover",
            type: "image",

            validation: (rule: Rule) => rule.required(),

            options: {
                hotspot: true,
            },

            // The alt text for the book cover
            fields: [
                {
                    name: "alt",
                    title: "Alt text (Gets displayed if book cover fails to load)",
                    type: "string",

                    validation: (rule: Rule) => rule.required(),
                },
            ],
        },
    ],
};

export default BooksSchema;
