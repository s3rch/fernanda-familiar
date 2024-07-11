import { GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Header, Navbar } from "@/components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fernanda Familiar",
  description: "Blog de Fernanda Familiar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <GoogleTagManager gtmId="GTM-XYZ" />
        <Analytics/>
        <Header />
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
