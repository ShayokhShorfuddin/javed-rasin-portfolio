import type { Rule } from "sanity";

const NewsAndEventsSchema = {
    name: "NewsAndEvents",
    title: "News and events",
    type: "document",

    fields: [
        // Title of the News or Event
        {
            name: "title",
            title: "Title",
            type: "string",

            validation: (rule: Rule) => rule.required(),
        },

        // Slug for the news or event (auto-generated from title). Looks like this: /news/big-election-campaign-in-dhaka or /events/annual-meeting
        {
            name: "slug",
            title: "Slug",
            type: "slug",

            options: {
                source: "title", // Uses the title as the slug
                maxLength: 96,
            },

            validation: (rule: Rule) => rule.required(),
        },

        // Content of the news or event
        {
            name: "content",
            title: "Content",
            type: "array",

            validation: (rule: Rule) => rule.required(),

            of: [{ type: "block" }], // Allows for rich text content
        },

        // Card thumbnail
        {
            name: "thumbnail",
            title: "Thumbnail",
            type: "image",

            validation: (rule: Rule) => rule.required(),

            options: {
                hotspot: true,
            },

            // The alt text for the card thumbnail
            fields: [
                {
                    name: "alt",
                    title: "Alt text (Gets displayed if thumbnail fails to load)",
                    type: "string",

                    validation: (rule: Rule) => rule.required(),
                },
            ],
        },

        // Publish date
        {
            name: "date",
            title: "Date",
            type: "date",

            validation: (rule: Rule) => rule.required(),
        },
    ],
};

export default NewsAndEventsSchema;
