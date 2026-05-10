import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rashidul Islam Portfolio",
  description: "Frontend web developer. Full Stack Web Developer Portfolio",

  keywords: [
    "Rashidul Islam",
    "Portfolio",
    "Next.js Developer",
    "MERN Stack Developer",
    "Frontend Developer",
  ],

  authors: [{ name: "Rashidul Islam" }],

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "Rashidul Portfolio",
    description: "Frontend web developer. Full Stack Web Developer Portfolio",
    images: ["/banner.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050505] text-[#e5e7eb] antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
