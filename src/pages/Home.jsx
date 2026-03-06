import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Shree Jaiswal Furniture House</h1>
          <p>Your trusted destination for quality furniture in Ghorasahan, East Champaran</p>
          <Link to="/products" className="btn">Explore Our Collection</Link>
        </div>
      </section>

      <section className="highlights">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="highlight-grid">
            <div className="highlight-card">
              <div className="icon">🛋️</div>
              <h3>Premium Quality</h3>
              <p>Handpicked furniture made with finest materials</p>
            </div>
            <div className="highlight-card">
              <div className="icon">💰</div>
              <h3>Best Prices</h3>
              <p>Competitive pricing without compromising quality</p>
            </div>
            <div className="highlight-card">
              <div className="icon">🚚</div>
              <h3>Delivery Available</h3>
              <p>Safe delivery to your doorstep</p>
            </div>
            <div className="highlight-card">
              <div className="icon">⭐</div>
              <h3>Trusted Service</h3>
              <p>Years of experience serving the community</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <h2>Featured Categories</h2>
          <div className="category-grid">
            <div className="category-card">
              <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&h=400&fit=crop" alt="Beds" />
              <h3>Beds</h3>
              <p>Comfortable and stylish beds for your bedroom</p>
            </div>
            <div className="category-card">
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=400&fit=crop" alt="Sofa Sets" />
              <h3>Sofa Sets</h3>
              <p>Elegant sofas for your living room</p>
            </div>
            <div className="category-card">
              <img src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&h=400&fit=crop" alt="Dining Tables" />
              <h3>Dining Tables</h3>
              <p>Beautiful dining sets for family gatherings</p>
            </div>
            <div className="category-card">
              <img src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&h=400&fit=crop" alt="Wardrobes" />
              <h3>Wardrobes</h3>
              <p>Spacious storage solutions</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
