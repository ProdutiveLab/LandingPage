import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import Script from 'next/script'
import * as gtag from './gtag.js';
import "./globals.css";

const SourceSans3 = Source_Sans_3({ 
  subsets: ["latin"],
  variable: '--font-main'
});

export const viewport: Viewport = {
  themeColor: '#ff5522',
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.contatempo.com.br/"),
  title: "Conta Tempo - Gestão de horas",
  description: "Acompanhe em tempo real a produtividade e engajamento do seu time.",
  keywords: ['gestão de horas, relógio de ponto, horas trabalhada, acompanhar funcionarios, monitoramento de trabalho, produtividade, bem-estar no trabalho, eficiência, acompanhamento de produtividade, engajamento da equipe, Software de rastreamento, '],
  icons: {
    icon: "./icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${SourceSans3.variable}`} lang="pt-br">
       <head>
        <Script
          strategy='lazyOnload'
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script id='' strategy='lazyOnload'>
          {`
               window.dataLayer = window.dataLayer || []; 
               function gtag()
               {dataLayer.push(arguments);}
                gtag('js', new Date()); 
                gtag('config', '${gtag.GA_TRACKING_ID}');
            `}
        </Script>
       
        </head>
      {<body className="bg-white"/* className='max-lg:h-auto h-full content-center bg-gradient-to-r from-[#f0c10a] to-[#fc001b] flex' */>{children}</body>}
    </html>
  );
}
