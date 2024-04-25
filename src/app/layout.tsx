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
    <html className={`${urbanist.variable} + 'h-screen'`} lang="en">
      <body className='h-screen content-center bg-gradient-to-r from-[#f0c10a] to-[#fc001b] flex'>{children}</body>
    </html>
  );
}
