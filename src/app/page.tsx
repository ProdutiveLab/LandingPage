
'use client'
import React from "react";
import Image from "next/image";


export default function Home() {
  const [likes, setLikes] = React.useState('sobre');

  return (
    <main className="md:container rounded-3xl md:mx-auto border-white border-8 self-center shadow-lg">
      <div className={`flex p-8 transition-all duration-500 ${likes === 'sobre' ? 'opacity-100 h-auto visible' : 'opacity-0 p-0 h-0 invisible'}`}>
        <div className="relative flex-none w-2/12">
          <Image
            src="/home6.png"
            alt="Vercel Logo"
            className=" dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert absolute max-w-full max-w-xl -bottom-[168px] -left-[35px] h-auto"
            width={349}
            height={559}
            priority
          />
        </div>
        <div className="flex-1">
          <div className="flex">
            <span className="flex-1 flex flex-col">
              <p className="text-2xl font-medium">Gestão de horas</p>
              <p className="text-5xl mb-8 drop-shadow-lg">Acompanhe em <span className="font-extrabold">tempo real</span> a <span className="font-extrabold">produtividade</span> e <span className="font-extrabold">engajamento</span> do seu time.</p>
            </span>
          </div>
          <p className="text-lg text-center text-white">Somos uma solução de gerenciamento de horas de trabalho, através do nosso software você pode acompanhar como foi a jornada diária de trabalho de cada colaborador, extrair relatórios e ter um visão panorâmica dos seus processos. Coletamos dados para inferir a produtividade sem invadir a privacidade dos seus funcionários, não capturamos capturamos câmera, microfone e teclado.</p>
        </div>
      </div>
      <div className={`flex p-8 transition-all duration-300 ${likes === 'funcionalidades' ? 'block opacity-100 h-auto visible' : 'opacity-0 h-0 invisible'}`}>
        <h1>Funcionalidades</h1>
      </div>
      <div className="bg-white overflow-hidden w-full flex justify-end items-center p-8">
        <ul className="flex justify-between">
          <li className="mr-3">
            <button onClick={() => setLikes('sobre')} className={`inline-block font-bold rounded py-2 px-4 hover:bg-blue-700 ${likes === 'sobre' ? 'bg-orange text-white' : 'text-gray-400'}`}>Sobre</button>
          </li>
          <li className="mr-3">
            <button onClick={() => setLikes('funcionalidades')} className={`inline-block font-bold border border-white rounded hover:border-gray-200 hover:bg-gray-200 py-2 px-4 ${likes === 'funcionalidades' ? 'bg-orange text-white' : 'text-gray-400'}`}>Funcionalidades</button>
          </li>
          <li className="mr-3">
            <button onClick={() => setLikes('contato')} className="inline-block font-bold py-2 px-4 text-gray-400 rounded hover:border-gray-200 hover:bg-gray-200">Contato</button>
          </li>
        </ul>
        <Image
          src="/contaTempo.png"
          alt="Vercel Logo"
          className="relative"
          width={259}
          height={62}
          priority
        />
      </div>
    </main>
  );
}
