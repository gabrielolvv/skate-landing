import React from 'react'
import '../styles/App.css'

interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <a href="#produtos" className="cta-button hero-cta">
          {ctaText}
        </a>
      </div>
    </section>
  )
}

export default Hero
