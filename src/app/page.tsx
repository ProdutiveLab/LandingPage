'use client'
import React, { useRef } from "react";
import { HomeIllustrations } from './Components/illustrations'
import ContactForm from './Components/form'
import Header from './Components/header'
import Features from './Components/features'
import Plans from './Components/plans'


export default function Home() {
  const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    section1: useRef<HTMLDivElement>(null),
  }

  const handleScroll = (id: string) => {
    const targetElement = sectionRefs[id]?.current;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <Header />
      <main className="bg-orange mt-[73px] p-10 max-lg:p-4 max-lg:py-8">
        <div className="container p-4 max-w-screen-xl mx-auto bg-white drop-shadow-xl flex flex-row items-center max-lg:flex-col">
          <div className="max-lg:basis-full max-lg:w-3/5 basis-1/4 relative">
            <HomeIllustrations />
          </div>
          <div className="basis-3/4 pl-8 max-lg:p-0">
            <h2 className="text-5xl font-extrabold text-text-color-ct pr-8">Acompanhe em tempo real a <span className="text-orange-ct">produtividade</span> e <span className="text-orange-ct">engajamento</span> do seu time.</h2>
            <p className="text-2xl my-8 text-secondary-ct">Equilibrando eficiência e bem-estar, nossa solução de gestão de horas oferece insights que impulsionam produtividade e cuidam do seu time.</p>
            <a href="https://app.contatempo.com.br/cadastro" target="_blank" className="max-lg:block max-lg:w-full w-auto inline-block py-2 px-4 text-white rounded bg-sky-600 border-2 border-sky-600 uppercase text-center">Cadastre-se e use grátis por 20 dias</a>
            <button onClick={() =>  handleScroll("section1")} className="max-lg:block max-lg:w-full max-lg:ml-0 max-lg:mt-4 w-auto ml-4 inline-block py-2 px-4 text-sky-600 rounded bg-white border-2 border-sky-600 text-center uppercase">Conheça as funcionalidades</button>
          </div>
          <div className="max-lg:hidden w-1/5 relative"></div>
        </div>
      </main>
      <div ref={sectionRefs.section1} id="features" className="bg-neutral-100">
        <div className="container px-4 py-10 max-w-screen-xl mx-auto flex-row items-center">
          <div className="max-lg:grid-cols-1 grid grid-cols-3 gap-10">
              <Features />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container px-4 py-10 max-w-screen-xl mx-auto text-center">
          <h2 className="max-lg:w-full text-4xl font-bold w-3/4 text-text-color-ct mx-auto">Acompanhar a <span className="text-orange-ct">produtividade</span> e <span className="text-orange-ct">bem estar</span> dos seus colaboradores custa pouco.</h2>
          <h2 className="max-lg:w-full text-3xl font-bold text-orange-ct mt-10 mb-10">Faça o seu cadastro e use grátis por 20 dias.</h2>
          <div className="max-lg:grid-cols-1 max-lg:px-10 grid grid-cols-4 gap-5">
            <Plans />
          </div>
        </div>
      </div>
      <ContactForm />
      <div className="bg-white">
        <div className="container p-2 max-w-screen-xl mx-auto text-left">
          <p className="text-text-color-ct">Um produto: <a href="#" className="text-orange-ct">PLab</a> - Design por: <a href="#" className="text-orange-ct">Guilherme Moreira</a></p>
        </div>
      </div>
      <a className="fixed bottom-10 right-10" target="_blank" href="https://wa.me//5511944623054?text=Tenho%20interesse%20em%20conhecer%20mais%20sobre%20os%20produtos%20do%20ContaTempo">
        <svg className="m-auto" data-testid="geist-icon" height="42" strokeLinejoin="round" viewBox="0 0 16 16" width="42"><path fillRule="evenodd" clipRule="evenodd" d="M13.6376 2.32334C12.1421 0.825856 10.153 0.000759757 8.03365 0C3.66658 0 0.112432 3.55377 0.110912 7.92199C0.110152 9.31841 0.475216 10.6814 1.1685 11.8826L0.0444336 15.9883L4.24437 14.8867C5.40147 15.5181 6.70446 15.8504 8.03025 15.8508H8.03365C12.4 15.8508 15.9545 12.2967 15.956 7.92844C15.9568 5.8114 15.1336 3.8212 13.6376 2.32372V2.32334ZM8.03365 14.5129H8.031C6.84956 14.5125 5.69058 14.1949 4.67935 13.5951L4.43887 13.4523L1.94649 14.106L2.61166 11.6759L2.45514 11.4267C1.79605 10.3783 1.4477 9.16645 1.44846 7.92239C1.44998 4.29187 4.40392 1.33793 8.03635 1.33793C9.79515 1.33869 11.4484 2.02438 12.6917 3.26924C13.9351 4.51372 14.6192 6.16849 14.6185 7.92769C14.6169 11.5586 11.663 14.5125 8.03365 14.5125V14.5129ZM11.6455 9.5813C11.4476 9.48217 10.4744 9.00349 10.2928 8.93741C10.1112 8.87129 9.97942 8.83828 9.84757 9.03655C9.71577 9.23487 9.33628 9.68084 9.22079 9.81264C9.1053 9.94484 8.9898 9.96119 8.79188 9.86201C8.594 9.76287 7.95617 9.55394 7.19984 8.87965C6.61142 8.35465 6.21402 7.70661 6.09858 7.50829C5.98309 7.31001 6.08642 7.20287 6.18516 7.10449C6.27405 7.0156 6.38309 6.87315 6.48222 6.75766C6.58141 6.64217 6.61407 6.55938 6.68015 6.42754C6.74627 6.29534 6.71321 6.17989 6.66384 6.08071C6.61442 5.98157 6.21862 5.00716 6.05336 4.61096C5.89265 4.22501 5.72934 4.27744 5.60815 4.27098C5.49265 4.26528 5.36085 4.26414 5.22865 4.26414C5.09646 4.26414 4.88218 4.31352 4.70061 4.51182C4.51904 4.7101 4.00771 5.18913 4.00771 6.16314C4.00771 7.13715 4.71696 8.07889 4.8161 8.21109C4.91524 8.34329 6.21212 10.3426 8.19776 11.2004C8.66998 11.4043 9.03882 11.5263 9.32638 11.6175C9.8005 11.7683 10.232 11.747 10.5731 11.6961C10.9534 11.6391 11.7443 11.2171 11.9092 10.7547C12.074 10.2924 12.074 9.89582 12.0247 9.81339C11.9753 9.73096 11.8431 9.68119 11.6452 9.58206L11.6455 9.5813Z" fill="#25D366"></path></svg>
        <span className="block text-center">Fale conosco</span>
      </a>
    </>
  )
}
