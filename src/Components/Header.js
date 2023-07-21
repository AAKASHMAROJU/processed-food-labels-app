import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <Link to="/">Home Page</Link> <br />
      <Link to="/about">About Page</Link> <br />
      <Link to="/contact">Contact Page</Link> <br />
      <Link to="/services">Services Page</Link>
    </div>
  )
}

export default Header
