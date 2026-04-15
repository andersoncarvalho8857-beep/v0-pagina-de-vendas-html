import { Gift } from 'lucide-react'
import Image from 'next/image'

const bonusCards = [
  {
    title: "Zoológico de Papercraft",
    description: "Uma coleção completa com animais selvagens e domésticos para montar.",
    price: "29,90",
    image: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775519917/PAPER_16_P._ihfhqk.webp"
  },
  {
    title: "Heróis",
    description: "Seus super-heróis favoritos em versões detalhadas e capacetes.",
    price: "35,00",
    image: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775519917/PAPER_17_P._nhexlq.webp"
  },
  {
    title: "Animes e Mangás",
    description: "Personagens icônicos das séries japonesas mais famosas.",
    price: "27,00",
    image: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775519917/PAPER_18_P._s5avsz.webp"
  },
  {
    title: "Garagem de Carros",
    description: "Réplicas de veículos esportivos e clássicos para sua estante.",
    price: "19,90",
    image: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775519917/PAPER_19_P._tscnqg.webp"
  }
]

export function BonusSection() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Dark green background with grid pattern */}
      <div 
        className="absolute inset-0 bg-[#0A3622]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          {/* Badge */}
          <div className="inline-block bg-[#fbb101] px-6 py-2 rounded-none border-2 border-black transform rotate-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6">
            <span className="flex items-center gap-3 font-marker text-xl md:text-2xl text-black uppercase tracking-wide">
              <Gift className="w-7 h-7" />
              Presentes pra você
            </span>
          </div>
          
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-marker text-white tracking-tight leading-tight uppercase flex flex-col items-center text-center max-w-4xl mx-auto">
            <span>BÔNUS EXCLUSIVOS GRÁTIS</span>
            <span className="relative inline-block mt-2">
              ao adquirir o <span className="text-[#22C55E]">KIT MESTRE</span> hoje!
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#22C55E] rounded-full border-b-2 border-dashed border-white opacity-50" />
            </span>
          </h2>
        </div>

        {/* Bonus Cards */}
        <div className="space-y-6 md:space-y-8">
          {bonusCards.map((card, index) => (
            <div 
              key={index}
              className="relative bg-white p-3 md:p-4 rounded-[4px] shadow-2xl border-2 border-white/20 transform transition-transform duration-300 hover:scale-[1.02] flex items-center gap-4 md:gap-6 group"
              style={{ transform: index % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)' }}
            >
              {/* Tape */}
              <div className="absolute h-6 w-20 shadow-sm backdrop-blur-[1px] z-20 bg-yellow-100/80 border-l-2 border-r-2 border-white/50 -top-3 left-1/2 -translate-x-1/2 opacity-90" />
              
              {/* Image */}
              <div className="relative flex-shrink-0 w-32 h-32 md:w-44 md:h-36 rounded-sm overflow-hidden border border-slate-100 bg-slate-200">
                {card.image ? (
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
                    Imagem
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="flex flex-col flex-grow text-left">
                <h3 className="text-xl md:text-2xl font-marker text-slate-900 leading-tight mb-2 tracking-wide uppercase">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed mb-4 max-w-[280px]">
                  {card.description}
                </p>
                
                {/* Price and Badge */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-col md:flex-row md:items-center md:gap-1">
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-tighter opacity-70 leading-tight">
                      Vendido por
                    </span>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-tighter line-through opacity-70 leading-tight">
                      R$ {card.price}
                    </span>
                  </div>
                  
                  {/* Bonus badge */}
                  <div className="text-[#22C55E] flex items-center justify-center gap-1.5 transform -rotate-1 font-bold">
                    <span className="text-base">✓</span>
                    <span className="font-marker text-xs md:text-sm tracking-wider uppercase">
                      BÔNUS KIT<br />MESTRE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
