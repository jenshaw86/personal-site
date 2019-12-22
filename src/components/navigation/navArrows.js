import React from 'react';
import NavButton from './navButton'

const NavArrows = props => (
  <>
    <NavButton dir='left' page={props.left} />
    {props.children}
    <NavButton dir='right' page={props.right} />
  </>
)

export default NavArrows;