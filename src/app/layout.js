import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./globals.css";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import AosProvider from "@/components/AosProvider/AosProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://rashidul-islam-portfolio-ric1.vercel.app"),

  title: {
    default: "Rashidul Islam | Frontend & MERN Stack Developer",
    template: "%s | Rashidul Islam",
  },

  description:
    "Rashidul Islam is a Frontend and MERN Stack Developer specializing in Next.js, React.js, Node.js, MongoDB, and modern web applications.",

  keywords: [
    "Rashidul Islam",
    "Rashidul Islam Portfolio",
    "Frontend Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "JavaScript Developer",
    "Web Developer Bangladesh",
    "Full Stack Developer",
    "Portfolio Website",
    "Node.js Developer",
    "MongoDB Developer",
    "Tailwind CSS",
  ],

  authors: [{ name: "Rashidul Islam" }],
  creator: "Rashidul Islam",
  publisher: "Rashidul Islam",

  applicationName: "Rashidul Islam Portfolio",

  category: "technology",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://rashidul-islam-portfolio-ric1.vercel.app",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    type: "website",
    url: "https://rashidul-islam-portfolio-ric1.vercel.app",
    title: "Rashidul Islam | Frontend & MERN Stack Developer",
    description:
      "Portfolio of Rashidul Islam — Frontend & MERN Stack Developer building modern, scalable, and high-performance web applications.",
    siteName: "Rashidul Islam Portfolio",

    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Rashidul Islam Portfolio Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rashidul Islam | Frontend & MERN Stack Developer",
    description:
      "Frontend & MERN Stack Developer specializing in Next.js, React, Node.js, and modern UI development.",
    images: ["/banner.png"],
  },

  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable}
          bg-[#050505] 
          text-[#e5e7eb] 
          antialiased
        `}
      >
        <Navbar />
        <AosProvider >
        {children}
        </AosProvider>
      </body>
    </html>
  );
}
