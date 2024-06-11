import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ 
  subsets: ["latin"],
  variable: '--font-main'
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.contatempo.com.br/"),
  title: "Conta Tempo - Gestão de horas",
  description: "Acompanhe em tempo real a produtividade e engajamento do seu time.",
  keywords: ['gestão de horas, relógio de ponto, horas trabalhada, acompanhar funcionarios, monitoramento de trabalho, produtividade, bem-estar no trabalho, eficiência, acompanhamento de produtividade, engajamento da equipe, Software de rastreamento, '],
  icons: {
    icon: "./icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${urbanist.variable} max-lg:h-auto h-full`} lang="pt-br">
      <body className='max-lg:h-auto h-full content-center bg-gradient-to-r from-[#f0c10a] to-[#fc001b] flex'>{children}</body>
    </html>
  );
}
