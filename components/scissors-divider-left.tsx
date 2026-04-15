import { Scissors } from 'lucide-react'

export function ScissorsDividerLeft() {
  return (
    <div className="py-6 md:py-8 flex items-center justify-center px-4">
      <div className="flex items-center gap-2 w-full max-w-2xl">
        {/* Scissors icon on left */}
        <Scissors className="w-5 h-5 md:w-6 md:h-6 text-[#0188FA] flex-shrink-0 rotate-180" />
        
        {/* Dashed line */}
        <div className="flex-1 border-t-2 border-dashed border-[#0188FA]/40" />
      </div>
    </div>
  )
}
