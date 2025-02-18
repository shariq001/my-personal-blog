import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import LayoutWrapper from "@/components/LayoutWrapper"; // Import the client wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadata is allowed in a server component
export const metadata: Metadata = {
  title: "Muhammad's Personal Blog",
  description: "Explore Muhammad Shariq's personal blog, where he shares insights, experiences, and thoughts on tech, learning, and personal growth. Stay inspired and informed!",
  icons: "/logo.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
