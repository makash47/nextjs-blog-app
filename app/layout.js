import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultOgImage =
  "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=1200&auto=format&fit=crop&q=80";

export const metadata = {
  metadataBase: new URL(
    process.env.SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Blogify | Ideas, Templates, Tutorial",
    template: "%s | Blogify",
  },
  description: "Explore practical tutorials, programming guides, and insights on modern web development.",
  applicationName: "Blogify",
  keywords: ["Blogify", "Nextjs", "React", "Web Development", "Blogging"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Blogify",
    title: "Blogify | Ideas, Templates, Tutorial",
    description: "Explore and write modern tech blogs on Blogify.",
    url: "/",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Blogify Cover Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogify | Ideas, Templates, Tutorial",
    description: "Explore practical tutorials, programming guides, and insights on modern web development.",
    images: [defaultOgImage],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Toaster richColors position="top-right" />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}