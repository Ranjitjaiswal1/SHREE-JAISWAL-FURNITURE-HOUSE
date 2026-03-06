import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const whatsappMessage = `
New Inquiry from Website:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Category: ${formData.category}
Message: ${formData.message}
    `.trim()
    
    const whatsappUrl = `https://wa.me/919102163272?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({ name: '', phone: '', email: '', category: '', message: '' })
    alert('Redirecting to WhatsApp...')
  }

  return (
    <>
      <section className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch with us for any inquiries</p>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>We'd love to hear from you. Reach out to us for any questions about our products or to place an order.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h3>Phone</h3>
                    <p><a href="tel:+919102163272">+91 9102163272</a></p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">💬</div>
                  <div>
                    <h3>WhatsApp</h3>
                    <p><a href="https://wa.me/919102163272" target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a></p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <h3>Email</h3>
                    <p><a href="mailto:sunil9102163@gmail.com">sunil9102163@gmail.com</a></p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h3>Address</h3>
                    <p>Raj Mandir, Bigu Hotel K Bagal Me<br/>Ghorasahan, East Champaran<br/>Bihar 845303</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="inquiry-form">
              <h2>Send Us an Inquiry</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="category">Product Category</label>
                  <select 
                    id="category" 
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="">Select a category</option>
                    <option value="Beds">Beds</option>
                    <option value="Sofa Sets">Sofa Sets</option>
                    <option value="Dining Tables">Dining Tables</option>
                    <option value="Wardrobes">Wardrobes</option>
                    <option value="Office Furniture">Office Furniture</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn">Send Inquiry</button>
              </form>
            </div>
          </div>

          <div className="map-section">
            <h2>Find Us Here</h2>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps?q=Raj+Mandir+Ghorasahan+East+Champaran+Bihar+845303&output=embed"
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <p className="map-note">Location: Raj Mandir, Bigu Hotel K Bagal Me, Ghorasahan, East Champaran, Bihar 845303</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
