import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Button({ to, children, variant = 'primary', className = '', external = false }) {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-outline'
  
  if (external) {
    return (
      <a href={to} className={`${baseClasses} ${className}`} target="_blank" rel="noopener noreferrer">
        {children}
        <ArrowRight className="w-4 h-4" />
      </a>
    )
  }

  return (
    <Link to={to} className={`${baseClasses} ${className}`}>
      {children}
      <ArrowRight className="w-4 h-4" />
    </Link>
  )
}