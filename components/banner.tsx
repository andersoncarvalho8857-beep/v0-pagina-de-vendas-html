'use client'

import { Clock } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Banner() {
  const [dateText, setDateText] = useState('')

  useEffect(() => {
    const meses = ['JANEIRO','FEVEREIRO','MARÇO','ABRIL','MAIO','JUNHO','JULHO','AGOSTO','SETEMBRO','OUTUBRO','NOVEMBRO','DEZEMBRO']
    const d = new Date()
    const texto = `PROMOÇÃO VÁLIDA SOMENTE ATÉ HOJE, ${String(d.getDate()).padStart(2,'0')} DE ${meses[d.getMonth()]} DE ${d.getFullYear()}`
    setDateText(texto)
  }, [])

  return (
    <div 
      className="text-white text-center py-2.5 px-4 shadow-md relative z-50 overflow-hidden"
      style={{ background: 'linear-gradient(to right, #2563eb, #1d4ed8)' }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-row items-center justify-center gap-2.5 flex-wrap">
        <Clock className="w-4 h-4 shrink-0 opacity-90" strokeWidth={2.5} />
        <span className="text-[11px] sm:text-[13px] font-extrabold uppercase tracking-wider whitespace-nowrap">
          OPORTUNIDADE ÚNICA:
        </span>
        <span 
          className="bg-white/20 py-0.5 px-2 sm:px-3.5 rounded text-[9.5px] sm:text-xs font-bold uppercase tracking-wide whitespace-nowrap"
        >
          {dateText}
        </span>
      </div>
    </div>
  )
}
