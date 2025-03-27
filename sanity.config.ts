import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

export default defineConfig({
    title: "Javed Rasin Portfolio",

    projectId: "1unvbypl",
    dataset: "production",

    apiVersion: "2025-03-27", // Use current date (UTC format yyyy-mm-dd)
    basePath: "/admin", // The route for the Sanity Studio

    plugins: [structureTool()],
});