import { index, type RouteConfig } from "@react-router/dev/routes";

export default [
	index("routes/index.tsx"),
	{
		path: "*", // ← must be LAST
		file: "routes/not-found.tsx",
	},
] satisfies RouteConfig;

// TODO: Add 404 not found page
