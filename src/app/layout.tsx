import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import BottomNavigation from "./components/navigation/BottomNavigation";

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
  description:
    "A mobile-first redesign of the ABTalks 60-Day Coding Challenge platform.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-background font-sans text-text-primary antialiased">
        <main className="mx-auto min-h-screen w-full max-w-[390px] px-4 pb-28">
          {children}
        </main>

        <BottomNavigation />
      </body>
    </html>
  );
}