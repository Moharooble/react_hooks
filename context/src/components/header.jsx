import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <Link to='/'>Logo</Link>
        <br />
        <Link to='info'>personal info</Link>
      
    </div>
  )
}

export default Header
