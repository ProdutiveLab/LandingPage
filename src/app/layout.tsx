import type { Metadata } from "next";
import Script from 'next/script'
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ 
  subsets: ["latin"],
  variable: '--font-main'
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.contatempo.com.br/"), // URL base do seu site
  title: "Conta Tempo Gestão de horas",
  description: "Acompanhe em tempo real a produtividade e engajamento do seu time.",
  keywords: ['gestão de horas, relógio de ponto, horas trabalhada, acompanhar funcionarios, monitoramento de trabalho, produtividade, bem-estar no trabalho, eficiência, acompanhamento de produtividade, engajamento da equipe, Conta Tempo'],
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
      <head>
        <Script
          strategy='lazyOnload'
          src={`https://www.googletagmanager.com/gtag/js?id=G-LFTRE6HW2Q`}
        />

        <Script id='' strategy='lazyOnload'>
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-LFTRE6HW2Q', {
                page_path: window.location.pathname,
                });
            `}
        </Script>
        </head>
      <body className='max-lg:h-auto h-full content-center bg-gradient-to-r from-[#f0c10a] to-[#fc001b] flex'>{children}</body>
    </html>
  );
}
