import type { Metadata } from "next";
import { Karla } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ScrollToTop } from "../components/scroll-to-top";
import Script from "next/script";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Mari's Blog",
  description: "Mari's Blog",
};

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// https://www.reddit.com/r/nextjs/comments/1bhfikg/comment/kxwj9ou/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
const Header = dynamic(() => import("./Header"), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={`${karla.className} min-h-full px-6 py-10`}>
        <Script id="theme-toggle" strategy="afterInteractive">
          {`document.documentElement.classList.toggle("dark", localStorage.theme ===
        "dark" || (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches))`}
        </Script>
        <Header />
        <main className="mx-auto max-w-prose">
          {children}
          <ScrollToTop />
        </main>
        <footer className="max-w-prose mx-auto flex gap-6 justify-center mt-12 text-zinc-500 dark:text-zinc-400">
          <a>
            Made by Mari
          </a>
          <a href="mailto:mariamariana.cagnoni@gmail.com">
            Mail me
          </a>
        </footer>
      </body>
    </html>
  );
}
