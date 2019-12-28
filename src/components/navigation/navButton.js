import React from 'react';
import {Link} from 'gatsby';
import {Button, Icon} from 'semantic-ui-react'

const NavButton = props => (
  <Link to={`/${props.page}/`}>
    <Button animated >
      <Button.Content visible>
        <Icon name={`arrow ${props.dir}`} />
      </Button.Content>
      <Button.Content hidden>{`/${props.page}/`}</Button.Content>
    </Button>
  </Link>
)


export default NavButton;