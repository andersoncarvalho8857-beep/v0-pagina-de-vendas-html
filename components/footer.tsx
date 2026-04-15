export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-400 py-16 px-4 relative overflow-hidden">
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
      
      <div className="container mx-auto max-w-[1152px] flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-10 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2 group cursor-default transition-transform duration-300 hover:scale-105">
            <div className="bg-[#0188fa] p-1.5 rounded-lg border-2 border-white/10 shadow-lg">
              <svg 
                viewBox="0 0 24 24" 
                width="28" 
                height="28" 
                fill="none" 
                stroke="white" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="transform rotate-12"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <span className="font-marker text-2xl md:text-3xl text-white tracking-tighter">
              MOLD<span className="text-[#0188fa]">CRAFT</span>
            </span>
          </div>
          <div className="h-1 w-12 bg-[#0188fa]/30 rounded-full mt-1" />
        </div>

        {/* Divider */}
        <div className="w-full max-w-2xl h-px bg-slate-800/50 mb-10" />

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-[13px] md:text-sm font-semibold tracking-wide">
          <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
            Termos de Uso
          </a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
            Políticas de Privacidade
          </a>
          <span className="text-slate-500 pointer-events-none hidden md:inline">|</span>
          <span className="text-slate-500 text-xs">
            © {new Date().getFullYear()} MoldCraft
          </span>
        </div>
      </div>
    </footer>
  )
}
