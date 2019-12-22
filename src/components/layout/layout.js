import React from 'react'
import Header from './header'
import Footer from './footer'
import NavArrows from '../navigation/navArrows'

const Layout = (props) => {
  return (
    <div>
      <Header />
      <NavArrows left={props.left} right={props.right}>
        {props.children}
      </NavArrows>
      <Footer />
    </div>
  )
}

export default Layout