import React from 'react'
import '../styles/App.css'

interface Product {
  id?: number
  name: string
  price: number
  description: string
  image: string
}

export const ProductCard: React.FC<Product> = ({ 
  name, 
  price, 
  description, 
  image 
}) => {
  const formatPrice = (value: number) => 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)

  return (
    <article className="product-card">
      <img src={image} alt={`Skate ${name}`} loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none' }} />
      <h3 className="product-name">{name}</h3>
      <p className="product-description">{description}</p>
      <div className="product-price">{formatPrice(price)}</div>
      <a href="#contato" className="cta-button product-cta">Comprar Agora</a>
    </article>
  )
}

export default ProductCard
