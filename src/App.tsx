import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import CTA from './components/CTA'
import Form from './components/Form'

function App() {
  const products = [
    { 
      id: 1, 
      name: 'Skate Profissional', 
      price: 499.90, 
      description: 'Deck de maple canadense com grip tape premium.',
      image: '/assets/skate-pro.webp' 
    },
    { 
      id: 2, 
      name: 'Skate Iniciante', 
      price: 299.90, 
      description: 'Perfeito para quem está começando no mundo do skate.',
      image: '/assets/skate-iniciante.webp' 
    },
    { 
      id: 3, 
      name: 'Skate Street', 
      price: 399.90, 
      description: 'Ideal para manobras urbanas e tricks.',
      image: '/assets/skate-street.webp' 
    }
  ]

  return (
    <div className="app">
      <Hero 
        title="Domine as Ruas"
        subtitle="Skates profissionais para quem leva o skate a sério"
        ctaText="Ver Produtos"
      />
      
      <section id="produtos" className="products-section">
        <h2>Nossos Skates</h2>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </section>

      <CTA text="Quer saber mais?" href="#contato" variant="primary" />
      
      <section id="contato" className="contact-section">
        <Form />
      </section>
    </div>
  )
}

export default App
