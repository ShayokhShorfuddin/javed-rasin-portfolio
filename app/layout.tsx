import type { Metadata } from "next";
import "./globals.css";
import Template from "./template";

export const metadata: Metadata = {
  title: "Javed Rasin | Portfolio",
  description:
    "Javed Rasin (Bengali: জাবেদ রাসিন) is a Bangladeshi poet & fiction writer. He has completed his graduation & post-graduation in law from the University of Dhaka.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAF9F6]">
        <Template>{children}</Template>
      </body>
    </html>
  );
}
