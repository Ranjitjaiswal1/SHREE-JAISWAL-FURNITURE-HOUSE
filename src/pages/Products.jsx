import { Link } from 'react-router-dom'

function Products() {
  const categories = [
    {
      title: '🛏️ Beds',
      items: [
        { name: 'Single Bed', desc: 'Comfortable single bed with storage', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop' },
        { name: 'Double Bed', desc: 'Spacious double bed with elegant design', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop&q=80' },
        { name: 'King Size Bed', desc: 'Luxurious king size bed', img: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&h=300&fit=crop' }
      ]
    },
    {
      title: '🛋️ Sofa Sets',
      items: [
        { name: '3 Seater Sofa', desc: 'Comfortable 3 seater sofa set', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop' },
        { name: 'L-Shape Sofa', desc: 'Modern L-shaped sofa for living room', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=300&fit=crop' },
        { name: 'Recliner Sofa', desc: 'Luxury recliner sofa set', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop' }
      ]
    },
    {
      title: '🍽️ Dining Tables',
      items: [
        { name: '4 Seater Dining Set', desc: 'Perfect for small families', img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop' },
        { name: '6 Seater Dining Set', desc: 'Ideal for family gatherings', img: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=400&h=300&fit=crop' },
        { name: '8 Seater Dining Set', desc: 'Spacious dining for large families', img: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400&h=300&fit=crop' }
      ]
    },
    {
      title: '👔 Wardrobes',
      items: [
        { name: '2 Door Wardrobe', desc: 'Compact storage solution', img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=300&fit=crop' },
        { name: '3 Door Wardrobe', desc: 'Spacious wardrobe with mirror', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop' },
        { name: 'Sliding Wardrobe', desc: 'Modern sliding door wardrobe', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop' }
      ]
    },
    {
      title: '💼 Office Furniture',
      items: [
        { name: 'Office Desk', desc: 'Ergonomic office desk', img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=300&fit=crop' },
        { name: 'Office Chair', desc: 'Comfortable office chair', img: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=300&fit=crop' },
        { name: 'Filing Cabinet', desc: 'Secure storage for documents', img: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=400&h=300&fit=crop' }
      ]
    }
  ]

  return (
    <>
      <section className="page-header">
        <h1>Our Products</h1>
        <p>Explore our wide range of furniture collections</p>
      </section>

      <section className="products">
        <div className="container">
          {categories.map((category, idx) => (
            <div key={idx} className="product-category">
              <h2>{category.title}</h2>
              <div className="product-grid">
                {category.items.map((item, i) => (
                  <div key={i} className="product-card">
                    <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="cta-section">
            <h2>Interested in Our Products?</h2>
            <p>Contact us for pricing and availability</p>
            <Link to="/contact" className="btn">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
