import { Check, X, Shield, Download, ThumbsUp, ShieldCheck } from 'lucide-react'

interface PricingSectionProps {
  onOpenModal: () => void
}

export function PricingSection({ onOpenModal }: PricingSectionProps) {
  return (
    <section className="py-8 md:py-20 bg-[#FDFDFD] relative overflow-hidden" id="oferta">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-12 relative z-10">
          <h2 
            className="text-2xl md:text-7xl font-black text-[#0F172A] mb-3 md:mb-6 font-marker uppercase transform -rotate-1 tracking-wider"
            style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.1)' }}
          >
            ESCOLHA SEU KIT
          </h2>
          <div className="inline-block bg-[#EFF6FF] text-[#0188FA] px-4 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl text-sm md:text-2xl font-bold transform -rotate-2 shadow-sm border border-blue-100 font-hand">
            Pague uma vez, é seu para sempre!
          </div>
        </div>

        {/* Pricing Cards - Mobile Optimized */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-8 max-w-5xl mx-auto">
          {/* Kit Iniciante */}
          <StarterKit onOpenModal={onOpenModal} />
          
          {/* Kit Mestre */}
          <MasterKit />
        </div>
      </div>

      {/* Trust Section - Hidden on Mobile for cleaner view */}
      <div className="hidden md:block">
        <TrustSection />
      </div>
      
      {/* Mobile Trust Icons */}
      <div className="md:hidden mt-6 px-4">
        <div className="flex justify-center gap-4">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Shield className="w-4 h-4" />
            <span>Seguro</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Download className="w-4 h-4" />
            <span>Imediato</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4" />
            <span>7 dias</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function StarterKit({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 border-2 border-dashed border-slate-200 w-full md:w-[400px] relative flex flex-col">
      {/* Card Header */}
      <div className="text-center mb-3 md:mb-6">
        <h3 className="text-xl md:text-3xl font-black text-[#0F172A] italic uppercase transform -rotate-2 font-marker">
          KIT INICIANTE
        </h3>
        <p className="text-[#FF0000] line-through text-xs md:text-sm font-bold mt-1">
          De R$ 79,90
        </p>
        <div className="flex items-center justify-center gap-1">
          <span className="text-lg md:text-2xl font-bold text-slate-500">R$</span>
          <span className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tighter">10</span>
        </div>
      </div>

      {/* Compact Items */}
      <div className="mb-4 md:mb-8 flex-grow">
        <div className="flex items-center gap-2 text-sm text-slate-700 mb-2">
          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
          <span>1200 Moldes</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-700 mb-2">
          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
          <span>Acesso Vitalício</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-red-400 opacity-60">
          <X className="w-4 h-4 flex-shrink-0" />
          <span className="line-through">Sem bônus extras</span>
        </div>
      </div>

      {/* CTA Button */}
      <a
        href="https://pay.wiapy.com/2sKPynTSrw"
        className="block w-full py-3 md:py-4 rounded-lg md:rounded-xl bg-[#0F172A] text-white text-sm md:text-xl font-normal text-center uppercase tracking-wider hover:bg-slate-900 transition-colors shadow-md font-marker"
      >
        QUERO O BÁSICO
      </a>
    </div>
  )
}

function MasterKit() {
  return (
    <div 
      className="bg-white rounded-xl md:rounded-[2rem] p-4 md:p-8 shadow-xl md:shadow-2xl w-full md:w-[450px] relative md:-translate-y-4 z-20 flex flex-col"
      style={{ border: '3px solid #1A93FA' }}
    >
      {/* Floating Badge */}
      <div 
        className="absolute -top-3 left-1/2 -translate-x-1/2 transform rotate-2 text-black font-black text-[10px] md:text-xs px-3 md:px-4 py-1 md:py-2 shadow-lg border-2 border-black uppercase tracking-wide rounded-lg font-marker whitespace-nowrap z-30"
        style={{ backgroundColor: '#FDC700' }}
      >
        Mais vendido
      </div>

      {/* Card Header */}
      <div className="text-center mb-3 md:mb-6 mt-2">
        <h3 className="text-2xl md:text-4xl font-black text-[#0188FA] italic uppercase transform -rotate-2 font-marker">
          KIT MESTRE
        </h3>
        <p className="text-[#FF0000] line-through text-xs md:text-sm font-bold mt-1">
          De R$ 149,90
        </p>
        <div className="flex items-center justify-center gap-1">
          <span className="text-lg md:text-2xl font-bold text-slate-500">R$</span>
          <span className="text-5xl md:text-7xl font-black text-[#00C347] tracking-tighter">24,90</span>
        </div>
        <div className="inline-block bg-[#E6F4FF] text-[#0188FA] px-4 md:px-8 py-1 rounded-full text-xs md:text-sm font-black mt-1 shadow-sm">
          Economize R$ 125
        </div>
      </div>

      {/* Compact Items */}
      <div className="mb-3 md:mb-6">
        <div className="flex items-center gap-2 text-sm text-slate-700 mb-1.5">
          <Check className="w-4 h-4 text-green-500 flex-shrink-0" strokeWidth={3} />
          <span className="font-semibold">+3500 Moldes</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-700 mb-1.5">
          <Check className="w-4 h-4 text-green-500 flex-shrink-0" strokeWidth={3} />
          <span>Acesso Vitalício</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-700">
          <span className="text-base">🎁</span>
          <span className="font-semibold text-[#0188FA]">+4 Bônus Exclusivos</span>
        </div>
      </div>

      {/* Categories Grid - Compact */}
      <div className="mb-4 md:mb-8 flex-grow">
        <p className="text-[10px] md:text-xs text-slate-500 font-semibold mb-2">Tudo isso e muito mais:</p>
        <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[11px] md:text-xs text-slate-600">
          {['Moldes Gigantes (3D)', 'Alfabeto Lowpoly', 'Castelos', 'Coisas Fofas', 'Dinossauros', 'Dragões', 'Espaço – Universo', 'Esportes', 'Geek', 'Mitologia', 'Músicos'].map((cat) => (
            <div key={cat} className="flex items-center gap-1">
              <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
              <span className="truncate">{cat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <a
        href="https://pay.wiapy.com/zkwASbzqaq"
        className="block w-full py-3 md:py-5 rounded-lg md:rounded-2xl bg-[#1A93FA] text-white text-base md:text-2xl font-normal text-center uppercase tracking-wider hover:bg-blue-600 transition-all shadow-[0_4px_0_#B2DBFD] md:shadow-[0_6px_0_#B2DBFD] hover:shadow-[0_2px_0_#B2DBFD] hover:translate-y-[2px] border-2 border-black font-marker"
      >
        EU QUERO TUDO
      </a>

      {/* Guarantee - Compact */}
      <div className="mt-3 md:mt-6 flex items-center justify-center gap-1.5 text-slate-500 text-[10px] md:text-xs uppercase tracking-wide">
        <Check className="w-3 h-3 md:w-5 md:h-5 text-[#22C55E]" />
        Garantia de 7 dias
      </div>
    </div>
  )
}

function TrustSection() {
  return (
    <div className="max-w-5xl mx-auto mt-20 pt-16 px-6 md:px-8">
      {/* Trust Icons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TrustItem 
          icon={<Shield className="w-7 h-7 text-[#0F172A]" />}
          title="Compra 100% Segura"
        />
        <TrustItem 
          icon={<Download className="w-7 h-7 text-[#0F172A]" />}
          title="Download Imediato"
        />
        <TrustItem 
          icon={<ThumbsUp className="w-7 h-7 text-[#0F172A]" />}
          title="Garantia de Satisfação"
        />
      </div>

      {/* Guarantee Box */}
      <div className="mt-16 bg-white rounded-xl relative max-w-4xl mx-auto">
        <div className="relative bg-white border-2 border-dashed border-[#E2E8F0] rounded-sm p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          {/* Guarantee Badge */}
          <div className="absolute -top-10 -right-4 md:-top-12 md:-right-8 z-20">
            <div className="bg-[#0188fa] text-white w-20 h-20 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center transform rotate-12 shadow-lg border-4 border-white">
              <span className="font-marker text-[10px] md:text-xs leading-none uppercase tracking-normal">Garantia</span>
              <span className="font-marker text-xl md:text-3xl leading-none my-0.5">7</span>
              <span className="font-marker text-[10px] md:text-xs leading-none uppercase tracking-normal">Dias</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
            {/* Shield Icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-slate-50 border-2 border-dashed border-[#E2E8F0] flex items-center justify-center">
                <ShieldCheck className="w-10 h-10 md:w-14 md:h-14 text-slate-800" strokeWidth={1.5} />
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow text-left">
              <h2 className="text-2xl md:text-3xl font-marker text-[#0F172A] mb-4 tracking-tight uppercase">
                RISCO ZERO: TESTE POR 7 DIAS
              </h2>
              <div className="space-y-4 text-[#475569] leading-relaxed">
                <p className="text-base md:text-lg font-medium">
                  Temos tanta certeza que você vai amar os moldes que oferecemos uma garantia incondicional.
                </p>
                <p className="text-sm md:text-base">
                  Se você não conseguir montar, não gostar dos modelos ou simplesmente mudar de ideia, nós devolvemos{' '}
                  <span className="font-bold text-[#0F172A]">100% do seu dinheiro</span>. Sem perguntas, sem letras miúdas. Basta um e-mail.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-slate-100 pt-6">
                <div className="flex items-center gap-2">
                  <span className="font-hand text-2xl md:text-3xl text-slate-400">MoldCraft Team</span>
                </div>
                <div className="flex items-center gap-2 opacity-50">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Authorized Signature</span>
                </div>
              </div>
            </div>
          </div>

          {/* Shadow effect */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-48 h-2 bg-slate-100/50 blur-sm rounded-full" />
        </div>
        <div className="absolute -z-10 top-4 left-4 w-full h-full bg-slate-100/50 rounded-sm transform translate-x-2 translate-y-2" />
      </div>
    </div>
  )
}

function TrustItem({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-16 h-16 rounded-full border border-slate-100 bg-white shadow-sm flex items-center justify-center mb-4 group-hover:border-blue-100 group-hover:shadow-md transition-all">
        {icon}
      </div>
      <h3 className="text-[#334155] font-bold text-sm tracking-widest uppercase">{title}</h3>
    </div>
  )
}
