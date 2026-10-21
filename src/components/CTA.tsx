import React from 'react'
import '../styles/App.css'

interface CTAProps {
  text: string
  href?: string
  variant?: 'primary' | 'secondary'
}

export const CTA: React.FC<CTAProps> = ({ text, href, variant = 'primary' }) => {
  if (href) {
    return <a href={href} className={`cta-button cta-${variant}`}>{text}</a>
  }
  
  return (
    <button type="button" className={`cta-button cta-${variant}`}>
      {text}
    </button>
  )
}

export default CTA
