const blogSchema = {
    name: "blog",
    title: "Blogs",
    type: "document",

    fields: [
        // Title of the blog
        {
            name: "title",
            title: "Title",
            type: "string",

            validation: (rule: any) => rule.required(),
        },

        // Slug for the blog (auto-generated from title). Looks like this: /blogs/my-blog-title
        {
            name: "slug",
            title: "Slug",
            type: "slug",

            options: {
                source: "title", // Uses the title as the slug
                maxLength: 96,
            },

            validation: (rule: any) => rule.required(),
        },

        // Content of the blog
        {
            name: "content",
            title: "Content",
            type: "array",

            validation: (rule: any) => rule.required(),

            of: [{ type: "block" }], // Allows for rich text content
        },

        // Card thumbnail
        {
            name: "thumbnail",
            title: "Thumbnail",
            type: "image",

            validation: (rule: any) => rule.required(),

            options: {
                hotspot: true,
            },

            // The alt text for the card thumbnail
            fields: [
                {
                    name: "alt",
                    title: "Alt text (Gets displayed if thumbnail fails to load)",
                    type: "string",

                    validation: (rule: any) => rule.required(),
                },
            ],
        },

        // Publish date
        {
            name: "date",
            title: "Date",
            type: "date",

            validation: (rule: any) => rule.required(),
        },
    ],
};

export default blogSchema;
