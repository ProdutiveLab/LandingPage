import React from "react"
import { TotalHoras, AppUsados, JornadaDiaria, AlertaBournout, Relatorios, Ranking } from './illustrations'


const featuresContent = [
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


const Features: React.FC = () => {
  return (
    featuresContent.map((item, index) => (
      <div key={index} className="text-center">
        <div className="w-2/4 mx-auto drop-shadow-md">{item.component}</div>
        <h2 className="text-xl text-orange-ct">{item.title}</h2>
        <p className="text-secondary-ct p-2">{item.content}</p>
      </div>
    ))
  )

}

export default Features