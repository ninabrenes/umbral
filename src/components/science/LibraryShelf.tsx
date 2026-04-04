'use client'

interface LibraryShelfProps {
  title: string
  icon: React.ReactNode
  count: number
  children: React.ReactNode
}

export function LibraryShelf({ title, icon, count, children }: LibraryShelfProps) {
  return (
    <div className="mb-16 md:mb-20">
      {/* shelf header */}
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h3 className="font-serif text-xl text-white">{title}</h3>
        <span className="text-xs text-cloud/40 font-sans tabular-nums">{count}</span>
      </div>

      {/* the shelf */}
      <div className="relative">
        {/* scroll fade masks */}
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-onyx to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-onyx to-transparent z-10 pointer-events-none" />

        {/* items on the shelf */}
        <div className="flex gap-3 overflow-x-auto scrollbar-none pb-5 px-1">
          {children}
        </div>

        {/* shelf surface */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.08]" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal/50 via-sage/30 to-teal/50 rounded-full" />

        {/* shelf glow */}
        <div className="absolute -bottom-1 left-[10%] right-[10%] h-[6px] bg-gradient-to-r from-transparent via-sage/10 to-transparent blur-sm rounded-full" />
      </div>
    </div>
  )
}
