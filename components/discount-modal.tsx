'use client'

import { AlertTriangle, X, Clock } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState, useCallback } from 'react'

interface DiscountModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DiscountModal({ isOpen, onClose }: DiscountModalProps) {
  const [timeLeft, setTimeLeft] = useState(264) // 4:24 in seconds

  useEffect(() => {
    if (!isOpen) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isOpen])

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }, [])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#0F172A]/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.4)] w-full max-w-[360px] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Red Header */}
        <div className="bg-[#E60000] text-white py-2.5 px-4 flex items-center justify-center relative sticky top-0 z-10">
          <AlertTriangle className="w-4 h-4 mr-2 shrink-0" strokeWidth={2.5} />
          <span className="font-black text-xs tracking-wider uppercase">
            SUPER DESCONTO ESPECIAL
          </span>
          <button 
            onClick={onClose}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full cursor-pointer text-white p-1.5 transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={3} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 text-center bg-white">
          {/* Product Image */}
          <div className="relative inline-block mb-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/POUPUP%20BAU%20P.-Ac1LmniafoZXIKM4rklHbpbwUidxsl.webp"
              alt="Baú de Bônus"
              width={140}
              height={110}
              className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
            />
            <div className="absolute -bottom-1 -right-1 bg-[#FF0000] text-white text-[8px] font-black py-0.5 px-2 rounded transform -rotate-6 shadow-[0_2px_6px_rgba(0,0,0,0.3)] uppercase tracking-wider border border-white">
              SÓ HOJE!
            </div>
          </div>

          {/* Main Title */}
          <h2 className="font-marker text-lg leading-tight mb-2.5 uppercase">
            <span className="text-[#0F172A]">ESPERE UM POUCO</span><br />
            <span className="text-[#0F172A]">VOCÊ ACABOU DE GANHAR</span><br />
            <span className="text-[#0F172A]">UM </span>
            <span className="text-[#FFD700] italic" style={{ textShadow: '1px 1px 0 #B8860B' }}>SUPER DESCONTO!</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-slate-500 text-sm leading-relaxed mb-3 font-medium">
            Você mostrou interesse no Moldcraft, então queremos te ajudar. Leve o{' '}
            <strong className="text-[#0F172A] font-bold">PACOTE COMPLETO (Mestre)</strong> com um preço exclusivo agora.
          </p>

          {/* Price Box */}
          <div className="border-2 border-dashed border-red-300 rounded-xl py-3 px-3 mb-4 bg-white">
            <div className="text-[8px] font-bold text-slate-400 tracking-widest uppercase mb-1">
              OFERTA RELÂMPAGO
            </div>
            <div className="flex items-center justify-center gap-3 mb-1.5">
              <span className="text-slate-400 line-through text-sm font-bold">R$ 24,90</span>
              <span className="text-[#00C347] text-4xl font-black leading-none tracking-tight">R$ 17,90</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-red-50 text-[#FF0000] py-1 px-2.5 rounded-full text-[8px] font-bold uppercase tracking-wider">
              <Clock className="w-3 h-3" strokeWidth={2.5} />
              EXPIRA EM: <span>{formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Main CTA Button */}
          <a
            href="https://pay.wiapy.com/T197Y1gM8g"
            className="block w-full py-3 rounded-xl bg-[#1A93FA] text-white text-base font-bold text-center uppercase tracking-wide border-2 border-black shadow-[0_4px_0_#000] mb-3 font-marker hover:translate-y-0.5 hover:shadow-[0_2px_0_#000] transition-all"
          >
            QUERO APROVEITAR AGORA
          </a>

          {/* Secondary Link */}
          <a
            href="https://pay.wiapy.com/2sKPynTSrw"
            className="text-xs text-slate-400 hover:text-slate-600 transition-colors font-medium"
          >
            Não, obrigado. Quero só o básico por R$10,00
          </a>
        </div>
      </div>
    </div>
  )
}
