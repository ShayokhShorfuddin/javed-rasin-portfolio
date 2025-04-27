import type { Metadata } from "next";
import AdminPage from "./[[...index]]/page";

export const metadata: Metadata = {
	robots: {
		index: false,
		follow: false,
	},
};

export default function Layout() {
	return <AdminPage />;
}
