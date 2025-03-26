import React from "react"


const plansContent = [
  {
    planName: 'Pequena empresa',
    usersLength: 'Até 10 usuários',
    value: 'R$ 11,99',
    period: '/mês',
    type: 'Por usuário',
    button: 'Cadastre-se para teste grátis'
  },
  {
    planName: 'Empresa em expansão',
    usersLength: 'Até 50 usuários',
    value: 'R$ 9,99',
    period: '/mês',
    type: 'Por usuário',
    button: 'Cadastre-se para teste grátis'
  },
  {
    planName: 'Corporativo',
    usersLength: 'Até 100 usuários',
    value: 'R$ 7,99',
    period: '/mês',
    type: 'Por usuário',
    button: 'Cadastre-se para teste grátis'
  },
  {
    planName: 'Sob medida',
    usersLength: '100 ou mais usuários',
    value: 'Consulte',
    period: '',
    type: '',
    button: 'Cadastre-se para teste grátis'
  }
]


const Plans: React.FC = () => {
  return (
    plansContent.map((item, index) => (
      <div key={index} className="text-center rounded px-4 py-8 border border-neutral-300 hover:border-sky-600">
        <h3 className="text-xl text-orange-ct font-semibold uppercase">{item.planName}</h3>
        <h2 className="text-md font-bold text-sky-500">{item.usersLength}</h2>
        <p className="text-secondary-ct mt-10 font-bold text-4xl">{item.value}<span className="text-neutral-300 font-bold text-lg">{item.period}</span></p>
        <p className="text-secondary-ct text-base">{item.type}&nbsp;</p>
        {item.button && (<a href="https://app.contatempo.com.br/cadastro" target="_blank" className="block mt-10 w-full py-2 px-4 text-sky-600 rounded bg-white border-2 border-sky-600 text-base uppercase">{item.button}</a>)}
      </div>
    ))
  )
};


export default Plans