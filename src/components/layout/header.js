// header contains navbar
import React from 'react'
import {Link} from 'gatsby'

const Header = () => {
  return (
    <header>
      <Link to='/' >Jenny Shaw</Link>
      <ul style={{liststyle: 'none', float: 'right'}}>
        <Link to='/about/'>About</Link>
        <Link to='/portfolio/'>Code</Link>
        <Link to='/blog/'>Scribbles</Link>
        <Link to='/contact/'>Contact</Link>
      </ul>
    </header>
  )
}

export default Header;