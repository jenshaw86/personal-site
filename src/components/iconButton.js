import React from 'react';
import {Button, Icon} from 'semantic-ui-react'

const IconButton = ({icon}) => (
  <>
    <Button icon>
      <Icon name={icon} />
    </Button>
  </>
)

export default IconButton;