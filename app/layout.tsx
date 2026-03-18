import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {

  title: "Prithalsing More — Software Engineer & GenAI Builder",
  description:
    "Portfolio of Prithalsing Vilas More — Full-Stack Developer, GenAI Engineer. Building AI-powered systems and scalable software.",
  keywords: [
    "Prithalsing More",
    "Software Engineer",
    "Full-Stack Developer",
    "GenAI",
    "LangChain",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Prithalsing Vilas More" }],
  openGraph: {
    title: "Prithalsing More — Software Engineer & GenAI Builder",
    description:
      "Building AI-powered systems & scalable software. Full-Stack Developer and GenAI Engineer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#020010] text-white antialiased overflow-x-hidden">
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
