import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harsh Chaturvedi | AI Engineer Portfolio",
  description:
    "AI Engineer and B.Tech Artificial Intelligence student specializing in AI Agents, RAG Systems, Computer Vision, and FastAPI backend development.",
  keywords: [
    "Harsh Chaturvedi",
    "AI Engineer",
    "Machine Learning",
    "RAG",
    "LangChain",
    "Computer Vision",
    "FastAPI",
    "Portfolio",
  ],
  authors: [{ name: "Harsh Chaturvedi" }],
  openGraph: {
    title: "Harsh Chaturvedi | AI Engineer Portfolio",
    description:
      "Building AI Agents, RAG Systems, Computer Vision Applications and Intelligent Backend Systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Chaturvedi | AI Engineer",
    description:
      "AI Engineer specializing in Agentic AI, RAG, Computer Vision & FastAPI.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
