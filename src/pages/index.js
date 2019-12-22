import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout/layout'
import {Button, Icon} from 'semantic-ui-react'

const IndexPage = () => (
  <Layout>
    <h1>Jenny Shaw</h1>
    <p>Full-Stack Web Developer</p>
    <ul>
      <li>LinkedIn</li>
      <li>GitHub</li>
      <li>Twitter</li>
    </ul>
    <Link to='about'>
      <Button animated>
        <Button.Content visible>
          <Icon name='arrow right' />
        </Button.Content>
        <Button.Content hidden>About</Button.Content>
      </Button>
    </Link>
  </Layout>
)

export default IndexPage
