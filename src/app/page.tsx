
'use client'
import React, { ReactNode, useState } from "react";
import Image from "next/image";
import * as gtag from './gtag.js';
import { HomeIllustrations, TotalHoras, AppUsados, JornadaDiaria, AlertaBournout, Relatorios, Ranking } from './illustrations'

interface AccordionProps {
  items: { title: string; content: string;   component: ReactNode; }[];
}



const Accordion: React.FC<AccordionProps> = ({ items }) => {


  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="text-center max-md:pb-10">
          <div className="w-2/4 mx-auto">{item.component}</div>
            <h2 className="text-xl text-orange-ct">{item.title}</h2>
            <p className="text-text-ct font-semibold p-8">{item.content}</p>
        </div>
      ))}
    </>
  );
};



const features = [
  {
    title: 'Total de Horas Trabalhadas',
    content: 'Obtenha uma visão em tempo real do total de horas trabalhadas pela sua equipe, com a possibilidade de visualizar os dados diários, semanais e mensais.',
    component: <TotalHoras />
  },
  {
    title: 'Aplicativos Mais Usados',
    content: 'Veja os aplicativos mais utilizados pela sua equipe para entender melhor seus hábitos de trabalho.',
    component: <AppUsados />
  },
  {
    title: 'Relatórios Automáticos',
    content: 'Receba um compilado de dados diretamente no seu e-mail semanalmente, facilitando o acompanhamento contínuo da produtividade.',
    component: <Relatorios />
  },
  {
    title: 'Jornada Diária',
    content: 'Acompanhe a jornada diária de cada colaborador, desde o início dos trabalhos até a última atividade do dia. Veja os aplicativos mais utilizados, as principais tarefas realizadas (aquelas que consumiram mais tempo) e navegue por uma linha do tempo detalhada para obter um panorama completo do dia.',
    component: <JornadaDiaria />
  },
  {
    title: 'Alerta de Desgaste (Burnout)',
    content: 'Receba alertas caso algum colaborador esteja sobrecarregado, trabalhando mais horas do que o recomendável, ajudando a prevenir o burnout.',
    component: <AlertaBournout />
  },
  {
    title: 'Ranking de Colaboradores',
    content: 'Saiba a quantidade de horas trabalhadas por cada funcionário, tanto no dia atual quanto em períodos selecionados, permitindo uma comparação e análise detalhada.',
    component: <Ranking />
  }
];




export default function Home() {

  return (
    <>
      <header className="bg-white drop-shadow-xl">
        <div className="container max-w-screen-xl mx-auto py-4">
          <Image
            src="/contaTempo.png"
            alt="Vercel Logo"
            className="relative"
            width={139}
            height={30}
            priority
          />
        </div>
      </header>
      <main className="bg-orange p-10 max-md:p-4">
        <div className="container p-10 max-md:p-4 max-w-screen-xl mx-auto bg-white drop-shadow-xl flex flex-row items-center max-md:flex-col ">
          <div className="max-md:basis-full max-md:w-3/5 basis-1/4 relative">
            <HomeIllustrations />
          </div>
          <div className="basis-3/4 pl-8 max-md:p-0">
            <h2 className="text-5xl font-extrabold text-text-ct pr-8">Acompanhe em tempo real a <span className="text-orange-ct">produtividade</span> e <span className="text-orange-ct">engajamento</span> do seu time.</h2>
            <p className="text-2xl my-8 text-text-ct">Equilibrando eficiência e bem-estar, nossa solução de gestão de horas oferece insights que impulsionam produtividade e cuidam do seu time.</p>
            <button className="max-md:block max-md:w-full w-auto inline-block py-2 px-4 text-white rounded bg-sky-600 border-2 border-sky-600 text-xl uppercase">Solicite uma demonstração</button>
            <button className="max-md:block max-md:w-full max-md:px-0 max-md:ml-0 max-md:mt-4 w-auto ml-8 inline-block py-2 px-4 text-sky-600 rounded bg-white border-2 border-sky-600 text-lg uppercase">Conheça as funcionalidades</button>
          </div>
        </div>
      </main>
      <div className="bg-neutral-100">
        <div className="container py-10 max-w-screen-xl mx-auto drop-shadow-xl flex-row items-center">
          <div className="max-md:grid-cols-1 grid grid-cols-3 gap-10">
            <Accordion items={features} />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container py-10 max-w-screen-xl mx-auto drop-shadow-xl flex-row items-center">
          <h2>Monitorar a produtividade e bem estar dos seus colaboradores custa pouco</h2>
          <p>Desbloqueie o potencial máximo da sua equipe com o ContaTempo.</p>
        </div>
      </div>
    </>
  );
}
