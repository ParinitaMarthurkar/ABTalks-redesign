import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ABTalks Redesign",
  description: "A mobile-first redesign of the ABTalks 60-Day Coding Challenge platform.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-background text-text-primary font-sans antialiased">
        <main className="mx-auto min-h-screen w-full max-w-[390px] px-4">
          {children}
        </main>
      </body>
    </html>
  )
}
