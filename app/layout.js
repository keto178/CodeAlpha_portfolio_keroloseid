import "./globals.css";
import Navbar from "./Componants/Navbar/Navbar";
import Footar from "./Componants/Footar/Footar";
import SmoothScroll from "./Componants/SmoothScroll";

export const metadata = {
  metadataBase: new URL("https://keroloseid.com"), 
  title: {
    default: "Kerolos Eid | Front-End Developer - React & Next.js",
    template: "%s | Kerolos Eid",
  },
  description: "Front-End Developer specializing in React & Next.js. I build fast, responsive, and scalable web apps with clean code and great UX. Available for freelance and full-time roles.",
  keywords: ["Kerolos Eid", "Front-End Developer", "React Developer", "Next.js Developer", "Frontend Portfolio", "Egypt"],
  authors: [{ name: "Kerolos Eid" }],
  creator: "Kerolos Eid",
  alternates: {
  canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Kerolos Eid | Front-End Developer",
    description: "I build fast, responsive web apps with React & Next.js",
    siteName: "Kerolos Eid Portfolio",
    images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Kerolos Eid — Front-End Developer Portfolio",
    },
  ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerolos Eid | Front-End Developer",
    description:"I build modern, responsive, high-performance web apps with React & Next.js — focused on clean code and great UX.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};



export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll/>
        <Navbar />
        {children}
        <Footar/>
      </body>
    </html>
  );
}
