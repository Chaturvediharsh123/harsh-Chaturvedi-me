import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

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
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-zinc-950 text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
