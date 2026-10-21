import type { Metadata, Viewport } from "next";
import { Josefin_Sans, Anta } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const anta = Anta({
  variable: "--font-anta",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#05060A",
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
      className={`${josefinSans.variable} ${anta.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[var(--color-bg)] text-[#F5F5F5] font-josefin antialiased selection:bg-[#F53F06]/30 selection:text-[#F53F06] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
