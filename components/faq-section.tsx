'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqItems = [
  {
    question: 'É necessário ter talento artístico?',
    answer: 'Não! Nossos modelos são projetados para iniciantes. Se você consegue usar uma tesoura e cola, consegue montar. Comece pelos modelos mais simples e vá evoluindo.',
  },
  {
    question: 'Como recebo os moldes?',
    answer: 'Após a confirmação do pagamento, você receberá um e-mail com um link exclusivo para acessar a nossa área de membros e baixar todos os arquivos. Respeitando o limite de 15 downloads diários',
  },
  {
    question: 'Funciona com impressora comum?',
    answer: 'Sim! A maioria dos modelos cabe em folhas A4 padrão. Recomendamos apenas que use um papel mais grosso (180g) para melhor resultado, que passa tranquilamente em impressoras domésticas.',
  },
  {
    question: 'Preciso de algum papel especial?',
    answer: 'Recomendamos papel com gramatura entre 180g e 240g para garantir firmeza nas esculturas, mas você pode treinar com papel sulfite comum.',
  },
  {
    question: 'Pode ser feito por crianças?',
    answer: 'Com certeza! É uma atividade fantástica para desenvolver coordenação motora e foco. Para crianças menores de 12 anos, recomendamos a supervisão de um adulto para o uso da tesoura.',
  },
  {
    question: 'Qual é o tempo necessário para a montagem?',
    answer: 'Depende do modelo. Peças iniciantes podem levar de 30 minutos a 1 hora. Projetos complexos de fim de semana podem levar uma tarde. É o tempo perfeito para relaxar!',
  },
  {
    question: 'Os arquivos vêm com instruções?',
    answer: 'Sim! A maioria dos modelos complexos acompanha guias visuais de numeração para facilitar a colagem.',
  },
  {
    question: 'O pagamento é seguro?',
    answer: 'Totalmente. Utilizamos processadores de pagamento criptografados e seus dados estão 100% protegidos.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-[#FDFDFD] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-marker text-slate-900 uppercase tracking-tight mb-2">
            Dúvidas?
          </h2>
          <div className="w-24 h-1.5 bg-[#0188fa] mx-auto rounded-full opacity-20 transform -rotate-1 mb-8" />
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col items-center">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-100" />
    </section>
  )
}

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-3">
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between p-4 md:p-5 bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:border-blue-200 ${
          isOpen ? 'rounded-t-xl' : 'rounded-xl'
        }`}
      >
        <span className="text-left font-bold text-slate-800 text-sm md:text-base">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 transition-all duration-300 ${
            isOpen ? 'rotate-180 text-[#0188fa]' : 'text-slate-400'
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out bg-white rounded-b-xl border-x border-b ${
          isOpen
            ? 'max-h-96 opacity-100 border-slate-200'
            : 'max-h-0 opacity-0 border-transparent'
        }`}
      >
        <div className="p-4 md:p-5 text-slate-600 text-sm md:text-base leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  )
}
