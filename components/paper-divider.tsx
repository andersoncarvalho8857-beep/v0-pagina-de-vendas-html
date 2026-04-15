export function PaperDivider() {
  return (
    <div className="w-full py-4 md:py-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative">
          {/* Main line */}
          <div className="h-2 bg-gradient-to-b from-slate-200 to-slate-100 rounded-full shadow-sm" />
          {/* Shadow below */}
          <div className="h-1 bg-gradient-to-b from-slate-100/50 to-transparent mt-0.5 rounded-full" />
        </div>
      </div>
    </div>
  )
}
