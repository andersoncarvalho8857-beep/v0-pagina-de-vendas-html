import { ShoppingCart, Download, Scissors } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: "Escolha Seu Plano",
    description: "Pagamento 100% seguro. Finalizou? Receba o acesso automaticamente na hora no seu e-mail e whatsapp.",
    icon: ShoppingCart,
    tapeColor: "#F9A8B8",
    iconBgColor: "#FEF3E2",
    iconColor: "#F97316",
    badgeColor: "#F97316"
  },
  {
    number: 2,
    title: "Baixe e Imprima",
    description: "Arquivos em PDFs alta resolução, prontos para imprimir em casa ou na gráfica. Dica: papel 180g para ficar perfeito.",
    icon: Download,
    tapeColor: "#FDE68A",
    iconBgColor: "#DBEAFE",
    iconColor: "#2563EB",
    badgeColor: "#2563EB"
  },
  {
    number: 3,
    title: "Monte e Crie",
    description: "Recorte, cole e veja sua criação ganhar vida. É um hobby relaxante, e o resultado fica lindo de verdade.",
    icon: Scissors,
    tapeColor: "#A7F3D0",
    iconBgColor: "#DCFCE7",
    iconColor: "#16A34A",
    badgeColor: "#16A34A"
  }
]

export function HowItWorksSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Subtle wave pattern background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23e2e8f0' fill-opacity='0.4' d='M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom'
        }}
      />
      
      <div className="relative max-w-lg mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-block bg-white border-2 border-[#0188FA] rounded-lg px-4 py-2 transform -rotate-2 shadow-sm">
            <span className="font-hand text-[#0188FA] text-xl md:text-2xl">Simples assim!</span>
          </div>
        </div>
        
        {/* Title */}
        <h2 className="text-center font-marker text-2xl md:text-4xl mb-10 md:mb-14">
          <span className="text-black">Do Seu Celular</span>
          <br />
          <span className="text-[#0188FA]">Para Suas Mãos</span>
        </h2>
        
        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {/* Tape decoration */}
              <div 
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 rounded-sm z-10 shadow-sm"
                style={{ backgroundColor: step.tapeColor }}
              />
              
              {/* Card */}
              <div className="bg-white rounded-2xl p-6 pt-8 shadow-lg relative">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-dashed"
                    style={{ 
                      backgroundColor: step.iconBgColor,
                      borderColor: step.iconColor
                    }}
                  >
                    <step.icon 
                      className="w-7 h-7" 
                      style={{ color: step.iconColor }}
                    />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="font-marker text-xl md:text-2xl text-center mb-3 uppercase">
                  {step.number}. {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 text-center text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
                
                {/* Number badge */}
                <div 
                  className="absolute -bottom-3 right-6 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md"
                  style={{ backgroundColor: step.badgeColor }}
                >
                  {step.number}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
