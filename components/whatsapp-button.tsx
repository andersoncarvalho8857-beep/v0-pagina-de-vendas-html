import Image from 'next/image'

export function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5519998292609&text=Ol%C3%A1!%20Tenho%20interesse%20nos%20moldes%20de%20papercraft."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] w-14 h-14 transition-transform duration-300 hover:scale-110 block"
    >
      <Image
        src="/images/whatsapp.png"
        alt="WhatsApp"
        width={55}
        height={55}
        className="w-full h-full"
      />
    </a>
  )
}
