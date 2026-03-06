import { Link } from 'react-router-dom'

function Gallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&h=400&fit=crop', title: 'Bedroom Collection' },
    { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=400&fit=crop', title: 'Living Room Sofas' },
    { src: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&h=400&fit=crop', title: 'Dining Sets' },
    { src: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&h=400&fit=crop', title: 'Wardrobes' },
    { src: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&h=400&fit=crop', title: 'Office Furniture' },
    { src: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=400&fit=crop', title: 'Chairs Collection' },
    { src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=500&h=400&fit=crop', title: 'Tables' },
    { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&h=400&fit=crop', title: 'Storage Solutions' },
    { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop', title: 'Modern Designs' }
  ]

  return (
    <>
      <section className="page-header">
        <h1>Our Gallery</h1>
        <p>Browse through our beautiful furniture collection</p>
      </section>

      <section className="gallery">
        <div className="container">
          <div className="gallery-grid">
            {images.map((image, idx) => (
              <div key={idx} className="gallery-item">
                <img src={image.src} alt={image.title} />
                <div className="gallery-overlay">
                  <h3>{image.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-section">
            <h2>Like What You See?</h2>
            <p>Visit our showroom or contact us for more details</p>
            <Link to="/contact" className="btn">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
