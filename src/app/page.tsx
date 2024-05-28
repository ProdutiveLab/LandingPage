
'use client'
import React, { useState } from "react";
import Image from "next/image";


const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-8/12">
      {items.map((item, index) => (
        <div key={index} className="border-b">
          <div
            className="cursor-pointer py-4"
            onClick={() => handleToggle(index)}
          >
            <h2 className="text-xl">{item.title}</h2>
          </div>
          {activeIndex === index && (
            <div className="py-4">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};



const features = [
  {
    title: 'Total de Horas Trabalhadas',
    content: 'Obtenha uma visão em tempo real do total de horas trabalhadas pela sua equipe, com a possibilidade de visualizar os dados diários, semanais e mensais.'
  },
  {
    title: 'Aplicativos Mais Usados',
    content: 'Veja os aplicativos mais utilizados pela sua equipe para entender melhor seus hábitos de trabalho.'
  },
  {
    title: 'Jornada Diária',
    content: 'Acompanhe a jornada diária de cada colaborador, desde o início dos trabalhos até a última atividade do dia. Veja os aplicativos mais utilizados, as principais tarefas realizadas (aquelas que consumiram mais tempo) e navegue por uma linha do tempo detalhada para obter um panorama completo do dia.'
  },
  {
    title: 'Alerta de Desgaste (Burnout)',
    content: 'Receba alertas caso algum colaborador esteja sobrecarregado, trabalhando mais horas do que o recomendável, ajudando a prevenir o burnout.'
  },
  {
    title: 'Relatórios Automáticos',
    content: 'Receba um compilado de dados diretamente no seu e-mail semanalmente, facilitando o acompanhamento contínuo da produtividade.'
  },
  {
    title: 'Ranking de Colaboradores',
    content: 'Saiba a quantidade de horas trabalhadas por cada funcionário, tanto no dia atual quanto em períodos selecionados, permitindo uma comparação e análise detalhada.'
  }
];

export default function Home() {
  const [likes, setLikes] = useState('sobre');

  return (
    <main className="max-lg:mt-0 mt-8 bg-bgMain rounded-3xl container mx-auto border-white border-8 self-center shadow-lg">
      <div className="max-lg:p-4 p-8">
        <div className={`max-lg:flex-col max-lg:flex-col-reverse flex max-lg:items-center transition-all duration-500 ${likes === 'sobre' ? 'opacity-100 h-auto visible block' : 'opacity-0 p-0 h-0 invisible none'}`}>
          <div className="relative w-4/12 max-lg:w-1/2">
            <Image
              src="/home6.png"
              alt="Vercel Logo"
              className="max-lg:relative max-lg:bottom-auto max-lg:left-auto max-lg:mt-8 max-lg:max-w-full absolute max-w-full max-w-lg -bottom-[168px] -left-[35px] h-auto"
              width={349}
              height={559}
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex">
              <div className="flex-1 flex flex-col">
                <p className="max-lg:text-3xl text-4xl mb-8 drop-shadow-lg">Acompanhe em <span className="max-lg:text-5xl text-6xl font-extrabold">tempo real</span> a <span className="max-lg:text-5xl text-6xl font-extrabold">produtividade</span> e <span className="max-lg:text-5xl text-6xl font-extrabold">engajamento</span> do seu time.</p>
              </div>
            </div>
            <p className="text-stone-600 p-8 text-2xl text-center text-white">Equilibrando eficiência e bem-estar, nossa solução de gestão de horas oferece insights que impulsionam produtividade e cuidam do seu time.</p>
            <button className="w-auto m-auto inline-block py-2 px-4 text-white rounded bg-sky-600">Solicitar teste gratuito</button>
          </div>
        </div>
        <div className={`${likes === 'funcionalidades' ? 'block' : 'hidden'}`}>
          <div className="flex flex-col">
          <h1 className="max-lg:text-3xl text-4xl mb-8 drop-shadow-lg">Funcionalidades</h1>
          <div className="flex justify-between items-center">
            <Accordion items={features} />
            <div className="relative max-lg:w-1/2">
              <Image
                src="/home2.png"
                alt="Vercel Logo"
                className="m-auto"
                width={349}
                height={559}
                priority
              />
            </div>
          </div>
          </div>
        </div>
        <div className={`${likes === 'contato' ? 'block' : 'hidden'}`}>
          <div className="flex flex-col">
          <h1 className="max-lg:text-3xl text-4xl mb-8 drop-shadow-lg">Contato</h1>
          <div className="flex justify-between">
            <div>
            <p className="py-4">Fale conosco atráves do número abaixo e entraremos em contato</p>
            <a className="text-white rounded bg-sky-600 p-4" href="https://api.whatsapp.com/send?phone=+5511992047052&amp;text=Olá, Gostaria de conhecer mais sobre o produto">(11) 99204-7052</a>
            </div>
            <div className="relative max-lg:w-1/2">
              <Image
                src="/home4.png"
                alt="Vercel Logo"
                className="m-auto"
                width={349}
                height={559}
                priority
              />
            </div>
          </div>
          </div>
        </div>
      </div>
      {/** bottom */}
      <div className="max-lg:p-0 max-lg:pt-4 max-lg:sticky max-lg:bottom-0 max-lg:container bg-white overflow-hidden w-full flex justify-end items-center p-4">
        <ul className="flex justify-between">
          <li className="mr-3">
            <button onClick={() => setLikes('sobre')} className={`max-lg:px-2 inline-block border border-white rounded py-2 px-4 hover:border-gray-200 ${likes === 'sobre' ? 'bg-orange text-white' : 'text-gray-400'}`}>Sobre</button>
          </li>
          <li className="mr-3">
            <button onClick={() => setLikes('funcionalidades')} className={`max-lg:px-2 inline-block border border-white rounded hover:border-gray-200 py-2 px-4 ${likes === 'funcionalidades' ? 'bg-orange text-white' : 'text-gray-400'}`}>Funcionalidades</button>
          </li>
          <li className="mr-3">
            <button onClick={() => setLikes('contato')} className={`max-lg:px-2 inline-block border border-white rounded py-2 px-4 rounded hover:border-gray-200 ${likes === 'contato' ? 'bg-orange text-white' : 'text-gray-400'}`}>Contato</button>
          </li>
        </ul>
        <span className="text-center">
          <Image
            src="/contaTempo.png"
            alt="Vercel Logo"
            className="relative"
            width={259}
            height={62}
            priority
          />
          <p className="max-lg:text-sm text-lg text-gray-400">Gestão de horas</p>
        </span>
      </div>
    </main>
  );
}
