import React from 'react';
import {Button, Icon} from 'semantic-ui-react'

// Include dev.to icon from fontawesome
{/* <i class="fab fa-dev"></i> */}

const IconButton = props => (
  <>
    <a href={props.url}>
      <Button icon>
        <Icon name={props.icon} />
      </Button>
    </a>
  </>
)


export default IconButton;