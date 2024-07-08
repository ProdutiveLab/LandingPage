'use client'
import React, { ReactNode, useState } from "react";
import Header from '../Components/header'
import Image from "next/image";

function Termos() {
  return (
    <>
      <Header />
      <div id="features">
        <div className="container mt-[73px] px-10 py-10 max-w-screen-xl mx-auto flex-row items-center">
          <p>Bem-vindo ao ContaTempo. Este documento estabelece os Termos de Uso e a Política de Privacidade conforme a Lei Geral de Proteção de Dados Pessoais (LGPD) brasileira (Lei nº 13.709/2018). Ao utilizar nosso Software, você concorda com os termos descritos abaixo. Caso não concorde, pedimos que não utilize nosso Software.</p>
          <h3 className="text-xl mt-8">1. Coleta de Dados Pessoais</h3>
          <p className="mb-4">Nosso Software coleta os seguintes dados pessoais de funcionários para fins de monitoramento de atividades:</p>
          <ul className="list-disc list-inside">
            <li>Nome completo</li>
            <li>Endereço de e-mail corporativo</li>
            <li>Endereço IP</li>
            <li>Dados de login (horário de início e término de sessão)</li>
            <li>Atividades realizadas no computador (aplicativos utilizados, websites acessados, arquivos manipulados)</li>
          </ul>
          <h3 className="text-xl mt-8">2. Finalidade do Tratamento de Dados</h3>
          <p className="mb-4">Os dados coletados serão utilizados para:</p>
          <ul className="list-disc list-inside">
            <li>Garantir a segurança e integridade dos sistemas e informações da empresa</li>
            <li>Monitorar a produtividade dos funcionários</li>
            <li>Prevenir e identificar usos indevidos dos recursos corporativos</li>
            <li>Dados de login (horário de início e término de sessão)</li>
            <li>Cumprir com requisitos legais e regulatórios</li>
          </ul>
          <h3 className="text-xl mt-8">3. Bases Legais para o Tratamento de Dados</h3>
          <p className="mb-4">O tratamento dos dados pessoais é realizado com base nas seguintes hipóteses legais:</p>
          <ul className="list-disc list-inside">
            <li>Execução de contrato</li>
            <li>Cumprimento de obrigação legal ou regulatória</li>
            <li>Exercício regular de direitos em processo judicial, administrativo ou arbitral</li>
            <li>Legítimo interesse da empresa, desde que não prevaleçam os direitos e liberdades fundamentais do titular</li>
          </ul>
          <h3 className="text-xl mt-8">4. Compartilhamento de Dados</h3>
          <p className="mb-4">Os dados pessoais coletados poderão ser compartilhados com:</p>
          <ul className="list-disc list-inside">
            <li>Empresas do mesmo grupo econômico</li>
            <li>Prestadores de serviços que realizam atividades em nome da empresa, sempre observando os requisitos de segurança e confidencialidade</li>
          </ul>
          <h3 className="text-xl mt-8">5. Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acesso não autorizado, perda, destruição ou alteração. Entre as medidas de segurança estão:</h3>
          <p className="mb-4">Os dados pessoais coletados poderão ser compartilhados com:</p>
          <ul className="list-disc list-inside">
            <li>Uso de criptografia</li>
            <li>Controles de acesso rigorosos</li>
            <li>Monitoramento contínuo de sistemas</li>
          </ul>
          <h3 className="text-xl mt-8">6. Retenção dos Dados</h3>
          <p className="mb-4">Os dados pessoais serão armazenados apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, respeitando os prazos legais aplicáveis.</p>
          <h3 className="text-xl mt-8">7. Obrigação da Empresa Contratante</h3>
          <p className="mb-4">É obrigação da empresa contratante informar aos seus funcionários que estão sendo monitorados. A empresa deve assegurar que todos os funcionários tenham conhecimento das práticas de monitoramento, bem como dos dados que estão sendo coletados e das finalidades para as quais esses dados são utilizados. O não cumprimento desta obrigação poderá resultar em penalidades conforme as leis aplicáveis.</p>
          <h3 className="text-xl mt-8">8. Alterações nos Termos de Uso e Política de Privacidade</h3>
          <p className="mb-4">Reservamo-nos o direito de alterar estes Termos de Uso e Política de Privacidade a qualquer momento. Notificaremos sobre alterações significativas através do nosso Software ou outros meios de comunicação adequados.</p>
          <h3 className="text-xl mt-8">9. Contato</h3>
          <p className="mb-4">Para exercer seus direitos ou em caso de dúvidas sobre esta Política de Privacidade, entre em contato conosco pelo e-mail: contato@contatempo.com.br</p>
        </div>
      </div>
    </>
  )
}

export default Termos;