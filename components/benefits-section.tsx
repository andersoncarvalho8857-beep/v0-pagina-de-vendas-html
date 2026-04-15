"use client"

import { useState, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'

const benefits = [
  {
    title: "Desconecte Do Estresse",
    subtitle: "Crie algo real com as mãos e foque no momento presente. O moldcraft é uma meditação ativa comprovada.",
    image: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775419312/PAPER_02_P._jgbqs6.webp"
  },
  {
    title: "Decoração Com Identidade",
    subtitle: "Peças que viram assunto na sua casa. Suas visitas vão morrer de inveja e ficar impressionadas.",
    image: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775419634/PAPER_03_P._wuhv3a.webp"
  },
  {
    title: "Tempo De Qualidade",
    subtitle: "Momentos criativos com quem você ama. Uma atividade perfeita para fazer com filhos, sobrinhos, netos ou a família toda.",
    image: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775419642/PAPER_04_P._tgwlfe.webp"
  }
]

export function BenefitsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)
  const endX = useRef(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? benefits.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === benefits.length - 1 ? 0 : prev + 1))
  }

  const handleSwipe = () => {
    const diff = startX.current - endX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext()
      } else {
        goToPrevious()
      }
    }
  }

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    endX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    handleSwipe()
  }

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    startX.current = e.clientX
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    endX.current = e.clientX
  }

  const handleMouseUp = () => {
    if (isDragging) {
      handleSwipe()
      setIsDragging(false)
    }
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      handleSwipe()
      setIsDragging(false)
    }
  }

  return (
    <section className="py-10 md:py-16 overflow-hidden relative">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="font-hand text-lg md:text-2xl text-[#0188FA] italic mb-2 inline-block transform -rotate-3">
            Mais que um hobby...
          </p>
          <h2 className="text-2xl md:text-4xl font-marker text-[#0F172A] mb-3 md:mb-4 leading-tight">
            Por Que Milhares De Pessoas Estão Se Apaixonando Por Essa Experiência?
          </h2>
          <p className="text-sm md:text-lg text-[#475569]">
            Descubra os benefícios reais de criar algo com as próprias mãos.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors border border-gray-200"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors border border-gray-200"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>

          {/* Cards Container */}
          <div 
            ref={carouselRef}
            className="overflow-hidden mx-8 md:mx-0 cursor-grab active:cursor-grabbing select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-2 md:px-8"
                >
                  <div className="max-w-[280px] md:max-w-xs mx-auto">
                    {/* Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-4 md:p-5 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                      {/* Polaroid Image */}
                      <div className="relative mb-4">
                        {/* Tape */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 md:w-14 h-5 md:h-6 bg-yellow-100/90 shadow-sm z-20 rounded-sm" />
                        
                        {/* Heart Icon */}
                        <div className="absolute -top-1 -left-1 z-30 bg-white rounded-full p-1.5 shadow-md">
                          <Heart className="w-4 h-4 md:w-5 md:h-5 text-[#E11D48]" />
                        </div>

                        {/* Image Frame */}
                        <div className="bg-slate-100 rounded-lg overflow-hidden aspect-[4/3] relative">
                          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.02)_10px,rgba(0,0,0,0.02)_20px)]" />
                          <Image
                            src={benefit.image}
                            alt={benefit.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <h3 className="font-marker text-xl md:text-2xl text-[#0F172A] uppercase mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-sm md:text-base text-[#475569] leading-relaxed">
                          {benefit.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#0188fa]' : 'bg-gray-300'
                }`}
                aria-label={`Ir para card ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
