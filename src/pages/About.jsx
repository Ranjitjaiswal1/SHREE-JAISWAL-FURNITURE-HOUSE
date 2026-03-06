import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <section className="page-header">
        <h1>About Us</h1>
        <p>Our story of quality and trust</p>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>Welcome to Shree Jaiswal Furniture House, your trusted furniture destination in Ghorasahan, East Champaran. We have been serving the community with dedication and commitment to quality for years.</p>
            <p>Located conveniently at Raj Mandir, near Bigu Hotel in Ghorasahan, we take pride in offering a wide range of furniture that combines style, comfort, and durability. Our mission is to help you create beautiful spaces that reflect your personality and meet your needs.</p>
          </div>

          <div className="about-section">
            <h2>What We Offer</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>🏠 Home Furniture</h3>
                <p>Complete range of beds, sofas, dining tables, and wardrobes for every room in your home</p>
              </div>
              <div className="feature-item">
                <h3>💼 Office Furniture</h3>
                <p>Professional office furniture including desks, chairs, and storage solutions</p>
              </div>
              <div className="feature-item">
                <h3>✨ Quality Assurance</h3>
                <p>Every piece is carefully selected and inspected to ensure the highest quality standards</p>
              </div>
              <div className="feature-item">
                <h3>🤝 Customer Service</h3>
                <p>Personalized service to help you find the perfect furniture for your space</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Ready to Transform Your Space?</h2>
            <p>Visit us today or get in touch for inquiries</p>
            <Link to="/contact" className="btn">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
