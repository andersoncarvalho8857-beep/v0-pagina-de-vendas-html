import Image from 'next/image'

const modules = [
  {
    image: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775423779/MODULO_01_VAI_RECEBER_P._a13e2v.webp",
    alt: "Módulo 01 - Exemplos de moldes"
  },
  {
    image: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775423783/MODULO_02_VAI_RECEBER_P._ndbdzi.webp",
    alt: "Módulo 02 - Exemplos de moldes"
  },
  {
    image: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775423799/MODULO_03_VAI_RECEBER_P._cffvlj.webp",
    alt: "Módulo 03 - Exemplos de moldes"
  }
]

export function ExamplesHeader() {
  return (
    <section className="py-10 md:py-16 relative">
      {/* Grid Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d4e4f7 1px, transparent 1px),
            linear-gradient(to bottom, #d4e4f7 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px'
        }}
      />
      
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {/* Subtitle */}
        <p className="text-[#0188FA] text-base md:text-xl font-bold mb-3 md:mb-4">
          Alguns exemplos reais dos +3500 moldes!
        </p>
        
        {/* Main Title */}
        <h2 className="font-marker text-2xl md:text-4xl lg:text-5xl text-black leading-tight uppercase mb-8 md:mb-12">
          Veja um pouco por dentro como são os modelos que você irá receber!
        </h2>

        {/* Module Images */}
        <div className="flex flex-col gap-6 md:gap-8">
          {modules.map((module, index) => (
            <div 
              key={index} 
              className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={module.image}
                alt={module.alt}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
