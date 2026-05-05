import React from 'react'
export default function SectionHeader({ title, subtitle, centered = true, light = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${light ? 'bg-white/10 text-white' : 'bg-primary-50 text-primary-600'}`}>
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        {subtitle}
      </div>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
    </div>
  )
}