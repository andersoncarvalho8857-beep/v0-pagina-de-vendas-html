import { CircleCheck } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative pt-4 pb-8 md:pt-8 md:pb-20 overflow-hidden bg-[#FDFDFD]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center max-w-6xl mx-auto">
          {/* Header content */}
          <div className="text-center max-w-4xl mb-4 md:mb-10 relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 py-1.5 px-3 md:py-2 md:px-6 rounded-full bg-[#DCFCE7] text-[#166534] text-[10px] md:text-sm font-black tracking-wide uppercase border-2 border-[#166534] border-dashed mb-3 md:mb-6 transform -rotate-2">
              <CircleCheck className="w-4 h-4 md:w-[18px] md:h-[18px] text-[#16A34A]" />
              +3500 Moldes Aprovados
            </div>
            
            {/* Main title - Mobile optimized */}
            <h1 className="text-[28px] leading-[1.1] md:text-7xl lg:text-8xl font-marker text-[#0F172A] tracking-tight md:leading-tight mb-3 md:mb-8 drop-shadow-sm relative">
              Transforme{' '}
              <span className="relative inline">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#0188fa] to-[#005bb5]">
                  Papel em Dinheiro
                </span>
              </span>
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              e Ainda Chame de Hobby
            </h1>
            
            {/* Subtitle - Mobile optimized */}
            <p className="text-sm md:text-xl lg:text-2xl text-[#475569] max-w-2xl mx-auto leading-relaxed px-2">
              <span className="font-bold text-[#0188fa]">Imprima, recorte, monte e venda.</span> Com mais de 3.500 moldes prontos, qualquer peça pode virar decoração de{' '}
              <span className="font-bold text-[#16A34A]">R$50 a R$300</span>{' '}
              ou simplesmente te dar uma hora incrível de relaxamento.
            </p>
          </div>
          
          {/* Hero Image - Polaroid Style */}
          <div className="w-full max-w-[280px] md:max-w-md mx-auto mb-4 md:mb-8">
            <div className="relative transform rotate-2">
              {/* Tape at top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 md:w-20 h-6 md:h-8 bg-yellow-100/90 shadow-sm z-20 rounded-sm" />
              
              {/* Polaroid frame */}
              <div className="bg-white p-2 md:p-3 pb-10 md:pb-14 shadow-xl rounded-sm">
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dmi3co58k/image/upload/v1775418707/PAPER-01.4_P._asb4ze.webp"
                    alt="MoldCraft - Moldes de Papel em 3D"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Label left - "FÁCIL DE MONTAR!" */}
              <div className="absolute -bottom-2 -left-4 md:-left-6 transform -rotate-12 z-30">
                <div className="bg-[#16A34A] text-white text-[10px] md:text-sm font-black px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-md uppercase tracking-wide">
                  Fácil de Montar!
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a 
            href="#oferta" 
            className="mb-4 md:mb-6 inline-block bg-[#38BDF8] hover:bg-[#0EA5E9] text-white font-marker text-lg md:text-2xl uppercase tracking-wide py-3 px-8 md:py-4 md:px-12 rounded-xl shadow-[0_4px_0_0_#0284C7] hover:shadow-[0_2px_0_0_#0284C7] hover:translate-y-[2px] transition-all duration-150 border border-black"
          >
            Quero Começar
          </a>

          {/* Social proof - Avatars + Stars + Text */}
          <div className="mb-6 md:mb-8 inline-flex items-center gap-2 bg-white rounded-full py-2 px-4 shadow-md border border-gray-100">
            {/* Avatars */}
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt="Aluno" width={32} height={32} className="object-cover" />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt="Aluno" width={32} height={32} className="object-cover" />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <Image src="https://randomuser.me/api/portraits/women/68.jpg" alt="Aluno" width={32} height={32} className="object-cover" />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <Image src="https://randomuser.me/api/portraits/men/75.jpg" alt="Aluno" width={32} height={32} className="object-cover" />
              </div>
            </div>
            {/* Stars + Text */}
            <div className="flex flex-col items-start">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs md:text-sm text-gray-600 font-medium">+3000 alunos felizes</span>
            </div>
          </div>

          {/* Social proof indicator */}
          <div className="flex items-center gap-2 text-[#E11D48] text-sm md:text-base font-medium">
            <span className="flex gap-1">
              <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500 animate-pulse" />
              <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400 animate-pulse" />
            </span>
            <span className="italic">47 pessoas estão vendo esta oferta agora</span>
          </div>
        </div>
      </div>
    </section>
  )
}
