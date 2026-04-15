"use client"

import Image from 'next/image'

const showcaseItems = [
  {
    image: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775421338/PAPER_06_P._ftva5b.webp",
    alt: "Moldcraft exemplo 1"
  },
  {
    image: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775421071/PAPER_11_P._fjnqq7.webp",
    alt: "Moldcraft exemplo 2"
  },
  {
    image: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775421089/PAPER_08_P._rlrsls.webp",
    alt: "Moldcraft exemplo 3"
  },
  {
    image: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775421086/PAPER_09_P._fflmib.webp",
    alt: "Moldcraft exemplo 4"
  },
  {
    image: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775421100/PAPER_07_P._xz9j2k.webp",
    alt: "Moldcraft exemplo 5"
  },
  {
    image: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775421073/PAPER_10_P._cdu9ee.webp",
    alt: "Moldcraft exemplo 6"
  },
  {
    image: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775421051/PAPER_05_P._qvfslo.webp",
    alt: "Moldcraft exemplo 7"
  },
  {
    image: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775421066/PAPER_12_P._g21qxf.webp",
    alt: "Moldcraft exemplo 8"
  }
]

export function ShowcaseSection() {
  return (
    <>
      <style>
        {`
          @keyframes scrollShowcase {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-1728px);
            }
          }
          .showcase-carousel {
            animation: scrollShowcase 20s linear infinite;
          }
        `}
      </style>
      <section className="py-10 md:py-16 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-marker text-[#0F172A] mb-3 md:mb-4 leading-tight">
              O Que Você Pode Criar
            </h2>
            <p className="text-sm md:text-lg text-[#475569]">
              Confira alguns exemplos reais de montagens feitas com nossos moldes de alta precisão.
            </p>
          </div>
        </div>

        {/* Infinite Auto-scrolling Carousel */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 showcase-carousel">
            {/* First set */}
            {showcaseItems.map((item, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 w-[200px]"
              >
                <div className="bg-white p-2 pb-4 shadow-lg rounded-sm">
                  <div className="relative w-full h-[180px] overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-contain"
                      sizes="200px"
                    />
                  </div>
                </div>
              </div>
            ))}
            {/* Second set (duplicate for seamless loop) */}
            {showcaseItems.map((item, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 w-[200px]"
              >
                <div className="bg-white p-2 pb-4 shadow-lg rounded-sm">
                  <div className="relative w-full h-[180px] overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-contain"
                      sizes="200px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
