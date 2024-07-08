'use client'
import React, { ReactNode, useState } from "react";
import Image from "next/image";
import { HomeIllustrations, TotalHoras, AppUsados, JornadaDiaria, AlertaBournout, Relatorios, Ranking } from './Components/illustrations'
import ContactForm from './Components/form'
import Header from './Components/header'

type AccordionProps = {
  items: { title: string; content: string; component: ReactNode; }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {

  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="text-center">
          <div className="w-2/4 mx-auto drop-shadow-md">{item.component}</div>
          <h2 className="text-xl text-orange-ct">{item.title}</h2>
          <p className="text-secondary-ct p-2">{item.content}</p>
        </div>
      ))}
    </>
  );
};

type Plans = {
  items: {
    planName: string;
    usersLength: string;
    value: string;
    period: string;
    type: string;
    button: string;
  }[]
}

const Plans: React.FC<Plans> = ({ items }) => {

  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="text-center rounded px-4 py-8 border border-neutral-300 hover:border-sky-600">
          <h3 className="text-xl text-orange-ct font-semibold uppercase">{item.planName}</h3>
          <h2 className="text-md font-bold text-sky-500">{item.usersLength}</h2>
          <p className="text-secondary-ct mt-10 font-bold text-4xl">{item.value}<span className="text-neutral-300 font-bold text-lg">{item.period}</span></p>
          <p className="text-secondary-ct text-base">{item.type}</p>
          {item.button && (<button className="block mt-10 w-full py-2 px-4 text-sky-600 rounded bg-white border-2 border-sky-600 text-base uppercase">{item.button}</button>)}
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
]

const plans = [
  {
    planName: 'Pequena empresa',
    usersLength: 'Até 10 usuários',
    value: 'R$ 11,99',
    period: '/mês',
    type: 'Por usuário',
    button: ''

  },
  {
    planName: 'Empresa em expansão',
    usersLength: 'Até 50 usuários',
    value: 'R$ 9,99',
    period: '/mês',
    type: 'Por usuário',
    button: ''
  },
  {
    planName: 'Corporativo',
    usersLength: 'Até 100 usuários',
    value: 'R$ 7,99',
    period: '/mês',
    type: 'Por usuário',
    button: ''
  },
  {
    planName: 'Sob medida',
    usersLength: '100 ou mais usuários',
    value: 'Consulte',
    period: '',
    type: '',
    button: 'Entre em contato'
  }
]




export default function Home() {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')!.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

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
            <a href="#form" onClick={(e) => handleScroll(e)} className="max-lg:block max-lg:w-full w-auto inline-block py-2 px-4 text-white rounded bg-sky-600 border-2 border-sky-600 text-base uppercase">Solicite uma demonstração</a>
            <a href="#features" onClick={(e) => handleScroll(e)} className="max-lg:block max-lg:w-full max-lg:ml-0 max-lg:mt-4 w-auto ml-4 inline-block py-2 px-4 text-sky-600 rounded bg-white border-2 border-sky-600 text-base uppercase">Conheça as funcionalidades</a>
          </div>
          <div className="max-lg:hidden w-1/5 relative"></div>
        </div>
      </main>
      <div id="features" className="bg-neutral-100">
        <div className="container px-4 py-10 max-w-screen-xl mx-auto flex-row items-center">
          <div className="max-lg:grid-cols-1 grid grid-cols-3 gap-10">
            <Accordion items={features} />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container px-4 py-10 max-w-screen-xl mx-auto text-center">
          <h2 className="max-lg:w-full text-4xl font-bold w-3/4 text-text-color-ct mx-auto">Acompanhar a <span className="text-orange-ct">produtividade</span> e <span className="text-orange-ct">bem estar</span> dos seus colaboradores custa pouco.</h2>
          <h2 className="max-lg:w-full text-3xl font-bold text-orange-ct mt-10 mb-10">Teste grátis por 20 dias.</h2>
          <div className="max-lg:grid-cols-1 max-lg:px-10 grid grid-cols-4 gap-5">
            <Plans items={plans} />
          </div>
        </div>
      </div>
      <ContactForm />
      <div className="bg-white">
        <div className="container p-2 max-w-screen-xl mx-auto text-left">
          <p className="text-text-color-ct">Um produto: <a href="#" className="text-orange-ct">PLab</a> - Design por: <a href="#" className="text-orange-ct">Guilherme Moreira</a></p>
        </div>
      </div>
    </>
  );
}
