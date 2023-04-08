import React from 'react'
import "../../Component/Header/Header.css";
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <nav className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/orderReview'>Order Review</Link>
      <Link to='/checkout'>Chekout</Link>
       <Link to='/grandPa'>GrandPa</Link>
      <Link to='/contact'>Contact</Link>

    </nav>
  )
}

export default Header
