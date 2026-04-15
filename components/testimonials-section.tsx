"use client"

import Image from 'next/image'

const testimonials = [
  {
    name: "RAFAEL SOUZA",
    description: "Designer, 26 anos — colecionador geek",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    projectImage: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775424911/build-ironman-mark-7-v0-u65cx0CfC9iVUqxyS4WAL1RvEFK3K5u4sV6GOI7x2Lk_v2lblx.webp",
    text: "Cara, é surreal! Montei um Homem de Ferro que ficou idêntico a uma action figure. Meus amigos não acreditaram que era de papel. Já coloquei na estante e virou peça de colecionador!"
  },
  {
    name: "FERNANDA COSTA",
    description: "Mãe, 38 anos — renda extra em casa",
    avatar: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775426406/images_2_1_kupkjn.jpg",
    projectImage: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775425732/papercraft-de-stitch-en-origami-3d_is09vx.jpg",
    text: "Comecei fazendo pra decorar o quarto do meu filho e hoje vendo nas feiras da cidade. Cada peça sai por R$80 a R$150! Já paguei o investimento no primeiro mês."
  },
  {
    name: "ANA MELO",
    description: "Professora, 34 anos — hobby & decoração",
    avatar: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775426303/images_1_iu2rtz.jpg",
    projectImage: "https://res.cloudinary.com/dmi3co58k/image/upload/v1775425098/papercraft-de-renne-rodolfo-en-origami-3d_ykzdyx.jpg",
    text: "Depois de um dia cansativo, sentar e montar uma peça virou minha terapia. A sala ficou linda com as esculturas e todo mundo pergunta onde comprei!"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-10 md:py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="font-hand text-lg md:text-2xl text-[#0188FA] italic mb-2 inline-block transform -rotate-2">
            Veja o que estão dizendo...
          </p>
          <h2 className="text-2xl md:text-4xl font-marker text-[#0F172A] leading-tight">
            Depoimentos De Quem Já Comprou
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 relative"
            >
              {/* Polaroid Image Frame */}
              <div className="relative p-3 pb-0">
                {/* Tape decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-6 bg-yellow-100/90 shadow-sm rounded-sm z-10" />
                
                {/* Image container with polaroid style */}
                <div className="bg-slate-100 rounded-lg overflow-hidden mt-4">
                  <div className="relative w-full aspect-square">
                    <Image
                      src={testimonial.projectImage}
                      alt={`Projeto de ${testimonial.name}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="p-4 md:p-5">
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                  {'"'}{testimonial.text}{'"'}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#0188FA]">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{testimonial.name}</p>
                    <p className="text-slate-400 text-xs">{testimonial.description}</p>
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
