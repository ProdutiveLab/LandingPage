import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ 
  subsets: ["latin"],
  variable: '--font-main'
});

export const metadata: Metadata = {
  title: "ContaTempo",
  description: "Gestão de horas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={urbanist.variable} lang="en">
      <body className='bg-gradient-to-r from-[#f0c10a] to-[#fc001b]'>{children}</body>
    </html>
  );
}
