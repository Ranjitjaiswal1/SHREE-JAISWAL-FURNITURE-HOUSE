import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const isActive = (path) => location.pathname === path ? 'active' : ''

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Shree Jaiswal Furniture House</div>
        
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <li><Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link></li>
          <li><Link to="/products" className={isActive('/products')} onClick={closeMenu}>Products</Link></li>
          <li><Link to="/about" className={isActive('/about')} onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/gallery" className={isActive('/gallery')} onClick={closeMenu}>Gallery</Link></li>
          <li><Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
