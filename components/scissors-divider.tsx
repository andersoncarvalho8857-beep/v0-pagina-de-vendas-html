import { Scissors } from 'lucide-react'

export function ScissorsDivider() {
  return (
    <div className="py-6 md:py-10 flex items-center justify-center px-4">
      <div className="flex items-center w-full max-w-2xl">
        {/* Dashed line */}
        <div className="flex-1 border-t-2 border-dashed border-[#93C5FD]" />
        {/* Scissors icon */}
        <div className="px-2">
          <Scissors className="w-5 h-5 md:w-6 md:h-6 text-[#3B82F6] rotate-180" />
        </div>
        {/* Short dashed line after scissors */}
        <div className="w-6 border-t-2 border-dashed border-[#93C5FD]" />
      </div>
    </div>
  )
}
