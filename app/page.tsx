'use client'

import { Banner } from '@/components/banner'
import { HeroSection } from '@/components/hero-section'
import { BenefitsSection } from '@/components/benefits-section'
import { ScissorsDivider } from '@/components/scissors-divider'
import { ShowcaseSection } from '@/components/showcase-section'
import { ExamplesHeader } from '@/components/examples-header'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { PaperDivider } from '@/components/paper-divider'
import { ScissorsDividerLeft } from '@/components/scissors-divider-left'
import { BonusSection } from '@/components/bonus-section'
import { PricingSection } from '@/components/pricing-section'
import { FAQSection } from '@/components/faq-section'
import { Footer } from '@/components/footer'
import { DiscountModal } from '@/components/discount-modal'
import { useState } from 'react'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <Banner />
      <HeroSection />
      <BenefitsSection />
      <ScissorsDivider />
      <ShowcaseSection />
      <ExamplesHeader />
      <HowItWorksSection />
      <TestimonialsSection />
      <PaperDivider />
      <ScissorsDividerLeft />
      <BonusSection />
      <PricingSection onOpenModal={() => setIsModalOpen(true)} />
      <FAQSection />
      <Footer />
      <DiscountModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
