'use client'
import React, { useState } from 'react';
import Image from "next/image";


const Header: React.FC = () => {
  return (
    <header className="bg-white drop-shadow-xl max-lg:p-2 py-4 px-10 fixed w-full top-0 z-10">
        <div className="container max-lg:p-2 max-w-screen-xl mx-auto bg-white items-center flex justify-between">
          <Image
            src="/contaTempo.png"
            alt="Vercel Logo"
            className="relative w-auto h-[30px]"
            width={139}
            height={30}
            priority
          />
          <a href="https://app.contatempo.com.br/" target="_blank" className="p-2 text-white rounded bg-sky-600 border-sky-600">Acessar conta</a>
        </div>
      </header>
  );
};

export default Header;