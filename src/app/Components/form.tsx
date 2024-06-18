'use client'
import React, { useState } from 'react';
import {ContatoSvg} from './illustrations'

type FormData = {
  nome: string;
  email: string;
  empresa: string;
  telefone: string;
};


const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const { nome, email, empresa, telefone } = formData;
    console.log(formData)
    if (!nome || !email || !empresa || !telefone) {
      setError('Todos os campos são obrigatórios');
      return;
    }

    try {
      const response = await fetch('/api/contatos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, empresa, telefone }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar o formulário');
      }

      const result = await response.json();
      setSuccess(result.message);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro desconhecido';
      setError(errorMessage);
    }
  };

  return (
    <div id="form" className="bg-orange p-10 max-md:p-4">
      <div className="container p-10 max-md:p-4 max-w-screen-xl mx-auto bg-white drop-shadow-xl flex flex-row items-center max-md:flex-col">
        <div className='max-lg:w-full w-2/4'>
          <h3 className='text-3xl font-bold text-orange-ct'>Entre em contato</h3>
          <div className='flex flex-row items-center'>
            <ContatoSvg />
            <p className='w-5/6 block text-xl pr-6'>Fale com nossos especialistas e entenda como o ContaTempo pode ajudar sua equipe a ser mais produtiva.</p>
          </div>
        </div>
        <div  className='max-lg:w-full w-2/4'>
          <form className='grid w-full' onSubmit={handleSubmit}>
            <label className='block border-b p-2 border-orange mb-4' htmlFor="nome">
              <input className='w-full text-text-color-ct focus:outline-none' placeholder='Seu nome' id="nome" value={formData.nome} onChange={handleChange} />
            </label>
            <label className='block border-b p-2 border-orange mb-4' htmlFor="email">
              <input className='w-full text-text-color-ct focus:outline-none' placeholder='Seu e-mail' id="email" value={formData.email} onChange={handleChange} />
            </label>
            <label className='block border-b p-2 border-orange mb-4' htmlFor="empresa">
              <input className='w-full text-text-color-ct focus:outline-none' placeholder='Sua Empresa' id="empresa" value={formData.empresa} onChange={handleChange} />
            </label>
            <label className='block border-b p-2 border-orange mb-4' htmlFor="telefone">
              <input className='w-full text-text-color-ct focus:outline-none' placeholder='DDD + Celular' id="telefone" value={formData.telefone} onChange={handleChange} />
            </label>
            {error && <span style={{ color: 'red' }}>{error}</span>}
            {success && <span style={{ color: 'green' }}>{success}</span>}
            <button  className="max-md:block max-md:w-full mt-6 justify-self-end inline-block py-2 px-4 text-white rounded bg-sky-600 border-2 border-sky-600 text-lg uppercase" type="submit">Solicite uma demonstração</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;