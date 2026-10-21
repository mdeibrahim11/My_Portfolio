import type { Metadata, Viewport } from "next";
import { Josefin_Sans, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090B12",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Md Eibrahim Molla | Software Engineer & Python Specialist",
  description:
    "Software Engineer in Uttara, Dhaka. Expertise in Python, Django, FastAPI, backend systems, scalable RESTful APIs, and modern web applications.",
  keywords: [
    "Md Eibrahim Molla",
    "mdeibrahim11",
    "Software Engineer",
    "Python Developer",
    "Django",
    "FastAPI",
    "Backend Engineer",
    "Dhaka Bangladesh",
  ],
  authors: [{ name: "Md Eibrahim Molla" }],
  openGraph: {
    title: "Md Eibrahim Molla | Software Engineer & Python Specialist",
    description:
      "Software Engineer portfolio of Md Eibrahim Molla. Robust backend systems, scalable RESTful APIs, and modern web applications.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${josefinSans.variable} ${spaceGrotesk.variable} ${inter.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#090B12] text-[#F5F5F5] font-sans antialiased selection:bg-[#F53F06]/30 selection:text-[#FF7A00] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

