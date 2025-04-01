import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ClerkProvider} from '@clerk/nextjs'


const inter=Inter({subsets:['latin']})

export const metadata: Metadata = {
  title: "Finance-tracker",
  description: "Best finance tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header/>
        <main className="min-h-screen">{children}</main>
        <Footer/>
        </body>
    </html>
    </ClerkProvider>
  );
}
