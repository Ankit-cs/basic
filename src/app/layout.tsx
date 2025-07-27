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
  title: "Ankit Kumar | Full Stack Developer | React, Next.js, Node.js, MongoDB",
  description: "Ankit Kumar is a passionate full stack developer building high-performance web applications using React, Next.js, Node.js, MongoDB, and modern web technologies. Explore projects, skills, and tech blogs.",
  keywords: [
    "Ankit Kumar",
    "Full Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "Node.js Developer",
    "MERN Stack",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer India",
    "Developer Portfolio Website",
    "MongoDB Developer",
    "Express.js Developer",
    "Software Engineer Portfolio"
  ],
  authors: [{ name: "Ankit Kumar", url: "https://port1-omega-six.vercel.app/" }],
  creator: "Ankit Kumar",
  publisher: "Ankit Kumar",
  openGraph: {
    title: "Ankit Kumar | Full Stack Developer Portfolio",
    description: "Browse Ankit Kumar's portfolio website to see full stack projects built with React, Next.js, Node.js, and MongoDB. Learn about his skills and developer journey.",
    url: "https://port1-omega-six.vercel.app/",
    siteName: "Ankit Kumar Portfolio",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false
    }
  },
  category: "Technology",
  metadataBase: new URL("https://port1-omega-six.vercel.app/"),
  alternates: {
    canonical: "https://port1-omega-six.vercel.app/"
  }
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
