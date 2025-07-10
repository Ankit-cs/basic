import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ankit Kumar | Full Stack Developer Portfolio",
  description: "Ankit Kumar - Full Stack Developer specializing in modern web technologies. Showcasing my projects, skills, and experience in React, Next.js, Node.js, and more.",
  keywords: "Ankit Kumar, Full Stack Developer, React, Next.js, Node.js, Portfolio, Web Developer",
  authors: [{ name: "Ankit Kumar" }],
  creator: "Ankit Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`bg-white ${geistSans.variable} ${geistMono.variable} ${archivo.variable}`}>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
